/* ============================================================
   Joel Gacho — SHARED HEADER & FOOTER INJECTOR
   Runs synchronously at bottom of <body> so both mounts exist.
   ============================================================ */
(function () {
  'use strict';

  var page = window.location.pathname.split('/').pop() || 'index.html';

  function active(file) {
    return page === file ? ' active' : '';
  }
  function activeGroup(files) {
    return files.indexOf(page) !== -1 ? ' active' : '';
  }

  var ABOUT_PAGES  = ['about-us.html','our-mission.html','our-vision.html','our-clients.html','faqs.html'];
  var SVC_PAGES    = ['our-services.html','manual-cleaning.html','siphoning.html','plumbing.html','declogging.html'];
  var AREA_PAGES   = ['our-service-areas.html','metro-manila.html','calabarzon.html','central-luzon.html','tacloban-city.html','iloilo-city.html','bacolod-city.html'];

  /* Logo SVG shared */
  var logoSVG = '\
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\
  <circle cx="24" cy="24" r="23" fill="#15803d" stroke="#111827" stroke-width="2"/>\
  <path d="M12 34 C12 28 16 24 20 22 L20 14 C20 12 22 10 24 10 C26 10 28 12 28 14 L28 18 C30 18 34 20 36 26 C38 32 34 38 28 38 L20 38 C15 38 12 36 12 34Z" fill="white" stroke="white" stroke-width="0.5"/>\
  <circle cx="24" cy="30" r="4" fill="#15803d"/>\
  <path d="M22 30 L26 30 M24 28 L24 32" stroke="white" stroke-width="1.5" stroke-linecap="round"/>\
</svg>';

  /* ---- HEADER ---- */
  var headerHTML = '\
<header class="site-header" id="site-header">\
\
  <!-- TOP WHITE BAR -->\
  <div class="header-top">\
    <div class="container header-top-inner">\
      <a href="index.html" class="logo header-logo-main" aria-label="Joel Gacho Home">\
        <div class="logo-icon">' + logoSVG + '</div>\
        <div class="logo-text">\
          <span class="logo-name">Joel Gacho</span>\
          <span class="logo-tagline">Siphoning &amp; Plumbing Services</span>\
        </div>\
      </a>\
      <div class="header-social">\
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="header-social-link" aria-label="Facebook">\
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>\
        </a>\
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="header-social-link" aria-label="Instagram">\
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>\
        </a>\
        <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer" class="header-social-link" aria-label="Telegram">\
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>\
        </a>\
      </div>\
    </div>\
  </div>\
\
  <!-- BOTTOM DARK NAV BAR -->\
  <div class="header-nav-bar">\
    <div class="container header-nav-inner">\
      <a href="index.html" class="logo header-logo-mobile" aria-label="Joel Gacho Home">\
        <div class="logo-icon" style="width:38px;height:38px">' + logoSVG + '</div>\
        <div class="logo-text">\
          <span class="logo-name" style="color:#fff">Joel Gacho</span>\
          <span class="logo-tagline" style="color:rgba(255,255,255,0.5)">Siphoning &amp; Plumbing</span>\
        </div>\
      </a>\
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">\
        <ul class="nav-list">\
          <li><a href="index.html" class="nav-link' + active('index.html') + '">Home</a></li>\
          <li class="has-dropdown">\
            <a href="about-us.html" class="nav-link' + activeGroup(ABOUT_PAGES) + '">About Us <span class="chevron">&#8964;</span></a>\
            <ul class="dropdown">\
              <li><a href="about-us.html">About Us</a></li>\
              <li><a href="our-mission.html">Our Mission</a></li>\
              <li><a href="our-vision.html">Our Vision</a></li>\
              <li><a href="our-clients.html">Our Clients</a></li>\
              <li><a href="faqs.html">FAQs</a></li>\
            </ul>\
          </li>\
          <li class="has-dropdown">\
            <a href="our-services.html" class="nav-link' + activeGroup(SVC_PAGES) + '">Our Services <span class="chevron">&#8964;</span></a>\
            <ul class="dropdown">\
              <li><a href="our-services.html">All Services</a></li>\
              <li><a href="manual-cleaning.html">Manual Cleaning</a></li>\
              <li><a href="siphoning.html">Siphoning</a></li>\
              <li><a href="plumbing.html">Plumbing</a></li>\
              <li><a href="declogging.html">Declogging</a></li>\
            </ul>\
          </li>\
          <li class="has-dropdown">\
            <a href="our-service-areas.html" class="nav-link' + activeGroup(AREA_PAGES) + '">Service Areas <span class="chevron">&#8964;</span></a>\
            <ul class="dropdown">\
              <li><a href="our-service-areas.html">All Areas</a></li>\
              <li><a href="metro-manila.html">Metro Manila</a></li>\
              <li><a href="calabarzon.html">Calabarzon</a></li>\
              <li><a href="central-luzon.html">Central Luzon</a></li>\
              <li><a href="tacloban-city.html">Tacloban City</a></li>\
              <li><a href="iloilo-city.html">Iloilo City</a></li>\
              <li><a href="bacolod-city.html">Bacolod City</a></li>\
            </ul>\
          </li>\
          <li><a href="blogs.html" class="nav-link' + active('blogs.html') + '">Blog</a></li>\
          <li><a href="contact-us.html" class="nav-link' + active('contact-us.html') + '">Contact Us</a></li>\
        </ul>\
      </nav>\
      <div class="header-cta">\
        <a href="tel:02-8123-4567" class="btn btn-primary btn-sm">Call Us Now</a>\
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">\
          <span></span><span></span><span></span>\
        </button>\
      </div>\
    </div>\
  </div>\
\
</header>\
<div class="mobile-nav-overlay" id="mobile-nav-overlay">\
  <nav aria-label="Mobile navigation">\
    <ul>\
      <li><a href="index.html">Home</a></li>\
      <li><a href="about-us.html">About Us</a></li>\
      <li><a href="our-services.html">Our Services</a></li>\
      <li><a href="our-service-areas.html">Service Areas</a></li>\
      <li><a href="blogs.html">Blog</a></li>\
      <li><a href="contact-us.html">Contact Us</a></li>\
      <li><a href="contact-us.html" class="btn btn-primary">Book an Appointment</a></li>\
    </ul>\
  </nav>\
</div>';

  /* ---- FOOTER ---- */
  var footerHTML = '\
<footer class="site-footer">\
  <div class="footer-top">\
    <div class="container footer-grid">\
      <div class="footer-brand">\
        <a href="index.html" class="logo footer-logo" aria-label="Joel Gacho Home">\
          <div class="logo-icon logo-icon-sm">\
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\
              <circle cx="24" cy="24" r="23" fill="#15803d" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>\
              <path d="M12 34 C12 28 16 24 20 22 L20 14 C20 12 22 10 24 10 C26 10 28 12 28 14 L28 18 C30 18 34 20 36 26 C38 32 34 38 28 38 L20 38 C15 38 12 36 12 34Z" fill="white" stroke="white" stroke-width="0.5"/>\
              <circle cx="24" cy="30" r="4" fill="#15803d"/>\
              <path d="M22 30 L26 30 M24 28 L24 32" stroke="white" stroke-width="1.5" stroke-linecap="round"/>\
            </svg>\
          </div>\
          <div class="logo-text">\
            <span class="logo-name">Joel Gacho</span>\
            <span class="logo-tagline">Siphoning &amp; Plumbing Services</span>\
          </div>\
        </a>\
        <ul class="footer-contact-list">\
          <li><span>&#128222;</span> (02) 8123-4567</li>\
          <li><span>&#128222;</span> 0917-123-4567</li>\
          <li><span>&#128222;</span> 0918-234-5678</li>\
          <li><span>&#128222;</span> 0905-345-6789</li>\
          <li><span>&#128222;</span> 0912-456-7890</li>\
          <li><span>&#9993;</span> joelgacho.ffseo@gmail.com</li>\
          <li><span>&#128205;</span> Caloocan City, Metro Manila</li>\
        </ul>\
      </div>\
      <div class="footer-col">\
        <h4>About Us</h4>\
        <ul>\
          <li><a href="about-us.html">About Us</a></li>\
          <li><a href="our-mission.html">Our Mission</a></li>\
          <li><a href="our-vision.html">Our Vision</a></li>\
          <li><a href="our-clients.html">Our Clients</a></li>\
          <li><a href="blogs.html">Blogs</a></li>\
          <li><a href="faqs.html">FAQs</a></li>\
        </ul>\
      </div>\
      <div class="footer-col">\
        <h4>Our Services</h4>\
        <ul>\
          <li><a href="manual-cleaning.html">Manual Cleaning</a></li>\
          <li><a href="siphoning.html">Siphoning Services</a></li>\
          <li><a href="plumbing.html">Plumbing Services</a></li>\
          <li><a href="declogging.html">Declogging Services</a></li>\
        </ul>\
      </div>\
      <div class="footer-col">\
        <h4>Service Areas</h4>\
        <ul>\
          <li><a href="metro-manila.html">Metro Manila</a></li>\
          <li><a href="calabarzon.html">Calabarzon</a></li>\
          <li><a href="central-luzon.html">Central Luzon</a></li>\
          <li><a href="tacloban-city.html">Tacloban City</a></li>\
          <li><a href="iloilo-city.html">Iloilo City</a></li>\
          <li><a href="bacolod-city.html">Bacolod City</a></li>\
        </ul>\
      </div>\
      <div class="footer-col footer-newsletter">\
        <h4>Weekly Newsletter</h4>\
        <form class="newsletter-form" id="newsletter-form" novalidate>\
          <label for="nl-email" class="sr-only">Email address</label>\
          <input type="email" id="nl-email" name="nl-email" placeholder="Your email address" required autocomplete="email"/>\
          <button type="submit" class="btn btn-primary">Send</button>\
        </form>\
        <div class="footer-social">\
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">\
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>\
          </a>\
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">\
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>\
          </a>\
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>\
          </a>\
        </div>\
      </div>\
    </div>\
  </div>\
  <div class="footer-bottom">\
    <div class="container">\
      <p>&copy; ' + new Date().getFullYear() + ' Joel Gacho Siphoning and Plumbing Services. All Rights Reserved.</p>\
    </div>\
  </div>\
</footer>\
<button class="back-to-top" id="back-to-top" aria-label="Back to top">&#8679;</button>';

  /* ---- INJECT ---- */
  var hm = document.getElementById('header-mount');
  if (hm) hm.outerHTML = headerHTML;

  var fm = document.getElementById('footer-mount');
  if (fm) fm.outerHTML = footerHTML;

})();
