import { cozySeatPrices, readCozySeats } from './orbies-wallet.js?v=cozy-seat4';

// Keeps each user's Fivey data on their account (Supabase table fivey_user_data)
// so it is the same on every browser and device they sign in from.
// Pages keep reading and writing localStorage as before: this module fills
// localStorage from the account at sign-in and saves every change back.

const table = 'fivey_user_data';
const pullTimeoutMs = 5000;
const setItem = Storage.prototype.setItem;
const getItem = Storage.prototype.getItem;
const removeItem = Storage.prototype.removeItem;

function isAccountKey(key, userId) {
  if (typeof key !== 'string' || !key.startsWith('fivey')) return false;
  if (key.startsWith('fivey-account-') || key.includes('streak')) return false; // sync state; streak lives in user metadata
  return key.includes(userId) || key.startsWith('fivey-progress-seen-v1:');
}

function parse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function readWallet(value) {
  const wallet = value?.startsWith('{') ? parse(value, {}) : { balance: Number(value) };
  return {
    ...wallet,
    balance: Number.isSafeInteger(wallet.balance) && wallet.balance > 0 ? wallet.balance : 0,
    chests: wallet.chests && typeof wallet.chests === 'object' ? wallet.chests : {}
  };
}

// Combines a browser's copy with the account's copy when they differ, without losing progress.
function mergeValue(key, saved, local) {
  if (key.startsWith('fivey-orbies-v1:')) {
    const a = readWallet(saved);
    const b = readWallet(local);
    const chests = { ...a.chests };
    for (const [id, chest] of Object.entries(b.chests)) {
      if (!chests[id] || (Number(chest?.clicks) || 0) > (Number(chests[id]?.clicks) || 0)) chests[id] = chest;
    }
    const remoteSeats = readCozySeats(a);
    const localSeats = readCozySeats(b);
    const owned = [...new Set([...remoteSeats.owned, ...localSeats.owned])];
    const selected = remoteSeats.updatedAt > localSeats.updatedAt ? remoteSeats : localSeats;
    // Each copy's balance already includes its own purchases. Deduct only purchases it has not seen.
    const remaining = (wallet, seats) => owned.reduce((balance, id) =>
      balance - (seats.owned.includes(id) ? 0 : cozySeatPrices[id]), wallet.balance);
    const balance = Math.max(0, remaining(a, remoteSeats), remaining(b, localSeats));
    return JSON.stringify({ ...a, ...b, balance, chests, cozySeats: { ...selected, owned } });
  }
  if (key.startsWith('fivey-practice-analytics-v1:')) {
    const attempts = value => Number(parse(value, null)?.attempted) || 0;
    return attempts(saved) > attempts(local) ? saved : local;
  }
  if (key.startsWith('fivey-progress-seen-v1:')) {
    const a = parse(saved, {});
    const b = parse(local, {});
    const seen = [...new Set([...(Array.isArray(a.seen) ? a.seen : []), ...(Array.isArray(b.seen) ? b.seen : [])])];
    return JSON.stringify({ ...a, ...b, seen, offset: Math.max(Number(a.offset) || 0, Number(b.offset) || 0) });
  }
  if (key.startsWith('fivey-analytics-unlocks-v1:')) {
    const list = value => (Array.isArray(parse(value, null)) ? parse(value, null) : []);
    return JSON.stringify([...new Set([...list(saved), ...list(local)])]);
  }
  if (key.startsWith('fivey-practice-exams-v1:')) {
    const list = value => (Array.isArray(parse(value, null)) ? parse(value, null) : []);
    const byRun = new Map();
    for (const exam of [...list(saved), ...list(local)]) if (exam?.run) byRun.set(exam.run, exam);
    return JSON.stringify([...byRun.values()].sort((a, b) => (Number(a.at) || 0) - (Number(b.at) || 0)).slice(-200));
  }
  if (key.startsWith('fivey-welcome-seen-v1:')) return saved === '1' || local === '1' ? '1' : local;
  if (key.startsWith('fivey-study-plan-v1:')) {
    const empty = value => !Array.isArray(parse(value, null)) || parse(value, null).length === 0;
    return empty(local) && !empty(saved) ? saved : local;
  }
  return local;
}

function withTimeout(promise, ms) {
  return Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error('Timed out')), ms))]);
}

export async function syncAccountData(client, userId) {
  if (!client || !userId || typeof localStorage === 'undefined') return;
  const rows = client.from(table);
  const syncedKey = 'fivey-account-synced-v1:' + userId;
  const dirtyKey = 'fivey-account-dirty-v1:' + userId;

  const readDirty = () => new Set(parse(getItem.call(localStorage, dirtyKey), []));
  const writeDirty = dirty => {
    try {
      if (dirty.size) setItem.call(localStorage, dirtyKey, JSON.stringify([...dirty]));
      else removeItem.call(localStorage, dirtyKey);
    } catch {
      // Unsaved changes are retried while this page stays open.
    }
  };
  const markDirty = (key, isDirty) => {
    const dirty = readDirty();
    if (isDirty) dirty.add(key);
    else dirty.delete(key);
    writeDirty(dirty);
  };

  // Saves one key at a time per key, always sending its latest value.
  const inFlight = new Map();
  function save(key) {
    markDirty(key, true);
    if (inFlight.has(key)) {
      inFlight.set(key, true);
      return;
    }
    inFlight.set(key, false);
    (async () => {
      let ok = true;
      do {
        inFlight.set(key, false);
        const value = getItem.call(localStorage, key);
        try {
          const { error } = value === null
            ? await rows.delete().eq('user_id', userId).eq('key', key)
            : await rows.upsert({ user_id: userId, key, value, updated_at: new Date().toISOString() });
          if (error) throw error;
          ok = true;
        } catch {
          ok = false;
        }
      } while (inFlight.get(key));
      inFlight.delete(key);
      if (ok) markDirty(key, false);
    })();
  }

  // Bring this browser up to date with the account before the page reads its data.
  try {
    const { data, error } = await withTimeout(rows.select('key, value').eq('user_id', userId), pullTimeoutMs);
    if (error) throw error;
    const saved = new Map((data || []).map(row => [row.key, row.value]));
    const migrating = getItem.call(localStorage, syncedKey) !== '1';
    const dirty = readDirty();
    const keys = new Set(saved.keys());
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (isAccountKey(key, userId)) keys.add(key);
    }
    const toSave = [];
    for (const key of keys) {
      if (!isAccountKey(key, userId)) continue;
      const local = getItem.call(localStorage, key);
      const server = saved.has(key) ? saved.get(key) : null;
      let value = server;
      if (server === null) value = local;
      else if (local !== null) {
        const lostSeat = key.startsWith('fivey-orbies-v1:') && readCozySeats(readWallet(local)).owned.some(id =>
          !readCozySeats(readWallet(server)).owned.includes(id));
        if (migrating || dirty.has(key) || lostSeat) value = mergeValue(key, server, local);
      }
      if (value !== local && value !== null) setItem.call(localStorage, key, value);
      if (value !== server) toSave.push(key);
      else dirty.delete(key);
    }
    writeDirty(dirty);
    for (const key of toSave) save(key);
    setItem.call(localStorage, syncedKey, '1');
  } catch {
    // The account could not be reached; use this browser's copy and keep saving changes.
  }

  // From now on, save every change this user's pages make.
  Storage.prototype.setItem = function (key, value) {
    setItem.call(this, key, value);
    if (this === localStorage && isAccountKey(String(key), userId)) save(String(key));
  };
  Storage.prototype.removeItem = function (key) {
    removeItem.call(this, key);
    if (this === localStorage && isAccountKey(String(key), userId)) save(String(key));
  };
  // Retry anything a previous page could not finish saving.
  for (const key of readDirty()) {
    if (!inFlight.has(key)) save(key);
  }
}
