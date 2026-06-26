import type { Lang } from './translations'

type Loc = Record<Lang, string>

export interface QualityValue {
  icon: string
  title: Loc
  description: Loc
}

/**
 * QUALITY / STANDARDS values.
 * NOTE: Wording is deliberately "quality-focused" / "documentation-ready" and
 * avoids claiming specific certifications. Do not assert real certificates
 * (ISO, OSHA, etc.) until the client provides verified documents.
 */
export const qualityValues: QualityValue[] = [
  {
    icon: 'ShieldCheck',
    title: { az: 'Struktur Etibarlılıq', ru: 'Структурная надёжность', en: 'Structural Integrity' },
    description: {
      az: 'Yük hesablamaları və yüksək keyfiyyətli materiallarla davamlılıq təmin edirik.',
      ru: 'Обеспечиваем долговечность за счёт расчётов нагрузок и качественных материалов.',
      en: 'We ensure durability through load analysis and high-grade materials.',
    },
  },
  {
    icon: 'Crosshair',
    title: { az: 'Dəqiq İcra', ru: 'Точная реализация', en: 'Precision Execution' },
    description: {
      az: 'Hər mərhələ dəqiq planlaşdırma və nəzarət altında icra olunur.',
      ru: 'Каждый этап выполняется под точным планированием и контролем.',
      en: 'Every phase is executed under precise planning and supervision.',
    },
  },
  {
    icon: 'Compass',
    title: { az: 'Müasir Memarlıq', ru: 'Современная архитектура', en: 'Modern Architecture' },
    description: {
      az: 'Müasir dizayn prinsiplərini sənaye möhkəmliyi ilə birləşdiririk.',
      ru: 'Сочетаем современные принципы дизайна с промышленной прочностью.',
      en: 'We combine modern design principles with industrial strength.',
    },
  },
  {
    icon: 'FileCheck2',
    title: { az: 'Sənədləşmə Hazırlığı', ru: 'Готовность документации', en: 'Documentation-Ready Compliance' },
    description: {
      az: 'Tam sənədləşmə və keyfiyyət uçotu ilə uyğunluğa yönəlik işləyirik.',
      ru: 'Работаем с полной документацией и учётом качества, ориентируясь на соответствие.',
      en: 'We work compliance-oriented, with full documentation and quality records.',
    },
  },
]

/** Marquee strip under the quality cards — neutral, non-claiming wording. */
export const qualityBadges: Loc[] = [
  { az: 'KEYFİYYƏTƏ YÖNƏLİK', ru: 'ОРИЕНТАЦИЯ НА КАЧЕСТВО', en: 'QUALITY-FOCUSED' },
  { az: 'SƏNƏDLƏŞMƏ HAZIR', ru: 'ДОКУМЕНТАЦИЯ ГОТОВА', en: 'DOCUMENTATION-READY' },
  { az: 'MÜHƏNDİSLİK MÜKƏMMƏLLİYİ', ru: 'ИНЖЕНЕРНОЕ СОВЕРШЕНСТВО', en: 'ENGINEERING EXCELLENCE' },
  { az: 'TƏHLÜKƏSİZLİYƏ DİQQƏT', ru: 'ВНИМАНИЕ К БЕЗОПАСНОСТИ', en: 'SAFETY-ORIENTED' },
  { az: 'UYĞUNLUĞA YÖNƏLİK', ru: 'ОРИЕНТАЦИЯ НА СООТВЕТСТВИЕ', en: 'COMPLIANCE-ORIENTED' },
]
