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
 * SERVICES — editable placeholder content.
 * Replace `image` with real photos in /public/images/services/.
 * Translations are placeholder-quality where noted; refine with the client.
 */
export const services: Service[] = [
  {
    slug: 'construction-works',
    icon: 'Building2',
    featured: true,
    image: '/images/services/construction-works.svg',
    title: {
      az: 'Tikinti İşləri',
      ru: 'Строительные работы',
      en: 'Construction Works',
    },
    summary: {
      az: 'Təməldən təhvilə qədər tam tsikl tikinti.',
      ru: 'Полный цикл строительства от фундамента до сдачи.',
      en: 'Full-cycle construction from foundation to handover.',
    },
    description: {
      az: 'Yaşayış, kommersiya və sənaye obyektləri üçün struktur dəqiqliyi ilə tam tsikl tikinti həlləri təqdim edirik.',
      ru: 'Мы предоставляем полный цикл строительства для жилых, коммерческих и промышленных объектов со структурной точностью.',
      en: 'We deliver full-cycle construction for residential, commercial and industrial facilities, executed with structural precision.',
    },
    scope: {
      az: ['Torpaq və təməl işləri', 'Monolit və metal konstruksiyalar', 'Divar və örtük işləri', 'Mühəndis kommunikasiyaları'],
      ru: ['Земляные и фундаментные работы', 'Монолитные и металлоконструкции', 'Стены и кровельные работы', 'Инженерные коммуникации'],
      en: ['Earthworks & foundations', 'Monolithic & steel structures', 'Walls & roofing', 'Engineering utilities'],
    },
  },
  {
    slug: 'project-execution',
    icon: 'ClipboardCheck',
    featured: true,
    image: '/images/services/project-execution.svg',
    title: {
      az: 'Layihələrin İcrası',
      ru: 'Реализация проектов',
      en: 'Project Execution',
    },
    summary: {
      az: 'Planlaşdırma, idarəetmə və nəzarət — vahid məsuliyyət.',
      ru: 'Планирование, управление и контроль — единая ответственность.',
      en: 'Planning, management and control under single accountability.',
    },
    description: {
      az: 'Layihənin idarə olunmasını başdan sona öz üzərimizə götürürük: qrafik, büdcə, təchizat və keyfiyyətə nəzarət.',
      ru: 'Берём на себя управление проектом от начала до конца: график, бюджет, снабжение и контроль качества.',
      en: 'We take end-to-end project management ownership: schedule, budget, procurement and quality control.',
    },
    scope: {
      az: ['Layihə qrafikinin idarə edilməsi', 'Büdcə və xərc nəzarəti', 'Təchizat və logistika', 'Keyfiyyət və təhlükəsizlik nəzarəti'],
      ru: ['Управление графиком', 'Контроль бюджета и затрат', 'Снабжение и логистика', 'Контроль качества и безопасности'],
      en: ['Schedule management', 'Budget & cost control', 'Procurement & logistics', 'Quality & safety supervision'],
    },
  },
  {
    slug: 'design-planning',
    icon: 'PencilRuler',
    featured: true,
    image: '/images/services/design-planning.svg',
    title: {
      az: 'Dizayn və Planlaşdırma',
      ru: 'Проектирование и планирование',
      en: 'Design & Planning',
    },
    summary: {
      az: 'Konseptdən icra çertyojlarına qədər mühəndis dizaynı.',
      ru: 'Инженерное проектирование от концепции до рабочих чертежей.',
      en: 'Engineering design from concept to working drawings.',
    },
    description: {
      az: 'Memarlıq və mühəndis həllərini funksionallıq, estetika və büdcəni balanslaşdıraraq hazırlayırıq.',
      ru: 'Разрабатываем архитектурные и инженерные решения, балансируя функциональность, эстетику и бюджет.',
      en: 'We develop architectural and engineering solutions balancing functionality, aesthetics and budget.',
    },
    scope: {
      az: ['Konsept və eskiz dizaynı', 'Memarlıq layihələndirmə', 'Struktur və mühəndis hesablamaları', 'İcra çertyojları'],
      ru: ['Концепция и эскизный проект', 'Архитектурное проектирование', 'Конструктивные и инженерные расчёты', 'Рабочая документация'],
      en: ['Concept & schematic design', 'Architectural design', 'Structural & MEP calculations', 'Working drawings'],
    },
  },
  {
    slug: 'renovation-repair',
    icon: 'Hammer',
    featured: true,
    image: '/images/services/renovation-repair.svg',
    title: {
      az: 'Təmir və Yenidənqurma',
      ru: 'Ремонт и реновация',
      en: 'Renovation & Repair',
    },
    summary: {
      az: 'Mövcud obyektlərin modernləşdirilməsi və bərpası.',
      ru: 'Модернизация и восстановление существующих объектов.',
      en: 'Modernization and restoration of existing facilities.',
    },
    description: {
      az: 'Mövcud binaları minimal fasilə ilə müasir standartlara uyğun yeniləyir və bərpa edirik.',
      ru: 'Обновляем и восстанавливаем существующие здания до современных стандартов с минимальными простоями.',
      en: 'We refurbish and restore existing buildings to modern standards with minimal downtime.',
    },
    scope: {
      az: ['Sökülmə və hazırlıq', 'Struktur möhkəmləndirmə', 'Tam təmir işləri', 'Sistemlərin yenilənməsi'],
      ru: ['Демонтаж и подготовка', 'Усиление конструкций', 'Полный ремонт', 'Обновление инженерных систем'],
      en: ['Demolition & preparation', 'Structural reinforcement', 'Full fit-out', 'Systems upgrade'],
    },
  },
  {
    slug: 'interior-works',
    icon: 'Sofa',
    featured: false,
    image: '/images/services/interior-works.svg',
    title: {
      az: 'Daxili İşlər',
      ru: 'Внутренние работы',
      en: 'Interior Works',
    },
    summary: {
      az: 'Funksional və premium daxili məkanların qurulması.',
      ru: 'Создание функциональных и премиальных интерьеров.',
      en: 'Functional, premium interior fit-outs.',
    },
    description: {
      az: 'Kommersiya və yaşayış obyektləri üçün premium daxili tamamlama işləri görürük.',
      ru: 'Выполняем премиальную внутреннюю отделку для коммерческих и жилых объектов.',
      en: 'We deliver premium interior finishing for commercial and residential spaces.',
    },
    scope: {
      az: ['Gips-karton və arakəsmələr', 'Döşəmə və divar örtükləri', 'İşıqlandırma və tavan', 'Tamamlama detalları'],
      ru: ['Гипсокартон и перегородки', 'Полы и отделка стен', 'Освещение и потолки', 'Финишная отделка'],
      en: ['Drywall & partitions', 'Flooring & wall finishes', 'Lighting & ceilings', 'Finishing detail'],
    },
  },
  {
    slug: 'facade-exterior',
    icon: 'LayoutPanelTop',
    featured: false,
    image: '/images/services/facade-exterior.svg',
    title: {
      az: 'Fasad və Xarici İşlər',
      ru: 'Фасадные и наружные работы',
      en: 'Exterior / Facade Works',
    },
    summary: {
      az: 'Davamlı və estetik fasad sistemləri.',
      ru: 'Долговечные и эстетичные фасадные системы.',
      en: 'Durable, aesthetic facade systems.',
    },
    description: {
      az: 'Enerji səmərəliliyini və memarlıq görünüşünü birləşdirən fasad sistemləri quraşdırırıq.',
      ru: 'Монтируем фасадные системы, сочетающие энергоэффективность и архитектурный облик.',
      en: 'We install facade systems combining energy efficiency with architectural appearance.',
    },
    scope: {
      az: ['Ventilyasiyalı fasadlar', 'İstilik izolyasiyası', 'Şüşə və alüminium sistemlər', 'Xarici abadlıq'],
      ru: ['Вентилируемые фасады', 'Теплоизоляция', 'Стеклянные и алюминиевые системы', 'Благоустройство'],
      en: ['Ventilated facades', 'Thermal insulation', 'Glass & aluminium systems', 'External landscaping'],
    },
  },
  {
    slug: 'commercial-residential',
    icon: 'Building',
    featured: false,
    image: '/images/services/commercial-residential.svg',
    title: {
      az: 'Kommersiya və Yaşayış Layihələri',
      ru: 'Коммерческие и жилые проекты',
      en: 'Commercial & Residential Projects',
    },
    summary: {
      az: 'Açar təslim kommersiya və yaşayış obyektləri.',
      ru: 'Коммерческие и жилые объекты под ключ.',
      en: 'Turnkey commercial and residential developments.',
    },
    description: {
      az: 'Mərtəbəli binalar, ofis və ticarət obyektləri üçün açar təslim tikinti həlləri təqdim edirik.',
      ru: 'Предоставляем строительство под ключ для многоэтажных зданий, офисных и торговых объектов.',
      en: 'We provide turnkey construction for multi-storey buildings, office and retail developments.',
    },
    scope: {
      az: ['Çoxmərtəbəli yaşayış binaları', 'Ofis və biznes mərkəzləri', 'Ticarət obyektləri', 'Açar təslim təhvil'],
      ru: ['Многоэтажные жилые здания', 'Офисы и бизнес-центры', 'Торговые объекты', 'Сдача под ключ'],
      en: ['Multi-storey residential', 'Office & business centres', 'Retail developments', 'Turnkey handover'],
    },
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const featuredServices = () => services.filter((s) => s.featured)
