// Generates polished, text-free industrial SVG visuals so the site looks
// premium before real photography is supplied. Re-run with:
//   node scripts/gen-placeholders.mjs
// Replace the generated files in /public/images with real photos when available.
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

const SLATE = '#0F172A'
const SLATE2 = '#1B2436'
const NIGHT = '#0B1220'
const STEEL = '#64748B'
const ORANGE = '#EA580C'
const BASE = '#F8FAFC'

const head = (w, h, id) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${SLATE2}"/>
      <stop offset="0.6" stop-color="${SLATE}"/>
      <stop offset="1" stop-color="${NIGHT}"/>
    </linearGradient>
    <radialGradient id="glow${id}" cx="0.2" cy="0.95" r="0.9">
      <stop offset="0" stop-color="${ORANGE}" stop-opacity="0.18"/>
      <stop offset="0.4" stop-color="${ORANGE}" stop-opacity="0.04"/>
      <stop offset="1" stop-color="${ORANGE}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig${id}" cx="0.5" cy="0.45" r="0.75">
      <stop offset="0.55" stop-color="#000000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.45"/>
    </radialGradient>
  </defs>`

const grid = (w, h, step = 48, op = 0.06) => {
  let g = `<g stroke="${STEEL}" stroke-opacity="${op}">`
  for (let x = step; x < w; x += step) g += `<line x1="${x}" y1="0" x2="${x}" y2="${h}"/>`
  for (let y = step; y < h; y += step) g += `<line x1="0" y1="${y}" x2="${w}" y2="${y}"/>`
  return g + '</g>'
}

// A tower crane drawn from a base point.
const crane = (x, base, mastH, jib, dir = 1, color = STEEL) => {
  const top = base - mastH
  return `<g stroke="${color}" stroke-width="2" fill="none" stroke-opacity="0.85">
    <line x1="${x}" y1="${base}" x2="${x}" y2="${top}"/>
    <line x1="${x - 6}" y1="${base}" x2="${x + 6}" y2="${base}"/>
    <line x1="${x}" y1="${top + 14}" x2="${x + dir * jib}" y2="${top + 14}"/>
    <line x1="${x}" y1="${top + 14}" x2="${x - dir * jib * 0.32}" y2="${top + 14}"/>
    <line x1="${x}" y1="${top}" x2="${x + dir * jib}" y2="${top + 14}"/>
    <line x1="${x}" y1="${top}" x2="${x - dir * jib * 0.32}" y2="${top + 14}"/>
    <line x1="${x + dir * jib * 0.7}" y1="${top + 14}" x2="${x + dir * jib * 0.7}" y2="${top + 14 + 48}"/>
    <line x1="${x + dir * jib * 0.7}" y1="${top + 14 + 48}" x2="${x + dir * jib * 0.7 + dir * 14}" y2="${top + 14 + 48}"/>
    ${Array.from({ length: 6 }, (_, i) => `<line x1="${x}" y1="${top + 18 + i * ((mastH - 24) / 6)}" x2="${x + (i % 2 ? 7 : -7)}" y2="${top + 18 + (i + 0.5) * ((mastH - 24) / 6)}"/>`).join('')}
  </g>`
}

const building = (x, base, w, h, op = 1) => {
  let win = ''
  for (let wy = base - h + 16; wy < base - 10; wy += 22) {
    for (let wx = x + 10; wx < x + w - 8; wx += 18) {
      if (Math.random() > 0.78) win += `<rect x="${wx}" y="${wy}" width="6" height="9" fill="${ORANGE}" opacity="0.5"/>`
      else if (Math.random() > 0.6) win += `<rect x="${wx}" y="${wy}" width="6" height="9" fill="${STEEL}" opacity="0.18"/>`
    }
  }
  return `<g opacity="${op}"><rect x="${x}" y="${base - h}" width="${w}" height="${h}" fill="${NIGHT}" stroke="${STEEL}" stroke-opacity="0.25"/>${win}</g>`
}

const frame = (w, h, id) => `${head(w, h, id)}
  <rect width="${w}" height="${h}" fill="url(#sky${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${grid(w, h)}`

const foot = (w, h, id) => `<rect width="${w}" height="${h}" fill="url(#vig${id})"/>
  <line x1="0" y1="${h - 2}" x2="${w}" y2="${h - 2}" stroke="${ORANGE}" stroke-width="3" stroke-opacity="0.8"/>
  <g stroke="${STEEL}" stroke-width="1.5" stroke-opacity="0.5">
    <path d="M28 28 h26 M28 28 v26"/><path d="M${w - 28} 28 h-26 M${w - 28} 28 v26"/>
    <path d="M28 ${h - 28} h26 M28 ${h - 28} v-26"/><path d="M${w - 28} ${h - 28} h-26 M${w - 28} ${h - 28} v-26"/>
  </g>
</svg>`

// ---- Hero scenes (no text) ----
function heroSkyline() {
  const w = 1600, h = 1000, b = 820
  let s = frame(w, h, 'a')
  // distant skyline band
  for (let i = 0; i < 14; i++) s += building(40 + i * 116, b + 60, 96, 120 + Math.random() * 180, 0.5)
  // foreground buildings
  s += building(120, b, 180, 300) + building(360, b, 150, 420) + building(560, b, 220, 250)
  s += building(980, b, 200, 360) + building(1220, b, 180, 300) + building(1430, b, 150, 240)
  // cranes
  s += crane(520, 540, 300, 360, 1) + crane(1180, 470, 360, 320, -1) + crane(860, 600, 240, 240, 1)
  // ground
  s += `<rect x="0" y="${b}" width="${w}" height="${h - b}" fill="${NIGHT}"/>`
  return s + foot(w, h, 'a')
}

function heroSteelFrame() {
  const w = 1600, h = 1000, id = 'b'
  let s = frame(w, h, id)
  s += `<g stroke="${STEEL}" stroke-width="2" fill="none" stroke-opacity="0.55">`
  // perspective steel skeleton — columns + beams receding
  const cols = [180, 430, 700, 980, 1280]
  const top = 250, base = 860
  cols.forEach((x) => { s += `<line x1="${x}" y1="${top}" x2="${x}" y2="${base}"/>` })
  for (let level = 0; level < 5; level++) {
    const y = top + level * ((base - top) / 4)
    s += `<line x1="${cols[0]}" y1="${y}" x2="${cols[cols.length - 1]}" y2="${y - 60}"/>`
    // diagonal bracing per bay
    for (let i = 0; i < cols.length - 1; i++) {
      const y2 = top + (level + 1) * ((base - top) / 4)
      if (level < 4) s += `<line x1="${cols[i]}" y1="${y}" x2="${cols[i + 1]}" y2="${y2 - 60}" stroke-opacity="0.3"/>`
    }
  }
  s += '</g>'
  // orange nodes at a few joints
  ;[[430, 380], [980, 560], [700, 470]].forEach(([x, y]) => { s += `<rect x="${x - 5}" y="${y - 5}" width="10" height="10" fill="${ORANGE}" opacity="0.85" transform="rotate(45 ${x} ${y})"/>` })
  s += `<rect x="0" y="860" width="${w}" height="140" fill="${NIGHT}"/>`
  return s + foot(w, h, id)
}

function heroConcrete() {
  const w = 1600, h = 1000, id = 'c'
  let s = frame(w, h, id)
  // overlapping concrete slabs receding
  const slabs = [[120, 540, 760, 70], [300, 470, 700, 64], [480, 400, 640, 60], [660, 330, 560, 54]]
  slabs.forEach(([x, y, sw, sh], i) => {
    s += `<g opacity="${0.85 - i * 0.12}"><rect x="${x}" y="${y}" width="${sw}" height="${sh}" fill="${SLATE2}" stroke="${STEEL}" stroke-opacity="0.4"/>
    <line x1="${x}" y1="${y + sh}" x2="${x - 40}" y2="${y + sh + 60}" stroke="${STEEL}" stroke-opacity="0.3"/></g>`
  })
  // vertical orange accent beam
  s += `<rect x="980" y="180" width="6" height="700" fill="${ORANGE}" opacity="0.7"/>`
  // blueprint dimension ticks
  s += `<g stroke="${STEEL}" stroke-opacity="0.35" stroke-width="1.5">`
  for (let x = 120; x < 1200; x += 80) s += `<line x1="${x}" y1="900" x2="${x}" y2="918"/>`
  s += `<line x1="120" y1="909" x2="1180" y2="909"/></g>`
  s += `<rect x="0" y="880" width="${w}" height="120" fill="${NIGHT}"/>`
  return s + foot(w, h, id)
}

// ---- Clean industrial tile for projects / services / about (no text) ----
function tile(seed = 0, w = 1200, h = 900) {
  const id = 't' + seed
  let s = frame(w, h, id)
  const base = h - 90
  // a small cluster of structures, varied by seed
  const variants = [
    () => building(160, base, 220, 360) + building(420, base, 170, 480) + crane(520, base - 200, 280, 240, 1),
    () => herFrameMini(),
    () => building(200, base, 300, 300, 0.9) + `<rect x="560" y="${base - 420}" width="6" height="420" fill="${ORANGE}" opacity="0.7"/>` + building(620, base, 240, 380),
  ]
  function herFrameMini() {
    let g = `<g stroke="${STEEL}" stroke-width="2" fill="none" stroke-opacity="0.5">`
    const cols = [220, 480, 760, 1000]
    cols.forEach((x) => { g += `<line x1="${x}" y1="240" x2="${x}" y2="${base}"/>` })
    for (let l = 0; l < 4; l++) { const y = 240 + l * ((base - 240) / 3); g += `<line x1="220" y1="${y}" x2="1000" y2="${y - 30}"/>` }
    g += `</g><rect x="475" y="430" width="10" height="10" fill="${ORANGE}" transform="rotate(45 480 435)"/>`
    return g
  }
  s += variants[seed % variants.length]()
  s += `<rect x="0" y="${base}" width="${w}" height="${h - base}" fill="${NIGHT}"/>`
  return s + foot(w, h, id)
}

const files = {
  // Hero slides — premium, text-free industrial scenes
  'images/hero/hero-1.svg': heroSkyline(),
  'images/hero/hero-2.svg': heroSteelFrame(),
  'images/hero/hero-3.svg': heroConcrete(),
  // Projects (slugs map to project-0X in src/data/projects.ts)
  'images/projects/project-01.svg': tile(0),
  'images/projects/project-02.svg': tile(2),
  'images/projects/project-03.svg': tile(1),
  'images/projects/project-04.svg': tile(0),
  'images/projects/project-05.svg': tile(2),
  'images/projects/project-06.svg': tile(1),
  // Services — one per slug in src/data/services.ts
  'images/services/construction-works.svg': tile(0),
  'images/services/engineering-services.svg': tile(1),
  'images/services/technical-inspection.svg': tile(1),
  'images/services/cost-evaluation.svg': tile(2),
  'images/services/project-execution.svg': tile(0),
  'images/services/procurement-coordination.svg': tile(2),
  'images/services/subcontractor-coordination.svg': tile(1),
  'images/services/fitout-renovation.svg': tile(2),
  'images/services/material-logistics.svg': tile(0),
  // About
  'images/about/about-1.svg': tile(1),
  'images/about/about-2.svg': tile(0),
}

for (const [rel, content] of Object.entries(files)) {
  const out = join(root, rel)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, content)
}
console.log(`Generated ${Object.keys(files).length} text-free industrial SVGs in /public/images`)
