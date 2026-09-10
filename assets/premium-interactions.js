(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointerFine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const CARD_SELECTOR = '#about .glass, #experience .glass, #skills .glass, #contact .glass, .original-interaction-card';
  const SECTION_SELECTOR = '#home, #about, #experience, #skills, #contact';
  const CONTROL_SELECTOR = '#home a, header button, .mobile-nav-safe button, #experience a, #contact a, #contact button, .hozai-launcher';

  const animateCount = (element, rawValue, delay = 0) => {
    if (!(element instanceof HTMLElement) || element.dataset.counted === 'true') return;

    const match = rawValue.trim().match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) return;

    const target = Number(match[1]);
    const suffix = match[2] || '';
    if (!Number.isFinite(target)) return;

    element.dataset.metricValue = 'true';
    element.dataset.counted = 'true';

    if (reducedMotion) {
      element.textContent = `${target}${suffix}`;
      return;
    }

    const duration = 1000 + delay * 90;
    let startedAt = 0;

    const step = (now) => {
      if (!startedAt) startedAt = now;
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 5);
      element.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    setTimeout(() => requestAnimationFrame(step), delay * 90);
  };

  const findMetricValueElement = (card) => {
    const candidates = Array.from(card.querySelectorAll('div, span'));
    return candidates.find((node) => {
      if (!(node instanceof HTMLElement)) return false;
      if (node.children.length > 0) return false;
      return /^\s*[0-9]+(?:\.[0-9]+)?\+?\s*$/.test(node.textContent || '');
    }) || null;
  };

  const setupMetricCounters = () => {
    const cards = Array.from(document.querySelectorAll('#about .metric-card'));
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        const valueElement = findMetricValueElement(card);
        if (valueElement) {
          const rawValue = valueElement.textContent || '';
          const index = cards.indexOf(card);
          animateCount(valueElement, rawValue, Math.max(index, 0));
        }
        card.classList.add('metric-live');
        io.unobserve(card);
      });
    }, { threshold: 0.45, rootMargin: '0px 0px -5% 0px' });

    cards.forEach((card) => {
      if (!card.dataset.metricObserver) {
        card.dataset.metricObserver = 'true';
        observer.observe(card);
      }
    });
  };

  const setupSectionLifecycle = () => {
    const sections = Array.from(document.querySelectorAll(SECTION_SELECTOR));
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('section-live');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

    sections.forEach((section) => {
      if (!section.dataset.sectionObserver) {
        section.dataset.sectionObserver = 'true';
        observer.observe(section);
      }
    });
  };

  const setupPointerGlow = () => {
    if (!pointerFine.matches) return;

    let activeCard = null;
    let frame = 0;
    let lastEvent = null;

    const paint = () => {
      frame = 0;
      if (!activeCard || !lastEvent) return;
      const rect = activeCard.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, lastEvent.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, lastEvent.clientY - rect.top));
      activeCard.style.setProperty('--pointer-x', `${x}px`);
      activeCard.style.setProperty('--pointer-y', `${y}px`);
    };

    document.addEventListener('pointerover', (event) => {
      const card = event.target instanceof Element ? event.target.closest(CARD_SELECTOR) : null;
      if (card) activeCard = card;
    }, { passive: true });

    document.addEventListener('pointermove', (event) => {
      const card = event.target instanceof Element ? event.target.closest(CARD_SELECTOR) : null;
      if (!card) return;
      activeCard = card;
      lastEvent = event;
      if (!frame) frame = requestAnimationFrame(paint);
    }, { passive: true });

    document.addEventListener('pointerout', (event) => {
      if (!activeCard) return;
      const related = event.relatedTarget;
      if (!(related instanceof Node) || !activeCard.contains(related)) {
        activeCard.style.removeProperty('--pointer-x');
        activeCard.style.removeProperty('--pointer-y');
        activeCard = null;
        lastEvent = null;
      }
    }, { passive: true });
  };

  const setupTouchFeedback = () => {
    if (pointerFine.matches || reducedMotion) return;

    document.addEventListener('pointerdown', (event) => {
      const card = event.target instanceof Element ? event.target.closest(CARD_SELECTOR) : null;
      if (!(card instanceof HTMLElement)) return;
      card.classList.remove('touch-active');
      // Force a frame boundary so repeated taps retrigger the feedback.
      requestAnimationFrame(() => {
        card.classList.add('touch-active');
        window.setTimeout(() => card.classList.remove('touch-active'), 420);
      });
    }, { passive: true });
  };



  const setupControlTouchFeedback = () => {
    if (pointerFine.matches || reducedMotion) return;

    document.addEventListener('pointerdown', (event) => {
      const control = event.target instanceof Element ? event.target.closest(CONTROL_SELECTOR) : null;
      if (!(control instanceof HTMLElement)) return;
      control.classList.remove('control-touch-active');
      requestAnimationFrame(() => {
        control.classList.add('control-touch-active');
        window.setTimeout(() => control.classList.remove('control-touch-active'), 280);
      });
    }, { passive: true });
  };

  const init = () => {
    setupSectionLifecycle();
    setupMetricCounters();
    setupPointerGlow();
    setupTouchFeedback();
    setupControlTouchFeedback();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  // React may mount a fraction later than the deferred enhancement script on a
  // cold load. A cheap second pass makes the enhancement resilient without
  // keeping a long-lived MutationObserver.
  window.setTimeout(() => {
    setupSectionLifecycle();
    setupMetricCounters();
  }, 450);
})();
