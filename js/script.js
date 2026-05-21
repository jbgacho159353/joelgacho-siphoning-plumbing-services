/* ============================================================
   MALABANAN SIPHONING & PLUMBING — MAIN SCRIPT
   ============================================================ */

(function () {
  'use strict';

  /* ---- Sticky header + back-to-top ---- */
  var header    = document.getElementById('site-header');
  var backToTop = document.getElementById('back-to-top');

  function onScroll() {
    var y = window.scrollY;
    if (header)    header.classList.toggle('scrolled', y > 20);
    if (backToTop) backToTop.classList.toggle('visible', y > 400);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Back to top ---- */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Hamburger / Mobile nav ---- */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav-overlay');

  function toggleMenu(open) {
    if (!hamburger || !mobileNav) return;
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      toggleMenu(!mobileNav.classList.contains('open'));
    });
  }

  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { toggleMenu(false); });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      toggleMenu(false);
      document.querySelectorAll('.has-dropdown.open').forEach(function (el) {
        el.classList.remove('open');
      });
    }
  });

  /* ---- Desktop dropdown click-toggle (touch & keyboard fallback) ---- */
  document.querySelectorAll('.has-dropdown > a').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      var parent = trigger.closest('.has-dropdown');
      var isOpen = parent.classList.contains('open');
      /* Close all other open dropdowns */
      document.querySelectorAll('.has-dropdown.open').forEach(function (el) {
        el.classList.remove('open');
      });
      if (!isOpen) {
        parent.classList.add('open');
        e.preventDefault();
      }
    });
  });

  /* Close dropdowns when clicking outside */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown.open').forEach(function (el) {
        el.classList.remove('open');
      });
    }
  });

  /* ---- Smooth scroll for same-page anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });

  /* ---- Testimonial slider ---- */
  var slides = document.querySelectorAll('.testimonial-slide');
  var dots   = document.querySelectorAll('.slider-dots .dot');
  var currentSlide = 0;
  var autoSlide;

  function goToSlide(index) {
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goToSlide(parseInt(dot.dataset.slide, 10));
      resetAutoSlide();
    });
  });

  function resetAutoSlide() {
    clearInterval(autoSlide);
    if (slides.length > 1) {
      autoSlide = setInterval(function () { goToSlide(currentSlide + 1); }, 5000);
    }
  }

  if (slides.length > 1) {
    resetAutoSlide();
    var sliderWrapper = document.querySelector('.testimonial-slider-wrapper');
    if (sliderWrapper) {
      sliderWrapper.addEventListener('mouseenter', function () { clearInterval(autoSlide); });
      sliderWrapper.addEventListener('mouseleave', resetAutoSlide);
    }
  }

  /* ---- Video modal ---- */
  var modal       = document.getElementById('video-modal');
  var modalIframe = document.getElementById('modal-iframe');
  var modalClose  = document.getElementById('modal-close');
  var backdrop    = document.getElementById('video-modal-backdrop');

  function openModal(src) {
    if (!modal || !modalIframe) return;
    modalIframe.src = src + '?autoplay=1';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (modalClose) modalClose.focus();
  }

  function closeModal() {
    if (!modal || !modalIframe) return;
    modal.classList.remove('open');
    modalIframe.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.video-card').forEach(function (card) {
    card.addEventListener('click', function () { openModal(card.dataset.video); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.video); }
    });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    var company = card.querySelector('.video-company');
    card.setAttribute('aria-label', 'Play video' + (company ? ' for ' + company.textContent : ''));
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (backdrop)   backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  var FORMSUBMIT_URL = 'https://formsubmit.co/ajax/joelgacho.ffseo@gmail.com';

  /* ---- Hero quote form ---- */
  var heroForm    = document.getElementById('hero-quote-form');
  var heroSuccess = document.getElementById('hero-form-success');

  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = heroForm.querySelector('button[type="submit"]');
      var originalText = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      var data = {};
      new FormData(heroForm).forEach(function(v, k) { if (!k.startsWith('_')) data[k] = v; });
      data['_subject'] = 'New Quote Request — Joel Gacho Plumbing';
      fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function () {
        heroForm.style.display = 'none';
        if (heroSuccess) heroSuccess.style.display = 'flex';
      })
      .catch(function () {
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
      });
    });
  }

  /* ---- Contact form ---- */
  var contactForm = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var required = contactForm.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function (field) {
        field.style.borderColor = '';
        if (!field.value.trim()) { field.style.borderColor = '#e53e3e'; valid = false; }
      });
      if (!valid) {
        if (formSuccess) { formSuccess.textContent = 'Please fill in all required fields.'; formSuccess.style.color = '#e53e3e'; }
        return;
      }
      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      var data = {};
      new FormData(contactForm).forEach(function(v, k) { if (!k.startsWith('_')) data[k] = v; });
      data['_subject'] = 'New Appointment Request — Joel Gacho Plumbing';
      fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function () {
        if (formSuccess) { formSuccess.textContent = '✓ Thank you! We will contact you shortly to confirm your appointment.'; formSuccess.style.color = '#1a7a3c'; }
        contactForm.reset();
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
      })
      .catch(function () {
        if (formSuccess) { formSuccess.textContent = 'Something went wrong. Please try again or call us directly.'; formSuccess.style.color = '#e53e3e'; }
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
      });
    });
  }

  /* ---- Newsletter form ---- */
  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = this.querySelector('input[type="email"]');
      if (!input || !input.value.trim()) return;
      input.value = '';
      var btn = this.querySelector('button');
      if (!btn) return;
      var orig = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.disabled = true;
      setTimeout(function () { btn.textContent = orig; btn.disabled = false; }, 3000);
    });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item    = btn.closest('.faq-item');
      var answer  = item.querySelector('.faq-answer');
      var isOpen  = btn.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-question.open').forEach(function (ob) {
        ob.classList.remove('open');
        var oa = ob.closest('.faq-item').querySelector('.faq-answer');
        if (oa) oa.classList.remove('open');
      });

      // Open clicked (unless it was already open)
      if (!isOpen) {
        btn.classList.add('open');
        if (answer) answer.classList.add('open');
      }
    });
  });

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Scroll-in animations ---- */

  function sr(el, type, delaySec) {
    if (!el || el.closest('.hero-section')) return;
    el.classList.add('sr', 'sr-' + (type || 'up'));
    if (delaySec) el.style.transitionDelay = delaySec + 's';
  }

  function srGrid(selector, type) {
    document.querySelectorAll(selector).forEach(function (el, i) {
      sr(el, type || 'up', (i % 4) * 0.10);
    });
  }

  /* Section labels */
  document.querySelectorAll('section:not(.hero-section) .section-eyebrow, .page-hero .section-eyebrow').forEach(function (el) {
    sr(el, 'scale');
  });

  /* Section headings + subtext */
  document.querySelectorAll('section:not(.hero-section) .section-heading h2, section:not(.hero-section) h2.section-title, .page-hero h1').forEach(function (el) {
    sr(el, 'up', 0.08);
  });
  document.querySelectorAll('section:not(.hero-section) .section-sub, .page-hero-sub').forEach(function (el) {
    sr(el, 'up', 0.18);
  });

  /* Two-column image + content */
  document.querySelectorAll('.problems-image').forEach(function (el) { sr(el, 'left'); });
  document.querySelectorAll('.problems-content').forEach(function (el) { sr(el, 'right', 0.12); });
  document.querySelectorAll('.testimonial-image').forEach(function (el) { sr(el, 'left'); });
  document.querySelectorAll('.testimonial-slider-wrapper').forEach(function (el) { sr(el, 'right', 0.1); });
  document.querySelectorAll('.content-img').forEach(function (el) { sr(el, 'left'); });

  /* Card grids — staggered */
  srGrid('.why-grid .why-card');
  srGrid('.services-grid .service-card');
  srGrid('.areas-grid .area-card');
  srGrid('.blog-grid .blog-card');
  srGrid('.team-videos .video-card');
  srGrid('.feature-grid .feature-card');
  srGrid('.svc-overview-grid .svc-overview-card');
  srGrid('.area-overview-grid .area-overview-card');
  srGrid('.step-grid .step-item');
  srGrid('.team-grid .team-card');
  srGrid('.client-cards-grid .client-card');
  srGrid('.trust-grid .trust-item', 'scale');
  srGrid('.hero-stats .hero-stat', 'scale');

  /* Lists */
  document.querySelectorAll('.faq-list .faq-item').forEach(function (el, i) {
    sr(el, 'up', Math.min(i, 3) * 0.07);
  });
  document.querySelectorAll('.problems-list li').forEach(function (el, i) {
    sr(el, 'left', i * 0.07);
  });

  /* CTA + misc */
  document.querySelectorAll('.cta-banner, .inner-section-alt').forEach(function (el) { sr(el, 'up'); });
  document.querySelectorAll('.contact-info-block').forEach(function (el, i) { sr(el, 'up', i * 0.08); });

  /* Legacy .fade-up not yet processed */
  document.querySelectorAll('.fade-up:not(.sr)').forEach(function (el) { sr(el, 'up'); });

  /* Observe all .sr elements */
  if ('IntersectionObserver' in window) {
    var srObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('sr-visible');
          srObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.sr').forEach(function (el) { srObserver.observe(el); });
  } else {
    document.querySelectorAll('.sr').forEach(function (el) { el.classList.add('sr-visible'); });
  }

})();
