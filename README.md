# Crafty Mammies — Website

Embroidery & Printing Specialists, Ballyclare, Co. Antrim.

---

## Project Structure

```
crafty-mammies/
│
├── index.html                  ← Homepage
│
├── pages/
│   ├── gifts.html              ← Personalised gifts (B2C shop)
│   ├── workwear.html           ← Workwear & quote form (B2B)
│   ├── services.html           ← All services explained
│   ├── about.html              ← About Crafty Mammies
│   ├── contact.html            ← Contact page
│   ├── privacy.html            ← Privacy policy (copy from Shopify)
│   └── shipping.html           ← Shipping & returns policy
│
├── css/
│   ├── variables.css           ← Design tokens (colours, fonts, spacing)
│   ├── base.css                ← CSS reset + body defaults
│   ├── components.css          ← Reusable components (buttons, cards, etc.)
│   ├── layout.css              ← Nav + footer styles
│   ├── home.css                ← Homepage section styles
│   ├── workwear.css            ← Workwear page + quote form styles
│   └── responsive.css          ← Mobile/tablet breakpoints (load last)
│
├── js/
│   ├── nav.js                  ← Mobile nav, scroll effects, active links
│   └── quote-form.js           ← Quote form validation + submission
│
└── assets/
    ├── images/
    │   ├── hero/               ← Hero section photos (3 stacked cards)
    │   ├── products/           ← B2C product photos
    │   ├── workwear/           ← B2B workwear photos
    │   └── team/               ← About page photos (optional)
    ├── icons/
    │   └── favicon.png         ← 32×32 favicon (use logo pink circle)
    └── partials/
        ├── nav.html            ← Nav HTML snippet (reference copy)
        └── footer.html         ← Footer HTML snippet (reference copy)
```

---

## Brand

| Token         | Value     |
|---------------|-----------|
| Pink          | `#EA72A4` |
| Pink dark     | `#c45585` |
| Pink light    | `#f9d9ea` |
| Pink pale     | `#fdf0f6` |
| Black         | `#1a1a1a` |
| Display font  | Cormorant Garamond |
| Script font   | Dancing Script |
| Body font     | DM Sans |

---

## Getting Started in VS Code

1. Open the `crafty-mammies/` folder in VS Code
2. Install the **Live Server** extension (ritwickdey.LiveServer)
3. Right-click `index.html` → **Open with Live Server**
4. The site opens at `http://127.0.0.1:5500`

> All CSS is vanilla — no build step, no npm, no bundler needed.

---

## Pages to Build Next

- [ ] `pages/gifts.html` — B2C product browse / categories
- [ ] `pages/services.html` — Detailed service descriptions
- [ ] `pages/about.html` — Story, photos, local trust
- [ ] `pages/contact.html` — Contact form + Google Maps
- [ ] `pages/privacy.html` — Copy from existing Shopify site
- [ ] `pages/shipping.html` — Copy from existing Shopify site

---

## Image Checklist (to request from Nicole)

### Hero (3 stacked cards)
- [ ] Best lifestyle/hero product shot (tall, portrait orientation)
- [ ] Second product photo
- [ ] Third product photo

### Homepage
- [ ] Embroidered workwear closeup (for workwear split card)
- [ ] Personalised gift flatlay (for gifts split card)

### Workwear page
- [ ] Team in branded uniform
- [ ] Embroidery hoop/machine closeup

### General
- [ ] Logo file: PNG with transparent background + SVG if available
- [ ] Favicon: Will be created from logo badge

---

## Quote Form — Backend

The quote form currently simulates a successful submission.
To wire it up, replace the comment in `js/quote-form.js` with one of:

- **Formspree** (free tier): `fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: formData })`
- **Netlify Forms**: Add `netlify` attribute to `<form>` and deploy to Netlify
- **EmailJS**: Client-side email sending without a backend

---

## Notes

- `css/responsive.css` must always be the **last** stylesheet loaded — it overrides layout rules.
- Fonts are loaded from Google Fonts. For production, consider self-hosting for GDPR compliance.
- Reviews are placeholder text — replace with real Google/Facebook reviews when available.
