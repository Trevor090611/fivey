import { analyticsAccount } from './auth-gate.js?v=orbies-chest1';
import { clickChest, clicksToOpen, getChest } from './orbies-wallet.js?v=chest20';

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
  page.dataset.rarity = String(chest.stars);
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
  const spin = play(rotor, [
    { transform: 'translateY(0) rotateY(0deg) scale(1)' },
    { transform: 'translateY(-18px) rotateY(135deg) scale(1.08)', offset: .48 },
    { transform: 'translateY(-26px) rotateY(720deg) scale(1.17)' }
  ], { duration: 1150, easing: 'ease-in', fill: 'forwards' });
  await spin?.finished.catch(() => {});
  const opening = play(lid, [
    { transform: 'rotateX(0deg)' },
    { transform: 'rotateX(104deg)' }
  ], { duration: 480, easing: 'cubic-bezier(.24,.68,.35,1)', fill: 'forwards' });
  button.classList.add('is-open');
  page.classList.add('is-releasing');
  await opening?.finished.catch(() => {});
  showReward(chest);
}

try {
  let chest = analyticsAccount && analyticsAccount !== 'guest' ? getChest(analyticsAccount, id) : null;
  if (!chest) {
    unavailable.hidden = false;
  } else {
    revealReturn.href = './practice.html?' + new URLSearchParams({
      course: chest.course,
      ...(chest.practiceSetup ?? { mode: 'unit', unit: chest.unit, count: chest.total })
    });
    revealReturn.addEventListener('click', () => {
      try {
        sessionStorage.setItem('fivey-orbies-arrival', JSON.stringify({
          account: analyticsAccount, chest: id, destination: revealReturn.search
        }));
      } catch {
        // Returning to practice still works when session storage is unavailable.
      }
    });
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
