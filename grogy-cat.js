// Grogy the cat: the button that opens the Grogy chat. Visitors can click it (it mews and opens the
// chat) or drag it anywhere on the screen (it runs on all four legs while dragged). On its own it
// blinks every 2 seconds, sometimes walks around for up to 3 seconds, grooms itself after 10 still
// seconds, and falls asleep in a loaf after 30 seconds without anyone touching it. Sometimes it goes to
// a nearby button to pat it with a paw (the button shakes with each pat), lick it or rub its face on
// it, and sometimes it naps on
// top of a button; clicking that button wakes it with a meow.
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

// Playing with a button: the near front leg (removed from the body layer) reaches out sideways and
// pats. Drawn in the drawing's own coordinates (600 × 641); the paw reaches 10.3% past the left edge.
const arm = `
  <svg class="cat-arm" viewBox="0 0 600 641" focusable="false" aria-hidden="true">
    <path class="arm-edge" d="M150 456 L186 510 L213 546 L215 641"/>
    <g class="arm-swing">
      <path class="arm-fur" d="M200 444 C150 446 80 452 30 460 L30 522 C80 528 150 534 200 534 Z"/>
      <path class="arm-sock" d="M78 455 C55 457 40 458 22 460 L22 522 C40 524 55 525 78 527 Z"/>
      <path class="arm-line" d="M150 447 C100 450 60 455 22 460 M150 532 C100 530 60 526 22 522"/>
      <path class="arm-tuft" d="M150 447 l-14 -10 l-4 13 l-14 -9 l-2 12 M120 531 l-10 10 l-3 -12 l-12 9 l-1 -12"/>
      <ellipse class="arm-paw" cx="-12" cy="492" rx="50" ry="42"/>
      <path class="arm-toes" d="M-44 466 q-10 12 0 24 M-46 494 q-10 12 0 24 M-30 520 q6 6 16 4"/>
    </g>
  </svg>`;

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
    <img class="cat-body-reach" src="${image('body-reach')}" alt="" draggable="false">
    ${loaf}
    ${arm}
    <span class="cat-head">
      <img src="${image('head')}" alt="" draggable="false">
      <svg class="cat-face" viewBox="0 0 600 641" focusable="false">
        ${lids('grogy-eye')}
        <ellipse class="cat-tongue" cx="166" cy="326" rx="17" ry="13"/>
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
    if (state === 'playing' && next !== 'playing') stopPatting();
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

  // Buttons Grogy can play with or nap on: visible, uncovered, ordinary-sized buttons on the page.
  const buttonSelector = 'button, [role="button"], input[type="submit"], input[type="button"], a.practice-button, a.intro-link, a.card';
  const pawReach = 62 / 600; // how far the patting paw reaches past the cat's side, as a share of its width
  let attached = null; // { el, mode: 'side' | 'top', face } while Grogy is at a button
  let travelId = 0;

  // Where the cat must be to pat a button from the side, or to nap on top of it (null if it won't fit).
  function spotFor(el, mode, side) {
    if (!el.isConnected) return null;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return null;
    const { width: W, height: H } = size();
    let left, bottom;
    if (mode === 'side') {
      left = side === 1 ? r.right - 6 + pawReach * W : r.left + 6 - pawReach * W - W;
      bottom = r.top + r.height / 2 - (492 / 641) * H + H;
    } else {
      left = r.left + r.width / 2 - (side === 1 ? 0.633 : 0.367) * W;
      bottom = r.top + 3;
    }
    const fits = left >= margin && left + W <= innerWidth - margin && bottom - H >= margin && bottom <= innerHeight - margin;
    return fits ? { right: innerWidth - left - W, bottom: innerHeight - bottom } : null;
  }
  function usableButton(el) {
    if (el.closest('.fivey-chat, [hidden], [inert]') || el.disabled) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 40 || r.width > 520 || r.height < 20 || r.height > 140) return false;
    if (r.left < 0 || r.top < 0 || r.right > innerWidth || r.bottom > innerHeight) return false;
    const style = getComputedStyle(el);
    if (style.visibility === 'hidden' || Number(style.opacity) < 0.5) return false;
    // Not hidden under something else (Grogy itself passing in front doesn't count).
    const middle = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
    return !!middle && (el.contains(middle) || button.contains(middle));
  }
  // One of the three closest buttons the cat has room to reach, with the spot and the side to use.
  function pickButton(mode) {
    const { left, width } = size();
    const here = left + width / 2;
    const options = [];
    for (const el of document.querySelectorAll(buttonSelector)) {
      if (!usableButton(el)) continue;
      const r = el.getBoundingClientRect();
      const sides = mode === 'side' ? (r.left + r.width / 2 < here ? [1, -1] : [-1, 1]) : [facing];
      for (const side of sides) {
        const spot = spotFor(el, mode, side);
        if (!spot) continue;
        options.push({ el, side, spot, distance: Math.hypot(spot.right - place.right, spot.bottom - place.bottom) });
        break;
      }
    }
    // Only buttons within a short stroll (it walks there at its normal pace).
    const near = options.filter(option => option.distance <= walkSpeed * 8).sort((a, b) => a.distance - b.distance);
    return near.slice(0, 3)[Math.floor(Math.random() * Math.min(3, near.length))] ?? null;
  }
  function detach() {
    attached = null;
  }
  // Keeps the cat at its button when the page scrolls or resizes; lets go if the button leaves.
  function glue() {
    if (!attached || !['idle', 'grooming', 'sleeping', 'playing'].includes(state)) return;
    const spot = usableButton(attached.el) && spotFor(attached.el, attached.mode, attached.side);
    if (spot) moveTo(spot);
    else {
      if (state === 'playing') setState('idle');
      detach();
    }
  }
  addEventListener('scroll', glue, { capture: true, passive: true });

  // Walks to a button at its normal pace.
  function goTo(choice, mode, arrive) {
    cancelAnimationFrame(walking);
    detach();
    const id = ++travelId;
    const first = Math.hypot(choice.spot.right - place.right, choice.spot.bottom - place.bottom);
    const speed = walkSpeed;
    setState('walking');
    let last = performance.now();
    const finish = spot => {
      if (id !== travelId || state !== 'walking') return;
      cancelAnimationFrame(walking);
      moveTo(spot);
      attached = { el: choice.el, mode, side: choice.side };
      arrive();
    };
    const giveUp = () => {
      if (id !== travelId || state !== 'walking') return;
      cancelAnimationFrame(walking);
      setState('idle');
      planWalk();
    };
    const step = now => {
      if (id !== travelId || state !== 'walking') return;
      const spot = usableButton(choice.el) && spotFor(choice.el, mode, choice.side);
      if (!spot) return giveUp();
      const seconds = Math.min(0.05, (now - last) / 1000);
      last = now;
      const dx = spot.right - place.right;
      const dy = spot.bottom - place.bottom;
      const distance = Math.hypot(dx, dy);
      if (Math.abs(dx) > 1) face(dx < 0 ? -1 : 1);
      if (distance <= speed * seconds + 1) return finish(spot);
      moveTo({ right: place.right + dx / distance * speed * seconds, bottom: place.bottom + dy / distance * speed * seconds });
      walking = requestAnimationFrame(step);
    };
    walking = requestAnimationFrame(step);
    // Animation frames pause in a background tab; this makes sure the trip still ends.
    setTimeout(() => {
      const spot = usableButton(choice.el) && spotFor(choice.el, mode, choice.side);
      if (spot) finish(spot);
      else giveUp();
    }, first / walkSpeed * 1000 + 2500);
  }

  // Playing with a button, for 4–8 seconds, switching every second or two between patting it with a
  // paw (the button gives a little shake each time the paw lands), licking it, and rubbing its face on
  // it.
  let patTimer;
  let playTimer;
  let playEnd;
  function shake(el) {
    el.classList.remove('grogy-poked');
    void el.offsetWidth;
    el.classList.add('grogy-poked');
  }
  function play(action) {
    clearTimeout(patTimer);
    button.dataset.play = action;
    if (action === 'pat') {
      // The paw lands halfway through each 520 ms pat.
      patTimer = setTimeout(function pat() {
        if (state !== 'playing' || !attached || button.dataset.play !== 'pat') return;
        shake(attached.el);
        patTimer = setTimeout(pat, 520);
      }, 260);
    }
    playTimer = setTimeout(() => {
      if (state !== 'playing') return;
      const others = ['pat', 'lick', 'rub'].filter(next => next !== action);
      play(others[Math.floor(Math.random() * others.length)]);
    }, random(1300, 2400));
  }
  function startPatting() {
    if (!attached) return;
    face(attached.side);
    setState('playing');
    play('pat');
    playEnd = setTimeout(() => {
      if (state !== 'playing') return;
      setState('idle');
      planWalk();
    }, random(4000, 8000));
  }
  function stopPatting() {
    clearTimeout(patTimer);
    clearTimeout(playTimer);
    clearTimeout(playEnd);
    delete button.dataset.play;
  }
  document.addEventListener('animationend', event => {
    if (event.animationName === 'grogy-poke') event.target.classList.remove('grogy-poked');
  }, true);

  // Napping on a button: clicking that button wakes Grogy, and it meows once.
  document.addEventListener('click', event => {
    if (attached?.mode !== 'top' || state !== 'sleeping' || !attached.el.contains(event.target)) return;
    touched();
    greet();
  }, true);

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
    if (state !== 'idle' || performance.now() - lastTouch < sleepAfter) return;
    // About half the time it first finds a button to nap on.
    if (attached?.mode !== 'top' && !reducedMotion.matches && !document.hidden && Math.random() < 0.5) {
      const choice = pickButton('top');
      if (choice) {
        goTo(choice, 'top', () => setState('sleeping'));
        return;
      }
    }
    setState('sleeping');
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
    // Sometimes, instead of a stroll, it goes to pat a nearby button.
    if (Math.random() < 0.35) {
      const choice = pickButton('side');
      if (choice) {
        goTo(choice, 'side', startPatting);
        return;
      }
    }
    detach();
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
      travelId++;
      detach();
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
    greet();
    if (['walking', 'dashing', 'grooming', 'playing'].includes(state)) {
      travelId++;
      cancelAnimationFrame(walking);
      setState('idle');
    }
    onActivate();
  });
  // A meow with a tail wiggle and a "Meow!" bubble.
  function greet() {
    meow();
    button.classList.remove('is-meowing');
    void button.offsetWidth;
    button.classList.add('is-meowing');
  }
  button.addEventListener('animationend', event => {
    if (event.animationName === 'grogy-tail-wiggle') button.classList.remove('is-meowing');
  });

  addEventListener('resize', () => {
    moveTo(place);
    glue();
  });
  reducedMotion.addEventListener?.('change', () => {
    planWalk();
    planGroom();
  });
  moveTo(place);
  button.style.setProperty('--facing', facing);
  setState('idle');
  planWalk();
}
