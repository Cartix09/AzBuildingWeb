import { cn } from '../lib/cn'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  /** Monospace technical eyebrow, e.g. "[01] STRUCTURAL METRICS". */
  index?: string
  eyebrow: string
  title: string
  /** Optional supporting paragraph. */
  description?: string
  align?: 'left' | 'center'
  /** Render title with the second line italic (matches reference screenshots). */
  className?: string
  light?: boolean
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <p className="eyebrow">
        {index && <span className="text-orange-brand">{index} </span>}
        {eyebrow}
      </p>
      <h2
        className={cn(
          'display mt-4 text-3xl leading-[1.05] sm:text-4xl md:text-5xl',
          light ? 'text-slate-deep' : 'text-base',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-5 max-w-2xl text-base/relaxed', light ? 'text-steel' : 'text-steel')}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
