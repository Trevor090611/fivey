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
  counter.append(fire, number);

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
header nav:has(.fivey-subjects){display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:6px 10px}
.fivey-account-actions{position:relative;display:inline-flex;align-items:center;gap:8px;flex:none}
.fivey-streak{--fivey-streak-width-growth:min(var(--fivey-streak-extra-width,0px),clamp(0px,calc(100vw - 345px),100vw));position:relative;isolation:isolate;overflow:hidden;display:inline-flex;flex:none;align-items:center;gap:4px;min-height:36px;padding:4px 9px;border:2px solid #294735;border-radius:8px;background:#fff9ef;color:#412414;font:750 14px/1 system-ui,sans-serif;font-variant-numeric:tabular-nums;white-space:nowrap;transform-origin:right center}
.fivey-streak-fire{display:inline-block;font:400 19px/1.15 system-ui,sans-serif;transform-origin:center 80%}
.fivey-streak::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#ffbf54,#ff853b);opacity:0;clip-path:inset(0 100% 0 0)}
.fivey-streak.is-burning{--fivey-streak-sweep-time:1800ms;animation:fivey-streak-grow calc(var(--fivey-streak-sweep-time) * 1.25) ease-in-out}
.fivey-streak.is-burning::before{animation:fivey-streak-sweep var(--fivey-streak-sweep-time) linear}
.fivey-streak.is-burning .fivey-streak-fire{animation:fivey-streak-burn var(--fivey-streak-sweep-time) ease-out}
@keyframes fivey-streak-grow{
  0%,100%{transform:scale(1);min-height:36px;padding-inline:9px;margin-inline-start:0}
  16%,80%{transform:scale(var(--fivey-streak-scale,1.24));min-height:calc(36px + var(--fivey-streak-extra-height,0px));padding-inline:calc(9px + var(--fivey-streak-width-growth) / 2);margin-inline-start:calc(0px - var(--fivey-streak-width-growth))}
}
@keyframes fivey-streak-sweep{
  0%{opacity:.85;clip-path:inset(0 100% 0 0);animation-timing-function:cubic-bezier(.45,0,.8,.32)}
  38%{opacity:.85;clip-path:inset(0 calc(100% - 11px - var(--fivey-streak-width-growth) / 2) 0 0);animation-timing-function:cubic-bezier(.2,.65,.4,1)}
  70%{opacity:.85;clip-path:inset(0)}
  100%{opacity:0;clip-path:inset(0)}
}
@keyframes fivey-streak-burn{
  0%,38%,100%{transform:scale(1)}
  49%{transform:translateY(-2px) rotate(-12deg) scale(1.25);filter:drop-shadow(0 0 3px #ffab42)}
  63%{transform:rotate(8deg) scale(1.08)}
  76%{transform:translateY(-1px) rotate(-5deg) scale(1.2);filter:drop-shadow(0 0 2px #ffab42)}
}
@media(prefers-reduced-motion:reduce){.fivey-streak.is-burning,.fivey-streak.is-burning::before,.fivey-streak.is-burning .fivey-streak-fire{animation:none}}
.fivey-subjects{flex:none}
.fivey-subjects-trigger{cursor:pointer;white-space:nowrap;font:inherit;font-weight:700;border-radius:6px;padding:8px 10px}
.fivey-account-actions .fivey-sign-out{margin-inline-start:0}
.fivey-subjects ul[hidden]{display:none}
.fivey-subjects ul{position:absolute;z-index:10;inset-inline-end:0;inset-block-start:calc(100% + 6px);width:max-content;max-width:calc(100vw - 32px);max-height:65vh;overflow:auto;margin:0;padding:6px;list-style:none;background:#fff;border:2px solid #294735;border-radius:8px;box-shadow:0 8px 22px #19271f30}
header nav .fivey-subjects li a{display:block;padding:8px 10px;border-radius:4px;color:#19271f;background:#fff;text-decoration:none;white-space:normal}
header nav .fivey-subjects li a:hover,header nav .fivey-subjects li a:focus-visible{color:#19271f;background:var(--subject-hover,#d9f783)}
.fivey-subjects a[data-category="humanities"]{--subject-hover:#fff1b8}
`;
  document.head.append(styles);
  const accountActions = document.createElement('div');
  accountActions.className = 'fivey-account-actions';
  accountActions.append(createStreakCounter(user, trigger), dropdown, signOut);
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
