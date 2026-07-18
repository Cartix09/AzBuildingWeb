import { cn } from '../lib/cn'

interface LogoItem {
  name: string
  /** Optional specialty line (already localized by the caller). */
  subtitle?: string
  logo?: string
  url?: string
}

interface LogoMarqueeProps {
  items: LogoItem[]
  /** Seconds for one full loop. */
  duration?: number
  reverse?: boolean
}

/**
 * Infinite horizontal logo carousel.
 *
 * Loop technique: build ONE sequence that is wide enough to cover large desktop
 * viewports (by repeating the items), then render that sequence twice and
 * animate translateX(0 → -50%). Because one sequence already fills the screen,
 * the motion is clearly visible on 1440px/1920px desktops - not just on mobile.
 * Respects prefers-reduced-motion via the global CSS rule; pauses on hover.
 */
export function LogoMarquee({ items, duration = 38, reverse = false }: LogoMarqueeProps) {
  if (items.length === 0) return null
  // Repeat so a single sequence has enough cards to span a wide desktop.
  const reps = Math.max(2, Math.ceil(10 / items.length))
  const sequence = Array.from({ length: reps }).flatMap(() => items)
  const track = [...sequence, ...sequence] // doubled for the seamless -50% loop

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)' }}
    >
      <ul
        className={cn('flex w-max items-stretch animate-marquee group-hover:[animation-play-state:paused]', reverse && 'flex-row-reverse')}
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {track.map((item, i) => {
          const box = item.logo ? (
            <div className="group/box flex h-28 w-60 items-center justify-center border border-white/10 bg-slate-surface/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:border-orange-brand hover:bg-slate-surface/70">
              <img src={item.logo} alt={item.name} className="max-h-14 max-w-[72%] object-contain opacity-80 transition-opacity duration-300 group-hover/box:opacity-100" loading="lazy" />
            </div>
          ) : (
            // Typographic placeholder "logo" card until a real logo is supplied.
            <div className="group/box flex h-28 w-60 flex-col justify-center gap-2 border border-white/10 bg-slate-surface/40 px-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:border-orange-brand hover:bg-slate-surface/70">
              <span className="h-0.5 w-6 bg-orange-brand/70 transition-all duration-300 group-hover/box:w-10" />
              <span className="whitespace-nowrap font-display text-base font-bold leading-tight text-base">{item.name}</span>
              {item.subtitle && (
                <span className="font-mono text-[9px] uppercase leading-tight tracking-widest text-steel/80">{item.subtitle}</span>
              )}
            </div>
          )
          return (
            <li key={i} className="relative mx-2.5 shrink-0 hover:z-10" aria-hidden={i >= sequence.length}>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {box}
                </a>
              ) : (
                box
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
