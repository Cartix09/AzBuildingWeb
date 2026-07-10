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
  /** Period / years. */
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

// Careful, non-overstated role labels.
const SUBCONTRACTOR: Loc = { az: 'Subpodratçı', ru: 'Субподрядчик', en: 'Subcontractor' }
const CONTRACTOR: Loc = { az: 'Podratçı', ru: 'Подрядчик', en: 'Contractor' }

/**
 * PORTFOLIO - the four client-provided projects (Sayt mətni files). Three more
 * (1 Ukraine, 2 Azerbaijan) will be added later for a total of 7 - they are NOT
 * invented here. Brand naming is normalised to AZBUILDING / AZBUILDING Qrup MMC.
 * Replace cover/gallery with real photography in /public/images/projects/.
 */
export const projects: Project[] = [
  {
    slug: 'sumqayit-technical-service-complex',
    featured: true,
    type: 'civil',
    cover: '/images/projects/project-04.svg',
    gallery: ['/images/projects/project-04.svg'],
    name: {
      az: 'Sumqayıt Texniki Xidmət Kompleksi',
      ru: 'Технический сервисный комплекс, Сумгаит',
      en: 'Sumgait Technical Service Complex',
    },
    location: { az: 'Bakı-Sumqayıt yolu, Azərbaycan', ru: 'Трасса Баку-Сумгаит, Азербайджан', en: 'Baku-Sumgait road, Azerbaijan' },
    partner: { az: 'Fiziki şəxs', ru: 'Частное лицо', en: 'Private individual' },
    role: CONTRACTOR,
    activity: { az: 'İnzibati bina və tikinti', ru: 'Административное здание и строительство', en: 'Administrative building & construction' },
    period: { az: '2015-2016', ru: '2015-2016', en: '2015-2016' },
    short: {
      az: '3 ha ərazidə inzibati bina, texniki xidmət mərkəzi və anbar.',
      ru: 'Административное здание, сервисный центр и склад на участке 3 га.',
      en: 'Administrative building, service centre and warehouse on a 3 ha site.',
    },
    description: {
      az: 'AZBUILDING tərəfindən Bakı-Sumqayıt yolu üzərində 3 hektar ərazidə inzibati bina, texniki xidmət mərkəzi və anbar tikilmişdir. Bir zirzəmi və 4 yerüstü mərtəbədən ibarət bina təxminən 7 500 m² ümumi tikinti sahəsinə malikdir; texniki xidmət mərkəzində eyni anda 10 yük avtomobili təmir oluna bilir.',
      ru: 'На трассе Баку-Сумгаит, на участке 3 гектара, силами AZBUILDING построены административное здание, центр технического обслуживания и склад. Здание с одним подвальным и 4 надземными этажами имеет около 7 500 м² общей площади; сервисный центр рассчитан на одновременный ремонт 10 грузовых автомобилей.',
      en: 'On the Baku-Sumgait road, on a 3-hectare site, AZBUILDING built an administrative building, a technical-service centre and a warehouse. With one basement and 4 above-ground floors, the building has around 7,500 m² of total floor area; the service centre can repair 10 trucks simultaneously.',
    },
  },
  {
    slug: 'asyl-arman-almaty',
    featured: true,
    type: 'residential',
    cover: '/images/projects/project-02.svg',
    gallery: ['/images/projects/project-02.svg', '/images/projects/project-03.svg'],
    name: {
      az: 'Asıl Arman yaşayış kompleksi',
      ru: 'Жилой комплекс «Asyl Arman»',
      en: 'Asyl Arman residential complex',
    },
    location: { az: 'Qazaxıstan, Almatı yaxınlığı', ru: 'Казахстан, близ Алматы', en: 'Kazakhstan, near Almaty' },
    partner: { az: 'ELİTSTROY / Modern Construction Group', ru: 'ELİTSTROY / Modern Construction Group', en: 'ELİTSTROY / Modern Construction Group' },
    role: SUBCONTRACTOR,
    activity: { az: 'Monolit-karkas tikinti', ru: 'Монолитно-каркасное строительство', en: 'Monolithic-frame construction' },
    period: { az: '2013-2015', ru: '2013-2015', en: '2013-2015' },
    short: {
      az: 'İki binanın kotlovan, bünövrə, monolit karkas və tamamlama işləri.',
      ru: 'Котлован, фундамент, монолитный каркас и отделка двух зданий.',
      en: 'Excavation, foundations, monolithic frame and finishing of two buildings.',
    },
    description: {
      az: '"ELİTSTROY" tərəfindən inşa edilən, 9 mərtəbəli monolit-karkas binalardan ibarət ekonom-klas yaşayış kompleksi. AZBUILDING layihədə subpodratçı qismində iştirak edərək iki binanın kotlovan qazıntı və bünövrə işlərini, monolit dəmir-beton karkasının inşasını və təmir-tamamlama işlərini icra etmişdir.',
      ru: 'Жилой комплекс эконом-класса из 9-этажных монолитно-каркасных зданий, возводимый компанией «ELİTSTROY». AZBUILDING в качестве субподрядчика выполнил работы по котловану и фундаментам двух зданий, возведение монолитного железобетонного каркаса и отделочные работы.',
      en: 'An economy-class residential complex of 9-storey monolithic-frame buildings developed by "ELİTSTROY". As a subcontractor, AZBUILDING carried out the excavation and foundation works for two buildings, the monolithic reinforced-concrete frame and the finishing works.',
    },
  },
  {
    slug: 'samtredia-grigoleti-highway',
    featured: true,
    type: 'infrastructure',
    cover: '/images/projects/project-05.svg',
    gallery: ['/images/projects/project-05.svg', '/images/projects/project-07.svg'],
    name: {
      az: 'Samtredia-Qriqoleti avtomagistralı',
      ru: 'Автомагистраль Самтредиа-Григолети',
      en: 'Samtredia-Grigoleti highway',
    },
    location: { az: 'Gürcüstan, Quriya regionu, Lançxuti', ru: 'Грузия, регион Гурия, Ланчхути', en: 'Georgia, Guria region, Lanchkhuti' },
    partner: { az: 'China Railway 23rd Bureau Group Co. Ltd.', ru: 'China Railway 23rd Bureau Group Co. Ltd.', en: 'China Railway 23rd Bureau Group Co. Ltd.' },
    role: SUBCONTRACTOR,
    activity: { az: 'Avtomagistralın tikintisi və rekonstruksiyası', ru: 'Строительство и реконструкция автомагистрали', en: 'Highway construction & reconstruction' },
    period: { az: '2017-2018', ru: '2017-2018', en: '2017-2018' },
    short: {
      az: 'Magistralın ~2 km hissəsində yol örtüyü, heyvan keçidləri və suötürücü qurğular.',
      ru: 'Дорожная одежда, зверопроходы и водопропускные сооружения на ~2 км трассы.',
      en: 'Pavement, animal underpasses and culverts on a ~2 km section.',
    },
    description: {
      az: 'Samtredia-Qriqoleti avtomagistralının tikintisi və rekonstruksiyası (IV Lot, 42-51-ci km). Sifarişçi Gürcüstan Avtomobil Yolları Departamenti, maliyyələşdirmə Avropa İnvestisiya Bankı (EIB), baş podratçı China Railway 23rd Bureau Group Co. Ltd. AZBUILDING Qrup MMC subpodratçı qismində yumşaq zəminli və qismən bataqlıq ərazilərdən keçən magistralın təxminən 2 km-lik hissəsində yol örtüyü konstruksiyasını, yeraltı heyvan keçidlərini və suötürücü qurğuları inşa etmiş, ümumilikdə 620 000 m³-dən çox dolğu materialından istifadə etmişdir.',
      ru: 'Строительство и реконструкция автомагистрали Самтредиа-Григолети (IV Лот, 42-51 км). Заказчик - Департамент автомобильных дорог Грузии, финансирование - Европейский инвестиционный банк (EIB), генподрядчик - China Railway 23rd Bureau Group Co. Ltd. AZBUILDING Qrup MMC как субподрядчик построил дорожную одежду, подземные зверопроходы и водопропускные сооружения на участке около 2 км, проходящем по слабым и частично заболоченным грунтам, использовав более 620 000 м³ насыпного материала.',
      en: 'Construction and reconstruction of the Samtredia-Grigoleti highway (Lot IV, km 42-51). Client - Georgian Roads Department, financing - European Investment Bank (EIB), main contractor - China Railway 23rd Bureau Group Co. Ltd. As a subcontractor, AZBUILDING Qrup MMC built the pavement structure, underground animal crossings and culverts on an approximately 2 km section crossing soft and partly marshy ground, using over 620,000 m³ of fill material.',
    },
  },
  {
    slug: 'alat-astara-highway',
    featured: true,
    type: 'infrastructure',
    cover: '/images/projects/project-06.svg',
    gallery: ['/images/projects/project-06.svg', '/images/projects/project-10.svg'],
    name: {
      az: 'Ələt-Astara avtomagistralı',
      ru: 'Автомагистраль Алят-Астара',
      en: 'Alat-Astara highway',
    },
    location: { az: 'Astara rayonu, Azərbaycan (Masallı-Astara hissəsi)', ru: 'Астаринский район, Азербайджан (участок Масаллы-Астара)', en: 'Astara district, Azerbaijan (Masalli-Astara section)' },
    partner: { az: 'Polad Yol Yapı / AAYDA', ru: 'Polad Yol Yapı / AAYDA', en: 'Polad Yol Yapı / AAYDA' },
    role: SUBCONTRACTOR,
    activity: { az: 'Körpü yanaşma yolları', ru: 'Подходные пути моста', en: 'Bridge approach roads' },
    period: { az: '2017', ru: '2017', en: '2017' },
    short: {
      az: 'Astara rayonunda tikilən körpünün yanaşma yollarının inşası.',
      ru: 'Строительство подходных путей моста в Астаринском районе.',
      en: 'Construction of the approach roads for a bridge in Astara district.',
    },
    description: {
      az: 'Ələt-Astara, İranla dövlət sərhədinədək avtomagistralının tikintisi (5-ci, Masallı-Astara hissəsi). Sifarişçi AAYDA, podratçı Polad Yol Yapı, partnyor General İnşaat. AZBUILDING Qrup subpodratçı qismində Astara rayonu ərazisində tikilən körpünün yanaşma yollarını inşa etmişdir.',
      ru: 'Строительство автомагистрали Алят-Астара до государственной границы с Ираном (5-й участок, Масаллы-Астара). Заказчик - AAYDA, подрядчик - Polad Yol Yapı, партнёр - General İnşaat. AZBUILDING Qrup в качестве субподрядчика построил подходные пути моста, возводимого на территории Астаринского района.',
      en: 'Construction of the Alat-Astara highway up to the state border with Iran (section 5, Masalli-Astara). Client - AAYDA, contractor - Polad Yol Yapı, partner - General İnşaat. As a subcontractor, AZBUILDING Qrup built the approach roads for the bridge constructed in the Astara district.',
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
