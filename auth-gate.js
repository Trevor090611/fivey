import { authConfig } from './auth-config.js?v=2';
import { completed, connect, login, rememberDestination } from './auth-client.js';

const subjects = [
  ['biology', 'AP Biology'],
  ['environmental-science', 'AP Environmental Science'],
  ['chemistry', 'AP Chemistry'],
  ['physics-1', 'AP Physics 1'],
  ['psychology', 'AP Psychology'],
  ['calculus-ab', 'AP Calculus AB'],
  ['macroeconomics', 'AP Macroeconomics'],
];

function appendAccountNavigation(nav, signOut) {
  const dropdown = document.createElement('details');
  dropdown.className = 'fivey-subjects';
  const trigger = document.createElement('summary');
  trigger.textContent = 'AP Subjects';
  dropdown.append(trigger);

  const links = document.createElement('ul');
  links.setAttribute('aria-label', 'AP subjects');
  for (const [id, name] of subjects) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = new URL('./course.html?course=' + id, import.meta.url).href;
    link.textContent = name;
    item.append(link);
    links.append(item);
  }
  dropdown.append(links);

  const styles = document.createElement('style');
  styles.textContent = `
.fivey-subjects{position:relative;flex:none;color:#19271f}
.fivey-subjects summary{cursor:pointer;white-space:nowrap;border:2px solid #294735;border-radius:6px;padding:8px;background:#fff;font:700 14px/1.4 system-ui,sans-serif}
.fivey-subjects summary:hover,.fivey-subjects[open] summary{background:#d9f783}
.fivey-subjects ul{position:absolute;z-index:10;inset-inline-end:0;inset-block-start:calc(100% + 6px);width:max-content;max-width:calc(100vw - 32px);max-height:65vh;overflow:auto;margin:0;padding:6px;list-style:none;background:#fff;border:2px solid #294735;border-radius:8px;box-shadow:0 8px 22px #19271f30}
header nav .fivey-subjects li a{display:block;padding:8px 10px;border-radius:4px;color:#19271f;background:#fff;text-decoration:none;white-space:normal}
header nav .fivey-subjects li a:hover,header nav .fivey-subjects li a:focus-visible{color:#19271f;background:#d9f783}
.fivey-subjects summary:focus-visible{outline:3px solid #76974d;outline-offset:2px}
`;
  document.head.append(styles);
  nav.append(dropdown, signOut);

  dropdown.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dropdown.open) {
      event.preventDefault();
      dropdown.open = false;
      trigger.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!dropdown.contains(event.target)) dropdown.open = false;
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
      if (nav) appendAccountNavigation(nav, signOut);
      document.documentElement.classList.remove('fivey-auth-pending');
      auth.onAuthStateChange(event => {
        if (event === 'SIGNED_OUT') location.replace(login.href);
      });
    }
  } else if (authConfig.enabled) {
    throw new Error('Missing authentication configuration');
  } else {
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
