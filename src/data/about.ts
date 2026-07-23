import type { Lang } from './translations'

type Loc = Record<Lang, string>

export const aboutContent = {
  eyebrow: { az: 'HAQQIMIZDA', ru: 'О КОМПАНИИ', en: 'ABOUT US' } as Loc,
  title: {
    az: 'Mülki, sənaye və infrastruktur tikintisində 2009-cu ildən',
    ru: 'В гражданско-промышленном и инфраструктурном строительстве с 2009 года.',
    en: 'In civil-industrial and infrastructure construction since 2009.',
  } as Loc,
  intro: {
    az: 'AZBUILDING MMC 2009-cu ildən etibarən mülki, sənaye və infrastruktur tikintisi sahəsində peşəkar fəaliyyət göstərir. Şirkət fəaliyyəti boyunca aparıcı tərəfdaşlarla əməkdaşlıq edərək iri miqyaslı mülki tikinti layihələrinin, həmçinin Azərbaycan, Qazaxıstan, Gürcüstan və Ukraynada həyata keçirilmiş avtomobil yolu və digər infrastruktur layihələrinin icrasında tikinti və mühəndislik xidmətləri təqdim etmişdir. Fəaliyyət istiqamətlərimiz çərçivəsində AZBUILDING infrastruktur layihələrində subpodratçı, mülki və sənaye obyektlərinin tikintisində baş podratçı və podratçı, fərdi yaşayış evlərinin tikintisində isə investor və icraçı qismində çıxış etmişdir. Şirkətimizin fəaliyyət fəlsəfəsi «Düşüncədən konstruksiyaya» prinsipi üzərində qurulub – hər layihəni ideyadan dəqiq, dayanıqlı və səmərəli mühəndis həllinə çeviririk. Bu gün AZBUILDING MMC mülki, sənaye və infrastruktur tikintisi sahəsində etibarlı, peşəkar və çoxprofilli tərəfdaş kimi fəaliyyətini uğurla davam etdirir.',
    ru: 'AZBUILDING MMC с 2009 года профессионально работает в сфере гражданского, промышленного и инфраструктурного строительства. На протяжении своей деятельности компания в сотрудничестве с ведущими партнёрами предоставляла строительные и инженерные услуги при реализации крупных проектов гражданского строительства, а также автомобильных дорог и других инфраструктурных проектов в Азербайджане, Казахстане, Грузии и Украине. В рамках своих направлений AZBUILDING выступала субподрядчиком в инфраструктурных проектах, генподрядчиком и подрядчиком в строительстве гражданских и промышленных объектов, а в строительстве индивидуальных жилых домов — инвестором и исполнителем. Философия компании построена на принципе «от идеи до конструкции» — каждый проект мы превращаем в точное, устойчивое и эффективное инженерное решение. Сегодня AZBUILDING MMC успешно продолжает работу как надёжный, профессиональный и многопрофильный партнёр в гражданском, промышленном и инфраструктурном строительстве.',
    en: 'AZBUILDING MMC has worked professionally in civil, industrial and infrastructure construction since 2009. Throughout its activity, the company — together with leading partners — has provided construction and engineering services in the delivery of large-scale civil construction projects, as well as road and other infrastructure projects carried out in Azerbaijan, Kazakhstan, Georgia and Ukraine. Within its lines of work, AZBUILDING has acted as a subcontractor on infrastructure projects, as a main contractor and contractor in civil and industrial construction, and as an investor and executor in the construction of individual residential houses. The company’s philosophy is built on the principle “from concept to construction” — turning every project into a precise, durable and efficient engineering solution. Today AZBUILDING MMC successfully continues its work as a reliable, professional and multi-profile partner in civil, industrial and infrastructure construction.',
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
