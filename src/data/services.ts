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
 * SERVICES — the company's real core service categories (AZB sayt info).
 * AZBUILDING is a construction, civil-industrial and infrastructure execution
 * company. Replace `image` with real photos in /public/images/services/.
 */
export const services: Service[] = [
  {
    slug: 'construction-works',
    icon: 'Building2',
    featured: true,
    image: '/images/services/construction-works.svg',
    title: { az: 'Tikinti işləri', ru: 'Строительные работы', en: 'Construction works' },
    summary: {
      az: 'Yaşayış və qeyri-yaşayış binaları, sənaye obyektləri.',
      ru: 'Жилые и нежилые здания, промышленные объекты.',
      en: 'Residential and non-residential buildings, industrial facilities.',
    },
    description: {
      az: 'Yaşayış və qeyri-yaşayış binaları, eləcə də sənaye obyektləri üzrə tikinti işlərini icra edirik.',
      ru: 'Выполняем строительные работы по жилым и нежилым зданиям, а также промышленным объектам.',
      en: 'We carry out construction works for residential and non-residential buildings, as well as industrial facilities.',
    },
    scope: {
      az: ['Yaşayış binaları', 'Qeyri-yaşayış binaları', 'Sənaye obyektləri', 'Sahə icrası'],
      ru: ['Жилые здания', 'Нежилые здания', 'Промышленные объекты', 'Исполнение на площадке'],
      en: ['Residential buildings', 'Non-residential buildings', 'Industrial facilities', 'On-site execution'],
    },
  },
  {
    slug: 'infrastructure-execution',
    icon: 'Route',
    featured: true,
    image: '/images/services/infrastructure-execution.svg',
    title: { az: 'İnfrastruktur layihələrinin icrası', ru: 'Реализация инфраструктурных проектов', en: 'Infrastructure project execution' },
    summary: {
      az: 'Avtomobil yolları və əlaqəli işlər.',
      ru: 'Автомобильные дороги и сопутствующие работы.',
      en: 'Road construction and related works.',
    },
    description: {
      az: 'Avtomobil yollarının tikintisi və əlaqəli infrastruktur işlərinin icrasında iştirak edirik.',
      ru: 'Участвуем в строительстве автомобильных дорог и реализации сопутствующих инфраструктурных работ.',
      en: 'We participate in road construction and the execution of related infrastructure works.',
    },
    scope: {
      az: ['Avtomobil yolları', 'Yol təmiri və rekonstruksiya', 'Körpü yanaşma yolları', 'Əlaqəli infrastruktur'],
      ru: ['Автомобильные дороги', 'Ремонт и реконструкция дорог', 'Подходные дороги к мостам', 'Сопутствующая инфраструктура'],
      en: ['Roads & highways', 'Road repair & reconstruction', 'Bridge approach roads', 'Related infrastructure'],
    },
  },
  {
    slug: 'earthworks-planning',
    icon: 'LandPlot',
    featured: true,
    image: '/images/services/earthworks-planning.svg',
    title: { az: 'Torpaq işləri və planlaşdırma', ru: 'Земляные работы и планировка', en: 'Earthworks and site planning' },
    summary: {
      az: 'Qazıntı, planlaşdırma və sahə hazırlığı.',
      ru: 'Экскавация, планировка и подготовка площадки.',
      en: 'Excavation, grading and site preparation.',
    },
    description: {
      az: 'Torpaq işləri və ərazinin planlaşdırılması — qazıntıdan sahə hazırlığına qədər.',
      ru: 'Земляные работы и планировка территории — от экскавации до подготовки площадки.',
      en: 'Earthworks and site planning — from excavation to site preparation.',
    },
    scope: {
      az: ['Qazıntı işləri', 'Ərazinin planlaşdırılması', 'Sahə hazırlığı', 'Qruntun möhkəmləndirilməsi'],
      ru: ['Экскавационные работы', 'Планировка территории', 'Подготовка площадки', 'Уплотнение грунта'],
      en: ['Excavation', 'Site grading', 'Site preparation', 'Ground compaction'],
    },
  },
  {
    slug: 'utility-lines',
    icon: 'Cable',
    featured: true,
    image: '/images/services/utility-lines.svg',
    title: { az: 'Kommunikasiya xətlərinin çəkilişi', ru: 'Прокладка коммуникационных линий', en: 'Utility & communication lines' },
    summary: {
      az: 'Mühəndis-kommunikasiya xətlərinin çəkilişi.',
      ru: 'Прокладка инженерно-коммуникационных линий.',
      en: 'Installation and laying of utility lines.',
    },
    description: {
      az: 'Mühəndis-kommunikasiya və kommunal xətlərin çəkilişi və quraşdırılması işlərini icra edirik.',
      ru: 'Выполняем прокладку и монтаж инженерно-коммуникационных и коммунальных линий.',
      en: 'We carry out the installation and laying of utility and communication lines.',
    },
    scope: {
      az: ['Su və kanalizasiya xətləri', 'Elektrik kommunikasiyaları', 'Kommunal xətlər', 'Bağlantı və quraşdırma'],
      ru: ['Линии воды и канализации', 'Электрокоммуникации', 'Коммунальные линии', 'Подключение и монтаж'],
      en: ['Water & sewage lines', 'Electrical communications', 'Utility lines', 'Connection & installation'],
    },
  },
  {
    slug: 'monolithic-fitout',
    icon: 'Layers',
    featured: true,
    image: '/images/services/monolithic-fitout.svg',
    title: { az: 'Monolit və fit-out işləri', ru: 'Монолитные и fit-out работы', en: 'Monolithic & fit-out works' },
    summary: {
      az: 'Monolit konstruksiyalar və daxili fit-out.',
      ru: 'Монолитные конструкции и внутренний fit-out.',
      en: 'Monolithic structures and interior fit-out.',
    },
    description: {
      az: 'Monolit konstruksiya işləri və daxili fit-out — kommersiya və tibbi məkanlar daxil olmaqla.',
      ru: 'Монолитные конструкции и внутренний fit-out, в том числе коммерческие и медицинские помещения.',
      en: 'Monolithic construction works and interior fit-out, including commercial and medical spaces.',
    },
    scope: {
      az: ['Monolit karkas', 'Beton işləri', 'Daxili fit-out', 'Tamamlama işləri'],
      ru: ['Монолитный каркас', 'Бетонные работы', 'Внутренний fit-out', 'Отделочные работы'],
      en: ['Monolithic frame', 'Concrete works', 'Interior fit-out', 'Finishing works'],
    },
  },
  {
    slug: 'project-management-engineering',
    icon: 'PencilRuler',
    featured: true,
    image: '/images/services/project-management-engineering.svg',
    title: { az: 'Layihə idarəetmə və mühəndislik dəstəyi', ru: 'Управление проектами и инженерная поддержка', en: 'Project management & engineering support' },
    summary: {
      az: 'Layihə koordinasiyası və mühəndislik dəstəyi.',
      ru: 'Координация проекта и инженерная поддержка.',
      en: 'Project coordination and engineering support.',
    },
    description: {
      az: 'Layihələrin idarə olunması və mühəndislik dəstəyi — qrafik, koordinasiya, texniki həllər və icra nəzarəti.',
      ru: 'Управление проектами и инженерная поддержка — график, координация, технические решения и контроль исполнения.',
      en: 'Project management and engineering support — scheduling, coordination, technical solutions and execution control.',
    },
    scope: {
      az: ['Layihə qrafiki və koordinasiya', 'Mühəndislik dəstəyi', 'Subpodratçı koordinasiyası', 'İcra və keyfiyyət nəzarəti'],
      ru: ['График и координация проекта', 'Инженерная поддержка', 'Координация субподрядчиков', 'Контроль исполнения и качества'],
      en: ['Schedule & coordination', 'Engineering support', 'Subcontractor coordination', 'Execution & quality control'],
    },
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const featuredServices = () => services.filter((s) => s.featured)
