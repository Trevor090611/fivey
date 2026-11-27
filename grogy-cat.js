// Grogy the cat: the button that opens the Grogy chat. Visitors can click it (it mews and opens the
// chat) or drag it anywhere on the screen (it runs on all four legs while dragged). On its own it
// blinks every 2 seconds, sometimes walks around for up to 3 seconds, grooms itself after 10 still
// seconds, and falls asleep in a loaf after 30 seconds without anyone touching it.
// Sitting, the cat is the original drawing in three layers (tail, body, head). Walking, running and
// grooming play frames taken from Grogy's walking and grooming videos, scaled to the same size.

const image = name => new URL('./grogy/cat-' + name + '.png', import.meta.url).href;
const positionKey = 'grogy-cat-position-v1';
const groomAfter = 10000;
const groomLength = 2600; // 31 poses at the video's 12 poses a second
const sleepAfter = 30000;
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
// Grooming: 31 poses from Grogy's grooming video (paw up, licks, paw down), each 211 × 210, facing
// left like the drawing. The first pose lines up exactly with the sitting drawing.
const groomStrip = new URL('./grogy/cat-groom.webp', import.meta.url).href;

// Sleeping: the drawing's head lowered onto a loaf-shaped body, tail wrapped around the front.
// Drawn in the drawing's own coordinates (600 × 641) so everything stays the same size.
const loaf = `
  <svg class="cat-loaf" viewBox="0 0 600 641" focusable="false" aria-hidden="true">
    <defs>
      <linearGradient id="grogy-loaf-fur" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f6ebdb"/><stop offset=".7" stop-color="#f0e1cc"/><stop offset="1" stop-color="#e2cdb3"/>
      </linearGradient>
      <radialGradient id="grogy-loaf-rump" cx=".97" cy=".5" r=".5">
        <stop offset="0" stop-color="#8f857c" stop-opacity=".8"/><stop offset="1" stop-color="#8f857c" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <g class="loaf-body">
      <path class="loaf-fur" d="M130 560 C120 430 250 330 410 330 C560 330 640 420 630 540 C625 610 585 641 520 641 L210 641 C160 641 133 610 130 560 Z"/>
      <path class="loaf-rump" d="M130 560 C120 430 250 330 410 330 C560 330 640 420 630 540 C625 610 585 641 520 641 L210 641 C160 641 133 610 130 560 Z"/>
      <path class="loaf-detail" d="M360 352 c22 -6 46 -6 66 2 M470 366 c18 2 34 10 46 20 M560 450 c10 20 12 40 8 62"/>
      <path class="loaf-tail-outline" d="M585 585 C610 640 450 650 330 640 C255 634 205 618 196 590"/>
      <path class="loaf-tail" d="M585 585 C610 640 450 650 330 640 C255 634 205 618 196 590"/>
    </g>
    <path class="loaf-collar" d="M118 528 C170 553 250 553 302 530"/>
  </svg>`;

export const catMarkup = `
  <span class="cat-shadow" aria-hidden="true"></span>
  <span class="cat-rig" aria-hidden="true">
    <img class="cat-tail" src="${image('tail')}" alt="" draggable="false">
    <img class="cat-body" src="${image('body')}" alt="" draggable="false">
    ${loaf}
    <span class="cat-head">
      <img src="${image('head')}" alt="" draggable="false">
      <svg class="cat-face" viewBox="0 0 600 641" focusable="false">
        ${lids('grogy-eye')}
      </svg>
    </span>
  </span>
  <span class="cat-walker" aria-hidden="true"><img src="${walkStrip}" alt="" draggable="false"></span>
  <span class="cat-groomer" aria-hidden="true"><img src="${groomStrip}" alt="" draggable="false"></span>
  <span class="cat-zzz" aria-hidden="true"><span>z</span><span>z</span><span>Z</span></span>`;

let audio;
// The meow: one of three recorded meows, picked at random (never the same one twice in a row).
// Each has its own volume so all three sound equally loud.
const meows = [['meow-1.mp3', 0.56], ['meow-2.mp3', 2.37], ['meow-3.mp3', 0.98]]
  .map(([file, volume]) => ({ url: new URL('./grogy/' + file, import.meta.url).href, volume }));
let meowSounds;
let lastMeow = -1;

// Loads and decodes the recordings once. Called on the first press, so it is ready by the click.
function loadMeows() {
  audio ??= new (window.AudioContext || window.webkitAudioContext)();
  meowSounds ??= Promise.all(meows.map(async ({ url }) => {
    const response = await fetch(url);
    return audio.decodeAudioData(await response.arrayBuffer());
  })).catch(error => {
    meowSounds = null;
    throw error;
  });
  return meowSounds;
}

async function meow() {
  try {
    const sounds = loadMeows();
    if (audio.state === 'suspended') audio.resume();
    let pick = Math.floor(Math.random() * meows.length);
    if (pick === lastMeow) pick = (pick + 1 + Math.floor(Math.random() * (meows.length - 1))) % meows.length;
    lastMeow = pick;
    const buffer = (await sounds)[pick];
    const source = audio.createBufferSource();
    source.buffer = buffer;
    const volume = audio.createGain();
    volume.gain.value = meows[pick].volume;
    source.connect(volume).connect(audio.destination);
    source.start();
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
  let lastTouch = performance.now();
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

  // Sleeping: 30 seconds after anyone last touched the cat (a click, key press or drag), it lies down
  // in a loaf and sleeps until someone touches it again. Walks and grooming wait while it sleeps.
  function touched() {
    lastTouch = performance.now();
    if (state === 'sleeping') {
      setState('idle');
      planWalk();
    }
  }
  setInterval(() => {
    if (state === 'idle' && performance.now() - lastTouch >= sleepAfter) setState('sleeping');
  }, 1000);

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
    // Animation frames pause in a background tab; this makes sure the walk still ends.
    setTimeout(() => {
      if (state !== 'walking' || performance.now() - start < length) return;
      cancelAnimationFrame(walking);
      setState('idle');
      planWalk();
    }, length + 250);
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
    touched();
    try {
      loadMeows().catch(() => {});
    } catch {}
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
    touched();
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
    if (event.animationName === 'grogy-tail-wiggle') button.classList.remove('is-meowing');
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
