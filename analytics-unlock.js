// Each AP subject's Analytics costs 20 Orbies to unlock, once. Unlocks are saved under
// a key that includes the account id, so account-data.js keeps them on the user's account.
import { getOrbiesBalance, spendOrbies } from './orbies-wallet.js?v=grogy1';

export const analyticsCost = 20;

const format = new Intl.NumberFormat();

function unlocksKey(account) {
  return 'fivey-analytics-unlocks-v1:' + account;
}

function readUnlocks(account) {
  try {
    const saved = JSON.parse(localStorage.getItem(unlocksKey(account)) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function isAnalyticsUnlocked(account, course) {
  return Boolean(account) && readUnlocks(account).includes(course);
}

// Resolves true once the subject is unlocked, or false if the user doesn't have enough Orbies.
export function unlockAnalytics(account, course) {
  if (!account) return Promise.resolve(false);
  const key = unlocksKey(account);
  const unlock = async () => {
    if (isAnalyticsUnlocked(account, course)) return true;
    if (!(await spendOrbies(account, analyticsCost))) return false;
    localStorage.setItem(key, JSON.stringify([...new Set([...readUnlocks(account), course])]));
    window.dispatchEvent(new CustomEvent('fivey:analytics-unlocked', { detail: { course } }));
    return true;
  };
  return navigator.locks ? navigator.locks.request(key, unlock) : unlock();
}

function balanceOf(account) {
  try {
    return getOrbiesBalance(account);
  } catch {
    return 0;
  }
}

function addStyles() {
  if (document.querySelector('#analytics-unlock-styles')) return;
  const style = document.createElement('style');
  style.id = 'analytics-unlock-styles';
  style.textContent = `
#analytics-unlock-dialog{--unlock-bg:#fff;--unlock-text:#000;--unlock-accent:#a4e568;width:min(460px,calc(100% - 32px));max-height:calc(100% - 32px);box-sizing:border-box;margin:auto;padding:clamp(20px,5vw,30px);color:var(--unlock-text);background:var(--unlock-bg);border:2px solid var(--unlock-accent);border-radius:16px;text-align:center;box-shadow:0 18px 60px #0005}
:root[data-fivey-dark] #analytics-unlock-dialog{--unlock-bg:#000;--unlock-text:#fff;--unlock-accent:#62e7ff}
#analytics-unlock-dialog::backdrop{background:#080d147a}
#analytics-unlock-dialog h2{margin:0 0 12px;font-size:clamp(20px,4vw,26px);line-height:1.25}
#analytics-unlock-dialog p{margin:0 0 10px;line-height:1.5}
#analytics-unlock-dialog [data-balance]{font-weight:750}
.analytics-unlock-actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:20px}
.analytics-unlock-actions button,.analytics-locked button{min-height:44px;padding:8px 16px;border-radius:8px;font:inherit;font-weight:750;cursor:pointer}
.analytics-locked{padding:20px;border:2px solid #a4e568;border-radius:12px}
:root[data-fivey-dark] .analytics-locked{border-color:#62e7ff}
.analytics-locked h3{margin:0 0 8px;font-size:20px}
.analytics-locked p{margin:0 0 12px}
.analytics-lock-icon{display:inline-block;width:1em;height:1em;margin-left:.45em;vertical-align:-.15em}
`;
  document.head.append(style);
}

// A small padlock drawn in the button's text color, shown after "Analytics" while it is locked.
export function lockIcon() {
  addStyles();
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'analytics-lock-icon');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.innerHTML = '<rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>';
  return svg;
}

// Shows the padlock on a button while the subject is locked and removes it once unlocked.
export function showLockState(button, account, course) {
  const locked = !isAnalyticsUnlocked(account, course);
  const icon = button.querySelector('.analytics-lock-icon');
  if (locked && !icon) button.append(lockIcon());
  if (!locked) icon?.remove();
  if (locked) button.setAttribute('aria-label', button.textContent.trim() + ' (locked)');
  else button.removeAttribute('aria-label');
}

// Asks the user to spend the Orbies. Resolves true if the subject ends up unlocked.
export function askToUnlock(account, course, name) {
  if (isAnalyticsUnlocked(account, course)) return Promise.resolve(true);
  addStyles();
  document.querySelector('#analytics-unlock-dialog')?.remove();
  const dialog = document.createElement('dialog');
  dialog.id = 'analytics-unlock-dialog';
  dialog.setAttribute('aria-labelledby', 'analytics-unlock-title');
  const title = document.createElement('h2');
  title.id = 'analytics-unlock-title';
  const body = document.createElement('div');
  const actions = document.createElement('div');
  actions.className = 'analytics-unlock-actions';
  dialog.append(title, body, actions);
  document.body.append(dialog);

  return new Promise(resolve => {
    let unlocked = false;
    const paragraph = text => Object.assign(document.createElement('p'), { textContent: text });
    const button = (text, onClick) => {
      const element = Object.assign(document.createElement('button'), { type: 'button', textContent: text });
      element.addEventListener('click', onClick);
      return element;
    };
    const showShortfall = () => {
      const balance = balanceOf(account);
      title.textContent = 'Not enough Orbies';
      body.replaceChildren(
        paragraph(`Unlocking ${name} Analytics costs ${analyticsCost} Orbies. You have ${format.format(balance)}.`),
        paragraph('Score above 85% on a unit practice set to earn a chest of Orbies.')
      );
      const ok = button('OK', () => dialog.close());
      actions.replaceChildren(ok);
      ok.focus();
    };
    const showOffer = () => {
      const balance = balanceOf(account);
      title.textContent = `Unlock ${name} Analytics?`;
      const balanceLine = paragraph(`You have ${format.format(balance)} Orbies.`);
      balanceLine.dataset.balance = '';
      body.replaceChildren(
        paragraph(`It costs ${analyticsCost} Orbies, one time. After that, ${name} Analytics stays unlocked.`),
        balanceLine
      );
      const cancel = button('Cancel', () => dialog.close());
      const confirm = button(`Unlock for ${analyticsCost} Orbies`, async () => {
        cancel.disabled = confirm.disabled = true;
        try {
          unlocked = await unlockAnalytics(account, course);
        } catch {
          unlocked = false;
        }
        if (unlocked) dialog.close();
        else showShortfall();
      });
      actions.replaceChildren(cancel, confirm);
      confirm.focus();
    };
    dialog.addEventListener('close', () => {
      dialog.remove();
      resolve(unlocked);
    });
    if (balanceOf(account) < analyticsCost) showShortfall();
    else showOffer();
    dialog.showModal();
  });
}

// The box shown in place of a subject's results while its Analytics is locked.
export function lockedNotice(account, course, name, onUnlock, headingLevel = 'h3') {
  addStyles();
  const box = document.createElement('div');
  box.className = 'analytics-locked';
  const heading = document.createElement(headingLevel);
  heading.textContent = `${name} Analytics is locked`;
  const text = document.createElement('p');
  text.textContent = `Unlock it once for ${analyticsCost} Orbies to see your questions attempted, accuracy, Strength and Weakness for ${name}.`;
  const unlock = document.createElement('button');
  unlock.type = 'button';
  unlock.textContent = `Unlock for ${analyticsCost} Orbies`;
  unlock.append(lockIcon());
  unlock.addEventListener('click', async () => {
    if (await askToUnlock(account, course, name)) onUnlock();
  });
  box.append(heading, text, unlock);
  return box;
}
