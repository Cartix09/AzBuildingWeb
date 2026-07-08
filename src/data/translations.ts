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
      order: 'Təklif al',
      sendInquiry: 'Müraciət göndər',
      viewPortfolio: 'Portfolioya bax',
      viewProject: 'Layihəyə bax',
      viewAll: 'Hamısına bax',
      becomePartner: 'Tərəfdaş ol',
      backToPortfolio: 'Portfolioya qayıt',
      learnMore: 'Ətraflı',
      downloadDossier: 'Keyfiyyət sənədini yüklə (PDF)',
      viewLicense: 'Lisenziyanı aç',
      downloadPdf: 'PDF yüklə',
    },
    topbar: {
      tagline: 'Tikinti və Mühəndislik Mükəmməlliyi',
    },
    header: {
      since: '2009-cu ildən',
      license: 'Tikinti-quraşdırma lisenziyası',
      tagline: 'Düşüncədən konstruksiyaya',
      descriptor: 'Engineering · Contracting · Construction · Project Management',
    },
    hero: {
      eyebrow: 'TİKİNTİ · MÜLKİ-SƏNAYE · İNFRASTRUKTUR',
      title: 'Tikinti və infrastrukturun icrası',
      subtitle:
        '2009-cu ildən AZBUILDING MMC mülki, sənaye və infrastruktur tikintisini Azərbaycan, Gürcüstan və Ukraynada təcrübəli, çoxprofilli icra tərəfdaşı kimi həyata keçirir.',
    },
    sections: {
      metricsTag: 'ŞİRKƏT QISACA',
      metricsTitle: '2009-cu ildən mülki, sənaye və infrastruktur tikintisi.',
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
        'AZBUILDING MMC 2009-cu ildən mülki-sənaye və infrastruktur tikinti sektorunda fəaliyyət göstərən, təcrübəli çoxprofilli icra tərəfdaşıdır.',
      quickNav: 'Naviqasiya',
      company: 'Şirkət',
      contact: 'Əlaqə',
      follow: 'İzləyin',
      rights: 'Bütün hüquqlar qorunur.',
    },
    search: {
      placeholder: 'Xidmətlər, layihələr, səhifələr axtarın...',
      short: 'Axtar',
      hint: 'Axtarmaq üçün yazın',
      noResults: 'Nəticə tapılmadı',
      services: 'Xidmətlər',
      projects: 'Layihələr',
      pages: 'Səhifələr',
    },
    misc: {
      year: 'İl',
      period: 'Dövr',
      location: 'Yer',
      type: 'Növ',
      scope: 'İş həcmi',
      client: 'Sifarişçi',
      partner: 'Tərəfdaş / Sifarişçi',
      activity: 'Fəaliyyət',
      role: 'AZBUILDING rolu',
      status: 'Status',
      relatedProjects: 'Əlaqəli layihələr',
      scopeOfWork: 'İş həcmi',
      allTypes: 'Bütün növlər',
      allYears: 'Bütün illər',
      allLocations: 'Bütün yerlər',
      filterBy: 'Filtrlə',
      legalAddress: 'Hüquqi ünvan',
      actualAddress: 'Faktiki ünvan',
      website: 'Veb sayt',
    },
    projects: {
      participationNote:
        'Portfolio 2009-2025 və sonrakı dövrlərdə görülmüş işləri və iştirakı əks etdirir. Bəzi işlər tam rəsmi sənədləşmə ilə müşayiət olunmadığından, layihələr təcrübə / iştirak formatında, şirkətin rolu olduğu kimi göstərilməklə təqdim olunur.',
      confidentialNote: 'Sifarişçinin istəyi ilə bəzi layihə təfərrüatları məxfi saxlanılır.',
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
      order: 'Получить предложение',
      sendInquiry: 'Отправить запрос',
      viewPortfolio: 'Смотреть портфолио',
      viewProject: 'Смотреть проект',
      viewAll: 'Смотреть все',
      becomePartner: 'Стать партнёром',
      backToPortfolio: 'Назад к портфолио',
      learnMore: 'Подробнее',
      downloadDossier: 'Скачать досье качества (PDF)',
      viewLicense: 'Открыть лицензию',
      downloadPdf: 'Скачать PDF',
    },
    topbar: {
      tagline: 'Совершенство в строительстве и инжиниринге',
    },
    header: {
      since: 'С 2009 года',
      license: 'Строительная лицензия',
      tagline: 'От идеи до конструкции',
      descriptor: 'Engineering · Contracting · Construction · Project Management',
    },
    hero: {
      eyebrow: 'СТРОИТЕЛЬСТВО · ГРАЖД.-ПРОМ. · ИНФРАСТРУКТУРА',
      title: 'Строительство и инфраструктура',
      subtitle:
        'С 2009 года AZBUILDING MMC реализует гражданское, промышленное и инфраструктурное строительство как опытный многопрофильный исполнительный партнёр в Азербайджане, Грузии и Украине.',
    },
    sections: {
      metricsTag: 'КОМПАНИЯ КРАТКО',
      metricsTitle: 'Гражданское, промышленное и инфраструктурное строительство с 2009 года.',
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
        'AZBUILDING MMC работает в сфере гражданско-промышленного и инфраструктурного строительства с 2009 года как опытный многопрофильный исполнительный партнёр.',
      quickNav: 'Навигация',
      company: 'Компания',
      contact: 'Контакты',
      follow: 'Соцсети',
      rights: 'Все права защищены.',
    },
    search: {
      placeholder: 'Поиск услуг, проектов, страниц...',
      short: 'Поиск',
      hint: 'Начните вводить',
      noResults: 'Ничего не найдено',
      services: 'Услуги',
      projects: 'Проекты',
      pages: 'Страницы',
    },
    misc: {
      year: 'Год',
      period: 'Период',
      location: 'Локация',
      type: 'Тип',
      scope: 'Объём работ',
      client: 'Заказчик',
      partner: 'Партнёр / Заказчик',
      activity: 'Деятельность',
      role: 'Роль AZBUILDING',
      status: 'Статус',
      relatedProjects: 'Похожие проекты',
      scopeOfWork: 'Объём работ',
      allTypes: 'Все типы',
      allYears: 'Все годы',
      allLocations: 'Все локации',
      filterBy: 'Фильтр',
      legalAddress: 'Юридический адрес',
      actualAddress: 'Фактический адрес',
      website: 'Веб-сайт',
    },
    projects: {
      participationNote:
        'Портфолио отражает работы и участие, выполненные в период 2009-2025 и позже. Поскольку часть работ не сопровождалась полной формальной документацией, проекты представлены в формате опыта / участия, с указанием роли компании как есть.',
      confidentialNote: 'По просьбе заказчика отдельные детали проектов сохраняются конфиденциальными.',
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
      order: 'Get a quote',
      sendInquiry: 'Send Inquiry',
      viewPortfolio: 'View Portfolio',
      viewProject: 'View Project',
      viewAll: 'View All',
      becomePartner: 'Become a Partner',
      backToPortfolio: 'Back to Portfolio',
      learnMore: 'Learn More',
      downloadDossier: 'Download Quality Dossier (PDF)',
      viewLicense: 'View License',
      downloadPdf: 'Download PDF',
    },
    topbar: {
      tagline: 'Construction & Engineering Excellence',
    },
    header: {
      since: 'Since 2009',
      license: 'Construction license',
      tagline: 'From concept to construction',
      descriptor: 'Engineering · Contracting · Construction · Project Management',
    },
    hero: {
      eyebrow: 'CONSTRUCTION · CIVIL-INDUSTRIAL · INFRASTRUCTURE',
      title: 'Construction & infrastructure execution',
      subtitle:
        'Since 2009, AZBUILDING MMC has delivered civil, industrial and infrastructure construction across Azerbaijan, Georgia and Ukraine as an experienced, multi-profile execution partner.',
    },
    sections: {
      metricsTag: 'COMPANY AT A GLANCE',
      metricsTitle: 'Civil, industrial and infrastructure construction since 2009.',
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
        'AZBUILDING MMC has worked in civil-industrial and infrastructure construction since 2009 as an experienced, multi-profile execution partner.',
      quickNav: 'Navigation',
      company: 'Company',
      contact: 'Contact',
      follow: 'Follow',
      rights: 'All rights reserved.',
    },
    search: {
      placeholder: 'Search services, projects, pages...',
      short: 'Search',
      hint: 'Start typing to search',
      noResults: 'No results found',
      services: 'Services',
      projects: 'Projects',
      pages: 'Pages',
    },
    misc: {
      year: 'Year',
      period: 'Period',
      location: 'Location',
      type: 'Type',
      scope: 'Scope',
      client: 'Client',
      partner: 'Partner / Client',
      activity: 'Activity',
      role: 'AZBUILDING role',
      status: 'Status',
      relatedProjects: 'Related projects',
      scopeOfWork: 'Scope of work',
      allTypes: 'All types',
      allYears: 'All years',
      allLocations: 'All locations',
      filterBy: 'Filter',
      legalAddress: 'Legal address',
      actualAddress: 'Office address',
      website: 'Website',
    },
    projects: {
      participationNote:
        'The portfolio reflects works and participation carried out during 2009-2025 and later. As some works were not accompanied by full formal documentation, projects are presented in an experience / participation format, with the company’s role shown as stated.',
      confidentialNote: 'At the client’s request, certain project details are kept confidential.',
    },
  },
}

/** Company contact info - single source of truth (AZB sayt info). */
export const company = {
  // Brand name for copyright/meta. Logo wordmark stays "AZBUILDING MMC".
  name: 'AZBUILDING MMC',
  domain: 'azbuilding.az',
  website: 'https://www.azbuilding.az',
  // Actual office address - used for the main visible location + Google Maps.
  address: {
    az: 'Bakı, Nizami rayonu, Şirin Mirzəyev küçəsi, ev 2535, mənzil A15',
    ru: 'Баку, Низаминский р-н, ул. Ширин Мирзоев, дом 2535, кв. A15',
    en: 'Baku, Nizami district, Shirin Mirzayev str. 2535, apt. A15',
  } as Record<Lang, string>,
  // Legal (registered) address - shown alongside the actual address on Contact.
  legalAddress: {
    az: 'Bakı, Xətai rayonu, 8 Noyabr (Nobel) prospekti, ev 23, mənzil 56',
    ru: 'Баку, Хатаинский р-н, проспект 8 Ноября (Нобель), дом 23, кв. 56',
    en: 'Baku, Khatai district, 8 November (Nobel) ave. 23, apt. 56',
  } as Record<Lang, string>,
  // Google Maps query points at the ACTUAL office address.
  mapsQuery: 'Şirin Mirzəyev küçəsi 2535, Nizami rayonu, Bakı, Azərbaycan',
  phone: '+994 00 000 00 00', // TODO: client did not provide a phone - confirm.
  // NOTE: the client PDF wrote "ingo@azbuilding.az", which looks like a typo for
  // "info@azbuilding.az". Keeping the safer "info@" until the client confirms.
  // TODO: confirm whether the email is ingo@azbuilding.az or info@azbuilding.az.
  email: 'info@azbuilding.az',
  social: {
    instagram: 'https://instagram.com/', // TODO
    facebook: 'https://facebook.com/', // TODO
    linkedin: 'https://linkedin.com/', // TODO
  },
}
