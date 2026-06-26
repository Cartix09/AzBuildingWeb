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

## Design system (exact palette)
- `#0F172A` slate (dark bg / header / footer) → `slate-deep`
- `#EA580C` orange (CTA, hover, timeline nodes, accents, arrows) → `orange-brand`
- `#64748B` steel (secondary text, borders, technical labels) → `steel`
- `#F8FAFC` clean base → `base`
- Fonts: Inter / Inter Tight (display), JetBrains Mono (eyebrow/technical labels).
- Style: dark, industrial, sharp, **rectangular, 0px radius, no soft shadows**, thin borders, strong grid, large type, monospace eyebrows like `[01] STRUCTURAL METRICS`. Orange used sparingly.
- AVOID: rounded SaaS cards, playful/bouncy animation, fake claims, salesy discount language, smiling-stock-photo style.

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
