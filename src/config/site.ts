export interface TeamMember {
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  bioAr: string;
  bioEn: string;
  specialties: string[];
}

export interface SiteConfig {
  name: {
    ar: string;
    en: string;
    full: string;
  };
  tagline: {
    ar: string;
    en: string;
  };
  character: string;
  primaryMarket: {
    ar: string;
    en: string;
  };
  futureExpansion: {
    ar: string;
    en: string;
  };
  // Contact details: Using clearly marked placeholders / direct fallback channels
  // Never invent phone numbers, fake email addresses or false corporate credentials
  contact: {
    whatsappNumber: string; // e.g. "+967770000000" or placeholder
    whatsappDisplay: string;
    email: string;
    officialWebsiteReference: string;
    natcoWebsite: string;
    location: {
      ar: string;
      en: string;
    };
  };
  social: {
    instagram: string;
    youtube: string;
    linkedin: string;
  };
  team: TeamMember[];
  colors: {
    charcoal: string;
    ivory: string;
    sand: string;
    olive: string;
    muted: string;
  };
  disclosures: {
    proposalNoticeAr: string;
    proposalNoticeEn: string;
    natcoDisclosureAr: string;
    natcoDisclosureEn: string;
    factoryDisclosureAr: string;
    factoryDisclosureEn: string;
    pricingNoticeAr: string;
    pricingNoticeEn: string;
  };
}

export const siteConfig: SiteConfig = {
  name: {
    ar: "دَرْب",
    en: "DARB",
    full: "DARB | دَرْب",
  },
  tagline: {
    ar: "لا نكتفي بأن نحكي قصة شركتك. ننطلق لنعيشها.",
    en: "We Don't Just Tell Your Story. We Go Live It.",
  },
  character: "Cinematic, adventurous, credible, human, premium, and business-focused.",
  primaryMarket: {
    ar: "اليمن (المسارات الميدانية والتضاريس الحيوية)",
    en: "Yemen (Field routes and scenic terrains)",
  },
  futureExpansion: {
    ar: "مناطق وأسواق إقليمية إضافية عند توفر الإمكانيات التشغيلية",
    en: "Additional regional markets when operationally feasible",
  },
  contact: {
    // Configurable official WhatsApp inquiry number:
    // When unset or set to placeholder, the UI directs the inquiry to the structured review/email fallback
    whatsappNumber: "+967777000000", // Representative placeholder for Yemen (+967) - clearly labeled in UI as pending sponsor confirmation
    whatsappDisplay: "+967 (يحدد للتواصل المباشر مع الراعي)",
    email: "inquiry@darbmedia.com", // Representative project inbox
    officialWebsiteReference: "https://www.natcoyemen.com/",
    natcoWebsite: "https://www.natcoyemen.com/",
    location: {
      ar: "صنعاء / عدن — اليمن",
      en: "Sana'a / Aden — Yemen",
    },
  },
  social: {
    instagram: "https://instagram.com/darb.media",
    youtube: "https://youtube.com/@darbmedia",
    linkedin: "https://linkedin.com/company/darb-media",
  },
  team: [
    {
      nameAr: "ضياء عبدالرحمن الحميري",
      nameEn: "Dhiaa Abdulrahman Al-Himyari",
      roleAr: "مصور فوتوغرافي، صانع محتوى وقائد المشروع الإعلامي",
      roleEn: "Photographer, Content Creator & Media Project Lead",
      bioAr: "يتولى الرؤية البصرية، الإخراج الوثائقي الميداني، صياغة السرد القصصي للعلامات التجارية، وضمان جودة الإنتاج الإعلاني والتسجيلي.",
      bioEn: "Leads visual direction, field documentary production, brand storytelling, and high-standard editorial asset creation.",
      specialties: ["التصوير الوثائقي", "الإخراج البصري", "سرد قصص العلامات", "إدارة الإنتاج الميداني"],
    },
    {
      nameAr: "عبدالرحمن علي هباش",
      nameEn: "Abdulrahman Ali Habbash",
      roleAr: "سائق محترف، قائد الرحلات وتخطيط المسارات",
      roleEn: "Professional Driver, Journey Leader & Route Planning",
      bioAr: "مسؤول عن اللوجستيات الميدانية، اختبارات القيادة على الطرق المختلفة، دراسة المسارات الآمنة، وجوانب السلامة التشغيلية للمركبات أثناء الرحلات.",
      bioEn: "Oversees field logistics, vehicle road trials across varied terrains, rigorous route scouting, and expedition safety protocols.",
      specialties: ["القيادة الميدانية المتقدمة", "تخطيط المسارات", "السلامة التشغيلية", "اللوجستيات الاستكشافية"],
    },
  ],
  colors: {
    charcoal: "#101315",
    ivory: "#F5F3EE",
    sand: "#C8B99D",
    olive: "#535B48",
    muted: "#8E9590",
  },
  disclosures: {
    proposalNoticeAr: "تصور إبداعي مقترح — لا تمثل هذه الصفحة إعلانًا عن شراكة معتمدة أو حملة منفذة مسبقًا.",
    proposalNoticeEn: "Proposed Creative Concept — This page does not constitute an announcement of an approved partnership or completed campaign.",
    natcoDisclosureAr: "تصور إبداعي مقترح مقدم لشركة ناتكو للسيارات — جميع العلامات التجارية والمواصفات تعود لمالكيها الرسميين وتخضع للموافقة المسبقة.",
    natcoDisclosureEn: "Proposed creative concept presented for NATCO Automotive — All brand names and specifications belong to their official owners and are subject to prior agreement.",
    factoryDisclosureAr: "تصور إبداعي مقترح مخصص لقطاع الصناعة والمنتجات الاستهلاكية — يهدف لتوضيح فكرة السرد الوثائقي الميداني لخطوط الإنتاج والتوزيع.",
    factoryDisclosureEn: "Proposed creative concept tailored for consumer goods and manufacturing sectors — Designed to illustrate field documentary storytelling from production to consumer.",
    pricingNoticeAr: "لا ننشر أسعاراً ثابتة. تتم مناقشة كافة الشروط المالية وحزم الرعاية بسرية وملاءمة وفق نطاق كل مشروع.",
    pricingNoticeEn: "No fixed prices published. All financial terms and sponsorship packages are discussed privately and tailored to each project scope.",
  },
};
