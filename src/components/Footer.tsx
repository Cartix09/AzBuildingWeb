import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react'
import { Logo } from './Logo'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { company } from '../data/translations'
import { mainNav } from '../data/nav'
import { services } from '../data/services'

export function Footer() {
  const { t, lang } = useLanguage()
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-deep">
      {/* Giant faded background wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-0 w-full select-none text-center font-display text-[18vw] font-extrabold leading-none tracking-tighter text-white/[0.03]"
      >
        AZBUILDING
      </div>

      <div className="container-x relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand + summary */}
          <div className="col-span-2 md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel">{t('footer.summary')}</p>
            <div className="mt-6 flex items-center gap-4">
              <a href={company.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="border border-white/10 p-2.5 text-steel transition-colors hover:border-orange-brand hover:text-orange-brand">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="border border-white/10 p-2.5 text-steel transition-colors hover:border-orange-brand hover:text-orange-brand">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={company.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="border border-white/10 p-2.5 text-steel transition-colors hover:border-orange-brand hover:text-orange-brand">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick nav */}
          <div className="md:col-span-2">
            <h3 className="eyebrow">{t('footer.quickNav')}</h3>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-steel transition-colors hover:text-orange-brand">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="eyebrow">{t('nav.services')}</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-steel transition-colors hover:text-orange-brand">
                    {pick(s.title, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3">
            <h3 className="eyebrow">{t('footer.contact')}</h3>
            <ul className="mt-5 space-y-4 text-sm text-steel">
              <li>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-colors hover:text-orange-brand">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-brand" />
                  <span>{pick(company.address, lang)}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 transition-colors hover:text-orange-brand">
                  <Phone className="h-4 w-4 shrink-0 text-orange-brand" />
                  <span>{company.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-orange-brand">
                  <Mail className="h-4 w-4 shrink-0 text-orange-brand" />
                  <span>{company.email}</span>
                </a>
              </li>
            </ul>
            <Link to="/contact" className="group btn-ghost mt-6 w-full">
              {t('cta.sendInquiry')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 font-mono text-xs text-steel sm:flex-row sm:items-center">
          <p>© 2026 {company.name}. {t('footer.rights')}</p>
          <p className="uppercase tracking-widest">{company.domain}</p>
        </div>
      </div>
    </footer>
  )
}
