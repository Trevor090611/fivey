import { connectClient } from './auth-client.js';

const form = document.querySelector('#profile-form');
const usernameField = document.querySelector('#profile-username');
const roleField = document.querySelector('#profile-role');
const pictureField = document.querySelector('#profile-picture-file');
const picturePreview = document.querySelector('#profile-picture-preview');
const pictureReset = document.querySelector('#profile-picture-reset');
const status = document.querySelector('#profile-status');
const bucket = 'profile-pictures';
const publicPhotoBucket = 'public-profile-photos';
const maxPhotoBytes = 1024 * 1024;
const acceptedTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);
let client;
let auth;
let user;
let selectedPhoto = null;
let removePhoto = false;
let previewObjectUrl = '';
let googlePhoto = '';

async function preparePublicPhoto(file) {
  const image = await createImageBitmap(file);
  try {
    const scale = Math.min(1, 512 / Math.max(image.width, image.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.width * scale));
    canvas.height = Math.max(1, Math.round(image.height * scale));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not prepare the public photo.');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const photo = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', 0.9));
    if (!photo || photo.size > maxPhotoBytes) throw new Error('Could not prepare the public photo. Choose a smaller image.');
    return photo;
  } finally {
    image.close();
  }
}

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

const recoveryCountries = [
  { iso: 'AR', name: 'Argentina', dial: '54', min: 10, max: 11, trunk: '0', groups: [3, 4, 4], example: '011 2345 6789' },
  { iso: 'AU', name: 'Australia', dial: '61', min: 9, max: 10, trunk: '0', groups: [4, 3, 3], example: '0412 345 678' },
  { iso: 'AT', name: 'Austria', dial: '43', min: 7, max: 13, trunk: '0', groups: [4, 3, 4], example: '0664 123 4567' },
  { iso: 'BD', name: 'Bangladesh', dial: '880', min: 10, max: 11, trunk: '0', groups: [5, 6], example: '01712 345678' },
  { iso: 'BE', name: 'Belgium', dial: '32', min: 9, max: 10, trunk: '0', groups: [4, 2, 2, 2], example: '0470 12 34 56' },
  { iso: 'BR', name: 'Brazil', dial: '55', min: 10, max: 11, trunk: '0', groups: [2, 5, 4], example: '(11) 91234-5678' },
  { iso: 'CA', name: 'Canada', dial: '1', min: 10, max: 10, groups: [3, 3, 4], example: '(416) 555-0148', format: 'nanp' },
  { iso: 'CL', name: 'Chile', dial: '56', min: 9, max: 9, groups: [1, 4, 4], example: '9 1234 5678' },
  { iso: 'CN', name: 'China', dial: '86', min: 10, max: 12, trunk: '0', groups: [3, 4, 4], example: '138 0013 8000' },
  { iso: 'CO', name: 'Colombia', dial: '57', min: 10, max: 10, groups: [3, 3, 4], example: '300 123 4567' },
  { iso: 'CZ', name: 'Czechia', dial: '420', min: 9, max: 9, groups: [3, 3, 3], example: '601 123 456' },
  { iso: 'DK', name: 'Denmark', dial: '45', min: 8, max: 8, groups: [2, 2, 2, 2], example: '20 12 34 56' },
  { iso: 'DO', name: 'Dominican Republic', dial: '1', min: 10, max: 10, groups: [3, 3, 4], example: '(809) 555-0148', format: 'nanp' },
  { iso: 'EG', name: 'Egypt', dial: '20', min: 10, max: 11, trunk: '0', groups: [4, 3, 4], example: '0100 123 4567' },
  { iso: 'FI', name: 'Finland', dial: '358', min: 7, max: 12, trunk: '0', groups: [3, 3, 4], example: '040 123 4567' },
  { iso: 'FR', name: 'France', dial: '33', min: 10, max: 10, trunk: '0', groups: [2, 2, 2, 2, 2], example: '06 12 34 56 78' },
  { iso: 'DE', name: 'Germany', dial: '49', min: 7, max: 12, trunk: '0', groups: [4, 4, 4], example: '0151 2345 6789' },
  { iso: 'GR', name: 'Greece', dial: '30', min: 10, max: 10, groups: [3, 3, 4], example: '691 234 5678' },
  { iso: 'HK', name: 'Hong Kong', dial: '852', min: 8, max: 8, groups: [4, 4], example: '9123 4567' },
  { iso: 'IN', name: 'India', dial: '91', min: 10, max: 10, trunk: '0', groups: [5, 5], example: '98765 43210' },
  { iso: 'ID', name: 'Indonesia', dial: '62', min: 9, max: 12, trunk: '0', groups: [4, 4, 4], example: '0812 3456 7890' },
  { iso: 'IE', name: 'Ireland', dial: '353', min: 7, max: 10, trunk: '0', groups: [3, 3, 4], example: '085 123 4567' },
  { iso: 'IL', name: 'Israel', dial: '972', min: 9, max: 10, trunk: '0', groups: [3, 3, 4], example: '050 123 4567' },
  { iso: 'IT', name: 'Italy', dial: '39', min: 6, max: 11, groups: [3, 3, 4], example: '333 123 4567' },
  { iso: 'JP', name: 'Japan', dial: '81', min: 10, max: 11, trunk: '0', groups: [3, 4, 4], example: '090-1234-5678' },
  { iso: 'JM', name: 'Jamaica', dial: '1', min: 10, max: 10, groups: [3, 3, 4], example: '(876) 555-0148', format: 'nanp' },
  { iso: 'KE', name: 'Kenya', dial: '254', min: 9, max: 10, trunk: '0', groups: [4, 3, 3], example: '0712 345 678' },
  { iso: 'KR', name: 'South Korea', dial: '82', min: 9, max: 11, trunk: '0', groups: [3, 4, 4], example: '010-1234-5678' },
  { iso: 'KW', name: 'Kuwait', dial: '965', min: 8, max: 8, groups: [4, 4], example: '5000 1234' },
  { iso: 'MY', name: 'Malaysia', dial: '60', min: 9, max: 10, trunk: '0', groups: [3, 3, 4], example: '012-345 6789' },
  { iso: 'MX', name: 'Mexico', dial: '52', min: 10, max: 10, groups: [2, 4, 4], example: '55 1234 5678' },
  { iso: 'NP', name: 'Nepal', dial: '977', min: 10, max: 10, groups: [3, 3, 4], example: '984 123 4567' },
  { iso: 'NL', name: 'Netherlands', dial: '31', min: 9, max: 10, trunk: '0', groups: [2, 4, 4], example: '06 1234 5678' },
  { iso: 'NZ', name: 'New Zealand', dial: '64', min: 8, max: 10, trunk: '0', groups: [3, 3, 4], example: '021 123 4567' },
  { iso: 'NG', name: 'Nigeria', dial: '234', min: 10, max: 11, trunk: '0', groups: [4, 3, 4], example: '0803 123 4567' },
  { iso: 'NO', name: 'Norway', dial: '47', min: 8, max: 8, groups: [3, 2, 3], example: '412 34 567' },
  { iso: 'PK', name: 'Pakistan', dial: '92', min: 10, max: 11, trunk: '0', groups: [4, 7], example: '0300 1234567' },
  { iso: 'PE', name: 'Peru', dial: '51', min: 9, max: 9, groups: [3, 3, 3], example: '987 654 321' },
  { iso: 'PH', name: 'Philippines', dial: '63', min: 10, max: 11, trunk: '0', groups: [4, 3, 4], example: '0917 123 4567' },
  { iso: 'PL', name: 'Poland', dial: '48', min: 9, max: 9, groups: [3, 3, 3], example: '512 345 678' },
  { iso: 'PT', name: 'Portugal', dial: '351', min: 9, max: 9, groups: [3, 3, 3], example: '912 345 678' },
  { iso: 'PR', name: 'Puerto Rico', dial: '1', min: 10, max: 10, groups: [3, 3, 4], example: '(787) 555-0148', format: 'nanp' },
  { iso: 'QA', name: 'Qatar', dial: '974', min: 8, max: 8, groups: [4, 4], example: '3312 3456' },
  { iso: 'RU', name: 'Russia', dial: '7', min: 10, max: 11, trunk: '8', groups: [1, 3, 3, 2, 2], example: '8 912 345 67 89' },
  { iso: 'SA', name: 'Saudi Arabia', dial: '966', min: 9, max: 10, trunk: '0', groups: [3, 3, 4], example: '050 123 4567' },
  { iso: 'SG', name: 'Singapore', dial: '65', min: 8, max: 8, groups: [4, 4], example: '8123 4567' },
  { iso: 'ZA', name: 'South Africa', dial: '27', min: 9, max: 10, trunk: '0', groups: [3, 3, 4], example: '082 123 4567' },
  { iso: 'ES', name: 'Spain', dial: '34', min: 9, max: 9, groups: [3, 3, 3], example: '612 345 678' },
  { iso: 'LK', name: 'Sri Lanka', dial: '94', min: 9, max: 10, trunk: '0', groups: [3, 3, 4], example: '071 234 5678' },
  { iso: 'SE', name: 'Sweden', dial: '46', min: 7, max: 10, trunk: '0', groups: [3, 3, 4], example: '070-123 45 67' },
  { iso: 'CH', name: 'Switzerland', dial: '41', min: 9, max: 10, trunk: '0', groups: [3, 3, 2, 2], example: '079 123 45 67' },
  { iso: 'TW', name: 'Taiwan', dial: '886', min: 9, max: 10, trunk: '0', groups: [4, 3, 3], example: '0912 345 678' },
  { iso: 'TH', name: 'Thailand', dial: '66', min: 9, max: 10, trunk: '0', groups: [3, 3, 4], example: '081 234 5678' },
  { iso: 'TR', name: 'Turkey', dial: '90', min: 10, max: 11, trunk: '0', groups: [4, 3, 4], example: '0532 123 4567' },
  { iso: 'UA', name: 'Ukraine', dial: '380', min: 9, max: 10, trunk: '0', groups: [3, 3, 4], example: '050 123 4567' },
  { iso: 'AE', name: 'United Arab Emirates', dial: '971', min: 9, max: 10, trunk: '0', groups: [3, 3, 4], example: '050 123 4567' },
  { iso: 'GB', name: 'United Kingdom', dial: '44', min: 10, max: 11, trunk: '0', groups: [3, 4, 4], example: '020 7946 0958' },
  { iso: 'US', name: 'United States', dial: '1', min: 10, max: 10, groups: [3, 3, 4], example: '(202) 555-0148', format: 'nanp' },
  { iso: 'VN', name: 'Vietnam', dial: '84', min: 9, max: 11, trunk: '0', groups: [4, 3, 3], example: '0912 345 678' }
];

function formatPhoneInput(digits, country) {
  if (country.format === 'nanp') {
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return '(' + digits.slice(0, 3) + ') ' + digits.slice(3);
    return '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6);
  }
  const chunks = [];
  let offset = 0;
  for (const size of country.groups) {
    if (offset >= digits.length) break;
    chunks.push(digits.slice(offset, offset + size));
    offset += size;
  }
  if (offset < digits.length) chunks.push(digits.slice(offset));
  const separator = country.iso === 'JP' || country.iso === 'KR' ? '-' : ' ';
  return chunks.join(separator);
}

function countryOptions(select) {
  const sorted = [...recoveryCountries].sort((a, b) => a.name.localeCompare(b.name));
  select.replaceChildren(...sorted.map(country => {
    const option = document.createElement('option');
    option.value = country.iso;
    option.textContent = country.name + ' (+' + country.dial + ')';
    return option;
  }));
}

function countryForStoredPhone(phone, preferredIso) {
  const savedDigits = String(phone || '').replace(/\D/g, '');
  const preferred = recoveryCountries.find(country => country.iso === preferredIso);
  if (preferred && savedDigits.startsWith(preferred.dial) && String(phone).startsWith('+')) return { country: preferred, digits: savedDigits.slice(preferred.dial.length) };
  const matchingCountries = [...recoveryCountries].sort((a, b) => b.dial.length - a.dial.length)
    .filter(entry => String(phone || '').startsWith('+' + entry.dial));
  const country = matchingCountries.find(entry => entry.iso === 'US') || matchingCountries[0];
  if (!country) return null;
  let digits = savedDigits.slice(country.dial.length);
  if (country.trunk && digits && !digits.startsWith(country.trunk)) digits = country.trunk + digits;
  return { country, digits };
}

async function initRecoveryPhone(client, userId) {
  const phoneForm = document.querySelector('#recovery-phone-form');
  if (!phoneForm) return;
  const countryField = document.querySelector('#recovery-phone-country');
  const phoneField = document.querySelector('#recovery-phone');
  const submit = phoneForm.querySelector('button[type="submit"]');
  const phoneStatus = document.querySelector('#recovery-phone-status');
  const phoneHelp = document.querySelector('#recovery-phone-help');
  const phones = client.from('fivey_recovery_phones');
  let unparsedSavedPhone = '';
  const regionKey = 'fivey.recovery-phone-region.' + userId;
  const rememberedRegion = () => {
    try { return localStorage.getItem(regionKey) || ''; } catch { return ''; }
  };
  const saveRegion = iso => {
    try { if (iso) localStorage.setItem(regionKey, iso); else localStorage.removeItem(regionKey); } catch { /* Storage is optional. */ }
  };
  const selectedCountry = () => recoveryCountries.find(country => country.iso === countryField.value) || recoveryCountries.find(country => country.iso === 'US');
  const updateHelp = () => {
    const country = selectedCountry();
    phoneField.placeholder = country.example;
    phoneHelp.textContent = 'Choose ' + country.name + ' (+' + country.dial + ') and enter the number in this local format: ' + country.example + '. To remove a saved number, clear the field and save. A number must be verified before it can be used for recovery.';
  };
  const formatCurrentValue = () => {
    const country = selectedCountry();
    const raw = phoneField.value;
    let digits = raw.replace(/\D/g, '');
    if (raw.trim().startsWith('+') && digits.startsWith(country.dial)) digits = digits.slice(country.dial.length);
    digits = digits.slice(0, country.max);
    phoneField.value = formatPhoneInput(digits, country);
  };

  countryOptions(countryField);
  const savedRegion = rememberedRegion();
  countryField.value = recoveryCountries.some(country => country.iso === savedRegion) ? savedRegion : 'US';
  updateHelp();
  countryField.addEventListener('change', () => {
    formatCurrentValue();
    updateHelp();
  });
  phoneField.addEventListener('input', formatCurrentValue);
  try {
    const { data, error } = await phones.select('phone').eq('user_id', userId).maybeSingle();
    if (error) throw error;
    if (data?.phone) {
      const stored = countryForStoredPhone(data.phone, rememberedRegion());
      if (stored) {
        countryField.value = stored.country.iso;
        phoneField.value = formatPhoneInput(stored.digits, stored.country);
      } else {
        unparsedSavedPhone = data.phone;
        phoneStatus.textContent = 'Your saved number could not be matched to a region in the list, so it will be kept unless you enter a new number.';
      }
    }
    updateHelp();
    countryField.disabled = false;
    phoneField.disabled = false;
    submit.disabled = false;
  } catch {
    phoneStatus.textContent = 'Could not load your recovery phone. Refresh the page to try again.';
    return;
  }

  phoneForm.addEventListener('submit', async event => {
    event.preventDefault();
    const country = selectedCountry();
    const nationalDigits = phoneField.value.replace(/\D/g, '');
    if (!nationalDigits && unparsedSavedPhone) {
      phoneStatus.textContent = 'Your saved number was kept. Choose a country or region and enter a new number to replace it.';
      return;
    }
    if (nationalDigits && (nationalDigits.length < country.min || nationalDigits.length > country.max)) {
      const length = country.min === country.max ? country.min + ' digits' : country.min + ' to ' + country.max + ' digits';
      phoneStatus.textContent = 'Enter ' + length + ' for ' + country.name + ', using the format shown.';
      phoneField.focus();
      return;
    }
    let phone = '';
    if (nationalDigits) {
      let subscriberDigits = nationalDigits;
      if (country.trunk && subscriberDigits.startsWith(country.trunk)) subscriberDigits = subscriberDigits.slice(country.trunk.length);
      phone = '+' + country.dial + subscriberDigits;
      if (subscriberDigits.length < 4 || phone.replace(/\D/g, '').length > 15) {
        phoneStatus.textContent = 'Enter a valid phone number in the format shown.';
        phoneField.focus();
        return;
      }
    }

    phoneStatus.textContent = '';
    countryField.disabled = phoneField.disabled = submit.disabled = true;
    try {
      const { error } = phone
        ? await phones.upsert({ user_id: userId, phone })
        : await phones.delete().eq('user_id', userId);
      if (error) throw error;
      phoneField.value = nationalDigits ? formatPhoneInput(nationalDigits, country) : '';
      saveRegion(phone ? country.iso : '');
      if (phone) unparsedSavedPhone = '';
      phoneStatus.textContent = phone ? 'Recovery phone saved. Verification pending.' : 'Recovery phone removed.';
    } catch {
      phoneStatus.textContent = 'Could not save your recovery phone. Please try again.';
    } finally {
      countryField.disabled = phoneField.disabled = submit.disabled = false;
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
    pictureField.disabled = true;
    try {
      // Only the form that labels uploads as public can publish the selected file.
      const publishPhoto = selectedPhoto && form.dataset.photoVisibility === 'public';
      let publicPath;
      let publicPhoto;
      if (publishPhoto || removePhoto) {
        const { data, error } = await client.rpc('fivey_public_photo_path');
        if (error || !data) throw new Error('Could not open public photo storage. Please try again.');
        publicPath = data;
        if (publishPhoto) publicPhoto = await preparePublicPhoto(selectedPhoto);
      }
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
      if (publicPath) {
        const publicPhotos = client.storage.from(publicPhotoBucket);
        const { error } = publicPhoto
          ? await publicPhotos.upload(publicPath, publicPhoto, { cacheControl: '60', contentType: publicPhoto.type, upsert: true })
          : await publicPhotos.remove([publicPath]);
        if (error) {
          throw new Error(publicPhoto
            ? 'Settings saved, but the photo could not be published. Try saving again.'
            : 'Settings saved, but the public photo could not be removed. Try saving again.');
        }
      }
      status.textContent = publicPhoto ? 'Settings saved. Your profile photo is now public.' : 'Settings saved.';
      selectedPhoto = null;
      removePhoto = false;
      pictureField.value = '';
      if (avatarPath) await loadSavedPhoto();
    } catch (error) {
      status.textContent = error.message || 'Could not save settings. Please try again.';
    } finally {
      submit.disabled = false;
      pictureReset.disabled = false;
      pictureField.disabled = false;
    }
  });
} catch (error) {
  status.textContent = error.message || 'Fivey could not load your settings. Refresh the page to try again.';
}
