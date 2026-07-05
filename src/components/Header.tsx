import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { SearchOverlay } from './SearchOverlay'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { mainNav } from '../data/nav'
import { services } from '../data/services'
import { cn } from '../lib/cn'

const MARK = '/logos/azbuilding-mark.png'

// The official mark is a light architectural "A". We render it as a solid
// navy silhouette on the gold block by using the PNG's alpha as a mask and
// filling with the brand navy — exact palette colour, official shape intact.
const maskStyle = {
  WebkitMaskImage: `url(${MARK})`,
  maskImage: `url(${MARK})`,
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
} as const

export function Header() {
  const { t, lang } = useLanguage()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header className="relative z-40">
        {/* ---- Navy logo band ---- */}
        <div className="relative bg-navy-deep">
          <div className="container-x flex items-stretch gap-4 md:gap-6">
            {/* Prominent left navy block holding the official A mark as a big
                WHITE silhouette. Solid deep-navy background; the mark is sized
                to fill the block and dip down into the gold nav for a proud,
                lively presence (overflow intentionally visible). */}
            <Link
              to="/"
              aria-label="AZBUILDING - home"
              className="relative z-30 flex w-28 shrink-0 items-center justify-center overflow-visible bg-navy shadow-navy sm:w-32 md:w-40 lg:-mb-16 lg:w-52"
            >
              <span
                aria-hidden="true"
                className="block aspect-[357/380] h-24 bg-[#F8FAFC] drop-shadow-[0_8px_18px_rgba(5,15,35,0.6)] sm:h-28 md:h-36 lg:h-44"
                style={maskStyle}
              />
            </Link>

            {/* Wordmark + tagline (header shows AZBUILDING only, no MMC) */}
            <Link to="/" className="flex min-w-0 flex-1 flex-col justify-center py-6 md:py-8 lg:py-11">
              {/* Lowercase wordmark test - heavy weight + slightly opened
                  tracking keeps it premium and solid, not startup-thin. */}
              <span className="whitespace-nowrap font-display text-2xl font-extrabold lowercase leading-none tracking-[0.02em] text-[#F8FAFC] sm:text-3xl md:text-4xl lg:text-5xl">
                azbuilding
              </span>
              <span className="mt-2 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-steel md:text-xs">
                {t('header.tagline')}
              </span>
            </Link>

            {/* Desktop right: real trust block + search box + language, grouped
                with thin dividers so the navy side reads intentional, not empty. */}
            <div className="hidden items-center gap-5 lg:flex">
              <div className="hidden flex-col items-end border-r border-white/10 pr-5 text-right xl:flex">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                  {t('header.since')}
                </span>
                <span className="mt-1 whitespace-nowrap text-[11px] text-steel">
                  {t('header.license')}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 border border-gold/40 bg-base/95 px-4 py-2.5 text-sm text-navy-deep transition-colors hover:border-gold"
              >
                <Search className="h-4 w-4 text-gold" />
                <span className="font-medium">{t('search.short')}</span>
              </button>
              <LanguageSwitcher />
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-3 lg:hidden">
              <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search" className="text-[#F8FAFC] hover:text-gold">
                <Search className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => setMobileOpen(true)} aria-label="Open menu" className="text-[#F8FAFC] hover:text-gold">
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>

        {/* ---- Gold navigation bar (desktop) ----
            Contained: the gold bar spans the centred container (not the full
            browser width), emerging from under the logo block on the left and
            ending at the dark CTA on the right. */}
        <div className="relative hidden bg-navy-deep lg:block">
          <div className="container-x">
            <div className="flex h-14 items-stretch bg-gold shadow-navy">
              {/* Spacer under the overlapping navy logo block */}
              <div className="w-52 shrink-0" aria-hidden="true" />
              <nav className="flex flex-1 items-center gap-6 pl-6 xl:gap-8" aria-label="Primary">
                {mainNav.map((item) =>
                  item.labelKey === 'nav.services' ? (
                    <div key={item.to} className="group relative flex h-14 items-center">
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center gap-1 whitespace-nowrap text-sm font-semibold tracking-wide transition-colors',
                            isActive ? 'text-navy-deep' : 'text-navy-deep/80 hover:text-navy-deep',
                          )
                        }
                      >
                        {t(item.labelKey)}
                        <ChevronDown className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:rotate-180" />
                      </NavLink>
                      <div className="invisible absolute left-0 top-full z-10 w-64 -translate-y-1 border border-white/10 bg-navy-deep opacity-0 shadow-navy transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="block border-b border-white/5 px-4 py-3 text-sm text-steel transition-colors last:border-0 hover:bg-gold hover:text-navy-deep"
                          >
                            {pick(s.title, lang)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'whitespace-nowrap text-sm font-semibold tracking-wide transition-colors',
                          isActive ? 'text-navy-deep underline decoration-2 underline-offset-8' : 'text-navy-deep/80 hover:text-navy-deep',
                        )
                      }
                    >
                      {t(item.labelKey)}
                    </NavLink>
                  ),
                )}
              </nav>

              {/* CTA chip (dark navy at the right end of the contained bar) */}
              <Link
                to="/contact"
                className="group flex h-14 items-center gap-2 border-l border-navy-deep/15 bg-navy-deep px-7 text-sm font-semibold uppercase tracking-wide text-[#F8FAFC] transition-colors hover:bg-navy hover:text-gold"
              >
                {t('cta.requestProject')}
                <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ---- Mobile menu ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy-deep lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-x flex h-20 items-center justify-between">
              <Logo size="md" showWordmark={false} />
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-[#F8FAFC] hover:text-gold">
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="container-x mt-4 flex flex-col" aria-label="Mobile">
              {mainNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'border-b border-white/10 py-4 font-display text-2xl font-bold transition-colors',
                      isActive ? 'text-gold' : 'text-[#F8FAFC] hover:text-gold',
                    )
                  }
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </nav>
            <div className="container-x mt-8 flex items-center justify-between">
              <LanguageSwitcher />
              <Link to="/contact" className="group btn-primary">
                {t('cta.requestProject')}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
