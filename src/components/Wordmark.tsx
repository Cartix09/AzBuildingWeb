// Deterministic AZBUILDING wordmark.
//
// The letters are FIXED SVG outline paths generated from DejaVu Sans Bold - the
// same clean, wide sans that rendered in the approved preview. Because the
// shapes are baked into paths, the wordmark looks identical in every browser
// and does NOT depend on Google Fonts (or any font) loading, which is what made
// it render differently across machines before.
//
// Option 1 look: clean white outlines PLUS internal horizontal "structural"
// lines clipped to the letter shapes, echoing the architectural hatching of the
// official A mark. The interior is open (transparent) so the header navy shows
// through between the lines. A and D are the real DejaVu glyphs, so they stay
// clean and readable.
const VIEW_W = 1215
const PATH =
  'M111.44 130L103.57 107.23L53.18 107.23L45.23 130L12.84 130L59.13 5.03L97.55 5.03L143.84 130L111.44 130M78.38 34.32L61.22 84.05L95.45 84.05 M154.30 29.39L154.30 5.03L259.35 5.03L259.35 24.53L192.30 105.64L261.27 105.64L261.27 130L152.37 130L152.37 110.50L219.42 29.39 M316.94 53.41L334.77 53.41Q342.39 53.41 346.32 50.06Q350.25 46.71 350.25 40.18Q350.25 33.74 346.32 30.35Q342.39 26.96 334.77 26.96L316.94 26.96L316.94 53.41M316.94 108.07L335.86 108.07Q345.57 108.07 350.46 103.97Q355.36 99.87 355.36 91.58Q355.36 83.46 350.50 79.40Q345.65 75.34 335.86 75.34L316.94 75.34L316.94 108.07M365.82 63.12Q376.20 66.13 381.89 74.25Q387.59 82.37 387.59 94.17Q387.59 112.25 375.36 121.13Q363.14 130 338.20 130L284.71 130L284.71 5.03L333.09 5.03Q359.13 5.03 370.80 12.90Q382.48 20.76 382.48 38.09Q382.48 47.22 378.21 53.62Q373.94 60.02 365.82 63.12 M415.38 79.94L415.38 5.03L447.60 5.03L447.60 79.94Q447.60 95.43 452.67 102.08Q457.73 108.74 469.20 108.74Q480.75 108.74 485.81 102.08Q490.88 95.43 490.88 79.94L490.88 5.03L523.10 5.03L523.10 79.94Q523.10 106.48 509.80 119.45Q496.49 132.43 469.20 132.43Q441.99 132.43 428.69 119.45Q415.38 106.48 415.38 79.94 M554.58 130L554.58 5.03L586.80 5.03L586.80 130 M618.36 130L618.36 5.03L650.59 5.03L650.59 105.64L707.17 105.64L707.17 130 M771.38 29.39L759.82 29.39L759.82 105.64L771.38 105.64Q791.13 105.64 801.55 95.85Q811.97 86.05 811.97 67.39Q811.97 48.81 801.59 39.10Q791.21 29.39 771.38 29.39M727.60 130L727.60 5.03L761.58 5.03Q790.04 5.03 803.98 9.09Q817.92 13.15 827.88 22.86Q836.67 31.31 840.93 42.36Q845.20 53.41 845.20 67.39Q845.20 81.53 840.93 92.63Q836.67 103.72 827.88 112.17Q817.83 121.88 803.77 125.94Q789.71 130 761.58 130 M869.90 130L869.90 5.03L902.12 5.03L902.12 130 M933.68 130L933.68 5.03L969.67 5.03L1015.13 90.74L1015.13 5.03L1045.68 5.03L1045.68 130L1009.68 130L964.23 44.29L964.23 130 M1189.48 60.61L1189.48 120.71Q1177.43 126.57 1164.46 129.50Q1151.48 132.43 1137.67 132.43Q1106.45 132.43 1088.20 114.97Q1069.95 97.52 1069.95 67.64Q1069.95 37.42 1088.53 20.09Q1107.12 2.77 1139.43 2.77Q1151.90 2.77 1163.33 5.11Q1174.75 7.46 1184.88 12.06L1184.88 37.92Q1174.42 31.98 1164.08 29.05Q1153.74 26.12 1143.36 26.12Q1124.11 26.12 1113.69 36.88Q1103.27 47.63 1103.27 67.64Q1103.27 87.48 1113.31 98.28Q1123.36 109.07 1141.85 109.07Q1146.88 109.07 1151.19 108.45Q1155.50 107.82 1158.93 106.48L1158.93 82.20L1139.26 82.20L1139.26 60.61'

// Internal horizontal structural lines (Option 1), evenly spaced across the cap.
const LINE_YS: number[] = []
for (let y = 16; y < 136; y += 11) LINE_YS.push(y)

const CLIP_ID = 'azb-wordmark-letters'

/** Outlined AZBUILDING wordmark with internal structural lines (Option 1).
 *  Line/outline colour follows `currentColor`. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} 150`}
      className={className}
      role="img"
      aria-label="AZBUILDING"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <defs>
        <clipPath id={CLIP_ID}>
          <path d={PATH} />
        </clipPath>
      </defs>
      {/* internal horizontal structural lines, clipped to the letters */}
      <g clipPath={`url(#${CLIP_ID})`} strokeWidth={3.2} strokeOpacity={0.55}>
        {LINE_YS.map((y) => (
          <line key={y} x1={0} y1={y} x2={VIEW_W} y2={y} />
        ))}
      </g>
      {/* crisp outer/counter outline on top */}
      <path d={PATH} strokeWidth={5.5} />
    </svg>
  )
}
