import { connectClient } from './auth-client.js';
import { authConfig } from './auth-config.js';

const subjects = {
  biology: ['AP Biology', 'biochemistry, cells, energetics, cell signaling, heredity, gene expression, evolution, ecology'],
  'environmental-science': ['AP Environmental Science', 'ecosystems, biodiversity, populations, Earth systems, land and water use, energy, air pollution, aquatic and terrestrial pollution, and global change'],
  chemistry: ['AP Chemistry', 'atomic structure, bonding, intermolecular forces, reactions, kinetics, thermodynamics, equilibria, acids and bases, electrochemistry'],
  'physics-1': ['AP Physics 1', 'kinematics, forces, energy, momentum, rotation, oscillations, fluids; use algebra rather than calculus'],
  psychology: ['AP Psychology', 'research methods, biological bases, cognition, development and learning, social psychology, personality, mental and physical health'],
  'calculus-ab': ['AP Calculus AB', 'limits, continuity, differentiation, applications of derivatives, integration, differential equations, applications of integration'],
  macroeconomics: ['AP Macroeconomics', 'economic indicators, business cycles, aggregate demand and supply, fiscal and monetary policy, growth, open economy and exchange rates']
};

const widget = document.createElement('aside');
widget.className = 'fivey-chat';
widget.setAttribute('aria-label', 'Fivey AP tutor');
widget.innerHTML = `
  <button class="chat-open" type="button" aria-expanded="false" aria-controls="fivey-panel">Ask Fivey</button>
  <section class="chat-panel" id="fivey-panel" aria-labelledby="fivey-chat-title" hidden>
    <div class="chat-header"><strong id="fivey-chat-title">Fivey · AP tutor</strong><button class="chat-close" type="button" aria-label="Close Fivey">×</button></div>
    <div class="chat-tools">
      <button class="chat-practice" type="button">Generate a practice question</button>
    </div>
    <div class="chat-log" role="log" aria-label="Conversation" tabindex="0"></div>
    <form class="chat-form">
      <label for="fivey-question">Your question</label>
      <textarea id="fivey-question" maxlength="1000" rows="2" placeholder="Ask about a topic or request a quiz"></textarea>
      <button class="chat-send" type="submit">Send</button>
    </form>
    <p class="chat-status" role="status" hidden></p>
  </section>`;
document.body.append(widget);

const open = widget.querySelector('.chat-open');
const panel = widget.querySelector('.chat-panel');
const close = widget.querySelector('.chat-close');
const input = widget.querySelector('textarea');
const form = widget.querySelector('form');
const practice = widget.querySelector('.chat-practice');
const send = widget.querySelector('.chat-send');
const log = widget.querySelector('.chat-log');
const status = widget.querySelector('.chat-status');

const pageCourse = new URLSearchParams(location.search).get('course');
const geminiEndpoint = new URL('/functions/v1/fivey-gemini', authConfig.url);
let clientPromise;
let worker;
let pending;
const history = new Map();

function toggle(isOpen) {
  panel.hidden = !isOpen;
  open.hidden = isOpen;
  open.setAttribute('aria-expanded', String(isOpen));
  (isOpen ? (input.disabled ? close : input) : open).focus();
}
open.addEventListener('click', () => toggle(true));
close.addEventListener('click', () => toggle(false));
panel.addEventListener('keydown', event => {
  if (event.key === 'Escape') toggle(false);
});

function addMessage(speaker, text) {
  const message = document.createElement('p');
  message.className = 'chat-message';
  message.dataset.speaker = speaker;
  message.textContent = speaker + ': ' + text;
  log.append(message);
  log.scrollTop = log.scrollHeight;
}

function setBusy(busy) {
  send.disabled = practice.disabled = input.disabled = busy;
}

function getWorker() {
  if (worker) return worker;
  worker = new Worker(new URL('./fivey-worker.js', import.meta.url), { type: 'module' });
  worker.addEventListener('message', ({ data }) => {
    if (data.type === 'loading') {
      const model = data.fallback ? 'compact' : 'local';
      setStatus('Preparing the ' + model + ' model… ' + data.percent + '%');
    } else if (data.type === 'fallback') {
      setStatus('Trying a smaller model for this device…');
    } else if (data.type === 'generating') {
      setStatus('Fivey is writing a reply…');
    } else if (data.type === 'answer') {
      showAnswer(data.answer);
    } else if (data.type === 'unsupported') {
      fail('This browser could not access WebGPU. Open Fivey in a WebGPU-enabled browser to use the tutor.');
    } else if (data.type === 'error') {
      console.warn('Fivey model error:', data.reason);
      fail('Fivey could not complete the request. Check your connection and device memory, then try again.');
    }
  });
  worker.addEventListener('error', () => fail('Fivey could not start. Reload the page and try again.'));
  return worker;
}

function showAnswer(answer) {
  if (pending.review && (answer.length > 950 || introducesNumbers(answer, pending.question.content))) {
    addMessage('Fivey', 'I couldn’t verify my expanded explanation. The answer key above has the checked solution.');
    finish('Review the answer key or ask Fivey a more specific follow-up.');
    return;
  }
  history.set(pending.key, [...pending.previous, pending.question, { role: 'assistant', content: answer }].slice(-4));
  addMessage('Fivey', answer);
  finish('');
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
  worker?.terminate();
  worker = undefined;
  finish(message);
}

function introducesNumbers(answer, source) {
  const numbers = text => (text.replace(/^\s*\d+[.)]\s+/gm, '').match(/\d+(?:[.,]\d+)*\s*%?/g) ?? [])
    .map(value => {
      const isPercent = value.endsWith('%');
      return String(Number(value.replace(/[,%]/g, '').trim())) + (isPercent ? '%' : '');
    });
  const provided = new Set(numbers(source));
  return numbers(answer).some(value => !provided.has(value));
}

function ask(isPractice = false, review) {
  if (pending) return;
  const course = review?.course ?? pageCourse;
  const key = Object.hasOwn(subjects, course) ? course : 'general';

  const draft = input.value.trim();
  if (!isPractice && !draft && !review) {
    input.focus();
    return;
  }

  const [name, topics] = subjects[key] ?? ['AP courses', 'the AP subject indicated by the student'];
  const system = {
    role: 'system',
    content: `You are Fivey, an AP tutor. The current course context is ${name}, covering ${topics}. If the student names another AP course, help with that course. Give clear, accurate AP-level explanations. Show reasoning and units where relevant. Ask for clarification when needed and say when unsure. Keep answers concise. For practice, write original AP-style questions and never claim they are official exam items. For multiple choice, provide four plausible choices and explain the correct answer after the student responds unless they ask for the answer now. Use plain text, clear numbering, and short paragraphs.`
  };
  let content = draft;
  if (review) {
    content = [
      'Explain the answer to this Progress Checking question using the supplied answer key.',
      'Question: ' + review.prompt,
      'My choice: ' + review.selected,
      'Correct answer: ' + review.correct,
      'Answer key explanation: ' + review.explanation,
      review.whyWrong ? 'Checked reasoning about my choice: ' + review.whyWrong : '',
      'Use the checked explanation as your only source of facts and arithmetic. Do not invent intermediate values, definitions, or a different answer. In two or three sentences of plain text, explain how the checked reasoning leads to the correct option, then contrast my selected option with that reasoning. If the checked explanation lacks a step, describe the method in words instead of guessing numbers.'
    ].join('\n');
  } else if (isPractice) {
    content = 'Write one original AP-style practice question' + (key === 'general' ? '. ' : ' for ' + name + '. ') +
      (draft ? 'Focus on this request: ' + draft : 'Pick a topic within the course.') +
      ' Wait for my answer before explaining the solution.';
  }
  const question = { role: 'user', content };
  const previous = history.get(key) ?? [];
  pending = { key, draft, previous, question, review };
  const request = review ? 'Explain why my answer was wrong and walk me through the correct answer.'
    : isPractice && !draft ? 'Generate a practice question' + (key === 'general' ? '.' : ' for ' + name + '.') : content;
  addMessage('You', request);
  input.value = '';
  setBusy(true);
  setStatus('Fivey is writing a reply…');
  void requestAnswer(system, [...previous, question], key);
}

async function requestAnswer(system, messages, course) {
  try {
    clientPromise ??= connectClient().catch(error => {
      clientPromise = undefined;
      throw error;
    });
    const client = await clientPromise;
    const { data, error } = await client.auth.getSession();
    if (error || !data.session) {
      fail('Sign in again to ask Fivey.');
      return;
    }
    const response = await fetch(geminiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: authConfig.key,
        Authorization: 'Bearer ' + data.session.access_token
      },
      body: JSON.stringify({ messages, course }),
      signal: AbortSignal.timeout(34000)
    });
    const result = await response.json().catch(() => ({}));
    if (response.ok && typeof result.answer === 'string' && result.answer.trim()) {
      showAnswer(result.answer);
      return;
    }
    if (response.status === 503 && result.code === 'GEMINI_NOT_CONFIGURED') {
      if (!navigator.gpu) {
        fail('Fivey is temporarily unavailable in this browser. Try again later.');
        return;
      }
      getWorker().postMessage([system, ...messages]);
      return;
    }
    if (response.status === 429) {
      fail('Fivey has reached its request limit. Wait a moment and try again.');
      return;
    }
    if (response.status === 401 || response.status === 403) {
      fail('Sign in again to ask Fivey.');
      return;
    }
    fail('Fivey could not complete the request. Try again.');
  } catch {
    fail('Fivey could not complete the request. Check your connection and try again.');
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  ask();
});
practice.addEventListener('click', () => ask(true));

document.addEventListener('fivey:explain-answer', ({ detail }) => {
  if (!detail || !Object.hasOwn(subjects, detail.course)) return;
  toggle(true);
  if (pending) {
    addMessage('Fivey', 'I’m still working on the current reply. Click Explain with Fivey again when it finishes.');
    return;
  }
  addMessage('Answer key', detail.prompt + '\n\nYour choice: ' + detail.selected +
    '\nCorrect answer: ' + detail.correct + '\n\n' + detail.explanation +
    (detail.whyWrong ? '\n\nWhy your choice was wrong: ' + detail.whyWrong : ''));
  ask(false, detail);
});
