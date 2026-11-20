(() => {
  const storageKey = 'fivey-theme';
  const root = document.documentElement;
  let darkMode = false;
  let toggle;

  function applyTheme(enabled) {
    darkMode = enabled;
    root.toggleAttribute('data-fivey-dark', enabled);
    if (toggle) {
      toggle.textContent = enabled ? 'Turn off Dark Theme ☀️' : 'Turn on Dark Theme 🌙';
    }
  }

  function restoreTheme() {
    try {
      applyTheme(localStorage.getItem(storageKey) === 'dark');
    } catch {
      // The current page still supports the toggle when storage is unavailable.
    }
  }

  restoreTheme();
  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.getElementById('fivey-theme-toggle');
    if (!toggle) return;
    applyTheme(darkMode);
    toggle.addEventListener('click', () => {
      applyTheme(!darkMode);
      try {
        localStorage.setItem(storageKey, darkMode ? 'dark' : 'light');
      } catch {
        // Keep the preference active for the current page.
      }
    });
  });

  window.addEventListener('storage', ({ key }) => {
    if (key === storageKey || key === null) restoreTheme();
  });
  window.addEventListener('pageshow', ({ persisted }) => {
    if (persisted) restoreTheme();
  });
})();
