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
            az: 'Etibarlı münasibətlərə dəyər veririk. Müştəri və tərəfdaş loqoları sifarişçilərin razılığından sonra əlavə olunacaq.',
            ru: 'Мы ценим доверительные отношения. Логотипы клиентов и партнёров будут добавлены после их согласия.',
            en: 'We value trusted relationships. Client and partner logos will be added after their approval.',
          },
          lang,
        )}
        image="/images/about/about-2.svg"
      />
      <section className="bg-slate-deep py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow mb-8">
            <span className="text-orange-brand">+ </span>
            {pick({ az: 'Loqolar təsdiqdən sonra əlavə olunacaq', ru: 'Логотипы будут добавлены после согласования', en: 'Logos will be added after approval' }, lang)}
          </p>
          <LogoGrid items={customers} />
        </div>
      </section>
      <ContactCta />
    </>
  )
}
