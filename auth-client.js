import { authConfig } from './auth-config.js';

export const root = new URL('./', import.meta.url);
export const login = new URL('login.html', root);
const pages = new Set(['', 'index.html', 'about.html', 'courses.html', 'course.html', 'practice.html', 'full-length.html', 'settings.html', 'blog.html', 'blog-article.html']);
const returnKey = 'fivey-auth-return';
const tabKey = 'fivey-auth-tab';

export function safeDestination(value) {
  try {
    const url = new URL(value || './', root);
    if (url.origin === root.origin && url.pathname.startsWith(root.pathname) &&
        pages.has(url.pathname.slice(root.pathname.length))) return url;
  } catch {
    // Default to the homepage when a redirect is invalid.
  }
  return root;
}

export function rememberDestination() {
  sessionStorage.setItem(returnKey, safeDestination(location.href).href);
}

export function continueToSite() {
  const destination = safeDestination(sessionStorage.getItem(returnKey));
  sessionStorage.removeItem(returnKey);
  location.replace(destination.href);
}

export async function connectClient({ fetch: customFetch } = {}) {
  if (!authConfig.url || !authConfig.key) return null;
  const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2.95.3');
  const storage = window.sessionStorage;
  let tabId = storage.getItem(tabKey);
  if (!tabId) {
    tabId = crypto.randomUUID();
    storage.setItem(tabKey, tabId);
  }

  return createClient(authConfig.url, authConfig.key, {
    ...(customFetch ? { global: { fetch: customFetch } } : {}),
    auth: {
      flowType: 'pkce',
      detectSessionInUrl: true,
      storage,
      storageKey: `fivey-auth-${tabId}`
    }
  });
}

export async function connect(options) {
  const client = await connectClient(options);
  return client?.auth ?? null;
}

export function completed(user) {
  return Boolean(user && (user.app_metadata?.providers?.includes('google') ||
    (user.email_confirmed_at && user.user_metadata?.fivey_password_ready === true)));
}

const buttonLinks = 'a.practice-button, a.intro-link, .home-main .hero a, a.card';
const buttonControls = 'button, input[type="button"], input[type="submit"], input[type="reset"]';
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let buttonNavigationPending = false;

document.addEventListener('click', event => {
  if (reducedMotion.matches || !(event.target instanceof Element)) return;
  const button = event.target.closest(buttonControls + ', ' + buttonLinks);
  if (!button || button.matches(':disabled') || typeof button.animate !== 'function') return;

  if (!(button instanceof HTMLAnchorElement)) {
    button.animate([{ opacity: 1 }, { opacity: .2 }, { opacity: 1 }], 240);
    return;
  }

  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      !button.href || button.hasAttribute('download') || (button.target && button.target !== '_self')) return;

  event.preventDefault();
  if (buttonNavigationPending) return;
  buttonNavigationPending = true;
  const destination = button.href;
  const fade = button.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, easing: 'ease-out' });
  const navigate = () => {
    buttonNavigationPending = false;
    location.assign(destination);
  };
  fade.finished.then(navigate, navigate);
});
