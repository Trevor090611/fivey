import { analyticsAccount } from './auth-gate.js?v=orbies-chest1';
import { clickChest, clicksToOpen, getChest } from './orbies-wallet.js';

const id = new URLSearchParams(location.search).get('chest');
const page = document.body;
const reward = document.querySelector('#reward');
const unavailable = document.querySelector('#reward-unavailable');
const stars = document.querySelector('#reward-stars');
const button = document.querySelector('#reward-chest');
const rotor = button.querySelector('.chest-rotor');
const lid = button.querySelector('.chest-lid');
const prompt = document.querySelector('#chest-prompt');
const status = document.querySelector('#reward-status');
const returnLink = document.querySelector('#reward-return');
const reveal = document.querySelector('#reward-reveal');
const amount = document.querySelector('#reward-amount');
const revealReturn = document.querySelector('#reward-reveal-return');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

let reaction;

function renderRarity(chest) {
  if (stars.dataset.count !== String(chest.stars)) {
    const icons = Array.from({ length: 5 }, (_, index) => {
      const star = document.createElement('span');
      star.className = index < chest.stars ? 'reward-star is-earned' : 'reward-star';
      star.setAttribute('aria-hidden', 'true');
      return star;
    });
    stars.replaceChildren(...icons);
    stars.dataset.count = String(chest.stars);
    stars.setAttribute('aria-label', chest.stars + ' out of 5 stars');
  }
  page.dataset.rarity = chest.clicks ? String(chest.stars) : 'starting';
}

function play(target, keyframes, options) {
  if (reducedMotion.matches || !target.animate) return;
  return target.animate(keyframes, options);
}

function react(gainedStar) {
  reaction?.cancel();
  const frames = gainedStar
    ? [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(360deg)' }]
    : [0, -8, 7, -4, 2, 0].map(offset => ({ transform: 'translateX(' + offset + 'px)' }));
  reaction = play(rotor, frames, {
    duration: gainedStar ? 600 : 230,
    easing: gainedStar ? 'cubic-bezier(.28,.65,.34,1)' : 'ease-out'
  });
}

function showReward(chest) {
  reward.hidden = true;
  amount.textContent = 'You earned ' + chest.reward + ' Orbies!';
  reveal.hidden = false;
  amount.focus({ preventScroll: true });
}

async function openChest(chest, gainedStar) {
  button.disabled = true;
  prompt.hidden = true;
  page.classList.add('is-opening');
  if (gainedStar) {
    reaction?.cancel();
  } else {
    react(false);
    await reaction?.finished.catch(() => {});
  }
  // Each turn takes half as long as the previous one.
  const spin = play(rotor, [
    { transform: 'rotateY(0deg)', offset: 0 },
    { transform: 'rotateY(360deg)', offset: 8 / 15 },
    { transform: 'rotateY(720deg)', offset: 12 / 15 },
    { transform: 'rotateY(1080deg)', offset: 14 / 15 },
    { transform: 'rotateY(1440deg)', offset: 1 }
  ], { duration: 1600, easing: 'linear' });
  await spin?.finished.catch(() => {});
  const opening = play(lid, [
    { transform: 'rotateX(0deg)' },
    { transform: 'rotateX(104deg)' }
  ], { duration: 480, easing: 'cubic-bezier(.24,.68,.35,1)', fill: 'forwards' });
  button.classList.add('is-open');
  await opening?.finished.catch(() => {});
  showReward(chest);
}

try {
  let chest = analyticsAccount && analyticsAccount !== 'guest' ? getChest(analyticsAccount, id) : null;
  if (!chest) {
    unavailable.hidden = false;
  } else {
    returnLink.href = './practice.html?' + new URLSearchParams({
      course: chest.course,
      mode: 'unit',
      unit: chest.unit,
      count: chest.total
    });
    revealReturn.href = returnLink.href;
    renderRarity(chest);
    if (chest.clicks === clicksToOpen) {
      showReward(chest);
    } else {
      reward.hidden = false;
      let clicksQueued = 0;
      let pending = Promise.resolve();
      button.addEventListener('click', () => {
        if (chest.clicks + clicksQueued >= clicksToOpen) return;
        clicksQueued++;
        pending = pending.then(async () => {
          const previousStars = chest.stars;
          try {
            chest = await clickChest(analyticsAccount, id);
          } catch {
            status.classList.add('is-error');
            status.textContent = 'Your click could not be saved. Try again.';
            return;
          } finally {
            clicksQueued--;
          }
          renderRarity(chest);
          status.classList.remove('is-error');
          const gainedStar = chest.stars > previousStars;
          if (chest.clicks === clicksToOpen) {
            await openChest(chest, gainedStar);
          } else {
            status.textContent = gainedStar ? chest.stars + ' out of 5 stars' : '';
            react(gainedStar);
          }
        });
      });
    }
  }
} catch {
  unavailable.textContent = 'Fivey could not load your chest. Check that site storage is available, then refresh.';
  unavailable.hidden = false;
}
