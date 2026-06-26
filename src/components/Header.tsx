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

export function Header() {
  const { t, lang } = useLanguage()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b transition-colors duration-300',
          scrolled ? 'border-white/10 bg-slate-deep/95 backdrop-blur' : 'border-transparent bg-slate-deep/80 backdrop-blur',
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {mainNav.map((item) =>
              item.labelKey === 'nav.services' ? (
                <div key={item.to} className="group relative">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-orange-brand',
                        isActive ? 'text-orange-brand' : 'text-base',
                      )
                    }
                  >
                    {t(item.labelKey)}
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </NavLink>
                  {/* Dropdown */}
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 border border-white/10 bg-slate-deep opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="block border-b border-white/5 px-4 py-3 text-sm text-steel transition-colors last:border-0 hover:bg-orange-brand hover:text-white"
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
                      'font-mono text-xs uppercase tracking-widest transition-colors hover:text-orange-brand',
                      isActive ? 'text-orange-brand' : 'text-base',
                    )
                  }
                >
                  {t(item.labelKey)}
                </NavLink>
              ),
            )}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="text-base transition-colors hover:text-orange-brand"
            >
              <Search className="h-5 w-5" />
            </button>
            <LanguageSwitcher className="hidden sm:flex" />
            <Link to="/contact" className="group btn-primary hidden xl:inline-flex">
              {t('cta.requestProject')}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="text-base transition-colors hover:text-orange-brand lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-deep lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-x flex h-16 items-center justify-between">
              <Logo />
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-base hover:text-orange-brand">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="container-x mt-6 flex flex-col" aria-label="Mobile">
              {mainNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'border-b border-white/10 py-4 font-display text-2xl font-bold transition-colors',
                      isActive ? 'text-orange-brand' : 'text-base hover:text-orange-brand',
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
