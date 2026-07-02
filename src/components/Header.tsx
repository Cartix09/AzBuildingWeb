import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, Menu, X, ChevronDown, ArrowUpRight, BadgeCheck, CalendarDays } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { SearchOverlay } from './SearchOverlay'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { mainNav } from '../data/nav'
import { services } from '../data/services'
import { cn } from '../lib/cn'

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
      {/* ---- Logo band (sticky on mobile, static on desktop) ---- */}
      <div className="sticky top-0 z-50 border-b border-white/5 bg-navy-deep/95 backdrop-blur lg:static lg:bg-navy-deep">
        <div className="container-x flex h-20 items-center justify-between gap-6 md:h-24">
          <Logo size="lg" />

          {/* Right cluster (desktop) */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {/* Trust badges */}
            <div className="hidden items-center gap-6 xl:flex">
              <span className="flex items-center gap-2 text-steel">
                <CalendarDays className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium text-base">{t('header.since')}</span>
              </span>
              <span className="flex items-center gap-2 text-steel">
                <BadgeCheck className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium text-base">{t('header.license')}</span>
              </span>
            </div>
            {/* Search trigger (looks like an input) */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 border border-navy-light/60 bg-navy px-4 py-2.5 text-sm text-steel transition-colors hover:border-gold"
            >
              <Search className="h-4 w-4 text-gold" />
              <span>{t('search.short')}</span>
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search" className="text-base hover:text-gold">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => setMobileOpen(true)} aria-label="Open menu" className="text-base hover:text-gold">
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* ---- Primary nav bar (sticky, warm gold) — desktop only ---- */}
      <div className="sticky top-0 z-40 hidden bg-gold-bar shadow-gold lg:block">
        <div className="container-x flex h-14 items-center justify-between">
          <nav className="flex items-center gap-6 xl:gap-8" aria-label="Primary">
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
            className="group flex h-14 items-center gap-2 bg-navy-deep px-6 font-semibold uppercase tracking-wide text-base transition-colors hover:text-gold"
          >
            {t('cta.requestProject')}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

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
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-base hover:text-gold">
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
                      isActive ? 'text-gold' : 'text-base hover:text-gold',
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
