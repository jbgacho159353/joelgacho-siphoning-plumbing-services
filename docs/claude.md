# Malabanan Siphoning & Plumbing – Site Structure & Design Rationale

## Overview
Single-page website for a professional plumbing and siphoning company based in the Philippines.
Built with plain HTML, CSS, and vanilla JavaScript — no build tool or framework required.

---

## File Structure

```
plumbing-site/
├── index.html      ← All page content (semantic HTML5)
├── styles.css      ← All styles (CSS custom properties, responsive)
├── script.js       ← All interactivity (vanilla JS, IIFE)
├── claude.md       ← This document
└── skills.md       ← Required technical skills reference
```

---

## Content Hierarchy & Section Order

```
<header>  Sticky navigation + "Book an Appointment" CTA
│
<main>
│  1. #home            Hero section
│  2. #about           Problems / Solutions section
│  3. (no id)          Why Choose Us (WE'VE GOT YOU!)
│  4. #services        Our Services (4 cards)
│  5. #service-areas   Service Area Maps (6 cities)
│  6. (no id)          Team In Action (video thumbnails)
│  7. #testimonials    Client Testimonials (slider)
│  8. #blog            Blog / Articles (3 cards)
│  9. #contact         Booking Form + Contact Info
│
<footer>   Brand, links, newsletter, social, copyright
```

---

## Design Rationale

### Color Palette
| Token           | Value     | Usage                                |
|-----------------|-----------|--------------------------------------|
| --green-dark    | #1a7a3c   | Primary brand, buttons, accents      |
| --green-mid     | #22a050   | Hover states, gradients              |
| --green-light   | #2ecc71   | Focus rings, highlights              |
| --green-bg      | #f0faf4   | Subtle section backgrounds           |
| --gray-900      | #1a2b1f   | Footer background                    |
| --white         | #ffffff   | Cards, forms                         |

The palette mirrors the original site's strong green identity while using a wider tonal range
to improve contrast, readability, and visual depth.

### Typography
- **Poppins** (700/800) — Headings. Friendly but authoritative; common in Philippine service brands.
- **Inter** (400/500/600) — Body. Highly legible at small sizes across devices.
Both are loaded via Google Fonts with `preconnect` for minimal render-blocking.

### Layout
- CSS Grid used for all multi-column layouts (hero, why cards, services, areas, footer).
- CSS custom properties for spacing and color ensure global theming from one place.
- Clamp() for fluid heading sizes prevents over-shrinking on mobile.

### Hero Section
- Full-viewport-height green gradient background with a radial overlay for depth.
- Two-column grid collapses to single column on tablet.
- SVG wave divider creates visual flow into the next section.

### Why Choose Us
- Sits on a full-bleed green gradient to create a strong mid-page visual anchor.
- 4-column grid on desktop, 2-column on tablet, 1-column on mobile.
- Each card uses semi-transparent white backgrounds for a frosted-glass aesthetic.

### Services Section
- 4 green gradient cards with SVG icons.
- Hover lifts card and deepens shadow for clear interactivity cues.

### Service Areas
- Embedded Google Maps iframes (pointer-events disabled so scroll isn't hijacked).
- 3-column grid → 2-column → 1-column responsive collapse.

### Team In Action
- Dark gradient section for contrast contrast after the light areas section.
- Video thumbnails open a centered modal with an iframe (autoplay on open).
- Modal closes on backdrop click, close button, or Escape key.

### Testimonials
- Auto-playing slider (5 s interval) with dot navigation.
- Pauses on hover for better UX.
- Slide-in animation on transition.

### Contact / Booking Form
- Client-side validation highlights missing required fields in red.
- Simulated async submission (setTimeout) — replace with a real endpoint (e.g. Formspree, EmailJS).

### Footer
- 5-column grid on desktop, collapses responsively.
- Newsletter signup with inline success feedback.

---

## Interactions & Animations

| Feature           | Trigger         | Technique                                 |
|-------------------|-----------------|-------------------------------------------|
| Sticky header     | scroll          | classList + scrollY threshold             |
| Active nav link   | scroll          | IntersectionObserver fallback + scrollY   |
| Scroll animations | enter viewport  | IntersectionObserver, fade + translateY   |
| Mobile menu       | hamburger click | classList toggle + body overflow lock     |
| Video modal       | card click      | display flex + iframe src injection       |
| Testimonial auto  | time            | setInterval + classList transitions       |
| Back-to-top btn   | scroll          | opacity + pointer-events toggle           |
| Form validation   | submit          | Constraint API + inline error styling     |

---

## SEO & Accessibility Notes
- Semantic HTML5 elements: `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<nav>`.
- All images have descriptive `alt` text.
- All interactive elements are keyboard-accessible (tabindex, aria-label, role).
- `aria-live="polite"` on form success message for screen readers.
- `lang="en"` on `<html>`.
- Viewport meta tag prevents horizontal scroll on mobile.
- `loading="lazy"` on below-fold images.
- Google Fonts loaded with `preconnect` to reduce TTFB.

---

## Replacing Placeholder Assets
| Placeholder URL (Unsplash)           | Replace with                              |
|--------------------------------------|-------------------------------------------|
| Hero image (607472586893…)           | Real photo of Malabanan crew in action    |
| Problems image (558618666…)          | Real photo of team with equipment         |
| Team video thumbnails (3 images)     | YouTube embed links of real job videos    |
| Testimonials left image              | Real before/after or team photo           |
| Blog images (3 images)               | Real blog cover photos                    |

---

## Deployment Checklist
- [ ] Replace Unsplash placeholder images with real brand photos
- [ ] Replace YouTube placeholder video URLs with real videos
- [ ] Wire contact form to a real backend (Formspree / EmailJS / PHP mailer)
- [ ] Wire newsletter form to Mailchimp / similar
- [ ] Add Google Analytics or similar tracking
- [ ] Add Open Graph meta tags (`og:title`, `og:image`, `og:description`)
- [ ] Add `robots.txt` and `sitemap.xml`
- [ ] Test on real mobile devices
- [ ] Run Lighthouse audit (target 90+ for Performance, Accessibility, SEO)
