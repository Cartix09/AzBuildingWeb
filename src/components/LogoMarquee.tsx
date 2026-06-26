import { cn } from '../lib/cn'

interface LogoItem {
  name: string
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
 * Infinite horizontal logo carousel. Renders the list twice so the CSS
 * marquee (translateX -50%) loops seamlessly. Empty `logo` → placeholder box.
 */
export function LogoMarquee({ items, duration = 40, reverse = false }: LogoMarqueeProps) {
  const doubled = [...items, ...items]
  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
    >
      <ul
        className={cn('flex w-max items-stretch animate-marquee group-hover:[animation-play-state:paused]', reverse && 'flex-row-reverse')}
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {doubled.map((item, i) => {
          const box = (
            <div className="flex h-24 w-44 items-center justify-center border border-white/10 bg-slate-surface/30 transition-colors hover:border-orange-brand/40">
              {item.logo ? (
                <img src={item.logo} alt={item.name} className="max-h-12 max-w-[70%] object-contain opacity-70 transition-opacity hover:opacity-100" loading="lazy" />
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-widest text-steel/50">{item.name}</span>
              )}
            </div>
          )
          return (
            <li key={i} className="mx-2 shrink-0" aria-hidden={i >= items.length}>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer">
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
