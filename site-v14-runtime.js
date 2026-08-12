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

/* ========================================================================== 
   v13 — deterministic RTL/LTR + production DOM hardening
   This layer only annotates the current compiled DOM; it does not replace
   React state or the HozAI API contract.
   ========================================================================== */
(() => {
  'use strict';

  const uiDirection = () => document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';
  const uiLanguage = () => {
    const lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    return lang === 'ar' || lang === 'es' ? lang : 'en';
  };

  const localized = {
    location: { en: 'Location', ar: 'الموقع', es: 'Ubicación' },
    jobMode: {
      en: 'Job Fit Analysis Mode',
      ar: 'وضع تحليل ملاءمة الوظيفة',
      es: 'Modo de ajuste laboral',
    },
    send: { en: 'Send message', ar: 'إرسال الرسالة', es: 'Enviar mensaje' },
  };

  function markSiteShell() {
    const shell = document.querySelector('#root > div');
    if (shell instanceof HTMLElement) shell.classList.add('site-shell-v13');
  }

  function localizeStaticLabels(root = document) {
    const lang = uiLanguage();

    for (const node of root.querySelectorAll('#contact div, #contact span')) {
      if (!(node instanceof HTMLElement) || node.children.length) continue;
      if ((node.textContent || '').trim() === 'Location') node.textContent = localized.location[lang];
    }

    const panel = root.querySelector('.hozai-panel');
    if (panel instanceof HTMLElement) {
      for (const node of panel.querySelectorAll('span, div')) {
        if (!(node instanceof HTMLElement) || node.children.length) continue;
        if ((node.textContent || '').trim() === 'Job Fit Analysis Mode') {
          node.textContent = localized.jobMode[lang];
        }
      }
    }
  }

  function enhanceNavbar() {
    const header = document.querySelector('header');
    if (!(header instanceof HTMLElement)) return;

    const controls = Array.from(header.querySelectorAll('button'));
    const languageToggle = controls.find(button => button.querySelector('svg') && /^(en|ar|es)$/i.test((button.textContent || '').trim()));
    if (languageToggle instanceof HTMLButtonElement) {
      languageToggle.setAttribute('dir', 'ltr');
      languageToggle.classList.add('language-control-v13');
    }

    for (const button of header.querySelectorAll('button')) {
      const text = (button.textContent || '').trim();
      if (text === 'English' || text === 'العربية' || text === 'Español') {
        button.setAttribute('dir', 'auto');
        button.classList.add('language-option-v13');
      }
    }

    const themeToggle = controls.find(button => {
      const svgs = button.querySelectorAll(':scope > div > svg');
      return svgs.length >= 2 && button.querySelector(':scope > div.absolute');
    });
    if (themeToggle instanceof HTMLButtonElement) {
      themeToggle.classList.add('theme-control', 'theme-control-v13');
      themeToggle.setAttribute('dir', 'ltr');
    }
  }

  function enhanceMobileNav() {
    const safe = document.querySelector('.mobile-nav-safe');
    if (!(safe instanceof HTMLElement)) return;
    const nav = safe.querySelector('nav');
    if (nav instanceof HTMLElement) nav.classList.add('mobile-nav-shell');
  }

  function enhanceHero() {
    const home = document.querySelector('#home');
    if (!(home instanceof HTMLElement)) return;

    const directContact = home.querySelector('a[href="#contact"]');
    if (directContact instanceof HTMLElement) directContact.classList.add('hero-action', 'hero-action-primary');

    const download = home.querySelector('a[download]');
    if (download instanceof HTMLElement) download.classList.add('hero-action', 'hero-action-secondary');

    for (const link of home.querySelectorAll('a[target="_blank"]')) {
      link.classList.add('hero-social');
      link.setAttribute('dir', 'ltr');
    }

    const portraitFrames = home.querySelectorAll('.hero-portrait-frame');
    if (portraitFrames[0] instanceof HTMLElement) portraitFrames[0].classList.add('hero-portrait-backdrop');
  }

  function enhanceAbout() {
    const about = document.querySelector('#about');
    if (!(about instanceof HTMLElement)) return;

    for (const card of about.querySelectorAll('.glass')) {
      if (!(card instanceof HTMLElement) || card.querySelector('h3')) continue;
      const leaves = Array.from(card.querySelectorAll('div, span')).filter(el => el.children.length === 0);
      const value = leaves.find(el => /^\s*\d+(?:\.\d+)?\+?\s*$/.test(el.textContent || ''));
      if (!value) continue;
      card.classList.add('metric-card', 'original-interaction-card', 'premium-card');
      value.classList.add('metric-value');
      value.setAttribute('dir', 'ltr');
    }

    const languagesTitle = Array.from(about.querySelectorAll('h3')).find(h => {
      const text = (h.textContent || '').trim();
      return text === 'Languages' || text === 'اللغات' || text === 'Idiomas';
    });
    if (languagesTitle instanceof HTMLElement) {
      const next = languagesTitle.nextElementSibling;
      if (next instanceof HTMLElement && next.offsetHeight <= 8) next.classList.add('language-heading-rule');
    }

    for (const span of about.querySelectorAll('span')) {
      if (/^\s*\d+%\s*$/.test(span.textContent || '')) span.setAttribute('dir', 'ltr');
    }
  }

  function enhanceExperience() {
    const section = document.querySelector('#experience');
    if (!(section instanceof HTMLElement)) return;

    for (const card of section.querySelectorAll('.glass')) {
      if (!(card instanceof HTMLElement)) continue;
      card.classList.add('experience-card', 'original-interaction-card', 'premium-card');
      const heading = card.querySelector('h3');
      if (heading instanceof HTMLElement) heading.setAttribute('dir', 'auto');

      for (const link of card.querySelectorAll('a[target="_blank"]')) {
        link.classList.add('experience-project-link');
        link.setAttribute('dir', 'ltr');
      }

      for (const leaf of card.querySelectorAll('div')) {
        if (!(leaf instanceof HTMLElement) || leaf.children.length) continue;
        const text = (leaf.textContent || '').trim();
        if (!text) continue;
        if (/^(?:Frontend Engineering|Backend Development|Video Editing|Social Media|Data Analysis|Arabic Editing|eDreams)/i.test(text) || /\d{4}|Years|años|سنة|سنوات/.test(text)) {
          leaf.setAttribute('dir', 'auto');
          leaf.dataset.bidi = 'auto';
        }
      }
    }
  }

  function enhanceSkills() {
    const section = document.querySelector('#skills');
    if (!(section instanceof HTMLElement)) return;
    for (const card of section.querySelectorAll('.glass')) {
      if (!(card instanceof HTMLElement)) continue;
      card.classList.add('skill-card', 'original-interaction-card', 'premium-card');
      const decorative = Array.from(card.children).find(el =>
        el instanceof HTMLElement && el.classList.contains('absolute') && el.querySelector('svg')
      );
      if (decorative instanceof HTMLElement) decorative.classList.add('skill-watermark');
    }
  }

  function enhanceContact() {
    const section = document.querySelector('#contact');
    if (!(section instanceof HTMLElement)) return;

    const container = section.querySelector(':scope > .container');
    const outerGrid = container ? Array.from(container.children).find(el => el instanceof HTMLElement && el.classList.contains('grid')) : null;
    if (outerGrid instanceof HTMLElement) outerGrid.classList.add('contact-grid');

    for (const card of section.querySelectorAll('.glass')) {
      if (!(card instanceof HTMLElement)) continue;
      const externalCount = card.querySelectorAll('a[target="_blank"]').length;
      if (externalCount >= 4) card.classList.add('contact-social-card');
      else card.classList.add('contact-card');
      card.classList.add('original-interaction-card', 'premium-card');
    }

    const email = section.querySelector('a[href^="mailto:"]');
    if (email instanceof HTMLAnchorElement) {
      email.setAttribute('dir', 'ltr');
      email.classList.add('contact-ltr-value');
    }

    const whatsapp = section.querySelector('a[href*="wa.me/"]');
    if (whatsapp instanceof HTMLAnchorElement) {
      whatsapp.setAttribute('dir', 'ltr');
      whatsapp.classList.add('contact-ltr-value');
    }

    const whatsappCard = section.querySelector('.whatsapp-contact-card');
    if (whatsappCard instanceof HTMLElement) {
      const arrow = Array.from(whatsappCard.querySelectorAll('span')).find(span => (span.textContent || '').trim() === '↗');
      if (arrow instanceof HTMLElement) {
        arrow.classList.add('whatsapp-contact-arrow');
        arrow.setAttribute('dir', 'ltr');
      }
    }

    for (const link of section.querySelectorAll('a[target="_blank"]')) {
      if (!(link instanceof HTMLAnchorElement) || link.href.includes('wa.me')) continue;
      const label = link.querySelector('span');
      if (label instanceof HTMLElement) {
        label.setAttribute('dir', 'ltr');
        label.classList.add('unicode-bidi-isolate');
      }
    }
  }

  function enhanceHozAI() {
    const safe = document.querySelector('.hozai-safe');
    if (!(safe instanceof HTMLElement)) {
      document.documentElement.classList.remove('hozai-open-v13');
      return;
    }

    safe.setAttribute('dir', 'ltr');
    safe.classList.add('hozai-v13-safe');

    const directButtons = Array.from(safe.children).filter(el => el.tagName === 'BUTTON');
    const launcher = directButtons[directButtons.length - 1];
    if (launcher instanceof HTMLButtonElement) launcher.classList.add('hozai-launcher', 'hozai-v13-launcher');

    const panel = Array.from(safe.children).find(el => el.tagName === 'DIV');
    if (!(panel instanceof HTMLElement)) {
      document.documentElement.classList.remove('hozai-open-v13');
      return;
    }

    document.documentElement.classList.add('hozai-open-v13');
    panel.classList.add('hozai-panel', 'hozai-v13-panel');
    panel.setAttribute('dir', uiDirection());

    const title = Array.from(panel.querySelectorAll('h3')).find(el => (el.textContent || '').trim() === 'HozAI');
    if (title instanceof HTMLElement) title.setAttribute('dir', 'ltr');

    const titleIcon = title?.parentElement?.previousElementSibling;
    if (titleIcon instanceof HTMLElement) {
      const status = Array.from(titleIcon.children).find(el =>
        el instanceof HTMLElement && el.classList.contains('absolute') && el !== titleIcon.querySelector('svg')
      );
      if (status instanceof HTMLElement) {
        status.classList.add('hozai-v13-status-dot');
        status.setAttribute('role', 'status');
      }
    }

    const chat = panel.querySelector('[aria-live="polite"]');
    if (chat instanceof HTMLElement) {
      chat.classList.add('hozai-chat-area');
      chat.setAttribute('aria-busy', chat.querySelector('.animate-pulse') ? 'true' : 'false');

      for (const row of Array.from(chat.children)) {
        if (!(row instanceof HTMLElement)) continue;

        if (row.classList.contains('items-end')) {
          row.classList.add('hozai-message-row', 'hozai-v13-message-row', 'hozai-message-user', 'hozai-v13-message-user');
          row.setAttribute('dir', 'ltr');
          const bubble = row.firstElementChild;
          if (bubble instanceof HTMLElement) {
            bubble.classList.add('hozai-message-bubble', 'hozai-v13-message-bubble');
            const content = bubble.firstElementChild;
            if (content instanceof HTMLElement) content.setAttribute('dir', 'auto');
          }
          continue;
        }

        if (row.classList.contains('items-start') && row.classList.contains('opacity-80')) {
          row.classList.add('hozai-thinking-row', 'hozai-v13-thinking-row');
          row.setAttribute('dir', 'ltr');
          const thinkingBubble = row.lastElementChild;
          if (thinkingBubble instanceof HTMLElement) {
            thinkingBubble.classList.add('hozai-thinking-bubble', 'hozai-v13-thinking-bubble');
            thinkingBubble.setAttribute('dir', uiDirection());
          }
          continue;
        }

        const prose = row.querySelector('.prose');
        if (row.classList.contains('items-start') && prose instanceof HTMLElement) {
          row.classList.add('hozai-message-row', 'hozai-v13-message-row', 'hozai-message-assistant', 'hozai-v13-message-assistant');
          row.setAttribute('dir', 'ltr');
          const bubble = row.firstElementChild;
          if (bubble instanceof HTMLElement) bubble.classList.add('hozai-message-bubble', 'hozai-v13-message-bubble');
          prose.classList.add('hozai-answer-markdown', 'hozai-v11-answer');
          prose.setAttribute('dir', 'auto');
          const actions = row.children[1];
          if (actions instanceof HTMLElement) {
            actions.classList.add('hozai-message-actions', 'hozai-v13-message-actions');
            actions.setAttribute('dir', 'ltr');
          }
        }
      }
    }

    const textarea = panel.querySelector('textarea');
    if (textarea instanceof HTMLTextAreaElement) {
      textarea.setAttribute('dir', 'auto');
      textarea.setAttribute('autocomplete', 'off');
      const send = textarea.parentElement?.querySelector('button');
      if (send instanceof HTMLButtonElement) {
        send.classList.add('hozai-send-button');
        send.setAttribute('aria-label', localized.send[uiLanguage()]);
      }
    }

    const powered = Array.from(panel.querySelectorAll('span')).find(span => (span.textContent || '').trim() === 'Powered by HozAI Endpoint');
    if (powered instanceof HTMLElement && powered.parentElement instanceof HTMLElement) {
      powered.setAttribute('dir', 'ltr');
      powered.parentElement.classList.add('hozai-footer-meta', 'hozai-v13-footer');
      const button = powered.parentElement.querySelector('button');
      if (button instanceof HTMLButtonElement) button.setAttribute('dir', uiDirection());
    }

    for (const button of panel.querySelectorAll('button[title]')) {
      if (!button.getAttribute('aria-label') && button.getAttribute('title')) {
        button.setAttribute('aria-label', button.getAttribute('title'));
      }
    }
  }

  function enhanceAll() {
    markSiteShell();
    enhanceNavbar();
    enhanceMobileNav();
    enhanceHero();
    enhanceAbout();
    enhanceExperience();
    enhanceSkills();
    enhanceContact();
    enhanceHozAI();
    localizeStaticLabels(document);
  }

  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      enhanceAll();
    });
  };

  const observer = new MutationObserver(schedule);
  observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule, { once: true });
  } else {
    schedule();
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) schedule();
  });
})();

/* Floating transparent header · deploy patch v14 */
(() => {
  let header = null;
  let raf = 0;

  const bindHeader = () => {
    const next = document.querySelector('header');
    if (!(next instanceof HTMLElement)) return false;
    header = next;
    header.classList.add('navbar-floating-v14');

    const brandButton = header.querySelector('.brand-button') || header.querySelector('button');
    const logoShell = brandButton?.querySelector(':scope > div');
    if (logoShell instanceof HTMLElement) logoShell.classList.add('brand-logo-shell-v14');
    return true;
  };

  const sync = () => {
    raf = 0;
    if (!header?.isConnected && !bindHeader()) return;
    header.classList.toggle('navbar-scrolled-v14', window.scrollY > 20);
  };

  const requestSync = () => {
    if (raf) return;
    raf = requestAnimationFrame(sync);
  };

  const init = () => {
    bindHeader();
    sync();
    window.addEventListener('scroll', requestSync, { passive: true });
    window.addEventListener('resize', requestSync, { passive: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
