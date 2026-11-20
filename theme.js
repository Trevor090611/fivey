(() => {
  const storageKey = 'fivey-theme';
  const root = document.documentElement;
  let darkMode = false;
  let toggle;
  let countdownActive = false;

  function applyTheme(enabled) {
    darkMode = enabled;
    root.toggleAttribute('data-fivey-dark', enabled);
    if (toggle) {
      toggle.textContent = enabled ? 'Turn off Dark Theme ☀️' : 'Turn on Dark Theme 🌙';
    }
  }

  function saveTheme(enabled) {
    try {
      localStorage.setItem(storageKey, enabled ? 'dark' : 'light');
    } catch {
      // Keep the current page preference when storage is unavailable.
    }
  }

  function restoreTheme() {
    try {
      applyTheme(localStorage.getItem(storageKey) === 'dark');
    } catch {
      // The current page still supports the toggle when storage is unavailable.
    }
  }

  function wait(milliseconds) {
    return new Promise(resolve => window.setTimeout(resolve, milliseconds));
  }

  async function enableDarkThemeWithCountdown() {
    if (countdownActive) return;
    countdownActive = true;
    toggle.disabled = true;

    const style = document.createElement('style');
    style.textContent =       '.fivey-theme-countdown{position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;width:100vw;height:100vh;height:100dvh;margin:0;background:rgba(255,255,255,.5);color:#d9f783;font:900 clamp(12rem,52vmin,70vh)/.85 system-ui,sans-serif;transition:background-color 1000ms ease,color 1000ms ease;pointer-events:all}' +
      '.fivey-theme-countdown.is-darkening{background:rgba(0,0,0,.5);color:#62e7ff}' +
      '.fivey-theme-countdown-number{display:block;text-align:center;line-height:.85}' +
      '@media(prefers-reduced-motion:reduce){.fivey-theme-countdown{transition:none}}';
    const overlay = document.createElement('div');
    overlay.className = 'fivey-theme-countdown';
    overlay.setAttribute('role', 'timer');
    overlay.setAttribute('aria-live', 'assertive');
    overlay.setAttribute('aria-label', 'Turning on dark theme');
    overlay.tabIndex = -1;
    const number = document.createElement('span');
    number.className = 'fivey-theme-countdown-number';
    number.textContent = '3';
    overlay.append(number);
    document.head.append(style);
    document.body.append(overlay);
    overlay.focus({ preventScroll: true });

    await wait(1000);
    number.textContent = '2';
    await wait(1000);
    number.textContent = '1';
    overlay.classList.add('is-darkening');
    await wait(1000);

    applyTheme(true);
    saveTheme(true);
    window.location.assign(new URL('./courses.html', window.location.href));
  }

  restoreTheme();
  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.getElementById('fivey-theme-toggle');
    if (!toggle) return;
    applyTheme(darkMode);
    toggle.addEventListener('click', () => {
      if (countdownActive) return;
      if (!darkMode) {
        void enableDarkThemeWithCountdown();
        return;
      }
      applyTheme(false);
      saveTheme(false);
    });
  });

  window.addEventListener('storage', ({ key }) => {
    if (key === storageKey || key === null) restoreTheme();
  });
  window.addEventListener('pageshow', ({ persisted }) => {
    if (persisted) restoreTheme();
  });
})();
