import type { Lang } from './translations'

type Loc = Record<Lang, string>

export const aboutContent = {
  eyebrow: { az: 'HAQQIMIZDA', ru: 'О КОМПАНИИ', en: 'ABOUT US' } as Loc,
  title: {
    az: 'Struktur dəqiqliklə tikən komanda.',
    ru: 'Команда, которая строит со структурной точностью.',
    en: 'A team that builds with structural precision.',
  } as Loc,
  intro: {
    az: 'AZBUILDING MMC tikinti, layihə icrası, dizayn və yenidənqurma sahəsində fəaliyyət göstərən tikinti şirkətidir. Yaşayış, kommersiya və sənaye obyektlərini struktur dəqiqliyi və etibarlı sənədləşmə ilə təhvil veririk.',
    ru: 'AZBUILDING MMC — строительная компания, работающая в сфере строительства, реализации проектов, проектирования и реновации. Мы сдаём жилые, коммерческие и промышленные объекты со структурной точностью и надёжной документацией.',
    en: 'AZBUILDING MMC is a construction company operating across construction, project execution, design and renovation. We deliver residential, commercial and industrial facilities with structural precision and reliable documentation.',
  } as Loc,
  mission: {
    title: { az: 'Missiya', ru: 'Миссия', en: 'Mission' } as Loc,
    body: {
      az: 'Hər layihəni keyfiyyət, təhlükəsizlik və şəffaflıq prinsipləri əsasında, vəd olunan müddətdə təhvil vermək.',
      ru: 'Сдавать каждый проект в обещанные сроки на принципах качества, безопасности и прозрачности.',
      en: 'To deliver every project on schedule, grounded in quality, safety and transparency.',
    } as Loc,
  },
  vision: {
    title: { az: 'Vizyon', ru: 'Видение', en: 'Vision' } as Loc,
    body: {
      az: 'Regionda etibarlı tikinti və mühəndislik tərəfdaşı kimi tanınmaq və hər obyektdə davamlı dəyər yaratmaq.',
      ru: 'Стать признанным надёжным партнёром в строительстве и инжиниринге в регионе и создавать устойчивую ценность на каждом объекте.',
      en: 'To be recognised as a trusted construction and engineering partner in the region, creating lasting value on every site.',
    } as Loc,
  },
  principles: [
    {
      title: { az: 'Keyfiyyət', ru: 'Качество', en: 'Quality' } as Loc,
      body: {
        az: 'Yüksək keyfiyyətli materiallar və yoxlanılmış icra metodları.',
        ru: 'Качественные материалы и проверенные методы исполнения.',
        en: 'High-grade materials and proven execution methods.',
      } as Loc,
    },
    {
      title: { az: 'Təhlükəsizlik', ru: 'Безопасность', en: 'Safety' } as Loc,
      body: {
        az: 'Sahədə təhlükəsizliyə yönəlik intizamlı iş mədəniyyəti.',
        ru: 'Дисциплинированная культура труда с фокусом на безопасность.',
        en: 'A disciplined work culture oriented around site safety.',
      } as Loc,
    },
    {
      title: { az: 'Şəffaflıq', ru: 'Прозрачность', en: 'Transparency' } as Loc,
      body: {
        az: 'Aydın hesabatlılıq, sənədləşmə və büdcə nəzarəti.',
        ru: 'Чёткая отчётность, документация и контроль бюджета.',
        en: 'Clear reporting, documentation and budget control.',
      } as Loc,
    },
    {
      title: { az: 'Etibarlılıq', ru: 'Надёжность', en: 'Reliability' } as Loc,
      body: {
        az: 'Vədlərə sadiqlik və müddətlərə hörmət.',
        ru: 'Верность обязательствам и уважение к срокам.',
        en: 'Commitment to promises and respect for deadlines.',
      } as Loc,
    },
  ],
  certificates: {
    title: { az: 'Sertifikatlar və Lisenziyalar', ru: 'Сертификаты и лицензии', en: 'Certificates & Licenses' } as Loc,
    // PLACEHOLDER: do not present these as held certifications until verified.
    note: {
      az: 'Sertifikat və lisenziyalar üçün yer ayrılıb. Rəsmi sənədlər təqdim edildikdə bura əlavə olunacaq.',
      ru: 'Раздел зарезервирован под сертификаты и лицензии. Будет заполнен после предоставления официальных документов.',
      en: 'This section is reserved for certificates and licenses. It will be populated once official documents are provided.',
    } as Loc,
  },
}
