import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { metrics } from '../data/metrics'

export function MetricsSection() {
  const { t, lang } = useLanguage()
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-slate-deep py-24 md:py-32">
      {/* Subtle background wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[22vw] font-extrabold italic leading-none text-white/[0.02]"
      >
        BUILD
      </div>

      <div className="container-x relative z-10">
        <SectionHeading
          index="[01]"
          eyebrow={t('sections.metricsTag')}
          title={t('sections.metricsTitle')}
          align="center"
        />

        <div className="mt-16 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={i} index={i} className="bg-slate-deep p-8 text-center md:p-10">
              <div className="font-display text-5xl font-extrabold text-orange-brand md:text-6xl lg:text-7xl">
                {m.value}
              </div>
              <div className="mx-auto mt-4 h-px w-8 bg-steel/40" />
              <div className="mt-4 font-mono text-xs uppercase tracking-widest text-steel">
                {pick(m.label, lang)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
