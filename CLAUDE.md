# CLAUDE.md — AZBUILDING MMC

Durable rules for this project. Keep this file small.

## What this is
- AZBUILDING MMC **industrial portfolio / company-profile website** (azbuilding.az).
- It is a **presentation site**, NOT a generic lead-generation landing page. The owner shows it to clients instead of a PowerPoint.
- **Projects / Portfolio is the most important section.** Prioritise it in any change.

## Languages
- AZ / RU / EN. UI strings live in `src/data/translations.ts`; domain content is localized as `{ az, ru, en }` records in each data file. Never scatter hardcoded UI text — add a key and use `t('group.key')` / `pick(record, lang)`.

## Pages
Home, About, Services (+ detail), Projects (+ detail), Customers, Partners, Contact. Routes in `src/App.tsx`.

## Design system (warm premium navy + gold — BCC-inspired)
- `#0F2140` warm navy (main bg) → `slate-deep` / `navy`; `#0A182F` darkest strips → `navy-deep`; `#1B3A63` cards → `slate-surface` / `navy-surface`.
- `#F5A524` gold — primary warm accent (nav bar, highlights, active language, logo "MMC") → `gold`.
- `#EA580C` orange — CTAs/timeline nodes; pairs with gold in the `gold-bar` gradient → `orange-brand`.
- `#8AA0BF` steel (secondary text/borders on navy) → `steel`; `#F8FAFC` clean base → `base`.
- Header: BCC-style — top info strip, large logo band (logo must be prominent), warm gold gradient sticky nav bar (`bg-gold-bar`), dark CTA chip. Language order AZ | EN | RU.
- Logo: official architectural "A" PNG at `public/logos/azbuilding-mark.png` — do NOT redesign its shape; keep it large and proud.
- Fonts: Inter / Inter Tight (display), JetBrains Mono (technical eyebrows).
- Style: premium, warm, confident construction-group feel; navy + gold, sharp rectangular blocks, thin borders. Not flat-black, not depressing.
- AVOID: rounded SaaS cards, playful/bouncy animation, fake claims, salesy discount language, smiling-stock-photo style, reintroducing "AZBİLDİNQ".

## Content is data-driven (edit these, not components)
`src/data/`: `services.ts`, `projects.ts`, `customers.ts`, `partners.ts`, `timeline.ts`, `metrics.ts`, `process.ts`, `quality.ts`, `about.ts`, `nav.ts`, `translations.ts` (also holds `company` contact info).

## Claims / compliance
- Metrics and timeline years are **placeholders** — keep them marked until the client verifies.
- Do NOT assert real certifications (ISO/OSHA/etc.). Use "documentation-ready / quality-focused / compliance-oriented" wording.

## Contact form
- `src/components/ContactForm.tsx`. Submits JSON to `VITE_CONTACT_FORM_ENDPOINT` (Formspree / Web3Forms / custom). Must show loading/success/error and **never silently fail**; if no endpoint is set it shows a "not configured" notice. No private keys in code.

## Assets
Replace placeholders under `public/images/**` and `public/logos/**`. Regenerate placeholder SVGs with `node scripts/gen-placeholders.mjs`. Brand mark: `public/logos/azbuilding-mark.svg`.

## Commands
`npm run dev` · `npm run build` · `npm run typecheck` · `npm run lint`. Don't finish with a broken build.
