import { connectClient } from './auth-client.js';

const form = document.querySelector('#profile-form');
const usernameField = document.querySelector('#profile-username');
const roleField = document.querySelector('#profile-role');
const pictureField = document.querySelector('#profile-picture-file');
const picturePreview = document.querySelector('#profile-picture-preview');
const pictureReset = document.querySelector('#profile-picture-reset');
const status = document.querySelector('#profile-status');
const bucket = 'profile-pictures';
const maxPhotoBytes = 1024 * 1024;
const acceptedTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);
let client;
let auth;
let user;
let selectedPhoto = null;
let removePhoto = false;
let previewObjectUrl = '';
let googlePhoto = '';

function defaultGooglePhoto() {
  const identity = user?.identities?.find(entry => entry.provider === 'google')?.identity_data || {};
  return user?.user_metadata?.avatar_url || user?.user_metadata?.picture || identity.avatar_url || identity.picture || '';
}

function setPreview(url) {
  if (previewObjectUrl) URL.revokeObjectURL(previewObjectUrl);
  previewObjectUrl = url?.startsWith('blob:') ? url : '';
  picturePreview.src = url || '';
  picturePreview.hidden = !url;
}

async function loadSavedPhoto() {
  googlePhoto = defaultGooglePhoto();
  const path = user.user_metadata?.fivey_avatar_path;
  if (path) {
    const { data, error } = await client.storage.from(bucket).createSignedUrl(path, 3600);
    if (error) throw error;
    if (data?.signedUrl) {
      setPreview(data.signedUrl);
      return data.signedUrl;
    }
  }
  setPreview(googlePhoto);
  return googlePhoto;
}

async function initRecoveryPhone(client, userId) {
  const phoneForm = document.querySelector('#recovery-phone-form');
  if (!phoneForm) return;
  const phoneField = phoneForm.querySelector('input');
  const submit = phoneForm.querySelector('button[type="submit"]');
  const phoneStatus = document.querySelector('#recovery-phone-status');
  const phones = client.from('fivey_recovery_phones');
  try {
    const { data, error } = await phones.select('phone').eq('user_id', userId).maybeSingle();
    if (error) throw error;
    phoneField.value = data?.phone || '';
    phoneField.disabled = false;
    submit.disabled = false;
  } catch {
    phoneStatus.textContent = 'Could not load your recovery phone. Refresh the page to try again.';
    return;
  }

  phoneForm.addEventListener('submit', async event => {
    event.preventDefault();
    const phone = phoneField.value.trim().replace(/[\s().-]/g, '');
    if (phone && !/^[+][1-9][0-9]{7,14}$/.test(phone)) {
      phoneStatus.textContent = 'Enter a phone number with its country code, starting with +.';
      phoneField.focus();
      return;
    }

    phoneStatus.textContent = '';
    phoneField.disabled = submit.disabled = true;
    try {
      const { error } = phone
        ? await phones.upsert({ user_id: userId, phone })
        : await phones.delete().eq('user_id', userId);
      if (error) throw error;
      phoneField.value = phone;
      phoneStatus.textContent = phone ? 'Recovery phone saved. Verification pending.' : 'Recovery phone removed.';
    } catch {
      phoneStatus.textContent = 'Could not save your recovery phone. Please try again.';
    } finally {
      phoneField.disabled = submit.disabled = false;
    }
  });
}

try {
  client = await connectClient();
  auth = client?.auth;
  if (!auth) throw new Error('Fivey sign-in is not configured.');
  const { data, error } = await auth.getUser();
  if (error) throw error;
  user = data.user;
  if (!user) throw new Error('Sign in to update your settings.');
  void initRecoveryPhone(client, user.id);
  usernameField.value = user.user_metadata?.fivey_username || user.email?.split('@')[0] || '';
  roleField.value = ['student', 'teacher'].includes(user.user_metadata?.fivey_role)
    ? user.user_metadata.fivey_role
    : '';
  try {
    await loadSavedPhoto();
  } catch {
    googlePhoto = defaultGooglePhoto();
    setPreview(googlePhoto);
  }

  pictureField.addEventListener('change', () => {
    status.textContent = '';
    const file = pictureField.files?.[0];
    selectedPhoto = file || null;
    removePhoto = false;
    if (!file) return;
    if (!acceptedTypes.has(file.type) || file.size > maxPhotoBytes) {
      pictureField.value = '';
      selectedPhoto = null;
      status.textContent = 'Choose a JPG, PNG, or WebP image that is 1 MB or smaller.';
      return;
    }
    setPreview(URL.createObjectURL(file));
  });

  pictureReset.addEventListener('click', () => {
    pictureField.value = '';
    selectedPhoto = null;
    removePhoto = true;
    status.textContent = '';
    setPreview(googlePhoto);
  });

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
    pictureReset.disabled = true;
    try {
      let avatarPath = user.user_metadata?.fivey_avatar_path || null;
      if (selectedPhoto) {
        const { error: uploadError } = await client.storage.from(bucket).upload(user.id + '/avatar', selectedPhoto, {
          cacheControl: '3600',
          contentType: selectedPhoto.type,
          upsert: true
        });
        if (uploadError) throw uploadError;
        avatarPath = user.id + '/avatar';
      } else if (removePhoto) {
        avatarPath = null;
      }

      const response = await auth.updateUser({ data: {
        ...user.user_metadata,
        fivey_username: username,
        fivey_role: role,
        fivey_avatar_path: avatarPath
      } });
      if (response.error) throw response.error;
      user = response.data.user;
      let avatarUrl = googlePhoto;
      if (avatarPath) {
        const { data: signed, error: signedError } = await client.storage.from(bucket).createSignedUrl(avatarPath, 3600);
        if (!signedError && signed?.signedUrl) avatarUrl = signed.signedUrl;
      }
      if (selectedPhoto && previewObjectUrl) avatarUrl = previewObjectUrl;
      window.dispatchEvent(new CustomEvent('fivey:profile-updated', { detail: { username, role, avatarUrl } }));
      status.textContent = 'Settings saved.';
      selectedPhoto = null;
      removePhoto = false;
      pictureField.value = '';
      if (avatarPath) await loadSavedPhoto();
    } catch (error) {
      status.textContent = error.message || 'Could not save settings. Please try again.';
    } finally {
      submit.disabled = false;
      pictureReset.disabled = false;
    }
  });
} catch (error) {
  status.textContent = error.message || 'Fivey could not load your settings. Refresh the page to try again.';
}
