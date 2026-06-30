import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HeroSlider } from '../components/HeroSlider'
import { SectionHeading } from '../components/SectionHeading'
import { ServicesGrid } from '../components/ServicesGrid'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { PartnersCarousel } from '../components/PartnersCarousel'
import { ContactForm } from '../components/ContactForm'
import { MapEmbed } from '../components/MapEmbed'
import { useLanguage } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { featuredServices } from '../data/services'
import { featuredProjects } from '../data/projects'

export function Home() {
  const { t } = useLanguage()
  useDocumentMeta(
    'Construction & Infrastructure',
    'AZBUILDING LLC — AZBİLDİNQ MMC: civil-industrial and infrastructure construction since 2009. Selected projects across Azerbaijan, Georgia and Ukraine.',
  )

  return (
    <>
      <HeroSlider />

      {/* Selected / featured portfolio projects — the focus of the home page */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading index="[01]" eyebrow={t('sections.featuredTag')} title={t('sections.featuredTitle')} />
            <Link to="/projects" className="group btn-ghost shrink-0">
              {t('cta.viewPortfolio')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-14">
            <ProjectsGrid projects={featuredProjects()} />
          </div>
        </div>
      </section>

      {/* Services overview (compact) */}
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

      {/* Partners carousel */}
      <section className="border-b border-white/5 bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <SectionHeading index="[03]" eyebrow={t('sections.partnersTag')} title={t('sections.partnersTitle')} />
        </div>
        <div className="mt-14">
          <PartnersCarousel />
        </div>
        <div className="container-x mt-12">
          <Link to="/partners" className="group btn-ghost">
            {t('cta.becomePartner')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Contact + location */}
      <section id="contact" className="bg-slate-deep py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            index="[04]"
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
