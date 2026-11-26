import { analyticsAccount } from './auth-gate.js?v=orbies-chest1';
import { createChest, qualifiesForChest } from './orbies-wallet.js?v=chest80';
import { units, unitPool } from './practice-units.js?v=13';
import { renderPracticePlot } from './practice-plot.js?v=1';


const params = new URLSearchParams(location.search);
const course = params.get('course');
const section = document.querySelector('#progress-check');
const supported = new Set(Object.keys(units));
const sizes = [20, 30, 40, 50, 60];
const unitSizes = [5, 10, 15, 20, 25, 30];
// College Board Section I counts and timing for the May 2027 AP exams.
const standardExams = {
  biology: { count: 60, minutes: 90 },
  chemistry: { count: 60, minutes: 90 },
  'physics-1': { count: 42, minutes: 85 },
  'calculus-ab': { count: 42, minutes: 100 },
  psychology: { count: 75, minutes: 90 },
  macroeconomics: { count: 60, minutes: 70 },
  'environmental-science': { count: 80, minutes: 90 }
};

function baseTimeLimits() {
  if (course === 'chemistry' || course === 'biology') return [30, 45, 60, 75, 90];
  if (course === 'physics-1' || course === 'calculus-ab') return [40, 60, 80, 100, 120];
  return [24, 36, 48, 60, 72];
}

function includeStandardOption(options, value) {
  return value && !options.includes(value)
    ? [...options, value].sort((a, b) => a - b)
    : options;
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

const courseNames = {
  biology: 'AP Biology',
  chemistry: 'AP Chemistry',
  'physics-1': 'AP Physics 1',
  'calculus-ab': 'AP Calculus AB',
  psychology: 'AP Psychology',
  macroeconomics: 'AP Macroeconomics',
  'environmental-science': 'AP Environmental Science'
};

const bookIcon = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 5.5C2 4.7 2.7 4 3.5 4H9c1.3 0 2.4.6 3 1.5.6-.9 1.7-1.5 3-1.5h5.5c.8 0 1.5.7 1.5 1.5V18c0 .8-.7 1.5-1.5 1.5H15c-1 0-1.9.5-2.4 1.2a.8.8 0 0 1-1.2 0c-.5-.7-1.4-1.2-2.4-1.2H3.5c-.8 0-1.5-.7-1.5-1.5Z"/></svg>';
const bookArt = '<svg viewBox="0 0 220 170" aria-hidden="true"><path class="bank-page" d="M110 46c-26-22-62-26-92-14v118c30-12 66-8 92 14Z"/><path class="bank-page-alt" d="M110 46c26-22 62-26 92-14v118c-30-12-66-8-92 14Z"/><path class="bank-ink" d="M36 66c14-4 30-3 46 2M36 88c14-4 30-3 46 2M36 110c14-4 30-3 46 2M136 70c14-5 30-6 46-2M136 92c14-5 30-6 46-2M136 114c14-5 30-6 46-2" fill="none" stroke-width="5" stroke-linecap="round"/><path class="bank-pencil" d="M168 18l34 30-62 70-22 8 6-22Z"/><path class="bank-pencil-tip" d="M118 126l6-22 16 14Z"/></svg>';

function progressStyles() {
  if (document.querySelector('#fivey-bank-styles')) return;
  const style = document.createElement('style');
  style.id = 'fivey-bank-styles';
  style.textContent = `
.fivey-bank-card{--bank-bg:#d9f783;--bank-text:#000;--bank-track:rgb(0 0 0 / 16%);--bank-fill:#000;--bank-open-bg:#fff;--bank-open-text:#000;--bank-open-hover:#f1f1f1;--bank-chevron:#666;--bank-page:#fff;--bank-page-alt:#f3fbdc;--bank-ink:#4f7d22;--bank-pencil:#2f5a16;--bank-pencil-tip:#e9f8c3;position:relative;isolation:isolate;overflow:hidden;box-sizing:border-box;max-width:560px;margin-top:24px;padding:26px 28px;border-radius:18px;background:var(--bank-bg);color:var(--bank-text)}
:root[data-fivey-dark] .fivey-bank-card{--bank-bg:#0891b2;--bank-text:#fff;--bank-track:rgb(255 255 255 / 35%);--bank-fill:#fff;--bank-open-bg:#000;--bank-open-text:#fff;--bank-open-hover:#1c1c1c;--bank-chevron:#9a9a9a;--bank-page:#e8fbff;--bank-page-alt:#fff;--bank-ink:#0891b2;--bank-pencil:#04556a;--bank-pencil-tip:#bdf2fb}
:root .fivey-bank-card h3,:root[data-fivey-dark] .fivey-bank-card h3{margin:0 0 18px;color:var(--bank-text)!important;font:600 clamp(22px,4vw,30px)/1.15 system-ui,sans-serif;letter-spacing:-.01em}
.fivey-bank-meta{display:flex;justify-content:space-between;gap:12px;max-width:60%;font-size:clamp(15px,2.6vw,19px)}
.fivey-bank-meta strong{font-weight:700}
.fivey-bank-track{max-width:60%;height:10px;margin:12px 0 24px;overflow:hidden;border-radius:999px;background:var(--bank-track)}
.fivey-bank-fill{height:100%;min-width:8px;border-radius:inherit;background:var(--bank-fill)}
a.fivey-bank-open{display:inline-flex;align-items:center;gap:14px;padding:10px 20px;border:0;border-radius:999px;background:var(--bank-open-bg);color:var(--bank-open-text);font-size:18px;font-weight:600;text-decoration:none}
a.fivey-bank-open:is(:hover,:focus-visible){background:var(--bank-open-hover);color:var(--bank-open-text)}
.fivey-bank-open span{color:var(--bank-chevron);font-size:22px;line-height:1}
.fivey-bank-art .bank-page{fill:var(--bank-page)}.fivey-bank-art .bank-page-alt{fill:var(--bank-page-alt)}.fivey-bank-art .bank-ink{stroke:var(--bank-ink)}.fivey-bank-art .bank-pencil{fill:var(--bank-pencil)}.fivey-bank-art .bank-pencil-tip{fill:var(--bank-pencil-tip)}
.fivey-bank-art{position:absolute;right:-8px;bottom:-12px;z-index:-1;width:44%;max-width:230px}
.fivey-bank-art svg{display:block;width:100%;height:auto}
#practice-unit-list:has(.fivey-unit-row){justify-items:stretch;max-width:760px}
a.fivey-unit-row{--unit-bg:#fff;--unit-border:#a4e568;--unit-swipe:#d9f783;--unit-text:#000;--unit-hover-text:#000;--unit-track:#e4e4e4;display:flex;align-items:center;gap:18px;box-sizing:border-box;width:100%;padding:16px 20px;border:2px solid var(--unit-border);border-radius:12px;background:linear-gradient(var(--unit-swipe),var(--unit-swipe)) right center/0% 100% no-repeat var(--unit-bg);color:var(--unit-text);text-decoration:none;transition:background-size 220ms ease-out,color 220ms ease-out}
:root[data-fivey-dark] a.fivey-unit-row{--unit-bg:#000;--unit-border:#62e7ff;--unit-swipe:#62e7ff;--unit-text:#fff;--unit-hover-text:#000;--unit-track:#303030;transition-duration:260ms}
a.fivey-unit-row:focus-visible{background-size:100% 100%;color:var(--unit-hover-text)}
@media(hover:hover){a.fivey-unit-row:hover{background-size:100% 100%;color:var(--unit-hover-text)}}
@media(prefers-reduced-motion:reduce){a.fivey-unit-row{transition:none}}
.fivey-unit-icon{display:grid;flex:none;place-items:center;width:48px;height:48px;border-radius:8px;background:#272727;color:#c4c4c4}
.fivey-unit-body{flex:1;min-width:0}
.fivey-unit-title{display:block;margin-bottom:10px;color:inherit;font-size:clamp(15px,2.4vw,18px);font-weight:600}
.fivey-unit-line{display:flex;align-items:center;gap:16px}
.fivey-unit-track{flex:1;height:6px;overflow:hidden;border-radius:999px;background:var(--unit-track)}
.fivey-unit-fill{height:100%;min-width:6px;border-radius:inherit;background:#4f7cff}
.fivey-unit-count{flex:none;color:inherit;font-size:14px;white-space:nowrap}
@media(max-width:560px){.fivey-unit-line{flex-direction:column;align-items:stretch;gap:6px}.fivey-bank-meta,.fivey-bank-track{max-width:none}.fivey-bank-art{opacity:.3}}
`;
  document.head.append(style);
}

function percentOf(done, total) {
  return total ? Math.round(done / total * 100) : 0;
}

// Pink card: how many questions in the whole course bank the user has solved.
function addBankCard(container) {
  const { total, done } = bankProgress(units[course].map((_, index) => index + 1));
  if (!total) return;
  progressStyles();
  const card = document.createElement('div');
  card.className = 'fivey-bank-card';
  const title = document.createElement('h3');
  title.textContent = (courseNames[course] ?? 'Course') + ' Question Bank';
  const meta = document.createElement('div');
  meta.className = 'fivey-bank-meta';
  const solved = document.createElement('span');
  solved.textContent = done.toLocaleString() + ' of ' + total.toLocaleString() + ' solved';
  const percent = document.createElement('strong');
  percent.textContent = percentOf(done, total) + '%';
  meta.append(solved, percent);
  const track = document.createElement('div');
  track.className = 'fivey-bank-track';
  track.setAttribute('role', 'progressbar');
  track.setAttribute('aria-label', 'Questions solved');
  track.setAttribute('aria-valuemin', '0');
  track.setAttribute('aria-valuemax', String(total));
  track.setAttribute('aria-valuenow', String(done));
  const fill = document.createElement('div');
  fill.className = 'fivey-bank-fill';
  fill.style.width = percentOf(done, total) + '%';
  track.append(fill);
  const open = document.createElement('a');
  open.className = 'fivey-bank-open';
  open.href = practiceUrl({ mode: 'options' });
  open.innerHTML = 'Open <span aria-hidden="true">›</span>';
  const art = document.createElement('div');
  art.className = 'fivey-bank-art';
  art.innerHTML = bookArt;
  card.append(title, meta, track, open, art);
  container.after(card);
}

// Unit rows: questions completed in each unit.
function addUnitRows(list, available) {
  progressStyles();
  for (const id of available) {
    const { total, done } = bankProgress([id]);
    const row = document.createElement('a');
    row.className = 'fivey-unit-row';
    row.href = practiceUrl({ mode: 'unit', unit: id });
    const icon = document.createElement('span');
    icon.className = 'fivey-unit-icon';
    icon.innerHTML = bookIcon;
    const body = document.createElement('span');
    body.className = 'fivey-unit-body';
    const title = document.createElement('span');
    title.className = 'fivey-unit-title';
    title.textContent = unitLabel(id);
    const line = document.createElement('span');
    line.className = 'fivey-unit-line';
    const track = document.createElement('span');
    track.className = 'fivey-unit-track';
    track.setAttribute('role', 'progressbar');
    track.setAttribute('aria-label', unitLabel(id) + ' questions completed');
    track.setAttribute('aria-valuemin', '0');
    track.setAttribute('aria-valuemax', String(total));
    track.setAttribute('aria-valuenow', String(done));
    const fill = document.createElement('span');
    fill.className = 'fivey-unit-fill';
    fill.style.display = 'block';
    fill.style.width = percentOf(done, total) + '%';
    track.append(fill);
    const count = document.createElement('span');
    count.className = 'fivey-unit-count';
    count.textContent = done.toLocaleString() + ' / ' + total.toLocaleString() + ' questions completed';
    line.append(track, count);
    body.append(title, line);
    row.append(icon, body);
    list.append(row);
  }
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
  const standard = fromExams ? standardExams[course] : undefined;
  const limits = baseTimeLimits();
  for (const size of includeStandardOption(sizes, standard?.count)) {
    const label = size + ' questions' + (size === standard?.count ? ' — Standard Exam Format' : '');
    form.elements.count.add(new Option(label, size, false, count === size));
  }
  for (const limit of includeStandardOption(limits, standard?.minutes)) {
    form.elements.minutes.add(new Option(limit + ' minutes', limit, false, minutes === limit));
  }
  const questionCount = form.elements.count;
  const timeLimit = form.elements.minutes;
  const updateRecommendation = () => {
    const size = Number(questionCount.value);
    const recommended = size === standard?.count ? standard.minutes : limits[sizes.indexOf(size)];
    for (const option of timeLimit.options) {
      const label = option.value + ' minutes';
      option.textContent = Number(option.value) === recommended ? label + ' (Recommended)' : label;
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
  const standard = params.get('from') === 'exams' ? standardExams[course] : undefined;
  const selected = [...new Set((params.get('units') || '').split(',').map(Number))];
  const back = document.querySelector('#practice-back');
  // Courses with a question bank show the bank card first; its Open button leads to the practice options.
  const hasBank = bankProgress(available).total > 0;
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
    back.href = practiceUrl(mode === 'unit' ? { mode: 'choose' } : mode !== 'options' && hasBank ? { mode: 'options' } : {});
    back.textContent = mode === 'unit' ? '← Choose a unit' : mode === 'options' ? '← Question bank' : '← Practice options';
  }
  if (mode === 'choose') {
    heading.textContent = 'Practice By Units';
    description.hidden = true;
    const list = section.querySelector('#practice-unit-list');
    list.hidden = false;
    if (bankProgress(available).total) addUnitRows(list, available);
    else for (const id of available) addLink(list, unitLabel(id), { mode: 'unit', unit: id });
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
  } else if (mode === 'timed' && selected.every(id => available.includes(id)) &&
    includeStandardOption(sizes, standard?.count).includes(count) &&
    includeStandardOption(baseTimeLimits(), standard?.minutes).includes(minutes) && validRun()) {
    heading.textContent = 'Timed Practice';
    description.textContent = selected.map(unitLabel).join(' · ');
    setupPractice(selected, count, minutes);
  } else {
    const choices = section.querySelector('#practice-modes');
    if (!choices) {
      showSetSetup(undefined, count);
      return;
    }
    if (hasBank && mode !== 'options') {
      addBankCard(choices);
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

// Strength is 75% or above and Weakness is 50% or below, judged on the percentage shown (one decimal place).
const shownPercent = accuracy => Math.round(accuracy * 1000) / 10;

function unitAverage(stats) { const legacyAttempted = Number(stats.legacyAttempted ?? stats.attempted) || 0; const legacyCorrect = Number(stats.legacyCorrect ?? stats.correct) || 0; const setCount = Number(stats.unitSetCount) || 0; const setAccuracyTotal = Number(stats.unitSetAccuracyTotal) || 0; const allUnitsAttempted = Number(stats.allUnitsAttempted) || 0; const allUnitsCorrect = Number(stats.allUnitsCorrect) || 0; const observations = legacyAttempted + setCount + allUnitsAttempted; const correct = legacyCorrect + setAccuracyTotal + allUnitsCorrect; return { accuracy: observations ? correct / observations : 0, observations }; } async function recordSet(results, practiceMode) { const key = analyticsKey(); if (!key) throw new Error('Account unavailable'); const update = () => { const totals = readTotals(key); const grouped = new Map(); totals.attempted += results.length; totals.correct += results.filter(result => result.correct).length; for (const result of results) { const unit = String(result.unit); if (!units[course][Number(unit) - 1]) continue; const stats = totals.units[unit] ??= { attempted: 0, correct: 0 }; if (stats.legacyAttempted === undefined) { stats.legacyAttempted = Number(stats.attempted) || 0; stats.legacyCorrect = Number(stats.correct) || 0; } stats.attempted++; if (result.correct) stats.correct++; if (practiceMode === 'unit') { const group = grouped.get(unit) ?? { attempted: 0, correct: 0 }; group.attempted++; if (result.correct) group.correct++; grouped.set(unit, group); } else { stats.allUnitsAttempted = (Number(stats.allUnitsAttempted) || 0) + 1; if (result.correct) stats.allUnitsCorrect = (Number(stats.allUnitsCorrect) || 0) + 1; } } for (const [unit, score] of grouped) { const stats = totals.units[unit]; stats.unitSetCount = (Number(stats.unitSetCount) || 0) + 1; stats.unitSetAccuracyTotal = (Number(stats.unitSetAccuracyTotal) || 0) + score.correct / score.attempted; } localStorage.setItem(key, JSON.stringify(totals)); }; if (navigator.locks) await navigator.locks.request(key, update); else update(); }

// Saves each Practice Exam's score so the AP score Calculator can predict a score
// from the exams that covered every unit.
function recordPracticeExam(correct, total, selected) {
  if (!analyticsAccount || !total) return;
  const key = 'fivey-practice-exams-v1:' + analyticsAccount + ':' + course;
  const run = params.get('run');
  const allUnits = units[course].every((_, index) => selected.includes(index + 1));
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    const exams = (Array.isArray(saved) ? saved : []).filter(exam => exam?.run !== run);
    exams.push({ run, at: Date.now(), correct, total, allUnits });
    localStorage.setItem(key, JSON.stringify(exams.slice(-200)));
  } catch {
    // The prediction just won't include this exam.
  }
}

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
      const ranked = Object.entries(totals.units ?? {}).filter(([u,s]) => units[course][Number(u)-1] && unitAverage(s).observations>0).sort((a,b) => unitAverage(b[1]).accuracy-unitAverage(a[1]).accuracy || unitAverage(b[1]).observations-unitAverage(a[1]).observations); const strong = ranked.filter(([,s]) => shownPercent(unitAverage(s).accuracy) >= 75); const weak = ranked.filter(([,s]) => shownPercent(unitAverage(s).accuracy) <= 50).sort((a,b) => unitAverage(a[1]).accuracy-unitAverage(b[1]).accuracy || unitAverage(b[1]).observations-unitAverage(a[1]).observations); const fill = (selector,rows,empty) => panel.querySelector(selector).replaceChildren(...(rows.length ? rows.map(([u,s]) => { const li = document.createElement('li'); li.textContent = 'Unit '+u+': '+units[course][Number(u)-1]+' — '+new Intl.NumberFormat(undefined,{style:'percent',maximumFractionDigits:1}).format(unitAverage(s).accuracy)+' average accuracy'; return li; }) : [Object.assign(document.createElement('li'), { textContent: ranked.length ? empty : 'No unit scores yet.' })])); fill('#analytics-strength-list',strong,'No units at 75% or above yet.'); fill('#analytics-weakness-list',weak,'No units at 50% or below.'); const more = panel.querySelector('#practice-more-button'); more.href='./practice-more.html?'+new URLSearchParams({course,units:weak.map(([u])=>u).join(',')}); more.hidden=!weak.length; panel.querySelector('#analytics-status').textContent=!attempted?'Complete a practice set to see your Strength and Weakness. Units averaging 75% or above are Strengths, and units averaging 50% or below are Weaknesses.':!ranked.length?'No unit-level scores are available for your earlier practice. Complete a set in any unit to build this breakdown.':'';
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

// Questions a user has finished are saved on their account and are not given to them again.
function questionKey(item) {
  return item.id ?? item.prompt;
}

function completedKey() {
  return 'fivey-practice-completed-v1:' + analyticsAccount + ':' + course;
}

function readCompleted() {
  try {
    const saved = JSON.parse(localStorage.getItem(completedKey()) || '[]');
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function writeCompleted(completed) {
  try {
    localStorage.setItem(completedKey(), JSON.stringify([...completed]));
  } catch {
    // Completion tracking is skipped when storage is unavailable.
  }
}

function markCompleted(items) {
  const completed = readCompleted();
  for (const item of items) completed.add(questionKey(item));
  writeCompleted(completed);
}

function remainingQuestions(unit, completed = readCompleted()) {
  return unitPool(course, unit).filter(item => !completed.has(questionKey(item)));
}

function bankProgress(unitList) {
  const completed = readCompleted();
  let total = 0;
  let done = 0;
  for (const unit of unitList) {
    for (const item of unitPool(course, unit)) {
      total++;
      if (completed.has(questionKey(item))) done++;
    }
  }
  return { total, done };
}

function reserveQuestions(selected, count) {
  const key = 'fivey-progress-seen-v1:' + course;
  const saved = JSON.parse(localStorage.getItem(key) ?? '{"seen":[],"offset":0}');
  const seen = new Set(saved.seen);
  const completed = readCompleted();
  const pools = shuffle(selected).map(unit => {
    const pool = remainingQuestions(unit, completed);
    const used = pool.filter(item => seen.has(questionKey(item)));
    const fresh = pool.filter(item => !seen.has(questionKey(item)));
    return [...spreadQuestionTypes(used), ...spreadQuestionTypes(fresh)].map(item => ({ ...item, unit }));
  });
  // Up to a third of a set can be graph questions (items with a `plot` field).
  const graphQuestions = shuffle(pools.flat().filter(item => item.plot));
  const freshGraphs = graphQuestions.filter(item => !seen.has(questionKey(item)));
  const graphChoices = freshGraphs.length ? freshGraphs : graphQuestions;
  const set = graphChoices.slice(0, Math.ceil(count / 3));
  const used = new Set(set.map(questionKey));
  for (const item of set) seen.add(questionKey(item));
  while (set.length < count) {
    const before = set.length;
    for (const pool of pools) {
      let item = pool.pop();
      while (item && used.has(questionKey(item))) item = pool.pop();
      if (!item) continue;
      set.push(item);
      used.add(questionKey(item));
      seen.add(questionKey(item));
      if (set.length === count) break;
    }
    if (before === set.length) break;
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

  function questionDetails(item, index) {
    const selected = attempt.answers[index];
    return {
      course,
      number: index + 1,
      prompt: item.prompt,
      context: item.context,
      choices: item.choices,
      correct: item.choices[item.answer],
      explanation: item.explanation,
      selected: item.choices[selected],
      whyWrong: selected !== item.answer ? item.choiceExplanations?.[selected] : undefined
    };
  }

  document.addEventListener('fivey:read-practice-question', ({ detail }) => {
    if (!detail || quiz.hidden || !attempt?.set || !Number.isInteger(detail.number)) return;
    const item = attempt.set[detail.number - 1];
    if (item) detail.question = questionDetails(item, detail.number - 1);
  });

  async function startSet() {
    status.textContent = 'Loading practice questions…';
    try {
      const saved = JSON.parse(sessionStorage.getItem(key) || 'null');
      if (saved?.url === location.search) {
        attempt = saved;
      } else {
        const total = selected.reduce((sum, unit) => sum + unitPool(course, unit).length, 0);
        if (!total) {
          status.textContent = 'Practice questions for this course are being rebuilt. Check back soon!';
          return;
        }
        if (!selected.some(unit => remainingQuestions(unit).length)) {
          showAllCompleted(total);
          return;
        }
        const reserve = () => reserveQuestions(selected, count);
        const set = navigator.locks
          ? await navigator.locks.request('fivey-progress:' + course, reserve)
          : reserve();
        if (!set?.length) throw new Error('Practice set unavailable');
        attempt = {
          url: location.search,
          set,
          ...(minutes ? { deadline: Date.now() + minutes * 60000 } : {}),
          answers: {},
          finished: false
        };
      }
      if (!attempt.choiceOrders) {
        attempt.choiceOrders = attempt.set.map(item => shuffle(item.choices.map((_, index) => index)));
        save();
      }
      const size = attempt.set.length;
      status.textContent = size < count
        ? 'Only ' + size + ' new question' + (size === 1 ? ' is' : 's are') + ' left in this selection, so this set has ' + size + '.'
        : size + ' questions ready.';
      render(attempt.set);
      if (active) quiz.querySelector('input').focus();
    } catch {
      status.textContent = 'Could not load the practice set. Check your connection and site storage, then refresh to retry.';
    }
  }

  // Every question in the selection has been completed: offer to practice them again.
  function showAllCompleted(total) {
    status.textContent = 'You have completed all ' + total.toLocaleString() + ' questions in this selection. Great work!';
    const again = document.createElement('button');
    again.type = 'button';
    again.className = 'practice-button';
    again.textContent = 'Practice these questions again';
    again.addEventListener('click', () => {
      const completed = readCompleted();
      for (const unit of selected) {
        for (const item of unitPool(course, unit)) completed.delete(questionKey(item));
      }
      writeCompleted(completed);
      location.reload();
    });
    status.after(again);
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

      for (const [position, choiceIndex] of attempt.choiceOrders[index].entries()) {
        const letter = 'ABCD'[position];
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'question-' + index;
        input.value = String(choiceIndex);
        input.checked = attempt?.answers[index] === choiceIndex;
        input.addEventListener('change', () => {
          if (minutes && Date.now() >= attempt.deadline) {
            input.checked = false;
            const previous = field.querySelector('input[value="' + attempt.answers[index] + '"]');
            if (previous) previous.checked = true;
            finish(true);
            return;
          }
          attempt.answers[index] = choiceIndex;
          save();
        });
        label.append(input, document.createTextNode(letter + '. ' + item.choices[choiceIndex]));
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
          explain.textContent = 'Explain with Grogy';
          explain.setAttribute('aria-label', 'Explain question ' + (index + 1) + ' with Grogy');
          explain.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('fivey:explain-answer', {
              detail: questionDetails(item, index)
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
      markCompleted(reviews.filter(({ field }) => field.querySelector(':checked')).map(({ item }) => item));
      const mode = params.get('mode') === 'set' && params.has('unit') ? 'unit' : 'allUnits';
      const results = reviews.flatMap(({ field, item }) => {
        const checked = field.querySelector(':checked');
        return checked ? [{ unit: item.unit, correct: Number(checked.value) === item.answer }] : [];
      });
      const practiceExam = params.get('mode') === 'timed' && params.get('from') === 'exams';
      if (practiceExam) recordPracticeExam(score, set.length, selected);
      const recording = recordSet(results, mode).catch(() => {
        status.textContent = message + ' Your analytics could not be saved.';
      });
      if (!practiceExam && analyticsAccount && analyticsAccount !== 'guest' && qualifiesForChest(mode, score, set.length)) {
        const openReward = async () => {
          const practiceSetup = minutes
            ? { mode: 'mixed', units: selected.join(','), count, minutes }
            : mode === 'unit' ? { mode: 'unit', unit: selected[0], count } : { count };
          const id = await createChest(analyticsAccount, course, selected[0], set.length, practiceSetup);
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
