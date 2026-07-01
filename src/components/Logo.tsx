import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

interface LogoProps {
  className?: string
  /** Show the AZBUILDING MMC wordmark next to the mark. */
  showWordmark?: boolean
}

/**
 * Brand logo. The mark lives at /public/logos/azbuilding-mark.svg - replace
 * that file with the official brand SVG and this component updates everywhere.
 */
export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <Link to="/" className={cn('group flex shrink-0 items-center gap-2.5', className)} aria-label="AZBUILDING MMC - home">
      <img
        src="/logos/azbuilding-mark.svg"
        alt=""
        aria-hidden="true"
        className="h-7 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      {showWordmark && (
        <span className="whitespace-nowrap font-display text-lg font-extrabold tracking-tight text-base lg:text-xl">
          AZBUILDING <span className="text-steel">MMC</span>
        </span>
      )}
    </Link>
  )
}
