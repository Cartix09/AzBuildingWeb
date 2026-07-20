import { Search, ChevronDown, ArrowUpRight } from 'lucide-react'
import { TopBar } from '../components/TopBar'
import { useLanguage } from '../i18n/LanguageContext'
import { mainNav } from '../data/nav'
import { cn } from '../lib/cn'

/**
 * PREVIEW ONLY — /wordmark-preview
 *
 * Renders the current header band three times, swapping ONLY the AZBUILDING
 * wordmark for each uploaded option image. This page does NOT touch the real
 * Header component or the live homepage. It exists so the client can compare
 * the three wordmark images inside the real header context.
 */

const MARK = '/logos/azbuilding-mark.png'

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

const headerNav = mainNav.filter((item) => item.labelKey !== 'nav.customers')

const options = [
  { key: 'monoton', label: 'Option 1 — Monoton', img: '/images/wordmark-options/wordmark-monoton.png' },
  { key: 'azote', label: 'Option 2 — Azote Regular 5', img: '/images/wordmark-options/wordmark-azote-regular-5.png' },
  { key: 'paneuropa', label: 'Option 3 — Paneuropa Inline 1', img: '/images/wordmark-options/wordmark-paneuropa-inline-1.png' },
]

/** A faithful copy of the real header band, with the wordmark as an image. */
function PreviewHeader({ wordmark }: { wordmark: string }) {
  const { t } = useLanguage()
  return (
    <header className="relative isolate z-0 font-ui">
      {/* ---- Main navy header ---- */}
      <div className="relative bg-navy-deep">
        <div className="container-x flex items-stretch gap-2 md:gap-3">
          {/* Huge white official mark */}
          <span
            className="relative z-30 -ml-[3px] flex w-24 shrink-0 items-start justify-center overflow-visible bg-navy-deep pt-2 sm:w-28 md:w-36 lg:w-44"
          >
            <span
              aria-hidden="true"
              className="block aspect-[357/380] h-24 bg-[#F8FAFC] drop-shadow-[0_10px_22px_rgba(5,15,35,0.55)] sm:h-28 md:h-40 lg:h-48"
              style={maskStyle}
            />
          </span>

          {/* Wordmark IMAGE (option) + tagline */}
          <div className="flex min-w-0 flex-col justify-center py-5 md:py-7 md:translate-y-[10px] lg:py-8 lg:translate-y-[13px]">
            <img
              src={wordmark}
              alt="AZBUILDING"
              className="h-7 w-auto max-w-[70vw] object-contain object-left sm:h-8 md:h-10 lg:h-12"
            />
            <span className="mt-1 truncate text-[11px] font-medium tracking-wide text-steel md:text-xs">
              {t('header.tagline')}
            </span>
          </div>

          {/* Short descriptor */}
          <div className="ml-3 hidden flex-1 items-center justify-center px-4 lg:flex xl:ml-6">
            <span className="mr-6 h-8 w-px shrink-0 bg-white/15" aria-hidden="true" />
            <span className="max-w-[30ch] text-sm font-medium leading-snug text-steel/80">
              {t('header.descriptor')}
            </span>
          </div>

          {/* Silver search button */}
          <div className="ml-auto hidden items-center lg:flex">
            <span
              aria-label={t('search.short')}
              className="flex h-11 w-20 items-center justify-center border border-white/25 bg-[#DCDEE2] text-navy-deep shadow-sm"
            >
              <Search className="h-[18px] w-[18px]" />
            </span>
          </div>
        </div>
      </div>

      {/* ---- Gold navigation bar (desktop) ---- */}
      <div className="relative z-20 hidden bg-navy-deep lg:-mt-8 lg:block">
        <div className="container-x">
          <div className="flex h-11 items-stretch bg-gold">
            <div className="w-44 shrink-0" aria-hidden="true" />
            <nav className="flex flex-1 items-center justify-center gap-7 px-4 xl:gap-9" aria-label="Primary">
              {headerNav.map((item) => (
                <span
                  key={item.to}
                  className={cn(
                    'flex items-center gap-1 whitespace-nowrap text-sm font-bold tracking-wide text-navy-deep/85',
                  )}
                >
                  {t(item.labelKey)}
                  {item.labelKey === 'nav.services' && <ChevronDown className="h-3.5 w-3.5 shrink-0" />}
                </span>
              ))}
            </nav>
            <span className="group mr-3 flex h-8 items-center gap-1.5 self-center bg-navy-deep px-5 text-sm font-semibold tracking-wide text-[#F8FAFC]">
              {t('cta.order')}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export function WordmarkPreview() {
  return (
    <div className="bg-slate-deep py-14">
      <div className="container-x mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-orange-brand">Preview only</p>
        <h1 className="display mt-3 text-3xl text-base md:text-4xl">AZBUILDING wordmark options in the header</h1>
        <p className="mt-4 max-w-2xl text-steel">
          Each block below is the current header with only the AZBUILDING wordmark swapped for one of the three
          uploaded images. The live homepage header is unchanged.
        </p>
      </div>

      <div className="space-y-16">
        {options.map((opt) => (
          <section key={opt.key}>
            <div className="container-x mb-4">
              <span className="inline-block border border-orange-brand/50 bg-orange-brand/10 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-orange-brand">
                {opt.label}
              </span>
            </div>
            {/* Header context: real TopBar + header band with the option wordmark */}
            <div className="border-y border-white/10">
              <TopBar />
              <PreviewHeader wordmark={opt.img} />
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
