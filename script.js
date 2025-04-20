/* ==========================================
   VARIABLES & BASE SETTINGS
   ========================================== */
   :root {
    --primary: #00c8ff;
    --primary-dark: #8ac0ef;
    --accent: #11ffbd;
    --accent-dark: #09d2a0;
    --highlight: #ff3860;
    --dark: #0a0a0a;
    --darker: #050505;
    --light: #ffffff;
    --light-gray: #f0f0f0;
    --mid-gray: #555;
    --dark-gray: #222;
    --box-shadow: rgba(0, 0, 0, 0.2);
    --glow-shadow: rgba(0, 200, 255, 0.3);
    --spacing: 2rem;
    --border-radius: 10px;
    --transition-speed: 0.3s;
  }
  
  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Font Settings */
  @font-face {
    font-family: 'Iceland';
    src: url('https://fonts.googleapis.com/css2?family=Iceland&display=swap') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  
  /* Base Typography */
  body {
    font-family: 'Orbitron', 'Iceland', 'Roboto', sans-serif;
    background-color: var(--dark);
    color: var(--light);
    overflow-x: hidden;
    line-height: 1.5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', 'Iceland', sans-serif;
    color: var(--primary);
    margin-bottom: 0.5em;
  }
  
  p, a, button, input, label {
    font-family: 'Orbitron', 'Iceland', sans-serif;
    color: var(--light);
  }
  
  a {
    text-decoration: none;
    color: inherit;
    transition: color var(--transition-speed) ease;
  }
  
  a:hover {
    color: var(--primary);
  }
  
  /* ==========================================
     NAVIGATION
     ========================================== */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1.2rem;
    background-color: rgba(5, 5, 5, 0.9);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    border-bottom: 1px solid rgba(0, 200, 255, 0.2);
    backdrop-filter: blur(10px);
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .logo {
    width: 60px;
    height: 60px;
  }
  
  .brand-name {
    font-size: 2.2rem;
    color: var(--primary);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .nav-links {
    font-size: 1.1rem;
    list-style: none;
    display: flex;
    gap: var(--spacing);
  }
  
  .nav-links a {
    color: var(--light);
    transition: color var(--transition-speed) ease, text-shadow var(--transition-speed) ease;
    position: relative;
  }
  
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width var(--transition-speed) ease;
  }
  
  .nav-links a:hover {
    color: var(--primary);
    text-shadow: 0 0 10px var(--glow-shadow);
  }
  
  .nav-links a:hover::after,
  .nav-links .active::after {
    width: 100%;
  }
  
  .nav-links .active {
    color: var(--primary);
    text-shadow: 0 0 10px var(--glow-shadow);
  }
  
  /* ==========================================
     HERO SECTION
     ========================================== */
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    margin-top: 80px;
    overflow: hidden;
  }
  
  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
  }
  /*Main Heading Name*/
  .hero h1 {
    font-size: 5rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    text-shadow: 0 0 10px var(--primary-dark);
    animation: text-glow 3s infinite;
  }
  
  .hero p {
    font-size: 1.5rem;
    color: var(--light);
    margin-top: -1.5rem;
  }
  
  /* ==========================================
     SECTION STYLING
     ========================================== */
  section {
    padding: 8rem 2rem;
    position: relative;
    overflow: hidden;
  }
  
  section::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.8) 0%, rgba(5, 5, 5, 0.9) 100%);
    z-index: -1;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary);
    text-align: center;
    position: relative;
    transition: all 0.8s ease;
  }
  
  h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--primary);
    box-shadow: 0 0 10px var(--primary);
  }
  
  /* ==========================================
     CAPABILITIES/CARD SECTION
     ========================================== */
  .capabilities {
    padding: 60px 20px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
  }
  
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }
  
  .card {
    background: rgba(10, 20, 30, 0.3);
    padding: var(--spacing);
    border-radius: var(--border-radius);
    transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
    box-shadow: 0 5px 15px var(--box-shadow);
    border: 1px solid rgba(0, 200, 255, 0.1);
    backdrop-filter: blur(5px);
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px var(--glow-shadow);
    border-color: rgba(0, 200, 255, 0.3);
  }
  
  .card i {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 2.5rem;
    text-shadow: 0 0 10px var(--glow-shadow);
  }
  
  .card h3 {
    margin-bottom: 15px;
  }
  
  .card p {
    font-size: 1em;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }
  
  /* ==========================================
     FACULTY, TEAM, PROJECTS & ALUMNI SECTION
     ========================================== */
  /* Common card styles */
  .faculty-container,
  .team-container,
  .projects-container,
  .alumni-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .faculty-card,
  .team-card,
  .project-card,
  .alumni-card {
    width: 300px;
    background: rgba(10, 20, 30, 0.3);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform var(--transition-speed), box-shadow var(--transition-speed);
    position: relative;
    border: 1px solid rgba(0, 200, 255, 0.1);
    backdrop-filter: blur(5px);
  }
  
  .faculty-img-container,
  .team-img-container,
  .project-img-container,
  .alumni-img-container {
    height: 250px;
    overflow: hidden;
  }
  
  .faculty-img,
  .team-img,
  .project-img,
  .alumni-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  .faculty-details,
  .team-details,
  .project-details,
  .alumni-details {
    padding: 1.5rem;
    background: rgba(10, 15, 25, 0.85);
    backdrop-filter: blur(10px);
  }
  
  .faculty-card:hover,
  .team-card:hover,
  .project-card:hover,
  .alumni-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px var(--glow-shadow);
    border-color: var(--primary);
  }
  
  .faculty-card:hover .faculty-img,
  .team-card:hover .team-img,
  .project-card:hover .project-img,
  .alumni-card:hover .alumni-img {
    transform: scale(1.05);
  }
  
  .faculty-title,
  .team-title,
  .project-title,
  .alumni-title {
    color: var(--accent);
    font-style: italic;
    margin-bottom: 1rem;
  }
  
  .alumni-description {
    background: rgba(0, 200, 255, 0.05);
    padding: 15px;
    border-radius: 5px;
    border-left: 3px solid var(--primary);
    margin-top: 15px;
    color: var(--light);
  }
  
  .alumni-description p {
    margin: 0;
    font-style: italic;
  }
  
  /* View all links */
  .view-all-members,
  .view-all-alumni {
    margin-top: 2rem;
    text-align: center;
  }
  
  .view-all-link {
    display: inline-block;
    padding: 12px 30px;
    background: linear-gradient(90deg, var(--primary-dark), var(--primary));
    color: var(--dark);
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 30px;
    transition: all var(--transition-speed);
    border: none;
    box-shadow: 0 5px 15px rgba(0, 200, 255, 0.2);
  }
  
  .view-all-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 200, 255, 0.4);
    background: linear-gradient(90deg, var(--primary), var(--primary-dark));
  }
  
  /* Filter Button Styles */
  .filter-btn {
    background: linear-gradient(90deg, var(--primary-dark), var(--primary));
    color: var(--light);
    border: none;
    border-radius: var(--border-radius);
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    box-shadow: 0 4px 10px rgba(0, 200, 255, 0.2);
  }
  
  .filter-btn:hover,
  .filter-btn.active {
    background: linear-gradient(90deg, var(--dark), var(--darker));
    box-shadow: 0 6px 15px rgba(0, 200, 255, 0.4);
    transform: translateY(-3px);
  }
  
  /* Center LinkedIn Button */
  .alumni-social {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  /* Team Gallery Section */
.photo-section {
    padding: 4rem 0;
    background: rgba(0, 0, 0, 0.8);
}

.gallery-container {
    width: 100%;
    overflow: hidden;
    padding: 2rem 0;
}

.gallery-track {
    display: flex;
    animation: scroll 10s linear infinite;
}

.gallery-item {
    min-width: 400px;
    height: 300px;
    margin: 0 20px;
    position: relative;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.05);
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 255, 0.2);
}

.image-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    text-align: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-family: 'Orbitron', sans-serif;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

@media (max-width: 768px) {
    .gallery-item {
        min-width: 300px;
        height: 225px;
        margin: 0 10px;
    }
}

/* ==========================================
     GALLERY SECTION
     ========================================== */
  .logo-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
  }
  
  .logo-grid img {
    width: 300px;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform var(--transition-speed) ease;
    border: 1px solid rgba(0, 200, 255, 0.1);
  }
  
  .logo-grid img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px var(--glow-shadow);
    border-color: var(--primary);
  }
  
  /* ==========================================
     CONTACT SECTION
     ========================================== */
  .contact-section {
    text-align: center;
  }
  
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .contact-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing);
    margin-bottom: 3rem;
  }
  
  .contact-card {
    background: rgba(10, 20, 30, 0.3);
    padding: var(--spacing);
    border-radius: var(--border-radius);
    box-shadow: 0 5px 15px var(--box-shadow);
    width: 280px;
    transition: transform var(--transition-speed) ease;
    border: 1px solid rgba(0, 200, 255, 0.1);
    backdrop-filter: blur(5px);
  }
  
  .contact-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px var(--glow-shadow);
    border-color: var(--primary);
  }
  
  .contact-card i {
    font-size: 2rem;
    color: var (--primary);
    margin-bottom: 1rem;
    text-shadow: 0 0 5px var(--glow-shadow);
  }
  
  .contact-card h3 {
    margin: 0.5rem 0;
  }
  
  /* ==========================================
     FORM STYLES
     ========================================== */
  .waitlist-form {
    max-width: 500px;
    margin: 2rem auto;
    transition: all 1s ease;
    padding: 2rem;
    border-radius: var(--border-radius);
    background: rgba(10, 20, 30, 0.3);
    border: 1px solid rgba(0, 200, 255, 0.1);
    backdrop-filter: blur(5px);
  }
  
  input {
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--primary);
    border-radius: 5px;
    color: var(--light);
    transition: all var(--transition-speed) ease;
  }
  
  input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
  }
  
  button {
    background: var(--primary);
    color: var(--dark);
    padding: 1rem 3rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    transition: all var(--transition-speed) ease;
    margin-top: 1rem;
  }
  
  button:hover {
    background: var(--primary-dark);
    box-shadow: 0 0 15px var(--glow-shadow);
    transform: translateY(-3px);
  }
  
  /* Futuristic Button */
  .futuristic-btn {
    background: linear-gradient(90deg, var(--primary-dark), var(--primary));
    color: var(--dark);
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border-radius: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all var(--transition-speed) ease;
    cursor: pointer;
  }
  
  .futuristic-btn:hover {
    background: linear-gradient(90deg, var(--primary), var(--accent));
    box-shadow: 0 0 20px var(--glow-shadow);
    transform: translateY(-5px);
  }
  
  /* ==========================================
     FOOTER STYLES
     ========================================== */
  .footer {
    background: var(--dark);
    padding: 2rem 1rem;
    text-align: center;
    border-top: 1px solid rgba(0, 200, 255, 0.1);
  }
  
  .footer-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .footer-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .footer-logo {
    width: 50px;
    height: 50px;
  }
  
  .footer-brand-name {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
    text-transform: uppercase;
  }
  
  .footer-text {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #aaa;
  }
  
  .footer-social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .footer-social-links a {
    font-size: 1.5rem;
    color: var(--light);
    transition: all var(--transition-speed) ease;
  }
  
  .footer-social-links a:hover {
    color: var(--primary);
    transform: translateY(-3px);
    text-shadow: 0 0 10px var(--glow-shadow);
  }
  
  .footer-bottom {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  /* ==========================================
     BACKGROUND ELEMENTS
     ========================================== */
  /* Video Background */
  #background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2; /* Place behind all other elements */
  }
  
  /* Particle Background */
  .particle-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  
  .particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: var(--primary);
    border-radius: 50%;
    animation: float 10s infinite ease-in-out;
    box-shadow: 0 0 5px var(--glow-shadow);
  }
  
  /* Water ripple effect */
  #water-ripple {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  
  /* ==========================================
     ANIMATIONS
     ========================================== */
  /* Animation for particles */
  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-200px) translateX(100px);
      opacity: 0.3;
    }
    100% {
      transform: translateY(-400px) translateX(-100px);
      opacity: 0;
    }
  }
  
  /* Text glow animation */
  @keyframes text-glow {
    0% {
      text-shadow: 0 0 5px var(--primary), 0 0 10px var(--primary-dark);
    }
    50% {
      text-shadow: 0 0 15px var(--primary), 0 0 25px var(--primary-dark);
    }
    100% {
      text-shadow: 0 0 5px var(--primary), 0 0 10px var(--primary-dark);
    }
  }
  
  /* Futuristic hover effect */
  .futuristic-hover {
    position: relative;
    overflow: hidden;
    display: inline-block;
    transition: all var(--transition-speed) ease;
  }
  
  .futuristic-hover:hover {
    color: var(--primary);
    transform: translateY(-5px);
    text-shadow: 0 0 10px var (--glow-shadow);
  }
  
  /* Animation for sections as they scroll into view */
  .animate-in {
    animation: fadeInUp 0.8s ease forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* ==========================================
     RESPONSIVE STYLES
     ========================================== */
  @media (max-width: 1024px) {
    .hero h1 {
      font-size: 4rem;
    }
    
    section {
      padding: 6rem 1.5rem;
    }
    
    .card-grid {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 3rem;
    }
    
    section {
      padding: 5rem 1rem;
    }
    
    .navbar {
      padding: 0.8rem 1rem;
    }
    
    .brand-name {
      font-size: 1.5rem;
    }
    
    .nav-links {
      display: none; /* Mobile menu would require JS toggle */
    }
    
    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    
    .faculty-card,
    .team-card,
    .project-card,
    .alumni-card {
      width: 100%;
      max-width: 350px;
    }
    
    .contact-info {
      flex-direction: column;
      align-items: center;
    }
    
    .contact-card {
      width: 100%;
      max-width: 350px;
    }
  }
  
  @media (max-width: 480px) {
    .hero h1 {
      font-size: 2.5rem;
    }
    
    .hero p {
      font-size: 1.1rem;
    }
    
    .card {
      padding: 1.5rem;
    }
    
    .faculty-img-container,
    .team-img-container,
    .project-img-container,
    .alumni-img-container {
      height: 200px;
    }
    
    .waitlist-form {
      padding: 1.5rem;
    }
  }
/* Minimal Social Buttons Styling */
.alumni-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  color: var(--primary);
  font-size: 1.5rem;
  transition: transform 0.3s ease, text-shadow 0.3s ease;
}
.robot-animation {
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 100px;
  height: 100px;
  transform: translateY(0px);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.svg-robot {
  width: 100%;
  height: 100%;
}

/* Digital counter effect */
.counter-digit {
  display: inline-block;
  font-family: monospace;
  margin-right: 5px;
  min-width: 20px;
  text-align: center;
}

.alumni-social a:hover {
  transform: scale(1.1); /* Increase size by 10% */
  text-shadow: 0 0 10px var(--primary); /* Glow effect */
}
.section-title {
  position: relative;
  width: 100%;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #00e5ff;
  text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #00e5ff, transparent);
}

.club-description {
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #b0b0ff;
}
.tech-stat {
  display: flex;
  margin-top: 3rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-card {
  background: rgba(10, 20, 50, 0.7);
  border: 1px solid rgba(0, 200, 255, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  min-width: 180px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 229, 255, 0.2);
  border-color: #00e5ff;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(0, 229, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: all 0.8s ease;
  opacity: 0;
}

.stat-card:hover::before {
  animation: shine 1.5s;
}

@keyframes shine {
  0% {
    left: -100%;
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #00e5ff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.stat-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #90a0ff;
}

.cta-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #0050ff, #00e5ff);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
}

.cta-button:hover {
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.7);
  transform: scale(1.05);
}

.cta-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all 0.5s ease;
}

.cta-button:hover::after {
  left: 100%;
}

/* Team Intro Section */
.intro {
    padding: 6rem 2rem;
    background: rgba(10, 15, 25, 0.7);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.intro-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
}

.glow-text {
    font-size: 3.5rem;
    color: var(--primary);
    margin-bottom: 2rem;
    text-transform: uppercase;
    animation: glow 2s ease-in-out infinite alternate;
    font-family: 'Orbitron', sans-serif;
}

.intro-text {
    font-size: 1.4rem;
    line-height: 1.8;
    color: #e0e0ff;
    max-width: 900px;
    margin: 0 auto 3rem;
    text-shadow: 0 0 10px rgba(0, 200, 255, 0.2);
}

.tech-lines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.line {
    position: absolute;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
    animation: lineScan 3s linear infinite;
    opacity: 0.3;
}

.line:nth-child(1) { top: 20%; animation-delay: 0s; }
.line:nth-child(2) { top: 50%; animation-delay: 1s; }
.line:nth-child(3) { top: 80%; animation-delay: 2s; }

.tech-stats {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin: 3rem 0;
    flex-wrap: wrap;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary);
    text-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
    font-family: 'Orbitron', sans-serif;
}

.stat-label {
    font-size: 1rem;
    color: #a0a0ff;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cta-container {
    position: relative;
    display: inline-block;
    margin-top: 2rem;
}

.join-btn {
    padding: 1rem 3rem;
    font-size: 1.2rem;
    background: linear-gradient(45deg, var(--primary-dark), var(--primary));
    border: none;
    border-radius: 30px;
    color: var(--dark);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    z-index: 1;
}

.join-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.5);
}

.pulse-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 2px solid var(--primary);
    animation: pulse 2s infinite;
}

@keyframes glow {
    0% { text-shadow: 0 0 10px rgba(0, 200, 255, 0.5); }
    100% { text-shadow: 0 0 20px rgba(0, 200, 255, 0.8), 0 0 30px rgba(0, 200, 255, 0.6); }
}

@keyframes lineScan {
    0% { transform: translateY(0); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: translateY(20px); opacity: 0; }
}

@keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
}

/* Photo Gallery Page Styles */
.gallery-header {
    padding: 120px 2rem 2rem;
    text-align: center;
    background: rgba(10, 15, 25, 0.9);
}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.photo-item {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    aspect-ratio: 4/3;
    transform: translateY(50px);
    opacity: 0;
    transition: all 0.5s ease;
    cursor: pointer;
}

.photo-item.show {
    transform: translateY(0);
    opacity: 1;
}

.photo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.photo-overlay {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    color: var(--light);
    transition: bottom 0.3s ease;
}

.photo-item:hover img {
    transform: scale(1.1);
}

.photo-item:hover .photo-overlay {
    bottom: 0;
}

.photo-overlay h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
}

.photo-overlay p {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Event Categories Styling */
.event-categories {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.event-section {
    margin-bottom: 4rem;
    opacity: 1;
    transition: opacity 0.3s ease;
}

.event-section.hidden {
    display: none;
    opacity: 0;
}

.event-title {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
}

.event-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), transparent);
}

.event-description {
    color: #a0a0ff;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    max-width: 800px;
}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.photo-card {
    background: rgba(10, 15, 25, 0.7);
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(0, 200, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 200, 255, 0.3);
}

.photo-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.photo-card:hover img {
    transform: scale(1.05);
}

.photo-info {
    padding: 1.5rem;
    background: rgba(10, 15, 25, 0.9);
}

.photo-info h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.photo-info p {
    color: #a0a0ff;
    font-size: 0.9rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .event-title {
        font-size: 2rem;
    }
    
    .photo-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
    }
}
