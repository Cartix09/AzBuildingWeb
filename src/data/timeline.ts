import type { Lang } from './translations'

type Loc = Record<Lang, string>

export interface Milestone {
  /** Placeholder marker — these are NOT verified years. Confirm with the client. */
  year: string
  title: Loc
  description: Loc
}

/**
 * COMPANY MILESTONES — PLACEHOLDER timeline.
 * Years are placeholders shown as labels; replace with real history.
 */
export const timeline: Milestone[] = [
  {
    year: '—',
    title: { az: 'Təməl qoyuldu', ru: 'Основание компании', en: 'Foundation Established' },
    description: {
      az: 'AZBUILDING MMC kiçik tikinti briqadası kimi fəaliyyətə başladı.',
      ru: 'AZBUILDING MMC начала работу как небольшая строительная бригада.',
      en: 'AZBUILDING MMC began operations as a focused construction team.',
    },
  },
  {
    year: '—',
    title: { az: 'İlk böyük layihə', ru: 'Первый крупный проект', en: 'First Major Project' },
    description: {
      az: 'İlk irimiqyaslı yaşayış obyekti uğurla təhvil verildi.',
      ru: 'Успешно сдан первый крупный жилой объект.',
      en: 'Successfully delivered the first large-scale residential project.',
    },
  },
  {
    year: '—',
    title: { az: 'İcra gücü genişləndi', ru: 'Расширение мощностей', en: 'Expanded Project Capacity' },
    description: {
      az: 'Komanda və texniki baza eyni vaxtda bir neçə layihə üçün gücləndirildi.',
      ru: 'Команда и техническая база усилены для одновременного ведения нескольких проектов.',
      en: 'Team and equipment scaled to run multiple projects in parallel.',
    },
  },
  {
    year: '—',
    title: { az: 'Dizayn və yenidənqurma xidmətləri', ru: 'Услуги дизайна и реновации', en: 'Design & Renovation Services Developed' },
    description: {
      az: 'Tikintiyə əlavə olaraq dizayn və yenidənqurma istiqamətləri inkişaf etdirildi.',
      ru: 'В дополнение к строительству развиты направления дизайна и реновации.',
      en: 'Added design and renovation capabilities alongside core construction.',
    },
  },
  {
    year: '—',
    title: { az: 'Bu gün', ru: 'Сегодня', en: 'Today' },
    description: {
      az: 'Tikinti, dizayn və yenidənqurma üzrə tam portfolio ilə fəaliyyət göstəririk.',
      ru: 'Работаем с полным портфолио строительства, дизайна и реновации.',
      en: 'Operating with a full portfolio across construction, design and renovation.',
    },
  },
]
