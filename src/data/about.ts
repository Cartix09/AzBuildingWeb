import type { Lang } from './translations'

type Loc = Record<Lang, string>

export const aboutContent = {
  eyebrow: { az: 'HAQQIMIZDA', ru: 'О КОМПАНИИ', en: 'ABOUT US' } as Loc,
  title: {
    az: '2009-cu ildən tikinti və mühəndislik ofisi.',
    ru: 'Строительно-инженерный офис с 2009 года.',
    en: 'A construction and engineering office since 2009.',
  } as Loc,
  intro: {
    az: 'AZBUILDING MMC 2009-cu ildə təsis edilmiş tikinti, mühəndislik və layihə icrası şirkətidir. Yalnız fiziki tikinti deyil; texniki ekspertiza, tikinti müayinəsi, dəyər qiymətləndirməsi, təchizat və subpodratçı koordinasiyası, material logistikası, fit-out və yenidənqurma vasitəsilə layihələrdə iştirak edən ofis əsaslı şirkətdir.',
    ru: 'AZBUILDING MMC — компания в области строительства, инжиниринга и реализации проектов, основанная в 2009 году. Это офисная компания, которая участвует в проектах не только через физическое строительство, но и через техническую экспертизу, строительное обследование, оценку стоимости, координацию закупок и субподрядчиков, логистику материалов, fit-out и реновацию.',
    en: 'AZBUILDING MMC is a construction, engineering and project execution company founded in 2009. It is an office-based company that participates in projects not only through physical construction, but through technical expertise, construction inspection, cost evaluation, procurement and subcontractor coordination, material logistics, fit-out and renovation.',
  } as Loc,
  mission: {
    title: { az: 'Missiya', ru: 'Миссия', en: 'Mission' } as Loc,
    body: {
      az: 'Tikinti və inkişaf layihələrini etibarlı icra, mühəndis əsaslı qərarlar, texniki qiymətləndirmə, təchizat koordinasiyası və intizamlı layihə təhvili ilə dəstəkləmək.',
      ru: 'Поддерживать строительные и девелоперские проекты надёжным исполнением, инженерно обоснованными решениями, технической оценкой, координацией закупок и дисциплинированной сдачей проектов.',
      en: 'To support construction and development projects with reliable execution, engineering-based decision making, technical evaluation, procurement coordination and disciplined project delivery.',
    } as Loc,
  },
  vision: {
    title: { az: 'Vizyon', ru: 'Видение', en: 'Vision' } as Loc,
    body: {
      az: 'Praktiki təcrübə, texniki dəqiqlik və layihələri qiymətləndirmədən icraya qədər koordinasiya etmək bacarığı ilə tanınan, Azərbaycanda etibarlı tikinti və mühəndislik tərəfdaşına çevrilmək.',
      ru: 'Стать надёжным строительно-инженерным партнёром в Азербайджане, известным практическим опытом, технической точностью и способностью координировать проекты от оценки до исполнения.',
      en: 'To become a trusted construction and engineering partner in Azerbaijan, known for practical experience, technical precision and the ability to coordinate projects from evaluation to execution.',
    } as Loc,
  },
  principles: [
    {
      title: { az: 'Texniki dəqiqlik', ru: 'Техническая точность', en: 'Technical accuracy' } as Loc,
      body: {
        az: 'Qərarlar mühəndis məntiqinə və texniki həqiqətə əsaslanır.',
        ru: 'Решения основаны на инженерной логике и технической достоверности.',
        en: 'Decisions grounded in engineering logic and technical accuracy.',
      } as Loc,
    },
    {
      title: { az: 'Məsuliyyətli icra', ru: 'Ответственное исполнение', en: 'Responsible execution' } as Loc,
      body: {
        az: 'İşi vədə uyğun, intizamlı və nəzarətli şəkildə təhvil veririk.',
        ru: 'Сдаём работу дисциплинированно, под контролем и в соответствии с обязательствами.',
        en: 'We deliver work disciplined, supervised and as committed.',
      } as Loc,
    },
    {
      title: { az: 'Aydın koordinasiya', ru: 'Чёткая координация', en: 'Clear coordination' } as Loc,
      body: {
        az: 'Təchizatçı, subpodratçı və komandalar arasında aydın əlaqələndirmə.',
        ru: 'Чёткая координация между поставщиками, субподрядчиками и командами.',
        en: 'Clear coordination across suppliers, subcontractors and teams.',
      } as Loc,
    },
    {
      title: { az: 'Praktiki təcrübə', ru: 'Практический опыт', en: 'Practical experience' } as Loc,
      body: {
        az: '2009-cu ildən bəri real layihələrdə qazanılmış təcrübə.',
        ru: 'Опыт, накопленный на реальных проектах с 2009 года.',
        en: 'Experience built on real projects since 2009.',
      } as Loc,
    },
    {
      title: { az: 'Etibar və məxfilik', ru: 'Доверие и конфиденциальность', en: 'Trust & confidentiality' } as Loc,
      body: {
        az: 'Sifarişçi məlumatlarına və şəxsi layihələrə hörmət və məxfilik.',
        ru: 'Уважение и конфиденциальность данных заказчика и частных проектов.',
        en: 'Respect and confidentiality for client data and private projects.',
      } as Loc,
    },
    {
      title: { az: 'Uzunmüddətli tərəfdaşlıq', ru: 'Долгосрочное партнёрство', en: 'Long-term partnerships' } as Loc,
      body: {
        az: 'Birdəfəlik işlərdən çox davamlı əməkdaşlıqlar qururuq.',
        ru: 'Строим устойчивое сотрудничество, а не разовые работы.',
        en: 'We build lasting cooperation, not one-off jobs.',
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
