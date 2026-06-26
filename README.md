# AZBUILDING MMC — Website

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
  images/          # placeholder photography (replace) — hero, projects, services, about
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

All content is data-driven in `src/data/` — you rarely need to touch components:

| File | Controls |
|------|----------|
| `services.ts` | Services list + detail pages (scope, descriptions, icons) |
| `projects.ts` | **Portfolio** — projects, metadata, galleries, types/filters |
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

## Contact form integration

The form posts JSON to the endpoint in `VITE_CONTACT_FORM_ENDPOINT`. Copy
`.env.example` to `.env` and set it:

```bash
# Formspree
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id

# Web3Forms (also set the PUBLIC access key)
VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit
VITE_WEB3FORMS_KEY=your-public-access-key

# …or any custom backend / serverless function that accepts a JSON POST
```

If no endpoint is configured, the form does **not** silently fail — it shows a
clear "not configured" message. No private keys are stored in the code.

## Placeholders that still need real client content

- **Photography**: everything under `public/images/**` is a generated SVG placeholder.
- **Logos**: `public/logos/azbuilding-mark.svg` (brand), plus partner/customer logos.
- **Contact info**: `company` in `src/data/translations.ts` (address, phone, email, social, exact Google Maps location).
- **Metrics & timeline years**: placeholder values in `metrics.ts` / `timeline.ts`.
- **Projects**: realistic placeholder portfolio in `projects.ts` — replace with real projects.
- **Certificates/licenses**: About page section is a reserved placeholder.
- **Quality dossier PDF**: the download button in the quality section needs a real PDF.

## Deployment

`npm run build` outputs a static site to `/dist` — deploy to any static host
(Netlify, Vercel, Cloudflare Pages, or traditional hosting). For SPA routing,
configure the host to fall back to `index.html`.
