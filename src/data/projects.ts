import type { Lang } from './translations'

type Loc = Record<Lang, string>

/** Project category - used for portfolio filtering. */
export type ProjectType = 'civil' | 'industrial' | 'infrastructure' | 'residential' | 'fitout'

export interface Project {
  slug: string
  name: Loc
  type: ProjectType
  /** City / country. */
  location: Loc
  /** Partner or client. Use a confidential label where the client is private. */
  partner: Loc
  /** AZBUILDING's role: subcontractor / contractor / investor-participant. */
  role: Loc
  /** Activity type, e.g. Fit-out, Construction, Infrastructure. */
  activity: Loc
  /** Period context. Most works span 2009-2025; no exact per-project years were
   *  provided, so we present a careful period rather than inventing dates. */
  period: Loc
  short: Loc
  description: Loc
  /** When true, render a "confidential" note instead of exposing client detail. */
  confidential?: boolean
  cover: string
  gallery: string[]
  featured: boolean
}

/** Human labels for project types, localized. */
export const projectTypeLabels: Record<ProjectType, Loc> = {
  civil: { az: 'Mülki tikinti', ru: 'Гражданское строительство', en: 'Civil construction' },
  industrial: { az: 'Sənaye', ru: 'Промышленный', en: 'Industrial' },
  infrastructure: { az: 'İnfrastruktur', ru: 'Инфраструктура', en: 'Infrastructure' },
  residential: { az: 'Yaşayış', ru: 'Жилой', en: 'Residential' },
  fitout: { az: 'Fit-out', ru: 'Fit-out', en: 'Fit-out' },
}

// Most portfolio entries reflect works / participation carried out across this
// window. No exact per-project years were provided - do not invent them.
const PERIOD: Loc = { az: '2009-2025', ru: '2009-2025', en: '2009-2025' }

// Common role labels (careful, non-overstated wording).
const SUBCONTRACTOR: Loc = { az: 'Subpodratçı', ru: 'Субподрядчик', en: 'Subcontractor' }
const CONTRACTOR: Loc = { az: 'Podratçı', ru: 'Подрядчик', en: 'Contractor' }

/**
 * PORTFOLIO - real projects from the client file (AZB sayt info).
 * Works and participation carried out during 2009-2025 and later. Some works
 * were not accompanied by full formal documentation, so the portfolio is
 * presented in a careful "experience / participation" format - roles are shown
 * exactly as the client described (mostly subcontractor / contractor).
 * Replace cover/gallery with real photography in /public/images/projects/.
 */
export const projects: Project[] = [
  {
    slug: 'flame-towers-baku',
    featured: true,
    type: 'fitout',
    cover: '/images/projects/project-01.svg',
    gallery: ['/images/projects/project-01.svg', '/images/projects/project-03.svg', '/images/projects/project-02.svg'],
    period: PERIOD,
    name: { az: 'Bakı, Flame Towers', ru: 'Баку, Flame Towers', en: 'Baku, Flame Towers' },
    location: { az: 'Bakı, Azərbaycan', ru: 'Баку, Азербайджан', en: 'Baku, Azerbaijan' },
    partner: { az: 'DİA HOLDİNQ', ru: 'DİA HOLDİNQ', en: 'DİA HOLDİNQ' },
    role: SUBCONTRACTOR,
    activity: { az: 'Fit-out', ru: 'Fit-out', en: 'Fit-out' },
    short: {
      az: 'Logistika, beton işləri və fit-out. Subpodratçı rolunda iştirak.',
      ru: 'Логистика, бетонные работы и fit-out. Участие в роли субподрядчика.',
      en: 'Logistics, concrete works and fit-out. Participation in a subcontractor role.',
    },
    description: {
      az: 'Flame Towers layihəsində logistika, beton işləri və fit-out işlərində subpodratçı kimi iştirak. İş təcrübə / iştirak formatında təqdim olunur.',
      ru: 'Участие в роли субподрядчика в логистике, бетонных работах и fit-out в рамках проекта Flame Towers. Работа представлена в формате опыта / участия.',
      en: 'Participation as a subcontractor in logistics, concrete works and fit-out within the Flame Towers project. Presented in an experience / participation format.',
    },
  },
  {
    slug: 'shahdag-tourism-center',
    featured: true,
    type: 'civil',
    cover: '/images/projects/project-02.svg',
    gallery: ['/images/projects/project-02.svg', '/images/projects/project-05.svg', '/images/projects/project-01.svg'],
    period: PERIOD,
    name: { az: 'Şahdağ Turizm Mərkəzi', ru: 'Туристический центр «Шахдаг»', en: 'Shahdag Tourism Center' },
    location: { az: 'Şahdağ, Azərbaycan', ru: 'Шахдаг, Азербайджан', en: 'Shahdag, Azerbaijan' },
    partner: { az: 'DİA HOLDİNQ', ru: 'DİA HOLDİNQ', en: 'DİA HOLDİNQ' },
    role: SUBCONTRACTOR,
    activity: { az: 'Tikinti', ru: 'Строительство', en: 'Construction' },
    short: {
      az: 'Torpaq, beton işləri və fit-out. Subpodratçı rolunda iştirak.',
      ru: 'Земляные, бетонные работы и fit-out. Участие в роли субподрядчика.',
      en: 'Earthworks, concrete works and fit-out. Participation in a subcontractor role.',
    },
    description: {
      az: 'Şahdağ Turizm Mərkəzində torpaq işləri, beton işləri və fit-out üzrə subpodratçı kimi iştirak.',
      ru: 'Участие в роли субподрядчика в земляных, бетонных работах и fit-out на объекте туристического центра «Шахдаг».',
      en: 'Participation as a subcontractor in earthworks, concrete works and fit-out at the Shahdag Tourism Center.',
    },
  },
  {
    slug: 'xeyal-adalari',
    featured: true,
    type: 'civil',
    cover: '/images/projects/project-03.svg',
    gallery: ['/images/projects/project-03.svg', '/images/projects/project-06.svg', '/images/projects/project-01.svg'],
    period: PERIOD,
    name: { az: 'Xəyal Adaları', ru: 'Khazar Islands (Xəyal Adaları)', en: 'Khazar Islands (Xəyal Adaları)' },
    location: { az: 'Bakı, Azərbaycan', ru: 'Баку, Азербайджан', en: 'Baku, Azerbaijan' },
    partner: { az: 'İNNOVA - ANTİK', ru: 'İNNOVA - ANTİK', en: 'İNNOVA - ANTİK' },
    role: SUBCONTRACTOR,
    activity: { az: 'Tikinti / Fit-out', ru: 'Строительство / Fit-out', en: 'Construction / Fit-out' },
    short: {
      az: 'Apartamentlərin tikintisi və fit-out işlərinin icrası. Subpodratçı.',
      ru: 'Строительство и fit-out апартаментов. Субподрядчик.',
      en: 'Construction and fit-out execution for apartments. Subcontractor.',
    },
    description: {
      az: 'Layihə daxilində apartamentlərin tikintisi və fit-out işlərinin icrasında subpodratçı kimi iştirak.',
      ru: 'Участие в роли субподрядчика в строительстве и fit-out апартаментов в рамках проекта.',
      en: 'Participation as a subcontractor in the construction and fit-out execution of apartments within the project.',
    },
  },
  {
    slug: 'kyiv-chop-highway-ukraine',
    featured: true,
    type: 'infrastructure',
    cover: '/images/projects/project-04.svg',
    gallery: ['/images/projects/project-04.svg', '/images/projects/project-07.svg', '/images/projects/project-05.svg'],
    period: PERIOD,
    name: { az: 'Kiyev - Çop avtomobil yolu', ru: 'Автодорога Киев - Чоп', en: 'Kyiv - Chop Highway' },
    location: { az: 'Ukrayna', ru: 'Украина', en: 'Ukraine' },
    partner: { az: 'TODİNİ - Akkord', ru: 'TODİNİ - Akkord', en: 'TODİNİ - Akkord' },
    role: SUBCONTRACTOR,
    activity: { az: 'İnfrastruktur · mühəndislik dəstəyi', ru: 'Инфраструктура · инженерная поддержка', en: 'Infrastructure · engineering support' },
    short: {
      az: 'Tenderin udulması və yolun tikintisində mühəndislik xidməti ilə iştirak. Subpodratçı.',
      ru: 'Участие инженерными услугами в выигранном тендере и строительстве дороги. Субподрядчик.',
      en: 'Participation through engineering services in tender success and road construction. Subcontractor.',
    },
    description: {
      az: 'Kiyev - Çop avtomobil yolu üzrə tenderin udulmasında və yolun tikintisində mühəndislik dəstəyi ilə subpodratçı kimi iştirak.',
      ru: 'Участие в роли субподрядчика с инженерной поддержкой в выигрыше тендера и строительстве автодороги Киев - Чоп.',
      en: 'Participation as a subcontractor with engineering support in the tender success and construction of the Kyiv - Chop highway.',
    },
  },
  {
    slug: 'samtredia-grigoleti-highway-georgia',
    featured: false,
    type: 'infrastructure',
    cover: '/images/projects/project-05.svg',
    gallery: ['/images/projects/project-05.svg', '/images/projects/project-08.svg', '/images/projects/project-04.svg'],
    period: PERIOD,
    name: { az: 'Samtredi - Qriqoleti avtomobil yolu', ru: 'Автодорога Самтредиа - Григолети', en: 'Samtredia - Grigoleti Highway' },
    location: { az: 'Gürcüstan', ru: 'Грузия', en: 'Georgia' },
    partner: { az: 'Sinohydro', ru: 'Sinohydro', en: 'Sinohydro' },
    role: SUBCONTRACTOR,
    activity: { az: 'İnfrastruktur', ru: 'Инфраструктура', en: 'Infrastructure' },
    short: {
      az: 'Torpaq və kommunikasiya işləri. Subpodratçı.',
      ru: 'Земляные работы и работы по коммуникациям. Субподрядчик.',
      en: 'Earthworks and utility-line works. Subcontractor.',
    },
    description: {
      az: 'Samtredi - Qriqoleti avtomobil yolu layihəsində torpaq və kommunikasiya xətləri işlərində subpodratçı kimi iştirak.',
      ru: 'Участие в роли субподрядчика в земляных работах и прокладке коммуникаций на проекте автодороги Самтредиа - Григолети.',
      en: 'Participation as a subcontractor in earthworks and utility-line works on the Samtredia - Grigoleti highway project.',
    },
  },
  {
    slug: 'alat-port-project',
    featured: false,
    type: 'infrastructure',
    cover: '/images/projects/project-06.svg',
    gallery: ['/images/projects/project-06.svg', '/images/projects/project-05.svg', '/images/projects/project-09.svg'],
    period: PERIOD,
    name: { az: 'Ələt Limanı Layihəsi', ru: 'Проект порта Алят', en: 'Alat Port Project' },
    location: { az: 'Ələt, Bakı, Azərbaycan', ru: 'Алят, Баку, Азербайджан', en: 'Alat, Baku, Azerbaijan' },
    partner: { az: 'EVRASCON', ru: 'EVRASCON', en: 'EVRASCON' },
    role: SUBCONTRACTOR,
    activity: { az: 'İnfrastruktur', ru: 'Инфраструктура', en: 'Infrastructure' },
    short: {
      az: 'Torpaq və beton işləri. Subpodratçı.',
      ru: 'Земляные и бетонные работы. Субподрядчик.',
      en: 'Earthworks and concrete works. Subcontractor.',
    },
    description: {
      az: 'Ələt Limanı layihəsində torpaq və beton işləri üzrə subpodratçı kimi iştirak.',
      ru: 'Участие в роли субподрядчика в земляных и бетонных работах на проекте порта Алят.',
      en: 'Participation as a subcontractor in earthworks and concrete works on the Alat Port project.',
    },
  },
  {
    slug: 'baku-quba-highway',
    featured: false,
    type: 'infrastructure',
    cover: '/images/projects/project-07.svg',
    gallery: ['/images/projects/project-07.svg', '/images/projects/project-04.svg', '/images/projects/project-08.svg'],
    period: PERIOD,
    name: { az: 'Bakı - Quba avtomobil yolu', ru: 'Автодорога Баку - Губа', en: 'Baku - Quba Highway' },
    location: { az: 'Azərbaycan', ru: 'Азербайджан', en: 'Azerbaijan' },
    partner: { az: 'AKKORD', ru: 'AKKORD', en: 'AKKORD' },
    role: SUBCONTRACTOR,
    activity: { az: 'İnfrastruktur', ru: 'Инфраструктура', en: 'Infrastructure' },
    short: {
      az: 'Beton yolun təmir və rekonstruksiyası işləri. Subpodratçı.',
      ru: 'Ремонт и реконструкция бетонной автодороги. Субподрядчик.',
      en: 'Repair and reconstruction of the concrete road. Subcontractor.',
    },
    description: {
      az: 'Bakı - Quba avtomobil yolunun beton hissəsinin təmir və rekonstruksiya işlərində subpodratçı kimi iştirak.',
      ru: 'Участие в роли субподрядчика в ремонте и реконструкции бетонного участка автодороги Баку - Губа.',
      en: 'Participation as a subcontractor in the repair and reconstruction of the concrete section of the Baku - Quba highway.',
    },
  },
  {
    slug: 'baku-astara-new-highway',
    featured: false,
    type: 'infrastructure',
    cover: '/images/projects/project-08.svg',
    gallery: ['/images/projects/project-08.svg', '/images/projects/project-07.svg', '/images/projects/project-05.svg'],
    period: PERIOD,
    name: { az: 'Bakı - Astara yeni avtomobil yolu', ru: 'Новая автодорога Баку - Астара', en: 'Baku - Astara New Highway' },
    location: { az: 'Azərbaycan', ru: 'Азербайджан', en: 'Azerbaijan' },
    partner: { az: 'POLAD YOL', ru: 'POLAD YOL', en: 'POLAD YOL' },
    role: SUBCONTRACTOR,
    activity: { az: 'İnfrastruktur', ru: 'Инфраструктура', en: 'Infrastructure' },
    short: {
      az: 'Körpülərin yanaşma yolları daxil olmaqla torpaq işlərinin icrası.',
      ru: 'Земляные работы, включая подходные дороги к мостам.',
      en: 'Earthworks including approach roads to bridges.',
    },
    description: {
      az: 'Bakı - Astara yeni avtomobil yolu layihəsində körpülərin yanaşma yolları daxil olmaqla torpaq işlərinin icrasında iştirak.',
      ru: 'Участие в выполнении земляных работ, включая подходные дороги к мостам, на проекте новой автодороги Баку - Астара.',
      en: 'Participation in earthworks, including bridge approach roads, on the Baku - Astara new highway project.',
    },
  },
  {
    slug: 'sumgait-industrial-complex',
    featured: true,
    type: 'industrial',
    cover: '/images/projects/project-09.svg',
    gallery: ['/images/projects/project-09.svg', '/images/projects/project-02.svg', '/images/projects/project-06.svg'],
    period: PERIOD,
    name: { az: 'Sumqayıt inzibati və sənaye kompleksi', ru: 'Административно-промышленный комплекс «Сумгаит»', en: 'Sumgait Administrative & Industrial Complex' },
    location: { az: 'Sumqayıt, Azərbaycan', ru: 'Сумгаит, Азербайджан', en: 'Sumgait, Azerbaijan' },
    partner: { az: 'Fiziki şəxs (sifarişçi)', ru: 'Физическое лицо (заказчик)', en: 'Private individual (client)' },
    role: CONTRACTOR,
    activity: { az: 'Tikinti (sənaye)', ru: 'Строительство (промышленное)', en: 'Construction (industrial)' },
    short: {
      az: 'Ağır texnika təmir mərkəzi, TIR park və 4 mərtəbəli satış-servis binasının tikintisi. Podratçı.',
      ru: 'Ремонтный центр тяжёлой техники, TIR-парк и 4-этажное здание сервис-центра. Подрядчик.',
      en: 'Heavy-machinery repair centre, TIR park and a 4-storey sales-service building. Contractor.',
    },
    description: {
      az: 'Ağır inşaat texnikaları və yük avtomobillərinin təmir mərkəzinin tikintisi, TIR park fəaliyyətinin təşkili, güc avadanlıqları və inşaat texnikalarının ehtiyat hissələrinin satış-servis mərkəzi üçün təməldən 4 mərtəbəli binanın tikintisi. Podratçı rolunda icra.',
      ru: 'Строительство ремонтного центра для тяжёлой строительной техники и грузовых автомобилей, организация работы TIR-парка, строительство с фундамента 4-этажного здания для центра продажи и обслуживания силового оборудования и запчастей строительной техники. Исполнение в роли подрядчика.',
      en: 'Construction of a heavy construction-machinery and truck repair centre, organization of TIR-park operations, and construction from foundation of a four-storey building for a power-equipment and construction-machinery spare-parts sales-service centre. Executed in a contractor role.',
    },
  },
  {
    slug: 'garachukhur-residential-complex',
    featured: true,
    type: 'residential',
    confidential: true,
    cover: '/images/projects/project-10.svg',
    gallery: ['/images/projects/project-10.svg', '/images/projects/project-03.svg'],
    period: PERIOD,
    name: { az: 'Qaraçuxur Yaşayış Kompleksi', ru: 'Жилой комплекс «Гарачухур»', en: 'Garachukhur Residential Complex' },
    location: { az: 'Qaraçuxur, Bakı, Azərbaycan', ru: 'Гарачухур, Баку, Азербайджан', en: 'Garachukhur, Baku, Azerbaijan' },
    partner: { az: 'MTK (sifarişçi məxfidir)', ru: 'Девелопер (заказчик конфиденциален)', en: 'Developer (client confidential)' },
    role: CONTRACTOR,
    activity: { az: 'Tikinti (yaşayış)', ru: 'Строительство (жилое)', en: 'Construction (residential)' },
    short: {
      az: '12 mərtəbəli 2 yaşayış binasının tikintisi. Podratçı. Sifarişçi məxfidir.',
      ru: 'Строительство двух 12-этажных жилых зданий. Подрядчик. Заказчик конфиденциален.',
      en: 'Construction of two 12-storey residential buildings. Contractor. Client confidential.',
    },
    description: {
      az: 'İki ədəd 12 mərtəbəli yaşayış binasının tikintisində podratçı kimi icra. Sifarişçi adının açıqlanmasını istəmir.',
      ru: 'Исполнение в роли подрядчика при строительстве двух 12-этажных жилых зданий. Заказчик не желает раскрывать своё название.',
      en: 'Executed as the contractor for the construction of two 12-storey residential buildings. The client prefers to remain confidential.',
    },
  },
  {
    slug: 'jabrayil-beverage-factory',
    featured: false,
    type: 'industrial',
    cover: '/images/projects/project-11.svg',
    gallery: ['/images/projects/project-11.svg', '/images/projects/project-09.svg', '/images/projects/project-02.svg'],
    period: PERIOD,
    name: { az: 'Cəbrayıl, Alkoqolsuz İçkilər Zavodu', ru: 'Джебраил, завод безалкогольных напитков', en: 'Jabrayil, Soft-Drinks Factory' },
    location: { az: 'Cəbrayıl, Azərbaycan', ru: 'Джебраил, Азербайджан', en: 'Jabrayil, Azerbaijan' },
    partner: { az: 'İNNOVA - ANTİK', ru: 'İNNOVA - ANTİK', en: 'İNNOVA - ANTİK' },
    role: SUBCONTRACTOR,
    activity: { az: 'Tikinti (sənaye)', ru: 'Строительство (промышленное)', en: 'Construction (industrial)' },
    short: {
      az: 'Subpodrat müqaviləsi əsasında zavodun tikintisi. Subpodratçı.',
      ru: 'Строительство завода на основании субподрядного договора. Субподрядчик.',
      en: 'Factory construction under a subcontract agreement. Subcontractor.',
    },
    description: {
      az: 'Cəbrayılda alkoqolsuz içkilər zavodunun subpodrat müqaviləsi əsasında tikintisində iştirak.',
      ru: 'Участие в строительстве завода безалкогольных напитков в Джебраиле на основании субподрядного договора.',
      en: 'Participation in the construction of a soft-drinks factory in Jabrayil under a subcontract agreement.',
    },
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const featuredProjects = () => projects.filter((p) => p.featured)
export const relatedProjects = (slug: string, type: ProjectType, limit = 3) => {
  const sameType = projects.filter((p) => p.slug !== slug && p.type === type)
  if (sameType.length >= limit) return sameType.slice(0, limit)
  const others = projects.filter((p) => p.slug !== slug && p.type !== type)
  return [...sameType, ...others].slice(0, limit)
}
