import { authConfig } from './auth-config.js?v=2';
import { completed, connect, login, rememberDestination } from './auth-client.js';

export let analyticsAccount = null;

const subjects = [
  ['biology', 'AP Biology'],
  ['environmental-science', 'AP Environmental Science'],
  ['chemistry', 'AP Chemistry'],
  ['physics-1', 'AP Physics 1'],
  ['psychology', 'AP Psychology', 'humanities'],
  ['calculus-ab', 'AP Calculus AB'],
  ['macroeconomics', 'AP Macroeconomics', 'humanities'],
];

const streakCooldownMs = 24 * 60 * 60 * 1000;

function streakAfterSignIn(previous, signedInAt) {
  const count = Number.isSafeInteger(previous?.count) && previous.count > 0 ? previous.count : 0;
  if (!Number.isFinite(signedInAt)) return count ? previous : null;
  if (!count) return { count: 1, countedAt: signedInAt };

  if (!Number.isFinite(previous.countedAt)) {
    // Older records saved a calendar day without an exact sign-in time.
    const date = new Date();
    const day = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / streakCooldownMs;
    const continuous = previous.day === day || previous.day === day - 1;
    if (!continuous) return { count: 1, countedAt: signedInAt };
    const savedDayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate() - (day - previous.day));
    return { count, countedAt: Math.max(signedInAt, savedDayStart.getTime()) };
  }

  const elapsed = signedInAt - previous.countedAt;
  if (elapsed < streakCooldownMs) return previous;
  return { count: elapsed < 2 * streakCooldownMs ? count + 1 : 1, countedAt: signedInAt };
}

function createStreakCounter(user, subjectTrigger) {
  const counter = document.createElement('span');
  counter.className = 'fivey-streak';
  counter.title = 'Daily streak';
  counter.setAttribute('role', 'status');
  const fire = document.createElement('span');
  fire.className = 'fivey-streak-fire';
  fire.textContent = '🔥';
  fire.setAttribute('aria-hidden', 'true');
  const number = document.createElement('span');
  const sparkles = document.createElement('span');
  sparkles.className = 'fivey-streak-sparkles';
  sparkles.setAttribute('aria-hidden', 'true');
  const trail = document.createElement('span');
  trail.className = 'fivey-streak-sparkle-trail';
  for (let index = 0; index < 12; index++) {
    trail.append(document.createElement('span'));
  }
  sparkles.append(trail);
  counter.append(fire, number, sparkles);

  const key = 'fivey-sign-in-streak-v2:' + user.id;
  const legacyKey = 'fivey-visit-streak-v1:' + user.id;
  const signedInAt = Date.parse(user.last_sign_in_at);
  const format = new Intl.NumberFormat();
  let knownStreak = null;

  function recordSignIn() {
    let previous = knownStreak;
    try {
      previous = JSON.parse(localStorage.getItem(key) || 'null') ?? knownStreak
        ?? JSON.parse(localStorage.getItem(legacyKey) || 'null');
    } catch {
      // Keep the last known count if storage is unavailable.
    }

    const next = streakAfterSignIn(previous, signedInAt);
    if (next && next !== previous) {
      try {
        localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // Keep the updated count in memory for this page.
      }
    }
    knownStreak = next;
    return { count: next?.count ?? 0, increased: next !== previous && next?.count > (previous?.count ?? 0) };
  }

  async function renderStreak() {
    let state;
    try {
      state = navigator.locks ? await navigator.locks.request(key, recordSignIn) : recordSignIn();
    } catch {
      state = recordSignIn();
    }
    number.textContent = format.format(state.count);
    counter.setAttribute('aria-label', 'Daily streak: ' + number.textContent);
    // The account overview uses the same recorded streak as the header.
    for (const value of document.querySelectorAll('[data-fivey-streak-count]')) {
      value.textContent = number.textContent;
    }
    for (const unit of document.querySelectorAll('[data-fivey-streak-unit]')) {
      unit.textContent = state.count === 1 ? 'day' : 'days';
    }
    if (!state.increased) return;
    counter.classList.remove('is-burning');
    // Measure the badge at its resting size before starting the sweep.
    const scale = 1.24;
    const expandedWidth = Math.ceil((subjectTrigger.offsetWidth + 8) / scale);
    const expandedHeight = Math.ceil((subjectTrigger.offsetHeight + 8) / scale);
    counter.style.setProperty('--fivey-streak-scale', scale);
    counter.style.setProperty('--fivey-streak-extra-width', Math.max(0, expandedWidth - counter.offsetWidth) + 'px');
    counter.style.setProperty('--fivey-streak-extra-height', Math.max(0, expandedHeight - counter.offsetHeight) + 'px');
    counter.classList.add('is-burning');
  }

  queueMicrotask(renderStreak);
  window.addEventListener('pageshow', event => {
    if (event.persisted) void renderStreak();
  });
  return counter;
}

function appendAccountNavigation(nav, signOut, user) {
  const dropdown = document.createElement('div');
  dropdown.className = 'fivey-subjects';
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'fivey-subjects-trigger';
  trigger.textContent = 'AP Subjects';
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', 'fivey-subject-links');
  dropdown.append(trigger);

  const links = document.createElement('ul');
  links.id = 'fivey-subject-links';
  links.hidden = true;
  links.setAttribute('aria-label', 'AP subjects');
  for (const [id, name, category] of subjects) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = new URL('./course.html?course=' + id, import.meta.url).href;
    link.textContent = name;
    if (category) link.dataset.category = category;
    item.append(link);
    links.append(item);
  }
  dropdown.append(links);

  const styles = document.createElement('style');
  styles.textContent = `
header nav:has(.fivey-subjects){display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:6px 10px;min-width:0}
.fivey-account-actions{position:relative;display:inline-flex;align-items:center;gap:8px;flex:none;flex-wrap:wrap;justify-content:flex-end;max-width:100%}
.fivey-streak{--fivey-streak-width-growth:min(var(--fivey-streak-extra-width,0px),clamp(0px,calc(100vw - 345px),100vw));position:relative;isolation:isolate;display:inline-flex;flex:none;align-items:center;gap:4px;min-height:36px;padding:4px 9px;border:2px solid #294735;border-radius:8px;background:#fff9ef;color:#412414;font:750 14px/1 system-ui,sans-serif;font-variant-numeric:tabular-nums;white-space:nowrap;transform-origin:right center}
.fivey-streak-fire{display:inline-block;font:400 19px/1.15 system-ui,sans-serif;transform-origin:center 80%}
.fivey-streak::before{content:"";position:absolute;inset:0;z-index:-1;border-radius:6px;background:linear-gradient(90deg,#ffbf54,#ff853b);opacity:0;clip-path:inset(0 100% 0 0)}
.fivey-streak.is-burning{--fivey-streak-sweep-time:1800ms;--fivey-streak-flame-edge:calc(11px + var(--fivey-streak-width-growth) / 2);animation:fivey-streak-grow calc(var(--fivey-streak-sweep-time) * 1.25) ease-in-out}
.fivey-streak.is-burning::before{animation:fivey-streak-sweep var(--fivey-streak-sweep-time) linear}
.fivey-streak.is-burning .fivey-streak-fire{animation:fivey-streak-burn var(--fivey-streak-sweep-time) ease-out}
@keyframes fivey-streak-grow{
  0%,100%{transform:scale(1);min-height:36px;padding-inline:9px;margin-inline-start:0}
  16%,80%{transform:scale(var(--fivey-streak-scale,1.24));min-height:calc(36px + var(--fivey-streak-extra-height,0px));padding-inline:calc(9px + var(--fivey-streak-width-growth) / 2);margin-inline-start:calc(0px - var(--fivey-streak-width-growth))}
}
@keyframes fivey-streak-sweep{
  0%{opacity:.85;clip-path:inset(0 100% 0 0);animation-timing-function:cubic-bezier(.45,0,.8,.32)}
  38%{opacity:.85;clip-path:inset(0 calc(100% - var(--fivey-streak-flame-edge)) 0 0);animation-timing-function:cubic-bezier(.2,.65,.4,1)}
  70%{opacity:.85;clip-path:inset(0)}
  100%{opacity:0;clip-path:inset(0)}
}
@keyframes fivey-streak-burn{
  0%,38%,100%{transform:scale(1)}
  49%{transform:translateY(-2px) rotate(-12deg) scale(1.25);filter:drop-shadow(0 0 3px #ffab42)}
  63%{transform:rotate(8deg) scale(1.08)}
  76%{transform:translateY(-1px) rotate(-5deg) scale(1.2);filter:drop-shadow(0 0 2px #ffab42)}
}
.fivey-streak-sparkles{position:absolute;inset:0;pointer-events:none;clip-path:inset(-22px -5px -22px -10px)}
.fivey-streak-sparkle-trail{position:absolute;inset:0;opacity:0}
.fivey-streak-sparkle-trail span{position:absolute;width:var(--spark-size,11px);height:var(--spark-size,11px);opacity:0;filter:drop-shadow(0 0 1px #a86500) drop-shadow(0 0 3px #ffd23c)}
.fivey-streak-sparkle-trail span::before{content:"";display:block;width:100%;height:100%;background:radial-gradient(circle,#fffdeb 10%,#ffe052 45%,#f2a900 100%);clip-path:polygon(50% 0,65% 35%,100% 50%,65% 65%,50% 100%,35% 65%,0 50%,35% 35%)}
.fivey-streak-sparkle-trail span:nth-child(odd){top:-10px}
.fivey-streak-sparkle-trail span:nth-child(even){bottom:-9px;--spark-drift:4px}
.fivey-streak-sparkle-trail span:nth-child(1){left:-13px;--spark-size:15px;--spark-delay:0ms}
.fivey-streak-sparkle-trail span:nth-child(2){left:-15px;--spark-size:13px;--spark-delay:95ms}
.fivey-streak-sparkle-trail span:nth-child(3){left:-26px;--spark-delay:80ms}
.fivey-streak-sparkle-trail span:nth-child(4){left:-28px;--spark-delay:20ms}
.fivey-streak-sparkle-trail span:nth-child(5){top:-15px;left:-30px;--spark-size:6px;--spark-delay:165ms}
.fivey-streak-sparkle-trail span:nth-child(6){bottom:-14px;left:-34px;--spark-size:7px;--spark-delay:155ms}
.fivey-streak-sparkle-trail span:nth-child(7){left:-44px;--spark-size:12px;--spark-delay:30ms}
.fivey-streak-sparkle-trail span:nth-child(8){left:-47px;--spark-size:10px;--spark-delay:170ms}
.fivey-streak-sparkle-trail span:nth-child(9){top:-3px;left:-38px;--spark-size:7px;--spark-delay:140ms}
.fivey-streak-sparkle-trail span:nth-child(10){bottom:-4px;left:-41px;--spark-size:6px;--spark-delay:70ms}
.fivey-streak-sparkle-trail span:nth-child(11){top:-13px;left:-54px;--spark-size:7px;--spark-delay:200ms}
.fivey-streak-sparkle-trail span:nth-child(12){bottom:-11px;left:-57px;--spark-size:6px;--spark-delay:115ms}
.fivey-streak.is-burning .fivey-streak-sparkle-trail{animation:fivey-streak-sparkle-travel var(--fivey-streak-sweep-time) linear,fivey-streak-sparkle-glow var(--fivey-streak-sweep-time) linear}
.fivey-streak.is-burning .fivey-streak-sparkle-trail span{animation:fivey-streak-sparkle 520ms ease-in-out var(--spark-delay) 3}
/* Match the orange sweep's leading edge at each point in the animation. */
@keyframes fivey-streak-sparkle-travel{
  0%{transform:translateX(0);animation-timing-function:cubic-bezier(.45,0,.8,.32)}
  38%{transform:translateX(var(--fivey-streak-flame-edge));animation-timing-function:cubic-bezier(.2,.65,.4,1)}
  70%,100%{transform:translateX(100%)}
}
@keyframes fivey-streak-sparkle-glow{
  0%{opacity:0}
  15%,70%{opacity:1}
  100%{opacity:0}
}
@keyframes fivey-streak-sparkle{
  0%,100%{opacity:.35;transform:scale(.55) rotate(-12deg)}
  40%{opacity:1;transform:translateY(calc(var(--spark-drift,-4px) * .7)) scale(1.12) rotate(7deg)}
  75%{opacity:.75;transform:translateY(var(--spark-drift,-4px)) scale(.85) rotate(12deg)}
}
@media(prefers-reduced-motion:reduce){.fivey-streak.is-burning,.fivey-streak.is-burning::before,.fivey-streak.is-burning .fivey-streak-fire,.fivey-streak.is-burning .fivey-streak-sparkle-trail,.fivey-streak.is-burning .fivey-streak-sparkle-trail span{animation:none}}
.fivey-subjects{flex:none}
.fivey-subjects-trigger{cursor:pointer;white-space:nowrap;font:inherit;font-weight:700;border-radius:6px;padding:8px 10px}
.fivey-my-account{display:inline-block;padding:8px 10px;border-radius:6px;font:inherit;font-weight:700;line-height:normal;text-decoration:none;white-space:nowrap}
.fivey-account-actions .fivey-sign-out{margin-inline-start:0}
.fivey-subjects ul[hidden]{display:none}
.fivey-subjects ul{position:absolute;z-index:10;inset-inline-end:0;inset-block-start:calc(100% + 6px);width:max-content;max-width:calc(100vw - 32px);max-height:65vh;overflow:auto;margin:0;padding:6px;list-style:none;background:#fff;border:2px solid #294735;border-radius:8px;box-shadow:0 8px 22px #19271f30}
header nav .fivey-subjects li a{display:block;padding:8px 10px;border-radius:4px;color:#19271f;background:#fff;text-decoration:none;white-space:normal}
header nav .fivey-subjects li a:hover,header nav .fivey-subjects li a:focus-visible{color:#19271f;background:var(--subject-hover,#d9f783)}
.fivey-subjects a[data-category="humanities"]{--subject-hover:#fff1b8}
`;
  document.head.append(styles);
  const myAccount = document.createElement('a');
  myAccount.className = 'fivey-my-account practice-button';
  myAccount.href = new URL('./account.html', import.meta.url).href;
  myAccount.textContent = 'My Account';
  if (location.pathname === new URL(myAccount.href).pathname) {
    myAccount.setAttribute('aria-current', 'page');
  }
  const accountActions = document.createElement('div');
  accountActions.className = 'fivey-account-actions';
  accountActions.append(createStreakCounter(user, trigger), dropdown, myAccount, signOut);
  nav.append(accountActions);

  function setExpanded(expanded) {
    links.hidden = !expanded;
    trigger.setAttribute('aria-expanded', String(expanded));
  }

  trigger.addEventListener('click', () => setExpanded(links.hidden));
  dropdown.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !links.hidden) {
      event.preventDefault();
      setExpanded(false);
      trigger.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!dropdown.contains(event.target)) setExpanded(false);
  });
}

try {
  const auth = authConfig.enabled ? await connect() : null;
  if (auth) {
    const { data, error } = await auth.getUser();
    if (error && error.name !== 'AuthSessionMissingError' && error.status !== 401 && error.status !== 403) throw error;
    if (!completed(data.user)) {
      rememberDestination();
      location.replace(login.href);
    } else {
      analyticsAccount = data.user.id;
      const signOut = document.createElement('button');
      signOut.className = 'fivey-sign-out';
      signOut.textContent = 'Sign out';
      signOut.addEventListener('click', async () => {
        signOut.disabled = true;
        try {
          const { error: failure } = await auth.signOut({ scope: 'local' });
          if (failure) throw failure;
          location.replace(login.href);
        } catch {
          signOut.textContent = 'Retry sign out';
          signOut.disabled = false;
        }
      });
      const nav = document.querySelector('header nav');
      if (nav) appendAccountNavigation(nav, signOut, data.user);
      document.documentElement.classList.remove('fivey-auth-pending');
      auth.onAuthStateChange(event => {
        if (event === 'SIGNED_OUT') location.replace(login.href);
      });
    }
  } else if (authConfig.enabled) {
    throw new Error('Missing authentication configuration');
  } else {
    analyticsAccount = 'guest';
    document.documentElement.classList.remove('fivey-auth-pending');
  }
} catch {
  document.querySelector('#fivey-access-status').textContent = 'Fivey could not check your sign-in. Refresh the page to try again.';
}

// The homepage already manages its fixed header and hero overlap.
const pageHeader = document.querySelector('body > header');
const pageHero = document.querySelector('main > .hero');
if (pageHeader?.querySelector('.brand') && pageHero && !document.querySelector('.home-main')) {
  function updatePageHeader() {
    const header = pageHeader.getBoundingClientRect();
    const hero = pageHero.getBoundingClientRect();
    const midpoint = header.top + header.height / 2;
    pageHeader.classList.toggle('over-dark-hero', hero.top <= midpoint && midpoint < hero.bottom);
  }

  window.addEventListener('scroll', updatePageHeader, { passive: true });
  window.addEventListener('resize', updatePageHeader);
  window.addEventListener('pageshow', updatePageHeader);
  updatePageHeader();
}
