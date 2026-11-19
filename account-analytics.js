import { analyticsAccount } from './auth-gate.js?v=orbies1';
import { units } from './practice-units.js?v=5';

const subjects = [
  ['biology', 'AP Biology'],
  ['environmental-science', 'AP Environmental Science'],
  ['chemistry', 'AP Chemistry'],
  ['physics-1', 'AP Physics 1'],
  ['psychology', 'AP Psychology'],
  ['calculus-ab', 'AP Calculus AB'],
  ['macroeconomics', 'AP Macroeconomics']
];
const section = document.querySelector('#account-analytics');
const list = document.querySelector('#account-analytics-list');
const planKey = 'fivey-study-plan-v1:' + analyticsAccount;
const percent = new Intl.NumberFormat(undefined, { style: 'percent', maximumFractionDigits: 1 });

const style = document.createElement('style');
style.textContent =   '.account-analytics{padding:28px 0;border-bottom:1px solid var(--line)}' +
  '.account-analytics h2{font-size:clamp(28px,4vw,40px)}' +
  '.account-analytics-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:18px}' +
  '.account-analytics-card{min-width:0;padding:clamp(16px,3vw,24px);border:1px solid var(--line);border-radius:16px;background:var(--white)}' +
  '.account-analytics-card h3{margin:0 0 14px;font-size:clamp(20px,3vw,27px);line-height:1.2}' +
  '.account-analytics-card dl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:0 0 18px}' +
  '.account-analytics-card dl div{padding:12px;border:1px solid var(--line);border-radius:8px}' +
  '.account-analytics-card dt{font-size:13px;color:var(--muted)}' +
  '.account-analytics-card dd{margin:2px 0 0;font-size:24px;font-weight:750;font-variant-numeric:tabular-nums}' +
  '.account-analytics-units{display:grid;grid-template-columns:1fr 1fr;gap:12px}' +
  '.account-analytics-units h4{margin:0 0 6px;font-size:16px}' +
  '.account-analytics-units ul{margin:0;padding-left:18px}' +
  '.account-analytics-units li+li{margin-top:6px}' +
  '.account-analytics-empty{margin-top:12px;color:var(--muted)}' +
  '@media(max-width:700px){.account-analytics-list{grid-template-columns:1fr}}' +
  '@media(max-width:420px){.account-analytics-units{grid-template-columns:1fr}}';
document.head.append(style);

function readPlan() {
  try {
    const saved = JSON.parse(localStorage.getItem(planKey) || '[]');
    return Array.isArray(saved)
      ? saved.filter(item => item && subjects.some(([id, name]) => name === item.subject))
      : [];
  } catch {
    return [];
  }
}

function unitAverage(stats) {
  const legacyAttempted = Number(stats.legacyAttempted ?? stats.attempted) || 0;
  const legacyCorrect = Number(stats.legacyCorrect ?? stats.correct) || 0;
  const setCount = Number(stats.unitSetCount) || 0;
  const setAccuracyTotal = Number(stats.unitSetAccuracyTotal) || 0;
  const allAttempted = Number(stats.allUnitsAttempted) || 0;
  const allCorrect = Number(stats.allUnitsCorrect) || 0;
  const observations = legacyAttempted + setCount + allAttempted;
  const correct = legacyCorrect + setAccuracyTotal + allCorrect;
  return { accuracy: observations ? correct / observations : 0, observations };
}

function readAnalytics(id) {
  let totals;
  try {
    totals = JSON.parse(localStorage.getItem('fivey-practice-analytics-v1:' + analyticsAccount + ':' + id) || 'null');
  } catch {
    totals = null;
  }
  const attempted = Number.isFinite(Number(totals?.attempted)) ? Math.max(0, Number(totals.attempted)) : 0;
  const correct = Number.isFinite(Number(totals?.correct)) ? Math.max(0, Number(totals.correct)) : 0;
  const rows = Object.entries(totals?.units || {})
    .filter(([unit, stats]) => units[id]?.[Number(unit) - 1] && unitAverage(stats).observations > 0)
    .map(([unit, stats]) => [unit, stats, unitAverage(stats)]);
  const strength = rows.slice().sort((a, b) => b[2].accuracy - a[2].accuracy || b[2].observations - a[2].observations).slice(0, 2);
  const weakness = rows.slice().sort((a, b) => a[2].accuracy - b[2].accuracy || b[2].observations - a[2].observations).slice(0, 2);
  return { attempted, correct, accuracy: attempted ? correct / attempted : null, strength, weakness };
}
function addUnitList(parent, title, rows, id) {
  const group = document.createElement('div');
  const heading = document.createElement('h4');
  heading.textContent = title;
  const ul = document.createElement('ul');
  for (const [unit, , stats] of rows) {
    const li = document.createElement('li');
    li.textContent = 'Unit ' + unit + ': ' + units[id][Number(unit) - 1] + ' — ' + percent.format(stats.accuracy) + ' average accuracy';
    ul.append(li);
  }
  if (!rows.length) {
    const li = document.createElement('li');
    li.textContent = 'No unit scores yet.';
    ul.append(li);
  }
  group.append(heading, ul);
  parent.append(group);
}

function render() {
  if (!analyticsAccount || !section || !list) return;
  const selected = new Set(readPlan().map(item => item.subject));
  const ranked = subjects
    .filter(([, name]) => selected.has(name))
    .map(([id, name]) => ({ id, name, ...readAnalytics(id) }))
    .sort((a, b) => (b.accuracy ?? -1) - (a.accuracy ?? -1) || b.attempted - a.attempted || a.name.localeCompare(b.name));
  list.replaceChildren();
  if (!ranked.length) {
    const empty = document.createElement('p');
    empty.className = 'account-analytics-empty';
    empty.textContent = 'Select AP subjects in Plan My Study to see their practice analytics here.';
    list.append(empty);
    return;
  }
  for (const [index, subject] of ranked.entries()) {
    const card = document.createElement('article');
    card.className = 'account-analytics-card';
    const heading = document.createElement('h3');
    heading.textContent = (index + 1) + '. ' + subject.name;
    const metrics = document.createElement('dl');
    for (const [label, value] of [
      ['Total Questions Attempted', subject.attempted.toLocaleString()],
      ['Cumulative Accuracy', subject.accuracy === null ? '—' : percent.format(subject.accuracy)]
    ]) {
      const item = document.createElement('div');
      const term = document.createElement('dt');
      term.textContent = label;
      const detail = document.createElement('dd');
      detail.textContent = value;
      item.append(term, detail);
      metrics.append(item);
    }
    card.append(heading, metrics);
    if (subject.attempted) {
      const unitsGroup = document.createElement('div');
      unitsGroup.className = 'account-analytics-units';
      addUnitList(unitsGroup, 'Strength', subject.strength, subject.id);
      addUnitList(unitsGroup, 'Weakness', subject.weakness, subject.id);
      card.append(unitsGroup);
    } else {
      const empty = document.createElement('p');
      empty.className = 'account-analytics-empty';
      empty.textContent = 'No completed practice sets yet.';
      card.append(empty);
    }
    list.append(card);
  }
}

render();
window.addEventListener('fivey:study-plan-updated', render);
window.addEventListener('pageshow', render);
window.addEventListener('storage', event => {
  if (event.key === null || event.key === planKey || subjects.some(([id]) => event.key === 'fivey-practice-analytics-v1:' + analyticsAccount + ':' + id)) render();
});
