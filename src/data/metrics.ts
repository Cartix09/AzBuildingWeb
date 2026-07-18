import type { Lang } from './translations'

type Loc = Record<Lang, string>

export interface Metric {
  /** Display value, kept as a string so "2009" / "3" render exactly. */
  value: string
  label: Loc
}

/**
 * COMPANY METRICS - honest, non-exaggerated. Founded 2009; experience spans
 * Azerbaijan, Georgia and Ukraine across civil, industrial and infrastructure
 * works. Do not inflate project counts. Confirm/refine with the client.
 */
export const metrics: Metric[] = [
  {
    value: '2009',
    label: { az: 'Təsis ili', ru: 'Год основания', en: 'Established' },
  },
  {
    value: '15+',
    label: { az: 'İllik praktiki təcrübə', ru: 'Лет практического опыта', en: 'Years of practical experience' },
  },
  {
    value: '3',
    label: {
      az: 'Ölkə: Azərbaycan · Gürcüstan · Ukrayna',
      ru: 'Страны: Азербайджан · Грузия · Украина',
      en: 'Countries: Azerbaijan · Georgia · Ukraine',
    },
  },
  {
    value: '3',
    label: {
      az: 'İstiqamət: mülki · sənaye · infrastruktur',
      ru: 'Направления: гражданское · промышленное · инфраструктура',
      en: 'Profiles: civil · industrial · infrastructure',
    },
  },
]
