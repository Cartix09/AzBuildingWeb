import { PageHero } from '../components/PageHero'
import { ServicesGrid } from '../components/ServicesGrid'
import { ProcessSection } from '../components/ProcessSection'
import { QualitySection } from '../components/QualitySection'
import { ContactCta } from '../components/ContactCta'
import { useLanguage } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { services } from '../data/services'

export function Services() {
  const { t } = useLanguage()
  useDocumentMeta(t('nav.services'), t('sections.servicesTitle'))

  return (
    <>
      <PageHero
        eyebrow={t('sections.servicesTag')}
        title={t('sections.servicesTitle')}
        description={t('hero.subtitle')}
        image="/images/pagehero/services.svg"
      />
      <section className="bg-slate-deep py-20 md:py-28">
        <div className="container-x">
          <ServicesGrid services={services} />
        </div>
      </section>
      <ProcessSection />
      <QualitySection />
      <ContactCta />
    </>
  )
}
