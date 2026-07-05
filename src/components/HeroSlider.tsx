import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const slides = [
  '/images/hero/hero-1.svg',
  '/images/hero/hero-2.svg',
  '/images/hero/hero-3.svg',
]

const ROTATE_MS = 7000

/**
 * Foto Slayd hero: a bright, auto-changing image slider with the headline copy
 * restored on the left. A soft cream scrim on the left keeps the navy text
 * readable across all three slides without darkening the image - it stays the
 * light Foto Slayd area, just with a proper website hero on top.
 */
export function HeroSlider() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden bg-[#FBF3DD]">
      {/* One large changing image, filling the cream Foto Slayd area */}
      <AnimatePresence>
        <motion.img
          key={active}
          src={slides[active]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </AnimatePresence>

      {/* Soft cream scrim on the left for legible dark text (no heavy dark veil),
          plus a light bottom fade to ground the indicators. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FBF3DD]/95 via-[#FBF3DD]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FBF3DD]/80 to-transparent" />

      {/* Hero copy on the left */}
      <div className="container-x relative z-10 flex h-full flex-col justify-center pb-16">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-orange-brand"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('hero.eyebrow')}
        </motion.p>

        <motion.h1
          className="display mt-4 max-w-4xl text-4xl leading-[0.98] text-navy-deep sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base text-navy/80 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link to="/projects" className="group btn-primary">
            {t('cta.viewPortfolio')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {/* Dark-outline variant so the ghost button reads on the light hero */}
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap border border-navy-deep/70 bg-transparent px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy-deep transition-colors hover:bg-navy-deep hover:text-[#F8FAFC]"
          >
            {t('cta.requestProject')}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Slide indicators (navy on light) */}
      <div className="absolute bottom-7 left-0 right-0 z-10">
        <div className="container-x flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 transition-all ${i === active ? 'w-10 bg-navy-deep' : 'w-5 bg-navy-deep/30'}`}
              />
            ))}
          </div>
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-navy-deep/60 sm:flex">
            <span>SCROLL</span>
            <span className="block h-8 w-px animate-pulse bg-navy-deep/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
