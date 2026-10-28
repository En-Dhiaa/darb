"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageContext";
import {
  Compass,
  MapPin,
  Camera,
  Film,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  FileText,
  Sliders,
  Eye,
} from "lucide-react";

export default function HowItWorksPage() {
  const { lang, t, isRtl } = useLanguage();

  const steps = [
    {
      num: "01",
      titleAr: "استكشاف المسار والتخطيط اللوجستي",
      titleEn: "Route Reconnaissance & Logistics",
      subtitleAr: "دراسة التضاريس، السلامة، والتصاريح",
      subtitleEn: "Terrain Scouting, Safety & Clearances",
      descAr: "يقوم قائد الرحلات بدراسة تفصيلية للمسارات المستهدفة، وحالة الطرق، والظروف الجوية، وضمان سلامة المركبة والطاقم، واستخراج التصاريح الإدارية اللازمة قبل بدء التصوير.",
      descEn: "Our journey lead conducts thorough scouting of planned corridors, evaluating road surfaces, weather patterns, and safety measures while securing all required administrative approvals.",
      icon: MapPin,
    },
    {
      num: "02",
      titleAr: "مواءمة أهداف العلامة والرسالة التحريرية",
      titleEn: "Brand Alignment & Editorial Brief",
      subtitleAr: "تحديد الطراز، الخصائص، ونقاط القوة",
      subtitleEn: "Vehicle Trims, Key Features & Narrative Core",
      descAr: "جلسة عمل تفصيلية مع مسؤولي الشركة لتحديد الرسائل التسويقية الرئيسية، والمواصفات التي يرغبون في إبرازها، وتفاصيل خدمة ما بعد البيع التي تهم المستهلكين.",
      descEn: "A structured consultation with company leadership to pinpoint commercial messaging, verified features to showcase, and customer assurance points.",
      icon: Sliders,
    },
    {
      num: "03",
      titleAr: "الإنتاج الميداني والتوثيق السينمائي",
      titleEn: "Field Expedition & Cinema Production",
      subtitleAr: "كاميرات 4K، قيادة منضبطة، وسرد حي",
      subtitleEn: "4K Master Grade, Disciplined Driving & Live Action",
      descAr: "الانطلاق على المسار المحدد بمعدات سينمائية عالية المستوى، مع الالتزام التام بقوانين السير والسلامة، وتوثيق أداء المركبة أو رحلة المنتج في ظروف طبيعية واقعية.",
      descEn: "Deployment along scouted routes using cinema-grade gear under strict driving discipline, documenting vehicle dynamics and product journeys authentically.",
      icon: Camera,
    },
    {
      num: "04",
      titleAr: "المونتاج والتلوين وتسليم الأصول",
      titleEn: "Master Post-Production & Asset Handover",
      subtitleAr: "فيلم رئيسي، مقاطع قصيرة، وألبوم صور",
      subtitleEn: "Master Cut, Short-Form Reels & Photo Archive",
      descAr: "إنجاز عمليات المونتاج الاحترافي، هندسة الصوت، وتدرج الألوان السينمائي، وتسليم مكتبة الأصول كاملة مع تقرير أداء رقمي شفاف بعد نشر المواد.",
      descEn: "Precision editing, custom sound design, cinematic color grading, and delivery of all multi-format master assets alongside transparent digital reach reporting.",
      icon: Film,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-sand/30 shadow-glow">
          <Compass className="w-4 h-4 text-sand" />
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            {lang === "ar" ? "منهجية العمل الميداني" : "EXPEDITION METHODOLOGY"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory leading-tight">
          {lang === "ar"
            ? "كيف نصنع قصة ميدانية تلهم الجمهور وتبني الثقة؟"
            : "How We Architect Authentic Field Stories That Inspire"}
        </h1>

        <p className="text-base sm:text-lg text-ivory-dark max-w-3xl mx-auto leading-relaxed">
          {lang === "ar"
            ? "نجمع بين الاحتراف التقني في صناعة الصورة والخبرة الميدانية العميقة في التعامل مع الطرق والتضاريس، لنضمن إنتاجاً سينمائياً آمناً ومؤثراً."
            : "A synthesis of high-end camera artistry and seasoned expedition driving across challenging terrains, ensuring safe, cinematic corporate storytelling."}
        </p>
      </div>

      {/* 4 Steps Detailed Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {steps.map((step) => {
          const IconComp = step.icon;
          return (
            <div
              key={step.num}
              className="bg-charcoal-850/80 border border-sand/20 rounded-2xl p-8 space-y-6 hover:border-sand/40 hover:shadow-glow transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-sand/30 flex items-center justify-center text-sand">
                    <IconComp className="w-6 h-6 text-sand" />
                  </div>
                  <span className="text-2xl font-mono font-extrabold text-sand/60">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-sand uppercase tracking-wider block">
                    {lang === "ar" ? step.subtitleAr : step.subtitleEn}
                  </span>
                  <h3 className="text-xl font-bold text-ivory">
                    {lang === "ar" ? step.titleAr : step.titleEn}
                  </h3>
                </div>

                <p className="text-sm text-ivory-dark/90 leading-relaxed">
                  {lang === "ar" ? step.descAr : step.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-700/60 flex items-center gap-2 text-xs text-muted">
                <ShieldCheck className="w-4 h-4 text-sand" />
                <span>{lang === "ar" ? "معايير سلامة وجودة معتمدة" : "Standardized Safety Protocol"}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Corporate Callout */}
      <div className="bg-charcoal-850 border border-sand/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl text-start">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            {lang === "ar" ? "جلسة استكشافية أولية" : "PRELIMINARY DISCOVERY"}
          </span>
          <h3 className="text-2xl font-bold text-ivory">
            {lang === "ar"
              ? "هل تود الاطلاع على مسودة خطة مخصصة لقطاعك؟"
              : "Ready to inspect a bespoke operational brief for your company?"}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-dark leading-relaxed">
            {lang === "ar"
              ? "فريق درب جاهز للتنسيق المباشر معكم لعرض أفكار المسارات المناسبة واحتياجات الإنتاج ومناقشة أولوياتكم بكل مرونة."
              : "The DARB leadership team is available to coordinate route concepts, asset requirements, and timelines suited to your agenda."}
          </p>
        </div>

        <Link
          href="/contact"
          className="whitespace-nowrap px-8 py-4 rounded-xl bg-sand text-charcoal-950 font-bold text-sm hover:bg-sand-light transition-all shadow-card flex-shrink-0"
        >
          {t.nav.discussCta}
        </Link>
      </div>
    </div>
  );
}

