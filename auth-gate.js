import { getOrbiesBalance, orbiesKey } from './orbies-wallet.js';
import { authConfig } from './auth-config.js?v=2';
import { completed, connectClient, login, rememberDestination } from './auth-client.js';
import { syncAccountData } from './account-data.js?v=3';

export let analyticsAccount = null;
export let authenticatedClient = null;

const subjects = [
  ['biology', 'AP Biology'],
  ['environmental-science', 'AP Environmental Science'],
  ['chemistry', 'AP Chemistry'],
  ['physics-1', 'AP Physics 1'],
  ['psychology', 'AP Psychology', 'humanities'],
  ['calculus-ab', 'AP Calculus AB'],
  ['macroeconomics', 'AP Macroeconomics', 'humanities'],
];

// Streaks are saved on the account (Supabase user metadata) so every device sees the same count.
const streakWindowMs = 24 * 60 * 60 * 1000;
const streakActivityWriteMs = 10 * 60 * 1000;

function normalizeStreak(record) {
  if (!record || typeof record !== 'object') return null;
  const count = Number(record.count);
  if (!Number.isSafeInteger(count) || count < 0) return null;
  let countedAt = Number(record.countedAt);
  // The oldest browser-only records saved a day number instead of a time.
  if (!Number.isFinite(countedAt) && Number.isFinite(record.day)) countedAt = record.day * streakWindowMs;
  if (!Number.isFinite(countedAt)) return null;
  const lastActiveAt = Number(record.lastActiveAt);
  return { count, countedAt, lastActiveAt: Number.isFinite(lastActiveAt) ? Math.max(lastActiveAt, countedAt) : countedAt };
}

function streakIsAlive(record, now) {
  return now - record.lastActiveAt <= streakWindowMs;
}

// Combines the account's streak with one left in this browser by the old browser-only version.
function mergeStreaks(saved, local, now) {
  if (!saved || !local) return saved || local;
  const best = streakIsAlive(saved, now) === streakIsAlive(local, now)
    ? (local.count > saved.count ? local : saved)
    : (streakIsAlive(saved, now) ? saved : local);
  return { ...best, lastActiveAt: Math.max(saved.lastActiveAt, local.lastActiveAt) };
}

function sameLocalDay(a, b) {
  const first = new Date(a);
  const second = new Date(b);
  return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
}

function streakAfterVisit(previous, now) {
  if (!previous) return { count: 1, countedAt: now, lastActiveAt: now };
  // More than 24 hours without visiting while signed in breaks the streak.
  if (now - previous.lastActiveAt > streakWindowMs) return { count: 0, countedAt: now, lastActiveAt: now };
  // One increase per calendar day.
  if (now <= previous.countedAt || sameLocalDay(previous.countedAt, now)) {
    return { ...previous, lastActiveAt: Math.max(previous.lastActiveAt, now) };
  }
  return { count: previous.count + 1, countedAt: now, lastActiveAt: now };
}

function createStreakCounter(user, subjectTrigger, client) {
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

  const lockKey = 'fivey-streak:' + user.id;
  // Browser-only streaks from earlier versions; merged into the account once, then removed.
  const localKeys = ['fivey-sign-in-streak-v2:' + user.id, 'fivey-visit-streak-v1:' + user.id];
  const format = new Intl.NumberFormat();
  let currentUser = user;
  let knownStreak = null;

  async function recordVisit() {
    const now = Date.now();
    if (client && knownStreak) {
      try {
        const { data } = await client.auth.getUser();
        if (data?.user) currentUser = data.user;
      } catch {
        // Use the account details already loaded for this page.
      }
    }
    const saved = normalizeStreak(currentUser.user_metadata?.fivey_streak);
    let local = null;
    try {
      for (const localKey of localKeys) {
        local = mergeStreaks(local, normalizeStreak(JSON.parse(localStorage.getItem(localKey) || 'null')), now);
      }
    } catch {
      // Browser storage is optional now that the streak lives on the account.
    }
    const previous = mergeStreaks(saved, local, now) ?? knownStreak;
    const next = streakAfterVisit(previous, now);
    const changed = !saved || local || next.count !== saved.count || next.countedAt !== saved.countedAt ||
      next.lastActiveAt - saved.lastActiveAt >= streakActivityWriteMs;
    if (client && changed) {
      try {
        const { data, error } = await client.auth.updateUser({ data: { fivey_streak: next } });
        if (error) throw error;
        if (data?.user) currentUser = data.user;
        if (local) {
          for (const localKey of localKeys) localStorage.removeItem(localKey);
        }
      } catch {
        // Show the updated count now; the next visit will try saving it again.
      }
    }
    knownStreak = next;
    return { count: next.count, increased: next.count > (previous?.count ?? 0) };
  }

  async function renderStreak() {
    let state;
    try {
      state = navigator.locks ? await navigator.locks.request(lockKey, recordVisit) : await recordVisit();
    } catch {
      state = { count: knownStreak?.count ?? 0, increased: false };
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

function catNameFor(user) {
  const name = user?.user_metadata?.fivey_cat_name;
  return typeof name === 'string' && name.trim() && name.length <= 10 ? name.trim() : 'Grogy';
}

function showCatName(user) {
  const label = catNameFor(user) + ' the Cat';
  const link = document.querySelector('#fivey-cat-option');
  const heading = document.querySelector('#cat-name-title');
  if (link) link.textContent = label;
  if (heading) heading.textContent = label;
}

function setupCatNameForm(auth, user) {
  const form = document.querySelector('#cat-name-form');
  if (!form) return;

  const input = form.querySelector('#cat-name');
  const save = form.querySelector('button[type="submit"]');
  const status = document.querySelector('#cat-name-status');
  input.value = catNameFor(user);
  input.disabled = save.disabled = false;
  input.addEventListener('input', () => {
    input.setCustomValidity('');
    status.textContent = '';
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (save.disabled) return;
    const name = input.value.trim();
    if (!name || name.length > input.maxLength) {
      input.setCustomValidity('Enter a name of 1 to 10 characters.');
      input.reportValidity();
      return;
    }

    input.disabled = save.disabled = true;
    status.textContent = 'Saving…';
    try {
      const { data, error } = await auth.updateUser({ data: { fivey_cat_name: name } });
      if (error || !data?.user) throw error || new Error('Missing updated account');
      input.value = catNameFor(data.user);
      showCatName(data.user);
      status.textContent = 'Cat name saved.';
    } catch {
      status.textContent = 'Could not save the cat name. Please try again.';
    } finally {
      input.disabled = save.disabled = false;
    }
  });
}

async function appendAccountNavigation(nav, signOut, user, client) {
  if (nav.dataset.fiveyAccountNavigation === 'initializing' || nav.querySelector(':scope > .fivey-account-actions')) return;
  nav.dataset.fiveyAccountNavigation = 'initializing';
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
  const studyPlanKey = 'fivey-study-plan-v1:' + user.id;
  function renderSubjectLinks() {
    let planned = new Set();
    try {
      const saved = JSON.parse(localStorage.getItem(studyPlanKey) || '[]');
      if (Array.isArray(saved)) {
        planned = new Set(saved.map(item => item?.subject).filter(name => subjects.some(([, subjectName]) => subjectName === name)));
      }
    } catch {
      // Keep the dropdown empty when the saved plan is unavailable.
    }
    links.replaceChildren();
    for (const [id, name, category] of subjects) {
      if (!planned.has(name)) continue;
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = new URL('./course.html?course=' + id, import.meta.url).href;
      link.textContent = name;
      if (category) link.dataset.category = category;
      item.append(link);
      links.append(item);
    }
  }
  renderSubjectLinks();
  dropdown.append(links);

  const styles = document.createElement('style');
  styles.textContent = `
header nav:has(.fivey-subjects){display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:6px 10px;min-width:0}
.fivey-account-actions{position:relative;display:inline-flex;align-items:center;gap:8px;flex:none;flex-wrap:wrap;justify-content:flex-end;max-width:100%}
.fivey-orbies{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:3px 8px;border:2px solid #7a4a0b;border-radius:8px;background:#fff3c4;color:#412414;font:750 14px/1 system-ui,sans-serif;font-variant-numeric:tabular-nums;white-space:nowrap}
.fivey-orbies-icon{display:block;width:29px;height:29px;flex:none;object-fit:contain}

.fivey-streak{--fivey-streak-width-growth:min(var(--fivey-streak-extra-width,0px),clamp(0px,calc(100vw - 345px),100vw));position:relative;isolation:isolate;display:inline-flex;flex:none;align-items:center;justify-content:center;gap:5px;min-height:39px;padding:3px 13px;border:2px solid #294735;border-radius:8px;background:#fff9ef;color:#412414;font:750 14px/1 system-ui,sans-serif;font-variant-numeric:tabular-nums;white-space:nowrap;transform-origin:right center}
.fivey-streak-fire{display:inline-block;font:400 19px/1.15 system-ui,sans-serif;transform-origin:center 80%}
.fivey-streak::before{content:"";position:absolute;inset:0;z-index:-1;border-radius:6px;background:linear-gradient(90deg,#ffbf54,#ff853b);opacity:0;clip-path:inset(0 100% 0 0)}
.fivey-streak.is-burning{--fivey-streak-sweep-time:1800ms;--fivey-streak-flame-edge:calc(11px + var(--fivey-streak-width-growth) / 2);animation:fivey-streak-grow calc(var(--fivey-streak-sweep-time) * 1.25) ease-in-out}
.fivey-streak.is-burning::before{animation:fivey-streak-sweep var(--fivey-streak-sweep-time) linear}
.fivey-streak.is-burning .fivey-streak-fire{animation:fivey-streak-burn var(--fivey-streak-sweep-time) ease-out}
@keyframes fivey-streak-grow{
  0%,100%{transform:scale(1);min-height:39px;padding-inline:13px;margin-inline-start:0}
  16%,80%{transform:scale(var(--fivey-streak-scale,1.24));min-height:calc(39px + var(--fivey-streak-extra-height,0px));padding-inline:calc(13px + var(--fivey-streak-width-growth) / 2);margin-inline-start:calc(0px - var(--fivey-streak-width-growth))}
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
.fivey-subjects{position:relative;flex:none}
.fivey-subjects-trigger{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;inline-size:7.5rem;min-block-size:44px;flex:none;cursor:pointer;white-space:nowrap;font:inherit;font-weight:700;line-height:1.55;border-radius:6px;padding:8px 10px;text-decoration:none}
.fivey-user-menu{position:relative;z-index:12;display:inline-flex;align-items:center;flex:none}
.fivey-user-label{box-sizing:border-box;display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:8px 10px;border:2px solid #204b34;border-radius:6px;background:#fff;color:#19271f;font-weight:700;white-space:nowrap;cursor:default}
.fivey-user-avatar{width:28px;height:28px;flex:none;border:1px solid #d4d9cd;border-radius:50%;object-fit:cover;background:#f8f7ef}
.fivey-user-dropdown .fivey-sign-out{width:100%;margin:0}
.fivey-user-dropdown{display:none;position:absolute;z-index:20;inset-block-start:100%;inset-inline-end:0;min-width:170px;gap:6px;padding:8px;border:2px solid #294735;border-radius:8px;background:#fff;box-shadow:0 8px 22px #19271f30}
.fivey-user-menu:hover .fivey-user-dropdown,.fivey-user-menu:focus-within .fivey-user-dropdown{display:grid}
.fivey-user-option{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:8px 10px;border-radius:6px;font:inherit;font-weight:700;text-align:center;text-decoration:none;white-space:nowrap}
.fivey-account-actions .fivey-sign-out{margin-inline-start:0}
.fivey-subjects ul[hidden]{display:none}
.fivey-subjects ul{position:absolute;z-index:10;inset-inline-end:0;inset-block-start:calc(100% + 6px);width:max-content;max-width:calc(100vw - 32px);max-height:65vh;overflow:auto;margin:0;padding:6px;list-style:none;background:#fff;border:2px solid #294735;border-radius:8px;box-shadow:0 8px 22px #19271f30}
header nav .fivey-subjects li a{display:block;padding:8px 10px;border-radius:4px;color:#19271f;background:#fff;text-decoration:none;white-space:normal}
header nav .fivey-subjects li a:hover,header nav .fivey-subjects li a:focus-visible{color:#19271f;background:var(--subject-hover,#d9f783)}
.fivey-subjects a[data-category="humanities"]{--subject-hover:#fff1b8}
.fivey-sign-out-dialog{position:fixed;inset:0;margin:auto;box-sizing:border-box;width:420px;max-width:calc(100vw - 40px);max-height:calc(100svh - 40px);overflow:auto;padding:28px;border:2px solid #204b34;border-radius:16px;background:#fffef8;color:#19271f;box-shadow:0 18px 60px #0004;font:16px/1.55 "DM Sans",system-ui,sans-serif}
.fivey-sign-out-dialog::backdrop{background:rgb(15 28 20 / 60%)}
.fivey-sign-out-dialog h2{margin:0;font-size:24px;line-height:1.25;letter-spacing:-.03em;text-align:center}
.fivey-sign-out-options{display:flex;gap:12px;margin-top:24px}
.fivey-sign-out-options button{flex:1;min-height:44px;padding:10px 16px;border-radius:6px;font:inherit;font-weight:700;cursor:pointer}
.fivey-sign-out-confirm{--button-fill:#ff4d4d}
.fivey-sign-out-options button:focus-visible{outline:3px solid #467335;outline-offset:4px}
.fivey-sign-out-dialog [role="alert"]{margin:16px 0 0;color:#8d2f24}
`;
  document.head.append(styles);
  const username = String(user.user_metadata?.fivey_username || user.email?.split('@')[0] || 'there');
  const userMenu = document.createElement('div');
  userMenu.className = 'fivey-user-menu';
  userMenu.tabIndex = 0;
  userMenu.setAttribute('role', 'group');
  userMenu.setAttribute('aria-label', 'Account menu for ' + username);
  const userLabel = document.createElement('span');
  userLabel.className = 'fivey-user-label';
  const avatar = document.createElement('img');
  avatar.className = 'fivey-user-avatar';
  avatar.alt = '';
  avatar.setAttribute('aria-hidden', 'true');
  const googleIdentity = user.identities?.find(identity => identity.provider === 'google')?.identity_data || {};
  const defaultAvatar = user.user_metadata?.avatar_url || user.user_metadata?.picture ||
    googleIdentity.avatar_url || googleIdentity.picture || '';
  const fallbackAvatar = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="#d9f783"/><circle cx="32" cy="23" r="12" fill="#294735"/><path d="M9 59c1-13 10-21 23-21s22 8 23 21" fill="#294735"/></svg>');
  avatar.src = defaultAvatar || fallbackAvatar;
  avatar.hidden = false;
  userLabel.append(avatar, document.createTextNode('Welcome ' + username + '!'));
  const avatarPath = user.user_metadata?.fivey_avatar_path;
  if (avatarPath && client?.storage) {
    try {
      const { data } = await client.storage.from('profile-pictures').createSignedUrl(avatarPath, 3600);
      if (data?.signedUrl) { avatar.src = data.signedUrl; avatar.hidden = false; }
    } catch {
      // Keep the Google account picture when private photo storage is unavailable.
    }
  }
  const userDropdown = document.createElement('div');
  userDropdown.className = 'fivey-user-dropdown';
  userDropdown.setAttribute('aria-label', 'Account options');
  const myAccount = document.createElement('a');
  myAccount.className = 'practice-button fivey-user-option';
  myAccount.href = new URL('./account.html', import.meta.url).href;
  myAccount.textContent = 'My Account';
  if (location.pathname === new URL(myAccount.href).pathname) {
    myAccount.setAttribute('aria-current', 'page');
  }
  const cat = document.createElement('a');
  cat.id = 'fivey-cat-option';
  cat.className = 'practice-button fivey-user-option';
  cat.href = new URL('./cat.html', import.meta.url).href;
  cat.textContent = catNameFor(user) + ' the Cat';
  if (location.pathname === new URL(cat.href).pathname) {
    cat.setAttribute('aria-current', 'page');
  }
  const settings = document.createElement('a');
  settings.className = 'practice-button fivey-user-option';
  settings.href = new URL('./settings.html', import.meta.url).href;
  settings.textContent = 'Settings';
  if (location.pathname === new URL(settings.href).pathname) {
    settings.setAttribute('aria-current', 'page');
  }
  signOut.classList.add('practice-button', 'fivey-user-option');
  userDropdown.append(myAccount, cat, settings, signOut);
  userMenu.append(userLabel, userDropdown);
  window.addEventListener('fivey:profile-updated', event => {
    const updatedUsername = String(event.detail?.username || '');
    if (!updatedUsername) return;
    userLabel.replaceChildren(avatar, document.createTextNode('Welcome ' + updatedUsername + '!'));
    userMenu.setAttribute('aria-label', 'Account menu for ' + updatedUsername);
    if (event.detail?.avatarUrl) { avatar.src = event.detail.avatarUrl; avatar.hidden = false; }
    else if (event.detail?.avatarUrl === '') { avatar.src = fallbackAvatar; avatar.hidden = false; }
  });
  const orbiesBalance = document.createElement('span');
  orbiesBalance.className = 'fivey-orbies';
  orbiesBalance.setAttribute('role', 'status');
  orbiesBalance.setAttribute('aria-live', 'polite');
  const orbiesIcon = document.createElement('img');
  orbiesIcon.className = 'fivey-orbies-icon';
  orbiesIcon.src = new URL('./orbies-coin.png?v=1', import.meta.url).href;
  orbiesIcon.alt = '';
  orbiesIcon.setAttribute('aria-hidden', 'true');
  const orbiesCount = document.createElement('span');
  const balanceKey = orbiesKey(user.id);
  const orbiesFormat = new Intl.NumberFormat();
  function refreshOrbies() {
    let amount = 0;
    try {
      amount = getOrbiesBalance(user.id);
    } catch {
      // Keep the display at zero when local storage is unavailable.
    }
    orbiesCount.textContent = orbiesFormat.format(amount);
    orbiesBalance.title = orbiesFormat.format(amount) + ' Orbies';
    orbiesBalance.setAttribute('aria-label', 'Orbies: ' + orbiesCount.textContent);
  }
  refreshOrbies();
  orbiesBalance.append(orbiesIcon, orbiesCount);
  window.addEventListener('storage', event => {
    if (event.key === null || event.key === balanceKey) refreshOrbies();
  });
  window.addEventListener('fivey:orbies-updated', refreshOrbies);
  const accountActions = document.createElement('div');
  accountActions.className = 'fivey-account-actions';
  accountActions.append(orbiesBalance, createStreakCounter(user, trigger, client), dropdown, userMenu);
  nav.append(accountActions);

  function setExpanded(expanded) {
    links.hidden = !expanded;
    trigger.setAttribute('aria-expanded', String(expanded));
  }

  trigger.addEventListener('click', () => {
    renderSubjectLinks();
    setExpanded(links.hidden);
  });
  dropdown.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !links.hidden) {
      event.preventDefault();
      setExpanded(false);
      trigger.focus();
    }
  });
  window.addEventListener('fivey:study-plan-updated', renderSubjectLinks);
  window.addEventListener('storage', event => {
    if (event.key === studyPlanKey || event.key === null) renderSubjectLinks();
  });
  document.addEventListener('click', event => {
    if (!dropdown.contains(event.target)) setExpanded(false);
  });
}

function showWelcomeDialog(user) {
  const seenKey = 'fivey-welcome-seen-v1:' + user.id;
  try {
    if (localStorage.getItem(seenKey) === '1') return;
    localStorage.setItem(seenKey, '1');
  } catch {
    // The dialog can still be shown for this visit if storage is unavailable.
  }

  const dialog = document.createElement('dialog');
  dialog.className = 'fivey-welcome-dialog';
  dialog.setAttribute('aria-labelledby', 'fivey-welcome-title');
  const title = document.createElement('h2');
  title.id = 'fivey-welcome-title';
  title.textContent = 'Start Your AP Review Journey!';
  const message = document.createElement('p');
  message.className = 'fivey-welcome-message';
  message.append(
    'Welcome to Fivey! Here, you will find original Study Guides created by the developer and practice questions for review AP subjects.',
    document.createElement('br'),
    document.createElement('br'),
    'Feel free to explore around! :)'
  );
  const actions = document.createElement('div');
  actions.className = 'fivey-welcome-actions';
  const exit = document.createElement('a');
  exit.className = 'practice-button fivey-welcome-button fivey-welcome-exit';
  exit.href = new URL('./', import.meta.url).href;
  exit.setAttribute('role', 'button');
  exit.textContent = 'Exit';
  const about = document.createElement('a');
  about.className = 'practice-button fivey-welcome-button';
  about.href = new URL('./#intro-title', import.meta.url).href;
  about.setAttribute('role', 'button');
  about.textContent = 'What is Fivey?';
  about.addEventListener('click', event => {
    const homePath = new URL('./', import.meta.url).pathname;
    const onHome = location.pathname === homePath || location.pathname === homePath + 'index.html';
    const section = onHome && document.getElementById('intro-title');
    if (!section) return; // Other pages: follow the link to the homepage section.
    event.preventDefault();
    dialog.close();
    const header = document.querySelector('body > header');
    const offset = header ? header.getBoundingClientRect().height + 16 : 16;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' });
    history.replaceState(null, '', '#intro-title');
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  });
  const plan = document.createElement('a');
  plan.className = 'practice-button fivey-welcome-button';
  const planTarget = new URL('./account.html', import.meta.url);
  planTarget.searchParams.set('welcome', 'plan');
  plan.href = planTarget.href;
  plan.setAttribute('role', 'button');
  plan.textContent = 'Plan My Study Now!!';

  const styles = document.createElement('style');
  styles.textContent =
    '.fivey-welcome-dialog{box-sizing:border-box;width:min(600px,calc(100vw - 32px));max-width:600px;padding:clamp(22px,5vw,36px);border:2px solid #204b34;border-radius:16px;background:#fffef8;color:#19271f;box-shadow:0 18px 60px #0004;font:16px/1.55 "DM Sans",system-ui,sans-serif;text-align:center}' +
    '.fivey-welcome-dialog::backdrop{background:rgb(15 28 20 / 68%)}' +
    '.fivey-welcome-dialog h2{margin:0 0 16px;font-size:clamp(24px,5vw,32px);line-height:1.2;letter-spacing:-.03em}' +
    '.fivey-welcome-message{margin:0;line-height:1.7}' +
    '.fivey-welcome-actions{display:flex;align-items:stretch;gap:12px;margin-top:26px}' +
    '.fivey-welcome-button{flex:1;min-width:0;min-height:48px;padding:9px 10px;border-radius:6px;font:inherit;font-size:clamp(12px,2.5vw,16px);font-weight:700;line-height:1.25;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center}' +
    '.fivey-welcome-exit{--button-fill:#ff4d4d!important}' +
    '@media(max-width:420px){.fivey-welcome-actions{gap:7px}.fivey-welcome-button{padding-inline:5px}}';
  document.head.append(styles);
  actions.append(plan, about, exit);
  dialog.append(title, message, actions);
  document.body.append(dialog);
  dialog.showModal();
  exit.focus();
}

function addSignOutConfirmation(auth, signOut) {
  const dialog = document.createElement('dialog');
  dialog.id = 'fivey-sign-out-dialog';
  dialog.className = 'fivey-sign-out-dialog';
  dialog.setAttribute('aria-labelledby', 'fivey-sign-out-question');
  const question = document.createElement('h2');
  question.id = 'fivey-sign-out-question';
  question.textContent = 'Are you sure you want to log out?';
  const options = document.createElement('div');
  options.className = 'fivey-sign-out-options';
  const yes = document.createElement('button');
  yes.type = 'button';
  yes.className = 'fivey-sign-out-confirm';
  yes.textContent = 'Yes';
  const no = document.createElement('button');
  no.type = 'button';
  no.textContent = 'No';
  const status = document.createElement('p');
  status.setAttribute('role', 'alert');
  status.hidden = true;
  options.append(yes, no);
  dialog.append(question, options, status);
  document.body.append(dialog);
  signOut.type = 'button';
  signOut.setAttribute('aria-haspopup', 'dialog');
  signOut.setAttribute('aria-controls', dialog.id);
  let signingOut = false;

  signOut.addEventListener('click', () => {
    if (dialog.open) return;
    status.hidden = true;
    dialog.showModal();
    no.focus();
  });
  no.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => signOut.focus());
  dialog.addEventListener('cancel', event => {
    if (signingOut) event.preventDefault();
  });
  yes.addEventListener('click', async () => {
    if (signingOut) return;
    signingOut = true;
    signOut.disabled = yes.disabled = no.disabled = true;
    status.hidden = true;
    try {
      const { error: failure } = await auth.signOut({ scope: 'local' });
      if (failure) throw failure;
      location.replace(login.href);
    } catch {
      signingOut = false;
      signOut.disabled = yes.disabled = no.disabled = false;
      status.textContent = 'Could not sign out. Please try again.';
      status.hidden = false;
      yes.focus();
    }
  });
}

try {
  const client = authConfig.enabled ? await connectClient() : null;
  const auth = client?.auth ?? null;
  if (auth) {
    const { data, error } = await auth.getUser();
    if (error && error.name !== 'AuthSessionMissingError' && error.status !== 401 && error.status !== 403) throw error;
    if (!completed(data.user)) {
      rememberDestination();
      location.replace(login.href);
    } else {
      // Load this account's saved data into the page before anything reads it.
      await syncAccountData(client, data.user.id).catch(() => {});
      analyticsAccount = data.user.id;
      authenticatedClient = client;
      const signOut = document.createElement('button');
      signOut.className = 'fivey-sign-out';
      signOut.textContent = 'Sign out';
      addSignOutConfirmation(auth, signOut);
      const nav = document.querySelector('header nav');
      if (nav) await appendAccountNavigation(nav, signOut, data.user, client);
      document.documentElement.classList.remove('fivey-auth-pending');
      showCatName(data.user);
      setupCatNameForm(auth, data.user);
      showWelcomeDialog(data.user);
      auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT') location.replace(login.href);
        if (event === 'USER_UPDATED' && session?.user) showCatName(session.user);
      });
      window.addEventListener('pageshow', event => {
        if (!event.persisted) return;
        auth.getUser().then(({ data }) => {
          if (data?.user) showCatName(data.user);
        }).catch(() => {});
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
