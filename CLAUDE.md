# Seemus.co.uk — Claude Code Guide

## Project Overview

The Seemus website for John Watson — full-stack designer and developer offering web design, development, digital marketing, and custom apparel services.

**Live URL:** https://seemus.co.uk  
**Owner:** John Watson (git user: seemusdesignandweb)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | SvelteKit 2 + Svelte 5 |
| Styling | Tailwind CSS 3 |
| Server | Node adapter (`@sveltejs/adapter-node`) |
| Email | Resend + SendGrid (`@sendgrid/mail`) |
| Runtime | Node 22 |
| Build | Vite 5 |

---

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build → build/
npm run start     # run production build
npm run check     # svelte-check type checking
npm run lint      # prettier + eslint
npm run format    # prettier auto-fix
```

---

## Brand Identity

### Colours
| Name | Hex | Usage |
|---|---|---|
| Primary Teal | `#2e8aa9` | Buttons, links, accents, logo wordmark |
| Secondary Orange | `#be6928` | CTA, highlights, logo mark |

CSS custom properties (in `src/app.css`):
```css
--primary:   hsl(195 60% 40%);   /* #2e8aa9 teal */
--secondary: hsl(30 65% 45%);    /* #be6928 orange */
```

### Logo
The Seemus logo is an inline SVG component — **do not use image files** for the logo.

**Source:** `src/lib/components/SeemusLogo.svelte`  
**Viewbox:** `0 0 294.45 108.33`  
**Structure:** Two-part — teal wordmark ("Seemus") + orange/teal double-helix icon mark on the left  
**Usage in Svelte:**
```svelte
<script>
  import SeemusLogo from '$lib/components/SeemusLogo.svelte';
</script>
<SeemusLogo size="h-12 w-auto" />
```
**Usage in plain HTML:** Copy the SVG paths directly from `SeemusLogo.svelte`. Set `height` and `width: auto`.

### Typography
- **Font family:** Outfit (Google Fonts) — sans-serif only, no serifs
- **Tailwind body:** `var(--font-sans)` → system sans-serif stack
- **Heading weights:** Bold (700) or Extra-Bold (800) with tight negative letter-spacing (`-0.02em` to `-0.03em`)
- **Body weight:** 300–400 for readable text, 500–600 for labels/UI

---

## Project Structure

```
src/
  app.css                        # Global styles + CSS custom properties
  app.html                       # HTML shell with all meta/SEO tags
  lib/
    components/
      SeemusLogo.svelte          # SVG logo component
      navigation.svelte          # Fixed top nav
      hero.svelte                # Animated gradient hero
      about.svelte
      services.svelte
      testimonials.svelte
      contact.svelte
  routes/
    +layout.svelte               # Root layout (imports app.css)
    +page.svelte                 # Single-page app
static/
  images/
    favicon/                     # All favicon sizes
    LifeGuardHoodie.png
    pclwebsite.png
    piccasowebsite.png
```

---

## Stand-alone HTML Documents

Service documents and proposals live in the **project root** (not inside `src/`). These are standalone HTML files, not part of the SvelteKit build.

| File | Purpose |
|---|---|
| `brand_strategy_service.html` | Original brand strategy service framework |
| `brand_strategy_service_seemus.html` | Seemus-branded redesign of the above |
| `brand_strategy_service_seemus.pdf` | PDF export of the above |

### Conventions for standalone HTML docs
- **Font:** Outfit from Google Fonts (`wght@300;400;500;600;700;800`)
- **No serif fonts** — all headings use Outfit Bold/ExtraBold
- **Logo:** Embed the SVG paths from `SeemusLogo.svelte` directly
- **Colours:** Use the Seemus CSS variables above
- **PDF generation:** Chrome headless via:
  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --headless=new --no-sandbox --disable-gpu \
    --print-to-pdf="output.pdf" \
    --print-to-pdf-no-header --no-pdf-header-footer \
    "file://$(pwd)/input.html"
  ```
- **Print CSS:** Always include `@page { size: A4; margin: 0; }` and `print-color-adjust: exact` on coloured backgrounds

---

## Email

Contact form submissions use **Resend** as the primary mailer. SendGrid is also installed as a fallback. Environment variables are required (`.env` — not committed).

---

## Notes

- The SvelteKit app is a **single-page** layout — all sections are components on one route (`+page.svelte`)
- Navigation scrolls to section IDs using `scrollIntoView`
- The hero uses a CSS animated gradient (`background-size: 800% 800%` + keyframe animation)
- Tailwind `dark:` variants are set up in `app.css` but dark mode is not actively used in the current design
