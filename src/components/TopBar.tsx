import { Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { company } from '../data/translations'

export function TopBar() {
  const { lang } = useLanguage()
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`

  return (
    <div className="hidden border-b border-white/5 bg-slate-deep text-steel md:block">
      <div className="container-x flex h-10 items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-orange-brand"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{pick(company.address, lang)}</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 transition-colors hover:text-orange-brand"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{company.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href={company.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-orange-brand">
            <Instagram className="h-4 w-4" />
          </a>
          <a href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-orange-brand">
            <Facebook className="h-4 w-4" />
          </a>
          <a href={company.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-orange-brand">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
