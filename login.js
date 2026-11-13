import { completed, connect, continueToSite, login } from './auth-client.js';

const status = document.querySelector('#auth-status');
const forms = [...document.querySelectorAll('form[data-stage]')];
const google = document.querySelector('#google');
const modes = document.querySelector('#auth-modes');
let auth;
let email = '';
let busy = false;

function show(stage) {
  for (const form of forms) form.hidden = form.dataset.stage !== stage;
  modes.hidden = stage === 'password';
  forms.find(form => form.dataset.stage === stage)?.querySelector('input')?.focus();
}

async function run(action) {
  if (busy) return;
  busy = true;
  status.textContent = '';
  try {
    await action();
  } catch (error) {
    status.textContent = error.message || 'Something went wrong. Please try again.';
  } finally {
    busy = false;
  }
}

function bind(stage, handler) {
  const form = forms.find(item => item.dataset.stage === stage);
  form.addEventListener('submit', event => {
    event.preventDefault();
    run(() => handler(new FormData(form)));
  });
}

function checked(response) {
  if (response.error) throw response.error;
  return response.data;
}

async function sendCode() {
  checked(await auth.signInWithOtp({ email, options: { shouldCreateUser: true } }));
  status.textContent = 'If a code can be sent to this email, it will arrive shortly. Check your inbox and spam folder.';
}

try {
  auth = await connect();
  if (!auth) {
    status.textContent = 'Fivey sign-in is being set up.';
  } else {
    const { data } = await auth.getUser();
    if (completed(data.user)) {
      continueToSite();
    } else {
      show(data.user?.email_confirmed_at ? 'password' : 'login');
      document.querySelector('#show-signup').addEventListener('click', () => show('email'));
      document.querySelector('#show-login').addEventListener('click', () => show('login'));
      document.querySelector('#resend').addEventListener('click', () => run(sendCode));
      google.addEventListener('click', () => run(async () => {
        checked(await auth.signInWithOAuth({ provider: 'google', options: { redirectTo: login.href } }));
      }));
      bind('login', async values => {
        const result = checked(await auth.signInWithPassword({
          email: values.get('email').trim(), password: values.get('password')
        }));
        if (completed(result.user)) continueToSite();
        else show('password');
      });
      bind('email', async values => {
        email = values.get('email').trim();
        await sendCode();
        show('verify');
      });
      bind('verify', async values => {
        const result = checked(await auth.verifyOtp({
          email, token: values.get('code').trim(), type: 'email'
        }));
        if (completed(result.user)) {
          await auth.signOut({ scope: 'local' });
          show('login');
          status.textContent = 'An account already exists. Log in using your password or Google.';
        } else {
          show('password');
          status.textContent = 'Email verified. Create your password to finish.';
        }
      });
      bind('password', async values => {
        const password = values.get('password');
        if (password !== values.get('confirm')) throw new Error('Your passwords must match.');
        const user = checked(await auth.getUser()).user;
        if (!user?.email_confirmed_at || completed(user)) throw new Error('Verify your email before creating a password.');
        checked(await auth.updateUser({ password, data: { fivey_password_ready: true } }));
        continueToSite();
      });
    }
  }
} catch {
  status.textContent = 'Fivey sign-in could not load. Refresh the page to try again.';
}
