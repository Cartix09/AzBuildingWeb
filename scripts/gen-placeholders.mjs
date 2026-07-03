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

const head = (w, h, id) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${SLATE2}"/>
      <stop offset="0.6" stop-color="${SLATE}"/>
      <stop offset="1" stop-color="${NIGHT}"/>
    </linearGradient>
    <radialGradient id="glow${id}" cx="0.22" cy="0.92" r="0.95">
      <stop offset="0" stop-color="${ORANGE}" stop-opacity="0.22"/>
      <stop offset="0.4" stop-color="${ORANGE}" stop-opacity="0.05"/>
      <stop offset="1" stop-color="${ORANGE}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig${id}" cx="0.5" cy="0.45" r="0.78">
      <stop offset="0.5" stop-color="#000000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.5"/>
    </radialGradient>
  </defs>`

const grid = (w, h, step = 48, op = 0.1) => {
  let g = `<g stroke="${STEEL}" stroke-opacity="${op}">`
  for (let x = step; x < w; x += step) g += `<line x1="${x}" y1="0" x2="${x}" y2="${h}"/>`
  for (let y = step; y < h; y += step) g += `<line x1="0" y1="${y}" x2="${w}" y2="${y}"/>`
  return g + '</g>'
}

// A tower crane drawn from a base point.
const crane = (x, base, mastH, jib, dir = 1, color = STEEL, op = 0.9) => {
  const top = base - mastH
  return `<g stroke="${color}" stroke-width="2.4" fill="none" stroke-opacity="${op}">
    <line x1="${x}" y1="${base}" x2="${x}" y2="${top}"/>
    <line x1="${x - 7}" y1="${base}" x2="${x + 7}" y2="${base}"/>
    <line x1="${x}" y1="${top + 14}" x2="${x + dir * jib}" y2="${top + 14}"/>
    <line x1="${x}" y1="${top + 14}" x2="${x - dir * jib * 0.32}" y2="${top + 14}"/>
    <line x1="${x}" y1="${top}" x2="${x + dir * jib}" y2="${top + 14}"/>
    <line x1="${x}" y1="${top}" x2="${x - dir * jib * 0.32}" y2="${top + 14}"/>
    <line x1="${x + dir * jib * 0.7}" y1="${top + 14}" x2="${x + dir * jib * 0.7}" y2="${top + 14 + 52}"/>
    <line x1="${x + dir * jib * 0.7}" y1="${top + 14 + 52}" x2="${x + dir * jib * 0.7 + dir * 16}" y2="${top + 14 + 52}"/>
    ${Array.from({ length: 6 }, (_, i) => `<line x1="${x}" y1="${top + 18 + i * ((mastH - 24) / 6)}" x2="${x + (i % 2 ? 8 : -8)}" y2="${top + 18 + (i + 0.5) * ((mastH - 24) / 6)}"/>`).join('')}
  </g>`
}

const building = (x, base, w, h, op = 1, winProb = 0.82) => {
  let win = ''
  for (let wy = base - h + 16; wy < base - 10; wy += 22) {
    for (let wx = x + 10; wx < x + w - 8; wx += 18) {
      if (Math.random() > winProb) win += `<rect x="${wx}" y="${wy}" width="6" height="9" fill="${ORANGE}" opacity="0.62"/>`
      else if (Math.random() > 0.5) win += `<rect x="${wx}" y="${wy}" width="6" height="9" fill="${STEEL}" opacity="0.28"/>`
    }
  }
  return `<g opacity="${op}"><rect x="${x}" y="${base - h}" width="${w}" height="${h}" fill="${NIGHT}" stroke="${STEEL}" stroke-opacity="0.35"/>${win}</g>`
}

// Scaffolding tower: vertical standards + horizontal ledgers + diagonal braces.
const scaffold = (x, base, bays, bayW, h, op = 0.5) => {
  const top = base - h
  let s = `<g stroke="${STEEL}" stroke-width="1.6" stroke-opacity="${op}" fill="none">`
  for (let i = 0; i <= bays; i++) s += `<line x1="${x + i * bayW}" y1="${top}" x2="${x + i * bayW}" y2="${base}"/>`
  for (let y = top; y <= base; y += 46) s += `<line x1="${x}" y1="${y}" x2="${x + bays * bayW}" y2="${y}"/>`
  for (let i = 0; i < bays; i++) {
    for (let y = top; y < base; y += 92) s += `<line x1="${x + i * bayW}" y1="${y}" x2="${x + (i + 1) * bayW}" y2="${y + 46}" stroke-opacity="${op * 0.7}"/>`
  }
  return s + '</g>'
}

const node = (x, y) => `<rect x="${x - 6}" y="${y - 6}" width="12" height="12" fill="${ORANGE}" opacity="0.9" transform="rotate(45 ${x} ${y})"/>`

const frame = (w, h, id, gridOp = 0.1) => `${head(w, h, id)}
  <rect width="${w}" height="${h}" fill="url(#sky${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${grid(w, h, 48, gridOp)}`

const foot = (w, h, id) => `<rect width="${w}" height="${h}" fill="url(#vig${id})"/>
  <line x1="0" y1="${h - 2}" x2="${w}" y2="${h - 2}" stroke="${ORANGE}" stroke-width="3" stroke-opacity="0.85"/>
  <g stroke="${STEEL}" stroke-width="1.5" stroke-opacity="0.55">
    <path d="M28 28 h26 M28 28 v26"/><path d="M${w - 28} 28 h-26 M${w - 28} 28 v26"/>
    <path d="M28 ${h - 28} h26 M28 ${h - 28} v-26"/><path d="M${w - 28} ${h - 28} h-26 M${w - 28} ${h - 28} v-26"/>
  </g>
</svg>`

// ---- Hero scene 1: construction skyline with cranes ----
function heroSkyline() {
  const w = 1600, h = 1000, b = 820
  let s = frame(w, h, 'a', 0.11)
  for (let i = 0; i < 14; i++) s += building(40 + i * 116, b + 60, 96, 130 + Math.random() * 190, 0.6, 0.84)
  s += building(110, b, 190, 320) + building(360, b, 155, 440) + building(560, b, 230, 270)
  s += building(980, b, 210, 380) + building(1230, b, 185, 320) + building(1440, b, 150, 250)
  s += crane(520, 540, 320, 380, 1) + crane(1190, 460, 380, 340, -1) + crane(860, 600, 250, 250, 1)
  s += `<rect x="0" y="${b}" width="${w}" height="${h - b}" fill="${NIGHT}"/>`
  return s + foot(w, h, 'a')
}

// ---- Hero scene 2 (remade): scaffolding + steel frame skeleton + crane ----
function heroStructure() {
  const w = 1600, h = 1000, id = 'b', base = 862
  let s = frame(w, h, id, 0.12)

  // Scaffolding on the left
  s += scaffold(120, base, 3, 90, 470, 0.5)

  // Multi-storey steel frame skeleton (center) - columns + floor beams + bracing
  const cols = [470, 650, 830, 1010, 1190, 1370]
  const top = 250
  const floors = 5
  s += `<g stroke="${STEEL}" stroke-width="2.6" stroke-opacity="0.62" fill="none">`
  cols.forEach((x) => { s += `<line x1="${x}" y1="${top}" x2="${x}" y2="${base}"/>` })
  for (let f = 0; f <= floors; f++) {
    const y = top + f * ((base - top) / floors)
    s += `<line x1="${cols[0]}" y1="${y}" x2="${cols[cols.length - 1]}" y2="${y}"/>`
  }
  s += '</g>'
  // diagonal bracing in alternating bays
  s += `<g stroke="${STEEL}" stroke-width="1.8" stroke-opacity="0.35" fill="none">`
  for (let f = 0; f < floors; f++) {
    const y1 = top + f * ((base - top) / floors)
    const y2 = top + (f + 1) * ((base - top) / floors)
    for (let c = 0; c < cols.length - 1; c++) {
      if ((c + f) % 2 === 0) s += `<line x1="${cols[c]}" y1="${y1}" x2="${cols[c + 1]}" y2="${y2}"/>`
      else s += `<line x1="${cols[c + 1]}" y1="${y1}" x2="${cols[c]}" y2="${y2}"/>`
    }
  }
  s += '</g>'
  // orange level line across one floor + bolt nodes
  const lvl = top + 2 * ((base - top) / floors)
  s += `<line x1="${cols[0]}" y1="${lvl}" x2="${cols[cols.length - 1]}" y2="${lvl}" stroke="${ORANGE}" stroke-width="3" opacity="0.8"/>`
  s += node(cols[1], top + ((base - top) / floors)) + node(cols[3], lvl) + node(cols[4], top + 3 * ((base - top) / floors))

  // Tower crane rising on the right, jib reaching over the frame
  s += crane(1410, 250, 470, 520, -1, STEEL, 0.85)

  s += `<rect x="0" y="${base}" width="${w}" height="${h - base}" fill="${NIGHT}"/>`
  return s + foot(w, h, id)
}

// ---- Hero scene 3 (remade): architectural section + orange beam + dims ----
function heroSection() {
  const w = 1600, h = 1000, id = 'c', base = 860
  let s = frame(w, h, id, 0.1)

  // Faint large building massing behind (tall tower outline with mullions)
  s += `<g opacity="0.5"><rect x="980" y="170" width="360" height="690" fill="${SLATE2}" stroke="${STEEL}" stroke-opacity="0.4"/>`
  for (let x = 1030; x < 1340; x += 52) s += `<line x1="${x}" y1="180" x2="${x}" y2="855" stroke="${STEEL}" stroke-opacity="0.18"/>`
  for (let y = 230; y < 860; y += 60) s += `<line x1="985" y1="${y}" x2="1340" y2="${y}" stroke="${STEEL}" stroke-opacity="0.14"/>`
  s += '</g>'

  // Stacked concrete floor slabs forming a sectional elevation (left/center)
  const slabs = [[150, 760, 640], [210, 680, 600], [270, 600, 560], [330, 520, 520], [390, 440, 480]]
  slabs.forEach(([x, y, sw], i) => {
    s += `<g opacity="${0.92 - i * 0.1}"><rect x="${x}" y="${y}" width="${sw}" height="30" fill="${SLATE2}" stroke="${STEEL}" stroke-opacity="0.5"/>
    <line x1="${x}" y1="${y + 30}" x2="${x + 26}" y2="${y + 66}" stroke="${STEEL}" stroke-opacity="0.3"/>
    <line x1="${x + sw}" y1="${y + 30}" x2="${x + sw + 26}" y2="${y + 66}" stroke="${STEEL}" stroke-opacity="0.3"/></g>`
  })
  // vertical support columns linking the slabs
  s += `<g stroke="${STEEL}" stroke-width="2" stroke-opacity="0.4">`
  for (const cx of [210, 470, 760]) s += `<line x1="${cx}" y1="440" x2="${cx}" y2="${base}"/>`
  s += '</g>'

  // Signature orange vertical accent beam
  s += `<rect x="900" y="150" width="7" height="710" fill="${ORANGE}" opacity="0.82"/>`
  // a short orange horizontal tie
  s += `<rect x="760" y="468" width="147" height="4" fill="${ORANGE}" opacity="0.55"/>`

  // Small crane silhouette far upper-right for site context
  s += crane(1500, 250, 230, 180, -1, STEEL, 0.55)

  // Technical dimension line with ticks along the bottom
  s += `<g stroke="${STEEL}" stroke-opacity="0.4" stroke-width="1.5">`
  s += `<line x1="150" y1="905" x2="790" y2="905"/>`
  for (let x = 150; x <= 790; x += 80) s += `<line x1="${x}" y1="897" x2="${x}" y2="913"/>`
  s += '</g>'

  s += `<rect x="0" y="${base}" width="${w}" height="${h - base}" fill="${NIGHT}"/>`
  return s + foot(w, h, id)
}

// ---- Hero scene 4: road / infrastructure (for the Projects page) ----
function heroRoad() {
  const w = 1600, h = 1000, id = 'd'
  const vx = 820, vy = 430 // vanishing point
  let s = frame(w, h, id, 0.09)
  // distant skyline near the horizon
  for (let i = 0; i < 10; i++) s += building(120 + i * 150, vy + 30, 90, 40 + Math.random() * 90, 0.4, 0.85)
  // road surface (trapezoid converging to the vanishing point)
  s += `<path d="M300 ${h} L${vx - 26} ${vy} L${vx + 26} ${vy} L1300 ${h} Z" fill="${NIGHT}" stroke="${STEEL}" stroke-opacity="0.35"/>`
  // side lane lines
  s += `<g stroke="${STEEL}" stroke-opacity="0.4" stroke-width="2"><line x1="470" y1="${h}" x2="${vx - 14}" y2="${vy}"/><line x1="1130" y1="${h}" x2="${vx + 14}" y2="${vy}"/></g>`
  // dashed orange centre line
  s += `<g stroke="${ORANGE}" stroke-width="6" stroke-opacity="0.8">`
  for (let t = 0; t < 1; t += 0.14) {
    const y1 = h + t * (vy - h), y2 = h + Math.min(1, t + 0.07) * (vy - h)
    const x1 = 800 + t * (vx - 800), x2 = 800 + Math.min(1, t + 0.07) * (vx - 800)
    const scale = 1 - t
    s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-width="${Math.max(1.5, 7 * scale)}"/>`
  }
  s += '</g>'
  // roadside light poles receding on both sides
  const pole = (bx, by, hh) => `<g stroke="${STEEL}" stroke-width="${Math.max(1, hh / 60)}" stroke-opacity="0.5"><line x1="${bx}" y1="${by}" x2="${bx}" y2="${by - hh}"/><line x1="${bx}" y1="${by - hh}" x2="${bx + (bx < vx ? 22 : -22) * (hh / 130)}" y2="${by - hh}"/></g>`
  for (let t = 0; t < 1; t += 0.2) {
    const scale = 1 - t
    const ly = h - t * (h - vy) - 40
    s += pole(360 - t * (360 - (vx - 40)) * 0.0 + (vx - 40 - 360) * t, ly, 150 * scale + 20)
    s += pole(1240 - (1240 - (vx + 40)) * t, ly, 150 * scale + 20)
  }
  return s + foot(w, h, id)
}

// =====================================================================
//  BRIGHT daytime hero scenes (Home slider "FOTO SLAYD").
//  Light, open sky + warm gold sun; navy building & crane silhouettes.
//  The client asked for this area to feel brighter and more open, so
//  these deliberately avoid the dark night palette used everywhere else.
// =====================================================================
const DAY_TOP = '#DCE7F2' // pale cool sky at the very top
const DAY_MID = '#F2E4CB' // warm haze toward the horizon
const DAY_LOW = '#F8EFDD' // bright warm band at the horizon
const NAVY = '#0F2140' // silhouette navy (matches site background)
const NAVY_SOFT = '#274C82' // lighter navy for distant silhouettes
const GOLD = '#F5A524'

const dayHead = (w, h, id) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="dsky${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${DAY_TOP}"/>
      <stop offset="0.6" stop-color="${DAY_MID}"/>
      <stop offset="1" stop-color="${DAY_LOW}"/>
    </linearGradient>
    <radialGradient id="dsun${id}" cx="0.74" cy="0.28" r="0.6">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.85"/>
      <stop offset="0.28" stop-color="${GOLD}" stop-opacity="0.42"/>
      <stop offset="0.7" stop-color="${GOLD}" stop-opacity="0.06"/>
      <stop offset="1" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
  </defs>`

const dayFrame = (w, h, id) => `${dayHead(w, h, id)}
  <rect width="${w}" height="${h}" fill="url(#dsky${id})"/>
  <circle cx="${w * 0.74}" cy="${h * 0.28}" r="${Math.min(w, h) * 0.11}" fill="#FFF7E6" opacity="0.9"/>
  <rect width="${w}" height="${h}" fill="url(#dsun${id})"/>`

// A solid navy building silhouette (no lit windows - reads clean against sky).
const dayBuilding = (x, base, w, h, color = NAVY, op = 1) =>
  `<rect x="${x}" y="${base - h}" width="${w}" height="${h}" fill="${color}" opacity="${op}"/>`

// Navy tower-crane silhouette.
const dayCrane = (x, base, mastH, jib, dir = 1, color = NAVY, op = 0.92) => {
  const top = base - mastH
  return `<g stroke="${color}" stroke-width="3" fill="none" stroke-opacity="${op}">
    <line x1="${x}" y1="${base}" x2="${x}" y2="${top}"/>
    <line x1="${x - 9}" y1="${base}" x2="${x + 9}" y2="${base}"/>
    <line x1="${x}" y1="${top + 14}" x2="${x + dir * jib}" y2="${top + 14}"/>
    <line x1="${x}" y1="${top + 14}" x2="${x - dir * jib * 0.32}" y2="${top + 14}"/>
    <line x1="${x}" y1="${top}" x2="${x + dir * jib}" y2="${top + 14}"/>
    <line x1="${x}" y1="${top}" x2="${x - dir * jib * 0.32}" y2="${top + 14}"/>
    <line x1="${x + dir * jib * 0.68}" y1="${top + 14}" x2="${x + dir * jib * 0.68}" y2="${top + 14 + 56}"/>
    <line x1="${x + dir * jib * 0.68}" y1="${top + 14 + 56}" x2="${x + dir * jib * 0.68 + dir * 18}" y2="${top + 14 + 56}"/>
    ${Array.from({ length: 6 }, (_, i) => `<line x1="${x}" y1="${top + 18 + i * ((mastH - 24) / 6)}" x2="${x + (i % 2 ? 9 : -9)}" y2="${top + 18 + (i + 0.5) * ((mastH - 24) / 6)}"/>`).join('')}
  </g>`
}

const dayFoot = (w, h) => `<line x1="0" y1="${h - 4}" x2="${w}" y2="${h - 4}" stroke="${GOLD}" stroke-width="4" stroke-opacity="0.9"/>
</svg>`

// ---- Bright hero 1: open construction skyline with cranes ----
function dayHeroSkyline() {
  const w = 1600, h = 1000, b = 840, id = 'da'
  let s = dayFrame(w, h, id)
  // distant soft silhouettes
  for (let i = 0; i < 12; i++) s += dayBuilding(30 + i * 138, b, 108, 120 + ((i * 53) % 190), NAVY_SOFT, 0.28)
  // foreground navy towers of varied height
  s += dayBuilding(120, b, 190, 340, NAVY, 0.96) + dayBuilding(360, b, 150, 470, NAVY, 0.96)
  s += dayBuilding(560, b, 230, 290, NAVY, 0.94) + dayBuilding(980, b, 210, 400, NAVY, 0.96)
  s += dayBuilding(1230, b, 185, 330, NAVY, 0.96) + dayBuilding(1440, b, 150, 260, NAVY, 0.94)
  s += dayCrane(520, 560, 340, 400, 1) + dayCrane(1190, 470, 400, 360, -1) + dayCrane(860, 620, 260, 260, 1)
  // warm ground band
  s += `<rect x="0" y="${b}" width="${w}" height="${h - b}" fill="${NAVY}"/>`
  return s + dayFoot(w, h)
}

// ---- Bright hero 2: steel frame skeleton + crane against open sky ----
function dayHeroStructure() {
  const w = 1600, h = 1000, id = 'db', base = 862
  let s = dayFrame(w, h, id)
  const cols = [470, 650, 830, 1010, 1190, 1370]
  const top = 250, floors = 5
  s += `<g stroke="${NAVY}" stroke-width="3.2" stroke-opacity="0.9" fill="none">`
  cols.forEach((x) => { s += `<line x1="${x}" y1="${top}" x2="${x}" y2="${base}"/>` })
  for (let f = 0; f <= floors; f++) {
    const y = top + f * ((base - top) / floors)
    s += `<line x1="${cols[0]}" y1="${y}" x2="${cols[cols.length - 1]}" y2="${y}"/>`
  }
  s += '</g>'
  s += `<g stroke="${NAVY_SOFT}" stroke-width="2" stroke-opacity="0.55" fill="none">`
  for (let f = 0; f < floors; f++) {
    const y1 = top + f * ((base - top) / floors)
    const y2 = top + (f + 1) * ((base - top) / floors)
    for (let c = 0; c < cols.length - 1; c++) {
      if ((c + f) % 2 === 0) s += `<line x1="${cols[c]}" y1="${y1}" x2="${cols[c + 1]}" y2="${y2}"/>`
      else s += `<line x1="${cols[c + 1]}" y1="${y1}" x2="${cols[c]}" y2="${y2}"/>`
    }
  }
  s += '</g>'
  const lvl = top + 2 * ((base - top) / floors)
  s += `<line x1="${cols[0]}" y1="${lvl}" x2="${cols[cols.length - 1]}" y2="${lvl}" stroke="${GOLD}" stroke-width="4" opacity="0.95"/>`
  s += dayCrane(1410, 250, 480, 540, -1)
  s += `<rect x="0" y="${base}" width="${w}" height="${h - base}" fill="${NAVY}"/>`
  return s + dayFoot(w, h)
}

// ---- Bright hero 3: stacked slabs + gold accent beam against open sky ----
function dayHeroSection() {
  const w = 1600, h = 1000, id = 'dc', base = 860
  let s = dayFrame(w, h, id)
  // faint tall tower massing behind
  s += `<g opacity="0.5">${dayBuilding(980, base, 360, 690, NAVY_SOFT, 0.5)}`
  for (let x = 1030; x < 1340; x += 52) s += `<line x1="${x}" y1="180" x2="${x}" y2="${base}" stroke="${DAY_LOW}" stroke-opacity="0.5"/>`
  s += '</g>'
  const slabs = [[150, 760, 640], [210, 680, 600], [270, 600, 560], [330, 520, 520], [390, 440, 480]]
  slabs.forEach(([x, y, sw], i) => {
    s += `<rect x="${x}" y="${y}" width="${sw}" height="30" fill="${NAVY}" opacity="${0.94 - i * 0.08}"/>`
  })
  s += `<g stroke="${NAVY}" stroke-width="3" stroke-opacity="0.8">`
  for (const cx of [210, 470, 760]) s += `<line x1="${cx}" y1="440" x2="${cx}" y2="${base}"/>`
  s += '</g>'
  // signature gold vertical accent beam
  s += `<rect x="900" y="150" width="8" height="710" fill="${GOLD}" opacity="0.9"/>`
  s += `<rect x="760" y="468" width="147" height="5" fill="${GOLD}" opacity="0.65"/>`
  s += dayCrane(1500, 250, 240, 190, -1, NAVY, 0.7)
  s += `<rect x="0" y="${base}" width="${w}" height="${h - base}" fill="${NAVY}"/>`
  return s + dayFoot(w, h)
}

// ---- Clean industrial tile for projects / services / about (no text) ----
function tile(seed = 0, w = 1200, h = 900) {
  const id = 't' + seed
  let s = frame(w, h, id, 0.1)
  const base = h - 90
  function frameMini() {
    let g = `<g stroke="${STEEL}" stroke-width="2" fill="none" stroke-opacity="0.5">`
    const cols = [220, 480, 760, 1000]
    cols.forEach((x) => { g += `<line x1="${x}" y1="240" x2="${x}" y2="${base}"/>` })
    for (let l = 0; l < 4; l++) { const y = 240 + l * ((base - 240) / 3); g += `<line x1="220" y1="${y}" x2="1000" y2="${y - 30}"/>` }
    g += `</g>` + node(480, 435)
    return g
  }
  const variants = [
    () => building(160, base, 220, 360) + building(420, base, 170, 480) + crane(520, base - 200, 280, 240, 1),
    () => frameMini(),
    () => building(200, base, 300, 300, 0.9) + `<rect x="560" y="${base - 420}" width="6" height="420" fill="${ORANGE}" opacity="0.7"/>` + building(620, base, 240, 380),
  ]
  s += variants[seed % variants.length]()
  s += `<rect x="0" y="${base}" width="${w}" height="${h - base}" fill="${NIGHT}"/>`
  return s + foot(w, h, id)
}

const files = {
  // Home hero slides - bright, open daytime scenes (FOTO SLAYD area)
  'images/hero/hero-1.svg': dayHeroSkyline(),
  'images/hero/hero-2.svg': dayHeroStructure(),
  'images/hero/hero-3.svg': dayHeroSection(),
  // Internal page heroes - themed, stronger scenes (reused across languages)
  'images/pagehero/services.svg': heroStructure(),
  'images/pagehero/projects.svg': heroRoad(),
  'images/pagehero/partners.svg': heroSection(),
  'images/pagehero/customers.svg': heroSkyline(),
  'images/pagehero/contact.svg': heroSection(),
  'images/pagehero/about.svg': heroSkyline(),
  // Projects (project-01..11 map to entries in src/data/projects.ts)
  'images/projects/project-01.svg': tile(0),
  'images/projects/project-02.svg': tile(2),
  'images/projects/project-03.svg': tile(1),
  'images/projects/project-04.svg': tile(0),
  'images/projects/project-05.svg': tile(2),
  'images/projects/project-06.svg': tile(1),
  'images/projects/project-07.svg': tile(0),
  'images/projects/project-08.svg': tile(2),
  'images/projects/project-09.svg': tile(1),
  'images/projects/project-10.svg': tile(2),
  'images/projects/project-11.svg': tile(0),
  // Services - one per slug in src/data/services.ts
  'images/services/construction-works.svg': tile(0),
  'images/services/infrastructure-execution.svg': tile(2),
  'images/services/earthworks-planning.svg': tile(0),
  'images/services/utility-lines.svg': tile(1),
  'images/services/monolithic-fitout.svg': tile(2),
  'images/services/project-management-engineering.svg': tile(1),
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
