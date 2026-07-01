import { Mail, MapPin, Phone, Globe, Building2, Instagram, Facebook, Linkedin } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import { MapEmbed } from '../components/MapEmbed'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { company } from '../data/translations'

export function Contact() {
  const { t, lang } = useLanguage()
  useDocumentMeta(t('nav.contact'), t('sections.contactTitle'))
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`

  return (
    <>
      <PageHero
        eyebrow={t('sections.contactTag')}
        title={t('sections.contactTitle')}
        description={t('hero.subtitle')}
        image="/images/pagehero/contact.svg"
      />

      <section className="border-b border-white/5 bg-slate-deep py-20 md:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Contact details */}
          <div className="lg:col-span-4">
            <h2 className="eyebrow mb-8">
              <span className="text-orange-brand">+ </span>
              {t('footer.contact')}
            </h2>
            <ul className="space-y-6">
              {/* Actual office address (also used for the map) */}
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                  <span className="border border-white/10 p-3 text-orange-brand"><MapPin className="h-5 w-5" /></span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-widest text-steel">{t('misc.actualAddress')}</span>
                    <span className="mt-1 block text-base transition-colors group-hover:text-orange-brand">{pick(company.address, lang)}</span>
                  </span>
                </a>
              </li>
              {/* Legal (registered) address */}
              <li className="flex items-start gap-4">
                <span className="border border-white/10 p-3 text-steel"><Building2 className="h-5 w-5" /></span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-widest text-steel">{t('misc.legalAddress')}</span>
                  <span className="mt-1 block text-base text-steel">{pick(company.legalAddress, lang)}</span>
                </span>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="group flex items-start gap-4">
                  <span className="border border-white/10 p-3 text-orange-brand"><Phone className="h-5 w-5" /></span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-widest text-steel">{t('form.phone')}</span>
                    <span className="mt-1 block text-base transition-colors group-hover:text-orange-brand">{company.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="group flex items-start gap-4">
                  <span className="border border-white/10 p-3 text-orange-brand"><Mail className="h-5 w-5" /></span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-widest text-steel">{t('form.email')}</span>
                    <span className="mt-1 block text-base transition-colors group-hover:text-orange-brand">{company.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                  <span className="border border-white/10 p-3 text-orange-brand"><Globe className="h-5 w-5" /></span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-widest text-steel">{t('misc.website')}</span>
                    <span className="mt-1 block text-base transition-colors group-hover:text-orange-brand">www.azbuilding.az</span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-10 flex items-center gap-4">
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-white/10 p-3 text-steel transition-colors hover:border-orange-brand hover:text-orange-brand"><Instagram className="h-5 w-5" /></a>
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="border border-white/10 p-3 text-steel transition-colors hover:border-orange-brand hover:text-orange-brand"><Facebook className="h-5 w-5" /></a>
              <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="border border-white/10 p-3 text-steel transition-colors hover:border-orange-brand hover:text-orange-brand"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-slate-deep pb-20 md:pb-28">
        <div className="container-x">
          <MapEmbed className="min-h-[460px]" />
        </div>
      </section>
    </>
  )
}
