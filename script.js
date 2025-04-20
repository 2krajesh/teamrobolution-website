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

    // Initialize gallery
    const initGallery = () => {
        const track = document.querySelector('.gallery-track');
        if (!track) return;

        // Check if images are loaded
        const images = track.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
            if (img.complete) {
                img.style.opacity = '1';
            }
        });

        // Reset animation when it ends
        track.addEventListener('animationend', () => {
            track.style.animation = 'none';
            track.offsetHeight; // Trigger reflow
            track.style.animation = null;
        });
    };

    initGallery();
});

// Particle Background Animation
const createParticles = () => {
  const particleBg = document.querySelector('.particle-bg');
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${5 + Math.random() * 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particleBg.appendChild(particle);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  createParticles();
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize water ripple effect
    initWaterRipple();
    
    // Initialize alumni filter
    initAlumniFilter();
    
    // Animate alumni cards on scroll
    animateAlumniCards();
    
    // Create particles for background
    createParticles();
  });
  
  // Water Ripple Effect
  function initWaterRipple() {
    const canvas = document.getElementById('water-ripple');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext('2d');
    let ripples = [];
    
    // Resize canvas when window resizes
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  
    // Add ripple on mouse move
    document.addEventListener('mousemove', (e) => {
      // Only create ripple every 50ms to avoid overwhelming
      if (!window.lastRippleTime || Date.now() - window.lastRippleTime > 50) {
        addRipple(e.clientX, e.clientY);
        window.lastRippleTime = Date.now();
      }
    });
  
    function addRipple(x, y) {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: 100,
        opacity: 0.5,
        borderWidth: 2
      });
    }
  
    function drawRipples() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ripples.forEach((ripple, i) => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${ripple.opacity})`;
        ctx.lineWidth = ripple.borderWidth;
        ctx.stroke();
        
        // Increase radius and decrease opacity
        ripple.radius += 2;
        ripple.opacity -= 0.01;
        
        // Remove ripple if it's too big or transparent
        if (ripple.radius > ripple.maxRadius || ripple.opacity <= 0) {
          ripples.splice(i, 1);
        }
      });
      
      requestAnimationFrame(drawRipples);
    }
    
    drawRipples();
  }
  
  // Alumni Filter Functionality
  function initAlumniFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const alumniCards = document.querySelectorAll('.alumni-card');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and add to clicked button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // Show/hide alumni cards based on filter
        alumniCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-year') === filter) {
            card.style.display = 'block';
            // Add a slight delay for a staggered animation effect
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 100 * Array.from(alumniCards).indexOf(card));
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // Animate alumni cards on scroll
  function animateAlumniCards() {
    const alumniCards = document.querySelectorAll('.alumni-card');

    const isInViewport = (element, offset = 0) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
            rect.bottom >= 0 + offset
        );
    };

    const animateCards = () => {
        alumniCards.forEach((card) => {
            if (isInViewport(card, 100)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
            }
        });
    };

    // Set initial state
    alumniCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease'; // Reduced transition duration
    });

    // Listen for scroll events
    window.addEventListener('scroll', animateCards);

    // Initial run
    animateCards();
  }

// Smooth scrolling for navigation links (FIXED)
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  // Highlight active navigation link on scroll
  const highlightActiveLink = () => {
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  };

  // Add scroll event listener
  window.addEventListener('scroll', highlightActiveLink);

  // Fixed smooth scrolling (only for same-page anchors)
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Only prevent default for anchor links (#home, #about, etc.)
      if (href.startsWith('#') && document.querySelector(href)) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // External links (index.html, all-members.html) work normally
    });
  });
});
        // Function to create floating particles for futuristic effect
        document.addEventListener('DOMContentLoaded', function() {
          const carouselContainer = document.querySelector('.carousel-container');
          
          // Create glowing particles
          for (let i = 0; i < 15; i++) {
              createParticle();
          }
          
          function createParticle() {
              const particle = document.createElement('div');
              particle.className = 'glow-particle';
              
              // Random positions
              const posX = Math.random() * carouselContainer.offsetWidth;
              const posY = Math.random() * carouselContainer.offsetHeight;
              
              particle.style.left = `${posX}px`;
              particle.style.top = `${posY}px`;
              
              // Random animation duration and delay
              const duration = 3 + Math.random() * 3;
              const delay = Math.random() * 5;
              
              particle.style.animationDuration = `${duration}s`;
              particle.style.animationDelay = `${delay}s`;
              
              carouselContainer.appendChild(particle);
              
              // Remove and recreate particles for continuous effect
              setTimeout(() => {
                  particle.remove();
                  createParticle();
              }, duration * 1000 + delay * 1000);
          }
      });
 // Create glitch effect on hover for section title
 const sectionTitle = document.querySelector('.glow-text');
 const originalText = sectionTitle.textContent;
 
 sectionTitle.addEventListener('mouseenter', () => {
   let glitchInterval = setInterval(() => {
     const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`";
     let glitchedText = '';
     
     for (let i = 0; i < originalText.length; i++) {
       if (Math.random() > 0.85) {
         glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
       } else {
         glitchedText += originalText[i];
       }
     }
     
     sectionTitle.textContent = glitchedText;
   }, 100);
   
   setTimeout(() => {
     clearInterval(glitchInterval);
     sectionTitle.textContent = originalText;
   }, 800);
 });
 // Digital counter animation for stat numbers
 const statNumbers = document.querySelectorAll('.stat-number');
    
 statNumbers.forEach(statNumber => {
   const digits = statNumber.querySelectorAll('.counter-digit');
   
   digits.forEach(digit => {
     const targetValue = parseInt(digit.textContent);
     let currentValue = 0;
     
     // Animate from 0 to target value
     const interval = setInterval(() => {
       if (currentValue < targetValue) {
         currentValue++;
         digit.textContent = currentValue;
       } else {
         clearInterval(interval);
       }
     }, 80);
   });
 });
