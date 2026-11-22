import { analyticsAccount } from './auth-gate.js?v=orbies-chest1';
import { createChest, qualifiesForChest } from './orbies-wallet.js';
import { units, unitPool } from './practice-units.js?v=5';


const params = new URLSearchParams(location.search);
const course = params.get('course');
const section = document.querySelector('#progress-check');
const supported = new Set(Object.keys(units));
const sizes = [20, 30, 40, 50, 60];

function timeLimits() {
  if (course === 'chemistry' || course === 'biology') return [30, 45, 60, 75, 90];
  if (course === 'physics-1' || course === 'calculus-ab') return [40, 60, 80, 100, 120];
  return [24, 36, 48, 60, 72];
}

function practiceUrl(options = {}) {
  return './practice.html?' + new URLSearchParams({ course, ...options });
}

function unitLabel(unit) {
  return 'Unit ' + unit + ': ' + units[course][unit - 1];
}

function addLink(container, label, options) {
  const link = document.createElement('a');
  link.className = 'practice-button';
  link.href = practiceUrl(options);
  link.textContent = label;
  container.append(link);
}

function showPractice() {
  section.hidden = false;
  const heading = section.querySelector('#progress-title');
  const description = heading.nextElementSibling;
  const mode = params.get('mode');
  const available = units[course].map((_, index) => index + 1);
  const unit = Number(params.get('unit'));
  const count = Number(params.get('count'));
  const minutes = Number(params.get('minutes'));
  const selected = [...new Set((params.get('units') || '').split(',').map(Number))];
  const back = document.querySelector('#practice-back');
  if (mode) {
    back.href = practiceUrl(mode === 'unit' ? { mode: 'choose' } : mode === 'timed' ? { mode: 'mixed', units: selected.join(','), count, minutes } : {});
    back.textContent = mode === 'unit' ? '← Choose a unit' : mode === 'timed' ? '← Practice setup' : '← Practice options';
  }
  if (mode === 'choose') {
    heading.textContent = 'Practice By Units';
    description.hidden = true;
    const list = section.querySelector('#practice-unit-list');
    list.hidden = false;
    for (const id of available) addLink(list, unitLabel(id), { mode: 'unit', unit: id });
  } else if (mode === 'unit' && available.includes(unit)) {
    heading.textContent = unitLabel(unit);
    setupPractice([unit]); const requestedCount = Number(params.get('count')); if ([5, 10, 15, 20].includes(requestedCount)) section.querySelector('#progress-size').value = String(requestedCount);
  } else if (mode === 'mixed') {
    heading.textContent = 'Practice All Units';
    description.textContent = 'Select one or more units, a question count, and a time limit.';
    const form = section.querySelector('#mixed-setup');
    form.hidden = false;
    for (const id of available) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.name = 'unit';
      input.value = id;
      input.checked = params.has('units') ? selected.includes(id) : true;
      label.append(input, ' ' + unitLabel(id));
      form.querySelector('#mixed-units').append(label);
    }
    for (const size of sizes) form.elements.count.add(new Option(size + ' questions', size, false, count === size));
    for (const limit of timeLimits()) form.elements.minutes.add(new Option(limit + ' minutes', limit, false, minutes === limit));
    const questionCount = form.elements.count;
    const updateRecommendation = () => {
      for (const option of form.elements.minutes.options) {
        const label = option.value + ' minutes';
        option.textContent = option.index === questionCount.selectedIndex ? label + ' (Recommended)' : label;
      }
    };
    questionCount.addEventListener('change', updateRecommendation);
    window.addEventListener('pageshow', updateRecommendation);
    updateRecommendation();
    form.addEventListener('submit', event => {
      event.preventDefault();
      const values = new FormData(form);
      const chosen = values.getAll('unit');
      if (!chosen.length) {
        form.querySelector('details').open = true;
        form.querySelector('input').focus();
        section.querySelector('.progress-status').textContent = 'Select at least one unit.';
        return;
      }
      location.assign(practiceUrl({ mode: 'timed', units: chosen.join(','), count: values.get('count'), minutes: values.get('minutes'), run: crypto.randomUUID() }));
    });
  } else if (mode === 'timed' && selected.every(id => available.includes(id)) && sizes.includes(count) && timeLimits().includes(minutes) && /^[a-f0-9-]{36}$/.test(params.get('run') || '')) {
    heading.textContent = 'Timed Practice';
    description.textContent = selected.map(unitLabel).join(' · ');
    setupPractice(selected, { count, minutes, key: 'fivey-timed-practice:' + analyticsAccount });
  } else {
    const choices = section.querySelector('#practice-modes');
    if (!choices) {
      setupPractice(available);
      return;
    }
    choices.hidden = false;
    addLink(choices, 'Practice By Units', { mode: 'choose' });
    addLink(choices, 'Practice All Units', { mode: 'mixed' });
  }
}

function analyticsKey() {
  return analyticsAccount && 'fivey-practice-analytics-v1:' + analyticsAccount + ':' + course;
}

function readTotals(key) {
  const totals = JSON.parse(localStorage.getItem(key) ?? '{"attempted":0,"correct":0,"units":{}}'); totals.units ??= {}; return totals;
}

function unitAverage(stats) { const legacyAttempted = Number(stats.legacyAttempted ?? stats.attempted) || 0; const legacyCorrect = Number(stats.legacyCorrect ?? stats.correct) || 0; const setCount = Number(stats.unitSetCount) || 0; const setAccuracyTotal = Number(stats.unitSetAccuracyTotal) || 0; const allUnitsAttempted = Number(stats.allUnitsAttempted) || 0; const allUnitsCorrect = Number(stats.allUnitsCorrect) || 0; const observations = legacyAttempted + setCount + allUnitsAttempted; const correct = legacyCorrect + setAccuracyTotal + allUnitsCorrect; return { accuracy: observations ? correct / observations : 0, observations }; } async function recordSet(results, practiceMode) { const key = analyticsKey(); if (!key) throw new Error('Account unavailable'); const update = () => { const totals = readTotals(key); const grouped = new Map(); totals.attempted += results.length; totals.correct += results.filter(result => result.correct).length; for (const result of results) { const unit = String(result.unit); if (!units[course][Number(unit) - 1]) continue; const stats = totals.units[unit] ??= { attempted: 0, correct: 0 }; if (stats.legacyAttempted === undefined) { stats.legacyAttempted = Number(stats.attempted) || 0; stats.legacyCorrect = Number(stats.correct) || 0; } stats.attempted++; if (result.correct) stats.correct++; if (practiceMode === 'unit') { const group = grouped.get(unit) ?? { attempted: 0, correct: 0 }; group.attempted++; if (result.correct) group.correct++; grouped.set(unit, group); } else { stats.allUnitsAttempted = (Number(stats.allUnitsAttempted) || 0) + 1; if (result.correct) stats.allUnitsCorrect = (Number(stats.allUnitsCorrect) || 0) + 1; } } for (const [unit, score] of grouped) { const stats = totals.units[unit]; stats.unitSetCount = (Number(stats.unitSetCount) || 0) + 1; stats.unitSetAccuracyTotal = (Number(stats.unitSetAccuracyTotal) || 0) + score.correct / score.attempted; } localStorage.setItem(key, JSON.stringify(totals)); }; if (navigator.locks) await navigator.locks.request(key, update); else update(); }

export function renderAnalytics(panel) {
  const key = analyticsKey();
  if (!key || !supported.has(course)) return;
  const update = () => {
    try {
      const totals = readTotals(key); const { attempted, correct } = totals;
      panel.querySelector('#analytics-attempted').textContent = attempted.toLocaleString();
      panel.querySelector('#analytics-accuracy').textContent = attempted
        ? new Intl.NumberFormat(undefined, { style: 'percent', maximumFractionDigits: 1 }).format(correct / attempted)
        : '—';
      const ranked = Object.entries(totals.units ?? {}).filter(([u,s]) => units[course][Number(u)-1] && unitAverage(s).observations>0).sort((a,b) => unitAverage(b[1]).accuracy-unitAverage(a[1]).accuracy || unitAverage(b[1]).observations-unitAverage(a[1]).observations); const weak = ranked.slice().sort((a,b) => unitAverage(a[1]).accuracy-unitAverage(b[1]).accuracy || unitAverage(b[1]).observations-unitAverage(a[1]).observations).slice(0,2); const fill = (selector,rows) => panel.querySelector(selector).replaceChildren(...rows.map(([u,s]) => { const li = document.createElement('li'); li.textContent = 'Unit '+u+': '+units[course][Number(u)-1]+' — '+new Intl.NumberFormat(undefined,{style:'percent',maximumFractionDigits:1}).format(unitAverage(s).accuracy)+' average accuracy'; return li; })); fill('#analytics-strength-list',ranked.slice(0,2)); fill('#analytics-weakness-list',weak); const more = panel.querySelector('#practice-more-button'); more.href='./practice-more.html?'+new URLSearchParams({course,units:weak.map(([u])=>u).join(',')}); more.hidden=!weak.length; panel.querySelector('#analytics-status').textContent=!attempted?'Complete practice in at least two units to see your Strength and Weakness.':ranked.length<2?(!ranked.length?'No unit-level scores are available for your earlier practice. Complete sets in at least two units to build this breakdown.':'Complete practice in one more unit to compare your results.'):'';
    } catch {
      panel.querySelector('#analytics-status').textContent = 'Practice totals are unavailable in this browser.';
    }
  };
  update();
  window.addEventListener('pageshow', update);
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) update();
  });
}

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function spreadQuestionTypes(questions) {
  const families = new Map();
  for (const question of shuffle(questions)) {
    const family = question.family ?? 'default';
    if (!families.has(family)) families.set(family, []);
    families.get(family).push(question);
  }
  const groups = [...families.values()];
  const ordered = [];
  while (groups.some(group => group.length)) {
    for (const group of groups) {
      if (group.length) ordered.push(group.pop());
    }
  }
  return ordered.reverse();
}

function reserveQuestions(bank, selected, count) {
  const key = 'fivey-progress-seen-v1:' + course;
  const saved = JSON.parse(localStorage.getItem(key) ?? '{"seen":[],"offset":0}');
  const seen = new Set(saved.seen);
  const pools = shuffle(selected).map(unit => {
    const pool = unitPool(course, unit, bank);
    const used = pool.filter(item => seen.has(item.prompt));
    const fresh = pool.filter(item => !seen.has(item.prompt));
    return [...spreadQuestionTypes(used), ...spreadQuestionTypes(fresh)].map(item => ({ ...item, unit }));
  });
  const set = [];
  const used = new Set();
  while (set.length < count) {
    const before = set.length;
    for (const pool of pools) {
      let item = pool.pop();
      while (item && used.has(item.prompt)) item = pool.pop();
      if (!item) continue;
      set.push(item);
      used.add(item.prompt);
      seen.add(item.prompt);
      if (set.length === count) break;
    }
    if (before === set.length) return null;
  }
  localStorage.setItem(key, JSON.stringify({ ...saved, seen: [...seen] }));
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

function setupPractice(selected, timed) {
  const setup = section.querySelector('.progress-setup');
  const size = setup.querySelector('#progress-size');
  const start = setup.querySelector('button');
  const quiz = section.querySelector('.progress-quiz');
  const status = section.querySelector('.progress-status');
  let questions;
  let active = false;

  const timer = section.querySelector('#practice-timer');
  let attempt;
  let interval;
  const save = () => sessionStorage.setItem(timed.key, JSON.stringify(attempt));

  async function startSet(count) {
    start.disabled = true;
    status.textContent = 'Loading practice questions…';
    try {
      if (timed) {
        const saved = JSON.parse(sessionStorage.getItem(timed.key) || 'null');
        if (saved?.url === location.search) attempt = saved;
      }
      if (!attempt) {
        if (!questions) {
          const response = await fetch(new URL('./progress-questions.json?v=2', import.meta.url));
          if (!response.ok) throw new Error('Question bank unavailable');
          questions = (await response.json())[course];
        }
        const reserve = () => reserveQuestions(questions, selected, count);
        const set = navigator.locks
          ? await navigator.locks.request('fivey-progress:' + course, reserve)
          : reserve();
        if (!set?.length || set.length !== count) throw new Error('Incorrect practice set size');
        if (timed) {
          attempt = { url: location.search, set, deadline: Date.now() + timed.minutes * 60000, answers: {}, finished: false };
          save();
        } else {
          render(set);
        }
      }
      status.textContent = count + ' questions ready.';
      if (timed) render(attempt.set);
      if (active) quiz.querySelector('input').focus();
    } catch {
      status.textContent = 'Could not load the practice set. Check your connection and site storage, then try again.';
      if (timed) status.textContent += ' Refresh this page to retry.';
    } finally {
      start.disabled = false;
    }
  }

  if (timed) {
    void startSet(timed.count);
  } else {
    setup.hidden = false;
    setup.addEventListener('submit', event => {
      event.preventDefault();
      if (active && !window.confirm('Start a new set and clear your current answers?')) return;
      void startSet(Number(size.value));
    });
  }

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
        input.checked = attempt?.answers[index] === choice.value;
        if (timed) {
          input.addEventListener('change', () => {
            if (Date.now() >= attempt.deadline) {
              input.checked = false;
              const previous = field.querySelector('input[value="' + attempt.answers[index] + '"]');
              if (previous) previous.checked = true;
              finish(true);
              return;
            }
            attempt.answers[index] = choice.value;
            save();
          });
        }
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
      finish(timed && Date.now() >= attempt.deadline);
    };

    function finish(expired, restoring = false) {
      if (!active) return;
      const unanswered = reviews.filter(({ field }) => !field.querySelector(':checked'));
      if (!expired && !restoring && unanswered.length) {
        status.textContent = 'Answer all questions before submitting. Remaining: ' + unanswered.length + '.';
        unanswered[0].field.querySelector('input').focus();
        return;
      }

      let score = 0;
      for (const [index, { field, review, item }] of reviews.entries()) {
        const checked = field.querySelector(':checked');
        const selected = checked ? Number(checked.value) : null;
        const correct = selected === item.answer;
        if (correct) score++;
        markChoice(field, item.answer, 'correct', '✓ Correct answer');
        if (checked && !correct) markChoice(field, selected, 'incorrect', '✕ Your answer was incorrect');

        review.textContent = item.explanation;
        review.hidden = false;
        field.disabled = true;
        if (checked && !correct) {
          const explain = document.createElement('button');
          explain.type = 'button';
          explain.className = 'progress-explain';
          explain.textContent = 'Explain with Fivey';
          explain.setAttribute('aria-label', 'Explain question ' + (index + 1) + ' with Fivey');
          explain.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('fivey:explain-answer', {
              detail: { course, prompt: item.prompt, selected: item.choices[selected], correct: item.choices[item.answer], explanation: item.explanation, whyWrong: item.choiceExplanations?.[selected] }
            }));
          });
          // Keep this button outside the disabled fieldset so it stays interactive.
          field.after(explain);
        }
      }
      active = false;
      submit.hidden = true;
      clearInterval(interval);
      if (timer) timer.hidden = true;
      const message = expired ? 'Time is up. Your set was submitted.' : 'Set submitted.';
      status.textContent = message;
      if (timed && !restoring) {
        attempt.finished = true;
        attempt.expired = Boolean(expired);
        save();
      }
      const attempted = set.length - unanswered.length;
      summary.textContent = 'Score: ' + score + ' of ' + set.length + ' (' + Math.round(score / set.length * 100) + '%).';
      summary.hidden = false;
      if (restoring) return;
      summary.focus();

      if (!attempted) return;
      const mode = params.get('mode');
      const results = reviews.flatMap(({ field, item }) => {
        const checked = field.querySelector(':checked');
        return checked ? [{ unit: item.unit, correct: Number(checked.value) === item.answer }] : [];
      });
      const recording = recordSet(results, mode === 'unit' ? 'unit' : 'allUnits').catch(() => {
        status.textContent = message + ' Your analytics could not be saved.';
      });
      if (analyticsAccount && analyticsAccount !== 'guest' && qualifiesForChest(mode, score, set.length)) {
        const openReward = async () => {
          const id = await createChest(analyticsAccount, course, selected[0], set.length);
          await recording;
          const rewardUrl = './orbies-reward.html?' + new URLSearchParams({ chest: id });
          if (!matchMedia('(prefers-reduced-motion: reduce)').matches && document.body.animate) {
            const fade = document.createElement('div');
            fade.className = 'orbies-page-fade';
            fade.setAttribute('aria-hidden', 'true');
            document.body.append(fade);
            window.addEventListener('pageshow', () => fade.remove(), { once: true });
            await fade.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 330,
              easing: 'ease-in-out',
              fill: 'forwards'
            }).finished.catch(() => {});
          }
          location.assign(rewardUrl);
        };
        void openReward().catch(() => {
          status.textContent += ' Your Orbies chest could not be saved. Check that site storage is available.';
        });
      }
    }

    if (timed) {
      if (attempt.finished) {
        finish(attempt.expired, true);
        return;
      }
      timer.hidden = false;
      const tick = () => {
        const seconds = Math.max(0, Math.ceil((attempt.deadline - Date.now()) / 1000));
        timer.textContent = 'Time remaining: ' + Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
        if (!seconds) finish(true);
      };
      interval = setInterval(tick, 250);
      tick();
    }
  }
}

if (section && supported.has(course)) showPractice();
