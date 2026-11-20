(() => {
  if (!('IntersectionObserver' in window)) return;

  const root = document.documentElement;
  const targets = {
    text: 'body > header :is(.brand, nav > a, .fivey-orbies, .fivey-user-label), body > footer > .wrap, body > :is(#macro-credits, #chemistry-credits), main :is(h1, h2, h3, h4, h5, h6, p, dt, dd, figcaption, label, legend, summary, .hero .tag, li:not(:has(p, button, a.practice-button))), .fivey-welcome-dialog :is(h2, p)',
    art: 'main :is(img, svg[role="img"], .mark, .hero-equations), .download-backdrop :is(img, .hero-equations)',
    button: ':is(main, .fivey-welcome-dialog) :is(button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"], a.practice-button, a.intro-link, a.card, .home-main .hero a), body > header .fivey-subjects-trigger'
  };
  const types = Object.entries(targets);
  const candidateSelector = Object.values(targets).join(', ');
  const inView = new Set();
  let ready = false;
  let pauseTimer;

  function reveal(element, phase) {
    element.dataset.fiveyRevealed = phase;
    observer.unobserve(element);
    inView.delete(element);
  }

  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting, intersectionRatio } of entries) {
      if (target.hasAttribute('data-fivey-revealed')) continue;
      if (!target.isConnected || !isIntersecting || intersectionRatio === 0) {
        inView.delete(target);
      } else if (ready) {
        reveal(target, 'scroll');
      } else {
        inView.add(target);
      }
    }
  }, { threshold: 0.01 });

  function watch(element) {
    if (element.hasAttribute('data-fivey-entrance') || element.closest('.progress-quiz')) return;
    const type = types.find(([, selector]) => element.matches(selector));
    if (!type) return;
    element.dataset.fiveyEntrance = type[0];
    observer.observe(element);
  }

  function watchTree(element) {
    if (!(element instanceof Element)) return;
    if (element.matches(candidateSelector)) watch(element);
    for (const target of element.querySelectorAll(candidateSelector)) watch(target);
  }

  function startPause() {
    if (ready || pauseTimer !== undefined || document.readyState === 'loading' || root.classList.contains('fivey-auth-pending')) return;
    pauseTimer = window.setTimeout(() => {
      pauseTimer = undefined;
      ready = true;
      for (const target of inView) {
        if (target.isConnected) reveal(target, 'load');
      }
      inView.clear();
    }, 1000);
  }

  // Watch both the original markup and sections inserted by the course scripts.
  const additions = new MutationObserver(records => {
    for (const record of records) {
      for (const element of record.addedNodes) watchTree(element);
    }
  });
  additions.observe(root, { childList: true, subtree: true });
  watchTree(root);
  new MutationObserver(startPause).observe(root, { attributes: true, attributeFilter: ['class'] });
  document.addEventListener('DOMContentLoaded', startPause, { once: true });
  startPause();

  document.addEventListener('focusin', ({ target }) => {
    if (!target.matches(':focus-visible')) return;
    const entrance = target.closest('[data-fivey-entrance]');
    if (entrance) reveal(entrance, 'focus');
  });

  window.addEventListener('pageshow', ({ persisted }) => {
    if (!persisted) return;
    window.clearTimeout(pauseTimer);
    pauseTimer = undefined;
    ready = false;
    inView.clear();
    observer.disconnect();
    observer.takeRecords();
    for (const target of document.querySelectorAll('[data-fivey-entrance]')) {
      target.removeAttribute('data-fivey-revealed');
      observer.observe(target);
    }
    startPause();
  });
})();
