import { motion } from 'framer-motion'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { timeline } from '../data/timeline'
import { cn } from '../lib/cn'

/**
 * Animated vertical milestones timeline.
 * - Central dashed line, orange square nodes.
 * - Alternating left/right cards on desktop; single column on mobile.
 * - Scroll-triggered entrance per card.
 */
export function Timeline() {
  const { lang } = useLanguage()
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Central dashed line (desktop) / left line (mobile) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 top-0 w-px border-l border-dashed border-steel/40 left-[7px] md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-12 md:space-y-0">
        {timeline.map((m, i) => {
          const left = i % 2 === 0
          return (
            <li key={i} className="relative md:grid md:grid-cols-2 md:gap-x-12 md:py-8">
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 z-10 h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-orange-brand left-[7px] md:left-1/2 md:top-10"
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: left ? -30 : 30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'ml-8 border border-white/10 bg-slate-surface/40 p-6 md:ml-0',
                  left ? 'md:col-start-1 md:text-right' : 'md:col-start-2',
                )}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-orange-brand">{pick(m.year, lang)}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-base">{pick(m.title, lang)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{pick(m.description, lang)}</p>
              </motion.div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
