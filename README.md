# AZBUILDING MMC - Website

Industrial construction **portfolio / company-profile** website for AZBUILDING MMC
(azbuilding.az). Multilingual (AZ / RU / EN), dark industrial design, with a
projects-first portfolio, services, partners/customers, animated timeline and a
real-submission-ready contact form.

Built with **React + TypeScript + Vite + Tailwind CSS + React Router + Framer Motion**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands:

```bash
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

## Project structure

```
public/
  images/          # placeholder photography (replace) - hero, projects, services, about
  logos/           # brand mark + partner/customer logos
src/
  components/      # Header, Footer, HeroSlider, Timeline, ContactForm, etc.
  data/            # ALL editable content (see below)
  i18n/            # LanguageContext + translation helpers
  pages/           # Home, About, Services, ServiceDetail, Projects, ProjectDetail, Customers, Partners, Contact
  styles/          # globals.css (Tailwind + design tokens)
scripts/
  gen-placeholders.mjs  # regenerates placeholder SVGs into /public/images
```

## Where to edit content

All content is data-driven in `src/data/` - you rarely need to touch components:

| File | Controls |
|------|----------|
| `services.ts` | Services list + detail pages (scope, descriptions, icons) |
| `projects.ts` | **Portfolio** - projects, metadata, galleries, types/filters |
| `customers.ts` / `partners.ts` | Logo slots (set `logo` to a file in `/public/logos`) |
| `timeline.ts` | Company milestones (years are placeholders) |
| `metrics.ts` | Structural-metrics numbers (placeholders) |
| `process.ts` / `quality.ts` / `about.ts` | Homepage + About sections |
| `translations.ts` | UI strings **and** `company` contact info (address, phone, email, social, Google Maps query) |
| `nav.ts` | Navigation items |

Each content field is a `{ az, ru, en }` record so all three languages stay together.

## Languages

Switch via the AZ | RU | EN control in the header (active language is orange/bold).
The choice persists in `localStorage`. Add/adjust UI copy in `translations.ts`.

## Connecting the contact form to email

This is a **static** site - there is no server, so never put SMTP/Gmail
passwords or secret API keys in the code (anything shipped to the browser is
public). Instead, submit to a third-party form backend via an environment
variable. Beginner-friendly steps:

**1. Create an endpoint** (pick one):
- **Formspree** (easiest): sign up at <https://formspree.io>, create a form,
  copy its endpoint (`https://formspree.io/f/xxxxxx`). Emails go to the address
  you set in Formspree.
- **Web3Forms**: get a free **public** access key at <https://web3forms.com>
  (safe to ship). Endpoint is `https://api.web3forms.com/submit`.
- **Custom / serverless**: any URL that accepts a JSON POST (Netlify Function,
  Vercel Function, your own API). Keep all secrets on the server.

**2. Put the endpoint in `.env`** (copy from `.env.example`):

```bash
# Formspree
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id

# - or - Web3Forms (also set the PUBLIC access key)
VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit
VITE_WEB3FORMS_KEY=your-public-access-key
```

**3. Run locally:** `npm run dev` and test the form on `/contact`.

**4. Deploy with the env vars set on your host** (see below). Vite embeds
`VITE_*` variables at **build time**, so set them in the hosting dashboard and
re-deploy.

If no endpoint is configured the form does **not** silently fail - it shows a
clear "not configured" message. Values are trimmed before sending and React
escapes all text (no HTML injection). Full instructions are also in the comment
block at the top of `src/components/ContactForm.tsx`.

> **TODO (client to confirm):** the client file listed `ingo@azbuilding.az`,
> which looks like a typo. The site currently shows the safer
> **`info@azbuilding.az`** (`company.email` in `src/data/translations.ts`).
> Confirm whether the correct address is `info@azbuilding.az` or
> `ingo@azbuilding.az` before publishing.

## How to host / deploy this website

Production files are generated into the **`dist/`** folder by `npm run build`.

```bash
npm install        # install dependencies (first time)
npm run dev        # local development at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

### Deploy to Vercel
1. Push this repo to GitHub and "Import Project" in Vercel.
2. Framework preset: **Vite**. Build command `npm run build`, output `dist`.
3. Add env vars (Settings → Environment Variables): `VITE_CONTACT_FORM_ENDPOINT`
   (and `VITE_WEB3FORMS_KEY` if using Web3Forms), then re-deploy.
4. `vercel.json` already handles SPA routing and security headers.

### Deploy to Netlify
1. "Add new site → Import" from GitHub.
2. Build command `npm run build`, publish directory `dist`
   (already set in `netlify.toml`).
3. Add the same env vars under Site settings → Environment variables, re-deploy.
4. `netlify.toml` / `public/_redirects` handle SPA routing; `public/_headers`
   adds security headers.

### Deploy to cPanel / shared hosting (static upload)
1. Run `npm run build` locally.
2. Upload the **contents of `dist/`** (not the folder itself) into `public_html`
   (or the site's document root).
3. Because this is a single-page app, add a fallback so refreshes on deep links
   work. On Apache, create `public_html/.htaccess`:

   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```
4. The contact form still needs `VITE_CONTACT_FORM_ENDPOINT`. Shared hosting has
   no build step, so set it in `.env` and run `npm run build` **before** uploading.

### Replacing placeholder images
All artwork under `public/images/**` is generated SVG. Drop real photos in with
the same file names, or edit the paths in `src/data/*.ts`. Regenerate the SVG
placeholders any time with `node scripts/gen-placeholders.mjs`.

## Security notes

- No secrets are committed. `.env` is git-ignored; only `.env.example` (empty
  values) is tracked. `VITE_*` vars are **public** by design - never store real
  passwords or private API keys in them.
- All `target="_blank"` links use `rel="noopener noreferrer"`.
- Form input is trimmed before submit and rendered through React (auto-escaped),
  so it is never injected as raw HTML.
- Security headers ship via `public/_headers`, `netlify.toml` and `vercel.json`:
  `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`,
  `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy` disabling camera/mic/geolocation.
- **CSP** is intentionally left out of the defaults to avoid breaking Google
  Maps, Google Fonts, the PDF preview and the form endpoint. A reasonable
  starting Content-Security-Policy (tighten per your final endpoint/domain):

  ```
  Content-Security-Policy: default-src 'self';
    img-src 'self' data:;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    frame-src https://www.google.com https://maps.google.com;
    connect-src 'self' https://formspree.io https://api.web3forms.com;
    object-src 'self'
  ```

## Placeholders that still need real client content

- **Photography**: everything under `public/images/**` is generated SVG art.
- **Logos**: `public/logos/azbuilding-mark.svg` (brand), plus partner/customer logos.
- **Phone number**: `company.phone` in `src/data/translations.ts` (placeholder).
- **Email**: confirm `info@` vs `ingo@` (see TODO above).
- **Projects**: real photos for the 11 portfolio entries in `projects.ts`.
- **License PDF**: already added at `public/docs/license.pdf` and shown on the
  About page - replace with an updated scan if needed.
