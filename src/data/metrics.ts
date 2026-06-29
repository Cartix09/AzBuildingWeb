import type { Lang } from './translations'

type Loc = Record<Lang, string>

export interface Metric {
  /** Display value, kept as a string so "2009" / "15+" render exactly. */
  value: string
  label: Loc
}

/**
 * STRUCTURAL METRICS — EDITABLE values, kept honest and non-exaggerated.
 * The company was founded in 2009 and its portfolio is modest and growing, so
 * these communicate experience and breadth WITHOUT inflated project counts.
 * Confirm/refine with the client before publishing.
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
    value: '9',
    label: { az: 'Xidmət istiqaməti', ru: 'Направлений услуг', en: 'Service areas' },
  },
  {
    value: '4',
    label: {
      az: 'Əsas istiqamət: tikinti · mühəndislik · ekspertiza · koordinasiya',
      ru: 'Ключевых направления: строительство · инжиниринг · экспертиза · координация',
      en: 'Core disciplines: construction · engineering · expertise · coordination',
    },
  },
]
