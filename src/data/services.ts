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
      az: 'Texniki dizayn, hesablamalar və mühəndis həlləri.',
      ru: 'Технический дизайн, расчёты и инженерные решения.',
      en: 'Technical design, calculations and engineering solutions.',
    },
    description: {
      az: 'Sənaye, inzibati və yaşayış binaları layihələrində texniki dizayn, hesablamalar və mühəndis həllərinin hazırlanması.',
      ru: 'Технический дизайн, расчёты и подготовка инженерных решений для промышленных, административных и жилых зданий.',
      en: 'Technical design, calculations and the preparation of engineering solutions for industrial, administrative and residential building projects.',
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
      az: 'Planlamadan təhvilədək müddət və büdcə nəzarəti.',
      ru: 'Контроль сроков и бюджета от планирования до сдачи.',
      en: 'Schedule and budget control from planning to handover.',
    },
    description: {
      az: 'Planlamadan təhvilədək bütün mərhələlərin idarə olunması, müddət və büdcə nəzarəti.',
      ru: 'Управление всеми этапами от планирования до сдачи, контроль сроков и бюджета.',
      en: 'Management of every stage from planning to handover, with schedule and budget control.',
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
    title: { az: 'Tikinti-quraşdırma işləri', ru: 'Строительно-монтажные работы', en: 'Construction & installation works' },
    summary: {
      az: 'Nəqliyyat infrastrukturu və bina tikintisi.',
      ru: 'Транспортная инфраструктура и строительство зданий.',
      en: 'Transport infrastructure and building construction.',
    },
    description: {
      az: 'Baş podratçı və subpodratçı kimi nəqliyyat infrastrukturu və bina tikintisi layihələrinin tikinti-quraşdırma işləri.',
      ru: 'Строительно-монтажные работы по проектам транспортной инфраструктуры и строительства зданий в качестве генподрядчика и субподрядчика.',
      en: 'Construction and installation works for transport-infrastructure and building projects, as main contractor and subcontractor.',
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
      az: 'İnşaat materialları istehsalı.',
      ru: 'Производство строительных материалов.',
      en: 'Construction materials production.',
    },
    description: {
      az: 'İnşaat materialları istehsalı.',
      ru: 'Производство строительных материалов.',
      en: 'Production of construction materials.',
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
