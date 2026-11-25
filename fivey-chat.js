import { getOrbiesBalance, spendOrbies } from './orbies-wallet.js?v=grogy1';
import { briefExcerpt, courseNames, findSources, resolveSiteRequest, siteIntent } from './grogy-site.js?v=3';
import { connectClient } from './auth-client.js';
const widget = document.createElement('aside');
widget.className = 'fivey-chat';
widget.setAttribute('aria-label', 'Grogy AP tutor');
widget.innerHTML = `
  <button class="chat-open" type="button" aria-expanded="false" aria-controls="fivey-panel">Ask Grogy</button>
  <section class="chat-panel" id="fivey-panel" aria-labelledby="fivey-chat-title" hidden>
    <div class="chat-header"><strong id="fivey-chat-title">Grogy · AP tutor</strong><button class="chat-close" type="button" aria-label="Close Grogy">×</button></div>
    <div class="chat-log" role="log" aria-label="Conversation" tabindex="0">
      <div class="chat-typing" role="status" aria-label="Grogy is thinking" hidden>
        <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
      </div>
    </div>
    <form class="chat-form">
      <label for="fivey-question">Your question</label>
      <textarea id="fivey-question" maxlength="1000" rows="3" placeholder="Ask about a topic or request a quiz"></textarea>
      <div class="chat-actions">
        <label class="chat-enter-option"><input type="checkbox"> Press Enter to send</label>
        <button class="chat-send" type="submit" aria-label="Send" aria-describedby="grogy-cost">Send <span id="grogy-cost" class="chat-cost">2 Orbies</span></button>
      </div>
    </form>
    <p class="chat-status" role="status" hidden></p>
  </section>`;
document.body.append(widget);

const open = widget.querySelector('.chat-open');
const panel = widget.querySelector('.chat-panel');
const close = widget.querySelector('.chat-close');
const input = widget.querySelector('textarea');
const form = widget.querySelector('form');
const send = widget.querySelector('.chat-send');
const enterToSend = widget.querySelector('.chat-enter-option input');
const log = widget.querySelector('.chat-log');
const status = widget.querySelector('.chat-status');
const typing = widget.querySelector('.chat-typing');
const questionCost = 2;

const pageParams = new URLSearchParams(location.search);
const pageCourse = pageParams.get('course');
const siteContext = { course: pageCourse, pageCourse,
  pageUnit: location.pathname.endsWith('/practice.html') ? Number(pageParams.get('unit')) : undefined };
let siteFollowUp;
let autopilot;
let introduced = false;
let clientPromise;
let pending;
let lastPracticeNumber;

function toggle(isOpen) {
  panel.hidden = !isOpen;
  if (isOpen && !introduced) {
    introduced = true;
    addMessage('Grogy', 'Hi, I’m Grogy, your AP tutor on Fivey. I give short answers from Fivey’s notes, practice explanations, articles, and blog. Ask for a quiz on a unit to open its practice questions. If you need to find something on Fivey, I can show you which buttons to click or take you there with your permission.');
  }
  open.hidden = isOpen;
  open.setAttribute('aria-expanded', String(isOpen));
  (isOpen ? (input.disabled ? close : input) : open).focus();
}
open.addEventListener('click', () => toggle(true));
close.addEventListener('click', () => toggle(false));
panel.addEventListener('keydown', event => {
  if (event.key === 'Escape') toggle(false);
});

function appendFormattedReply(message, text) {
  const tokens = text.match(/\*\*|[()]|[^*()]+|\*/g) ?? [];
  const openParentheses = [];
  const matchedParentheses = new Set();
  let boldMarkers = 0;
  for (const [index, token] of tokens.entries()) {
    if (token === '**') boldMarkers++;
    if (token === '(') openParentheses.push(index);
    if (token === ')' && openParentheses.length) {
      matchedParentheses.add(openParentheses.pop());
      matchedParentheses.add(index);
    }
  }

  let bold = false;
  let italics = 0;
  let segment = '';
  let segmentBold = false;
  let segmentItalic = false;
  function appendSegment() {
    if (!segment) return;
    let content = document.createTextNode(segment);
    if (segmentItalic) {
      const emphasis = document.createElement('em');
      emphasis.append(content);
      content = emphasis;
    }
    if (segmentBold) {
      const strong = document.createElement('strong');
      strong.append(content);
      content = strong;
    }
    message.append(content);
    segment = '';
  }

  for (const [index, token] of tokens.entries()) {
    if (token === '**') {
      if (bold || boldMarkers > 1) bold = !bold;
      boldMarkers--;
      continue;
    }
    const matched = matchedParentheses.has(index);
    if (matched && token === '(') italics++;
    if (segmentBold !== bold || segmentItalic !== (italics > 0)) appendSegment();
    segmentBold = bold;
    segmentItalic = italics > 0;
    segment += token;
    if (matched && token === ')') italics--;
  }
  appendSegment();
}

function addMessage(speaker, text) {
  const message = document.createElement('div');
  message.className = 'chat-message';
  message.dataset.speaker = speaker;
  const label = document.createElement('strong');
  label.className = 'chat-speaker';
  label.textContent = speaker;
  message.append(label);
  if (speaker === 'Grogy') appendFormattedReply(message, text);
  else message.append(text);
  typing.before(message);
  log.scrollTop = log.scrollHeight;
  return message;
}

function setBusy(busy) {
  send.disabled = input.disabled = busy;
  typing.hidden = !busy;
  if (busy) log.scrollTop = log.scrollHeight;
}

function showSources(sources, message) {
  const list = document.createElement('ol');
  list.className = 'chat-sources';
  list.setAttribute('aria-label', 'Relevant Fivey sources');
  for (const { title, href, excerpt } of sources) {
    const item = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = title;
    anchor.href = href;
    const quote = document.createElement('p');
    quote.textContent = excerpt;
    item.append(quote, anchor);
    list.append(item);
  }
  message.append(list);
  log.scrollTop = log.scrollHeight;
}

function setStatus(message) {
  status.hidden = !message;
  status.textContent = message;
}

function finish(message) {
  pending = undefined;
  setBusy(false);
  setStatus(message);
  if (!panel.hidden) input.focus();
}

function fail(message) {
  if (pending) input.value = pending.draft;
  finish(message);
}

async function getChatSession() {
  clientPromise ??= connectClient().catch(error => {
    clientPromise = undefined;
    throw error;
  });
  const client = await clientPromise;
  const { data, error } = await client.auth.getSession();
  if (error || !data.session) throw new Error('Sign in again to ask Grogy.');
  return { client, session: data.session };
}

function insufficientOrbies() {
  if (pending) input.value = pending.draft;
  finish('You need 2 Orbies to ask Grogy.');
}

async function payForReply(account) {
  if (await spendOrbies(account, questionCost)) return true;
  insufficientOrbies();
  return false;
}

function practiceReference(text) {
  const numbered = text.match(/\b(?:question\s*(?:number\s*)?#?\s*|q\s*#?\s*)(\d+)\b/i)
    ?? text.match(/(?:answer|explain|solve)\s+#(\d+)\b/i);
  const followUp = /^(?:why|can you explain|explain more|how so)[?.!\s]*$/i.test(text);
  const number = numbered ? Number(numbered[1]) : followUp ? lastPracticeNumber : undefined;
  if (!number) return null;
  const detail = { number };
  document.dispatchEvent(new CustomEvent('fivey:read-practice-question', { detail }));
  return detail;
}

function formatPracticeAnswer(question) {
  const why = briefExcerpt(question.whyWrong || question.explanation);
  const title = question.number ? 'Question ' + question.number + ' · ' : '';
  return title + '**Correct answer:** ' + question.correct +
    (why ? '\n\n**Why:** ' + why : '') + '\n\nSource: Fivey’s practice answer key.';
}

function clearAutopilot() {
  autopilot?.controls.remove();
  autopilot = undefined;
}

function offerAutopilot(destination) {
  const message = addMessage('Grogy', 'Click: ' + destination.steps + '.\nWould you like me to take you there?');
  const controls = document.createElement('span');
  controls.className = 'chat-navigation';
  for (const [label, openDestination] of [['Yes, take me there', true], ['Stay here', false]]) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.addEventListener('click', () => {
      clearAutopilot();
      if (openDestination) location.assign(destination.href);
      else {
        addMessage('Grogy', 'Okay, we’ll stay here.');
        input.focus();
      }
    });
    controls.append(button);
  }
  message.append(controls);
  autopilot = { destination, controls };
  log.scrollTop = log.scrollHeight;
}

async function handleSiteRequest(text, explicitKind, account) {
  const kind = explicitKind || siteFollowUp.kind;
  const query = explicitKind ? text : siteFollowUp.query + ' ' + text;
  siteFollowUp = undefined;
  const result = await resolveSiteRequest(kind, query, siteContext, explicitKind ? '' : text);
  if (result?.course) siteContext.course = result.course;
  if (result?.clarify) {
    siteFollowUp = { kind, query: query.slice(-1500) };
    addMessage('Grogy', result.clarify);
  } else if (result) {
    if (!await payForReply(account)) return;
    if (result.kind === 'quiz') {
      location.assign(result.href);
    } else {
      offerAutopilot(result);
    }
  } else {
    addMessage('Grogy', 'Tell me the page or course you want to open. For example, the Developer’s Personal Blog or AP Chemistry Quick Review Notes.');
  }
  finish('');
}

async function ask(review) {
  const draft = input.value.trim();
  if (pending || (!draft && !review)) return;

  if (!review && autopilot && /^(?:yes(?:,? please)?|take me there|go ahead|open it|sure|okay|ok)[.!]?$/i.test(draft)) {
    const { destination } = autopilot;
    clearAutopilot();
    location.assign(destination.href);
    return;
  }
  if (!review && autopilot && /^(?:no(?:,? thanks)?|stay here|cancel)[.!]?$/i.test(draft)) {
    clearAutopilot();
    addMessage('You', draft);
    addMessage('Grogy', 'Okay, we’ll stay here.');
    input.value = '';
    return;
  }

  const intent = review ? '' : siteIntent(draft);
  const reference = review || intent ? null : practiceReference(draft);
  const clarification = !review && siteFollowUp &&
    /^(?:ap\s+)?(?:bio(?:logy)?|chem(?:istry)?|environmental science|apes|physics(?:\s*1)?|psych(?:ology)?|calc(?:ulus)?(?:\s*ab)?|macro(?:economics)?|unit\s*#?\d+|\d+)(?:\s+unit\s*#?\d+)?[.!]?$/i.test(draft);
  clearAutopilot();
  if (!intent && !clarification) siteFollowUp = undefined;

  pending = { draft };
  setBusy(true);
  setStatus('');
  try {
    const { client, session } = await getChatSession();
    const account = session.user.id;
    if (getOrbiesBalance(account) < questionCost) return insufficientOrbies();
    addMessage('You', review ? 'Explain the correct answer to this practice question.' : draft);
    if (!review) input.value = '';

    const checkedQuestion = review ?? reference?.question;
    if (checkedQuestion) {
      if (!await payForReply(account)) return;
      lastPracticeNumber = checkedQuestion.number ?? lastPracticeNumber;
      addMessage('Grogy', formatPracticeAnswer(checkedQuestion));
      finish('');
      return;
    }

    if (reference && document.querySelector('.progress-quiz:not([hidden])')) {
      addMessage('Grogy', 'I couldn’t find question ' + reference.number + ' in this set. Check its number or paste the question.');
      finish('');
      return;
    }
    if (reference && !/\b(?:is:|says:|reads:)\b/i.test(draft) && draft.length < 100) {
      addMessage('Grogy', 'Paste question ' + reference.number + ' or open its practice set so I can see it.');
      finish('');
      return;
    }

    if (intent || clarification) {
      await handleSiteRequest(draft, intent, account);
      return;
    }

    const sources = await findSources(draft, client, pageCourse);
    if (!sources.length) {
      addMessage('Grogy', 'I couldn’t find a matching answer on Fivey. Try naming the AP subject or unit, or ask about a question in an open practice set.');
      finish('');
      return;
    }
    if (!await payForReply(account)) return;
    showSources(sources, addMessage('Grogy', 'From Fivey:'));
    finish('');
  } catch (error) {
    fail(error?.message === 'Sign in again to ask Grogy.' ? error.message :
      'Grogy couldn’t complete the request. Check your connection and try again.');
  }
}

input.addEventListener('keydown', event => {
  if (!enterToSend.checked || event.key !== 'Enter' || event.shiftKey ||
    event.altKey || event.ctrlKey || event.metaKey || event.isComposing ||
    event.keyCode === 229 || event.defaultPrevented) return;
  event.preventDefault();
  if (!event.repeat && !send.disabled && input.value.trim()) form.requestSubmit(send);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  ask();
});

document.addEventListener('fivey:explain-answer', ({ detail }) => {
  if (!detail || !Object.hasOwn(courseNames, detail.course)) return;
  toggle(true);
  if (pending) {
    addMessage('Grogy', 'I’m still working on the current reply. Click Explain with Grogy again when it finishes.');
    return;
  }
  ask(detail);
});
