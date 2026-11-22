import { analyticsAccount } from './auth-gate.js?v=orbies-chest1';
import { clickChest, clicksToOpen, getChest } from './orbies-wallet.js';

const id = new URLSearchParams(location.search).get('chest');
const reward = document.querySelector('#reward');
const unavailable = document.querySelector('#reward-unavailable');
const stage = document.querySelector('.reward-stage');
const stars = document.querySelector('#reward-stars');
const button = document.querySelector('#reward-chest');
const status = document.querySelector('#reward-status');
const returnLink = document.querySelector('#reward-return');

function render(chest) {
  const opened = chest.clicks === clicksToOpen;
  const remaining = clicksToOpen - chest.clicks;
  const label = chest.stars + ' out of 5 stars';
  const icons = document.createElement('span');
  icons.setAttribute('aria-hidden', 'true');
  icons.textContent = '★'.repeat(chest.stars) + '☆'.repeat(5 - chest.stars);
  stars.replaceChildren(icons);
  stars.setAttribute('aria-label', label);
  stage.dataset.rarity = chest.clicks ? String(chest.stars) : 'starting';
  button.classList.toggle('is-open', opened);
  button.disabled = opened;
  button.setAttribute('aria-label', opened ? 'Opened treasure chest' : 'Unlock treasure chest, ' + label);
  status.textContent = opened
    ? 'You earned ' + chest.reward + ' Orbies!'
    : remaining + (remaining === 1 ? ' click' : ' clicks') + ' to unlock';
}

try {
  const chest = analyticsAccount && analyticsAccount !== 'guest' ? getChest(analyticsAccount, id) : null;
  if (!chest) {
    unavailable.hidden = false;
  } else {
    returnLink.href = './practice.html?' + new URLSearchParams({
      course: chest.course,
      mode: 'unit',
      unit: chest.unit,
      count: chest.total
    });
    render(chest);
    reward.hidden = false;

    let saving = false;
    button.addEventListener('click', async () => {
      if (saving) return;
      saving = true;
      try {
        render(await clickChest(analyticsAccount, id));
        if (button.disabled) returnLink.focus();
      } catch {
        status.textContent = 'Your click could not be saved. Try again.';
      } finally {
        saving = false;
      }
    });
  }
} catch {
  unavailable.textContent = 'Fivey could not load your chest. Check that site storage is available, then refresh.';
  unavailable.hidden = false;
}
