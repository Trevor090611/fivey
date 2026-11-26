// Course page Analytics: the button asks for 20 Orbies the first time, and a locked
// Analytics page shows an unlock box instead of the results.
// Uses the same auth-gate.js URL as course.html so sign-in runs only once.
import { analyticsAccount } from './auth-gate.js?v=orbies2';
import { askToUnlock, isAnalyticsUnlocked, lockedNotice } from './analytics-unlock.js?v=1';

export async function openAnalytics(course, name, href) {
  if (isAnalyticsUnlocked(analyticsAccount, course) || await askToUnlock(analyticsAccount, course, name)) location.assign(href);
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
