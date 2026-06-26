import type { Lang } from './translations'

type Loc = Record<Lang, string>
type LocList = Record<Lang, string[]>

/** Project category — used for portfolio filtering. */
export type ProjectType = 'residential' | 'commercial' | 'industrial' | 'renovation'

export interface Project {
  slug: string
  name: Loc
  /** Placeholder year — mark as such with the client before publishing. */
  year: number
  location: Loc
  type: ProjectType
  /** Short scope tag shown on cards, e.g. "Turnkey construction" */
  scopeTag: Loc
  short: Loc
  description: Loc
  /** Technical detail rows shown on the detail page. */
  details: LocList
  /** Cover image (replace with real photo). */
  cover: string
  /** Gallery images (replace with real photos). */
  gallery: string[]
  featured: boolean
}

/** Human labels for project types, localized. */
export const projectTypeLabels: Record<ProjectType, Loc> = {
  residential: { az: 'Yaşayış', ru: 'Жилой', en: 'Residential' },
  commercial: { az: 'Kommersiya', ru: 'Коммерческий', en: 'Commercial' },
  industrial: { az: 'Sənaye', ru: 'Промышленный', en: 'Industrial' },
  renovation: { az: 'Yenidənqurma', ru: 'Реновация', en: 'Renovation' },
}

/**
 * PROJECTS — placeholder portfolio. THIS IS THE MOST IMPORTANT DATA SET.
 * Replace `cover`/`gallery` with real project photography in /public/images/projects/.
 * Years, locations and descriptions are placeholders — confirm with the client.
 */
export const projects: Project[] = [
  {
    slug: 'absheron-residential-complex',
    featured: true,
    year: 2024,
    type: 'residential',
    cover: '/images/projects/project-01.svg',
    gallery: ['/images/projects/project-01.svg', '/images/projects/project-02.svg', '/images/projects/project-03.svg'],
    name: { az: 'Abşeron Yaşayış Kompleksi', ru: 'Жилой комплекс «Абшерон»', en: 'Absheron Residential Complex' },
    location: { az: 'Abşeron, Azərbaycan', ru: 'Абшерон, Азербайджан', en: 'Absheron, Azerbaijan' },
    scopeTag: { az: 'Açar təslim tikinti', ru: 'Строительство под ключ', en: 'Turnkey construction' },
    short: {
      az: 'Çoxmərtəbəli yaşayış kompleksinin tam tsikl tikintisi.',
      ru: 'Полный цикл строительства многоэтажного жилого комплекса.',
      en: 'Full-cycle construction of a multi-storey residential complex.',
    },
    description: {
      az: 'Müasir yaşayış kompleksi monolit karkas, fasad sistemləri və daxili tamamlama daxil olmaqla açar təslim təhvil verilmişdir.',
      ru: 'Современный жилой комплекс сдан под ключ, включая монолитный каркас, фасадные системы и внутреннюю отделку.',
      en: 'A modern residential complex delivered turnkey, including the monolithic frame, facade systems and interior finishing.',
    },
    details: {
      az: ['Sahə: 18 000 m²', 'Mərtəbə: 16', 'Müddət: 22 ay', 'Həcm: Açar təslim'],
      ru: ['Площадь: 18 000 м²', 'Этажность: 16', 'Срок: 22 месяца', 'Объём: Под ключ'],
      en: ['Area: 18,000 m²', 'Floors: 16', 'Duration: 22 months', 'Scope: Turnkey'],
    },
  },
  {
    slug: 'baku-business-tower',
    featured: true,
    year: 2023,
    type: 'commercial',
    cover: '/images/projects/project-02.svg',
    gallery: ['/images/projects/project-02.svg', '/images/projects/project-01.svg', '/images/projects/project-04.svg'],
    name: { az: 'Bakı Biznes Mərkəzi', ru: 'Бизнес-центр «Баку»', en: 'Baku Business Tower' },
    location: { az: 'Bakı, Azərbaycan', ru: 'Баку, Азербайджан', en: 'Baku, Azerbaijan' },
    scopeTag: { az: 'Kommersiya tikintisi', ru: 'Коммерческое строительство', en: 'Commercial construction' },
    short: {
      az: 'A-sinifli ofis mərkəzinin tikintisi və fasad işləri.',
      ru: 'Строительство офисного центра класса А и фасадные работы.',
      en: 'Construction and facade works for a Class-A office centre.',
    },
    description: {
      az: 'Şüşə fasad, müasir mühəndis sistemləri və premium daxili məkanları olan A-sinifli biznes mərkəzi.',
      ru: 'Бизнес-центр класса А со стеклянным фасадом, современными инженерными системами и премиальными интерьерами.',
      en: 'A Class-A business centre with a glass facade, modern engineering systems and premium interiors.',
    },
    details: {
      az: ['Sahə: 24 000 m²', 'Mərtəbə: 21', 'Müddət: 28 ay', 'Həcm: Tikinti + fasad'],
      ru: ['Площадь: 24 000 м²', 'Этажность: 21', 'Срок: 28 месяцев', 'Объём: Строительство + фасад'],
      en: ['Area: 24,000 m²', 'Floors: 21', 'Duration: 28 months', 'Scope: Construction + facade'],
    },
  },
  {
    slug: 'sumgait-industrial-facility',
    featured: true,
    year: 2023,
    type: 'industrial',
    cover: '/images/projects/project-03.svg',
    gallery: ['/images/projects/project-03.svg', '/images/projects/project-05.svg', '/images/projects/project-02.svg'],
    name: { az: 'Sumqayıt Sənaye Obyekti', ru: 'Промышленный объект «Сумгаит»', en: 'Sumgait Industrial Facility' },
    location: { az: 'Sumqayıt, Azərbaycan', ru: 'Сумгаит, Азербайджан', en: 'Sumgait, Azerbaijan' },
    scopeTag: { az: 'Sənaye tikintisi', ru: 'Промышленное строительство', en: 'Industrial construction' },
    short: {
      az: 'Sənaye istehsalat sahəsinin metal karkas tikintisi.',
      ru: 'Строительство металлокаркаса промышленного производственного цеха.',
      en: 'Steel-frame construction of an industrial production hall.',
    },
    description: {
      az: 'Geniş aralı metal konstruksiyalar, sənaye döşəmələri və mühəndis infrastrukturu ilə istehsalat obyekti.',
      ru: 'Производственный объект с большепролётными металлоконструкциями, промышленными полами и инженерной инфраструктурой.',
      en: 'A production facility with long-span steel structures, industrial flooring and engineering infrastructure.',
    },
    details: {
      az: ['Sahə: 12 000 m²', 'Aralıq: 36 m', 'Müddət: 14 ay', 'Həcm: Metal karkas'],
      ru: ['Площадь: 12 000 м²', 'Пролёт: 36 м', 'Срок: 14 месяцев', 'Объём: Металлокаркас'],
      en: ['Area: 12,000 m²', 'Span: 36 m', 'Duration: 14 months', 'Scope: Steel frame'],
    },
  },
  {
    slug: 'ganja-retail-renovation',
    featured: true,
    year: 2022,
    type: 'renovation',
    cover: '/images/projects/project-04.svg',
    gallery: ['/images/projects/project-04.svg', '/images/projects/project-06.svg', '/images/projects/project-01.svg'],
    name: { az: 'Gəncə Ticarət Mərkəzinin Yenidənqurulması', ru: 'Реновация ТЦ «Гянджа»', en: 'Ganja Retail Renovation' },
    location: { az: 'Gəncə, Azərbaycan', ru: 'Гянджа, Азербайджан', en: 'Ganja, Azerbaijan' },
    scopeTag: { az: 'Yenidənqurma', ru: 'Реновация', en: 'Renovation' },
    short: {
      az: 'Mövcud ticarət mərkəzinin tam yenidənqurulması.',
      ru: 'Полная реновация действующего торгового центра.',
      en: 'Complete renovation of an operating retail centre.',
    },
    description: {
      az: 'Fəaliyyət dayandırılmadan fasad, daxili məkan və mühəndis sistemləri yenilənmişdir.',
      ru: 'Без остановки работы обновлены фасад, интерьеры и инженерные системы.',
      en: 'Facade, interiors and engineering systems were upgraded without interrupting operations.',
    },
    details: {
      az: ['Sahə: 9 500 m²', 'Mərtəbə: 4', 'Müddət: 10 ay', 'Həcm: Tam yenidənqurma'],
      ru: ['Площадь: 9 500 м²', 'Этажность: 4', 'Срок: 10 месяцев', 'Объём: Полная реновация'],
      en: ['Area: 9,500 m²', 'Floors: 4', 'Duration: 10 months', 'Scope: Full renovation'],
    },
  },
  {
    slug: 'khirdalan-logistics-hub',
    featured: false,
    year: 2022,
    type: 'industrial',
    cover: '/images/projects/project-05.svg',
    gallery: ['/images/projects/project-05.svg', '/images/projects/project-03.svg'],
    name: { az: 'Xırdalan Logistika Mərkəzi', ru: 'Логистический хаб «Хырдалан»', en: 'Khirdalan Logistics Hub' },
    location: { az: 'Xırdalan, Azərbaycan', ru: 'Хырдалан, Азербайджан', en: 'Khirdalan, Azerbaijan' },
    scopeTag: { az: 'Anbar tikintisi', ru: 'Строительство склада', en: 'Warehouse construction' },
    short: {
      az: 'Müasir logistika və anbar kompleksinin tikintisi.',
      ru: 'Строительство современного логистического и складского комплекса.',
      en: 'Construction of a modern logistics and warehouse complex.',
    },
    description: {
      az: 'Yüksək tavanlı anbar, yükləmə zonaları və ofis bloku ilə inteqrasiya olunmuş logistika mərkəzi.',
      ru: 'Логистический центр с высокими складами, погрузочными зонами и интегрированным офисным блоком.',
      en: 'A logistics centre with high-bay storage, loading zones and an integrated office block.',
    },
    details: {
      az: ['Sahə: 15 000 m²', 'Tavan: 12 m', 'Müddət: 12 ay', 'Həcm: Açar təslim'],
      ru: ['Площадь: 15 000 м²', 'Высота: 12 м', 'Срок: 12 месяцев', 'Объём: Под ключ'],
      en: ['Area: 15,000 m²', 'Height: 12 m', 'Duration: 12 months', 'Scope: Turnkey'],
    },
  },
  {
    slug: 'baku-private-residence',
    featured: false,
    year: 2021,
    type: 'residential',
    cover: '/images/projects/project-06.svg',
    gallery: ['/images/projects/project-06.svg', '/images/projects/project-04.svg'],
    name: { az: 'Bakı Şəxsi Villası', ru: 'Частная резиденция «Баку»', en: 'Baku Private Residence' },
    location: { az: 'Bakı, Azərbaycan', ru: 'Баку, Азербайджан', en: 'Baku, Azerbaijan' },
    scopeTag: { az: 'Tikinti + dizayn', ru: 'Строительство + дизайн', en: 'Construction + design' },
    short: {
      az: 'Premium şəxsi villanın dizaynı və tikintisi.',
      ru: 'Проектирование и строительство премиальной частной виллы.',
      en: 'Design and construction of a premium private villa.',
    },
    description: {
      az: 'Memarlıq dizaynı, tikinti və premium daxili tamamlama daxil olmaqla tam tsikl şəxsi rezidensiya.',
      ru: 'Частная резиденция полного цикла, включая архитектурный дизайн, строительство и премиальную отделку.',
      en: 'A full-cycle private residence including architectural design, construction and premium finishing.',
    },
    details: {
      az: ['Sahə: 1 200 m²', 'Mərtəbə: 3', 'Müddət: 16 ay', 'Həcm: Dizayn + tikinti'],
      ru: ['Площадь: 1 200 м²', 'Этажность: 3', 'Срок: 16 месяцев', 'Объём: Дизайн + строительство'],
      en: ['Area: 1,200 m²', 'Floors: 3', 'Duration: 16 months', 'Scope: Design + build'],
    },
  },
  {
    slug: 'baku-office-fitout',
    featured: false,
    year: 2021,
    type: 'commercial',
    cover: '/images/projects/project-01.svg',
    gallery: ['/images/projects/project-01.svg', '/images/projects/project-02.svg'],
    name: { az: 'Korporativ Ofis Daxili İşləri', ru: 'Отделка корпоративного офиса', en: 'Corporate Office Fit-out' },
    location: { az: 'Bakı, Azərbaycan', ru: 'Баку, Азербайджан', en: 'Baku, Azerbaijan' },
    scopeTag: { az: 'Daxili işlər', ru: 'Внутренние работы', en: 'Interior fit-out' },
    short: {
      az: 'Korporativ ofisin tam daxili tamamlama işləri.',
      ru: 'Полная внутренняя отделка корпоративного офиса.',
      en: 'Complete interior fit-out of a corporate office.',
    },
    description: {
      az: 'Açıq planlı iş sahələri, iclas otaqları və premium tamamlama ilə müasir ofis məkanı.',
      ru: 'Современное офисное пространство с открытыми рабочими зонами, переговорными и премиальной отделкой.',
      en: 'A modern office space with open work areas, meeting rooms and premium finishing.',
    },
    details: {
      az: ['Sahə: 2 800 m²', 'Mərtəbə: 2', 'Müddət: 5 ay', 'Həcm: Daxili işlər'],
      ru: ['Площадь: 2 800 м²', 'Этажность: 2', 'Срок: 5 месяцев', 'Объём: Внутренние работы'],
      en: ['Area: 2,800 m²', 'Floors: 2', 'Duration: 5 months', 'Scope: Interior fit-out'],
    },
  },
  {
    slug: 'mingachevir-facade-upgrade',
    featured: false,
    year: 2020,
    type: 'renovation',
    cover: '/images/projects/project-03.svg',
    gallery: ['/images/projects/project-03.svg', '/images/projects/project-05.svg'],
    name: { az: 'Mingəçevir Fasad Yeniləməsi', ru: 'Обновление фасада «Мингячевир»', en: 'Mingachevir Facade Upgrade' },
    location: { az: 'Mingəçevir, Azərbaycan', ru: 'Мингячевир, Азербайджан', en: 'Mingachevir, Azerbaijan' },
    scopeTag: { az: 'Fasad işləri', ru: 'Фасадные работы', en: 'Facade works' },
    short: {
      az: 'İctimai binanın fasad və istilik izolyasiyası.',
      ru: 'Фасад и теплоизоляция общественного здания.',
      en: 'Facade and thermal insulation of a public building.',
    },
    description: {
      az: 'Ventilyasiyalı fasad sistemi və enerji səmərəli istilik izolyasiyası quraşdırılmışdır.',
      ru: 'Установлена система вентилируемого фасада и энергоэффективная теплоизоляция.',
      en: 'A ventilated facade system and energy-efficient thermal insulation were installed.',
    },
    details: {
      az: ['Sahə: 6 400 m²', 'Mərtəbə: 7', 'Müddət: 7 ay', 'Həcm: Fasad'],
      ru: ['Площадь: 6 400 м²', 'Этажность: 7', 'Срок: 7 месяцев', 'Объём: Фасад'],
      en: ['Area: 6,400 m²', 'Floors: 7', 'Duration: 7 months', 'Scope: Facade'],
    },
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const featuredProjects = () => projects.filter((p) => p.featured)
export const relatedProjects = (slug: string, type: ProjectType, limit = 3) =>
  projects.filter((p) => p.slug !== slug && p.type === type).slice(0, limit)
