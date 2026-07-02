import { Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { company } from '../data/translations'

export function TopBar() {
  const { lang } = useLanguage()
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`

  return (
    <div className="hidden border-b border-white/5 bg-navy-deep text-steel md:block">
      <div className="container-x flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-gold"
          >
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            <span>{pick(company.address, lang)}</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            <span>{company.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-white/10 p-1.5 transition-colors hover:border-gold hover:text-gold">
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="border border-white/10 p-1.5 transition-colors hover:border-gold hover:text-gold">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="border border-white/10 p-1.5 transition-colors hover:border-gold hover:text-gold">
            <Linkedin className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
