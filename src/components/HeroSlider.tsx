import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const slides = [
  '/images/hero/hero-1.svg',
  '/images/hero/hero-2.svg',
  '/images/hero/hero-3.svg',
]

const ROTATE_MS = 7000

/**
 * Foto Slayd hero (reference direction): a clean, light/cream area whose main
 * element is one large auto-changing image. No heavy dark overlay and no big
 * text stacked over it - the photo slider itself is the hero.
 */
export function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[72vh] min-h-[460px] w-full overflow-hidden bg-[#FBF3DD]">
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

      {/* Very light bottom fade only - keeps the area open and luminous while
          grounding the slide indicators. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FBF3DD]/70 to-transparent" />

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
