import type { Lang } from './translations'

type Loc = Record<Lang, string>
type LocList = Record<Lang, string[]>

export interface Service {
  /** URL slug used in /services/:slug */
  slug: string
  /** lucide-react icon name (resolved in the component layer) */
  icon: string
  title: Loc
  /** Short one-line summary for cards */
  summary: Loc
  /** Longer description for the detail page hero */
  description: Loc
  /** Bullet list of work included */
  scope: LocList
  /** Image path (replace with real photography) */
  image: string
  /** Show on the homepage services overview */
  featured: boolean
}

/**
 * SERVICES - the four client-approved service groups (SAYT HERO.docx):
 * Engineering, Project management, Construction & installation, Industry.
 * Brand naming is normalised to AZBUILDING.
 */
export const services: Service[] = [
  {
    slug: 'engineering',
    icon: 'PencilRuler',
    featured: true,
    image: '/images/services/project-management-engineering.svg',
    title: { az: 'Mühəndislik', ru: 'Инжиниринг', en: 'Engineering' },
    summary: {
      az: 'Sənaye, inzibati və yaşayış obyektləri üzrə mühəndis layihələndirməsi, layihə-smeta sənədlərinin hazırlanması, texniki hesablamalar və optimal konstruktiv həllərin hazırlanması.',
      ru: 'Инженерное проектирование промышленных, административных и жилых объектов, подготовка проектно-сметной документации, технические расчёты и оптимальные конструктивные решения.',
      en: 'Engineering design for industrial, administrative and residential facilities, design-estimate documentation, technical calculations and optimal structural solutions.',
    },
    description: {
      az: 'Sənaye, inzibati və yaşayış obyektləri üzrə mühəndis layihələndirməsi, layihə-smeta sənədlərinin hazırlanması, texniki hesablamalar və optimal konstruktiv həllərin hazırlanması.',
      ru: 'Инженерное проектирование промышленных, административных и жилых объектов, подготовка проектно-сметной документации, технические расчёты и оптимальные конструктивные решения.',
      en: 'Engineering design for industrial, administrative and residential facilities, preparation of design-estimate documentation, technical calculations and optimal structural solutions.',
    },
    scope: {
      az: ['Texniki dizayn', 'Mühəndis hesablamaları', 'Konstruktiv həllər', 'Layihə sənədləşməsi'],
      ru: ['Технический дизайн', 'Инженерные расчёты', 'Конструктивные решения', 'Проектная документация'],
      en: ['Technical design', 'Engineering calculations', 'Structural solutions', 'Project documentation'],
    },
  },
  {
    slug: 'project-management',
    icon: 'ClipboardCheck',
    featured: true,
    image: '/images/services/monolithic-fitout.svg',
    title: { az: 'Layihə idarəetməsi', ru: 'Управление проектами', en: 'Project management' },
    summary: {
      az: 'Layihənin planlaşdırılmasından istismara təhvil verilməsinədək bütün mərhələlərin, müddətin, büdcənin və resursların peşəkar idarə olunması.',
      ru: 'Профессиональное управление всеми этапами, сроками, бюджетом и ресурсами — от планирования до сдачи в эксплуатацию.',
      en: 'Professional management of all stages, schedule, budget and resources — from planning to handover into operation.',
    },
    description: {
      az: 'Layihənin planlaşdırılmasından istismara təhvil verilməsinədək bütün mərhələlərin, müddətin, büdcənin və resursların peşəkar idarə olunması.',
      ru: 'Профессиональное управление всеми этапами, сроками, бюджетом и ресурсами — от планирования до сдачи в эксплуатацию.',
      en: 'Professional management of all stages, schedule, budget and resources — from planning to handover into operation.',
    },
    scope: {
      az: ['Planlama və cədvəl', 'Müddət nəzarəti', 'Büdcə nəzarəti', 'Təhvil-təslim'],
      ru: ['Планирование и график', 'Контроль сроков', 'Контроль бюджета', 'Сдача-приёмка'],
      en: ['Planning & scheduling', 'Schedule control', 'Budget control', 'Handover'],
    },
  },
  {
    slug: 'construction-installation',
    icon: 'HardHat',
    featured: true,
    image: '/images/services/construction-works.svg',
    title: { az: 'Tikinti – Quraşdırma', ru: 'Строительно-монтажные работы', en: 'Construction & installation works' },
    summary: {
      az: 'Baş podratçı və subpodratçı qismində nəqliyyat infrastrukturu, sənaye və mülki tikinti layihələrinin peşəkar icrası.',
      ru: 'Профессиональная реализация проектов транспортной инфраструктуры, промышленного и гражданского строительства в качестве генподрядчика и субподрядчика.',
      en: 'Professional delivery of transport-infrastructure, industrial and civil construction projects as main contractor and subcontractor.',
    },
    description: {
      az: 'Baş podratçı və subpodratçı qismində nəqliyyat infrastrukturu, sənaye və mülki tikinti layihələrinin peşəkar icrası.',
      ru: 'Профессиональная реализация проектов транспортной инфраструктуры, промышленного и гражданского строительства в качестве генподрядчика и субподрядчика.',
      en: 'Professional delivery of transport-infrastructure, industrial and civil construction projects as main contractor and subcontractor.',
    },
    scope: {
      az: ['Nəqliyyat infrastrukturu', 'Bina tikintisi', 'Monolit işlər', 'Quraşdırma işləri'],
      ru: ['Транспортная инфраструктура', 'Строительство зданий', 'Монолитные работы', 'Монтажные работы'],
      en: ['Transport infrastructure', 'Building construction', 'Monolithic works', 'Installation works'],
    },
  },
  {
    slug: 'industry',
    icon: 'Boxes',
    featured: true,
    image: '/images/services/infrastructure-execution.svg',
    title: { az: 'Sənaye', ru: 'Промышленность', en: 'Industry' },
    summary: {
      az: 'Tikinti materiallarının istehsalı və tədarükü.',
      ru: 'Производство и поставка строительных материалов.',
      en: 'Production and supply of construction materials.',
    },
    description: {
      az: 'Tikinti materiallarının istehsalı və tədarükü.',
      ru: 'Производство и поставка строительных материалов.',
      en: 'Production and supply of construction materials.',
    },
    scope: {
      az: ['İnşaat materialları istehsalı'],
      ru: ['Производство строительных материалов'],
      en: ['Construction materials production'],
    },
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const featuredServices = () => services.filter((s) => s.featured)
