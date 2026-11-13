import { authConfig } from './auth-config.js?v=2';
import { completed, connect, login, rememberDestination } from './auth-client.js';

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
      document.querySelector('header nav')?.append(signOut);
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
