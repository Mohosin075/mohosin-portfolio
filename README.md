# Mohosin Ali — Portfolio

React 18 portfolio with selected projects, experience, education and contact form.

## Local development

Use Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run dev
```

Copy `.env.example` to `.env` first (`Copy-Item .env.example .env` in PowerShell). Open the URL printed by Vite.

## Contact form

Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` locally and in your hosting build environment. Restart Vite or rebuild after changes. These identifiers are browser-visible; never put private keys in `VITE_*` variables.

Configure the EmailJS template with `name`, `email`, `reply_to`, `inquiry_type` and `message`. Set the recipient in EmailJS to `mohosinali075@gmail.com` and configure allowed origins and abuse protections in the EmailJS dashboard. Without configuration the form preserves the message and offers direct email contact. Actual delivery needs a separate test after deployment.

## Content and assets

Project content is in `public/projects.json`. Use `null` for unavailable links and mark only selected projects as featured. The `role` field summarizes contributions from existing descriptions. Add outcomes and team details only when verified.

Keep screenshot originals at their `sourceImage` paths. Run `npm run optimize:projects` to generate 480, 960 and 1440px WebP files and update responsive image paths. Run `npm run optimize:portrait` after replacing `assets-source/me-mohosin.png`.

Experience uses the documented June 2025 start date. Update Home when the timeline changes. Skills and experience are on Home; legacy `/about` links redirect there.

## Checks and deployment

```sh
npm run lint
npm run build
npm run preview
```

Deploy the complete `dist/` directory. The build generates metadata HTML for all nine routes, canonical links, a sitemap and robots.txt. This generates social preview metadata, not server-rendered React content. Client navigation also updates metadata and restores scroll position.

Vercel configuration is in `vercel.json`; Firebase Hosting uses `firebase.json`. Static route files must take precedence over the SPA fallback. If changing domains, update `siteUrl` in `src/utils/metadata.js` and fallback metadata in `index.html`, then rebuild.

Production: https://mohosin-portfolio.vercel.app/

## Manual QA

Check mobile and desktop navigation, menu Tab/Shift+Tab and Escape, focus restoration, form validation, reduced-motion preferences and direct project URLs. Review external demos and repository permissions when publishing content changes.
