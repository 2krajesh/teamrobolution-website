document.addEventListener('DOMContentLoaded', function () {
    const animateElements = () => {
        animateHero();
        animateHeadings();
        animateCards();
        animateLogos();
        animateForm();
    };

    const isInViewport = (element, offset = 0) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
            rect.bottom >= 0 + offset
        );
    };

    const animateHero = () => {
        const heroHeading = document.querySelector('.hero h1');
        const heroText = document.querySelector('.hero p');

        if (isInViewport(heroHeading, 100)) {
            heroHeading.classList.add('animate-in');
            heroText.classList.add('animate-in');
        } else {
            heroHeading.classList.remove('animate-in');
            heroText.classList.remove('animate-in');
        }
    };

    const animateHeadings = () => {
        document.querySelectorAll('h2').forEach((heading) => {
            if (isInViewport(heading, 100)) {
                heading.classList.add('animate-in');
            } else {
                heading.classList.remove('animate-in');
            }
        });
    };

    const animateCards = () => {
        document.querySelectorAll('.card').forEach((card, index) => {
            if (isInViewport(card, 100)) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 150 * index);
            } else {
                card.style.opacity = '0';
                card.style.transform = index % 2 === 0 ? 'translateX(50px)' : 'translateX(-50px)';
            }
        });
    };

    const animateLogos = () => {
        document.querySelectorAll('.logo-placeholder').forEach((logo, index) => {
            if (isInViewport(logo, 100)) {
                setTimeout(() => {
                    logo.style.opacity = '1';
                }, 100 * index);
            } else {
                logo.style.opacity = '0';
            }
        });
    };

    const animateForm = () => {
        const form = document.querySelector('.waitlist-form');
        if (form && isInViewport(form, 100)) {
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
        } else if (form) {
            form.style.opacity = '0';
            form.style.transform = 'translateY(50px)';
        }
    };

    // Scroll listener
    window.addEventListener('scroll', animateElements);

    // Initial run
    animateElements();

    // Waitlist form interaction
    const form = document.querySelector('.waitlist-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.textContent = 'Thank You!';
            btn.style.background = '#00c4cc';
            setTimeout(() => {
                btn.textContent = 'Join Waitlist';
                btn.style.background = 'var(--primary)';
            }, 2000);
        });
    }
});
