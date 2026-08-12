(() => {
  'use strict';

  const HOZAI_PATH = 'M412.037 221.764a90.834 90.834 0 004.648-28.67 90.79 90.79 0 00-12.443-45.87c-16.37-28.496-46.738-46.089-79.605-46.089-6.466 0-12.943.683-19.264 2.04a90.765 90.765 0 00-67.881-30.515h-.576c-.059.002-.149.002-.216.002-39.807 0-75.108 25.686-87.346 63.554-25.626 5.239-47.748 21.31-60.682 44.03a91.873 91.873 0 00-12.407 46.077 91.833 91.833 0 0023.694 61.553 90.802 90.802 0 00-4.649 28.67 90.804 90.804 0 0012.442 45.87c16.369 28.504 46.74 46.087 79.61 46.087a91.81 91.81 0 0019.253-2.04 90.783 90.783 0 0067.887 30.516h.576l.234-.001c39.829 0 75.119-25.686 87.357-63.588 25.626-5.242 47.748-21.312 60.682-44.033a91.718 91.718 0 0012.383-46.035 91.83 91.83 0 00-23.693-61.553l-.004-.005zM275.102 413.161h-.094a68.146 68.146 0 01-43.611-15.8 56.936 56.936 0 002.155-1.221l72.54-41.901a11.799 11.799 0 005.962-10.251V241.651l30.661 17.704c.326.163.55.479.596.84v84.693c-.042 37.653-30.554 68.198-68.21 68.273h.001zm-146.689-62.649a68.128 68.128 0 01-9.152-34.085c0-3.904.341-7.817 1.005-11.663.539.323 1.48.897 2.155 1.285l72.54 41.901a11.832 11.832 0 0011.918-.002l88.563-51.137v35.408a1.1 1.1 0 01-.438.94l-73.33 42.339a68.43 68.43 0 01-34.11 9.12 68.359 68.359 0 01-59.15-34.11l-.001.004zm-19.083-158.36a68.044 68.044 0 0135.538-29.934c0 .625-.036 1.731-.036 2.5v83.801l-.001.07a11.79 11.79 0 005.954 10.242l88.564 51.13-30.661 17.704a1.096 1.096 0 01-1.034.093l-73.337-42.375a68.36 68.36 0 01-34.095-59.143 68.412 68.412 0 019.112-34.085l-.004-.003zm251.907 58.621l-88.563-51.137 30.661-17.697a1.097 1.097 0 011.034-.094l73.337 42.339c21.109 12.195 34.132 34.746 34.132 59.132 0 28.604-17.849 54.199-44.686 64.078v-86.308c.004-.032.004-.065.004-.096 0-4.219-2.261-8.119-5.919-10.217zm30.518-45.93c-.539-.331-1.48-.898-2.155-1.286l-72.54-41.901a11.842 11.842 0 00-5.958-1.611c-2.092 0-4.15.558-5.957 1.611l-88.564 51.137v-35.408l-.001-.061a1.1 1.1 0 01.44-.88l73.33-42.303a68.301 68.301 0 0134.108-9.129c37.704 0 68.281 30.577 68.281 68.281a68.69 68.69 0 01-.984 11.545v.005zm-191.843 63.109l-30.668-17.704a1.09 1.09 0 01-.596-.84v-84.692c.016-37.685 30.593-68.236 68.281-68.236a68.332 68.332 0 0143.689 15.804 63.09 63.09 0 00-2.155 1.222l-72.54 41.9a11.794 11.794 0 00-5.961 10.248v.068l-.05 102.23zm16.655-35.91l39.445-22.782 39.444 22.767v45.55l-39.444 22.767-39.445-22.767v-45.535z';

  function makeBrandSvg(oldSvg) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 512 509.639');
    svg.setAttribute('shape-rendering', 'geometricPrecision');
    svg.setAttribute('fill-rule', 'evenodd');
    svg.setAttribute('clip-rule', 'evenodd');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('data-hozai-brand-icon', '1');
    svg.className.baseVal = oldSvg?.getAttribute('class') || 'w-5 h-5';
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('fill-rule', 'nonzero');
    path.setAttribute('d', HOZAI_PATH);
    svg.append(path);
    return svg;
  }

  function replaceSvgIn(container) {
    if (!(container instanceof Element)) return;
    const oldSvg = container.querySelector(':scope > svg') || container.querySelector('svg');
    if (!(oldSvg instanceof SVGElement) || oldSvg.hasAttribute('data-hozai-brand-icon')) return;
    oldSvg.replaceWith(makeBrandSvg(oldSvg));
  }

  const shortText = new Map([
    ['About Hozaifa', 'About'],
    ['Skills & Stack', 'Skills'],
    ['Experience', 'Experience'],
    ['Languages', 'Languages'],
    ['Job Fit Analysis', 'Job Fit'],

    ['عن حذيفة', 'عن حذيفة'],
    ['المهارات والتقنيات', 'المهارات'],
    ['الخبرات', 'الخبرات'],
    ['اللغات', 'اللغات'],
    ['تحليل ملاءمة الوظيفة', 'ملاءمة الوظيفة'],

    ['Sobre Hozaifa', 'Perfil'],
    ['Habilidades y Stack', 'Habilidades'],
    ['Experiencia', 'Experiencia'],
    ['Idiomas', 'Idiomas'],
    ['Análisis de Puesto', 'Ajuste laboral'],

    ["Hi there! I'm HozAI 👋", "Hi there! I'm HozAI"],
    ['أهلًا! أنا HozAI 👋', 'أهلًا! أنا HozAI'],
    ['¡Hola! Soy HozAI 👋', '¡Hola! Soy HozAI'],
  ]);

  const degreeTexts = new Set([
    'BA in Languages and Translation - Spanish Language and Literature',
    'ليسانس اللغات والترجمة - قسم اللغة الإسبانية وآدابها',
    'Licenciatura en Lenguas y Traducción - Lengua y Literatura Españolas',
  ]);

  let chatObserver = null;
  let observedChat = null;
  let lastAssistant = null;

  function replaceExactText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const value = (node.nodeValue || '').trim();
      const replacement = shortText.get(value);
      if (replacement && replacement !== value) {
        const leading = (node.nodeValue || '').match(/^\s*/)?.[0] || '';
        const trailing = (node.nodeValue || '').match(/\s*$/)?.[0] || '';
        node.nodeValue = leading + replacement + trailing;
      }
    }
  }

  function setupChatObserver(chat) {
    if (!chat || chat === observedChat) return;
    chatObserver?.disconnect();
    observedChat = chat;
    lastAssistant = null;

    const scrollToAnswerStart = () => {
      const proseNodes = chat.querySelectorAll('.prose');
      const prose = proseNodes[proseNodes.length - 1];
      if (!prose) return false;
      const wrapper = prose.closest('.flex.flex-col') || prose.parentElement?.parentElement || prose;
      if (!wrapper || wrapper === lastAssistant) return false;
      lastAssistant = wrapper;
      requestAnimationFrame(() => {
        const top = Math.max(0, wrapper.offsetTop - 10);
        chat.scrollTo({ top, behavior: 'smooth' });
      });
      return true;
    };

    chatObserver = new MutationObserver((mutations) => {
      const hasAddedNodes = mutations.some(m => m.addedNodes && m.addedNodes.length);
      if (!hasAddedNodes) return;

      // A completed assistant reply wins: anchor its first line at the top.
      if (scrollToAnswerStart()) return;

      // While waiting, make the new user turn / thinking state visible.
      const hasFreshUserTurn = Array.from(chat.children).some(el =>
        el instanceof HTMLElement && el.classList.contains('items-end') && !el.dataset.v10Seen
      );
      if (hasFreshUserTurn) {
        for (const el of Array.from(chat.children)) {
          if (el instanceof HTMLElement && el.classList.contains('items-end')) el.dataset.v10Seen = '1';
        }
        requestAnimationFrame(() => chat.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' }));
      }
    });

    chatObserver.observe(chat, { childList: true, subtree: true });
  }

  function enhanceHozAI() {
    const safe = document.querySelector('.hozai-safe');
    if (!safe) return;

    replaceExactText(safe);

    const directButtons = Array.from(safe.children).filter(el => el.tagName === 'BUTTON');
    const launcher = directButtons[directButtons.length - 1];
    if (launcher instanceof HTMLElement) {
      launcher.classList.add('hozai-launcher', 'hozai-v11-launcher');
      launcher.setAttribute('aria-expanded', String(Boolean(Array.from(safe.children).find(el => el.tagName === 'DIV'))));
      replaceSvgIn(launcher);
    }

    const panel = Array.from(safe.children).find(el => el.tagName === 'DIV');
    if (panel instanceof HTMLElement) {
      panel.classList.add('hozai-panel', 'hozai-v11-panel');
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-label', 'HozAI');
      if (!panel.dataset.v11Opened) {
        panel.dataset.v11Opened = '1';
        requestAnimationFrame(() => {
          const active = document.activeElement;
          if (active instanceof HTMLTextAreaElement && panel.contains(active)) active.blur();
        });
      }

      const headerTitle = Array.from(panel.querySelectorAll('h3')).find(h => (h.textContent || '').trim() === 'HozAI');
      const headerCopy = headerTitle?.parentElement;
      const headerIcon = headerCopy?.previousElementSibling;
      replaceSvgIn(headerIcon);

      const welcomeTitle = Array.from(panel.querySelectorAll('h4')).find(h => (h.textContent || '').includes('HozAI'));
      const welcomeIcon = welcomeTitle?.previousElementSibling;
      replaceSvgIn(welcomeIcon);

      for (const botSvg of panel.querySelectorAll('svg.lucide-bot')) {
        if (botSvg.parentElement) replaceSvgIn(botSvg.parentElement);
      }
    }

    const chat = safe.querySelector('[aria-live="polite"]');
    if (!(chat instanceof HTMLElement)) return;
    setupChatObserver(chat);

    for (const prose of chat.querySelectorAll('.prose')) {
      prose.classList.add('hozai-v11-answer');
      prose.setAttribute('dir', 'auto');
    }

    // Empty-state quick actions: identify the only grid with four action buttons.
    const grids = Array.from(chat.querySelectorAll('.grid'));
    const quickGrid = grids.find(grid => grid.querySelectorAll(':scope > button').length >= 4);
    if (quickGrid instanceof HTMLElement) {
      quickGrid.classList.add('hozai-v10-quick-grid');
      for (const button of quickGrid.querySelectorAll(':scope > button')) {
        button.classList.add('hozai-v10-quick-card');
        replaceExactText(button);
      }

      const deck = quickGrid.parentElement;
      if (deck instanceof HTMLElement) {
        deck.classList.add('hozai-v10-actions-deck');
        const jobButton = Array.from(deck.children).find(el => el.tagName === 'BUTTON');
        if (jobButton instanceof HTMLElement) {
          jobButton.classList.add('hozai-v10-job-card');
          replaceExactText(jobButton);
        }
        const emptyState = deck.parentElement;
        if (emptyState instanceof HTMLElement) emptyState.classList.add('hozai-v10-empty-state');
      }
    }
  }

  function enhanceEducation() {
    const about = document.querySelector('#about');
    if (!about) return;

    let card = about.querySelector('.education-v10-card');
    if (!(card instanceof HTMLElement)) {
      const degreeHeading = Array.from(about.querySelectorAll('h3')).find(h =>
        degreeTexts.has((h.textContent || '').trim())
      );
      if (!(degreeHeading instanceof HTMLElement)) return;

      card = degreeHeading.closest('.glass');
      if (!(card instanceof HTMLElement)) return;

      const wrapper = card.parentElement;
      const container = card.closest('.container');
      if (!(wrapper instanceof HTMLElement) || !(container instanceof HTMLElement)) return;

      const mainGrid = Array.from(container.children).find(el => {
        if (!(el instanceof HTMLElement)) return false;
        return el.classList.contains('grid') && el.children.length === 2;
      });
      if (!(mainGrid instanceof HTMLElement)) return;

      const rightColumn = mainGrid.children[1];
      if (!(rightColumn instanceof HTMLElement)) return;

      // Put Education where it carries the most information density: directly above Languages.
      rightColumn.insertBefore(wrapper, rightColumn.firstChild);
      rightColumn.classList.add('education-v10-column');
      wrapper.classList.add('education-v10-wrap');
      card.classList.add('education-v10-card');

      const overlay = card.children[0];
      const layout = card.children[1];
      if (overlay instanceof HTMLElement) overlay.classList.add('education-v10-overlay');
      if (layout instanceof HTMLElement) {
        layout.classList.add('education-v10-layout');
        const copy = layout.children[0];
        const iconWrap = layout.children[1];
        if (copy instanceof HTMLElement) {
          copy.classList.add('education-v10-copy');
          const meta = copy.children[copy.children.length - 1];
          if (meta instanceof HTMLElement) meta.classList.add('education-v10-meta');
        }
        if (iconWrap instanceof HTMLElement) iconWrap.classList.add('education-v10-icon-wrap');
      }

      const grid = document.createElement('div');
      grid.className = 'education-v10-grid';
      grid.setAttribute('aria-hidden', 'true');
      card.prepend(grid);

      const beam = document.createElement('div');
      beam.className = 'education-v10-beam';
      beam.setAttribute('aria-hidden', 'true');
      card.prepend(beam);

      const seal = document.createElement('div');
      seal.className = 'education-v10-seal';
      seal.textContent = '02';
      seal.setAttribute('aria-hidden', 'true');
      card.append(seal);
    }
  }

  function enhanceWhatsAppCard() {
    const link = document.querySelector('#contact a[href*="wa.me/"]');
    if (!(link instanceof HTMLAnchorElement)) return;
    const card = link.closest('.contact-card') || link.parentElement?.parentElement?.parentElement;
    if (!(card instanceof HTMLElement) || card.dataset.v11Whatsapp === '1') return;

    card.dataset.v11Whatsapp = '1';
    card.classList.add('whatsapp-contact-card', 'hozai-v11-whatsapp-card');
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Open WhatsApp chat with Hozaifa');

    const open = () => window.open(link.href, '_blank', 'noopener,noreferrer');
    card.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('a')) return;
      open();
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  }

  function enhance() {
    enhanceHozAI();
    enhanceEducation();
    enhanceWhatsAppCard();
  }

  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      enhance();
    });
  };

  const observer = new MutationObserver(schedule);
  observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule, { once: true });
  } else {
    schedule();
  }
})();
