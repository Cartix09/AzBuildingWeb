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
// WHITE silhouette using the PNG's alpha as a mask and filling with near-white,
// so it behaves like the huge brand "A" in the client reference. The official
// shape is untouched.
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

// Header/nav menu: drop "Müştərilər" per client (Tərəfdaşlar covers it). The
// /customers route, page and footer link are intentionally left intact.
const headerNav = mainNav.filter((item) => item.labelKey !== 'nav.customers')

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
      <header className="relative isolate z-40 font-ui">
        {/* ---- Main navy header ---- */}
        <div className="relative bg-navy-deep">
          <div className="container-x flex items-stretch gap-2 md:gap-3">
            {/* Huge white official mark on a SOLID navy block. The navy
                background (same as the header) sits behind the mark so that
                where the block dips into the gold nav, the yellow does not
                show through the open parts of the A - it reads as a navy-backed
                logo block (client Image 2). */}
            <Link
              to="/"
              aria-label="AZBUILDING - home"
              className="relative z-30 -ml-[3px] flex w-24 shrink-0 items-start justify-center overflow-visible bg-navy-deep pt-2 sm:w-28 md:w-36 lg:w-44"
            >
              <span
                aria-hidden="true"
                className="block aspect-[357/380] h-24 bg-[#F8FAFC] drop-shadow-[0_10px_22px_rgba(5,15,35,0.55)] sm:h-28 md:h-40 lg:h-48"
                style={maskStyle}
              />
            </Link>

            {/* Company name + tagline - compact lockup tight to the A mark. */}
            <Link to="/" className="flex min-w-0 flex-col justify-center py-5 md:py-7 md:translate-y-[10px] lg:py-8 lg:translate-y-[13px]">
              {/* AZBUILDING wordmark — client-selected "Paneuropa Inline 1" image
                  asset (white on transparent). Used as a picture, not a font. */}
              <img
                src="/images/wordmark-options/wordmark-paneuropa-inline-1.png"
                alt="AZBUILDING"
                className="h-7 w-auto max-w-[70vw] object-contain object-left sm:h-8 md:h-10 lg:h-12"
              />
              <span className="mt-1 truncate text-[11px] font-medium tracking-wide text-steel md:text-xs">
                {t('header.tagline')}
              </span>
            </Link>

            {/* Short descriptor, anchored to the lockup with a hairline divider
                so it reads as part of the same grid instead of floating. */}
            <div className="ml-3 hidden flex-1 items-center justify-center px-4 lg:flex xl:ml-6">
              <span className="mr-6 h-8 w-px shrink-0 bg-white/15" aria-hidden="true" />
              <span className="max-w-[30ch] text-sm font-medium leading-snug text-steel/80">
                {t('header.descriptor')}
              </span>
            </div>

            {/* Right: silver search button (icon only, wider) */}
            <div className="ml-auto hidden items-center lg:flex">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label={t('search.short')}
                className="flex h-11 w-20 items-center justify-center border border-white/25 bg-[#DCDEE2] text-navy-deep shadow-sm transition-colors hover:bg-white"
              >
                <Search className="h-[18px] w-[18px]" />
              </button>
            </div>

            {/* Mobile controls */}
            <div className="ml-auto flex items-center gap-3 lg:hidden">
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
            Flat, contained gold strip: starts after the logo area, ends at the
            white "Sifariş et" CTA on the right; navy shows on both sides.
            Pulled up so the A mark's legs dip into the gold bar (client note);
            the mark keeps z-30 so it sits over the bar without covering links. */}
        <div className="relative z-20 hidden bg-navy-deep lg:-mt-8 lg:block">
          <div className="container-x">
            <div className="flex h-11 items-stretch bg-gold">
              {/* Spacer under the overlapping logo mark */}
              <div className="w-44 shrink-0" aria-hidden="true" />
              <nav className="flex flex-1 items-center justify-center gap-7 px-4 xl:gap-9" aria-label="Primary">
                {headerNav.map((item) =>
                  item.labelKey === 'nav.services' ? (
                    <div key={item.to} className="group relative flex h-11 items-center">
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center gap-1 whitespace-nowrap text-sm font-bold tracking-wide transition-colors',
                            isActive ? 'text-navy-deep' : 'text-navy-deep/85 hover:text-navy-deep',
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
                          'whitespace-nowrap text-sm font-bold tracking-wide transition-colors',
                          isActive ? 'text-navy-deep underline decoration-2 underline-offset-8' : 'text-navy-deep/85 hover:text-navy-deep',
                        )
                      }
                    >
                      {t(item.labelKey)}
                    </NavLink>
                  ),
                )}
              </nav>

              {/* CTA: compact "Təklif al" button in the header navy, sitting
                  INSIDE the gold bar with yellow showing above/below and right. */}
              <Link
                to="/contact"
                className="group mr-3 flex h-8 items-center gap-1.5 self-center bg-navy-deep px-5 text-sm font-semibold tracking-wide text-[#F8FAFC] transition-colors hover:bg-navy"
              >
                {t('cta.order')}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              {headerNav.map((item) => (
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
            {/* Stack the language switcher above a full-width CTA so the long
                RU label can't overlap or clip the AZ | EN | RU buttons. */}
            <div className="container-x mt-10 flex flex-col items-stretch gap-6">
              <LanguageSwitcher />
              <Link to="/contact" className="group btn-primary w-full justify-center">
                {t('cta.order')}
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
