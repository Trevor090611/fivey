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
      if (questions.length < count) throw new Error('Set size unavailable');
      render(shuffle(questions).slice(0, count));
      status.textContent = count + ' questions ready.';
      quiz.querySelector('input').focus();
    } catch {
      status.textContent = 'Could not load the questions. Try again.';
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
      for (const { field, review, item } of reviews) {
        const selected = Number(field.querySelector(':checked').value);
        const correct = selected === item.answer;
        if (correct) score++;
        review.textContent = (correct ? 'Correct. ' : 'Correct answer: ' + item.choices[item.answer] + '. ') + item.explanation;
        review.hidden = false;
        field.disabled = true;
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
