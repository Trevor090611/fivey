// Grogy the cat: the button that opens the Grogy chat. Visitors can click it (it mews and opens the
// chat) or drag it anywhere on the screen (it runs on all four legs while dragged). On its own it
// blinks every 2 seconds, sometimes walks around for up to 3 seconds, and grooms itself after 10 idle
// seconds.
// Sitting, the cat is the original drawing in three layers (tail, body, head). Walking and running,
// it plays the walk cycle taken from Grogy's walking video.

const image = name => new URL('./grogy/cat-' + name + '.png', import.meta.url).href;
const positionKey = 'grogy-cat-position-v1';
const groomAfter = 10000;
const groomLength = 3600;
const walkSpeed = 47; // pixels per second, matched to the stride so the paws don't slide
const margin = 8;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Eyelids drawn over each eye in the head image's own coordinates (600 × 641).
const eyes = [
  { cx: 105, cy: 255, rx: 37, ry: 32, tilt: -8 },
  { cx: 237, cy: 228, rx: 41, ry: 35, tilt: -10 }
];
const lids = prefix => eyes.map(({ cx, cy, rx, ry, tilt }, index) => `
  <clipPath id="${prefix}-${index}"><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${tilt} ${cx} ${cy})"/></clipPath>
  <g clip-path="url(#${prefix}-${index})">
    <rect class="cat-lid" x="${cx - rx - 4}" y="${cy - ry - 4}" width="${2 * rx + 8}" height="${2 * ry + 8}"/>
  </g>
  <path class="cat-lash" d="M${cx - rx + 4} ${cy + 4} Q${cx} ${cy + ry * 0.55} ${cx + rx - 4} ${cy + 4}"
    transform="rotate(${tilt} ${cx} ${cy})"/>`).join('');

// Walking and running: 14 poses of one stride from Grogy's walking video, side by side in one strip
// (each pose 385 × 253, facing right). CSS steps through them.
const walkStrip = new URL('./grogy/cat-walk.webp', import.meta.url).href;

export const catMarkup = `
  <span class="cat-shadow" aria-hidden="true"></span>
  <span class="cat-rig" aria-hidden="true">
    <img class="cat-tail" src="${image('tail')}" alt="" draggable="false">
    <img class="cat-body" src="${image('body')}" alt="" draggable="false">
    <span class="cat-head">
      <img src="${image('head')}" alt="" draggable="false">
      <svg class="cat-face" viewBox="0 0 600 641" focusable="false">
        ${lids('grogy-eye')}
        <ellipse class="cat-tongue" cx="172" cy="322" rx="15" ry="11"/>
      </svg>
    </span>
  </span>
  <span class="cat-walker" aria-hidden="true"><img src="${walkStrip}" alt="" draggable="false"></span>`;

let audio;
// A short, high kitten "mew": a soft, rounded tone that slides up and gently back down, sometimes
// twice in a row.
function mew(start, pitch, length) {
  const voice = audio.createOscillator();
  voice.type = 'triangle';
  const overtone = audio.createOscillator();
  overtone.type = 'sine';
  const curve = (oscillator, multiple) => {
    const f = oscillator.frequency;
    f.setValueAtTime(820 * pitch * multiple, start);
    f.exponentialRampToValueAtTime(1180 * pitch * multiple, start + length * 0.25);
    f.exponentialRampToValueAtTime(1260 * pitch * multiple, start + length * 0.5);
    f.exponentialRampToValueAtTime(900 * pitch * multiple, start + length);
  };
  curve(voice, 1);
  curve(overtone, 2);
  const vibrato = audio.createOscillator();
  const vibratoDepth = audio.createGain();
  vibrato.frequency.value = 9;
  vibratoDepth.gain.value = 14 * pitch;
  vibrato.connect(vibratoDepth).connect(voice.frequency);
  const overtoneLevel = audio.createGain();
  overtoneLevel.gain.value = 0.25;
  const mouth = audio.createBiquadFilter();
  mouth.type = 'lowpass';
  mouth.Q.value = 2;
  mouth.frequency.setValueAtTime(1600, start);
  mouth.frequency.exponentialRampToValueAtTime(4200, start + length * 0.35);
  mouth.frequency.exponentialRampToValueAtTime(2000, start + length);
  const volume = audio.createGain();
  volume.gain.setValueAtTime(0.0001, start);
  volume.gain.exponentialRampToValueAtTime(0.24, start + 0.03);
  volume.gain.setValueAtTime(0.24, start + length * 0.55);
  volume.gain.exponentialRampToValueAtTime(0.0001, start + length);
  voice.connect(mouth);
  overtone.connect(overtoneLevel).connect(mouth);
  mouth.connect(volume).connect(audio.destination);
  for (const oscillator of [voice, overtone, vibrato]) {
    oscillator.start(start);
    oscillator.stop(start + length + 0.05);
  }
}

function meow() {
  try {
    audio ??= new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') audio.resume();
    const now = audio.currentTime;
    const pitch = 0.95 + Math.random() * 0.2;
    mew(now, pitch, 0.3 + Math.random() * 0.08);
    // Now and then a second, higher little mew.
    if (Math.random() < 0.35) mew(now + 0.38, pitch * 1.08, 0.22);
  } catch {
    // No sound support: the cat still opens the chat.
  }
}

function readPosition() {
  try {
    const saved = JSON.parse(localStorage.getItem(positionKey));
    if (Number.isFinite(saved?.right) && Number.isFinite(saved?.bottom)) return saved;
  } catch {}
  return null;
}

function savePosition(position) {
  try {
    localStorage.setItem(positionKey, JSON.stringify(position));
  } catch {}
}

// Turns a button into Grogy the cat. `onActivate` runs on a click or keyboard press (not a drag).
export function grogyCat(button, { onActivate }) {
  button.classList.add('grogy-cat');
  button.insertAdjacentHTML('afterbegin', catMarkup);
  const random = (low, high) => low + Math.random() * (high - low);

  // Position is the gap to the right and bottom edges, so the cat stays in its corner when the
  // window is resized.
  let place = readPosition() ?? { right: 16, bottom: 16 };
  let facing = 1; // 1 = facing left (as drawn), -1 = facing right
  let state = 'idle';
  let idleSince = performance.now();
  let walkTimer;
  let groomTimer;
  let walking;

  const size = () => button.getBoundingClientRect();
  function clamp(next) {
    const { width, height } = size();
    return {
      right: Math.min(Math.max(next.right, margin), Math.max(margin, innerWidth - width - margin)),
      bottom: Math.min(Math.max(next.bottom, margin), Math.max(margin, innerHeight - height - margin))
    };
  }
  function moveTo(next) {
    place = clamp(next);
    button.style.right = place.right + 'px';
    button.style.bottom = place.bottom + 'px';
  }
  function face(direction) {
    if (!direction || direction === facing) return;
    facing = direction;
    button.style.setProperty('--facing', facing);
  }
  function setState(next) {
    state = next;
    button.dataset.state = next;
    if (next === 'idle') {
      idleSince = performance.now();
      planGroom();
    } else {
      clearTimeout(groomTimer);
    }
  }

  // Grooming: after 10 seconds without moving, then again after every further 10 idle seconds.
  function planGroom() {
    clearTimeout(groomTimer);
    if (reducedMotion.matches) return;
    groomTimer = setTimeout(() => {
      if (state !== 'idle' || performance.now() - idleSince < groomAfter - 50) return;
      setState('grooming');
      groomTimer = setTimeout(() => {
        if (state === 'grooming') setState('idle');
      }, groomLength);
    }, groomAfter);
  }

  // Walking on its own: at random moments, a slow walk of up to 3 seconds in a random direction.
  function planWalk() {
    clearTimeout(walkTimer);
    if (reducedMotion.matches) return;
    walkTimer = setTimeout(startWalk, random(1500, 16000));
  }
  function startWalk() {
    if (state !== 'idle' || document.hidden) {
      planWalk();
      return;
    }
    const length = random(1000, 3000);
    const angle = random(-0.45, 0.45) + (Math.random() < 0.5 ? 0 : Math.PI);
    const dx = Math.cos(angle) * walkSpeed;
    const dy = Math.sin(angle) * walkSpeed * 0.4;
    face(dx > 0 ? -1 : 1);
    setState('walking');
    const start = performance.now();
    let last = start;
    const step = now => {
      if (state !== 'walking') return;
      const seconds = (now - last) / 1000;
      last = now;
      const before = place;
      moveTo({ right: place.right - dx * seconds, bottom: place.bottom - dy * seconds });
      const blocked = place.right === before.right && place.bottom === before.bottom && now - start > 100;
      if (now - start >= length || blocked) {
        setState('idle');
        planWalk();
        return;
      }
      walking = requestAnimationFrame(step);
    };
    walking = requestAnimationFrame(step);
  }

  // Dust puffs behind the cat while it runs.
  let lastPuff = 0;
  function puff(now) {
    if (now - lastPuff < 90 || reducedMotion.matches) return;
    lastPuff = now;
    const dust = document.createElement('span');
    dust.className = 'cat-dust';
    dust.setAttribute('aria-hidden', 'true');
    dust.style.setProperty('--drift', facing * random(8, 18) + 'px');
    dust.style.left = (facing > 0 ? random(70, 90) : random(10, 30)) + '%';
    button.append(dust);
    dust.addEventListener('animationend', () => dust.remove());
  }

  // Dragging: the cat follows the pointer and runs; a press without movement is a click.
  let drag = null;
  let dragged = false;
  let stillTimer;
  button.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    const { left, top } = size();
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, offsetX: event.clientX - left, offsetY: event.clientY - top, moved: false };
    dragged = false;
    // Capture now, so a quick flick still moves the cat and the release still lands on it.
    try {
      button.setPointerCapture(event.pointerId);
    } catch {}
  });
  button.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    if (!drag.moved && Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < 6) return;
    if (!drag.moved) {
      drag.moved = true;
      cancelAnimationFrame(walking);
      setState('running');
    }
    const { width, height } = size();
    const dx = event.clientX - drag.x;
    if (Math.abs(dx) > 1) face(dx > 0 ? -1 : 1);
    drag.x = event.clientX;
    drag.y = event.clientY;
    moveTo({ right: innerWidth - (event.clientX - drag.offsetX) - width, bottom: innerHeight - (event.clientY - drag.offsetY) - height });
    // Held still mid-drag: stop running until it moves again.
    button.dataset.state = 'running';
    puff(performance.now());
    clearTimeout(stillTimer);
    stillTimer = setTimeout(() => {
      if (drag?.moved) button.dataset.state = 'held';
    }, 160);
  });
  const endDrag = event => {
    if (!drag || event.pointerId !== drag.id) return;
    dragged = drag.moved;
    drag = null;
    clearTimeout(stillTimer);
    if (dragged) {
      savePosition(place);
      setState('idle');
      planWalk();
    }
  };
  button.addEventListener('pointerup', endDrag);
  button.addEventListener('pointercancel', endDrag);
  button.addEventListener('click', event => {
    // A keyboard press (detail 0) is always a click; a pointer release after a drag is not.
    if (dragged && event.detail !== 0) {
      dragged = false;
      event.preventDefault();
      return;
    }
    meow();
    button.classList.remove('is-meowing');
    void button.offsetWidth;
    button.classList.add('is-meowing');
    if (state === 'walking' || state === 'grooming') {
      cancelAnimationFrame(walking);
      setState('idle');
    }
    onActivate();
  });
  button.addEventListener('animationend', event => {
    if (event.animationName === 'grogy-cat-hop') button.classList.remove('is-meowing');
  });

  addEventListener('resize', () => moveTo(place));
  reducedMotion.addEventListener?.('change', () => {
    planWalk();
    planGroom();
  });
  moveTo(place);
  button.style.setProperty('--facing', facing);
  setState('idle');
  planWalk();
}
