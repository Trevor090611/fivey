import { getOrbiesBalance, spendOrbies } from './orbies-wallet.js?v=grogy1';
import { briefExcerpt, courseNames, findPracticeSources, findSources, resolveSiteRequest, siteIntent } from './grogy-site.js?v=5';
import { connectClient } from './auth-client.js';
import { authConfig } from './auth-config.js';
import { localChatMessages } from './grogy-conversation.js?v=2';
import { articleSummary } from './article-summary.js?v=2';
const questionCost = 1;
// Summarizing a blog article costs 2 Orbies, paid each time a summary is written.
const summaryCost = 2;
const costLabel = questionCost + (questionCost === 1 ? ' Orbie' : ' Orbies');
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
        <button class="chat-send" type="submit" aria-label="Send" aria-describedby="grogy-cost">Send <span id="grogy-cost" class="chat-cost">${costLabel}</span></button>
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

const pageParams = new URLSearchParams(location.search);
const pageCourse = pageParams.get('course');
const siteContext = { course: pageCourse, pageCourse,
  pageUnit: location.pathname.endsWith('/practice.html') ? Number(pageParams.get('unit')) : undefined };
let siteFollowUp;
let autopilot;
let introduced = false;
let clientPromise;
let pending;
const messages = [];
const geminiEndpoint = new URL('/functions/v1/fivey-gemini', authConfig.url);
let activePractice;
let modelWorker;

function toggle(isOpen) {
  panel.hidden = !isOpen;
  if (isOpen && !introduced) {
    introduced = true;
    addMessage('Grogy', 'Hi, I’m Grogy, your AP tutor on Fivey. I can chat, explain AP topics, and use Fivey’s study material when it helps. Ask for a quiz on a unit to open its practice questions. If you need to find something on Fivey, I can show you which buttons to click or take you there with your permission.');
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
  if (speaker === 'You' || speaker === 'Grogy') {
    messages.push({ role: speaker === 'You' ? 'user' : 'assistant', content: text });
  }
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
  finish('You need ' + costLabel + ' to ask Grogy.');
}

async function payForReply(account) {
  if (await spendOrbies(account, questionCost)) return true;
  insufficientOrbies();
  return false;
}

function practiceReference(text) {
  const numbered = text.match(/\b(?:question\s*(?:number\s*)?#?\s*|q\s*#?\s*)(\d+)\b/i)
    ?? text.match(/(?:answer|explain|solve)\s+#(\d+)\b/i);
  const number = numbered ? Number(numbered[1]) : undefined;
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

function askLocalModel(context) {
  if (!navigator.gpu) return Promise.resolve(null);
  modelWorker ??= new Worker(new URL('./fivey-worker.js', import.meta.url), { type: 'module' });
  return new Promise(resolve => {
    const worker = modelWorker;
    const timer = setTimeout(() => settle(null), 110000);
    function settle(answer) {
      clearTimeout(timer);
      worker.removeEventListener('message', onMessage);
      worker.removeEventListener('error', onError);
      if (!answer) {
        worker.terminate();
        modelWorker = undefined;
      }
      resolve(answer);
    }
    function onError() {
      settle(null);
    }
    function onMessage({ data }) {
      if (data.type === 'answer') settle(data.answer);
      if (data.type === 'error' || data.type === 'unsupported') settle(null);
    }
    worker.addEventListener('message', onMessage);
    worker.addEventListener('error', onError);
    try {
      worker.postMessage(localChatMessages(context, messages));
    } catch {
      settle(null);
    }
  });
}

async function generateReply(context, session, actionOnly = false) {
  try {
    const response = await fetch(geminiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: authConfig.key,
        Authorization: 'Bearer ' + session.access_token
      },
      body: JSON.stringify({ messages, ...context }),
      signal: AbortSignal.timeout(actionOnly ? 3500 : 34000)
    });
    const result = await response.json();
    if (response.ok && typeof result.answer === 'string' && result.answer.trim()) return result.answer.trim();
  } catch {
    // The browser model can still reply if the hosted request fails.
  }
  return actionOnly ? null : askLocalModel({ ...context, course: courseNames[context.course] });
}

function optionalSources(question, client) {
  let timer;
  return Promise.race([
    Promise.all([
      findPracticeSources(question, pageCourse).catch(() => []),
      findSources(question, client, pageCourse).catch(() => [])
    ]).then(([practice, notes]) => [...practice, ...notes].slice(0, 2)),
    new Promise(resolve => { timer = setTimeout(() => resolve([]), 1800); })
  ]).finally(() => clearTimeout(timer));
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

async function ask(review) {
  const draft = input.value.trim();
  if (pending || (!draft && !review)) return;

  const accepted = !review && autopilot && /^(?:yes(?:,? please)?|take me there|go ahead|open it|sure|okay|ok)[.!]?$/i.test(draft);
  const declined = !review && autopilot && /^(?:no(?:,? thanks)?|stay here|cancel)[.!]?$/i.test(draft);
  const confirmedDestination = accepted ? autopilot.destination : null;
  const newTopic = !review && /^new topic(?:[\s:—-]|$)/i.test(draft);
  const questionText = newTopic ? draft.replace(/^new topic[\s:—-]*/i, '') : draft;
  const intent = review || accepted || declined ? '' : siteIntent(questionText);
  const reference = review || intent || accepted || declined ? null : practiceReference(questionText);
  const clarification = !review && siteFollowUp &&
    /^(?:ap\s+)?(?:bio(?:logy)?|chem(?:istry)?|environmental science|apes|physics(?:\s*1)?|psych(?:ology)?|calc(?:ulus)?(?:\s*ab)?|macro(?:economics)?|unit\s*#?\d+|\d+)(?:\s+unit\s*#?\d+)?[.!]?$/i.test(draft);
  const previousSiteRequest = siteFollowUp;
  clearAutopilot();
  siteFollowUp = undefined;

  pending = { draft };
  setBusy(true);
  setStatus('');
  try {
    const { client, session } = await getChatSession();
    const account = session.user.id;
    if (!accepted && !declined && getOrbiesBalance(account) < questionCost) return insufficientOrbies();
    addMessage('You', review ? 'Explain the correct answer to this practice question.' : draft);
    if (!review) input.value = '';

    if (newTopic || (reference && !reference.question)) activePractice = undefined;
    const checkedQuestion = review ?? reference?.question;
    if (checkedQuestion) activePractice = checkedQuestion;
    const route = (intent || clarification)
      ? await resolveSiteRequest(intent || previousSiteRequest.kind,
        intent ? questionText : previousSiteRequest.query + ' ' + questionText,
        siteContext, intent ? '' : questionText).catch(() => null)
      : null;
    const isAction = Boolean(accepted || declined || route);
    const sources = !isAction && !activePractice && questionText
      ? await optionalSources(questionText, client)
      : [];
    const answer = await generateReply({
      course: activePractice?.course ?? pageCourse,
      practice: activePractice,
      sources: sources.map(({ title, excerpt }) => ({ title, excerpt }))
    }, session, isAction);

    if (accepted) {
      finish('');
      location.assign(confirmedDestination.href);
      return;
    }
    if (declined) {
      addMessage('Grogy', 'Okay, we’ll stay here.');
      finish('');
      return;
    }
    if (route?.course) siteContext.course = route.course;
    if (route?.clarify) {
      siteFollowUp = { kind: intent || previousSiteRequest.kind,
        query: intent ? questionText : (previousSiteRequest.query + ' ' + questionText).slice(-1500) };
      addMessage('Grogy', route.clarify);
    } else if (route) {
      if (!await payForReply(account)) return;
      if (route.kind === 'quiz') location.assign(route.href);
      else offerAutopilot(route);
    } else if (answer) {
      if (!await payForReply(account)) return;
      const message = addMessage('Grogy', answer);
      if (sources.length) showSources(sources, message);
    } else if (activePractice) {
      addMessage('Grogy', 'The model couldn’t reply right now. Here’s Fivey’s answer key:\n\n' + formatPracticeAnswer(activePractice));
    } else {
      fail('Grogy couldn’t reach a model right now. Try again in a moment.');
      return;
    }
    finish('');
  } catch (error) {
    fail(error?.message === 'Sign in again to ask Grogy.' ? error.message :
      'Grogy couldn’t complete the request. Check your connection and try again.');
  }
}

// Keeps only the bullet points of a reply, written as "• " lines. A reply with fewer than two
// (a refusal or a paragraph) doesn't count as a summary, so nothing is charged for it.
function bulletPoints(answer) {
  const marker = /^(?:[•\-*]|\d+[.)])\s+/;
  const markers = /^(?:(?:[•\-*]|\d+[.)])\s+)+/;
  const points = (answer ?? '').split('\n').map(line => line.trim()).filter(line => marker.test(line))
    .map(line => line.replace(markers, '').replace(/^\*\*(.+)\*\*$/, '$1').trim())
    // A bullet that is only a question (often the article's own heading) isn't a main point.
    .filter(point => point && !point.endsWith('?'))
    .map(point => '• ' + point);
  return points.length >= 2 ? points.join('\n') : '';
}

// Sends the article in chunks under the 8,000-character message limit, then asks for the summary.
function articleMessages(title, text) {
  const chunks = text.match(/[\s\S]{1,7000}/g) ?? [];
  return [
    ...chunks.map((chunk, index) => ({ role: 'user', content: (index === 0 ? 'Blog article: ' + title + '\n\n' : '') + chunk })),
    { role: 'user', content: 'Summarize the main points of the blog article above in point form: 4 to 8 short bullet points, each on its own line starting with "• ". Use only what the article says.' }
  ];
}

// Writes a point-form summary of a Developer's Blog article. The 2 Orbies are taken only
// after Grogy has written the summary, so a failed attempt costs nothing.
async function summarizeArticle({ title, text, summary: overview = '' }) {
  pending = { draft: input.value };
  setBusy(true);
  setStatus('');
  try {
    const { session } = await getChatSession();
    const account = session.user.id;
    const balance = getOrbiesBalance(account);
    if (balance < summaryCost) {
      finish('Summarizing an article costs ' + summaryCost + ' Orbies. You have ' + balance + '.');
      return;
    }
    addMessage('You', 'Summarize this article: ' + title);
    let summary = '';
    try {
      const response = await fetch(geminiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: authConfig.key,
          Authorization: 'Bearer ' + session.access_token
        },
        body: JSON.stringify({ messages: articleMessages(title, text) }),
        signal: AbortSignal.timeout(34000)
      });
      const result = await response.json();
      if (response.ok && typeof result.answer === 'string') summary = result.answer.trim();
    } catch {
      summary = '';
    }
    summary = bulletPoints(summary);
    // Without the hosted model, use the article's own key sentences and bullet points, so the
    // summary always matches what the article says.
    const fromArticle = !summary;
    if (fromArticle) summary = articleSummary(title, text, overview);
    if (!summary) {
      finish('Grogy couldn’t find enough text in this article to summarize, so no Orbies were used.');
      return;
    }
    if (!await spendOrbies(account, summaryCost)) {
      finish('Summarizing an article costs ' + summaryCost + ' Orbies. You don’t have enough Orbies now.');
      return;
    }
    addMessage('Grogy', 'Here is a summary of “' + title + '”' + (fromArticle ? ', section by section, in the article’s own words' : '') + ':\n\n' + summary);
    finish('');
  } catch (error) {
    finish(error?.message === 'Sign in again to ask Grogy.' ? error.message :
      'Grogy couldn’t summarize the article. Check your connection and try again.');
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

document.addEventListener('fivey:summarize-article', ({ detail }) => {
  if (typeof detail?.title !== 'string' || typeof detail?.text !== 'string' || !detail.text.trim()) return;
  toggle(true);
  if (pending) {
    addMessage('Grogy', 'I’m still working on the current reply. Click Summarize this Article again when it finishes.');
    return;
  }
  summarizeArticle(detail);
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
