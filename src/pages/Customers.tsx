import { PageHero } from '../components/PageHero'
import { LogoGrid } from '../components/LogoGrid'
import { ContactCta } from '../components/ContactCta'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { customers } from '../data/customers'

export function Customers() {
  const { t, lang } = useLanguage()
  useDocumentMeta(t('nav.customers'), t('sections.customersTitle'))

  return (
    <>
      <PageHero
        eyebrow={t('sections.customersTag')}
        title={t('sections.customersTitle')}
        description={pick(
          {
            az: 'Müxtəlif sahələrdən müştərilərlə işləyərək uzunmüddətli etibar qurmuşuq. Loqolar nümunə kimi yerləşdirilib və real müştəri loqoları ilə əvəz olunacaq.',
            ru: 'Мы выстроили долгосрочное доверие, работая с клиентами из разных отраслей. Логотипы — это плейсхолдеры и будут заменены реальными.',
            en: 'We have built long-term trust working with clients across sectors. The logos are placeholders and will be replaced with real client logos.',
          },
          lang,
        )}
        image="/images/about/about-2.svg"
      />
      <section className="bg-slate-deep py-20 md:py-28">
        <div className="container-x">
          <LogoGrid items={customers} />
        </div>
      </section>
      <ContactCta />
    </>
  )
}
