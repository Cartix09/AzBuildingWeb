import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

interface LogoProps {
  className?: string
  /** Show the AZBUILDING MMC wordmark next to the mark. */
  showWordmark?: boolean
  /** Visual size of the lockup. */
  size?: 'sm' | 'md' | 'lg'
}

const SIZES = {
  sm: { mark: 'h-7', word: 'text-lg', gap: 'gap-2.5' },
  md: { mark: 'h-9', word: 'text-xl', gap: 'gap-3' },
  lg: { mark: 'h-12 md:h-14', word: 'text-2xl md:text-3xl', gap: 'gap-3.5' },
}

/**
 * Brand logo. The official mark is the architectural "A" cutout at
 * /public/logos/azbuilding-mark.png (transparent) — do not redesign its shape.
 */
export function Logo({ className, showWordmark = true, size = 'md' }: LogoProps) {
  const s = SIZES[size]
  return (
    <Link
      to="/"
      className={cn('group flex shrink-0 items-center', s.gap, className)}
      aria-label="AZBUILDING MMC - home"
    >
      {/* Official brand mark (transparent PNG cutout of the architectural "A"). */}
      <img
        src="/logos/azbuilding-mark.png"
        alt=""
        aria-hidden="true"
        className={cn('w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-105', s.mark)}
      />
      {showWordmark && (
        <span className={cn('whitespace-nowrap font-display font-extrabold leading-none tracking-tight text-base', s.word)}>
          AZBUILDING <span className="text-gold">MMC</span>
        </span>
      )}
    </Link>
  )
}
