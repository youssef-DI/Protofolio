// --- Mobile Navigation Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');

    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Close mobile nav when a link is clicked
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    }
});

// --- GSAP Animations ---
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('.hero-content h1', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.2 });
gsap.from('.hero-content .subtitle', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.4 });
gsap.from('.hero-content p', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.6 });
gsap.from('.hero-content .cta-button', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.8 });

// Staggered reveal for sections
const sections = gsap.utils.toArray('section');
sections.forEach((section, i) => {
    if (i > 0) { // Skip hero section
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
        });
    }
});

// Staggered reveal for skill items
gsap.from('.skill-item', {
    scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
});

// Staggered reveal for project cards
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power3.out',
});


// --- Particles.js Initialization ---
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FFD700"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#E4C57A",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});