/**
 * UI translations for AZBUILDING MMC.
 *
 * Languages: Azerbaijani (az), Russian (ru), English (en).
 * Structure is intentionally flat-ish and grouped by area so translations are
 * easy to replace later. Use `t('group.key')` via useLanguage().
 *
 * NOTE: Domain content (services, projects, partners, customers, timeline,
 * metrics) is localized inside its own data file as { az, ru, en } records.
 */

export type Lang = 'az' | 'ru' | 'en'

type Tree = { [key: string]: string | Tree }

export const translations: Record<Lang, Tree> = {
  az: {
    nav: {
      home: 'Ana səhifə',
      about: 'Haqqımızda',
      services: 'Xidmətlər',
      projects: 'Layihələr',
      customers: 'Müştərilər',
      partners: 'Tərəfdaşlar',
      contact: 'Əlaqə',
    },
    cta: {
      requestProject: 'Layihə sifariş et',
      sendInquiry: 'Müraciət göndər',
      viewPortfolio: 'Portfolioya bax',
      viewProject: 'Layihəyə bax',
      viewAll: 'Hamısına bax',
      becomePartner: 'Tərəfdaş ol',
      backToPortfolio: 'Portfolioya qayıt',
      learnMore: 'Ətraflı',
      downloadDossier: 'Keyfiyyət sənədini yüklə (PDF)',
    },
    topbar: {
      tagline: 'Tikinti və Mühəndislik Mükəmməlliyi',
    },
    hero: {
      eyebrow: 'TİKİNTİ · MÜHƏNDİSLİK · LAYİHƏ İCRASI',
      title: 'Tikinti və mühəndisliyi bir araya gətiririk',
      subtitle:
        '2009-cu ildən AZBUILDING MMC — tikinti, mühəndislik dəstəyi, texniki ekspertiza, dəyər qiymətləndirməsi, təchizat və layihə koordinasiyası ilə layihələri qiymətləndirmədən icraya qədər müşayiət edir.',
    },
    sections: {
      metricsTag: 'ŞİRKƏT QISACA',
      metricsTitle: '2009-cu ildən tikinti və mühəndislik ofisi.',
      servicesTag: 'İMKANLARIMIZ',
      servicesTitle: 'Tikinti prosesinin hər mərhələsində bacarıqlar.',
      featuredTag: 'SEÇİLMİŞ İŞLƏR',
      featuredTitle: 'Seçilmiş işlər.',
      processTag: 'İCRA METODOLOGİYASI',
      processTitle: 'Vizyonunuzu necə həyata keçiririk',
      qualityTag: 'KEYFİYYƏT STANDARTLARI',
      qualityTitle: 'Mühəndislik mükəmməlliyi.',
      timelineTag: 'İNKİŞAF TARİXİMİZ',
      timelineTitle: 'Təməldən portfoliuya.',
      partnersTag: 'STRATEJİ TƏRƏFDAŞLIQLAR',
      partnersTitle: 'Sənaye tərəfdaşları',
      customersTag: 'TƏRƏFDAŞLAR VƏ MÜŞTƏRİLƏR',
      customersTitle: 'Seçilmiş tərəfdaşlar və müştərilər',
      contactTag: 'ƏLAQƏ',
      contactTitle: 'Növbəti layihənizi müzakirə edək.',
    },
    form: {
      name: 'Ad, Soyad',
      phone: 'Telefon',
      email: 'E-poçt',
      company: 'Şirkət / Layihə (istəyə bağlı)',
      serviceType: 'Xidmət növü',
      serviceTypePlaceholder: 'Xidmət seçin',
      message: 'Mesaj',
      submit: 'Müraciəti göndər',
      sending: 'Göndərilir...',
      successTitle: 'Təşəkkür edirik!',
      success: 'Müraciətiniz qəbul edildi. Tezliklə sizinlə əlaqə saxlayacağıq.',
      errorTitle: 'Xəta baş verdi',
      error: 'Müraciət göndərilmədi. Zəhmət olmasa yenidən cəhd edin və ya birbaşa bizə yazın.',
      notConfigured:
        'Forma hələ qoşulmayıb. Administrator VITE_CONTACT_FORM_ENDPOINT dəyişənini təyin etməlidir.',
      required: 'Bu sahə tələb olunur',
      invalidEmail: 'Düzgün e-poçt daxil edin',
      contactRequired: 'Telefon və ya e-poçt daxil edin',
    },
    footer: {
      summary:
        'AZBUILDING MMC — sənaye, kommersiya və yaşayış obyektləri üçün tikinti, layihə icrası, dizayn və yenidənqurma həll yolları təqdim edir. Hər layihəni struktur dəqiqliklə təhvil veririk.',
      quickNav: 'Naviqasiya',
      company: 'Şirkət',
      contact: 'Əlaqə',
      follow: 'İzləyin',
      rights: 'Bütün hüquqlar qorunur.',
    },
    search: {
      placeholder: 'Xidmətlər, layihələr, səhifələr axtarın...',
      hint: 'Axtarmaq üçün yazın',
      noResults: 'Nəticə tapılmadı',
      services: 'Xidmətlər',
      projects: 'Layihələr',
      pages: 'Səhifələr',
    },
    misc: {
      year: 'İl',
      location: 'Yer',
      type: 'Növ',
      scope: 'İş həcmi',
      client: 'Sifarişçi',
      role: 'AZBUILDING rolu',
      status: 'Status',
      relatedProjects: 'Əlaqəli layihələr',
      scopeOfWork: 'İş həcmi',
      allTypes: 'Bütün növlər',
      allYears: 'Bütün illər',
      allLocations: 'Bütün yerlər',
      filterBy: 'Filtrlə',
    },
  },

  ru: {
    nav: {
      home: 'Главная',
      about: 'О компании',
      services: 'Услуги',
      projects: 'Проекты',
      customers: 'Клиенты',
      partners: 'Партнёры',
      contact: 'Контакты',
    },
    cta: {
      requestProject: 'Заказать проект',
      sendInquiry: 'Отправить запрос',
      viewPortfolio: 'Смотреть портфолио',
      viewProject: 'Смотреть проект',
      viewAll: 'Смотреть все',
      becomePartner: 'Стать партнёром',
      backToPortfolio: 'Назад к портфолио',
      learnMore: 'Подробнее',
      downloadDossier: 'Скачать досье качества (PDF)',
    },
    topbar: {
      tagline: 'Совершенство в строительстве и инжиниринге',
    },
    hero: {
      eyebrow: 'СТРОИТЕЛЬСТВО · ИНЖИНИРИНГ · РЕАЛИЗАЦИЯ',
      title: 'Соединяем строительство и инжиниринг',
      subtitle:
        'С 2009 года AZBUILDING MMC сопровождает проекты от оценки до исполнения — через строительство, инженерную поддержку, техническую экспертизу, оценку стоимости, закупки и координацию проектов.',
    },
    sections: {
      metricsTag: 'КОМПАНИЯ КРАТКО',
      metricsTitle: 'Строительно-инженерный офис с 2009 года.',
      servicesTag: 'НАШИ ВОЗМОЖНОСТИ',
      servicesTitle: 'Компетенции на каждом этапе строительного процесса.',
      featuredTag: 'ИЗБРАННЫЕ РАБОТЫ',
      featuredTitle: 'Избранные работы.',
      processTag: 'МЕТОДОЛОГИЯ',
      processTitle: 'Как мы реализуем ваше видение',
      qualityTag: 'СТАНДАРТЫ КАЧЕСТВА',
      qualityTitle: 'Инженерное совершенство.',
      timelineTag: 'ИСТОРИЯ РАЗВИТИЯ',
      timelineTitle: 'От фундамента до портфолио.',
      partnersTag: 'СТРАТЕГИЧЕСКИЕ АЛЬЯНСЫ',
      partnersTitle: 'Отраслевые партнёры',
      customersTag: 'ПАРТНЁРЫ И КЛИЕНТЫ',
      customersTitle: 'Избранные партнёры и клиенты',
      contactTag: 'СВЯЗАТЬСЯ',
      contactTitle: 'Обсудим ваш следующий проект.',
    },
    form: {
      name: 'Имя и фамилия',
      phone: 'Телефон',
      email: 'Эл. почта',
      company: 'Компания / Проект (необязательно)',
      serviceType: 'Тип услуги',
      serviceTypePlaceholder: 'Выберите услугу',
      message: 'Сообщение',
      submit: 'Отправить запрос',
      sending: 'Отправка...',
      successTitle: 'Спасибо!',
      success: 'Ваш запрос принят. Мы свяжемся с вами в ближайшее время.',
      errorTitle: 'Произошла ошибка',
      error: 'Не удалось отправить запрос. Попробуйте снова или напишите нам напрямую.',
      notConfigured:
        'Форма ещё не подключена. Администратор должен задать переменную VITE_CONTACT_FORM_ENDPOINT.',
      required: 'Обязательное поле',
      invalidEmail: 'Введите корректный e-mail',
      contactRequired: 'Укажите телефон или e-mail',
    },
    footer: {
      summary:
        'AZBUILDING MMC предоставляет решения по строительству, реализации проектов, проектированию и реновации для промышленных, коммерческих и жилых объектов. Каждый проект сдаём со структурной точностью.',
      quickNav: 'Навигация',
      company: 'Компания',
      contact: 'Контакты',
      follow: 'Соцсети',
      rights: 'Все права защищены.',
    },
    search: {
      placeholder: 'Поиск услуг, проектов, страниц...',
      hint: 'Начните вводить',
      noResults: 'Ничего не найдено',
      services: 'Услуги',
      projects: 'Проекты',
      pages: 'Страницы',
    },
    misc: {
      year: 'Год',
      location: 'Локация',
      type: 'Тип',
      scope: 'Объём работ',
      client: 'Заказчик',
      role: 'Роль AZBUILDING',
      status: 'Статус',
      relatedProjects: 'Похожие проекты',
      scopeOfWork: 'Объём работ',
      allTypes: 'Все типы',
      allYears: 'Все годы',
      allLocations: 'Все локации',
      filterBy: 'Фильтр',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      customers: 'Customers',
      partners: 'Partners',
      contact: 'Contact',
    },
    cta: {
      requestProject: 'Request Project',
      sendInquiry: 'Send Inquiry',
      viewPortfolio: 'View Portfolio',
      viewProject: 'View Project',
      viewAll: 'View All',
      becomePartner: 'Become a Partner',
      backToPortfolio: 'Back to Portfolio',
      learnMore: 'Learn More',
      downloadDossier: 'Download Quality Dossier (PDF)',
    },
    topbar: {
      tagline: 'Construction & Engineering Excellence',
    },
    hero: {
      eyebrow: 'CONSTRUCTION · ENGINEERING · PROJECT EXECUTION',
      title: 'Where construction meets engineering',
      subtitle:
        'Since 2009, AZBUILDING MMC has supported projects from evaluation to execution — through construction, engineering support, technical expertise, cost evaluation, procurement and project coordination.',
    },
    sections: {
      metricsTag: 'COMPANY AT A GLANCE',
      metricsTitle: 'A construction and engineering office since 2009.',
      servicesTag: 'OUR CAPABILITIES',
      servicesTitle: 'Capabilities across the full construction process.',
      featuredTag: 'SELECTED WORK',
      featuredTitle: 'Representative works.',
      processTag: 'EXECUTION METHODOLOGY',
      processTitle: 'How we execute your vision',
      qualityTag: 'QUALITY STANDARDS',
      qualityTitle: 'Engineering excellence.',
      timelineTag: 'OUR DEVELOPMENT',
      timelineTitle: 'From foundation to portfolio.',
      partnersTag: 'STRATEGIC ALLIANCES',
      partnersTitle: 'Industry partners',
      customersTag: 'PARTNERS & CLIENTS',
      customersTitle: 'Selected partners and clients',
      contactTag: 'GET IN TOUCH',
      contactTitle: "Let's discuss your next project.",
    },
    form: {
      name: 'Full Name',
      phone: 'Phone',
      email: 'Email',
      company: 'Company / Project (optional)',
      serviceType: 'Service Type',
      serviceTypePlaceholder: 'Select a service',
      message: 'Message',
      submit: 'Send Inquiry',
      sending: 'Sending...',
      successTitle: 'Thank you!',
      success: 'Your inquiry has been received. We will get back to you shortly.',
      errorTitle: 'Something went wrong',
      error: 'Could not send your inquiry. Please try again or contact us directly.',
      notConfigured:
        'The form is not connected yet. The administrator must set the VITE_CONTACT_FORM_ENDPOINT variable.',
      required: 'This field is required',
      invalidEmail: 'Enter a valid email',
      contactRequired: 'Provide a phone number or email',
    },
    footer: {
      summary:
        'AZBUILDING MMC delivers construction, project execution, design and renovation solutions for industrial, commercial and residential projects. Every project handed over with structural precision.',
      quickNav: 'Navigation',
      company: 'Company',
      contact: 'Contact',
      follow: 'Follow',
      rights: 'All rights reserved.',
    },
    search: {
      placeholder: 'Search services, projects, pages...',
      hint: 'Start typing to search',
      noResults: 'No results found',
      services: 'Services',
      projects: 'Projects',
      pages: 'Pages',
    },
    misc: {
      year: 'Year',
      location: 'Location',
      type: 'Type',
      scope: 'Scope',
      client: 'Client',
      role: 'AZBUILDING role',
      status: 'Status',
      relatedProjects: 'Related projects',
      scopeOfWork: 'Scope of work',
      allTypes: 'All types',
      allYears: 'All years',
      allLocations: 'All locations',
      filterBy: 'Filter',
    },
  },
}

/** Company contact info — single source of truth, replace with real values. */
export const company = {
  name: 'AZBUILDING MMC',
  domain: 'azbuilding.az',
  // TODO: replace with the real registered address
  address: {
    az: 'Bakı, Azərbaycan',
    ru: 'Баку, Азербайджан',
    en: 'Baku, Azerbaijan',
  } as Record<Lang, string>,
  // Google Maps link is generated from this query — replace with exact address.
  mapsQuery: 'Baku, Azerbaijan',
  phone: '+994 00 000 00 00', // TODO: replace
  email: 'info@azbuilding.az', // TODO: confirm real inbox
  social: {
    instagram: 'https://instagram.com/', // TODO
    facebook: 'https://facebook.com/', // TODO
    linkedin: 'https://linkedin.com/', // TODO
  },
}
