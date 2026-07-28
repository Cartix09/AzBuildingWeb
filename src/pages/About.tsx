import { Target, Eye, FileText, ExternalLink, Download } from 'lucide-react'
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
        image="/images/pagehero/about.svg"
      />

      {/* Haqqımızda body — client-approved text, one <p> per paragraph */}
      <section className="border-b border-white/5 bg-slate-deep py-16 md:py-24">
        <div className="container-x max-w-3xl space-y-6">
          {pick(a.intro, lang)
            .split('\n\n')
            .map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-steel md:text-lg">
                {para}
              </p>
            ))}
        </div>
      </section>

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
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Official license document */}
      <section className="bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <SectionHeading index="[03]" eyebrow="LICENSE" title={pick(a.certificates.title, lang)} className="mb-10" />
          <Reveal className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
            {/* Info + actions */}
            <div className="flex flex-col justify-between gap-8 bg-slate-deep p-8 md:p-10">
              <div>
                <span className="inline-flex border border-orange-brand/40 p-3 text-orange-brand">
                  <FileText className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-base">{pick(a.certificates.title, lang)}</h3>
                <p className="mt-3 max-w-md text-steel">{pick(a.certificates.note, lang)}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-steel/70">PDF · license.pdf</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={a.certificates.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t('cta.viewLicense')}
                </a>
                <a href={a.certificates.file} download className="group btn-ghost">
                  <Download className="h-4 w-4" />
                  {t('cta.downloadPdf')}
                </a>
              </div>
            </div>
            {/* Embedded preview (desktop) */}
            <div className="hidden bg-slate-deep p-3 lg:block">
              <object
                data={`${a.certificates.file}#view=FitH&toolbar=0&navpanes=0`}
                type="application/pdf"
                aria-label={pick(a.certificates.title, lang)}
                className="h-[420px] w-full border border-white/10 bg-white/5"
              >
                <div className="flex h-full items-center justify-center p-6 text-center text-sm text-steel">
                  {pick(a.certificates.note, lang)}
                </div>
              </object>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
