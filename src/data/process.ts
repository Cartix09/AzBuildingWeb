import type { Lang } from './translations'

type Loc = Record<Lang, string>

export interface ProcessStep {
  num: string
  title: Loc
  description: Loc
}

/** "How we execute your vision" - four-step execution process. */
export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: { az: 'Layihə Analizi', ru: 'Анализ проекта', en: 'Project Analysis' },
    description: {
      az: 'Tələbləri, sahəni və büdcəni dəqiq qiymətləndiririk.',
      ru: 'Точно оцениваем требования, площадку и бюджет.',
      en: 'We assess requirements, the site and the budget precisely.',
    },
  },
  {
    num: '02',
    title: { az: 'Dizayn və Planlaşdırma', ru: 'Проектирование и план', en: 'Design & Planning' },
    description: {
      az: 'Mühəndis həlləri, qrafik və smeta hazırlayırıq.',
      ru: 'Готовим инженерные решения, график и смету.',
      en: 'We prepare engineering solutions, schedule and estimates.',
    },
  },
  {
    num: '03',
    title: { az: 'İcra və Tikinti', ru: 'Реализация и стройка', en: 'Execution & Build' },
    description: {
      az: 'Keyfiyyət və təhlükəsizlik nəzarəti ilə tikintini icra edirik.',
      ru: 'Ведём строительство под контролем качества и безопасности.',
      en: 'We build under strict quality and safety supervision.',
    },
  },
  {
    num: '04',
    title: { az: 'Təhvil və Dəstək', ru: 'Сдача и поддержка', en: 'Handover & Support' },
    description: {
      az: 'Sənədləşmə ilə təhvil veririk və sonrakı dəstəyi təmin edirik.',
      ru: 'Сдаём с документацией и обеспечиваем дальнейшую поддержку.',
      en: 'We hand over with documentation and provide ongoing support.',
    },
  },
]

/** Tags shown below the process section. */
export const processTags: Loc[] = [
  { az: 'TİKİNTİ MÜHƏNDİSLİYİ', ru: 'СТРОИТЕЛЬНЫЙ ИНЖИНИРИНГ', en: 'CONSTRUCTION ENGINEERING' },
  { az: 'LAYİHƏ İDARƏETMƏSİ', ru: 'УПРАВЛЕНИЕ ПРОЕКТАМИ', en: 'PROJECT MANAGEMENT' },
  { az: 'KEYFİYYƏTƏ NƏZARƏT', ru: 'КОНТРОЛЬ КАЧЕСТВА', en: 'QUALITY CONTROL' },
  { az: 'TƏHLÜKƏSİZLİK', ru: 'БЕЗОПАСНОСТЬ', en: 'SITE SAFETY' },
]
