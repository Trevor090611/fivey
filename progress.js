import { analyticsAccount } from './auth-gate.js?v=orbies-chest1';
import { createChest, qualifiesForChest } from './orbies-wallet.js';
import { units, unitPool } from './practice-units.js?v=6';
import { renderPracticePlot } from './practice-plot.js?v=1';


const params = new URLSearchParams(location.search);
const course = params.get('course');
const section = document.querySelector('#progress-check');
const supported = new Set(Object.keys(units));
const sizes = [20, 30, 40, 50, 60];
const unitSizes = [5, 10, 15, 20, 25, 30];

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

function examSetupUrl(options) {
  return './full-length.html?' + new URLSearchParams({ course, ...options }) + '#practice-exams-panel';
}

function setupMixedPractice(form, status, fromExams = false) {
  const available = units[course].map((_, index) => index + 1);
  const selected = (params.get('units') || '').split(',').map(Number);
  const count = Number(params.get('count'));
  const minutes = Number(params.get('minutes'));
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
      status.textContent = 'Select at least one unit.';
      return;
    }
    location.assign(practiceUrl({ ...(fromExams ? { from: 'exams' } : {}), mode: 'timed', units: chosen.join(','), count: values.get('count'), minutes: values.get('minutes'), run: crypto.randomUUID() }));
  });
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
  if (mode === 'set') {
    back.href = params.get('from') === 'more'
      ? './practice-more.html?' + new URLSearchParams({ course, units: selected.join(','), unit, count })
      : practiceUrl({ ...(available.includes(unit) ? { mode: 'unit', unit } : {}), count });
    back.textContent = '← Question set setup';
  } else if (mode === 'timed') {
    const setup = { units: selected.join(','), count, minutes };
    if (params.get('from') === 'exams') {
      back.href = examSetupUrl(setup);
      back.textContent = '← Practice Exams';
    } else {
      back.href = practiceUrl({ mode: 'mixed', ...setup });
      back.textContent = '← Practice setup';
    }
  } else if (mode) {
    back.href = practiceUrl(mode === 'unit' ? { mode: 'choose' } : {});
    back.textContent = mode === 'unit' ? '← Choose a unit' : '← Practice options';
  }
  if (mode === 'choose') {
    heading.textContent = 'Practice By Units';
    description.hidden = true;
    const list = section.querySelector('#practice-unit-list');
    list.hidden = false;
    for (const id of available) addLink(list, unitLabel(id), { mode: 'unit', unit: id });
  } else if (mode === 'unit' && available.includes(unit)) {
    heading.textContent = unitLabel(unit);
    showSetSetup(unit, count);
  } else if (mode === 'set' && (!params.has('unit') || available.includes(unit)) && unitSizes.includes(count) && validRun()) {
    heading.textContent = available.includes(unit) ? unitLabel(unit) : 'Question Set';
    setupPractice(available.includes(unit) ? [unit] : available, count);
  } else if (mode === 'mixed') {
    heading.textContent = 'Practice All Units';
    description.textContent = 'Select one or more units, a question count, and a time limit.';
    setupMixedPractice(section.querySelector('#mixed-setup'), section.querySelector('.progress-status'));
  } else if (mode === 'timed' && selected.every(id => available.includes(id)) && sizes.includes(count) && timeLimits().includes(minutes) && validRun()) {
    heading.textContent = 'Timed Practice';
    description.textContent = selected.map(unitLabel).join(' · ');
    setupPractice(selected, count, minutes);
  } else {
    const choices = section.querySelector('#practice-modes');
    if (!choices) {
      showSetSetup(undefined, count);
      return;
    }
    choices.hidden = false;
    addLink(choices, 'Practice By Units', { mode: 'choose' });
    addLink(choices, 'Practice All Units', { mode: 'mixed' });
  }
}

function validRun() {
  return /^[a-f0-9-]{36}$/.test(params.get('run') || '');
}

function showSetSetup(unit, count) {
  const form = section.querySelector('.progress-setup');
  const size = form.querySelector('#progress-size');
  if (unitSizes.includes(count)) size.value = String(count);
  form.hidden = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    location.assign(practiceUrl({
      mode: 'set',
      ...(unit ? { unit } : {}),
      count: size.value,
      run: crypto.randomUUID()
    }));
  });
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

function reserveQuestions(selected, count) {
  const key = 'fivey-progress-seen-v1:' + course;
  const saved = JSON.parse(localStorage.getItem(key) ?? '{"seen":[],"offset":0}');
  const seen = new Set(saved.seen);
  const pools = shuffle(selected).map(unit => {
    const pool = unitPool(course, unit);
    const used = pool.filter(item => seen.has(item.prompt));
    const fresh = pool.filter(item => !seen.has(item.prompt));
    return [...spreadQuestionTypes(used), ...spreadQuestionTypes(fresh)].map(item => ({ ...item, unit }));
  });
  // Graph questions can be added to a unit's pool with a `plot` field.
  const graphQuestions = shuffle(pools.flat().filter(item => item.plot));
  const freshGraphs = graphQuestions.filter(item => !seen.has(item.prompt));
  const graphChoices = freshGraphs.length ? freshGraphs : graphQuestions;
  const set = graphChoices.slice(0, Math.ceil(count / 3));
  const used = new Set(set.map(item => item.prompt));
  for (const item of set) seen.add(item.prompt);
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

function guardQuestionSet() {
  const dialog = document.querySelector('#question-set-exit');
  const cancel = dialog.querySelector('[data-cancel]');
  const fallback = document.querySelector('#practice-back').href;
  const run = params.get('run');
  const base = run + ':base';
  const guarded = run + ':guarded';
  let destination;

  function confirmExit(leave) {
    if (dialog.open) return;
    destination = leave;
    dialog.showModal();
    cancel.focus();
  }

  function warnBeforeUnload(event) {
    event.preventDefault();
    event.returnValue = true;
  }

  function interceptLink(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
        event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href]');
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    const url = new URL(link.href);
    if (!['http:', 'https:', 'file:'].includes(url.protocol)) return;
    if (url.origin === location.origin && url.pathname === location.pathname && url.search === location.search) return;
    event.preventDefault();
    confirmExit(() => location.assign(url.href));
  }

  function confirmBack(event) {
    if (event.state?.fiveyQuestionSet !== base) return;
    history.pushState({ ...history.state, fiveyQuestionSet: guarded }, '');
    confirmExit(() => {
      if (history.length > 2) history.go(-2);
      else location.assign(fallback);
    });
  }

  function enable() {
    if (history.state?.fiveyQuestionSet !== guarded) {
      history.replaceState({ ...history.state, fiveyQuestionSet: base }, '');
      history.pushState({ ...history.state, fiveyQuestionSet: guarded }, '');
    }
    document.addEventListener('click', interceptLink, true);
    window.addEventListener('popstate', confirmBack);
    window.addEventListener('beforeunload', warnBeforeUnload);
  }

  function disable() {
    document.removeEventListener('click', interceptLink, true);
    window.removeEventListener('popstate', confirmBack);
    window.removeEventListener('beforeunload', warnBeforeUnload);
    if (dialog.open) dialog.close();
  }

  dialog.querySelector('[data-exit]').addEventListener('click', () => {
    const leave = destination;
    disable();
    leave();
  });
  cancel.addEventListener('click', () => dialog.close());
  window.addEventListener('pageshow', event => {
    if (event.persisted) enable();
  });
  enable();
  return disable;
}

function setupPractice(selected, count, minutes = 0) {
  const quiz = section.querySelector('.progress-quiz');
  const status = section.querySelector('.progress-status');
  const timer = section.querySelector('#practice-timer');
  const key = (minutes ? 'fivey-timed-practice:' : 'fivey-untimed-practice:') + analyticsAccount;
  let attempt;
  let interval;
  let active = false;
  const save = () => sessionStorage.setItem(key, JSON.stringify(attempt));

  async function startSet() {
    status.textContent = 'Loading practice questions…';
    try {
      const saved = JSON.parse(sessionStorage.getItem(key) || 'null');
      if (saved?.url === location.search) {
        attempt = saved;
      } else {
        const available = selected.reduce((total, unit) => total + unitPool(course, unit).length, 0);
        if (available < count) {
          status.textContent = 'Practice questions for this course are being rebuilt. Check back soon!';
          return;
        }
        const reserve = () => reserveQuestions(selected, count);
        const set = navigator.locks
          ? await navigator.locks.request('fivey-progress:' + course, reserve)
          : reserve();
        if (!set?.length || set.length !== count) throw new Error('Incorrect practice set size');
        attempt = {
          url: location.search,
          set,
          ...(minutes ? { deadline: Date.now() + minutes * 60000 } : {}),
          answers: {},
          finished: false
        };
        save();
      }
      status.textContent = count + ' questions ready.';
      render(attempt.set);
      if (active) quiz.querySelector('input').focus();
    } catch {
      status.textContent = 'Could not load the practice set. Check your connection and site storage, then refresh to retry.';
    }
  }

  void startSet();

  function render(set) {
    active = true;
    const stopExitGuard = guardQuestionSet();
    quiz.replaceChildren();
    quiz.hidden = false;
    const reviews = [];

    set.forEach((item, index) => {
      const field = document.createElement('fieldset');
      const legend = document.createElement('legend');
      legend.textContent = (index + 1) + '. ' + item.prompt;
      field.append(legend);
      if (item.plot) {
        const context = document.createElement('p');
        context.className = 'practice-context';
        context.textContent = item.context;
        field.append(context, renderPracticePlot(item.plot));
      }

      for (const choice of shuffle(item.choices.map((text, value) => ({ text, value })))) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'question-' + index;
        input.value = String(choice.value);
        input.checked = attempt?.answers[index] === choice.value;
        input.addEventListener('change', () => {
          if (minutes && Date.now() >= attempt.deadline) {
            input.checked = false;
            const previous = field.querySelector('input[value="' + attempt.answers[index] + '"]');
            if (previous) previous.checked = true;
            finish(true);
            return;
          }
          attempt.answers[index] = choice.value;
          save();
        });
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
      finish(Boolean(minutes && Date.now() >= attempt.deadline));
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
      if (!restoring) {
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
      const mode = params.get('mode') === 'set' && params.has('unit') ? 'unit' : 'allUnits';
      const results = reviews.flatMap(({ field, item }) => {
        const checked = field.querySelector(':checked');
        return checked ? [{ unit: item.unit, correct: Number(checked.value) === item.answer }] : [];
      });
      const recording = recordSet(results, mode).catch(() => {
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
          stopExitGuard();
          location.assign(rewardUrl);
        };
        void openReward().catch(() => {
          status.textContent += ' Your Orbies chest could not be saved. Check that site storage is available.';
        });
      }
    }

    if (attempt.finished) {
      finish(attempt.expired, true);
      return;
    }
    if (minutes) {
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

if (supported.has(course)) {
  if (section) showPractice();
  const examSetup = document.querySelector('#practice-exam-setup');
  if (examSetup) setupMixedPractice(examSetup, document.querySelector('#practice-exam-status'), true);
}
