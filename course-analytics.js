// Course page Analytics: the button asks for 20 Orbies the first time, and a locked
// Analytics page shows an unlock box instead of the results.
// Uses the same auth-gate.js URL as course.html so sign-in runs only once.
import { analyticsAccount } from './auth-gate.js?v=orbies2';
import { askToUnlock, isAnalyticsUnlocked, lockedNotice, showLockState } from './analytics-unlock.js?v=2';

export async function openAnalytics(course, name, href) {
  if (isAnalyticsUnlocked(analyticsAccount, course) || await askToUnlock(analyticsAccount, course, name)) location.assign(href);
}

// Puts a padlock on the Analytics button while this subject is locked, and keeps it current.
export function markAnalyticsButton(button, course) {
  const update = () => showLockState(button, analyticsAccount, course);
  update();
  window.addEventListener('fivey:analytics-unlocked', update);
  window.addEventListener('pageshow', update);
  window.addEventListener('storage', event => {
    if (event.key === null || event.key === 'fivey-analytics-unlocks-v1:' + analyticsAccount) update();
  });
}

export function showAnalytics(panel, course, name) {
  const results = [...panel.children].filter(child => child.id !== 'analytics-title');
  const render = () => {
    panel.querySelector('.analytics-locked')?.remove();
    for (const child of results) child.style.display = '';
    import('./progress.js?v=analytics4')
      .then(({ renderAnalytics }) => renderAnalytics(panel))
      .catch(() => { panel.querySelector('#analytics-status').textContent = 'Analytics could not load. Refresh to try again.'; });
  };
  if (isAnalyticsUnlocked(analyticsAccount, course)) return render();
  // Inline display, because course.html styles these with display:grid, which beats the hidden attribute.
  for (const child of results) child.style.display = 'none';
  panel.append(lockedNotice(analyticsAccount, course, name, render));
}
