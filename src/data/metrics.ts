import type { Lang } from './translations'

type Loc = Record<Lang, string>

export interface Metric {
  /** Display value, kept as a string so "100%" / "120+" render exactly. */
  value: string
  label: Loc
}

/**
 * STRUCTURAL METRICS — EDITABLE PLACEHOLDER VALUES.
 * Replace these numbers with the client's verified figures before publishing.
 */
export const metrics: Metric[] = [
  {
    value: '15+',
    label: { az: 'İllik təcrübə', ru: 'Лет опыта', en: 'Years of Expertise' },
  },
  {
    value: '120+',
    label: { az: 'İcra edilmiş layihə', ru: 'Реализованных проектов', en: 'Projects Executed' },
  },
  {
    value: '45+',
    label: { az: 'Sənaye tərəfdaşı', ru: 'Отраслевых партнёров', en: 'Industrial Partners' },
  },
  {
    value: '100%',
    label: { az: 'Sənədləşmə diqqəti', ru: 'Фокус на документации', en: 'Documentation Focus' },
  },
]
