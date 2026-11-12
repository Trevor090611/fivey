const subjects = {
  biology: ['AP Biology', 'biochemistry, cells, energetics, cell signaling, heredity, gene expression, evolution, ecology'],
  chemistry: ['AP Chemistry', 'atomic structure, bonding, intermolecular forces, reactions, kinetics, thermodynamics, equilibria, acids and bases, electrochemistry'],
  'physics-1': ['AP Physics 1', 'kinematics, forces, energy, momentum, rotation, oscillations, fluids; use algebra rather than calculus'],
  psychology: ['AP Psychology', 'research methods, biological bases, cognition, development and learning, social psychology, personality, mental and physical health'],
  'calculus-ab': ['AP Calculus AB', 'limits, continuity, differentiation, applications of derivatives, integration, differential equations, applications of integration'],
  macroeconomics: ['AP Macroeconomics', 'economic indicators, business cycles, aggregate demand and supply, fiscal and monetary policy, growth, open economy and exchange rates']
};

// Offer original course practice when the browser cannot run the model.
const practiceExamples = {
  biology: ['In a population in Hardy–Weinberg equilibrium, 16% of individuals show a recessive phenotype. What fraction of the population is expected to be heterozygous?', '48%. The recessive allele frequency is 0.4, so 2pq = 2(0.6)(0.4) = 0.48.'],
  chemistry: ['A 25.0 mL sample of 0.100 M HCl is titrated with 0.125 M NaOH. What volume of base reaches the equivalence point?', '20.0 mL. There are 0.00250 mol of HCl. The reaction is 1:1, so divide 0.00250 mol by 0.125 mol/L.'],
  'physics-1': ['A 2 kg cart traveling right at 3 m/s sticks to a stationary 1 kg cart. What is their final velocity if the net external impulse is negligible?', '2 m/s to the right. Initial momentum is 6 kg·m/s and the combined mass is 3 kg.'],
  psychology: ['A researcher randomly assigns participants to study with music or in silence and then measures quiz scores. What is the independent variable, and what does random assignment help control?', 'The independent variable is the study condition. Random assignment helps balance preexisting differences between groups.'],
  'calculus-ab': ['A particle has velocity v(t) = 3t² − 6t for 0 ≤ t ≤ 3. What is its total distance traveled?', '8 units. The velocity changes sign at t = 2. Integrating its absolute value gives 4 units from 0 to 2 and 4 from 2 to 3.'],
  macroeconomics: ['The economy has a recessionary gap. If the central bank buys government securities, what happens to the money supply and aggregate demand in the standard AP model?', 'The money supply increases. Lower interest rates stimulate interest-sensitive spending, shifting aggregate demand right.']
};

const widget = document.createElement('aside');
widget.className = 'fivey-chat';
widget.setAttribute('aria-label', 'Fivey AP tutor');
widget.innerHTML = `
  <button class="chat-open" type="button" aria-expanded="false" aria-controls="fivey-panel">Ask Fivey</button>
  <section class="chat-panel" id="fivey-panel" aria-labelledby="fivey-chat-title" hidden>
    <div class="chat-header"><strong id="fivey-chat-title">Fivey · AP tutor</strong><button class="chat-close" type="button" aria-label="Close Fivey">×</button></div>
    <div class="chat-tools">
      <label for="fivey-subject">AP subject</label>
      <select id="fivey-subject">
        <option value="">Choose a course</option>
      </select>
      <button class="chat-practice" type="button">Generate a practice question</button>
      <button class="chat-practice chat-sample" type="button">Try a ready-made question</button>
    </div>
    <div class="chat-log" role="log" aria-label="Conversation" tabindex="0"></div>
    <form class="chat-form">
      <label for="fivey-question">Your question</label>
      <textarea id="fivey-question" maxlength="1000" rows="2" placeholder="Ask about a topic or request a quiz"></textarea>
      <button class="chat-send" type="submit">Send</button>
    </form>
    <p class="chat-status" role="status">Runs on your device. First use downloads a model. AI answers can be wrong.</p>
  </section>`;
document.body.append(widget);

const open = widget.querySelector('.chat-open');
const panel = widget.querySelector('.chat-panel');
const close = widget.querySelector('.chat-close');
const select = widget.querySelector('select');
const input = widget.querySelector('textarea');
const form = widget.querySelector('form');
const practice = widget.querySelector('.chat-practice');
const send = widget.querySelector('.chat-send');
const log = widget.querySelector('.chat-log');
const status = widget.querySelector('.chat-status');

for (const [key, [name]] of Object.entries(subjects)) {
  select.add(new Option(name, key));
}
select.value = new URLSearchParams(location.search).get('course') ?? '';
if (select.selectedIndex < 0) select.selectedIndex = 0;

let worker;
let pending;
const history = new Map();

function toggle(isOpen) {
  panel.hidden = !isOpen;
  open.hidden = isOpen;
  open.setAttribute('aria-expanded', String(isOpen));
  (isOpen ? (select.value ? input : select) : open).focus();
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
  send.disabled = practice.disabled = select.disabled = input.disabled = busy;
}

function getWorker() {
  if (worker) return worker;
  worker = new Worker(new URL('./fivey-worker.js', import.meta.url), { type: 'module' });
  worker.addEventListener('message', ({ data }) => {
    if (data.type === 'loading') {
      const model = data.fallback ? 'compact' : 'local';
      status.textContent = 'Preparing the ' + model + ' model… ' + data.percent + '%';
    } else if (data.type === 'fallback') {
      status.textContent = 'Trying a smaller model for this device…';
    } else if (data.type === 'generating') {
      status.textContent = 'Fivey is writing a reply…';
    } else if (data.type === 'answer') {
      if (pending.review && (data.answer.length > 950 || introducesNumbers(data.answer, pending.question.content))) {
        addMessage('Fivey', 'I couldn’t verify my expanded explanation. The answer key above has the checked solution.');
        finish('Review the answer key or ask Fivey a more specific follow-up.');
        return;
      }
      const answer = { role: 'assistant', content: data.answer };
      history.set(pending.key, [...pending.previous, pending.question, answer].slice(-4));
      addMessage('Fivey', data.answer);
      finish('AI answers can be wrong. Check important details against your course materials.');
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

function finish(message) {
  pending = undefined;
  setBusy(false);
  status.textContent = message;
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
  const key = select.value;
  if (!Object.hasOwn(subjects, key)) {
    status.textContent = 'Choose an AP subject first.';
    select.focus();
    return;
  }

  const draft = input.value.trim();
  if (!isPractice && !draft && !review) {
    input.focus();
    return;
  }

  if (!navigator.gpu) {
    status.textContent = 'This browser does not support WebGPU. Open Fivey in a WebGPU-enabled browser to use the tutor.';
    return;
  }

  const [name, topics] = subjects[key];
  const system = {
    role: 'system',
    content: `You are Fivey, a tutor for ${name}. Course scope includes ${topics}. Give clear, accurate AP-level explanations. Show reasoning and units where relevant. Ask for clarification when needed and say when unsure. Keep answers concise. For practice, write original AP-style questions, never claim they are official exam items. For multiple choice, provide four plausible choices and explain the correct answer after the student responds unless they ask for the answer now. If the request belongs to another AP course, ask the student to change the subject. Use plain text, clear numbering, and short paragraphs.`
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
    content = 'Write one original AP-style practice question for ' + name + '. ' +
      (draft ? 'Focus on this request: ' + draft : 'Pick a topic within the course.') +
      ' Wait for my answer before explaining the solution.';
  }
  const question = { role: 'user', content };
  const previous = history.get(key) ?? [];
  pending = { key, draft, previous, question, review };
  const request = review ? 'Explain why my answer was wrong and walk me through the correct answer.'
    : isPractice && !draft ? 'Generate a practice question for ' + name + '.' : content;
  addMessage('You', request);
  input.value = '';
  setBusy(true);
  status.textContent = 'Starting Fivey…';
  try {
    getWorker().postMessage([system, ...previous, question]);
  } catch {
    fail('Fivey could not start. Reload the page and try again.');
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  ask();
});
practice.addEventListener('click', () => ask(true));

widget.querySelector('.chat-sample').addEventListener('click', () => {
  const example = practiceExamples[select.value];
  if (!example) {
    status.textContent = 'Choose an AP subject first.';
    select.focus();
    return;
  }
  const [question, answer] = example;
  addMessage('Practice example', question);
  const details = document.createElement('details');
  details.className = 'chat-message';
  const summary = document.createElement('summary');
  summary.textContent = 'Show answer';
  const solution = document.createElement('p');
  solution.textContent = answer;
  details.append(summary, solution);
  log.append(details);
  log.scrollTop = log.scrollHeight;
});

document.addEventListener('fivey:explain-answer', ({ detail }) => {
  if (!detail || !Object.hasOwn(subjects, detail.course)) return;
  toggle(true);
  if (pending) {
    addMessage('Fivey', 'I’m still working on the current reply. Click Explain with Fivey again when it finishes.');
    return;
  }
  select.value = detail.course;
  addMessage('Answer key', detail.prompt + '\n\nYour choice: ' + detail.selected +
    '\nCorrect answer: ' + detail.correct + '\n\n' + detail.explanation +
    (detail.whyWrong ? '\n\nWhy your choice was wrong: ' + detail.whyWrong : ''));
  ask(false, detail);
});
