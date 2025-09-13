document.addEventListener('DOMContentLoaded', () => {

    // --- SETUP ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    // === THEME TOGGLE ===
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    };
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    // === OPTIMIZED CUSTOM CURSOR ===
    let mouseX = 0, mouseY = 0;
    
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        cursorOutline.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    document.querySelectorAll('a, button, .theme-toggle').forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
    });

    // === TYPING ANIMATION ===
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const textToType = "Hi, I'm Kumarran!";
        let charIndex = 0;
        const type = () => {
            if (charIndex < textToType.length) {
                typingTextElement.textContent = textToType.slice(0, charIndex + 1);
                charIndex++;
                setTimeout(type, 120);
            } else {
                typingTextElement.innerHTML = textToType + '<span class="cursor"></span>';
            }
        };
        type();
    }

    // === NAVBAR SCROLL EFFECT ===
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // === ROBUST INTERSECTION OBSERVER FOR STAGGERED ANIMATIONS ===
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const itemsToStagger = entry.target.querySelectorAll('.project-card, .skill-category, .activity-card');
                itemsToStagger.forEach((item, index) => {
                    item.style.transitionDelay = `${index * 100}ms`;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(section => observer.observe(section));

    // === ROBUST HAMBURGER MENU & SCROLL LOCK FIX ===
    const toggleMenu = (forceClose = false) => {
        const isActive = mobileNav.classList.contains('is-active');
        if (forceClose || isActive) {
            mobileNav.classList.remove('is-active');
            hamburger.classList.remove('is-active');
            document.body.style.overflow = '';
        } else {
            mobileNav.classList.add('is-active');
            hamburger.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        }
    };
    hamburger.addEventListener('click', () => toggleMenu());
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(true)));

    const resizeObserver = new ResizeObserver(entries => {
        if (window.innerWidth > 768 && mobileNav.classList.contains('is-active')) {
            toggleMenu(true);
        }
    });
    resizeObserver.observe(document.body);

    // === OPTIMIZED HERO CANVAS ANIMATION ===
    const setupCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 20000), 100);
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width, y: Math.random() * canvas.height,
                vx: Math.random() * 0.4 - 0.2, vy: Math.random() * 0.4 - 0.2,
                radius: Math.random() * 1.5 + 0.5
            });
        }
    };

    const animateCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
        const particleColor = isLightTheme ? 'rgba(45, 55, 72, 0.5)' : 'rgba(160, 174, 192, 0.5)';
        const lineColor = isLightTheme ? 'rgba(45, 55, 72, 0.1)' : 'rgba(160, 174, 192, 0.1)';

        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.fill();
        });

        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                if (Math.sqrt(dx * dx + dy * dy) < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateCanvas);
    };

    window.addEventListener('resize', setupCanvas);
    setupCanvas();
    animateCanvas();
});