import type { Lang } from './translations'

type Loc = Record<Lang, string>

export const aboutContent = {
  eyebrow: { az: 'HAQQIMIZDA', ru: 'О КОМПАНИИ', en: 'ABOUT US' } as Loc,
  title: {
    az: 'Mülki-sənaye və infrastruktur tikintisində 2009-cu ildən.',
    ru: 'В гражданско-промышленном и инфраструктурном строительстве с 2009 года.',
    en: 'In civil-industrial and infrastructure construction since 2009.',
  } as Loc,
  intro: {
    az: 'AZBİLDİNQ MMC 2009-cu ildən mülki-sənaye və infrastruktur tikinti sektorunda fəaliyyət göstərir. Şirkət bu dövr ərzində aparıcı tərəfdaşlarla birgə iri miqyaslı mülki tikinti, eləcə də Azərbaycan, Gürcüstan və Ukraynada avtomobil yolu tikintisi layihələrində tikinti və mühəndislik dəstəyi xidmətləri göstərmişdir. Azbildinq infrastruktur layihələrdə subpodratçı, mülki və sənaye tikintilərində podratçı kimi, o cümlədən fərdi yaşayış evlərinin tikintisində sərmayədar kimi çıxış etmişdir. Şirkətin yanaşması etibarlılıq, vaxtında icra və texniki dəqiqlik prinsiplərinə əsaslanır. AZBUILDING özünü tikinti və infrastruktur sahəsində təcrübəli, çoxprofilli icra tərəfdaşı kimi təqdim edir.',
    ru: 'AZBİLDİNQ MMC работает в сфере гражданско-промышленного и инфраструктурного строительства с 2009 года. За этот период компания совместно с ведущими партнёрами оказывала строительные и инженерные услуги в крупных проектах гражданского строительства, а также в проектах строительства автомобильных дорог в Азербайджане, Грузии и Украине. AZBİLDİNQ участвовала в инфраструктурных проектах в качестве субподрядчика, в гражданском и промышленном строительстве в качестве подрядчика, а также в строительстве индивидуальных жилых домов как инвестор/участник. Подход компании основан на надёжности, своевременном исполнении и технической точности. AZBUILDING позиционирует себя как опытный многопрофильный исполнительный партнёр в сфере строительства и инфраструктуры.',
    en: 'AZBİLDİNQ MMC has operated in the civil-industrial and infrastructure construction sector since 2009. During this period, the company has provided construction and engineering support services together with leading partners in large-scale civil construction works, as well as road construction projects in Azerbaijan, Georgia and Ukraine. AZBİLDİNQ has participated in infrastructure projects as a subcontractor, in civil and industrial construction as a contractor, and in individual residential construction as an investor/participant. The company’s approach is based on reliability, timely execution and technical precision. AZBUILDING presents itself as an experienced, multi-profile execution partner in construction and infrastructure.',
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
