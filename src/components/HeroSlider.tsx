import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

// Real client project photography. `pos` sets object-position so the road /
// building stays visible under the left cream scrim across all breakpoints.
const slides = [
  { src: '/images/hero/hero-shahdag-tourism-centre.jpg', pos: 'center 42%' },
  { src: '/images/hero/hero-road-m07.jpg', pos: 'center 50%' },
  { src: '/images/hero/hero-industrial-cabrayil.jpg', pos: 'center 45%' },
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
          src={slides[active].src}
          alt=""
          aria-hidden="true"
          style={{ objectPosition: slides[active].pos }}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </AnimatePresence>

      {/* Lighter cream scrim: enough on the left to keep the heading + orange
          subtitle readable, but much less pale across the image so the photo
          looks clear and sharp (not dusty/foggy). */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FBF3DD]/80 via-[#FBF3DD]/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FBF3DD]/45 to-transparent" />

      {/* Hero copy on the left (no eyebrow line above the heading, per client) */}
      <div className="container-x relative z-10 flex h-full flex-col justify-center pb-16">
        <motion.h1
          className="display max-w-3xl text-2xl leading-[1.05] text-navy-deep sm:text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-sm font-semibold text-orange-brand md:text-[1.05rem]"
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
