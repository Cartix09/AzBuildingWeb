// Custom line-art "AZBUILDING" wordmark, drawn as outlined geometric capitals.
// Rationale: it echoes the thin architectural strokes of the official A mark,
// renders identically regardless of web-font loading, and gives us full control
// of every letterform (notably clean A and D) instead of relying on a browser
// text-outline that mangles those glyphs.
//
// Grid: cap top y=10, baseline y=130 (cap height 120), stroke 12, round joins.
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
const SPACING = 18

const parts: { x: number; d: string }[] = []
let cursor = 10
for (const ch of WORD) {
  const g = GLYPHS[ch]
  parts.push({ x: cursor, d: g.d })
  cursor += g.adv + SPACING
}
const VIEW_W = cursor + 4

/** Outlined AZBUILDING wordmark. Colour follows `currentColor`. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} 150`}
      className={className}
      role="img"
      aria-label="AZBUILDING"
      fill="none"
      stroke="currentColor"
      strokeWidth={12}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {parts.map((p, i) => (
        <path key={i} d={p.d} transform={`translate(${p.x},0)`} />
      ))}
    </svg>
  )
}
