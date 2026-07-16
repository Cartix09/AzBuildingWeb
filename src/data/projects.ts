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
 * PORTFOLIO - client-provided projects (Sayt mətni + portfolio files). The five
 * projects with real client photography are featured first; Sumqayıt has no real
 * photo yet and is kept unfeatured with its placeholder. Brand naming is
 * normalised to AZBUILDING / AZBUILDING Qrup MMC.
 */
export const projects: Project[] = [
  {
    slug: 'asyl-arman-almaty',
    featured: true,
    type: 'residential',
    cover: '/images/projects/asil-arman-1.jpg',
    gallery: ['/images/projects/asil-arman-1.jpg', '/images/projects/asil-arman-2.jpg'],
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
    cover: '/images/projects/samtredia-qriqoleti-enhanced.jpg',
    gallery: ['/images/projects/samtredia-qriqoleti-enhanced.jpg'],
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
    cover: '/images/projects/alat-astara-enhanced.jpg',
    gallery: ['/images/projects/alat-astara-enhanced.jpg'],
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
  {
    slug: 'cabrayil-drinks-factory',
    featured: true,
    type: 'industrial',
    cover: '/images/projects/cabrayil-drinks-factory-1.jpg',
    gallery: ['/images/projects/cabrayil-drinks-factory-1.jpg', '/images/projects/cabrayil-drinks-factory-3.jpg'],
    name: {
      az: 'Alkoqolsuz İçkilər İstehsalı Kombinatı',
      ru: 'Комбинат по производству безалкогольных напитков',
      en: 'Soft-drinks production plant',
    },
    location: { az: 'Cəbrayıl şəhəri, Azərbaycan', ru: 'Город Джебраил, Азербайджан', en: 'Jabrayil, Azerbaijan' },
    partner: { az: 'Azərsun Holdinq / İnnova Contracting and Construction', ru: 'Azərsun Holdinq / İnnova Contracting and Construction', en: 'Azersun Holding / İnnova Contracting and Construction' },
    role: SUBCONTRACTOR,
    activity: { az: 'Tikinti-quraşdırma işləri', ru: 'Строительно-монтажные работы', en: 'Construction & installation works' },
    period: { az: '2024-2026', ru: '2024-2026', en: '2024-2026' },
    short: {
      az: 'Cəbrayılda 10 ha ərazidə içki zavodunun bünövrədən tamamlamaya tikintisi.',
      ru: 'Строительство завода напитков на участке 10 га в Джебраиле - от фундамента до отделки.',
      en: 'Building a beverage plant on a 10 ha site in Jabrayil - from foundations to finishing.',
    },
    description: {
      az: 'Azərbaycan, Cəbrayıl rayonunda Azərsun Holdinq üçün inşa edilən alkoqolsuz içkilər istehsalı kombinatı. Sifarişçi Azərsun Holdinq, podratçı İnnova Contracting and Construction, partnyor Antik MMC. AZBUILDING subpodratçı qismində Cəbrayıl şəhərində 10 hektar ərazidə zavodun bünövrədən təmir-tamamlama işlərinədək tikinti-quraşdırma işlərini icra edir.',
      ru: 'Комбинат по производству безалкогольных напитков, возводимый для Azərsun Holdinq в Джебраильском районе Азербайджана. Заказчик - Azərsun Holdinq, подрядчик - İnnova Contracting and Construction, партнёр - Antik MMC. AZBUILDING в качестве субподрядчика выполняет строительно-монтажные работы на участке 10 га в городе Джебраил - от фундамента до отделочных работ.',
      en: 'A soft-drinks production plant built for Azersun Holding in the Jabrayil district of Azerbaijan. Client - Azersun Holding, contractor - İnnova Contracting and Construction, partner - Antik MMC. As a subcontractor, AZBUILDING carries out the construction and installation works on a 10-hectare site in Jabrayil - from foundations to finishing.',
    },
  },
  {
    slug: 'm07-kyiv-yahodyn-highway',
    featured: true,
    type: 'infrastructure',
    cover: '/images/projects/m07-kyiv-yahodyn-1.jpg',
    gallery: ['/images/projects/m07-kyiv-yahodyn-1.jpg', '/images/projects/m07-kyiv-yahodyn-2.jpg'],
    name: {
      az: 'M-07 Kiyev-Kovel-Yaqodin avtomobil yolu',
      ru: 'Автодорога М-07 Киев-Ковель-Ягодин',
      en: 'M-07 Kyiv-Kovel-Yahodyn highway',
    },
    location: { az: 'Ukrayna, Kiyev-Yaqodin', ru: 'Украина, Киев-Ягодин', en: 'Ukraine, Kyiv-Yahodyn' },
    partner: { az: 'Ukravtodor / AZERKORPU-EVRASCON', ru: 'Ukravtodor / AZERKORPU-EVRASCON', en: 'Ukravtodor / AZERKORPU-EVRASCON' },
    role: SUBCONTRACTOR,
    activity: { az: 'Yolun əsaslı təmiri', ru: 'Капитальный ремонт дороги', en: 'Major road rehabilitation' },
    period: { az: '2011-2013', ru: '2011-2013', en: '2011-2013' },
    short: {
      az: '33,4 km yolun əsaslı təmiri, körpü yanaşma yolları və suötürücülər.',
      ru: 'Капремонт 33,4 км дороги, подходные пути моста и водопропускные сооружения.',
      en: 'Major rehabilitation of 33.4 km of road, bridge approaches and culverts.',
    },
    description: {
      az: 'M-07 Kiyev-Kovel-Yaqodin avtomobil yolunun əsaslı təmiri (Nemeşaevo, Borodyanka qəsəbələri və Volnisa kəndi ərazisi). Sifarişçi Ukravtodor (Ukrayna Avtomobil Yolları Dövlət Xidməti), podratçı AZERKORPU ASC - EVRASCON ASC. AZBUILDING MMC subpodratçı qismində 33,4 km avtomobil yolunun əsaslı təmirində torpaq işlərini, yeni körpünün yanaşma yollarını və kiçik ölçülü suötürücülərin inşasını icra etmişdir.',
      ru: 'Капитальный ремонт автодороги М-07 Киев-Ковель-Ягодин (в районе посёлков Немешаево, Бородянка и села Вольница). Заказчик - Ukravtodor (Государственная служба автомобильных дорог Украины), подрядчик - AZERKORPU ASC - EVRASCON ASC. AZBUILDING MMC в качестве субподрядчика выполнил земляные работы, подходные пути нового моста и строительство малых водопропускных сооружений на 33,4 км капитально ремонтируемой дороги.',
      en: 'Major rehabilitation of the M-07 Kyiv-Kovel-Yahodyn highway (around the settlements of Nemeshaevo, Borodyanka and the village of Volnytsia). Client - Ukravtodor (State Road Agency of Ukraine), contractor - AZERKORPU ASC - EVRASCON ASC. As a subcontractor, AZBUILDING MMC carried out earthworks, the approach roads for a new bridge and the construction of small culverts along 33.4 km of the rehabilitated road.',
    },
  },
  {
    slug: 'sumqayit-technical-service-complex',
    featured: false,
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
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const featuredProjects = () => projects.filter((p) => p.featured)
export const relatedProjects = (slug: string, type: ProjectType, limit = 3) => {
  const sameType = projects.filter((p) => p.slug !== slug && p.type === type)
  if (sameType.length >= limit) return sameType.slice(0, limit)
  const others = projects.filter((p) => p.slug !== slug && p.type !== type)
  return [...sameType, ...others].slice(0, limit)
}
