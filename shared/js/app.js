/**
 * Cloud Learning Portal — app.js
 * Shared across all certifications: AWS SAA-C03, CKA, AWS ML, etc.
 * ============================================================
 * Modules:
 *  1. Navigation (sticky scroll, hamburger, active links)
 *  2. Scroll Animations (Intersection Observer fade-in)
 *  3. Progress Bar Animations
 *  4. Service Card Filter
 *  5. Last Updated Timestamp
 *  6. Smooth Scroll
 *  7. Keyboard Accessibility
 *  8. Init
 * ============================================================
 */

'use strict';

const Navigation = (() => {
  const navbar     = document.querySelector('.navbar');
  const hamburger  = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const navLinks   = document.querySelectorAll('.navbar__link');

  function onScroll() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 10);
    highlightActiveSection();
  }

  function toggleMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id], div[id]');
    let current = '';
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= 100) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (href === `#${current}` || (current === '' && href === '#')) {
        link.classList.add('active');
      }
    });
  }

  function init() {
    if (!navbar) return;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (hamburger) {
      hamburger.addEventListener('click', toggleMobileMenu);
      hamburger.setAttribute('aria-label', 'Toggle navigation');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-controls', 'mobile-menu');
    }
    document.querySelectorAll('.navbar__mobile-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    document.addEventListener('click', e => {
      if (navbar && !navbar.contains(e.target)) closeMobileMenu();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  return { init };
})();

const ScrollAnimations = (() => {
  function init() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }
  return { init };
})();

const ProgressBars = (() => {
  function animateBar(bar) {
    const target = bar.dataset.width || '0';
    bar.style.width = '0%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      bar.style.width = target + '%';
    }));
  }
  function init() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.hero__progress-fill').forEach(bar => {
        bar.style.width = (bar.dataset.width || '0') + '%';
      });
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.hero__progress-fill').forEach(animateBar);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.hero__progress-list').forEach(el => observer.observe(el));
  }
  return { init };
})();

const ServiceFilter = (() => {
  function init() {
    const filterContainer = document.querySelector('.services__filter');
    if (!filterContainer) return;
    const tabs  = filterContainer.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.service-card');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter || 'all';
        cards.forEach(card => {
          card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
        });
      });
    });
  }
  return { init };
})();

const Timestamp = (() => {
  function init() {
    const el = document.getElementById('last-updated');
    if (el) el.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return { init };
})();

const SmoothScroll = (() => {
  function init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '68', 10);
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navHeight - 32, behavior: 'smooth' });
      });
    });
  }
  return { init };
})();

const Accessibility = (() => {
  function init() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Tab') document.body.classList.add('keyboard-nav');
    });
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });
    const style = document.createElement('style');
    style.textContent = `
      body:not(.keyboard-nav) *:focus { outline: none; }
      body.keyboard-nav *:focus-visible { outline: 2px solid var(--color-aws-orange); outline-offset: 2px; }
    `;
    document.head.appendChild(style);
  }
  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  ScrollAnimations.init();
  ProgressBars.init();
  ServiceFilter.init();
  Timestamp.init();
  SmoothScroll.init();
  Accessibility.init();
  // Footer year
  const fy = document.getElementById('footer-year');
  if (fy) fy.textContent = new Date().getFullYear();
});
