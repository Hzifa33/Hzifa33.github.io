(() => {
  'use strict';

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

    const chat = safe.querySelector('[aria-live="polite"]');
    if (!(chat instanceof HTMLElement)) return;
    setupChatObserver(chat);

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

  function enhance() {
    enhanceHozAI();
    enhanceEducation();
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
