export type Language = "ar" | "en";

export interface TranslationDictionary {
  nav: {
    home: string;
    howItWorks: string;
    campaigns: string;
    partners: string;
    team: string;
    contact: string;
    discussCta: string;
    languageToggle: string;
  };
  common: {
    proposedConcept: string;
    exploreIdea: string;
    requestProposal: string;
    discussCampaign: string;
    discussWhatsApp: string;
    downloadDeck: string;
    backToCampaigns: string;
    allCampaigns: string;
    objectives: string;
    deliverables: string;
    storyboard: string;
    specifications: string;
    safetyProtocols: string;
    partnerValue: string;
    supportRequests: string;
    pricingNotice: string;
    confidentialNotice: string;
    disclaimer: string;
    step: string;
    readMore: string;
    close: string;
  };
  home: {
    heroEyebrow: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroDesc: string;
    primaryCta: string;
    secondaryCta: string;
    ethosBadge: string;
    ethosTitle: string;
    ethosDesc: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    cinematicTruthTitle: string;
    cinematicTruthDesc: string;
    fieldRigorTitle: string;
    fieldRigorDesc: string;
    businessImpactTitle: string;
    businessImpactDesc: string;
    campaignsSectionTitle: string;
    campaignsSectionSubtitle: string;
    teamSectionTitle: string;
    teamSectionSubtitle: string;
  };
  campaignsDir: {
    heading: string;
    supporting: string;
    filterAll: string;
    filterAutomotive: string;
    filterIndustry: string;
    cardBadge: string;
    viewProposal: string;
  };
  form: {
    title: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    step4Title: string;
    companyName: string;
    industry: string;
    contactName: string;
    jobTitle: string;
    email: string;
    phoneWhatsApp: string;
    campaignSelection: string;
    partnershipModel: string;
    preferredRegions: string;
    campaignPeriod: string;
    objectives: string;
    contentFormats: string;
    vehicleSupport: string;
    fuelSupport: string;
    equipmentSupport: string;
    accommodationSupport: string;
    additionalDetails: string;
    nextStep: string;
    prevStep: string;
    reviewTitle: string;
    reviewDesc: string;
    submitWhatsApp: string;
    submitEmail: string;
    fallbackNotice: string;
    validationError: string;
  };
  footer: {
    rights: string;
    aboutText: string;
    quickLinks: string;
    governingNotice: string;
    yemenFocus: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  ar: {
    nav: {
      home: "الرئيسية",
      howItWorks: "كيف نعمل",
      campaigns: "الحملات المقترحة",
      partners: "برامج الشراكة",
      team: "فريق درب",
      contact: "تواصل معنا",
      discussCta: "ناقش مشروعك معنا",
      languageToggle: "English",
    },
    common: {
      proposedConcept: "تصور إبداعي مقترح",
      exploreIdea: "استكشف فكرة الحملة",
      requestProposal: "اطلب تصورًا مخصصًا لشركتك",
      discussCampaign: "ناقش هذه الحملة مع فريق درب",
      discussWhatsApp: "إرسال استفسار عبر واتساب",
      downloadDeck: "استعراض ملف العرض التحريري",
      backToCampaigns: "العودة إلى دليل الحملات",
      allCampaigns: "كافة الحملات المقترحة",
      objectives: "أهداف الحملة المرتقبة",
      deliverables: "المخرجات ونطاق المواد المقترحة",
      storyboard: "سيناريو ومراحل الرحلة (Storyboard)",
      specifications: "مواصفات الطراز والتقنيات",
      safetyProtocols: "معايير السلامة والتخطيط الميداني",
      partnerValue: "القيمة المضافة للشريك التجاري",
      supportRequests: "الدعم التشغيلي المطلوب من الراعي",
      pricingNotice: "لا ننشر أسعاراً ثابتة. تتم مناقشة التكاليف بشفافية وحسب المتطلبات المحددة.",
      confidentialNotice: "تخضع كافة بنود الرعاية والموازنات التقديرية للاتفاق والمراجعة المباشرة.",
      disclaimer: "إخلاء مسؤولية مهني",
      step: "المرحلة",
      readMore: "قراءة المزيد",
      close: "إغلاق",
    },
    home: {
      heroEyebrow: "إعلام استكشافي وتوثيق ميداني للعلامات التجارية",
      heroHeadline: "لا نكتفي بأن نحكي قصة شركتك. ننطلق لنعيشها.",
      heroSubheadline: "DARB | دَرْب — نوثق التجارب الواقعية ونحول رحلات العمل إلى سينما وثائقية تلامس الجمهور.",
      heroDesc: "مشروع إعلامي واستكشافي يقوده فريق ميداني متخصص يربط بين فن التصوير الوثائقي والقيادة المحترفة على المسارات المتنوعة، لنقدم للشركات والمصانع حضوراً استثنائياً يتجاوز الإعلانات النمطية.",
      primaryCta: "استكشف الحملات المقترحة",
      secondaryCta: "كيف نعمل ميدانياً",
      ethosBadge: "فلسفة درب الميدانية",
      ethosTitle: "لماذا تختلف رحلات درب عن أي إنتاج إعلاني آخر؟",
      ethosDesc: "نحن لا نؤجر استوديوهات مغلقة ولا نصطنع مشاهد مصورة. نأخذ سيارتك أو منتجك أو خط إنتاجك إلى بيئته الحقيقية، ونترك الواقع يثبت جودته أمام أعين المستهلكين.",
      pillarsTitle: "أركان العمل في درب",
      pillarsSubtitle: "تكامل بين الفن البصري، القيادة الميدانية، والوعي التسويقي",
      cinematicTruthTitle: "الصدق السينمائي",
      cinematicTruthDesc: "تصوير سينمائي فائق الدقة بدون مؤثرات خادعة، نبرز جمال الطبيعة وجودة المنتج كما هي في الواقع.",
      fieldRigorTitle: "الانضباط والسلامة الميدانية",
      fieldRigorDesc: "تخطيط مسارات دقيق، قيادة محترفة على الطرق المعبدة والوعرة، والتزام تام بسلامة المركبة والطاقم والمحيط.",
      businessImpactTitle: "الأثر المؤسسي للعلامة",
      businessImpactDesc: "صناعة أصول بصرية ثرية ومقاطع قابلة لإعادة النشر والاستخدام طويل الأمد في خطط الشركة التسويقية.",
      campaignsSectionTitle: "تصورات إبداعية مقترحة",
      campaignsSectionSubtitle: "نماذج لحملات صممت خصيصاً لشركات رائدة في مجالات السيارات والصناعة والاستهلاك",
      teamSectionTitle: "الفريق التأسيسي",
      teamSectionSubtitle: "خبرة متكاملة في صناعة الصورة والتحكم الميداني في الطريق",
    },
    campaignsDir: {
      heading: "كل علامة تجارية لديها قصة. نحن ننطلق لاكتشافها.",
      supporting: "نصمم لكل شركة تجربة ميدانية تناسب طبيعة نشاطها، وتحوّل منتجاتها وخدماتها وقصصها إلى محتوى مرئي متكامل.",
      filterAll: "كافة الحملات",
      filterAutomotive: "قطاع السيارات",
      filterIndustry: "الصناعة والسلع",
      cardBadge: "تصور إبداعي مقترح",
      viewProposal: "استكشف فكرة الحملة",
    },
    form: {
      title: "طلب مناقشة مشروع أو شراكة",
      subtitle: "نصمم لكل شركة مساراً وتصوراً مخصصاً يتناسب مع أولوياتها التسويقية وميزانيتها المتاحة.",
      step1Title: "1. بيانات المنشأة وجهة الاتصال",
      step2Title: "2. نطاق الحملة ونموذج الشراكة",
      step3Title: "3. احتياجات الدعم والمخرجات",
      step4Title: "4. مراجعة الطلب والإرسال المباشر",
      companyName: "اسم المنشأة أو العلامة التجارية *",
      industry: "القطاع التجاري أو الصناعي *",
      contactName: "اسم الشخص المسؤول للتواصل *",
      jobTitle: "المسمى الوظيفي *",
      email: "البريد الإلكتروني للعمل *",
      phoneWhatsApp: "رقم الهاتف أو الواتساب *",
      campaignSelection: "الحملة المقترحة المفضلة",
      partnershipModel: "نموذج الشراكة المرغوب",
      preferredRegions: "المناطق أو المسارات الجغرافية المستهدفة",
      campaignPeriod: "الفترة الزمنية المفضلة للتنفيذ",
      objectives: "أهم أهداف الشركة من الحملة",
      contentFormats: "تنسيقات المحتوى المرغوبة",
      vehicleSupport: "هل يتطلب المشروع توفير مركبة أو أسطول؟",
      fuelSupport: "هل يتضمن المشروع تغطية للوقود أو الشحن؟",
      equipmentSupport: "هل تود توفير معدات أو منتجات لاختبارها؟",
      accommodationSupport: "هل تقدم الشركة دعماً لوجستياً أو استضافة؟",
      additionalDetails: "أي تفاصيل أو متطلبات خاصة ترغب في إضافتها",
      nextStep: "المتابعة إلى الخطوة التالية",
      prevStep: "الرجوع للخطوة السابقة",
      reviewTitle: "ملخص طلب الشراكة والمراجعة",
      reviewDesc: "يرجى مراجعة بياناتك قبل الإرسال. نظراً لعدم استخدام قاعدة بيانات وسيطة، يمكنك إرسال الطلب فوراً عبر واتساب المباشر أو توليد بريد إلكتروني منسق.",
      submitWhatsApp: "إرسال البيانات عبر واتساب الرسمي",
      submitEmail: "إرسال البيانات عبر البريد الإلكتروني",
      fallbackNotice: "نضمن حفظ سرية كافة المعلومات ومناقشتها باحترافية تامة مع ممثل الشركة المعتمد.",
      validationError: "يرجى استكمال الحقول المطلوبة للمتابعة.",
    },
    footer: {
      rights: "جميع الحقوق محفوظة © مشروع دَرْب (DARB) 2026. إنتاج وإشراف ضياء الحميري وعبدالرحمن هباش.",
      aboutText: "دَرْب مشروع إعلامي وثائقي وميداني في اليمن ينطلق في رحلات استكشافية توثق العلامات التجارية والسيارات والصناعات من قلب التجربة الواقعية.",
      quickLinks: "روابط سريعة",
      governingNotice: "جميع المقترحات المنشورة في الموقع هي تصورات إبداعية مقترحة ولا تمثل إعلاناً عن عقود ملزمة أو حملات منفذة دون اتفاق مسبق.",
      yemenFocus: "السوق الرئيسي: اليمن | التوسع الإقليمي: وفق الجاهزية والخطط التشغيلية.",
    },
  },
  en: {
    nav: {
      home: "Home",
      howItWorks: "How We Work",
      campaigns: "Proposed Campaigns",
      partners: "Partnership Programs",
      team: "DARB Team",
      contact: "Contact Us",
      discussCta: "Discuss Your Project",
      languageToggle: "العربية",
    },
    common: {
      proposedConcept: "Proposed Creative Concept",
      exploreIdea: "Explore Campaign Concept",
      requestProposal: "Request Tailored Proposal",
      discussCampaign: "Discuss This Campaign With DARB",
      discussWhatsApp: "Direct WhatsApp Inquiry",
      downloadDeck: "Review Editorial Pitch Deck",
      backToCampaigns: "Back to Campaign Directory",
      allCampaigns: "All Proposed Campaigns",
      objectives: "Prospective Campaign Objectives",
      deliverables: "Deliverables & Asset Scope",
      storyboard: "Journey Storyboard & Stages",
      specifications: "Model Specifications & Engineering",
      safetyProtocols: "Safety & Operational Planning",
      partnerValue: "Delivered Partner Value",
      supportRequests: "Requested Operational Support",
      pricingNotice: "No fixed prices published. Financial terms are discussed privately based on custom project parameters.",
      confidentialNotice: "All sponsorship commitments and estimates are subject to formal discussion and prior approval.",
      disclaimer: "Professional Disclaimer",
      step: "Stage",
      readMore: "Read More",
      close: "Close",
    },
    home: {
      heroEyebrow: "Field Expedition Media & Brand Documentary Journeys",
      heroHeadline: "We Don't Just Tell Your Story. We Go Live It.",
      heroSubheadline: "DARB | دَرْب — Documenting real-world performance and turning brand journeys into compelling cinema.",
      heroDesc: "A dedicated field media expedition led by documentary photographers and professional drivers, linking cinematic craft with rugged real-world travel to give corporate brands authentic visibility beyond conventional advertising.",
      primaryCta: "Explore Proposed Campaigns",
      secondaryCta: "Our Field Methodology",
      ethosBadge: "The DARB Field Ethos",
      ethosTitle: "Why DARB Expeditions Are Fundamentally Different",
      ethosDesc: "We don't rent artificial studio lots or stage synthetic commercials. We take your vehicle, factory story, or consumer product onto verified field routes and let the real world prove its quality before your audience.",
      pillarsTitle: "The Core Pillars of DARB",
      pillarsSubtitle: "A harmony of visual cinema, driving mastery, and commercial strategy",
      cinematicTruthTitle: "Cinematic Truth",
      cinematicTruthDesc: "High-grade 4K camera craft without deceptive visual trickery, illuminating natural landscape beauty and product durability exactly as they exist.",
      fieldRigorTitle: "Field Rigor & Operational Safety",
      fieldRigorDesc: "Rigorous route scouting, precision highway and off-pavement driving, and uncompromised adherence to safety and civil standards.",
      businessImpactTitle: "Commercial & PR Impact",
      businessImpactDesc: "Engineering an enduring corporate visual library and short-form assets that power sponsor marketing campaigns for months to come.",
      campaignsSectionTitle: "Proposed Creative Concepts",
      campaignsSectionSubtitle: "Bespoke campaign proposals architected for automotive and consumer manufacturing leaders",
      teamSectionTitle: "The Founding Team",
      teamSectionSubtitle: "Proven synergy between cinematic visual direction and expedition driving mastery",
    },
    campaignsDir: {
      heading: "Every brand has an untold story. We venture out to live it.",
      supporting: "We architect custom field expeditions tailored to your company's operational profile, turning machinery, products, and services into unified corporate cinema.",
      filterAll: "All Campaigns",
      filterAutomotive: "Automotive Sector",
      filterIndustry: "Manufacturing & FMCG",
      cardBadge: "Proposed Concept",
      viewProposal: "Explore Campaign Concept",
    },
    form: {
      title: "Initiate a Project or Partnership Inquiry",
      subtitle: "We tailor every expedition route and asset package to align with your corporate marketing strategy and production budget.",
      step1Title: "1. Company & Contact Information",
      step2Title: "2. Campaign Scope & Partnership Model",
      step3Title: "3. Support Requirements & Deliverables",
      step4Title: "4. Review & Direct Transmission",
      companyName: "Company / Brand Name *",
      industry: "Industry or Sector *",
      contactName: "Primary Contact Person *",
      jobTitle: "Designated Job Title *",
      email: "Corporate Business Email *",
      phoneWhatsApp: "Phone / WhatsApp Number *",
      campaignSelection: "Preferred Campaign Track",
      partnershipModel: "Preferred Sponsorship Model",
      preferredRegions: "Target Geographic Corridors / Provinces",
      campaignPeriod: "Target Production Window",
      objectives: "Core Corporate Objectives",
      contentFormats: "Desired Media Formats",
      vehicleSupport: "Does the project require vehicle or fleet provision?",
      fuelSupport: "Does the package encompass fuel or charging vouchers?",
      equipmentSupport: "Will you provide specialized equipment/products for field testing?",
      accommodationSupport: "Can the company assist with regional accommodation or facility access?",
      additionalDetails: "Additional specific requirements or logistical context",
      nextStep: "Proceed to Next Step",
      prevStep: "Return to Previous Step",
      reviewTitle: "Inquiry Review & Submission",
      reviewDesc: "Please review your entries. To preserve data integrity without intermediary databases, submit directly via verified WhatsApp or generate a pre-formatted corporate email.",
      submitWhatsApp: "Transmit via Official WhatsApp",
      submitEmail: "Transmit via Corporate Email",
      fallbackNotice: "All submissions are handled with strict commercial confidentiality and direct senior team review.",
      validationError: "Please complete all mandatory marked fields to continue.",
    },
    footer: {
      rights: "All Rights Reserved © DARB Media Project 2026. Created and directed by Dhiaa Al-Himyari and Abdulrahman Habbash.",
      aboutText: "DARB is a field-based documentary and automotive journey media project in Yemen, producing cinematic corporate narratives directly on location.",
      quickLinks: "Navigation Links",
      governingNotice: "All campaign concepts published on this platform are creative proposals and do not represent executed contracts or authorized affiliations without formal written agreements.",
      yemenFocus: "Primary Market: Yemen | Regional Expansion: Subject to operational staging.",
    },
  },
};
