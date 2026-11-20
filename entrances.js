(() => {
  if (!('IntersectionObserver' in window)) return;

  const root = document.documentElement;
  const courseGroups = '[data-fivey-course] > .hero > .wrap, [data-fivey-course] > :is(#resources, #course-actions) > .panel';
  const targets = {
    course: courseGroups,
    text: 'body > header :is(.brand, nav > a, .fivey-orbies, .fivey-user-label), body > footer > .wrap, body > :is(#macro-credits, #chemistry-credits), main :is(h1, h2, h3, h4, h5, h6, p, dt, dd, figcaption, label, legend, summary, .hero .tag, li:not(:has(p, button, a.practice-button))), .fivey-welcome-dialog :is(h2, p)',
    art: 'main :is(img, svg[role="img"], .mark, .hero-equations), .download-backdrop :is(img, .hero-equations)',
    button: ':is(main, .fivey-welcome-dialog) :is(button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"], a.practice-button, a.intro-link, a.card, .home-main .hero a), body > header .fivey-subjects-trigger'
  };
  const types = Object.entries(targets);
  const candidateSelector = Object.values(targets).join(', ');
  const inView = new Set();
  let ready = false;
  let pauseTimer;
  let courseAnimation;

  function reveal(element, phase) {
    element.dataset.fiveyRevealed = phase;
    observer.unobserve(element);
    inView.delete(element);
  }

  function playNextCourseGroup() {
    if (!ready || courseAnimation) return;
    for (const group of document.querySelectorAll(courseGroups)) {
      if (!inView.has(group)) continue;
      reveal(group, 'course');
      const animation = group.getAnimations?.().find(effect => effect.animationName === 'fivey-course-enter');
      if (!animation) continue;
      courseAnimation = animation;
      const advance = () => {
        if (courseAnimation !== animation) return;
        courseAnimation = undefined;
        playNextCourseGroup();
      };
      // The course entrance easing covers one third of the rise at 36.25% of its duration.
      const nextStartTime = animation.effect.getComputedTiming().activeDuration * .3625;
      const waitForNextStart = () => {
        if (courseAnimation !== animation) return;
        if (animation.currentTime >= nextStartTime) advance();
        else window.requestAnimationFrame(waitForNextStart);
      };
      window.requestAnimationFrame(waitForNextStart);
      animation.finished.then(advance, advance);
      break;
    }
  }

  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting, intersectionRatio } of entries) {
      if (target.hasAttribute('data-fivey-revealed')) continue;
      if (!target.isConnected || !isIntersecting || intersectionRatio === 0) {
        inView.delete(target);
      } else if (ready && target.dataset.fiveyEntrance !== 'course') {
        reveal(target, 'scroll');
      } else {
        inView.add(target);
      }
    }
    playNextCourseGroup();
  }, { threshold: 0.01 });

  function watch(element) {
    if (element.hasAttribute('data-fivey-entrance') || element.closest('.progress-quiz')) return;
    const group = element.closest(courseGroups);
    if (group && group !== element) return;
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
      root.removeAttribute('data-fivey-entrance-pause');
      for (const target of inView) {
        if (!target.isConnected) inView.delete(target);
        else if (target.dataset.fiveyEntrance !== 'course') reveal(target, 'load');
      }
      playNextCourseGroup();
    }, 200);
  }

  // Watch both the original markup and sections inserted by the course scripts.
  const additions = new MutationObserver(records => {
    for (const record of records) {
      for (const element of record.addedNodes) watchTree(element);
    }
  });
  root.setAttribute('data-fivey-entrance-pause', '');
  additions.observe(root, { childList: true, subtree: true });
  watchTree(root);
  new MutationObserver(startPause).observe(root, { attributes: true, attributeFilter: ['class'] });
  document.addEventListener('DOMContentLoaded', startPause, { once: true });
  startPause();

  document.addEventListener('focusin', ({ target }) => {
    if (!target.matches(':focus-visible')) return;
    const entrance = target.closest('[data-fivey-entrance]');
    if (entrance && !root.hasAttribute('data-fivey-entrance-pause')) reveal(entrance, 'focus');
  });

  window.addEventListener('pageshow', ({ persisted }) => {
    if (!persisted) return;
    window.clearTimeout(pauseTimer);
    pauseTimer = undefined;
    ready = false;
    courseAnimation = undefined;
    root.setAttribute('data-fivey-entrance-pause', '');
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
