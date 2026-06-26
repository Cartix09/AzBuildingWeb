import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HeroSlider } from '../components/HeroSlider'
import { MetricsSection } from '../components/MetricsSection'
import { SectionHeading } from '../components/SectionHeading'
import { ServicesGrid } from '../components/ServicesGrid'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { ProcessSection } from '../components/ProcessSection'
import { QualitySection } from '../components/QualitySection'
import { Timeline } from '../components/Timeline'
import { PartnersCarousel } from '../components/PartnersCarousel'
import { LogoMarquee } from '../components/LogoMarquee'
import { ContactForm } from '../components/ContactForm'
import { MapEmbed } from '../components/MapEmbed'
import { useLanguage } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { featuredServices } from '../data/services'
import { featuredProjects } from '../data/projects'
import { customers } from '../data/customers'

export function Home() {
  const { t } = useLanguage()
  useDocumentMeta(
    'Construction & Project Execution',
    'AZBUILDING MMC — construction, project execution, design, renovation and repair. Industrial portfolio and completed projects across Azerbaijan.',
  )

  return (
    <>
      <HeroSlider />
      <MetricsSection />

      {/* Services overview */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading index="[02]" eyebrow={t('sections.servicesTag')} title={t('sections.servicesTitle')} />
            <Link to="/services" className="group btn-ghost shrink-0">
              {t('cta.viewAll')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-14">
            <ServicesGrid services={featuredServices()} />
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading index="[03]" eyebrow={t('sections.featuredTag')} title={t('sections.featuredTitle')} />
            <Link to="/projects" className="group btn-ghost shrink-0">
              {t('cta.viewPortfolio')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-14">
            <ProjectsGrid projects={featuredProjects().slice(0, 4)} />
          </div>
        </div>
      </section>

      <ProcessSection />
      <QualitySection />

      {/* Timeline */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            index="[06]"
            eyebrow={t('sections.timelineTag')}
            title={t('sections.timelineTitle')}
            align="center"
            className="mb-16"
          />
          <Timeline />
        </div>
      </section>

      {/* Partners + customers carousels */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <SectionHeading index="[07]" eyebrow={t('sections.partnersTag')} title={t('sections.partnersTitle')} />
        </div>
        <div className="mt-14">
          <PartnersCarousel />
        </div>
        <div className="container-x mt-16">
          <p className="eyebrow mb-6">{t('sections.customersTag')}</p>
        </div>
        <LogoMarquee items={customers} duration={55} />
        <div className="container-x mt-10">
          <Link to="/partners" className="group btn-ghost">
            {t('cta.becomePartner')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Contact + map */}
      <section id="contact" className="bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            index="[08]"
            eyebrow={t('sections.contactTag')}
            title={t('sections.contactTitle')}
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ContactForm />
            <MapEmbed className="min-h-[420px]" />
          </div>
        </div>
      </section>
    </>
  )
}
