import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

/** Reusable orange-accented CTA band shown at the bottom of inner pages. */
export function ContactCta() {
  const { t } = useLanguage()
  return (
    <section className="border-t border-white/10 bg-slate-deep py-20 md:py-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden border border-white/10 bg-slate-surface/30 p-10 md:p-16">
          <div aria-hidden="true" className="absolute inset-0 bg-blueprint-grid bg-[size:40px_40px] opacity-30" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="eyebrow normal-case">
                <span className="text-orange-brand">+ </span>
                {t('sections.contactTag')}
              </p>
              <h2 className="display mt-4 max-w-2xl text-3xl leading-tight text-base md:text-4xl">
                {t('sections.contactTitle')}
              </h2>
            </div>
            <Link to="/contact" className="group btn-primary shrink-0">
              {t('cta.requestProject')}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
