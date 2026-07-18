import { ArrowRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { processSteps, processTags } from '../data/process'

export function ProcessSection() {
  const { t, lang } = useLanguage()
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-slate-deep py-24 md:py-32">
      {/* Blueprint grid background */}
      <div aria-hidden="true" className="absolute inset-0 bg-blueprint-grid bg-[size:40px_40px] opacity-40" />

      <div className="container-x relative z-10">
        <SectionHeading
          index="[04]"
          eyebrow={t('sections.processTag')}
          title={t('sections.processTitle')}
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} index={i} className="relative">
              <div className="relative h-full border border-white/10 bg-slate-deep p-7">
                <span className="font-display text-5xl font-extrabold text-white/10">{step.num}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-base">{pick(step.title, lang)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{pick(step.description, lang)}</p>
              </div>
              {/* Arrow between steps (desktop) */}
              {i < processSteps.length - 1 && (
                <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 bg-slate-deep p-1 lg:block">
                  <ArrowRight className="h-5 w-5 text-orange-brand" />
                </span>
              )}
            </Reveal>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {processTags.map((tag, i) => (
            <span key={i} className="font-mono text-xs uppercase tracking-widest text-steel/70">
              {pick(tag, lang)}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
