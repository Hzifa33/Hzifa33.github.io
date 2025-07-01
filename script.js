document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('loaded');
                document.body.style.overflowY = 'auto';
            }
        }, 1000); 
    });
    document.body.style.overflowY = 'hidden';
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    if (themeToggle) {
       themeToggle.checked = savedTheme === 'light';
    }
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                htmlEl.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                htmlEl.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    const translations = {
        en: {
            pageTitle: "Hzifa33 | Digital Portfolio",
            cvButton: "View CV",
            heroTitle: "Senior Front-End Developer & Reverse Engineer",
            scrollDown: "Scroll Down",
            expTitle: "Professional Experience",
            exp1Title: "Senior Front-End Developer",
            exp1Duration: "5+ Years",
            exp1Det1: "Developed modern, responsive web and mobile user interfaces.",
            exp1Det2: "Proficient in HTML5, CSS3, JavaScript, and modern frameworks like React, Vue.js, and Tailwind CSS.",
            exp1Det3: "Strong understanding of UI/UX principles and performance optimization.",
            exp1Det4: "Built cross-platform applications with clean, maintainable code.",
            exp1Det5: "Skilled in Figma and Adobe XD for interface design and prototyping.",
            exp2Title: "Reverse Engineer (Android Focused)",
            exp2Duration: "Expert",
            exp2Det1: "Expertise in analyzing, decompiling, and modifying Android applications (APK).",
            exp2Det2: "Skilled in using tools like JADX, Ghidra, IDA Pro, and APKTool.",
            exp2Det3: "Experienced in bypassing obfuscation and decoding logic.",
            exp2Det4: "Solid understanding of smali, Java bytecode, and Android internals.",
            exp3Title: "UI/UX & Video Designer",
            exp3Duration: "5+ Years",
            exp3Det1: "Designed visual content, social media posts, and video content.",
            exp3Det2: "Proficient in Adobe Premiere, After Effects, Photoshop, and Canva.",
            exp3Det3: "Created branding and promotional content for high-reach pages.",
            exp4Title: "Social Media Manager",
            exp4Duration: "4+ Years",
            exp4Det1: "Managed celebrity and influencer accounts.",
            exp4Det2: "Created content plans, optimized engagement, and tracked analytics.",
            exp5Title: "Data Entry Specialist",
            exp5Duration: "2 Years",
            exp5Det1: "Worked with multinational companies on large data volumes.",
            exp5Det2: "Maintained high speed and accuracy in data handling.",
            exp6Title: "Quran & Arabic Language Instructor",
            exp6Duration: "10+ Years",
            exp6Det1: "10+ years teaching Quran memorization.",
            exp6Det2: "8 years teaching \"Noor Al-Bayan\" to native and non-native speakers.",
            exp6Det3: "Strong background in Arabic grammar, morphology, and rhetoric.",
            exp7Title: "Islamic Studies Teacher",
            exp7Duration: "Extensive",
            exp7Det1: "Taught Fiqh, Aqeedah, Tafsir, Hadith, and Usul.",
            exp7Det2: "Designed lesson plans combining traditional texts with modern pedagogy.",
            exp8Title: "Spanish and English Language Tutor",
            exp8Duration: "Skilled",
            exp8Det1: "Taught Arabic to non-Arabic speakers through Spanish and English.",
            skillsTitle: "Language Skills",
            skill1Level: "Native",
            skill1Name: "Arabic",
            skill2Name: "Spanish",
            skill3Name: "English",
            footerText: "© 2025 Hzifa33. All rights reserved. Designed with passion."
        },
        ar: {
            pageTitle: "حذيفة | ملف أعمال رقمي",
            cvButton: "عرض السيرة",
            heroTitle: "مطور واجهات أمامية أول ومهندس عكسي",
            scrollDown: "مرر للأسفل",
            expTitle: "الخبرة المهنية",
            exp1Title: "مطور واجهات أمامية أول",
            exp1Duration: "+5 سنوات",
            exp1Det1: "تطوير واجهات مستخدم حديثة ومتجاوبة للويب والجوال.",
            exp1Det2: "إتقان HTML5, CSS3, JavaScript، وأطر العمل الحديثة مثل React, Vue.js, و Tailwind CSS.",
            exp1Det3: "فهم قوي لمبادئ UI/UX وتحسين الأداء.",
            exp1Det4: "بناء تطبيقات متعددة المنصات بكود نظيف وقابل للصيانة.",
            exp1Det5: "مهارة في استخدام Figma و Adobe XD لتصميم الواجهات والنماذج الأولية.",
            exp2Title: "مهندس عكسي (متخصص في أندرويد)",
            exp2Duration: "خبير",
            exp2Det1: "خبرة في تحليل وتفكيك وتعديل تطبيقات أندرويد (APK).",
            exp2Det2: "مهارة في استخدام أدوات مثل JADX, Ghidra, IDA Pro, و APKTool.",
            exp2Det3: "خبرة في تجاوز تقنيات التعتيم وفك تشفير المنطق البرمجي.",
            exp2Det4: "فهم راسخ لـ Smali، كود Java المترجم، ومكونات أندرويد الداخلية.",
            exp3Title: "مصمم واجهات وتجربة مستخدم ومصمم فيديو",
            exp3Duration: "+5 سنوات",
            exp3Det1: "تصميم محتوى مرئي ومنشورات وسائل التواصل الاجتماعي ومحتوى الفيديو.",
            exp3Det2: "إتقان Adobe Premiere, After Effects, Photoshop, و Canva.",
            exp3Det3: "إنشاء محتوى ترويجي وهوية بصرية لصفحات ذات وصول عالٍ.",
            exp4Title: "مدير وسائل التواصل الاجتماعي",
            exp4Duration: "+4 سنوات",
            exp4Det1: "إدارة حسابات المشاهير والمؤثرين.",
            exp4Det2: "إنشاء خطط محتوى، تحسين التفاعل، وتتبع التحليلات.",
            exp5Title: "أخصائي إدخال بيانات",
            exp5Duration: "سنتان",
            exp5Det1: "العمل مع شركات متعددة الجنسيات على كميات كبيرة من البيانات.",
            exp5Det2: "الحفاظ على سرعة ودقة عالية في معالجة البيانات.",
            exp6Title: "معلم قرآن ولغة عربية",
            exp6Duration: "+10 سنوات",
            exp6Det1: "أكثر من 10 سنوات في تدريس تحفيظ القرآن.",
            exp6Det2: "8 سنوات في تدريس \"نور البيان\" للناطقين وغير الناطقين بالعربية.",
            exp6Det3: "خلفية قوية في النحو والصرف والبلاغة العربية.",
            exp7Title: "مدرس دراسات إسلامية",
            exp7Duration: "خبرة واسعة",
            exp7Det1: "تدريس الفقه، العقيدة، التفسير، الحديث، والأصول.",
            exp7Det2: "تصميم خطط دروس تجمع بين النصوص التقليدية وطرق التدريس الحديثة.",
            exp8Title: "مدرس لغة إسبانية وإنجليزية",
            exp8Duration: "ماهر",
            exp8Det1: "تدريس اللغة العربية لغير الناطقين بها من خلال الإسبانية والإنجليزية.",
            skillsTitle: "المهارات اللغوية",
            skill1Level: "لغة أم",
            skill1Name: "العربية",
            skill2Name: "الإسبانية",
            skill3Name: "الإنجليزية",
            footerText: "© 2025 حذيفة. جميع الحقوق محفوظة. صُمم بشغف."
        },
        es: {
            pageTitle: "Hzifa33 | Portafolio Digital",
            cvButton: "Ver CV",
            heroTitle: "Desarrollador Front-End Senior e Ingeniero Inverso",
            scrollDown: "Desplázate hacia abajo",
            expTitle: "Experiencia Profesional",
            exp1Title: "Desarrollador Front-End Senior",
            exp1Duration: "5+ Años",
            exp1Det1: "Desarrollé interfaces de usuario modernas y responsivas para web y móviles.",
            exp1Det2: "Competente en HTML5, CSS3, JavaScript y frameworks modernos como React, Vue.js y Tailwind CSS.",
            exp1Det3: "Sólida comprensión de los principios de UI/UX y optimización del rendimiento.",
            exp1Det4: "Construí aplicaciones multiplataforma con código limpio y mantenible.",
            exp1Det5: "Habilidad en Figma y Adobe XD para diseño de interfaces y prototipos.",
            exp2Title: "Ingeniero Inverso (Enfocado en Android)",
            exp2Duration: "Experto",
            exp2Det1: "Experiencia en analizar, decompilar y modificar aplicaciones de Android (APK).",
            exp2Det2: "Habilidad en el uso de herramientas como JADX, Ghidra, IDA Pro y APKTool.",
            exp2Det3: "Experimentado en eludir la ofuscación y decodificar la lógica.",
            exp2Det4: "Sólida comprensión de smali, bytecode de Java e internos de Android.",
            exp3Title: "Diseñador UI/UX y de Video",
            exp3Duration: "5+ Años",
            exp3Det1: "Diseñé contenido visual, publicaciones para redes sociales y contenido de video.",
            exp3Det2: "Competente en Adobe Premiere, After Effects, Photoshop y Canva.",
            exp3Det3: "Creé contenido de marca y promocional para páginas de alto alcance.",
            exp4Title: "Gestor de Redes Sociales",
            exp4Duration: "4+ Años",
            exp4Det1: "Gestioné cuentas de celebridades e influencers.",
            exp4Det2: "Creé planes de contenido, optimicé la interacción y rastreé análisis.",
            exp5Title: "Especialista en Entrada de Datos",
            exp5Duration: "2 Años",
            exp5Det1: "Trabajé con empresas multinacionales en grandes volúmenes de datos.",
            exp5Det2: "Mantuve alta velocidad y precisión en el manejo de datos.",
            exp6Title: "Instructor de Corán y Lengua Árabe",
            exp6Duration: "10+ Años",
            exp6Det1: "Más de 10 años enseñando la memorización del Corán.",
            exp6Det2: "8 años enseñando \"Noor Al-Bayan\" a hablantes nativos y no nativos.",
            exp6Det3: "Sólida formación en gramática, morfología y retórica árabe.",
            exp7Title: "Profesor de Estudios Islámicos",
            exp7Duration: "Extensa",
            exp7Det1: "Enseñé Fiqh, Aqidah, Tafsir, Hadith y Usul.",
            exp7Det2: "Diseñé planes de lecciones combinando textos tradicionales con pedagogía moderna.",
            exp8Title: "Tutor de Español e Inglés",
            exp8Duration: "Habilidoso",
            exp8Det1: "Enseñé árabe a hablantes no árabes a través del español y el inglés.",
            skillsTitle: "Habilidades Lingüísticas",
            skill1Level: "Nativo",
            skill1Name: "Árabe",
            skill2Name: "Español",
            skill3Name: "Inglés",
            footerText: "© 2025 Hzifa33. Todos los derechos reservados. Diseñado con pasión."
        },
        arz: {
            pageTitle: "حذيفة | بورتفوليو ديجيتال",
            cvButton: "شوف الـ CV",
            heroTitle: "مطور فرونت-إند أول ومهندس عكسي",
            scrollDown: "انزل تحت",
            expTitle: "الخبرة المهنية",
            exp1Title: "مطور فرونت-إند أول",
            exp1Duration: "+5 سنين",
            exp1Det1: "طورت واجهات مستخدم مودرن وبتشتغل على أي جهاز للويب والموبايل.",
            exp1Det2: "شاطر في HTML5, CSS3, JavaScript، والفريمووركس الجديدة زي React, Vue.js, و Tailwind CSS.",
            exp1Det3: "فاهم كويس مبادئ تصميم الواجهات وتجربة المستخدم وتحسين الأداء.",
            exp1Det4: "بنيت تطبيقات بتشتغل على كل المنصات بكود نضيف وسهل الصيانة.",
            exp1Det5: "عندي مهارة في Figma و Adobe XD لتصميم الواجهات والنماذج.",
            exp2Title: "مهندس عكسي (متخصص أندرويد)",
            exp2Duration: "خبير",
            exp2Det1: "خبرة في تحليل وتفكيك وتعديل تطبيقات الأندرويد (APK).",
            exp2Det2: "بعرف أستخدم أدوات زي JADX, Ghidra, IDA Pro, و APKTool.",
            exp2Det3: "عندي خبرة في فك التشفير والتعقيد بتاع الأكواد.",
            exp2Det4: "فاهم كويس Smali، والـ Java bytecode، والحاجات الداخلية للأندرويد.",
            exp3Title: "مصمم واجهات وفيديو",
            exp3Duration: "+5 سنين",
            exp3Det1: "صممت محتوى مرئي، بوستات سوشيال ميديا، وفيديوهات.",
            exp3Det2: "شاطر في برامج Adobe Premiere, After Effects, Photoshop, و Canva.",
            exp3Det3: "عملت براندنج ومحتوى ترويجي لصفحات كبيرة.",
            exp4Title: "مدير سوشيال ميديا",
            exp4Duration: "+4 سنين",
            exp4Det1: "أدرت حسابات مشاهير ومؤثرين.",
            exp4Det2: "عملت خطط محتوى، زودت التفاعل، وتابعت التحليلات.",
            exp5Title: "متخصص إدخال بيانات",
            exp5Duration: "سنتين",
            exp5Det1: "اشتغلت مع شركات مالتي-ناشونال على حجم بيانات كبير.",
            exp5Det2: "كنت بحافظ على سرعة ودقة عالية في الشغل.",
            exp6Title: "محفظ قرآن ومدرس لغة عربية",
            exp6Duration: "+10 سنين",
            exp6Det1: "+10 سنين في تحفيظ القرآن.",
            exp6Det2: "8 سنين في تدريس \"نور البيان\" للمصريين والأجانب.",
            exp6Det3: "خلفية قوية في النحو والصرف والبلاغة.",
            exp7Title: "مدرس علوم شرعية",
            exp7Duration: "خبرة كبيرة",
            exp7Det1: "درّست فقه، عقيدة، تفسير، حديث، وأصول.",
            exp7Det2: "صممت خطط دروس بتمزج بين الكتب التراثية وطرق التدريس الحديثة.",
            exp8Title: "مدرس إسباني وإنجليزي",
            exp8Duration: "شاطر",
            exp8Det1: "درّست عربي للأجانب بالإسباني والإنجليزي.",
            skillsTitle: "المهارات اللغوية",
            skill1Level: "لغة أم",
            skill1Name: "عربي",
            skill2Name: "إسباني",
            skill3Name: "إنجليزي",
            footerText: "© 2025 حذيفة. كل الحقوق محفوظة. اتصممت بحب."
        }
    };
    
    const langSwitcher = document.querySelector('.language-switcher');
    const langButton = document.querySelector('.language-button');
    const langOptions = document.querySelectorAll('.language-dropdown a');
    
    const setLanguage = (lang) => {
        if (!translations[lang]) return;
        htmlEl.lang = lang;
        htmlEl.dir = (lang === 'ar' || lang === 'arz') ? 'rtl' : 'ltr';
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        langOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.getAttribute('data-lang-switch') === lang) {
                opt.classList.add('active');
            }
        });
        localStorage.setItem('language', lang);
        langSwitcher.classList.remove('active');
    };
    langButton.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('active');
    });
    document.addEventListener('click', () => {
        langSwitcher.classList.remove('active');
    });
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang-switch');
            setLanguage(lang);
        });
    });
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    let cursorTimeout;
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });

            cursorDot.style.opacity = '1';
            cursorOutline.style.opacity = '1';

            clearTimeout(cursorTimeout);
            cursorTimeout = setTimeout(() => {
                cursorDot.style.opacity = '0';
                cursorOutline.style.opacity = '0';
            }, 3000);
        });

        document.querySelectorAll('a, button, .social-icon, .skill-card, .experience-card, .theme-switch, .language-button').forEach(el => {
            el.addEventListener('mouseover', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(0, 225, 255, 0.2)';
            });
            el.addEventListener('mouseout', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'rgba(0, 225, 255, 0.1)';
            });
        });
    }
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    const glowingCards = document.querySelectorAll('.card-glow');
    glowingCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
    const revealElements = document.querySelectorAll('.anim-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });
    revealElements.forEach(el => revealObserver.observe(el));
    const skillCards = document.querySelectorAll('.skill-card');
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillProgressElement = entry.target.querySelector('.skill-progress');
                const progressCircle = entry.target.querySelector('.progress-ring-circle');
                const radius = progressCircle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                const progress = skillProgressElement.dataset.progress;
                const offset = circumference - (progress / 100) * circumference;
                progressCircle.style.strokeDashoffset = offset;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillCards.forEach(card => {
        skillObserver.observe(card);
    });
    if (!document.getElementById('progress-gradient-def')) {
        const svgDef = `
            <svg class="hidden-svg" id="progress-gradient-def">
                <defs>
                    <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:var(--secondary-glow)" />
                        <stop offset="100%" style="stop-color:var(--primary-glow)" />
                    </linearGradient>
                </defs>
            </svg>`;
        document.body.insertAdjacentHTML('beforeend', svgDef);
    }
    const experienceCards = document.querySelectorAll('.experience-card');
    if (window.matchMedia("(min-width: 769px)").matches) {
        experienceCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const { width, height } = rect;
                const rotateX = (y - height / 2) / (height / 2) * -7; 
                const rotateY = (x - width / 2) / (width / 2) * 7;   
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }
});
