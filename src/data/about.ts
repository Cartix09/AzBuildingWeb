import type { Lang } from './translations'

type Loc = Record<Lang, string>

export const aboutContent = {
  eyebrow: { az: 'HAQQIMIZDA', ru: 'О КОМПАНИИ', en: 'ABOUT US' } as Loc,
  title: {
    az: '2009-cu ildən etibarən tikintidə etibarlı tərəfdaş',
    ru: 'Надёжный партнёр в строительстве с 2009 года',
    en: 'A reliable construction partner since 2009',
  } as Loc,
  // Full Haqqımızda body — paragraphs separated by \n\n and rendered as
  // individual <p> blocks on the About page. Brand spelling is AZBUILDING MMC.
  intro: {
    az: 'AZBUILDING MMC 2009-cu ildən bu yana mülki, sənaye və infrastruktur tikintisi sahəsində peşəkar fəaliyyət göstərir. Fəaliyyətimiz boyunca aparıcı tərəfdaşlarla sıx əməkdaşlıq quraraq iri miqyaslı mülki tikinti layihələrinin icrasında iştirak edərək Azərbaycan, Qazaxıstan, Gürcüstan və Ukraynada həyata keçirilmiş avtomobil yolu layihələrində mühəndislik və tikinti-quraşdırma xidmətləri təqdim etmişik.\n\nFəaliyyət istiqamətlərimiz genişdir: infrastruktur layihələrində subpodratçı, mülki və sənaye obyektlərinin tikintisində podratçı, fərdi yaşayış evlərinin tikintisində isə investor və icraçı qismində çıxış edirik. Bu çoxşaxəli təcrübə bizə hər layihəyə fərqli perspektivdən yanaşmaq və müştərilərimizə daha geniş dəyər təqdim etmək imkanı verir.\n\nFəaliyyətimizin əsasında «Düşüncədən konstruksiyaya» prinsipi dayanır - hər bir ideyanı dəqiq, dayanıqlı və səmərəli mühəndis həllinə çeviririk. Bu yanaşma bizi yalnız icraçı deyil, layihənin əvvəlindən sonuna qədər həqiqi tərəfdaşa çevirir.\n\nBu gün AZBUILDING MMC mülki, sənaye və infrastruktur tikintisi sahəsində etibarlı, peşəkar və çoxprofilli tərəfdaş kimi inamla irəliləməyə davam edir.',
    ru: 'AZBUILDING MMC с 2009 года профессионально работает в сфере гражданского, промышленного и инфраструктурного строительства. На протяжении своей деятельности мы тесно сотрудничали с ведущими партнёрами, участвовали в реализации крупных проектов гражданского строительства и предоставляли инженерные и строительно-монтажные услуги в дорожных проектах, реализованных в Азербайджане, Казахстане, Грузии и Украине.\n\nНаправления нашей деятельности широки: мы выступаем субподрядчиком в инфраструктурных проектах, подрядчиком в строительстве гражданских и промышленных объектов, а в строительстве индивидуальных жилых домов — инвестором и исполнителем. Этот многопрофильный опыт позволяет нам подходить к каждому проекту с разных сторон и предлагать клиентам более широкую ценность.\n\nВ основе нашей работы лежит принцип «от идеи до конструкции» — каждую идею мы превращаем в точное, устойчивое и эффективное инженерное решение. Такой подход делает нас не просто исполнителем, а настоящим партнёром от начала до конца проекта.\n\nСегодня AZBUILDING MMC уверенно продолжает развиваться как надёжный, профессиональный и многопрофильный партнёр в сфере гражданского, промышленного и инфраструктурного строительства.',
    en: 'AZBUILDING MMC has worked professionally in civil, industrial and infrastructure construction since 2009. Throughout our activity we have worked closely with leading partners, taken part in delivering large-scale civil construction projects, and provided engineering and construction-installation services on road projects carried out in Azerbaijan, Kazakhstan, Georgia and Ukraine.\n\nOur lines of work are broad: we act as a subcontractor on infrastructure projects, a contractor in the construction of civil and industrial facilities, and an investor and executor in the construction of individual residential houses. This multi-disciplinary experience lets us approach every project from a different perspective and offer our clients wider value.\n\nOur work is built on the principle \u201cfrom concept to construction\u201d \u2014 we turn every idea into a precise, durable and efficient engineering solution. This approach makes us not just an executor but a true partner from the beginning to the end of a project.\n\nToday AZBUILDING MMC confidently continues to move forward as a reliable, professional and multi-disciplinary partner in civil, industrial and infrastructure construction.',
  } as Loc,
  mission: {
    title: { az: 'Missiya', ru: 'Миссия', en: 'Mission' } as Loc,
    body: {
      az: 'Mülki-sənaye və infrastruktur layihələrini etibarlı tikinti icrası, mühəndislik dəstəyi, vaxtında təhvil və texniki dəqiqliklə dəstəkləmək.',
      ru: 'Поддерживать гражданско-промышленные и инфраструктурные проекты надёжным строительным исполнением, инженерной поддержкой, своевременной сдачей и технической точностью.',
      en: 'To support civil-industrial and infrastructure projects with reliable construction execution, engineering support, timely delivery and technical precision.',
    } as Loc,
  },
  vision: {
    title: { az: 'Vizyon', ru: 'Видение', en: 'Vision' } as Loc,
    body: {
      az: 'Azərbaycanın tikinti və infrastruktur sektorunda etibarlılıq, texniki dəqiqlik və praktiki layihə təcrübəsi ilə tanınan, etibarlı çoxprofilli icra tərəfdaşına çevrilmək.',
      ru: 'Стать надёжным многопрофильным исполнительным партнёром в строительном и инфраструктурном секторе Азербайджана, известным надёжностью, технической точностью и практическим проектным опытом.',
      en: 'To become a trusted multi-profile execution partner in Azerbaijan’s construction and infrastructure sector, known for reliability, technical accuracy and practical project experience.',
    } as Loc,
  },
  principles: [
    {
      title: { az: 'Etibarlılıq', ru: 'Надёжность', en: 'Reliability' } as Loc,
      body: {
        az: 'Tərəfdaşların etibar etdiyi sabit və məsuliyyətli icra.',
        ru: 'Стабильное и ответственное исполнение, которому доверяют партнёры.',
        en: 'Stable, responsible execution that partners rely on.',
      } as Loc,
    },
    {
      title: { az: 'Vaxtında icra', ru: 'Своевременное исполнение', en: 'Timely execution' } as Loc,
      body: {
        az: 'Qrafikə və öhdəliklərə hörmət.',
        ru: 'Уважение к графику и обязательствам.',
        en: 'Respect for schedule and commitments.',
      } as Loc,
    },
    {
      title: { az: 'Texniki dəqiqlik', ru: 'Техническая точность', en: 'Technical precision' } as Loc,
      body: {
        az: 'Mühəndis məntiqinə əsaslanan dəqiq həllər.',
        ru: 'Точные решения, основанные на инженерной логике.',
        en: 'Accurate solutions grounded in engineering logic.',
      } as Loc,
    },
    {
      title: { az: 'Mühəndislik dəstəyi', ru: 'Инженерная поддержка', en: 'Engineering support' } as Loc,
      body: {
        az: 'Layihənin hər mərhələsində texniki dəstək.',
        ru: 'Техническая поддержка на каждом этапе проекта.',
        en: 'Technical support at every project stage.',
      } as Loc,
    },
    {
      title: { az: 'Məsuliyyətli podratçılıq', ru: 'Ответственное подрядничество', en: 'Responsible contracting' } as Loc,
      body: {
        az: 'Subpodratçı və podratçı kimi şəffaf və məsuliyyətli iştirak.',
        ru: 'Прозрачное и ответственное участие в роли субподрядчика и подрядчика.',
        en: 'Transparent, responsible participation as subcontractor and contractor.',
      } as Loc,
    },
    {
      title: { az: 'Çoxprofilli təcrübə', ru: 'Многопрофильный опыт', en: 'Multi-profile experience' } as Loc,
      body: {
        az: 'Mülki, sənaye və infrastruktur tikintisində geniş təcrübə.',
        ru: 'Широкий опыт в гражданском, промышленном и инфраструктурном строительстве.',
        en: 'Broad experience across civil, industrial and infrastructure construction.',
      } as Loc,
    },
  ],
  certificates: {
    title: { az: 'Lisenziya və Sertifikatlar', ru: 'Лицензия и сертификаты', en: 'License & Certificates' } as Loc,
    // Official license document lives at /public/docs/license.pdf.
    // Do NOT invent a license number or issue date - link the document instead.
    file: '/docs/license.pdf',
    note: {
      az: 'Tikinti-quraşdırma işləri üzrə lisenziya sənədi əlavə olunmuşdur.',
      ru: 'Документ лицензии на строительно-монтажные работы доступен.',
      en: 'Construction-installation works license document is available.',
    } as Loc,
  },
}
