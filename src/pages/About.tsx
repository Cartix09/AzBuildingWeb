import { Link } from 'react-router-dom'
import { ArrowUpRight, Target, Eye, FileBadge } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { Timeline } from '../components/Timeline'
import { MetricsSection } from '../components/MetricsSection'
import { Reveal } from '../components/Reveal'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { aboutContent } from '../data/about'

export function About() {
  const { t, lang } = useLanguage()
  useDocumentMeta(t('nav.about'), pick(aboutContent.intro, lang))
  const a = aboutContent

  return (
    <>
      <PageHero
        eyebrow={pick(a.eyebrow, lang)}
        title={pick(a.title, lang)}
        description={pick(a.intro, lang)}
        image="/images/about/about-1.svg"
      />

      {/* Mission / Vision */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          <Reveal className="bg-slate-deep p-10">
            <Target className="h-8 w-8 text-orange-brand" strokeWidth={1.5} />
            <h2 className="mt-6 font-display text-2xl font-bold text-base">{pick(a.mission.title, lang)}</h2>
            <p className="mt-4 text-steel">{pick(a.mission.body, lang)}</p>
          </Reveal>
          <Reveal index={1} className="bg-slate-deep p-10">
            <Eye className="h-8 w-8 text-orange-brand" strokeWidth={1.5} />
            <h2 className="mt-6 font-display text-2xl font-bold text-base">{pick(a.vision.title, lang)}</h2>
            <p className="mt-4 text-steel">{pick(a.vision.body, lang)}</p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <SectionHeading index="[01]" eyebrow="PRINCIPLES" title={pick({ az: 'Prinsiplərimiz', ru: 'Наши принципы', en: 'Our principles' }, lang)} className="mb-14" />
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {a.principles.map((p, i) => (
              <Reveal key={i} index={i} className="bg-slate-deep p-8">
                <span className="font-display text-4xl font-extrabold text-white/10">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-base">{pick(p.title, lang)}</h3>
                <p className="mt-3 text-sm text-steel">{pick(p.body, lang)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MetricsSection />

      {/* Timeline */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <SectionHeading index="[02]" eyebrow={t('sections.timelineTag')} title={t('sections.timelineTitle')} align="center" className="mb-16" />
          <Timeline />
        </div>
      </section>

      {/* Certificates placeholder */}
      <section className="bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <SectionHeading index="[03]" eyebrow="DOCUMENTATION" title={pick(a.certificates.title, lang)} className="mb-10" />
          <Reveal className="flex flex-col items-start gap-6 border border-dashed border-white/15 bg-slate-surface/30 p-10 md:flex-row md:items-center">
            <FileBadge className="h-10 w-10 shrink-0 text-steel" strokeWidth={1.5} />
            <p className="max-w-2xl text-steel">{pick(a.certificates.note, lang)}</p>
            <Link to="/contact" className="group btn-ghost shrink-0 md:ml-auto">
              {t('cta.sendInquiry')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
