import { authConfig } from './auth-config.js';

export const root = new URL('./', import.meta.url);
export const login = new URL('login.html', root);
const pages = new Set(['', 'index.html', 'about.html', 'courses.html', 'course.html', 'practice.html', 'full-length.html']);
const returnKey = 'fivey-auth-return';

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

export async function connect() {
  if (!authConfig.url || !authConfig.key) return null;
  const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2.95.3');
  return createClient(authConfig.url, authConfig.key, {
    auth: { flowType: 'pkce', detectSessionInUrl: true, storageKey: 'fivey-auth' }
  }).auth;
}

export function completed(user) {
  return Boolean(user && (user.app_metadata?.providers?.includes('google') ||
    (user.email_confirmed_at && user.user_metadata?.fivey_password_ready === true)));
}
