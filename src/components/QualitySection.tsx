import { Download } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { qualityValues, qualityBadges } from '../data/quality'
import { getIcon } from './icons'

export function QualitySection() {
  const { t, lang } = useLanguage()
  return (
    <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="[05]"
          eyebrow={t('sections.qualityTag')}
          title={t('sections.qualityTitle')}
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {qualityValues.map((v, i) => {
            const Icon = getIcon(v.icon)
            return (
              <Reveal key={i} index={i} className="group bg-slate-deep p-8">
                <Icon className="h-8 w-8 text-steel transition-colors group-hover:text-orange-brand" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-lg font-bold text-base">{pick(v.title, lang)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{pick(v.description, lang)}</p>
              </Reveal>
            )
          })}
        </div>

        {/* Non-claiming badge strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {qualityBadges.map((b, i) => (
            <span key={i} className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel/60">
              {pick(b, lang)}
            </span>
          ))}
        </div>

        {/* Dossier download - placeholder link, replace href with real PDF */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group btn-ghost"
            title="Replace href with a real PDF in /public when available"
          >
            <Download className="h-4 w-4" />
            {t('cta.downloadDossier')}
          </a>
        </div>
      </div>
    </section>
  )
}
