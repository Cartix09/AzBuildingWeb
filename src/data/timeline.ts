import type { Lang } from './translations'

type Loc = Record<Lang, string>

export interface Milestone {
  /** 2009 is the verified founding year. Other markers are placeholders — keep
   *  them as period labels (no invented exact years) until the client confirms.
   *  Localized so labels like "Today" translate per language. */
  year: Loc
  title: Loc
  description: Loc
}

const plain = (s: string): Loc => ({ az: s, ru: s, en: s })

/**
 * COMPANY MILESTONES.
 * Founding year 2009 is real; later milestones are honest period placeholders
 * and deliberately avoid inventing specific achievement years.
 */
export const timeline: Milestone[] = [
  {
    year: plain('2009'),
    title: { az: 'Təməl qoyuldu', ru: 'Основание компании', en: 'Foundation Established' },
    description: {
      az: 'AZBUILDING MMC tikinti, texniki icra və layihə təhvili istiqamətində fəaliyyətə başladı.',
      ru: 'AZBUILDING MMC начала работу с фокусом на строительство, техническое исполнение и сдачу проектов.',
      en: 'AZBUILDING MMC was founded with a focus on construction, technical execution and project delivery.',
    },
  },
  {
    year: plain('—'),
    title: { az: 'Tikinti və Layihə Təcrübəsi', ru: 'Строительный и проектный опыт', en: 'Construction & Project Experience' },
    description: {
      az: 'Seçilmiş yaşayış, infrastruktur və yenidənqurma işləri şirkətin praktiki layihə təcrübəsini formalaşdırdı.',
      ru: 'Избранные жилые, инфраструктурные и реновационные работы сформировали практический проектный опыт компании.',
      en: 'Selected residential, infrastructure and renovation works developed the company’s practical project experience.',
    },
  },
  {
    year: plain('—'),
    title: { az: 'Mühəndislik və Koordinasiya Gücü', ru: 'Инженерные и координационные возможности', en: 'Engineering & Coordination Capacity' },
    description: {
      az: 'Şirkət rolunu mühəndislik dəstəyi, texniki müayinə, təchizat və subpodratçı koordinasiyasına doğru genişləndirdi.',
      ru: 'Компания расширила роль в сторону инженерной поддержки, технического обследования, закупок и координации субподрядчиков.',
      en: 'The company expanded its role toward engineering support, technical inspection, procurement and subcontractor coordination.',
    },
  },
  {
    year: { az: 'Bu gün', ru: 'Сегодня', en: 'Today' },
    title: { az: 'Tikinti, Mühəndislik və Layihə İcrası', ru: 'Строительство, инжиниринг и реализация', en: 'Construction, Engineering & Project Execution' },
    description: {
      az: 'AZBUILDING MMC qiymətləndirmə və planlaşdırmadan icra və təhvilə qədər layihələri dəstəkləyən peşəkar tikinti və mühəndislik ofisi kimi təqdim olunur.',
      ru: 'AZBUILDING MMC представляет себя как профессиональный строительно-инженерный офис, поддерживающий проекты от оценки и планирования до исполнения и сдачи.',
      en: 'AZBUILDING MMC presents itself as a professional construction and engineering office supporting projects from evaluation and planning to execution and handover.',
    },
  },
]
