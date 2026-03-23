import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Language Names
    'lang.name.en': 'English',
    'lang.name.ar': 'العربية',
    'lang.name.es': 'Español',
    
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Hozaifa Abozaid',
    'hero.titles': 'Customer Service | Front-End Developer | IT',
    'hero.cta': 'Get in Touch',
    'hero.download': 'Download CV',
    
    // About
    'about.title': 'About Me',
    'about.location': 'Cairo, Egypt',
    'about.description': 'A passionate professional with diverse experience in customer service, web development, and digital marketing. I combine technical expertise with excellent communication skills to deliver outstanding results.',
    'about.yearsExp': 'Years of Experience',
    'about.projectsDone': 'Projects Completed',
    'about.happyClients': 'Happy Clients',
    
    // Experience
    'exp.title': 'Professional Experience',
    'exp.current': 'Current',
    'exp.edreams.title': 'Customer Service Representative - Client Retention',
    'exp.edreams.company': 'eDreams - Prime Subscription',
    'exp.edreams.date': 'November 2025 – April 2026',
    'exp.edreams.desc1': 'Managing customer accounts and Prime Subscriptions.',
    'exp.edreams.desc2': 'Direct customer interaction to resolve issues, strengthen relationships, and boost company loyalty rates.',
    'exp.edreams.desc3': 'Leveraging negotiation and persuasion skills to reduce subscription cancellation rates.',
    
    'exp.frontend.title': 'Front-End Web Developer',
    'exp.frontend.date': '2024 – 2025',
    'exp.frontend.desc1': 'Designing and developing interactive, visually appealing user interfaces for websites.',
    'exp.frontend.desc2': 'Writing clean, maintainable code to ensure optimal performance and user experience.',
    
    'exp.video.title': 'Video Editor & Graphic Designer',
    'exp.video.date': '4 Years (Freelance)',
    'exp.video.desc1': 'Producing and editing professional videos, designing integrated visual materials for social media marketing campaigns.',
    
    'exp.social.title': 'Social Media Manager',
    'exp.social.date': '3 Years (Freelance)',
    'exp.social.desc1': 'Managing accounts, scheduling content, engaging with followers, and developing strategies to increase reach and sales.',
    
    'exp.data.title': 'Data Entry Specialist',
    'exp.data.date': '2 Years (Freelance)',
    'exp.data.desc1': 'Processing and entering data with high accuracy and speed whilst ensuring error-free organisation for future reference.',
    
    'exp.arabic.title': 'Arabic & Quran Teacher for Non-Native Speakers',
    'exp.arabic.date': '2 Years',
    'exp.arabic.desc1': 'Teaching Arabic language fundamentals and Quran recitation using simplified, effective methods suited to various student levels.',
    
    // Education
    'edu.title': 'Education',
    'edu.degree': 'BA in Languages and Translation - Spanish Language and Literature',
    'edu.grade': 'Upper Second Class Honours (2:1)',
    'edu.rank': 'Second in Class',
    
    // Skills
    'skills.title': 'Skills',
    'skills.technical': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    'skills.tech1': 'Advanced IT proficiency and troubleshooting',
    'skills.tech2': 'Extensive experience with Terminal, development tools installation and management',
    'skills.tech3': 'Automation building and script execution to streamline workflows',
    'skills.soft1': 'Negotiation & Sales: Strong persuasion skills and target achievement',
    'skills.soft2': 'Client Management: Exceptional relationship-building abilities',
    'skills.soft3': 'Multitasking: Ability to manage multiple projects simultaneously without compromising quality',
    
    // Languages
    'lang.title': 'Languages',
    'lang.arabic': 'Arabic',
    'lang.arabic.level': 'Native',
    'lang.spanish': 'Spanish',
    'lang.spanish.level': 'Upper Intermediate (B2)',
    'lang.english': 'English',
    'lang.english.level': 'Intermediate (B1)',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Feel free to reach out for collaborations or just to say hello',
    'contact.phone': 'Phone / WhatsApp',
    'contact.email': 'Email',
    'contact.social': 'Social Media',
  },
  ar: {
    // Language Names
    'lang.name.en': 'English',
    'lang.name.ar': 'العربية',
    'lang.name.es': 'Español',
    
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.experience': 'الخبرات',
    'nav.skills': 'المهارات',
    'nav.contact': 'تواصل',
    
    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': 'حذيفة أبو زيد',
    'hero.titles': 'خدمة العملاء | مطور واجهات أمامية | تقنية المعلومات',
    'hero.cta': 'تواصل معي',
    'hero.download': 'تحميل السيرة الذاتية',
    
    // About
    'about.title': 'نبذة عني',
    'about.location': 'القاهرة، مصر',
    'about.description': 'محترف شغوف بخبرة متنوعة في خدمة العملاء وتطوير الويب والتسويق الرقمي. أجمع بين المهارات التقنية وقدرات التواصل الممتازة لتقديم نتائج استثنائية.',
    'about.yearsExp': 'سنوات الخبرة',
    'about.projectsDone': 'مشروع منجز',
    'about.happyClients': 'عميل سعيد',
    
    // Experience
    'exp.title': 'الخبرات المهنية',
    'exp.current': 'حالياً',
    'exp.edreams.title': 'ممثل خدمة عملاء - قسم الاحتفاظ بالعملاء',
    'exp.edreams.company': 'eDreams - Prime Subscription',
    'exp.edreams.date': 'نوفمبر 2025 – أبريل 2026',
    'exp.edreams.desc1': 'إدارة حسابات العملاء واشتراكات برايم.',
    'exp.edreams.desc2': 'التعامل المباشر مع العملاء لحل المشكلات، تحسين العلاقات، وزيادة معدلات الولاء للشركة.',
    'exp.edreams.desc3': 'استخدام مهارات التفاوض والإقناع لتقليل معدلات إلغاء الاشتراكات.',
    
    'exp.frontend.title': 'مطور واجهات مواقع',
    'exp.frontend.date': '2024 – 2025',
    'exp.frontend.desc1': 'تصميم وتطوير واجهات مستخدم تفاعلية وجذابة للمواقع الإلكترونية.',
    'exp.frontend.desc2': 'كتابة أكواد نظيفة وقابلة للصيانة لضمان أفضل أداء وتجربة للمستخدم.',
    
    'exp.video.title': 'محرر فيديو ومصمم جرافيك',
    'exp.video.date': 'خبرة 4 سنوات (عمل حر)',
    'exp.video.desc1': 'إنتاج وتحرير مقاطع فيديو احترافية، وتصميم مواد بصرية متكاملة لحملات التسويق عبر منصات التواصل الاجتماعي.',
    
    'exp.social.title': 'مدير صفحات تواصل اجتماعي',
    'exp.social.date': 'خبرة 3 سنوات (عمل حر)',
    'exp.social.desc1': 'إدارة الحسابات، جدولة المحتوى، التفاعل مع المتابعين، وبناء استراتيجيات لزيادة الانتشار والمبيعات.',
    
    'exp.data.title': 'مدخل بيانات',
    'exp.data.date': 'خبرة سنتين (عمل حر)',
    'exp.data.desc1': 'إدخال ومعالجة البيانات بدقة وسرعة عالية مع ضمان خلوها من الأخطاء وتنظيمها للرجوع إليها لاحقاً.',
    
    'exp.arabic.title': 'معلم لغة عربية فصحى وقرآن كريم لغير الناطقين بها',
    'exp.arabic.date': 'خبرة سنتين',
    'exp.arabic.desc1': 'تدريس أسس اللغة العربية وتلاوة القرآن الكريم بأساليب مبسطة وفعالة تتناسب مع المستويات المختلفة للطلاب.',
    
    // Education
    'edu.title': 'المؤهلات العلمية',
    'edu.degree': 'ليسانس اللغات والترجمة - قسم اللغة الإسبانية وآدابها',
    'edu.grade': 'جيد جداً مع مرتبة الشرف',
    'edu.rank': 'المركز الثاني على الدفعة',
    
    // Skills
    'skills.title': 'المهارات',
    'skills.technical': 'المهارات التقنية',
    'skills.soft': 'المهارات الشخصية',
    'skills.tech1': 'إجادة تامة واحترافية للتعامل مع الحاسب الآلي',
    'skills.tech2': 'خبرة عميقة في استخدام موجه الأوامر، تثبيت وإدارة الأدوات البرمجية',
    'skills.tech3': 'القدرة على بناء الأتمتة وتشغيل السكربتات لتسهيل بيئة العمل',
    'skills.soft1': 'التفاوض والمبيعات: قدرة عالية على الإقناع وتحقيق الأهداف',
    'skills.soft2': 'إدارة العملاء: مهارات استثنائية في بناء علاقات إيجابية',
    'skills.soft3': 'المهام المتعددة: القدرة على إدارة عدة مشاريع في وقت واحد',
    
    // Languages
    'lang.title': 'اللغات',
    'lang.arabic': 'العربية',
    'lang.arabic.level': 'اللغة الأم',
    'lang.spanish': 'الإسبانية',
    'lang.spanish.level': 'متقدم (B2)',
    'lang.english': 'الإنجليزية',
    'lang.english.level': 'متوسط (B1)',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'لا تتردد في التواصل للتعاون أو حتى لمجرد إلقاء التحية',
    'contact.phone': 'الهاتف / واتساب',
    'contact.email': 'البريد الإلكتروني',
    'contact.social': 'منصات التواصل',
  },
  es: {
    // Language Names
    'lang.name.en': 'English',
    'lang.name.ar': 'العربية',
    'lang.name.es': 'Español',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Perfil',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Competencias',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Hozaifa Abozaid',
    'hero.titles': 'Atención al Cliente | Desarrollador Front-End | Informática',
    'hero.cta': 'Contactar',
    'hero.download': 'Descargar CV',
    
    // About
    'about.title': 'Sobre Mí',
    'about.location': 'El Cairo, Egipto',
    'about.description': 'Profesional con amplia experiencia en atención al cliente, desarrollo web y marketing digital. Combino competencias técnicas con excelentes habilidades comunicativas para ofrecer resultados excepcionales.',
    'about.yearsExp': 'Años de experiencia',
    'about.projectsDone': 'Proyectos realizados',
    'about.happyClients': 'Clientes satisfechos',
    
    // Experience
    'exp.title': 'Experiencia Profesional',
    'exp.current': 'Actual',
    'exp.edreams.title': 'Agente de Atención al Cliente - Fidelización',
    'exp.edreams.company': 'eDreams - Prime Subscription',
    'exp.edreams.date': 'Noviembre 2025 – Abril 2026',
    'exp.edreams.desc1': 'Gestión de cuentas de clientes y suscripciones Prime.',
    'exp.edreams.desc2': 'Atención directa al cliente para resolver incidencias, fortalecer relaciones y aumentar la fidelización.',
    'exp.edreams.desc3': 'Aplicación de técnicas de negociación y persuasión para reducir la tasa de cancelaciones.',
    
    'exp.frontend.title': 'Desarrollador Web Front-End',
    'exp.frontend.date': '2024 – 2025',
    'exp.frontend.desc1': 'Diseño y desarrollo de interfaces de usuario interactivas y atractivas para sitios web.',
    'exp.frontend.desc2': 'Desarrollo de código limpio y mantenible garantizando el máximo rendimiento y experiencia de usuario.',
    
    'exp.video.title': 'Editor de Vídeo y Diseñador Gráfico',
    'exp.video.date': '4 años (Autónomo)',
    'exp.video.desc1': 'Producción y edición de vídeos profesionales, diseño de material gráfico para campañas de marketing en redes sociales.',
    
    'exp.social.title': 'Community Manager',
    'exp.social.date': '3 años (Autónomo)',
    'exp.social.desc1': 'Gestión de cuentas, planificación de contenidos, interacción con seguidores y desarrollo de estrategias para aumentar el alcance y las ventas.',
    
    'exp.data.title': 'Especialista en Introducción de Datos',
    'exp.data.date': '2 años (Autónomo)',
    'exp.data.desc1': 'Introducción y procesamiento de datos con alta precisión y rapidez, garantizando una organización libre de errores.',
    
    'exp.arabic.title': 'Profesor de Árabe y Corán para No Nativos',
    'exp.arabic.date': '2 años',
    'exp.arabic.desc1': 'Enseñanza de los fundamentos del idioma árabe y recitación del Corán mediante métodos simplificados y eficaces adaptados a distintos niveles.',
    
    // Education
    'edu.title': 'Formación Académica',
    'edu.degree': 'Licenciatura en Lenguas y Traducción - Lengua y Literatura Españolas',
    'edu.grade': 'Notable Alto con Matrícula de Honor',
    'edu.rank': 'Segundo de promoción',
    
    // Skills
    'skills.title': 'Competencias',
    'skills.technical': 'Competencias Técnicas',
    'skills.soft': 'Competencias Transversales',
    'skills.tech1': 'Dominio avanzado de informática y resolución de incidencias técnicas',
    'skills.tech2': 'Amplia experiencia con Terminal, instalación y gestión de herramientas de desarrollo',
    'skills.tech3': 'Capacidad para crear automatizaciones y ejecutar scripts que optimicen el flujo de trabajo',
    'skills.soft1': 'Negociación y ventas: gran capacidad de persuasión y consecución de objetivos',
    'skills.soft2': 'Gestión de clientes: habilidades excepcionales para establecer relaciones positivas',
    'skills.soft3': 'Multitarea: capacidad para gestionar varios proyectos simultáneamente sin mermar la calidad',
    
    // Languages
    'lang.title': 'Idiomas',
    'lang.arabic': 'Árabe',
    'lang.arabic.level': 'Nativo',
    'lang.spanish': 'Español',
    'lang.spanish.level': 'Avanzado (B2)',
    'lang.english': 'Inglés',
    'lang.english.level': 'Intermedio (B1)',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'No dudes en ponerte en contacto para colaboraciones o simplemente para saludar',
    'contact.phone': 'Teléfono / WhatsApp',
    'contact.email': 'Correo electrónico',
    'contact.social': 'Redes sociales',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
