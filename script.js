// =============================================
//   VELDORA DOOR SERVICES — JAVASCRIPT
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Hamburger Menu ----
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');

  hamburger?.addEventListener('click', () => {
    nav.classList.toggle('open');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger?.contains(e.target) && !nav?.contains(e.target)) {
      nav?.classList.remove('open');
      const icon = hamburger?.querySelector('i');
      if (icon) { icon.className = 'fas fa-bars'; }
    }
  });

  // ---- Sticky Header Shadow Enhancement ----
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // ---- Scroll Reveal Animation ----
  const revealElements = document.querySelectorAll(
    '.col-card, .problem-card, .promo-card, .testimonial-card, .stat-box, .about-badge'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ---- Contact Form Submission ----
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn?.textContent;
      if (btn) {
        btn.textContent = '✔ Request Sent!';
        btn.style.background = '#27ae60';
        btn.style.borderColor = '#27ae60';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.disabled = false;
          form.reset();
        }, 3000);
      }
    });
  });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = document.querySelector('.header')?.offsetHeight || 80;
        window.scrollTo({ top: target.offsetTop - headerH, behavior: 'smooth' });
        // Close mobile menu if open
        nav?.classList.remove('open');
      }
    });
  });

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        currentId = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

});
