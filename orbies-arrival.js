import { analyticsAccount } from './auth-gate.js?v=orbies-chest1';
import { getChest } from './orbies-wallet.js?v=chest20';

const transferKey = 'fivey-orbies-arrival';

const coinSpacing = 165;
const flightDuration = 1150;

function playCoinChime(audio) {
  if (audio?.state !== 'running') return;
  const start = audio.currentTime;
  // A low metallic strike and two higher tones make a short coin clink.
  for (const [frequency, level, delay, decay] of [
    [1120, .055, 0, .082],
    [1890, .037, .017, .11],
    [3010, .019, .023, .063]
  ]) {
    const strike = start + delay;
    const tone = audio.createOscillator();
    const volume = audio.createGain();
    tone.frequency.value = frequency;
    volume.gain.setValueAtTime(.0001, strike);
    volume.gain.exponentialRampToValueAtTime(level, strike + .004);
    volume.gain.exponentialRampToValueAtTime(.0001, strike + decay);
    tone.connect(volume).connect(audio.destination);
    tone.start(strike);
    tone.stop(strike + decay);
  }
}

async function celebrate(counter, reward) {
  const icon = counter.querySelector('.fivey-orbies-icon');
  if (!icon) return;
  const motion = !matchMedia('(prefers-reduced-motion: reduce)').matches && Boolean(icon.animate);
  const Audio = window.AudioContext || window.webkitAudioContext;
  let audio;
  if (Audio) {
    try {
      audio = new Audio();
      void audio.resume().catch(() => {});
    } catch {
      audio = undefined;
    }
  }

  // Some browsers require a fresh gesture after navigating to the practice page.
  if (audio && audio.state !== 'running') {
    const soundButton = document.createElement('button');
    soundButton.type = 'button';
    soundButton.textContent = 'Enable coin sounds';
    Object.assign(soundButton.style, {
      position: 'fixed', right: '16px', bottom: '16px', zIndex: '11000',
      padding: '8px 12px', borderRadius: '8px'
    });
    document.body.append(soundButton);
    await new Promise(resolve => {
      const ready = () => {
        clearTimeout(timeout);
        audio.removeEventListener('statechange', onAudioState);
        soundButton.remove();
        resolve();
      };
      const onAudioState = () => {
        if (audio.state === 'running') ready();
      };
      const timeout = setTimeout(ready, 2500);
      audio.addEventListener('statechange', onAudioState);
      soundButton.onclick = () => void audio.resume().then(ready, ready);
      onAudioState();
    });
  }

  const launch = async index => {
    await new Promise(resolve => setTimeout(resolve, index * coinSpacing));
    if (motion) {
      const target = icon.getBoundingClientRect();
      const x = innerWidth / 2;
      const y = innerHeight * .63;
      const dx = target.left + target.width / 2 - x;
      const dy = target.top + target.height / 2 - y;
      const coin = document.createElement('img');
      coin.src = icon.src;
      coin.alt = '';
      coin.setAttribute('aria-hidden', 'true');
      Object.assign(coin.style, {
        position: 'fixed', left: x - 17 + 'px', top: y - 17 + 'px',
        width: '34px', height: '34px', zIndex: '10999', pointerEvents: 'none'
      });
      document.body.append(coin);
      try {
        await coin.animate([
          { transform: 'scale(.78)', opacity: .1 },
          { transform: 'translate(' + dx * .35 + 'px,' + (dy * .55 - 42) + 'px) scale(1.25)', opacity: 1, offset: .46 },
          { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(.36)', opacity: .85 }
        ], { duration: flightDuration, easing: 'cubic-bezier(.28,.65,.45,1)', fill: 'both' }).finished;
      } finally {
        coin.remove();
      }
      icon.animate([{ transform: 'scale(1.28)' }, { transform: 'scale(1)' }], 145);
    }
    playCoinChime(audio);
  };
  await Promise.allSettled(Array.from({ length: reward }, (_, index) => launch(index)));
  if (audio) setTimeout(() => void audio.close().catch(() => {}), 230);
}

try {
  const transfer = JSON.parse(sessionStorage.getItem(transferKey) || 'null');
  if (transfer?.account === analyticsAccount && transfer.destination === location.search) {
    sessionStorage.removeItem(transferKey);
    const chest = getChest(analyticsAccount, transfer.chest);
    const counter = document.querySelector('.fivey-orbies');
    if (counter && Number.isInteger(chest?.reward) && chest.reward > 0 && chest.reward <= 15) {
      void celebrate(counter, chest.reward);
    }
  }
} catch {
  // The balance was already saved by the chest. The animation is optional.
}
