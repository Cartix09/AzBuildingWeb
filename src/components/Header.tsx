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
            {/* Prominent left gold panel holding the official A mark on a navy plaque.
                Overlaps down into the gold nav bar on desktop (sketch direction). */}
            <Link
              to="/"
              aria-label="AZBUILDING MMC - home"
              className="relative z-30 flex w-20 shrink-0 items-center justify-center bg-gold shadow-navy sm:w-24 md:w-32 lg:-mb-14 lg:w-40"
            >
              <span className="flex items-center justify-center border-2 border-navy-deep/15 bg-navy-deep p-2 md:p-3 lg:p-4">
                <img src={MARK} alt="" aria-hidden="true" className="h-10 w-auto object-contain sm:h-12 md:h-16 lg:h-20" />
              </span>
            </Link>

            {/* Wordmark + tagline */}
            <Link to="/" className="flex min-w-0 flex-1 flex-col justify-center py-4 md:py-6">
              <span className="whitespace-nowrap font-display text-xl font-extrabold leading-none tracking-tight text-[#F8FAFC] sm:text-2xl md:text-3xl lg:text-4xl">
                AZBUILDING <span className="text-gold">MMC</span>
              </span>
              <span className="mt-1.5 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-steel md:text-xs">
                {t('header.tagline')}
              </span>
            </Link>

            {/* Desktop right: search box + language */}
            <div className="hidden items-center gap-5 lg:flex">
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

        {/* ---- Gold navigation bar (desktop) ---- */}
        <div className="relative hidden border-t border-gold-deep/30 bg-gold lg:block">
          <div className="container-x flex h-14 items-center">
            {/* Spacer under the overlapping gold logo panel */}
            <div className="w-40 shrink-0" aria-hidden="true" />
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

            {/* CTA chip (dark navy on the gold bar) */}
            <Link
              to="/contact"
              className="group -mr-6 flex h-14 items-center gap-2 border-l border-navy-deep/15 bg-navy-deep px-7 text-sm font-semibold uppercase tracking-wide text-[#F8FAFC] transition-colors hover:bg-navy hover:text-gold md:-mr-12"
            >
              {t('cta.requestProject')}
              <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
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
              <Logo size="md" />
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
