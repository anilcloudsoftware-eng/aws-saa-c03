/**
 * AWS Learning Portal — app.js
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

/* ============================================================
   1. Navigation Module
   ============================================================ */
const Navigation = (() => {

  const navbar     = document.querySelector('.navbar');
  const hamburger  = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const navLinks   = document.querySelectorAll('.navbar__link');

  /** Sticky scroll — add .scrolled class after 10px */
  function onScroll() {
    if (!navbar) return;
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveSection();
  }

  /** Hamburger toggle */
  function toggleMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    // Prevent body scroll when menu open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  /** Close mobile menu (used on link click or outside click) */
  function closeMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /** Highlight nav link matching the current section in view */
  function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id], div[id]');
    let current = '';

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= 100) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (href === `#${current}` || (current === '' && href === '#')) {
        link.classList.add('active');
      }
    });
  }

  /** Close menu when clicking outside */
  function onDocumentClick(e) {
    if (!navbar) return;
    if (!navbar.contains(e.target)) {
      closeMobileMenu();
    }
  }

  function init() {
    if (!navbar) return;

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    if (hamburger) {
      hamburger.addEventListener('click', toggleMobileMenu);
      hamburger.setAttribute('aria-label', 'Toggle navigation');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-controls', 'mobile-menu');
    }

    // Close menu when a mobile link is clicked
    document.querySelectorAll('.navbar__mobile-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', onDocumentClick);

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  return { init };
})();


/* ============================================================
   2. Scroll Animations Module (Intersection Observer)
   ============================================================ */
const ScrollAnimations = (() => {

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  function onIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }

  function init() {
    // Check browser support
    if (!('IntersectionObserver' in window)) {
      // Fallback: make everything visible
      document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(onIntersect, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  return { init };
})();


/* ============================================================
   3. Progress Bar Animations Module
   ============================================================ */
const ProgressBars = (() => {

  function animateBar(bar) {
    const target = bar.dataset.width || '0';
    // Set initial width to 0, then animate
    bar.style.width = '0%';
    // Small delay so the CSS transition fires
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.width = target + '%';
      });
    });
  }

  function init() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.hero__progress-fill').forEach(bar => {
        const target = bar.dataset.width || '0';
        bar.style.width = target + '%';
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

    document.querySelectorAll('.hero__progress-list').forEach(el => {
      observer.observe(el);
    });
  }

  return { init };
})();


/* ============================================================
   4. Service Card Filter Module
   ============================================================ */
const ServiceFilter = (() => {

  function init() {
    const filterContainer = document.querySelector('.services__filter');
    if (!filterContainer) return;

    const tabs   = filterContainer.querySelectorAll('.filter-tab');
    const cards  = document.querySelectorAll('.service-card');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter || 'all';

        cards.forEach(card => {
          if (filter === 'all') {
            card.style.display = '';
          } else {
            const category = card.dataset.category || '';
            card.style.display = category === filter ? '' : 'none';
          }
        });
      });
    });
  }

  return { init };
})();


/* ============================================================
   5. Last Updated Timestamp
   ============================================================ */
const Timestamp = (() => {

  function formatDate(date) {
    const options = {
      year:  'numeric',
      month: 'long',
      day:   'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  }

  function init() {
    const el = document.getElementById('last-updated');
    if (!el) return;
    el.textContent = formatDate(new Date());
  }

  return { init };
})();


/* ============================================================
   6. Smooth Scroll Module
   ============================================================ */
const SmoothScroll = (() => {

  function init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        const navHeight = parseInt(
          getComputedStyle(document.documentElement)
            .getPropertyValue('--nav-height') || '68',
          10
        );

        const targetTop = target.getBoundingClientRect().top
          + window.scrollY
          - navHeight
          - 32; // extra breathing room

        window.scrollTo({
          top:      targetTop,
          behavior: 'smooth'
        });
      });
    });
  }

  return { init };
})();


/* ============================================================
   7. Keyboard Accessibility
   ============================================================ */
const Accessibility = (() => {

  /** Show focus rings only when navigating via keyboard */
  function init() {
    let usingKeyboard = false;

    document.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        usingKeyboard = true;
        document.body.classList.add('keyboard-nav');
      }
    });

    document.addEventListener('mousedown', () => {
      usingKeyboard = false;
      document.body.classList.remove('keyboard-nav');
    });

    // Add keyboard-nav CSS inline (no extra file needed)
    const style = document.createElement('style');
    style.textContent = `
      body:not(.keyboard-nav) *:focus {
        outline: none;
      }
      body.keyboard-nav *:focus-visible {
        outline: 2px solid var(--color-aws-orange);
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  return { init };
})();


/* ============================================================
   8. Init — bootstrap all modules on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  ScrollAnimations.init();
  ProgressBars.init();
  ServiceFilter.init();
  Timestamp.init();
  SmoothScroll.init();
  Accessibility.init();
});
