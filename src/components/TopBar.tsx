import { Mail, MapPin } from 'lucide-react'
import { useLanguage, pick } from '../i18n/LanguageContext'
import { company } from '../data/translations'
import { LanguageSwitcher } from './LanguageSwitcher'

export function TopBar() {
  const { lang } = useLanguage()
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`

  return (
    <div className="hidden border-b border-white/5 bg-navy-deep text-steel md:block">
      <div className="container-x relative flex h-10 items-center justify-center text-xs">
        {/* Centered address + email (reference top strip) */}
        <div className="flex items-center gap-8">
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
        {/* Language switcher pinned to the right */}
        <div className="absolute right-6 md:right-12">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
