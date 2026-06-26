// Generates labelled industrial SVG placeholders so the site renders before
// real photography is supplied. Re-run with: node scripts/gen-placeholders.mjs
// Replace the generated files in /public/images with real assets.
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

const SLATE = '#0F172A'
const SLATE2 = '#1B2436'
const STEEL = '#64748B'
const ORANGE = '#EA580C'

function photo({ w = 1600, h = 1000, label = '', sub = '', accent = ORANGE }) {
  const cols = Math.ceil(w / 40)
  const rows = Math.ceil(h / 40)
  let grid = ''
  for (let i = 1; i < cols; i++) grid += `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="${h}" stroke="${STEEL}" stroke-opacity="0.08"/>`
  for (let j = 1; j < rows; j++) grid += `<line x1="0" y1="${j * 40}" x2="${w}" y2="${j * 40}" stroke="${STEEL}" stroke-opacity="0.08"/>`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${SLATE2}"/>
      <stop offset="1" stop-color="${SLATE}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  ${grid}
  <line x1="0" y1="${h - 1}" x2="${w}" y2="${h - 1}" stroke="${accent}" stroke-width="4"/>
  <text x="48" y="${h - 56}" font-family="monospace" font-size="22" letter-spacing="6" fill="${accent}">+ AZBUILDING MMC</text>
  <text x="48" y="${h / 2}" font-family="Arial, sans-serif" font-weight="800" font-size="64" fill="#F8FAFC">${label}</text>
  <text x="50" y="${h / 2 + 44}" font-family="monospace" font-size="22" letter-spacing="4" fill="${STEEL}">${sub}</text>
</svg>`
}

const files = {
  // Hero slides
  'images/hero/hero-1.svg': photo({ label: 'CONSTRUCTION SITE', sub: 'REPLACE WITH REAL HERO PHOTO 01' }),
  'images/hero/hero-2.svg': photo({ label: 'PROJECT EXECUTION', sub: 'REPLACE WITH REAL HERO PHOTO 02' }),
  'images/hero/hero-3.svg': photo({ label: 'STRUCTURAL BUILD', sub: 'REPLACE WITH REAL HERO PHOTO 03' }),
  // Projects
  'images/projects/project-01.svg': photo({ label: 'PROJECT 01', sub: 'RESIDENTIAL' }),
  'images/projects/project-02.svg': photo({ label: 'PROJECT 02', sub: 'COMMERCIAL' }),
  'images/projects/project-03.svg': photo({ label: 'PROJECT 03', sub: 'INDUSTRIAL' }),
  'images/projects/project-04.svg': photo({ label: 'PROJECT 04', sub: 'RENOVATION' }),
  'images/projects/project-05.svg': photo({ label: 'PROJECT 05', sub: 'INDUSTRIAL' }),
  'images/projects/project-06.svg': photo({ label: 'PROJECT 06', sub: 'RESIDENTIAL' }),
  // Services
  'images/services/construction-works.svg': photo({ label: 'CONSTRUCTION WORKS', sub: 'SERVICE' }),
  'images/services/project-execution.svg': photo({ label: 'PROJECT EXECUTION', sub: 'SERVICE' }),
  'images/services/design-planning.svg': photo({ label: 'DESIGN & PLANNING', sub: 'SERVICE' }),
  'images/services/renovation-repair.svg': photo({ label: 'RENOVATION & REPAIR', sub: 'SERVICE' }),
  'images/services/interior-works.svg': photo({ label: 'INTERIOR WORKS', sub: 'SERVICE' }),
  'images/services/facade-exterior.svg': photo({ label: 'FACADE & EXTERIOR', sub: 'SERVICE' }),
  'images/services/commercial-residential.svg': photo({ label: 'COMMERCIAL & RESIDENTIAL', sub: 'SERVICE' }),
  // About
  'images/about/about-1.svg': photo({ label: 'ENGINEERING TEAM', sub: 'REPLACE WITH REAL PHOTO' }),
  'images/about/about-2.svg': photo({ label: 'ON SITE', sub: 'REPLACE WITH REAL PHOTO' }),
}

for (const [rel, content] of Object.entries(files)) {
  const out = join(root, rel)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, content)
}
console.log(`Generated ${Object.keys(files).length} placeholder SVGs in /public/images`)
