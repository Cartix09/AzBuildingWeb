import { PageHero } from '../components/PageHero'
import { PartnersCarousel } from '../components/PartnersCarousel'
import { LogoGrid } from '../components/LogoGrid'
import { ContactCta } from '../components/ContactCta'
import { SectionHeading } from '../components/SectionHeading'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { partners } from '../data/partners'

export function Partners() {
  const { t, lang } = useLanguage()
  useDocumentMeta(t('nav.partners'), t('sections.partnersTitle'))

  return (
    <>
      <PageHero
        eyebrow={t('sections.partnersTag')}
        title={t('sections.partnersTitle')}
        description={pick(
          {
            az: 'Tədarükçülər, subpodratçılar və mühəndislik tərəfdaşları ilə güclü strateji əməkdaşlıq qururuq. Loqolar nümunə kimi yerləşdirilib.',
            ru: 'Мы выстраиваем прочные стратегические альянсы с поставщиками, субподрядчиками и инженерными партнёрами. Логотипы — плейсхолдеры.',
            en: 'We build strong strategic alliances with suppliers, subcontractors and engineering partners. The logos are placeholders.',
          },
          lang,
        )}
        image="/images/services/project-execution.svg"
      />

      <section className="border-b border-white/5 bg-slate-deep py-20 md:py-28">
        <PartnersCarousel />
      </section>

      <section className="bg-slate-deep py-20 md:py-28">
        <div className="container-x">
          <SectionHeading index="[01]" eyebrow={t('sections.partnersTag')} title={pick({ az: 'Bütün tərəfdaşlar', ru: 'Все партнёры', en: 'All partners' }, lang)} className="mb-14" />
          <LogoGrid items={partners} />
        </div>
      </section>

      <ContactCta />
    </>
  )
}
