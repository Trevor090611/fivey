import { variantAt } from './progress-variants.js';

const course = new URLSearchParams(location.search).get('course');
const section = document.querySelector('#progress-check');
const supported = new Set(['biology', 'chemistry', 'physics-1', 'psychology', 'calculus-ab', 'macroeconomics']);

if (supported.has(course)) setupPractice();

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function reserveUnseen(questions, count) {
  const key = 'fivey-progress-seen-v1:' + course;
  const saved = JSON.parse(localStorage.getItem(key) ?? '{"seen":[],"offset":0}');
  const seen = new Set(saved.seen);
  const set = shuffle(questions.filter(item => !seen.has(item.prompt))).slice(0, count);
  for (const item of set) seen.add(item.prompt);

  let offset = saved.offset;
  while (set.length < count) {
    const item = variantAt(course, offset);
    if (!item) return null;
    offset++;
    set.push(item);
  }

  // Save before showing the set so abandoned questions also stay reserved.
  localStorage.setItem(key, JSON.stringify({ seen: [...seen], offset }));
  return shuffle(set);
}

function markChoice(field, index, result, text) {
  const label = field.querySelector('input[value="' + index + '"]').closest('label');
  label.dataset.result = result;
  const badge = document.createElement('span');
  badge.className = 'choice-result';
  badge.textContent = text;
  label.append(badge);
}

function setupPractice() {
  section.hidden = false;
  const setup = section.querySelector('.progress-setup');
  const size = section.querySelector('select');
  const start = setup.querySelector('button');
  const quiz = section.querySelector('.progress-quiz');
  const status = section.querySelector('.progress-status');
  let questions;
  let active = false;

  setup.addEventListener('submit', async event => {
    event.preventDefault();
    if (active && !window.confirm('Start a new set and clear your current answers?')) return;

    start.disabled = true;
    status.textContent = 'Loading practice questions…';
    try {
      if (!questions) {
        const response = await fetch(new URL('./progress-questions.json', import.meta.url));
        if (!response.ok) throw new Error('Question bank unavailable');
        questions = (await response.json())[course];
      }
      const count = Number(size.value);
      const reserve = () => reserveUnseen(questions, count);
      const set = navigator.locks
        ? await navigator.locks.request('fivey-progress:' + course, reserve)
        : reserve();
      if (!set) {
        status.textContent = 'There are fewer unseen questions than this set size. Try a smaller set.';
        return;
      }
      render(set);
      status.textContent = count + ' questions ready.';
      quiz.querySelector('input').focus();
    } catch {
      status.textContent = 'Could not start a fresh set. Check your connection and allow site storage, then try again.';
    } finally {
      start.disabled = false;
    }
  });

  function render(set) {
    active = true;
    start.textContent = 'Start a new set';
    quiz.replaceChildren();
    quiz.hidden = false;
    const reviews = [];

    set.forEach((item, index) => {
      const field = document.createElement('fieldset');
      const legend = document.createElement('legend');
      legend.textContent = (index + 1) + '. ' + item.prompt;
      field.append(legend);

      for (const choice of shuffle(item.choices.map((text, value) => ({ text, value })))) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'question-' + index;
        input.value = String(choice.value);
        label.append(input, document.createTextNode(choice.text));
        field.append(label);
      }

      const review = document.createElement('p');
      review.className = 'answer-review';
      review.hidden = true;
      field.append(review);
      reviews.push({ field, review, item });
      quiz.append(field);
    });

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Submit answers';
    const summary = document.createElement('p');
    summary.className = 'progress-summary';
    summary.tabIndex = -1;
    summary.hidden = true;
    quiz.prepend(summary);
    quiz.append(submit);

    quiz.onsubmit = event => {
      event.preventDefault();
      if (!active) return;
      const unanswered = reviews.filter(({ field }) => !field.querySelector(':checked'));
      if (unanswered.length) {
        status.textContent = 'Answer all questions before submitting. Remaining: ' + unanswered.length + '.';
        unanswered[0].field.querySelector('input').focus();
        return;
      }

      let score = 0;
      for (const [index, { field, review, item }] of reviews.entries()) {
        const selected = Number(field.querySelector(':checked').value);
        const correct = selected === item.answer;
        if (correct) score++;
        markChoice(field, item.answer, 'correct', '✓ Correct answer');
        if (!correct) markChoice(field, selected, 'incorrect', '✕ Your answer was incorrect');

        review.textContent = item.explanation;
        review.hidden = false;
        field.disabled = true;
        if (!correct) {
          const explain = document.createElement('button');
          explain.type = 'button';
          explain.className = 'progress-explain';
          explain.textContent = 'Explain with Fivey';
          explain.setAttribute('aria-label', 'Explain question ' + (index + 1) + ' with Fivey');
          explain.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('fivey:explain-answer', {
              detail: { course, prompt: item.prompt, selected: item.choices[selected], correct: item.choices[item.answer], explanation: item.explanation }
            }));
          });
          // Keep this button outside the disabled fieldset so it stays interactive.
          field.after(explain);
        }
      }
      active = false;
      submit.hidden = true;
      status.textContent = 'Set submitted.';
      summary.textContent = 'Score: ' + score + ' of ' + set.length + ' (' + Math.round(score / set.length * 100) + '%).';
      summary.hidden = false;
      summary.focus();
    };
  }
}
