import { PageHero } from '../components/PageHero'
import { PartnersCarousel } from '../components/PartnersCarousel'
import { ContactCta } from '../components/ContactCta'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
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
            az: 'Tikinti-quraşdırma, materiallar, texnika və fasad sahəsində etibarlı tərəfdaşlarla çalışırıq. Loqolar təqdim olunduqda əlavə olunacaq.',
            ru: 'Мы работаем с надёжными партнёрами в области строительно-монтажных работ, материалов, техники и фасадов. Логотипы будут добавлены, когда будут предоставлены.',
            en: 'We work with trusted partners across construction-installation, materials, machinery and facade works. Logos will be added once provided.',
          },
          lang,
        )}
        image="/images/pagehero/partners.svg"
      />

      <section className="border-b border-white/5 bg-slate-deep py-20 md:py-28">
        <PartnersCarousel />
      </section>

      <section className="bg-slate-deep py-20 md:py-28">
        <div className="container-x">
          <SectionHeading index="[01]" eyebrow={t('sections.partnersTag')} title={pick({ az: 'Tərəfdaşlarımız', ru: 'Наши партнёры', en: 'Our partners' }, lang)} className="mb-14" />
          {/* Typographic partner cards (name + specialty) until real logos are provided */}
          <div className="grid grid-cols-1 items-stretch gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {partners.map((p, i) => (
              <Reveal key={p.name} index={i % 2} className="h-full">
                <div className="group flex h-full flex-col justify-between gap-6 bg-slate-deep p-8 transition-colors hover:bg-slate-surface/40">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-orange-brand">{`0${i + 1}`}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-base">{p.name}</h3>
                    {p.specialty && <p className="mt-2 text-sm text-steel">{pick(p.specialty, lang)}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
