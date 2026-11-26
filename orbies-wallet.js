const payouts = [0, 2, 4, 8, 10, 15];
export const clicksToOpen = 4;

export function orbiesKey(account) {
  return 'fivey-orbies-v1:' + account;
}

function readWallet(account) {
  const saved = localStorage.getItem(orbiesKey(account));
  const wallet = saved?.startsWith('{') ? JSON.parse(saved) : { balance: Number(saved), chests: {} };
  if (!Number.isSafeInteger(wallet.balance) || wallet.balance < 0) wallet.balance = 0;
  return wallet;
}

export function getOrbiesBalance(account) {
  return readWallet(account).balance;
}

function updateWallet(account, change) {
  const key = orbiesKey(account);
  const update = () => {
    const wallet = readWallet(account);
    const result = change(wallet);
    localStorage.setItem(key, JSON.stringify(wallet));
    window.dispatchEvent(new Event('fivey:orbies-updated'));
    return result;
  };
  return navigator.locks ? navigator.locks.request(key, update) : update();
}

export function spendOrbies(account, amount) {
  if (!account || !Number.isSafeInteger(amount) || amount <= 0) throw new Error('Invalid Orbies payment');
  return updateWallet(account, wallet => {
    if (wallet.balance < amount) return false;
    wallet.balance -= amount;
    return true;
  });
}

export function qualifiesForChest(mode, correct, total) {
  return (mode === 'unit' || mode === 'allUnits') && total > 0 && correct * 5 >= total * 4;
}

export async function createChest(account, course, unit, total, practiceSetup) {
  const id = crypto.randomUUID();
  await updateWallet(account, wallet => {
    wallet.chests[id] = { course, unit, total, practiceSetup, clicks: 0, stars: 1 };
  });
  return id;
}

export function getChest(account, id) {
  if (!/^[0-9a-f-]{36}$/.test(id ?? '')) return null;
  return readWallet(account).chests[id] ?? null;
}

export function clickChest(account, id) {
  return updateWallet(account, wallet => {
    const chest = wallet.chests[id];
    if (!chest) throw new Error('Chest unavailable');
    if (chest.clicks >= clicksToOpen) return chest;
    chest.clicks++;
    if (Math.random() < .3) chest.stars = Math.min(chest.stars + 1, payouts.length - 1);
    if (chest.clicks === clicksToOpen) {
      chest.reward = payouts[chest.stars];
      wallet.balance += chest.reward;
    }
    return chest;
  });
}
