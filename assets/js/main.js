/* ============================================
   Julián Ospina Posada - Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Nav on Scroll ---
    const nav = document.querySelector('.nav');
    if (nav) {
        const onScroll = () => {
            nav.classList.toggle('scrolled', window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // --- Mobile Menu ---
    const toggle = document.querySelector('.nav__toggle');
    const mobileMenu = document.querySelector('.nav__mobile');
    const overlay = document.querySelector('.nav__overlay');

    function openMenu() {
        toggle.classList.add('active');
        mobileMenu.classList.add('open');
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        toggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
    }

    if (toggle && mobileMenu && overlay) {
        toggle.addEventListener('click', () => {
            mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
        });
        overlay.addEventListener('click', closeMenu);
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // --- Active Nav Link ---
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
            link.classList.add('active');
        } else if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) {
            link.classList.add('active');
        }
    });

    // --- Scroll Animations (Intersection Observer) ---
    const animatedEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .stagger');

    if (animatedEls.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        animatedEls.forEach(el => observer.observe(el));
    } else {
        // Fallback: show everything if no IntersectionObserver
        animatedEls.forEach(el => el.classList.add('visible'));
    }

    // --- Filter Tabs (used in logros and blog) ---
    document.querySelectorAll('.filters').forEach(filterContainer => {
        const buttons = filterContainer.querySelectorAll('.filter-btn');
        const targetGrid = filterContainer.nextElementSibling;

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                if (!targetGrid) return;

                const cards = targetGrid.querySelectorAll('[data-category]');
                cards.forEach(card => {
                    if (filter === 'todos' || card.dataset.category === filter) {
                        card.style.display = '';
                        // Re-trigger animation
                        card.classList.remove('visible');
                        void card.offsetWidth;
                        card.classList.add('visible');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    });

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
