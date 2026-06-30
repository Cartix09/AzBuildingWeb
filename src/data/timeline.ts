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
      az: 'AZBİLDİNQ MMC mülki-sənaye tikinti və layihə icrası istiqamətində fəaliyyətə başladı.',
      ru: 'AZBİLDİNQ MMC начала работу в сфере гражданско-промышленного строительства и реализации проектов.',
      en: 'AZBİLDİNQ MMC began operating in civil-industrial construction and project execution.',
    },
  },
  {
    year: plain('—'),
    title: { az: 'Mülki Tikinti Təcrübəsi', ru: 'Опыт гражданского строительства', en: 'Civil Construction Experience' },
    description: {
      az: 'Aparıcı tərəfdaşlarla birgə iri miqyaslı mülki tikinti və fit-out layihələrində iştirak (Flame Towers, Şahdağ, Xəyal Adaları).',
      ru: 'Участие в крупных проектах гражданского строительства и fit-out вместе с ведущими партнёрами (Flame Towers, Шахдаг, Хазар Айлендс).',
      en: 'Participation in large-scale civil construction and fit-out projects with leading partners (Flame Towers, Shahdag, Khazar Islands).',
    },
  },
  {
    year: plain('—'),
    title: { az: 'İnfrastruktur və Beynəlxalq İştirak', ru: 'Инфраструктура и международное участие', en: 'Infrastructure & International Participation' },
    description: {
      az: 'Azərbaycan, Gürcüstan və Ukraynada avtomobil yolu layihələrində subpodratçı və mühəndislik dəstəyi ilə iştirak.',
      ru: 'Участие в дорожных проектах в Азербайджане, Грузии и Украине в роли субподрядчика и с инженерной поддержкой.',
      en: 'Participation in road projects in Azerbaijan, Georgia and Ukraine as a subcontractor and with engineering support.',
    },
  },
  {
    year: { az: 'Bu gün', ru: 'Сегодня', en: 'Today' },
    title: { az: 'Çoxprofilli İcra Tərəfdaşı', ru: 'Многопрофильный исполнительный партнёр', en: 'Multi-Profile Execution Partner' },
    description: {
      az: 'AZBUILDING özünü mülki, sənaye və infrastruktur sahəsində təcrübəli, çoxprofilli icra tərəfdaşı kimi təqdim edir.',
      ru: 'AZBUILDING позиционирует себя как опытный многопрофильный исполнительный партнёр в гражданском, промышленном и инфраструктурном строительстве.',
      en: 'AZBUILDING presents itself as an experienced, multi-profile execution partner across civil, industrial and infrastructure construction.',
    },
  },
]
