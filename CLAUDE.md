# Seemus.co.uk — Claude Code Context

## Project Overview
Single-page marketing website for Seemus (John Watson) — a web design, development, marketing and branding agency. Built with SvelteKit and deployed via Node adapter.

## Tech Stack
- **Framework:** SvelteKit (Svelte 5) with `@sveltejs/adapter-node`
- **Styling:** Tailwind CSS v3 with CSS custom properties for theming
- **Email:** Resend API (`resend` package)
- **Runtime:** Node 22

## Project Structure
```
src/
  routes/
    +page.svelte          # Single page — imports and arranges all sections
    +layout.svelte        # App layout wrapper
    api/
      send-email/
        +server.js        # POST endpoint for contact form (Resend)
  lib/
    components/           # One component per page section
      hero.svelte
      navigation.svelte
      about.svelte
      services.svelte
      testimonials.svelte
      contact.svelte
      SeemusLogo.svelte
    data/
      testimonials.json   # Testimonial content
    seo.js                # SEO metadata helpers
static/
  images/                 # Static images served at /images/...
  favicon.png
  robots.txt
  sitemap.xml
```

## Brand Colours
- **Primary:** `#2e8aa9` (teal/blue)
- **Secondary:** `#be6928` (orange/brown)
- Accent aliases primary. Both colours have opacity variants (5/10/20/30/40/60) defined via `color-mix()` in `tailwind.config.js`.

## Environment Variables
Required in `.env` (never commit this):
```
RESEND_API_KEY=
RESEND_FROM_EMAIL=Seemus <noreply@seemus.co.uk>
CONTACT_EMAIL=hello@seemus.co.uk
NODE_ENV=development|production
```

## Common Commands
```bash
npm run dev       # Start dev server
npm run build     # Production build (outputs to build/)
npm run start     # Run production build (node build/index.js)
npm run check     # Svelte type checking
npm run lint      # Prettier + ESLint
```

## Build Notes
- The project lives in a OneDrive folder. **Always build from a local clone** (e.g. `~/Desktop/seemus-fix`) to avoid OneDrive file-locking errors.
- `node_modules` was previously tracked in git — it has been removed. Do not re-add it.
- If `vite build` hangs, it is likely because a previous build process is still running. Kill it with `pkill -f "vite"` then retry.

## Contact Form (`/api/send-email`)
- Sends via Resend to `CONTACT_EMAIL`, with `Reply-To` set to the submitter
- Also sends a confirmation email to the submitter
- Spam protection: honeypot field, minimum time-on-form (3s), spam keyword patterns, disposable email domain blocklist, in-memory rate limiting (3/hr per IP, 2/hr per email)

## Images
- Static images live in `static/images/` and are referenced as `/images/filename.png` in components
- Service card images use `h-32 w-full object-cover` — match this for any new service images
