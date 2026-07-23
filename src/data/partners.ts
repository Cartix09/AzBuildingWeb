import type { Lang } from './translations'

type Loc = Record<Lang, string>

/**
 * PARTNERS - real partners from the client file (AZB sayt info).
 * No logos were provided yet, so cards render as clean typographic placeholders
 * (company name + specialty). Add real logos to /public/logos/ and set `logo`.
 */
export interface Partner {
  name: string
  /** What the partner provides (shown on typographic cards). */
  specialty?: Loc
  logo?: string
  url?: string
}

export const partners: Partner[] = [
  {
    name: 'Antik MMC',
    specialty: { az: 'Tikinti-quraşdırma işləri', ru: 'Строительно-монтажные работы', en: 'Construction & installation works' },
  },
  {
    name: 'A+A MMC',
    specialty: { az: 'İnert materialların istehsalı', ru: 'Производство инертных материалов', en: 'Aggregate materials production' },
  },
  {
    name: 'Xəzər İnşaat MMC',
    specialty: { az: 'İnşaat texnikaları', ru: 'Строительная техника', en: 'Construction machinery' },
  },
  {
    name: 'Dayfort MMC',
    specialty: { az: 'Fasad işləri', ru: 'Фасадные работы', en: 'Facade works' },
  },
]
