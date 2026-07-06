// Custom "AZBUILDING" wordmark, drawn as BOLD OUTLINED (hollow) capitals to
// match the style the client approved: a thick white outline with an open
// navy interior, technical and readable, echoing the architectural A mark.
//
// It is rendered as two stroke layers over shared letter paths - a thick white
// stroke, then a thinner navy stroke on top - which carves an open channel down
// each letter so it reads as an outline. Doing it ourselves (rather than a
// browser text-outline over a web font) keeps every letterform clean - notably
// A and D - and renders identically regardless of font loading.
//
// Grid: cap top y=10, baseline y=130 (cap height 120), round joins.
const GLYPHS: Record<string, { adv: number; d: string }> = {
  A: { adv: 78, d: 'M6,130 L39,10 L72,130 M16.5,92 H61.5' },
  Z: { adv: 66, d: 'M8,10 H60 L8,130 H60' },
  B: { adv: 64, d: 'M10,10 V130 M10,10 H38 C56,10 56,70 38,70 H10 M10,70 H42 C62,70 62,130 42,130 H10' },
  U: { adv: 66, d: 'M10,10 V84 C10,130 56,130 56,84 V10' },
  I: { adv: 16, d: 'M8,10 V130' },
  L: { adv: 54, d: 'M10,10 V130 H52' },
  D: { adv: 70, d: 'M10,10 V130 M10,10 H34 C62,10 62,130 34,130 H10' },
  N: { adv: 70, d: 'M10,130 V10 L60,130 V10' },
  G: { adv: 74, d: 'M64,42 C54,14 22,12 16,48 C10,84 16,126 44,124 C60,123 66,112 66,94 V82 H44' },
}

const WORD = 'AZBUILDING'
const SPACING = 20
const OUTER = 26 // white outline thickness
const INNER = 11 // navy channel that opens the letters
const NAVY = '#0A182F' // header background - keeps the interior "hollow"

const parts: { x: number; d: string }[] = []
let cursor = 12
for (const ch of WORD) {
  const g = GLYPHS[ch]
  parts.push({ x: cursor, d: g.d })
  cursor += g.adv + SPACING
}
const VIEW_W = cursor + 6
const paths = parts.map((p, i) => <path key={i} d={p.d} transform={`translate(${p.x},0)`} />)

/** Bold outlined AZBUILDING wordmark. Outline colour follows `currentColor`. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} 150`}
      className={className}
      role="img"
      aria-label="AZBUILDING"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g stroke="currentColor" strokeWidth={OUTER}>
        {paths}
      </g>
      <g stroke={NAVY} strokeWidth={INNER}>
        {paths}
      </g>
    </svg>
  )
}
