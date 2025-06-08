document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
            document.body.style.overflowY = 'auto';
        }, 1000); 
    });
    document.body.style.overflowY = 'hidden';
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    let cursorTimeout;

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
        }, 1000);
    });

    document.querySelectorAll('a, button, .social-icon, .skill-card, .experience-card').forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(0, 225, 255, 0.2)';
        });
        el.addEventListener('mouseout', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'rgba(0, 225, 255, 0.1)';
        });
    });
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
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
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
    }, {
        threshold: 0.5
    });

    skillCards.forEach(card => {
        skillObserver.observe(card);
        if (!document.getElementById('progress-gradient-def')) {
            const svgDef = `
                <svg class="hidden-svg" id="progress-gradient-def">
                    <defs>
                        <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:rgb(0, 225, 255);stop-opacity:1" />
                            <stop offset="100%" style="stop-color:rgb(180, 50, 255);stop-opacity:1" />
                        </linearGradient>
                    </defs>
                </svg>`;
            document.body.insertAdjacentHTML('beforeend', svgDef);
        }
    });
    const experienceCards = document.querySelectorAll('.experience-card');

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

});
