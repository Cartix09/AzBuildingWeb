import { PageHero } from '../components/PageHero'
import { ServicesGrid } from '../components/ServicesGrid'
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
        image="/images/services/construction-works.svg"
      />
      <section className="bg-slate-deep py-20 md:py-28">
        <div className="container-x">
          <ServicesGrid services={services} />
        </div>
      </section>
      <ContactCta />
    </>
  )
}
