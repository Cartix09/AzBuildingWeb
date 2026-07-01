import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { company } from '../data/translations'

const slides = [
  '/images/hero/hero-1.svg',
  '/images/hero/hero-2.svg',
  '/images/hero/hero-3.svg',
]

const ROTATE_MS = 8000

export function HeroSlider() {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden bg-slate-deep">
      {/* Background slides */}
      <AnimatePresence>
        <motion.img
          key={active}
          src={slides[active]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </AnimatePresence>
      {/* Dark overlays - lighter veil so the industrial art reads stronger,
          with a left-darker gradient that keeps the headline crisp. */}
      <div className="absolute inset-0 bg-slate-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/85 via-slate-deep/40 to-slate-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/80 via-transparent to-slate-deep/40" />

      {/* Coordinate marker eyebrow */}
      <div className="container-x relative z-10 flex h-full flex-col justify-center pt-10">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-orange-brand"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          + {pick(company.address, lang)}
        </motion.p>

        <motion.p
          className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-base/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('hero.eyebrow')}
        </motion.p>

        <motion.h1
          className="display mt-4 max-w-5xl text-5xl leading-[0.95] text-base sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg text-base/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <Link to="/projects" className="group btn-primary">
            {t('cta.viewPortfolio')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/contact" className="group btn-ghost">
            {t('cta.requestProject')}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-x flex items-end justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-0.5 transition-all ${i === active ? 'w-10 bg-orange-brand' : 'w-5 bg-white/30'}`}
              />
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-steel sm:flex">
            <span>SCROLL</span>
            <span className="block h-8 w-px animate-pulse bg-steel" />
          </div>
        </div>
      </div>
    </section>
  )
}
