# Skills Reference — Malabanan Plumbing Site

## Technical Skills Required

### 1. HTML5 / Semantic Markup
- Semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`
- ARIA roles, labels, and live regions for screen-reader support
- Form elements with built-in constraint validation attributes
- Embedded iframes (Google Maps, YouTube)
- SVG inline icons (no icon font dependency)

### 2. CSS3 / Advanced Styling
- CSS custom properties (variables) for design tokens
- CSS Grid and Flexbox for all layout work
- `clamp()` for fluid responsive typography
- Keyframe animations and transition timing functions
- `position: fixed` sticky header with scroll-driven class toggling
- `backdrop-filter` for glass effects
- Responsive breakpoints: 1100px, 900px, 680px
- SVG wave dividers between sections
- Pseudo-elements for decorative overlays

### 3. JavaScript (Vanilla ES6+)
- IIFE pattern to avoid global scope pollution
- `IntersectionObserver` for scroll-triggered animations
- `window.addEventListener('scroll')` for header state and back-to-top
- DOM manipulation: `classList`, `setAttribute`, `style`
- `setInterval` / `clearInterval` for auto-playing slider
- Event delegation for modal open/close
- Form submission handling with client-side validation
- `document.createElement` for injecting dynamic styles

### 4. Performance Optimization
- `loading="lazy"` on all below-fold images
- `preconnect` hints for Google Fonts
- Minimal dependencies (zero npm packages, zero frameworks)
- Passive scroll event listeners (`{ passive: true }`)
- CSS `will-change` avoided to prevent unnecessary compositing

### 5. Accessibility (WCAG 2.1 AA)
- Keyboard navigation for all interactive elements
- Skip-to-content links (can be added)
- Focus-visible outlines on all focusable elements
- Color contrast ratios ≥ 4.5:1 for body text
- Screen-reader-only `.sr-only` class for visually-hidden labels
- `aria-label`, `aria-expanded`, `aria-live`, `role` attributes throughout

### 6. Responsive Web Design
- Mobile-first fluid layout with max-width containers
- Three breakpoints for tablet (900px) and mobile (680px)
- Touch-friendly button hit targets (min 44×44px)
- Mobile navigation overlay with body scroll lock

### 7. SEO Fundamentals
- `<title>` and `<meta name="description">` tags
- `<meta name="keywords">` (minor signal, included for completeness)
- Semantic heading hierarchy (H1 → H2 → H3)
- Image alt text on all `<img>` elements
- Descriptive anchor link text

### 8. Google Maps Embed
- Embedding Google Maps via iframe
- `pointer-events: none` to prevent scroll hijacking
- `loading="lazy"` for map iframes

---

## Creative / Design Skills Required

### 1. Visual Design
- Green-dominant brand palette with neutral complements
- Consistent spacing using an 8-px grid
- Visual hierarchy through size, weight, and color contrast
- Card-based layouts for scannable service/area grids
- Wave SVG dividers for smooth section transitions

### 2. Iconography
- Custom inline SVG icons (no external library required)
- Consistent 40–56px icon sizes across sections
- White icons on dark/colored backgrounds for contrast

### 3. Logo Design Concept
The site uses a custom inline SVG logo featuring:
- A circular green emblem with a stylized drain/pipe motif
- Wordmark: "Malabanan" (bold Poppins) + "Siphoning & Plumbing" (small caption)
- Works at all sizes from 32px favicon to large print

### 4. UX / Interaction Design
- Hover effects on all interactive cards (translateY lift + shadow)
- CTA buttons use strong contrast and consistent sizing
- Form errors displayed inline next to fields
- Auto-advancing testimonial carousel with manual dot override
- Video modal with clear close affordances (button, backdrop, Escape key)
- Smooth scroll for all same-page anchor links

---

## Suggested Asset Sources

### Free Stock Photos
- [Unsplash](https://unsplash.com) — search: "plumbing", "sewage truck", "drain cleaning"
- [Pexels](https://pexels.com) — same search terms
- Real client-supplied job photos (preferred for authenticity)

### Free Icons (if replacing inline SVGs)
- [Heroicons](https://heroicons.com) — MIT license, SVG
- [Lucide](https://lucide.dev) — MIT license, SVG
- [Phosphor Icons](https://phosphoricons.com) — MIT license

### Maps
- Google Maps Embed API (free tier, no API key needed for basic embeds)
- OpenStreetMap via [embed.openstreetmap.org](https://www.openstreetmap.org/export/embed.html) (no key required)

### Fonts
- [Google Fonts](https://fonts.google.com) — Poppins, Inter (both OFL license)

### Form Backend Options
- [Formspree](https://formspree.io) — free tier, no server required
- [EmailJS](https://emailjs.com) — free tier, JS-only
- [Netlify Forms](https://docs.netlify.com/forms/setup/) — free if hosted on Netlify

---

## Hierarchy Diagram

```
site-header (fixed, z:1000)
│  └── .logo | .main-nav (with dropdowns) | .btn "Book an Appointment"
│
main
│
├── section#home (.hero-section)
│   ├── .hero-content (headline + sub + CTA)
│   └── .hero-image
│
├── section#about (.problems-section)
│   ├── .problems-image
│   └── .problems-content (checklist + CTA)
│
├── section (.why-section)  [green full-bleed]
│   └── .why-grid (8 × .why-card)
│
├── section#services (.services-section)
│   └── .services-grid (4 × .service-card + CTA)
│
├── section#service-areas (.areas-section)
│   └── .areas-grid (6 × .area-card [map + CTA])
│
├── section (.team-section)  [dark green]
│   ├── .team-videos (3 × .video-card)
│   └── #video-modal (hidden until triggered)
│
├── section#testimonials (.testimonials-section)
│   ├── .testimonial-image
│   └── .testimonial-slider (3 slides + dot nav)
│
├── section#blog (.blog-section)
│   └── .blog-grid (3 × article.blog-card)
│
└── section#contact (.contact-section)  [green full-bleed]
    ├── .contact-info (phone, email, address)
    └── form.contact-form (name, email, phone, service, area, message + submit)

site-footer
│  ├── .footer-brand (logo + contact list)
│  ├── .footer-col × 3 (About, Services, Areas)
│  ├── .footer-newsletter (email input + social links)
│  └── .footer-bottom (copyright)

button.back-to-top (fixed, z:900)
```
