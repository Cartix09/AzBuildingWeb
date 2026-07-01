import { LogoMarquee } from './LogoMarquee'
import { partners } from '../data/partners'
import { useLanguage, pick } from '../i18n/LanguageContext'

/** Single-row looping partner carousel with typographic logo cards. */
export function PartnersCarousel() {
  const { lang } = useLanguage()
  const items = partners.map((p) => ({
    name: p.name,
    subtitle: p.specialty ? pick(p.specialty, lang) : undefined,
    logo: p.logo,
    url: p.url,
  }))
  return <LogoMarquee items={items} duration={38} />
}
