// ===========================
// Mobile Navigation Toggle
// Basic state management + interactivity
// ===========================

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav when a link is clicked (better UX)
const navLinks = siteNav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===========================
// CTA Button interaction (simple example)
// ===========================
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// ===========================
// Dark / Light Mode Toggle
// State management: uses body class, no localStorage
// ===========================
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
});

// ===========================
// Active Nav Link Highlight on Scroll
// Uses IntersectionObserver to detect which section is in view
// ===========================
const sections = document.querySelectorAll('main section, main .hero');
const navLinkEls = document.querySelectorAll('.nav-link');

const observerOptions = {
  root: null,
  rootMargin: '-40% 0px -50% 0px', // triggers when section is roughly centered
  threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));