import type { Lang } from './translations'

type Loc = Record<Lang, string>
type LocList = Record<Lang, string[]>

/** Project category — used for portfolio filtering. */
export type ProjectType = 'residential' | 'infrastructure' | 'fitout' | 'private' | 'siteworks' | 'engineering'

export interface Project {
  slug: string
  name: Loc
  /** Placeholder year/status year — NOT verified. Confirm with the client. */
  year: number
  location: Loc
  /** Client name or "Client Confidential" where private. */
  client: Loc
  type: ProjectType
  /** Short scope tag shown on cards, e.g. "Construction works" */
  scopeTag: Loc
  /** AZBUILDING's role in the project (key for an office/engineering company). */
  role: Loc
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
  infrastructure: { az: 'İnfrastruktur', ru: 'Инфраструктура', en: 'Infrastructure' },
  fitout: { az: 'Fit-out', ru: 'Fit-out', en: 'Fit-out' },
  private: { az: 'Şəxsi', ru: 'Частный', en: 'Private' },
  siteworks: { az: 'Sahə işləri', ru: 'Площадочные работы', en: 'Site works' },
  engineering: { az: 'Mühəndislik', ru: 'Инжиниринг', en: 'Engineering' },
}

/**
 * REPRESENTATIVE WORKS — placeholder portfolio. THIS IS THE CENTRAL SECTION.
 * The company's real portfolio is modest and growing, so these are presented
 * honestly as selected/representative examples, NOT a large catalogue.
 * Replace cover/gallery with real photography in /public/images/projects/.
 * Years, locations and clients are placeholders — confirm with the client.
 * Use "Client Confidential" for private work shown without permission.
 */
export const projects: Project[] = [
  {
    slug: 'residential-apartment-construction',
    featured: true,
    year: 2021,
    type: 'residential',
    cover: '/images/projects/project-01.svg',
    gallery: ['/images/projects/project-01.svg', '/images/projects/project-02.svg', '/images/projects/project-03.svg'],
    name: { az: 'Yaşayış / Mənzil Tikinti İşləri', ru: 'Жилые / квартирные строительные работы', en: 'Residential / Apartment Construction Works' },
    location: { az: 'Azərbaycan', ru: 'Азербайджан', en: 'Azerbaijan' },
    client: { az: 'Sifarişçi (məxfi)', ru: 'Заказчик (конфиденциально)', en: 'Client Confidential' },
    scopeTag: { az: 'Tikinti işləri', ru: 'Строительные работы', en: 'Construction works' },
    role: { az: 'Tikinti icrası', ru: 'Исполнение строительства', en: 'Construction execution' },
    short: {
      az: 'Yaşayış / mənzil binaları ilə bağlı seçilmiş tikinti işləri.',
      ru: 'Избранные строительные работы по жилым / квартирным зданиям.',
      en: 'Selected construction works related to residential / apartment buildings.',
    },
    description: {
      az: 'Yaşayış və mənzil binaları üçün struktur və tikinti işlərində iştirak — beton, konstruksiya və sahə icrası daxil olmaqla.',
      ru: 'Участие в конструктивных и строительных работах для жилых и квартирных зданий, включая бетон, конструкции и исполнение на площадке.',
      en: 'Participation in structural and construction works for residential and apartment buildings, including concrete, structures and on-site execution.',
    },
    details: {
      az: ['Növ: Yaşayış tikinti', 'Status: Nümunə (placeholder)', 'Rol: Tikinti icrası', 'Yer: Dəqiqləşdirilməli'],
      ru: ['Тип: Жилое строительство', 'Статус: Пример (placeholder)', 'Роль: Исполнение строительства', 'Локация: Уточняется'],
      en: ['Type: Residential construction', 'Status: Example (placeholder)', 'Role: Construction execution', 'Location: To be confirmed'],
    },
  },
  {
    slug: 'road-infrastructure-works',
    featured: true,
    year: 2020,
    type: 'infrastructure',
    cover: '/images/projects/project-02.svg',
    gallery: ['/images/projects/project-02.svg', '/images/projects/project-05.svg', '/images/projects/project-03.svg'],
    name: { az: 'Yol / İnfrastruktur İşləri', ru: 'Дорожные / инфраструктурные работы', en: 'Road / Infrastructure Works' },
    location: { az: 'Azərbaycan', ru: 'Азербайджан', en: 'Azerbaijan' },
    client: { az: 'Sifarişçi (məxfi)', ru: 'Заказчик (конфиденциально)', en: 'Client Confidential' },
    scopeTag: { az: 'İnfrastruktur icrası', ru: 'Инфраструктурное исполнение', en: 'Infrastructure execution' },
    role: { az: 'Tikinti dəstəyi və icra', ru: 'Строительная поддержка и исполнение', en: 'Construction support & execution' },
    short: {
      az: 'Yol və ya infrastruktur işlərinə tikinti dəstəyi və icrası.',
      ru: 'Строительная поддержка и исполнение дорожных или инфраструктурных работ.',
      en: 'Construction support and execution for road or infrastructure works.',
    },
    description: {
      az: 'Yol və infrastruktur obyektlərində torpaq işləri, sahə hazırlığı və tikinti icrası üzrə dəstək.',
      ru: 'Поддержка по земляным работам, подготовке площадки и исполнению строительства на дорожных и инфраструктурных объектах.',
      en: 'Support across earthworks, site preparation and construction execution on road and infrastructure projects.',
    },
    details: {
      az: ['Növ: İnfrastruktur', 'Status: Nümunə (placeholder)', 'Rol: Dəstək və icra', 'Yer: Dəqiqləşdirilməli'],
      ru: ['Тип: Инфраструктура', 'Статус: Пример (placeholder)', 'Роль: Поддержка и исполнение', 'Локация: Уточняется'],
      en: ['Type: Infrastructure', 'Status: Example (placeholder)', 'Role: Support & execution', 'Location: To be confirmed'],
    },
  },
  {
    slug: 'four-floor-clinic-fitout',
    featured: true,
    year: 2022,
    type: 'fitout',
    cover: '/images/projects/project-03.svg',
    gallery: ['/images/projects/project-03.svg', '/images/projects/project-06.svg', '/images/projects/project-01.svg'],
    name: { az: 'Dördmərtəbəli Klinikanın Fit-out İşləri', ru: 'Fit-out четырёхэтажной клиники', en: 'Four-Floor Clinic Fit-out' },
    location: { az: 'Azərbaycan', ru: 'Азербайджан', en: 'Azerbaijan' },
    client: { az: 'Tibbi obyekt (məxfi)', ru: 'Медицинский объект (конфиденциально)', en: 'Medical facility (confidential)' },
    scopeTag: { az: 'Tibbi fit-out', ru: 'Медицинский fit-out', en: 'Medical fit-out' },
    role: { az: 'Fit-out və daxili icra', ru: 'Fit-out и внутреннее исполнение', en: 'Fit-out & interior execution' },
    short: {
      az: 'Dördmərtəbəli klinika / tibbi obyekt üçün fit-out və daxili icra işləri.',
      ru: 'Fit-out и внутренние работы для четырёхэтажной клиники / медицинского объекта.',
      en: 'Fit-out and interior execution works for a four-floor clinic / medical facility.',
    },
    description: {
      az: 'Tibbi standartlara uyğun arakəsmələr, tamamlama, mühəndis sistemləri əlaqələndirməsi və daxili icra — oxşar layihənin necə idarə oluna biləcəyinə dair nümunə.',
      ru: 'Перегородки, отделка, координация инженерных систем и внутреннее исполнение по медицинским требованиям — пример того, как может вестись подобный проект.',
      en: 'Partitions, finishing, engineering-systems coordination and interior execution to medical requirements — an example of how a similar project can be handled.',
    },
    details: {
      az: ['Növ: Tibbi fit-out', 'Mərtəbə: 4', 'Rol: Fit-out & daxili icra', 'Status: Nümunə (placeholder)'],
      ru: ['Тип: Медицинский fit-out', 'Этажность: 4', 'Роль: Fit-out и исполнение', 'Статус: Пример (placeholder)'],
      en: ['Type: Medical fit-out', 'Floors: 4', 'Role: Fit-out & execution', 'Status: Example (placeholder)'],
    },
  },
  {
    slug: 'private-residential-construction',
    featured: true,
    year: 2023,
    type: 'private',
    cover: '/images/projects/project-04.svg',
    gallery: ['/images/projects/project-04.svg', '/images/projects/project-01.svg'],
    name: { az: 'Şəxsi Yaşayış Tikintisi', ru: 'Частное жилое строительство', en: 'Private Residential Construction' },
    location: { az: 'Məxfi', ru: 'Конфиденциально', en: 'Confidential' },
    client: { az: 'Sifarişçi (məxfi)', ru: 'Заказчик (конфиденциально)', en: 'Client Confidential' },
    scopeTag: { az: 'Şəxsi rezidensiya', ru: 'Частная резиденция', en: 'Private residence' },
    role: { az: 'Tikinti icrası', ru: 'Исполнение строительства', en: 'Construction execution' },
    short: {
      az: 'Yüksək dəyərli şəxsi ev / villa tikintisi təcrübəsi (məxfi).',
      ru: 'Опыт строительства частного дома / виллы высокого уровня (конфиденциально).',
      en: 'High-value private house / villa construction experience (confidential).',
    },
    description: {
      az: 'Məxfi şəxsi rezidensiya layihəsi. Sifarişçinin razılığı olmadan təfərrüatlar açıqlanmır; nümunə kimi yalnız iş həcmi göstərilir.',
      ru: 'Конфиденциальный проект частной резиденции. Детали не раскрываются без согласия заказчика; в качестве примера показан только объём работ.',
      en: 'A confidential private residential project. Details are not disclosed without client permission; only the scope of work is shown as a reference.',
    },
    details: {
      az: ['Növ: Şəxsi yaşayış', 'Sifarişçi: Məxfi', 'Rol: Tikinti icrası', 'Status: Məxfi nümunə'],
      ru: ['Тип: Частное жильё', 'Заказчик: Конфиденциально', 'Роль: Исполнение строительства', 'Статус: Конфиденциальный пример'],
      en: ['Type: Private residential', 'Client: Confidential', 'Role: Construction execution', 'Status: Confidential example'],
    },
  },
  {
    slug: 'earthworks-concrete-site-preparation',
    featured: false,
    year: 2019,
    type: 'siteworks',
    cover: '/images/projects/project-05.svg',
    gallery: ['/images/projects/project-05.svg', '/images/projects/project-02.svg'],
    name: { az: 'Torpaq, Beton və Sahə Hazırlığı', ru: 'Земляные, бетонные работы и подготовка площадки', en: 'Earthworks, Concrete & Site Preparation' },
    location: { az: 'Azərbaycan', ru: 'Азербайджан', en: 'Azerbaijan' },
    client: { az: 'Sifarişçi (məxfi)', ru: 'Заказчик (конфиденциально)', en: 'Client Confidential' },
    scopeTag: { az: 'Sahə icrası', ru: 'Площадочное исполнение', en: 'Site execution' },
    role: { az: 'Sahə icrası dəstəyi', ru: 'Поддержка исполнения на площадке', en: 'Site execution support' },
    short: {
      az: 'Qazıntı, beton, bünövrə və əlaqəli sahə icrası dəstəyi.',
      ru: 'Экскавация, бетон, основания и сопутствующая поддержка исполнения на площадке.',
      en: 'Excavation, concrete, groundwork and related site execution support.',
    },
    description: {
      az: 'Müxtəlif obyektlərdə qazıntı, beton tökülməsi, bünövrə hazırlığı və sahə icrasında dəstək rolunda iştirak.',
      ru: 'Участие в роли поддержки в экскавации, бетонировании, подготовке оснований и исполнении на площадке для различных объектов.',
      en: 'Participation in a support role across excavation, concreting, groundwork and on-site execution for various facilities.',
    },
    details: {
      az: ['Növ: Sahə işləri', 'Status: Nümunə (placeholder)', 'Rol: İcra dəstəyi', 'Yer: Dəqiqləşdirilməli'],
      ru: ['Тип: Площадочные работы', 'Статус: Пример (placeholder)', 'Роль: Поддержка исполнения', 'Локация: Уточняется'],
      en: ['Type: Site works', 'Status: Example (placeholder)', 'Role: Execution support', 'Location: To be confirmed'],
    },
  },
  {
    slug: 'engineering-cost-evaluation-support',
    featured: false,
    year: 2024,
    type: 'engineering',
    cover: '/images/projects/project-06.svg',
    gallery: ['/images/projects/project-06.svg', '/images/projects/project-03.svg'],
    name: { az: 'Mühəndislik / Dəyər Qiymətləndirməsi Dəstəyi', ru: 'Инженерная / стоимостная поддержка', en: 'Engineering / Cost Evaluation Support' },
    location: { az: 'Azərbaycan', ru: 'Азербайджан', en: 'Azerbaijan' },
    client: { az: 'Sifarişçi (məxfi)', ru: 'Заказчик (конфиденциально)', en: 'Client Confidential' },
    scopeTag: { az: 'Mühəndislik dəstəyi', ru: 'Инженерная поддержка', en: 'Engineering support' },
    role: { az: 'Texniki müayinə / dəyər qiymətləndirməsi', ru: 'Техническое обследование / оценка стоимости', en: 'Technical inspection / cost evaluation' },
    short: {
      az: 'Texniki müayinə, dəyər qiymətləndirməsi, təchizat və ya layihə dəstəyi rolu.',
      ru: 'Роль технического обследования, оценки стоимости, закупок или поддержки проекта.',
      en: 'A technical inspection, cost evaluation, procurement or project-support role.',
    },
    description: {
      az: 'Tikinti ilə bağlı işdə fiziki icradan kənar — texniki müayinə, dəyər qiymətləndirməsi, təchizat və layihə koordinasiyası rolunda iştirak.',
      ru: 'Участие в строительной работе вне физического исполнения — в роли технического обследования, оценки стоимости, закупок и координации проекта.',
      en: 'Participation in construction-related work beyond physical execution — in a technical inspection, cost evaluation, procurement and project-coordination role.',
    },
    details: {
      az: ['Növ: Mühəndislik dəstəyi', 'Status: Nümunə (placeholder)', 'Rol: Müayinə / qiymətləndirmə', 'Yer: Dəqiqləşdirilməli'],
      ru: ['Тип: Инженерная поддержка', 'Статус: Пример (placeholder)', 'Роль: Обследование / оценка', 'Локация: Уточняется'],
      en: ['Type: Engineering support', 'Status: Example (placeholder)', 'Role: Inspection / evaluation', 'Location: To be confirmed'],
    },
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const featuredProjects = () => projects.filter((p) => p.featured)
export const relatedProjects = (slug: string, type: ProjectType, limit = 3) => {
  const sameType = projects.filter((p) => p.slug !== slug && p.type === type)
  if (sameType.length >= limit) return sameType.slice(0, limit)
  // Top up with other projects so the section is never empty.
  const others = projects.filter((p) => p.slug !== slug && p.type !== type)
  return [...sameType, ...others].slice(0, limit)
}
