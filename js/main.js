
    // Typewriter Animation
    const typewriterText = "Hi, I'm Youssef";
    const typewriterElement = document.getElementById('typewriter-text');
    let i = 0;
    let isDeleting = false;
    let currentText = '';

    function typeWriter() {
      if (!isDeleting && i <= typewriterText.length) {
        currentText = typewriterText.slice(0, i);
        typewriterElement.textContent = currentText;
        i++;
        setTimeout(typeWriter, 150);
      } else if (isDeleting && i >= 0) {
        currentText = typewriterText.slice(0, i);
        typewriterElement.textContent = currentText;
        i--;
        setTimeout(typeWriter, 100);
      } else if (!isDeleting && i > typewriterText.length) {
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
      } else if (isDeleting && i < 0) {
        setTimeout(() => {
          isDeleting = false;
          i = 0;
          typeWriter();
        }, 1000);
      }
    }

    // Start typewriter animation when page loads
    window.addEventListener('load', () => {
      setTimeout(typeWriter, 1000);
    });

    // Create floating particles
    function createParticles() {
      const particlesContainer = document.querySelector('.particles');
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        // Random colors
        const colors = ['#00ffff', '#ff0080', '#8a2be2'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
      }
    }

    // Initialize particles
    createParticles();

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a, .cta-button[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Active nav link highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
          link.classList.add('active');
        }
      });
    });

    // Form submission with futuristic feedback
    function handleSubmit(event) {
      event.preventDefault();
      const button = event.target.querySelector('button');
      const originalText = button.innerHTML;
      
      // Animate button
      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
      button.style.background = 'linear-gradient(135deg, #8a2be2, #00ffff)';
      
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        button.style.background = 'linear-gradient(135deg, #00ff00, #00ffff)';
        
        setTimeout(() => {
          button.innerHTML = originalText;
          button.style.background = '';
          event.target.reset();
        }, 2000);
      }, 2000);
    }

    // Add glitch effect to brand on hover
    const brand = document.querySelector('.brand');
    brand.addEventListener('mouseenter', () => {
      brand.style.animation = 'glitch 0.3s ease-in-out';
    });
    
    brand.addEventListener('animationend', () => {
      brand.style.animation = '';
    });

    // Add glitch keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
      }
    `;
    document.head.appendChild(style);
