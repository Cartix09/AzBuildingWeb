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
 * SERVICES — reflects AZBUILDING MMC as a construction + engineering + project
 * execution office (not only physical labour). Replace `image` with real photos
 * in /public/images/services/. Refine wording with the client.
 */
export const services: Service[] = [
  {
    slug: 'construction-works',
    icon: 'Building2',
    featured: true,
    image: '/images/services/construction-works.svg',
    title: { az: 'Tikinti İşləri', ru: 'Строительные работы', en: 'Construction Works' },
    summary: {
      az: 'Beton, torpaq və bina işləri daxil olmaqla sahə icrası.',
      ru: 'Бетонные, земляные и строительные работы, исполнение на площадке.',
      en: 'Concrete, earthworks and building works with on-site execution.',
    },
    description: {
      az: 'Beton, torpaq işləri, bina konstruksiyaları və sahə icrası daxil olmaqla fiziki tikinti işlərini həyata keçiririk.',
      ru: 'Выполняем физические строительные работы, включая бетон, земляные работы, конструкции зданий и исполнение на площадке.',
      en: 'We deliver physical construction works including concrete, earthworks, building structures and on-site execution.',
    },
    scope: {
      az: ['Torpaq və təməl işləri', 'Beton və monolit işlər', 'Bina konstruksiyaları', 'Sahə icrasına nəzarət'],
      ru: ['Земляные и фундаментные работы', 'Бетонные и монолитные работы', 'Конструкции зданий', 'Контроль исполнения на площадке'],
      en: ['Earthworks & foundations', 'Concrete & monolithic works', 'Building structures', 'On-site execution control'],
    },
  },
  {
    slug: 'engineering-services',
    icon: 'PencilRuler',
    featured: true,
    image: '/images/services/engineering-services.svg',
    title: { az: 'Mühəndislik Xidmətləri', ru: 'Инженерные услуги', en: 'Engineering Services' },
    summary: {
      az: 'Mühəndis baxışından texniki dəstək və layihə koordinasiyası.',
      ru: 'Техническая поддержка с инженерной точки зрения и координация проекта.',
      en: 'Technical support from an engineering perspective and project coordination.',
    },
    description: {
      az: 'Tikinti ilə bağlı texniki təhlil, mühəndis qərarları və layihə koordinasiyası ilə layihələrə dəstək veririk.',
      ru: 'Поддерживаем проекты строительным техническим анализом, инженерными решениями и координацией.',
      en: 'We support projects with construction-related technical analysis, engineering decisions and coordination.',
    },
    scope: {
      az: ['Texniki təhlil', 'Mühəndis qərar dəstəyi', 'Layihə koordinasiyası', 'Sənədləşmə nəzərdən keçirilməsi'],
      ru: ['Технический анализ', 'Инженерная поддержка решений', 'Координация проекта', 'Проверка документации'],
      en: ['Technical analysis', 'Engineering decision support', 'Project coordination', 'Documentation review'],
    },
  },
  {
    slug: 'technical-inspection',
    icon: 'ClipboardCheck',
    featured: true,
    image: '/images/services/technical-inspection.svg',
    title: { az: 'Texniki Ekspertiza / İnşaat Müayinəsi', ru: 'Техническая экспертиза / обследование', en: 'Technical Inspection / Construction Expertise' },
    summary: {
      az: 'Tikililərin və tikinti keyfiyyətinin ekspert qiymətləndirilməsi.',
      ru: 'Экспертная оценка зданий и качества строительства.',
      en: 'Expert evaluation of buildings and construction quality.',
    },
    description: {
      az: 'Tikilmiş binaların, tikinti keyfiyyətinin, texniki vəziyyətin və layihə hazırlığının müayinəsini və ekspert qiymətləndirilməsini aparırıq.',
      ru: 'Проводим обследование и экспертную оценку построенных зданий, качества строительства, технического состояния и готовности проекта.',
      en: 'We carry out inspection and expert evaluation of constructed buildings, construction quality, technical condition and project readiness.',
    },
    scope: {
      az: ['Bina müayinəsi', 'Tikinti keyfiyyəti qiymətləndirməsi', 'Texniki vəziyyət rəyi', 'Layihə hazırlığı yoxlaması'],
      ru: ['Обследование зданий', 'Оценка качества строительства', 'Заключение о техническом состоянии', 'Проверка готовности проекта'],
      en: ['Building inspection', 'Construction quality assessment', 'Technical condition report', 'Project readiness review'],
    },
  },
  {
    slug: 'cost-evaluation',
    icon: 'Calculator',
    featured: false,
    image: '/images/services/cost-evaluation.svg',
    title: { az: 'Dəyər Qiymətləndirməsi / Qiymət Ekspertizası', ru: 'Оценка стоимости / экспертиза цен', en: 'Cost Evaluation / Price Expertise' },
    summary: {
      az: 'Tikinti dəyərinin texniki və maliyyə baxımından qiymətləndirilməsi.',
      ru: 'Оценка стоимости строительства с технической и финансовой точки зрения.',
      en: 'Evaluation of construction cost from a technical and financial view.',
    },
    description: {
      az: 'Tikinti və bina xərclərini texniki və maliyyə nöqteyi-nəzərindən qiymətləndiririk və qiymət ekspertizası aparırıq.',
      ru: 'Оцениваем стоимость строительства и зданий с технической и финансовой точки зрения и проводим экспертизу цен.',
      en: 'We evaluate construction and building costs from a technical and financial standpoint and provide price expertise.',
    },
    scope: {
      az: ['Smeta təhlili', 'Dəyər qiymətləndirməsi', 'Qiymət ekspertizası', 'Büdcə müqayisəsi'],
      ru: ['Анализ сметы', 'Оценка стоимости', 'Экспертиза цен', 'Сравнение бюджета'],
      en: ['Estimate analysis', 'Cost evaluation', 'Price expertise', 'Budget comparison'],
    },
  },
  {
    slug: 'project-execution',
    icon: 'Hammer',
    featured: true,
    image: '/images/services/project-execution.svg',
    title: { az: 'Layihələrin İcrası', ru: 'Реализация проектов', en: 'Project Execution' },
    summary: {
      az: 'Tikinti, təmir, fit-out və infrastruktur işlərinin idarə olunması.',
      ru: 'Управление строительными, ремонтными, fit-out и инфраструктурными работами.',
      en: 'Managing construction, renovation, fit-out and infrastructure works.',
    },
    description: {
      az: 'Tikinti, yenidənqurma, fit-out və infrastruktur işlərinin icrasını idarə edir və ya bu icrada iştirak edirik.',
      ru: 'Управляем реализацией строительных, реновационных, fit-out и инфраструктурных работ или участвуем в ней.',
      en: 'We manage or participate in the execution of construction, renovation, fit-out and infrastructure works.',
    },
    scope: {
      az: ['İcra planlaşdırması', 'Qrafik və koordinasiya', 'Keyfiyyət nəzarəti', 'Təhvil və sənədləşmə'],
      ru: ['Планирование исполнения', 'График и координация', 'Контроль качества', 'Сдача и документация'],
      en: ['Execution planning', 'Schedule & coordination', 'Quality control', 'Handover & documentation'],
    },
  },
  {
    slug: 'procurement-coordination',
    icon: 'Boxes',
    featured: false,
    image: '/images/services/procurement-coordination.svg',
    title: { az: 'Təchizatın Koordinasiyası', ru: 'Координация закупок', en: 'Procurement Coordination' },
    summary: {
      az: 'Material, təchizatçı və layihə resurslarının təmin edilməsi.',
      ru: 'Сопровождение закупки материалов, поставщиков и ресурсов проекта.',
      en: 'Sourcing of materials, suppliers and project resources.',
    },
    description: {
      az: 'Tikinti materiallarının, təchizatçıların və layihə resurslarının alınması və təmin edilməsini koordinasiya edirik.',
      ru: 'Координируем закупку и обеспечение строительных материалов, поставщиков и ресурсов проекта.',
      en: 'We coordinate the purchase and sourcing of construction materials, suppliers and project resources.',
    },
    scope: {
      az: ['Təchizatçı seçimi', 'Qiymət təklifi müqayisəsi', 'Sifariş koordinasiyası', 'Təchizat qrafiki'],
      ru: ['Выбор поставщиков', 'Сравнение предложений', 'Координация заказов', 'График поставок'],
      en: ['Supplier selection', 'Quote comparison', 'Order coordination', 'Supply scheduling'],
    },
  },
  {
    slug: 'subcontractor-coordination',
    icon: 'Network',
    featured: false,
    image: '/images/services/subcontractor-coordination.svg',
    title: { az: 'Subpodratçıların Koordinasiyası', ru: 'Координация субподрядчиков', en: 'Subcontractor Coordination' },
    summary: {
      az: 'Subpodratçıların rollarının idarə edilməsi və keyfiyyət nəzarəti.',
      ru: 'Управление ролями субподрядчиков и контроль качества.',
      en: 'Managing subcontractor roles and execution quality.',
    },
    description: {
      az: 'Subpodratçılarla işləyir, onların rollarını koordinasiya edir və icra keyfiyyətini idarə edirik.',
      ru: 'Работаем с субподрядчиками, координируем их роли и управляем качеством исполнения.',
      en: 'We work with subcontractors, coordinate their roles and manage execution quality.',
    },
    scope: {
      az: ['Subpodratçı seçimi', 'İş bölgüsü', 'İcra nəzarəti', 'Keyfiyyət qəbulu'],
      ru: ['Подбор субподрядчиков', 'Распределение работ', 'Контроль исполнения', 'Приёмка качества'],
      en: ['Subcontractor selection', 'Work allocation', 'Execution supervision', 'Quality acceptance'],
    },
  },
  {
    slug: 'fitout-renovation',
    icon: 'Sofa',
    featured: false,
    image: '/images/services/fitout-renovation.svg',
    title: { az: 'Fit-out və Yenidənqurma', ru: 'Fit-out и реновация', en: 'Fit-out & Renovation Works' },
    summary: {
      az: 'Daxili fit-out, təmir və tamamlama, o cümlədən tibbi məkanlar.',
      ru: 'Внутренний fit-out, ремонт и отделка, в том числе медицинские помещения.',
      en: 'Interior fit-out, renovation and completion, including medical spaces.',
    },
    description: {
      az: 'Kommersiya və tibbi məkanlar daxil olmaqla daxili fit-out, yenidənqurma, təmir və tamamlama işləri görürük.',
      ru: 'Выполняем внутренний fit-out, реновацию, ремонт и отделку, включая коммерческие и медицинские помещения.',
      en: 'We deliver interior fit-out, renovation, repair and completion works, including commercial and medical spaces.',
    },
    scope: {
      az: ['Daxili fit-out', 'Yenidənqurma və təmir', 'Tibbi / kommersiya məkanları', 'Tamamlama işləri'],
      ru: ['Внутренний fit-out', 'Реновация и ремонт', 'Медицинские / коммерческие помещения', 'Отделочные работы'],
      en: ['Interior fit-out', 'Renovation & repair', 'Medical / commercial spaces', 'Finishing works'],
    },
  },
  {
    slug: 'material-logistics',
    icon: 'Truck',
    featured: false,
    image: '/images/services/material-logistics.svg',
    title: { az: 'Tikinti Materiallarının Logistikası', ru: 'Логистика стройматериалов', en: 'Construction Material Logistics' },
    summary: {
      az: 'Material təchizatının və logistikasının koordinasiyası.',
      ru: 'Координация поставок и логистики строительных материалов.',
      en: 'Coordination of material supply and logistics.',
    },
    description: {
      az: 'Tikinti materiallarının təchizatını və logistikasını planlaşdırır və koordinasiya edirik.',
      ru: 'Планируем и координируем поставку и логистику строительных материалов.',
      en: 'We plan and coordinate construction material supply and logistics.',
    },
    scope: {
      az: ['Təchizat planlaşdırması', 'Nəqliyyat koordinasiyası', 'Saxlama və paylama', 'Çatdırılma qrafiki'],
      ru: ['Планирование поставок', 'Координация транспорта', 'Хранение и распределение', 'График доставки'],
      en: ['Supply planning', 'Transport coordination', 'Storage & distribution', 'Delivery scheduling'],
    },
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const featuredServices = () => services.filter((s) => s.featured)
