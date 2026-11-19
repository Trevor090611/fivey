import { connect } from './auth-client.js';

const form = document.querySelector('#profile-form');
const usernameField = document.querySelector('#profile-username');
const roleField = document.querySelector('#profile-role');
const status = document.querySelector('#profile-status');

try {
  const auth = await connect();
  if (!auth) throw new Error('Fivey sign-in is not configured.');
  const { data, error } = await auth.getUser();
  if (error) throw error;
  const user = data.user;
  if (!user) throw new Error('Sign in to update your settings.');
  usernameField.value = user.user_metadata?.fivey_username || user.email?.split('@')[0] || '';
  roleField.value = ['student', 'teacher'].includes(user.user_metadata?.fivey_role)
    ? user.user_metadata.fivey_role
    : '';

  form.addEventListener('submit', async event => {
    event.preventDefault();
    status.textContent = '';
    const username = usernameField.value.trim();
    const role = roleField.value;
    if (!username) {
      status.textContent = 'Enter a username to continue.';
      usernameField.focus();
      return;
    }
    if (!['student', 'teacher'].includes(role)) {
      status.textContent = 'Choose whether you are a student or teacher.';
      roleField.focus();
      return;
    }

    const submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;
    try {
      const response = await auth.updateUser({ data: {
        ...user.user_metadata,
        fivey_username: username,
        fivey_role: role
      } });
      if (response.error) throw response.error;
      user.user_metadata = response.data.user.user_metadata;
      window.dispatchEvent(new CustomEvent('fivey:profile-updated', { detail: { username, role } }));
      status.textContent = 'Settings saved.';
    } catch (error) {
      status.textContent = error.message || 'Could not save settings. Please try again.';
    } finally {
      submit.disabled = false;
    }
  });
} catch (error) {
  status.textContent = error.message || 'Fivey could not load your settings. Refresh the page to try again.';
}
