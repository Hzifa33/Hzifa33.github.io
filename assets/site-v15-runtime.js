/**
 * NEOBRUTALISM RUNTIME JAVASCRIPT — HOZAIFA ABOZAID PORTFOLIO (2026)
 * Handles:
 * 1. Comprehensive Multilingual Engine (EN, AR, ES) with RTL flipping
 * 2. High-contrast Dark/Light Theme Switcher (System-aware + LocalStorage)
 * 3. Mobile Dock Navigation & Desktop ScrollSpy
 * 4. Animated Metric Number Counters
 * 5. Full HozAI Assistant Integration (Cloudflare Worker endpoint)
 * 6. Interactive Contact Copy Shortcuts
 */

(function() {
  'use strict';

  // =========================================================================
  // 1. TRANSLATION DATA STORE (EN, AR, ES) — ZERO EMOJIS
  // =========================================================================
  const i18nData = {
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.contact": "Contact",

      // Mobile Dock
      "dock.home": "Home",
      "dock.about": "About",
      "dock.experience": "Experience",
      "dock.skills": "Skills",
      "dock.contact": "Contact",

      // Hero
      "hero.greeting": "Hello, I'm",
      "hero.name": "Hozaifa Abozaid",
      "hero.location": "Cairo, Egypt",
      "hero.available": "Available for Work",
      "hero.role.cs": "Customer Care & Retention",
      "hero.role.dev": "Full Stack Developer",
      "hero.role.it": "IT & Automation Specialist",
      "hero.cta": "Get in Touch",
      "hero.download": "Download CV",
      "hero.experience_badge": "5+ Years Experience",

      // Ticker
      "ticker.t1": "Full Stack Web Developer",
      "ticker.t2": "Customer Service & Client Retention",
      "ticker.t3": "React, Node.js & REST APIs",
      "ticker.t4": "IT & Automation Systems",
      "ticker.t5": "Multilingual: Arabic, Spanish, English",
      "ticker.t6": "Open to Worldwide Opportunities",

      // About
      "about.tag": "Who Am I?",
      "about.title": "About Me",
      "about.subtitle": "A blend of customer loyalty engineering, full-stack development, and multilingual communication.",
      "about.bio_title": "Professional Overview",
      "about.description": "A passionate professional with diverse experience in customer service, web development, and digital marketing. I combine technical expertise with excellent communication skills to deliver outstanding results.",
      "about.yearsExp": "Years of Experience",
      "about.projectsDone": "Projects Completed",
      "about.happyClients": "Happy Clients",

      // Education
      "edu.title": "Academic Formation",
      "edu.rank": "Second in Class",
      "edu.degree": "BA in Languages and Translation – Spanish Language and Literature",
      "edu.grade": "Upper Second Class Honours (2:1)",
      "edu.faculty": "Faculty of Languages & Translation",

      // Languages
      "lang.title": "Language Mastery",
      "lang.polyglot": "Polyglot",
      "lang.arabic": "Arabic",
      "lang.arabic.level": "(Native)",
      "lang.spanish": "Spanish",
      "lang.spanish.level": "(Upper Intermediate B2)",
      "lang.english": "English",
      "lang.english.level": "(Intermediate B1)",

      // Experience
      "exp.tag": "Career Path",
      "exp.title": "Professional Experience",
      "exp.subtitle": "Proven track record across software engineering, customer loyalty, and digital management.",
      "exp.current": "Current",
      "exp.view_project": "Visit Live Project",

      // 1. eDreams
      "exp.edreams.title": "Customer Service Representative - Client Retention",
      "exp.edreams.company": "eDreams - Prime Subscription",
      "exp.edreams.date": "November 2025 – July 2026",
      "exp.edreams.desc1": "Managing customer accounts and Prime Subscriptions.",
      "exp.edreams.desc2": "Direct customer interaction to resolve issues, strengthen relationships, and boost company loyalty rates.",
      "exp.edreams.desc3": "Leveraging negotiation and persuasion skills to reduce subscription cancellation rates.",

      // 2. Front-End Web Developer
      "exp.frontend.title": "Front-End Web Developer",
      "exp.frontend.company": "Web Development",
      "exp.frontend.date": "2021 – 2025",
      "exp.frontend.desc1": "Designing and developing interactive, visually appealing user interfaces for websites.",
      "exp.frontend.desc2": "Writing clean, maintainable code to ensure smooth user experience and responsive design.",

      // 3. Back-End Developer
      "exp.backend.title": "Back-End Web Developer",
      "exp.backend.company": "Web Development",
      "exp.backend.date": "2024 – 2026",
      "exp.backend.desc1": "Building robust and scalable server-side architectures using Node.js and Express.",
      "exp.backend.desc2": "Designing and implementing RESTful APIs, database schemas, and secure authentication flows.",

      // 4. Video Editor & Graphic Designer
      "exp.video.title": "Video Editor & Graphic Designer",
      "exp.video.company": "Freelance",
      "exp.video.date": "4 Years (Freelance)",
      "exp.video.desc1": "Producing and editing professional video content and digital marketing creatives.",

      // 5. Social Media Manager
      "exp.social.title": "Social Media Manager",
      "exp.social.company": "Freelance",
      "exp.social.date": "3 Years (Freelance)",
      "exp.social.desc1": "Managing accounts, scheduling content, engaging audiences, and executing growth campaigns.",

      // 6. Data Entry Specialist
      "exp.data.title": "Data Entry Specialist",
      "exp.data.company": "Freelance",
      "exp.data.date": "2 Years (Freelance)",
      "exp.data.desc1": "Processing and entering data with high accuracy, speed, and strict quality verification.",

      // 7. Arabic Teacher
      "exp.arabic.title": "Arabic & Quran Teacher for Non-Native Speakers",
      "exp.arabic.company": "Education",
      "exp.arabic.date": "2 Years",
      "exp.arabic.desc1": "Teaching Arabic language fundamentals and Quran recitation to international students.",

      // Skills
      "skills.tag": "Core Competencies",
      "skills.title": "Skills & Expertise",
      "skills.subtitle": "A balanced synergy between technical mastery and interpersonal business skills.",
      "skills.technical": "Technical Stack",
      "skills.soft": "Soft Skills & Customer Retention",
      "skills.tech1": "Full-stack web engineering with React, Node.js, Express, JavaScript, and TypeScript.",
      "skills.tech2": "RESTful API design, database architecture (SQL, MongoDB), and secure authentication.",
      "skills.tech3": "Command-line proficiency, automation scripts, and systems troubleshooting.",
      "skills.soft1": "Negotiation & Sales: Strong persuasion skills and churn reduction expertise.",
      "skills.soft2": "Client Management: Exceptional relationship building and conflict resolution.",
      "skills.soft3": "Multitasking & Resilience: Proven ability to excel in fast-paced, high-pressure environments.",

      // Contact
      "contact.tag": "Connect",
      "contact.title": "Get In Touch",
      "contact.subtitle": "Feel free to reach out for freelance projects, full-time opportunities, or collaborations.",
      "contact.email": "Email",
      "contact.phone": "Phone / WhatsApp",
      "contact.social": "Social Media",
      "contact.copy": "Copy",
      "contact.copied": "Copied!",

      // Footer
      "footer.rights": "Hozaifa Abozaid. All rights reserved.",

      // HozAI Assistant
      "hozai.tooltip": "Ask HozAI",
      "hozai.hdrSub": "Hozaifa's AI Assistant",
      "hozai.welcomeTitle": "Hi there! I'm HozAI",
      "hozai.welcomeSub": "Ask me anything about Hozaifa — his skills, experience, projects, or paste a job description to see how well he fits.",
      "hozai.jobLabel": "Job Fit Analysis",
      "hozai.jobPlaceholder": "Paste job title or full description…",
      "hozai.analyzeBtn": "Analyze",
      "hozai.msgPlaceholder": "Ask about Hozaifa…",
      "hozai.errTitle": "Connection Error",
      "hozai.errBody": "Could not reach the AI service. Check your connection and try again.",
      "hozai.errRetry": "Retry",
      "hozai.newTitle": "New conversation",
      "hozai.closeTitle": "Close",
      "hozai.copy": "Copy",
      "hozai.share": "Share",
      "hozai.download": "Save as TXT",
      "hozai.chip0": "About Hozaifa",
      "hozai.chip1": "Job Fit Analysis",
      "hozai.chip2": "Skills & Stack",
      "hozai.chip3": "Experience",
      "hozai.chip4": "Contact & Hire",
      "hozai.chip5": "Languages",
      "hozai.chipQ0": "Tell me about Hozaifa Abozaid — his background and what makes him unique.",
      "hozai.chipQ2": "What are Hozaifa's technical skills and tech stack? Give me a clear breakdown.",
      "hozai.chipQ3": "Tell me about Hozaifa's work experience and notable projects.",
      "hozai.chipQ4": "How can I contact or hire Hozaifa? Give me all contact options.",
      "hozai.chipQ5": "What languages does Hozaifa speak? How does that benefit employers?"
    },

    ar: {
      // Navigation
      "nav.home": "الرئيسية",
      "nav.about": "عني",
      "nav.experience": "الخبرات",
      "nav.skills": "المهارات",
      "nav.contact": "تواصل",

      // Mobile Dock
      "dock.home": "الرئيسية",
      "dock.about": "عني",
      "dock.experience": "الخبرات",
      "dock.skills": "المهارات",
      "dock.contact": "تواصل",

      // Hero
      "hero.greeting": "مرحباً، أنا",
      "hero.name": "حذيفة أبو زيد",
      "hero.location": "القاهرة، مصر",
      "hero.available": "متاح للعمل والمشاريع",
      "hero.role.cs": "خدمة العملاء والاحتفاظ بهم",
      "hero.role.dev": "مطور ويب متكامل",
      "hero.role.it": "تقنية المعلومات والأتمتة",
      "hero.cta": "تواصل معي",
      "hero.download": "تحميل السيرة الذاتية",
      "hero.experience_badge": "خبرة 5+ سنوات",

      // Ticker
      "ticker.t1": "مطور ويب متكامل Full Stack",
      "ticker.t2": "خدمة العملاء والاحتفاظ بهم Client Retention",
      "ticker.t3": "تطوير React و Node.js و REST APIs",
      "ticker.t4": "أنظمة تقنية المعلومات والأتمتة",
      "ticker.t5": "متعدد اللغات: العربية، الإسبانية، الإنجليزية",
      "ticker.t6": "متاح للعمل على مستوى العالم",

      // About
      "about.tag": "من أنا؟",
      "about.title": "نبذة عني",
      "about.subtitle": "مزيج متكامل بين هندسة ولاء العملاء، وتطوير الويب الحديث، والتواصل متعدد اللغات.",
      "about.bio_title": "الملف المهني",
      "about.description": "محترف شغوف بخبرة متنوعة في خدمة العملاء وتطوير الويب والتسويق الرقمي. أجمع بين المهارات التقنية وقدرات التواصل الممتازة لتقديم نتائج استثنائية.",
      "about.yearsExp": "سنوات الخبرة",
      "about.projectsDone": "مشروع منجز",
      "about.happyClients": "عميل سعيد",

      // Education
      "edu.title": "المؤهل الأكاديمي",
      "edu.rank": "الثاني على الدفعة",
      "edu.degree": "ليسانس الألسن في اللغات والترجمة – قسم اللغة الإسبانية وآدابها",
      "edu.grade": "جيد جداً مع مرتبة الشرف",
      "edu.faculty": "كلية اللغات والترجمة",

      // Languages
      "lang.title": "اللغات وإتقانها",
      "lang.polyglot": "متعدد اللغات",
      "lang.arabic": "العربية",
      "lang.arabic.level": "(اللغة الأم)",
      "lang.spanish": "الإسبانية",
      "lang.spanish.level": "(متقدم B2)",
      "lang.english": "الإنجليزية",
      "lang.english.level": "(متوسط B1)",

      // Experience
      "exp.tag": "المسار الوظيفي",
      "exp.title": "الخبرات المهنية",
      "exp.subtitle": "سجل مهني حافل في هندسة البرمجيات، ولاء العملاء، والإدارة الرقمية.",
      "exp.current": "حالياً",
      "exp.view_project": "زيارة المشروع",

      // 1. eDreams
      "exp.edreams.title": "ممثل خدمة عملاء - قسم الاحتفاظ بالعملاء",
      "exp.edreams.company": "eDreams - اشتراكات Prime",
      "exp.edreams.date": "نوفمبر 2025 – يوليو 2026",
      "exp.edreams.desc1": "إدارة حسابات العملاء واشتراكات برايم.",
      "exp.edreams.desc2": "التعامل المباشر مع العملاء لحل المشكلات، تحسين العلاقات، وزيادة معدلات الولاء للشركة.",
      "exp.edreams.desc3": "استخدام مهارات التفاوض والإقناع لتقليل معدلات إلغاء الاشتراكات.",

      // 2. Front-End Web Developer
      "exp.frontend.title": "مطور واجهات مواقع (Front-End)",
      "exp.frontend.company": "تطوير الويب",
      "exp.frontend.date": "2021 – 2025",
      "exp.frontend.desc1": "تصميم وتطوير واجهات مستخدم تفاعلية وجذابة للمواقع الإلكترونية.",
      "exp.frontend.desc2": "كتابة كود نظيف وقابل للتطوير لضمان سلاسة تجربة المستخدم وتوافق الموقع مع مختلف الأجهزة.",

      // 3. Back-End Developer
      "exp.backend.title": "مطور باك إند (Back-End)",
      "exp.backend.company": "تطوير الويب",
      "exp.backend.date": "2024 – 2026",
      "exp.backend.desc1": "بناء بنية برمجية قوية وقابلة للتوسع من جانب الخادم باستخدام Node.js و Express.",
      "exp.backend.desc2": "تصميم وتطوير واجهات برمجة التطبيقات (REST APIs)، وهياكل قواعد البيانات، وأنظمة المصادقة الآمنة.",

      // 4. Video Editor
      "exp.video.title": "مونتير ومصمم جرافيك",
      "exp.video.company": "عمل حر",
      "exp.video.date": "4 سنوات (عمل حر)",
      "exp.video.desc1": "إنتاج ومونتاج مقاطع فيديو احترافية وتصميم مواد بصرية للتسويق الرقمي.",

      // 5. Social Media Manager
      "exp.social.title": "مدير وسائل التواصل الاجتماعي",
      "exp.social.company": "عمل حر",
      "exp.social.date": "3 سنوات (عمل حر)",
      "exp.social.desc1": "إدارة الحسابات، جدولة المحتوى، التفاعل مع المتابعين، وتنفيذ حملات لزيادة التفاعل والوصول.",

      // 6. Data Entry
      "exp.data.title": "أخصائي إدخال بيانات",
      "exp.data.company": "عمل حر",
      "exp.data.date": "سنتان (عمل حر)",
      "exp.data.desc1": "معالجة وإدخال البيانات بدقة وسرعة عالية، مع مراجعة وتدقيق المعلومات لضمان جودتها.",

      // 7. Arabic Teacher
      "exp.arabic.title": "معلم لغة عربية وقرآن لغير الناطقين بها",
      "exp.arabic.company": "تعليم",
      "exp.arabic.date": "سنتان",
      "exp.arabic.desc1": "تدريس أساسيات وقواعد اللغة العربية وتلاوة القرآن للطلاب من مختلف الجنسيات.",

      // Skills
      "skills.tag": "الكفاءات الأساسية",
      "skills.title": "المهارات والخبرات",
      "skills.subtitle": "تكامل احترافي بين المهارات التقنية البرمجية والقدرات التواصلية في إدارة العملاء.",
      "skills.technical": "المهارات التقنية",
      "skills.soft": "المهارات الشخصية وإدارة العملاء",
      "skills.tech1": "تطوير ويب شامل باستخدام React و Node.js و Express و JavaScript و TypeScript.",
      "skills.tech2": "تصميم واجهات برمجية REST APIs، وقواعد البيانات (SQL, MongoDB)، وأنظمة الأمان.",
      "skills.tech3": "احتراف سطر الأوامر (Terminal)، وبناء سكربتات الأتمتة، واستكشاف أخطاء الأنظمة وإصلاحها.",
      "skills.soft1": "التفاوض والمبيعات: مهارات إقناع عالية وقدرة مثبتة على الحد من إلغاء الاشتراكات.",
      "skills.soft2": "إدارة علاقات العملاء: بناء علاقات قوية وحل النزاعات باحترافية وسرعة.",
      "skills.soft3": "تعدد المهام والمرونة: القدرة على العمل بكفاءة عالية تحت الضغط وإدارة الأولويات.",

      // Contact
      "contact.tag": "تواصل",
      "contact.title": "تواصل معي",
      "contact.subtitle": "يسعدني دائماً التواصل لبدء مشاريع عمل حر، فرص وظيفية، أو تعاون مهني.",
      "contact.email": "البريد الإلكتروني",
      "contact.phone": "الهاتف / واتساب",
      "contact.social": "وسائل التواصل الاجتماعي",
      "contact.copy": "نسخ",
      "contact.copied": "تم النسخ!",

      // Footer
      "footer.rights": "حذيفة أبو زيد. جميع الحقوق محفوظة.",

      // HozAI Assistant
      "hozai.tooltip": "اسأل HozAI",
      "hozai.hdrSub": "مساعد حذيفة الذكي",
      "hozai.welcomeTitle": "أهلاً بك! أنا HozAI",
      "hozai.welcomeSub": "اسألني أي شيء عن حذيفة — مهاراته، خبراته، مشاريعه، أو الصق وصف وظيفي لترى مدى ملاءمته.",
      "hozai.jobLabel": "تحليل ملاءمة الوظيفة",
      "hozai.jobPlaceholder": "الصق المسمى الوظيفي أو الوصف الكامل…",
      "hozai.analyzeBtn": "تحليل",
      "hozai.msgPlaceholder": "اسأل عن حذيفة…",
      "hozai.errTitle": "خطأ في الاتصال",
      "hozai.errBody": "تعذر الوصول إلى خدمة الذكاء الاصطناعي. تحقق من اتصالك وحاول مجدداً.",
      "hozai.errRetry": "إعادة المحاولة",
      "hozai.newTitle": "محادثة جديدة",
      "hozai.closeTitle": "إغلاق",
      "hozai.copy": "نسخ",
      "hozai.share": "مشاركة",
      "hozai.download": "حفظ كملف TXT",
      "hozai.chip0": "عن حذيفة",
      "hozai.chip1": "تحليل الوظيفة",
      "hozai.chip2": "المهارات والتقنيات",
      "hozai.chip3": "الخبرات العملية",
      "hozai.chip4": "التواصل والتوظيف",
      "hozai.chip5": "اللغات",
      "hozai.chipQ0": "أخبرني عن حذيفة أبو زيد — خلفيته وما يميّزه عن غيره.",
      "hozai.chipQ2": "ما مهاراته التقنية والتقنيات التي يستخدمها؟ أعطني شرحاً واضحاً ومفصلاً.",
      "hozai.chipQ3": "أخبرني عن خبراته العملية ومشاريعه البارزة.",
      "hozai.chipQ4": "كيف يمكنني التواصل مع حذيفة أو توظيفه؟ أعطني جميع خيارات التواصل.",
      "hozai.chipQ5": "ما هي اللغات التي يتحدثها حذيفة؟ وكيف يستفيد منها أصحاب العمل؟"
    },

    es: {
      // Navigation
      "nav.home": "Inicio",
      "nav.about": "Perfil",
      "nav.experience": "Experiencia",
      "nav.skills": "Competencias",
      "nav.contact": "Contacto",

      // Mobile Dock
      "dock.home": "Inicio",
      "dock.about": "Perfil",
      "dock.experience": "Experiencia",
      "dock.skills": "Competencias",
      "dock.contact": "Contacto",

      // Hero
      "hero.greeting": "Hola, soy",
      "hero.name": "Hozaifa Abozaid",
      "hero.location": "El Cairo, Egipto",
      "hero.available": "Disponible para proyectos",
      "hero.role.cs": "Fidelización y Atención al Cliente",
      "hero.role.dev": "Desarrollador Full Stack",
      "hero.role.it": "Informática y Automatización",
      "hero.cta": "Contactar",
      "hero.download": "Descargar CV",
      "hero.experience_badge": "5+ Años de Experiencia",

      // Ticker
      "ticker.t1": "Desarrollador Web Full Stack",
      "ticker.t2": "Atención al Cliente y Fidelización",
      "ticker.t3": "React, Node.js y REST APIs",
      "ticker.t4": "Automatización y Sistemas TI",
      "ticker.t5": "Multilingüe: Árabe, Español, Inglés",
      "ticker.t6": "Disponible para proyectos internacionales",

      // About
      "about.tag": "¿Quién Soy?",
      "about.title": "Sobre Mí",
      "about.subtitle": "Combinación estratégica de fidelización de clientes, desarrollo full stack y comunicación multilingüe.",
      "about.bio_title": "Resumen Profesional",
      "about.description": "Profesional con amplia experiencia en atención al cliente, desarrollo web y marketing digital. Combino competencias técnicas con excelentes habilidades comunicativas para ofrecer resultados excepcionales.",
      "about.yearsExp": "Años de experiencia",
      "about.projectsDone": "Proyectos realizados",
      "about.happyClients": "Clientes satisfechos",

      // Education
      "edu.title": "Formación Académica",
      "edu.rank": "Segundo de promoción",
      "edu.degree": "Licenciatura en Lenguas y Traducción – Lengua y Literatura Españolas",
      "edu.grade": "Notable Alto con Matrícula de Honor",
      "edu.faculty": "Facultad de Lenguas y Traducción",

      // Languages
      "lang.title": "Idiomas",
      "lang.polyglot": "Políglota",
      "lang.arabic": "Árabe",
      "lang.arabic.level": "(Nativo)",
      "lang.spanish": "Español",
      "lang.spanish.level": "(Avanzado B2)",
      "lang.english": "Inglés",
      "lang.english.level": "(Intermedio B1)",

      // Experience
      "exp.tag": "Trayectoria",
      "exp.title": "Experiencia Profesional",
      "exp.subtitle": "Sólida trayectoria en ingeniería de software, retención de clientes y gestión digital.",
      "exp.current": "Actual",
      "exp.view_project": "Ver Proyecto Online",

      // 1. eDreams
      "exp.edreams.title": "Agente de Atención al Cliente - Fidelización",
      "exp.edreams.company": "eDreams - Suscripción Prime",
      "exp.edreams.date": "Noviembre 2025 – Julio 2026",
      "exp.edreams.desc1": "Gestión de cuentas de clientes y suscripciones Prime.",
      "exp.edreams.desc2": "Atención directa al cliente para resolver incidencias, fortalecer relaciones y aumentar la fidelización.",
      "exp.edreams.desc3": "Aplicación de técnicas de negociación y persuasión para reducir la tasa de cancelaciones.",

      // 2. Front-End Web Developer
      "exp.frontend.title": "Desarrollador Web Front-End",
      "exp.frontend.company": "Desarrollo Web",
      "exp.frontend.date": "2021 – 2025",
      "exp.frontend.desc1": "Diseño y desarrollo de interfaces de usuario interactivas y atractivas para sitios web.",
      "exp.frontend.desc2": "Código limpio y mantenible garantizando óptima experiencia de usuario y diseño adaptativo.",

      // 3. Back-End Developer
      "exp.backend.title": "Desarrollador Web Back-End",
      "exp.backend.company": "Desarrollo Web",
      "exp.backend.date": "2024 – 2026",
      "exp.backend.desc1": "Construcción de arquitecturas de servidor robustas y escalables con Node.js y Express.",
      "exp.backend.desc2": "Diseño e implementación de APIs RESTful, bases de datos (SQL, MongoDB) y autenticación segura.",

      // 4. Video Editor
      "exp.video.title": "Editor de Vídeo y Diseñador Gráfico",
      "exp.video.company": "Freelance",
      "exp.video.date": "4 Años (Freelance)",
      "exp.video.desc1": "Producción y edición de contenido audiovisual profesional y piezas de marketing digital.",

      // 5. Social Media Manager
      "exp.social.title": "Gestor de Redes Sociales",
      "exp.social.company": "Freelance",
      "exp.social.date": "3 Años (Freelance)",
      "exp.social.desc1": "Gestión de cuentas, programación de contenidos, engagement y campañas de crecimiento.",

      // 6. Data Entry
      "exp.data.title": "Especialista en Entrada de Datos",
      "exp.data.company": "Freelance",
      "exp.data.date": "2 Años (Freelance)",
      "exp.data.desc1": "Procesamiento y registro de datos con alta precisión, rapidez y verificación rigurosa.",

      // 7. Arabic Teacher
      "exp.arabic.title": "Profesor de Árabe y Corán para No Nativos",
      "exp.arabic.company": "Educación",
      "exp.arabic.date": "2 Años",
      "exp.arabic.desc1": "Enseñanza de gramática, conversación árabe y lectura del Corán a estudiantes internacionales.",

      // Skills
      "skills.tag": "Competencias Clave",
      "skills.title": "Habilidades y Experiencia",
      "skills.subtitle": "Sinergia probada entre desarrollo tecnológico y gestión estratégica de clientes.",
      "skills.technical": "Competencias Técnicas",
      "skills.soft": "Habilidades Interpersonales y Retención",
      "skills.tech1": "Desarrollo web integral con React, Node.js, Express, JavaScript y TypeScript.",
      "skills.tech2": "Arquitectura de APIs RESTful, bases de datos (SQL, MongoDB) y seguridad web.",
      "skills.tech3": "Dominio de Terminal/CLI, scripts de automatización y soporte de sistemas TI.",
      "skills.soft1": "Negociación y Ventas: Gran capacidad de persuasión y reducción efectiva de cancelaciones.",
      "skills.soft2": "Gestión de Clientes: Resolución empática de incidencias y fidelización duradera.",
      "skills.soft3": "Adaptabilidad y Trabajo Bajo Presión: Eficacia demostrada en entornos dinámicos y exigentes.",

      // Contact
      "contact.tag": "Conectar",
      "contact.title": "Contactar",
      "contact.subtitle": "Disponible para proyectos freelance, puestos a tiempo completo o colaboraciones estratégicas.",
      "contact.email": "Correo Electrónico",
      "contact.phone": "Teléfono / WhatsApp",
      "contact.social": "Redes Sociales",
      "contact.copy": "Copiar",
      "contact.copied": "¡Copiado!",

      // Footer
      "footer.rights": "Hozaifa Abozaid. Todos los derechos reservados.",

      // HozAI Assistant
      "hozai.tooltip": "Preguntar a HozAI",
      "hozai.hdrSub": "Asistente IA de Hozaifa",
      "hozai.welcomeTitle": "¡Hola! Soy HozAI",
      "hozai.welcomeSub": "Pregúntame cualquier cosa sobre Hozaifa — sus habilidades, experiencia, proyectos, o pega una descripción de puesto.",
      "hozai.jobLabel": "Análisis de Puesto",
      "hozai.jobPlaceholder": "Pega el título o descripción completa del puesto…",
      "hozai.analyzeBtn": "Analizar",
      "hozai.msgPlaceholder": "Pregunta sobre Hozaifa…",
      "hozai.errTitle": "Error de conexión",
      "hozai.errBody": "No se pudo conectar al servicio de IA. Verifica tu conexión e inténtalo de nuevo.",
      "hozai.errRetry": "Reintentar",
      "hozai.newTitle": "Nueva conversación",
      "hozai.closeTitle": "Cerrar",
      "hozai.copy": "Copiar",
      "hozai.share": "Compartir",
      "hozai.download": "Guardar TXT",
      "hozai.chip0": "Sobre Hozaifa",
      "hozai.chip1": "Análisis de puesto",
      "hozai.chip2": "Habilidades y Stack",
      "hozai.chip3": "Experiencia",
      "hozai.chip4": "Contacto y Contratación",
      "hozai.chip5": "Idiomas",
      "hozai.chipQ0": "Háblame de Hozaifa Abozaid: su trayectoria y qué le hace único.",
      "hozai.chipQ2": "¿Cuáles son sus habilidades técnicas y stack tecnológico? Dame un resumen claro.",
      "hozai.chipQ3": "Háblame de su experiencia laboral y proyectos destacados.",
      "hozai.chipQ4": "¿Cómo puedo contactar o contratar a Hozaifa? Dame todas las opciones.",
      "hozai.chipQ5": "¿Qué idiomas habla Hozaifa? ¿Cómo beneficia esto a los empleadores?"
    }
  };

  // Thinking state strings per language
  const thinkingStates = {
    en: ["Thinking...", "Analyzing skills & profile...", "Synthesizing answer...", "Formatting response..."],
    ar: ["جاري التفكير...", "جاري تحليل المهارات والملف...", "جاري إعداد الإجابة...", "جاري تنسيق الرد..."],
    es: ["Pensando...", "Analizando competencias...", "Preparando respuesta...", "Formateando resultado..."]
  };

  // =========================================================================
  // 2. STATE MANAGEMENT (Language & Theme)
  // =========================================================================
  let currentLang = localStorage.getItem('site_lang') || 'en';
  if (!['en', 'ar', 'es'].includes(currentLang)) currentLang = 'en';

  // Light mode is the default base theme!
  let isDark = false;
  const storedTheme = localStorage.getItem('site_theme');
  if (storedTheme === 'dark') {
    isDark = true;
  }

  // =========================================================================
  // 3. THEME LOGIC
  // =========================================================================
  function applyTheme(save = false) {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (save) {
      localStorage.setItem('site_theme', isDark ? 'dark' : 'light');
    }

    // Update Theme Toggle Button Icon (explicit SVG colors to fix light-mode bug!)
    const themeBtn = document.getElementById('neo-theme-btn');
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      themeBtn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      themeBtn.innerHTML = isDark
        ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  // =========================================================================
  // 4. LANGUAGE LOGIC
  // =========================================================================
  function setLanguage(lang) {
    if (!i18nData[lang]) return;
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all text nodes marked with data-i18n
    const translatable = document.querySelectorAll('[data-i18n]');
    translatable.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nData[lang][key]) {
        el.textContent = i18nData[lang][key];
      }
    });

    // Update placeholders
    const translatablePlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    translatablePlaceholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18nData[lang][key]) {
        el.placeholder = i18nData[lang][key];
      }
    });

    // Update Language Dropdown Button Text
    const langCodeEl = document.getElementById('neo-lang-code');
    if (langCodeEl) {
      langCodeEl.textContent = lang === 'ar' ? 'عربي' : lang.toUpperCase();
    }

    // Update Active Option in Dropdown
    document.querySelectorAll('.neo-lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Refresh HozAI Quick Chips text
    renderHozaiChips();
  }

  // =========================================================================
  // 5. ANIMATED STAT COUNTERS
  // =========================================================================
  function initCounters() {
    const counterElements = document.querySelectorAll('.neo-metric-number[data-target]');
    if (!counterElements.length) return;

    let hasAnimated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          counterElements.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const suffix = counter.getAttribute('data-suffix') || '';
            let current = 0;
            const step = Math.max(1, Math.floor(target / 40));
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              counter.textContent = current + suffix;
            }, 30);
          });
        }
      });
    }, { threshold: 0.25 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);
  }

  // =========================================================================
  // 6. SCROLLSPY & NAVIGATION HIGHLIGHTING
  // =========================================================================
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.neo-nav-link');
    const dockLinks = document.querySelectorAll('.neo-dock-link');

    function highlightNav() {
      const scrollY = window.scrollY + 120;
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
          dockLinks.forEach(dock => {
            dock.classList.toggle('active', dock.getAttribute('href') === `#${id}`);
          });
        }
      });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
  }

  // =========================================================================
  // 7. HOZAI ASSISTANT ENGINE (CLOUDFLARE WORKER)
  // =========================================================================
  const HOZAI_ENDPOINT = 'https://hozai-chat.wahdany2003.workers.dev';
  let hozaiMessages = [];
  let isSending = false;
  let isJobFitMode = false;
  let thinkingInterval = null;

  function renderHozaiChips() {
    const container = document.getElementById('hozai-chips');
    if (!container) return;

    const chips = [
      { id: 'q0', key: 'hozai.chip0', qKey: 'hozai.chipQ0' },
      { id: 'q1', key: 'hozai.chip1', isJobFit: true },
      { id: 'q2', key: 'hozai.chip2', qKey: 'hozai.chipQ2' },
      { id: 'q3', key: 'hozai.chip3', qKey: 'hozai.chipQ3' },
      { id: 'q4', key: 'hozai.chip4', qKey: 'hozai.chipQ4' },
      { id: 'q5', key: 'hozai.chip5', qKey: 'hozai.chipQ5' }
    ];

    container.innerHTML = '';
    chips.forEach(chip => {
      const btn = document.createElement('button');
      btn.className = 'neo-hozai-chip';
      btn.type = 'button';
      btn.textContent = i18nData[currentLang][chip.key] || chip.key;
      btn.addEventListener('click', () => {
        if (chip.isJobFit) {
          enableJobFitMode();
        } else if (chip.qKey) {
          sendHozaiMessage(i18nData[currentLang][chip.qKey]);
        }
      });
      container.appendChild(btn);
    });
  }

  function enableJobFitMode() {
    isJobFitMode = true;
    const input = document.getElementById('hozai-textarea');
    if (input) {
      input.placeholder = i18nData[currentLang]['hozai.jobPlaceholder'];
      input.focus();
    }
  }

  async function sendHozaiMessage(customText) {
    if (isSending) return;
    const textarea = document.getElementById('hozai-textarea');
    const text = customText || (textarea ? textarea.value.trim() : '');
    if (!text) return;

    if (textarea && !customText) {
      textarea.value = '';
      textarea.style.height = 'auto';
    }

    let payloadText = text;
    if (isJobFitMode) {
      payloadText = `[JOB FIT ANALYSIS]\n${text}`;
      isJobFitMode = false;
      if (textarea) textarea.placeholder = i18nData[currentLang]['hozai.msgPlaceholder'];
    }

    // Add user message to UI
    appendHozaiMessage('user', text);
    hozaiMessages.push({ role: 'user', content: payloadText });

    // Show thinking indicator
    showThinkingIndicator();
    isSending = true;
    updateSendButtonState();

    try {
      // Map messages to API format: [{ role: 'user'|'model', parts: [{ text }] }]
      const apiMessages = hozaiMessages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const res = await fetch(HOZAI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          language: currentLang
        })
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const reply = data.text || data.reply || data.content || '';

      hideThinkingIndicator();
      appendHozaiMessage('assistant', reply);
      hozaiMessages.push({ role: 'assistant', content: reply });
    } catch (err) {
      console.error('HozAI Error:', err);
      hideThinkingIndicator();
      showHozaiError();
    } finally {
      isSending = false;
      updateSendButtonState();
    }
  }

  function updateSendButtonState() {
    const btn = document.getElementById('hozai-send-btn');
    if (btn) btn.disabled = isSending;
  }

  function showThinkingIndicator() {
    const msgContainer = document.getElementById('hozai-messages');
    if (!msgContainer) return;

    const thinkingEl = document.createElement('div');
    thinkingEl.id = 'hozai-thinking-state';
    thinkingEl.className = 'neo-msg-bot';
    thinkingEl.innerHTML = `<span id="hozai-thinking-text" style="font-weight:700; color:var(--text-muted);">${thinkingStates[currentLang][0]}</span>`;
    msgContainer.appendChild(thinkingEl);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    let step = 0;
    thinkingInterval = setInterval(() => {
      step = (step + 1) % thinkingStates[currentLang].length;
      const tSpan = document.getElementById('hozai-thinking-text');
      if (tSpan) tSpan.textContent = thinkingStates[currentLang][step];
    }, 1800);
  }

  function hideThinkingIndicator() {
    if (thinkingInterval) clearInterval(thinkingInterval);
    const thinkingEl = document.getElementById('hozai-thinking-state');
    if (thinkingEl) thinkingEl.remove();
  }

  function showHozaiError() {
    const msgContainer = document.getElementById('hozai-messages');
    if (!msgContainer) return;

    const errDiv = document.createElement('div');
    errDiv.className = 'neo-msg-bot';
    errDiv.style.borderColor = 'var(--neo-coral)';
    errDiv.innerHTML = `
      <div style="font-weight:900; color:var(--neo-coral); margin-bottom:4px;">${i18nData[currentLang]['hozai.errTitle']}</div>
      <p style="font-size:0.85rem; margin-bottom:8px;">${i18nData[currentLang]['hozai.errBody']}</p>
      <button id="hozai-retry-btn" class="neo-action-btn" type="button">${i18nData[currentLang]['hozai.errRetry']}</button>
    `;
    msgContainer.appendChild(errDiv);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    document.getElementById('hozai-retry-btn')?.addEventListener('click', () => {
      errDiv.remove();
      if (hozaiMessages.length > 0) {
        const lastUser = hozaiMessages[hozaiMessages.length - 1];
        if (lastUser.role === 'user') {
          hozaiMessages.pop();
          sendHozaiMessage(lastUser.content.replace('[JOB FIT ANALYSIS]\n', ''));
        }
      }
    });
  }

  function appendHozaiMessage(role, text) {
    const msgContainer = document.getElementById('hozai-messages');
    if (!msgContainer) return;

    // Remove welcome view once conversation starts
    const welcome = document.getElementById('hozai-welcome-box');
    if (welcome) welcome.style.display = 'none';

    const msgDiv = document.createElement('div');
    msgDiv.className = role === 'user' ? 'neo-msg-user' : 'neo-msg-bot';

    if (role === 'user') {
      msgDiv.textContent = text;
    } else {
      // Basic safe markdown parser (bold, bullet lists, code)
      let formatted = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code style="background:var(--bg-card-alt); border:1px solid var(--border-main); padding:2px 6px; border-radius:4px; font-size:0.85em; font-family:monospace;">$1</code>')
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>');

      msgDiv.innerHTML = `<div>${formatted}</div>`;

      // Action buttons: Copy, Share, Download
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'neo-bot-actions';

      // Copy
      const copyBtn = document.createElement('button');
      copyBtn.className = 'neo-action-btn';
      copyBtn.type = 'button';
      copyBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> ${i18nData[currentLang]['hozai.copy']}`;
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(text);
        copyBtn.textContent = i18nData[currentLang]['contact.copied'];
        setTimeout(() => {
          copyBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> ${i18nData[currentLang]['hozai.copy']}`;
        }, 2000);
      });
      actionsDiv.appendChild(copyBtn);

      // Share
      const shareBtn = document.createElement('button');
      shareBtn.className = 'neo-action-btn';
      shareBtn.type = 'button';
      shareBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> ${i18nData[currentLang]['hozai.share']}`;
      shareBtn.addEventListener('click', () => {
        if (navigator.share) {
          navigator.share({ title: 'HozAI Reply', text: text }).catch(() => {});
        } else {
          navigator.clipboard.writeText(text);
          shareBtn.textContent = i18nData[currentLang]['contact.copied'];
          setTimeout(() => {
            shareBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> ${i18nData[currentLang]['hozai.share']}`;
          }, 2000);
        }
      });
      actionsDiv.appendChild(shareBtn);

      // Download
      const dlBtn = document.createElement('button');
      dlBtn.className = 'neo-action-btn';
      dlBtn.type = 'button';
      dlBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> ${i18nData[currentLang]['hozai.download']}`;
      dlBtn.addEventListener('click', () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'hozai-reply.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
      actionsDiv.appendChild(dlBtn);

      msgDiv.appendChild(actionsDiv);
    }

    msgContainer.appendChild(msgDiv);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  // =========================================================================
  // 8. INITIALIZATION & EVENT LISTENERS
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Theme
    applyTheme(false);
    const themeBtn = document.getElementById('neo-theme-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        isDark = !isDark;
        applyTheme(true);
      });
    }

    // 2. Setup Language
    setLanguage(currentLang);
    const langBtn = document.getElementById('neo-lang-btn');
    const langMenu = document.getElementById('neo-lang-menu');

    if (langBtn && langMenu) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('show');
      });

      document.querySelectorAll('.neo-lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const lang = opt.getAttribute('data-lang');
          setLanguage(lang);
          langMenu.classList.remove('show');
        });
      });

      document.addEventListener('click', (e) => {
        if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
          langMenu.classList.remove('show');
        }
      });
    }

    // 3. Setup HozAI Assistant Controls
    const hozaiLauncher = document.getElementById('neo-hozai-launcher');
    const hozaiModal = document.getElementById('neo-hozai-modal');
    const hozaiClose = document.getElementById('hozai-close-btn');
    const hozaiSend = document.getElementById('hozai-send-btn');
    const hozaiTextarea = document.getElementById('hozai-textarea');
    const hozaiNewChat = document.getElementById('hozai-new-chat-btn');

    if (hozaiLauncher && hozaiModal) {
      hozaiLauncher.addEventListener('click', () => {
        hozaiModal.classList.toggle('show');
        if (hozaiModal.classList.contains('show')) {
          if (hozaiMessages.length === 0) {
            const welcome = document.getElementById('hozai-welcome-box');
            if (welcome) welcome.style.display = 'flex';
          }
          renderHozaiChips();
          hozaiTextarea?.focus();
        }
      });
    }

    if (hozaiClose && hozaiModal) {
      hozaiClose.addEventListener('click', () => {
        hozaiModal.classList.remove('show');
      });
    }

    if (hozaiSend) {
      hozaiSend.addEventListener('click', () => sendHozaiMessage());
    }

    if (hozaiTextarea) {
      // Auto expand height
      hozaiTextarea.addEventListener('input', () => {
        hozaiTextarea.style.height = 'auto';
        hozaiTextarea.style.height = Math.min(100, hozaiTextarea.scrollHeight) + 'px';
      });

      // Enter to send, Shift+Enter for newline
      hozaiTextarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendHozaiMessage();
        }
      });
    }

    if (hozaiNewChat) {
      hozaiNewChat.addEventListener('click', () => {
        hozaiMessages = [];
        const msgContainer = document.getElementById('hozai-messages');
        if (msgContainer) {
          msgContainer.querySelectorAll('.neo-msg-user, .neo-msg-bot').forEach(el => el.remove());
        }
        const welcome = document.getElementById('hozai-welcome-box');
        if (welcome) {
          welcome.style.display = 'flex';
        }
        renderHozaiChips();
      });
    }

    // Close HozAI on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hozaiModal?.classList.contains('show')) {
        hozaiModal.classList.remove('show');
      }
    });

    // 4. Contact Copy Shortcuts
    document.querySelectorAll('[data-copy-text]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const textToCopy = btn.getAttribute('data-copy-text');
        navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        btn.textContent = i18nData[currentLang]['contact.copied'];
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      });
    });

    // 5. ScrollSpy & Counters & HozAI Chips
    initScrollSpy();
    initCounters();
    renderHozaiChips();
  });

})();
