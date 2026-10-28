"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageContext";
import { siteConfig } from "@/config/site";
import { partnershipModels, pricingFactors } from "@/config/partners";
import {
  Handshake,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  MapPin,
  Navigation,
  Layers,
  Video,
  ShieldAlert,
  Briefcase,
  CheckCircle2,
  FileText,
  DollarSign,
  LucideIcon,
} from "lucide-react";

const factorIcons: Record<string, LucideIcon> = {
  Clock,
  MapPin,
  Navigation,
  Layers,
  Video,
  ShieldCheck,
  Briefcase,
};

export default function PartnersPage() {
  const { lang, t, isRtl } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "journey" | "role" | "in-kind">("all");

  const filteredModels = partnershipModels.filter((m) => {
    if (activeCategory === "all") return true;
    return m.category === activeCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* 1. Header & Financial Privacy Policy */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-sand/30 shadow-glow">
          <Handshake className="w-4 h-4 text-sand" />
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            {lang === "ar" ? "برامج الشراكة ونماذج الرعاية" : "PARTNERSHIP MODELS & SPONSORSHIP"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory leading-tight">
          {lang === "ar"
            ? "شراكات استراتيجية تبني الحضور وتوثق الإنجاز"
            : "Strategic Alliances Engineering Lasting Brand Authority"}
        </h1>

        <p className="text-base sm:text-lg text-ivory-dark max-w-3xl mx-auto leading-relaxed">
          {lang === "ar"
            ? "نقدم نماذج رعاية مرنة تتيح لمؤسستكم أن تكون جزءاً أصيلاً من رحلاتنا الاستكشافية، سواء كرعاة رئيسيين، شركاء تنقل، أو داعمين تشغيليين."
            : "Flexible sponsorship frameworks integrating your enterprise into our expeditions—as title sponsors, mobility partners, or operational collaborators."}
        </p>

        {/* Explicit Pricing Policy Disclosure */}
        <div className="bg-charcoal-850/80 border border-sand/25 rounded-xl p-4 sm:p-5 max-w-2xl mx-auto text-start flex items-start gap-3.5 shadow-card">
          <ShieldAlert className="w-5 h-5 text-sand flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-ivory-dark space-y-1">
            <span className="font-bold text-sand block">
              {lang === "ar" ? "سياسة الخصوصية المالية:" : "Financial Privacy Policy:"}
            </span>
            <p className="leading-relaxed">
              {lang === "ar"
                ? "لا ننشر أسعاراً ثابتة على الموقع. تحدد الموازنة التقديرية بناءً على المتطلبات الفنية واللوجستية الدقيقة لكل مشروع ومستوى التسهيلات العينية المقدمة."
                : "No fixed pricing is published. Financial quotes are custom-tailored in private consultation based on exact route parameters, logistics, and in-kind provisions."}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Variable Factors Influencing Package Scope */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            {lang === "ar" ? "معايير تصميم الحزم" : "PACKAGE VARIABLES"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory">
            {lang === "ar"
              ? "العوامل التي تحدد نطاق وتكلفة كل مشروع"
              : "Key Factors Influencing Expedition Budgets"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingFactors.map((factor, idx) => {
            const IconComp = factorIcons[factor.iconName] || Layers;
            return (
              <div
                key={idx}
                className="bg-charcoal-850/60 border border-sand/15 rounded-xl p-6 space-y-3 hover:border-sand/35 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-charcoal-900 border border-sand/20 flex items-center justify-center text-sand">
                  <IconComp className="w-4 h-4 text-sand" />
                </div>
                <h4 className="text-base font-bold text-ivory">
                  {lang === "ar" ? factor.titleAr : factor.titleEn}
                </h4>
                <p className="text-xs text-ivory-dark/80 leading-relaxed">
                  {lang === "ar" ? factor.descAr : factor.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Filterable Partnership Models Grid */}
      <section className="space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-charcoal-700/60 pb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-ivory">
              {lang === "ar" ? "نماذج وبرامج الشراكة المتاحة" : "Available Partnership Frameworks"}
            </h2>
            <p className="text-xs text-muted">
              {lang === "ar"
                ? "اختر النموذج الأنسب لطبيعة شركتك وأهدافك التسويقية"
                : "Select the structure best aligned with your brand priorities"}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 bg-charcoal-850 p-1 rounded-lg border border-sand/15 self-start sm:self-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                activeCategory === "all"
                  ? "bg-sand text-charcoal-950"
                  : "text-muted hover:text-ivory"
              }`}
            >
              {lang === "ar" ? "الكل" : "All"}
            </button>
            <button
              onClick={() => setActiveCategory("journey")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                activeCategory === "journey"
                  ? "bg-sand text-charcoal-950"
                  : "text-muted hover:text-ivory"
              }`}
            >
              {lang === "ar" ? "مسارات الرحلات" : "Journeys"}
            </button>
            <button
              onClick={() => setActiveCategory("role")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                activeCategory === "role"
                  ? "bg-sand text-charcoal-950"
                  : "text-muted hover:text-ivory"
              }`}
            >
              {lang === "ar" ? "مستويات الرعاية" : "Tiers"}
            </button>
            <button
              onClick={() => setActiveCategory("in-kind")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                activeCategory === "in-kind"
                  ? "bg-sand text-charcoal-950"
                  : "text-muted hover:text-ivory"
              }`}
            >
              {lang === "ar" ? "الدعم العيني" : "In-Kind"}
            </button>
          </div>
        </div>

        {/* Models Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="bg-charcoal-850/80 border border-sand/20 rounded-2xl p-7 flex flex-col justify-between hover:border-sand/40 hover:shadow-glow transition-all duration-300 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-sand uppercase bg-charcoal-900 px-2.5 py-1 rounded border border-sand/20">
                    {model.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-muted-light font-semibold">
                    {lang === "ar" ? model.badgeAr : model.badgeEn}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-ivory">
                  {lang === "ar" ? model.titleAr : model.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-ivory-dark/90 leading-relaxed">
                  {lang === "ar" ? model.descAr : model.descEn}
                </p>

                <div className="pt-2 text-xs text-sand/90">
                  <span className="font-semibold">{lang === "ar" ? "مثالي لـ: " : "Ideal for: "}</span>
                  <span>{lang === "ar" ? model.idealForAr : model.idealForEn}</span>
                </div>

                <div className="pt-3 border-t border-charcoal-700/60 space-y-2">
                  <span className="text-[11px] font-mono text-muted uppercase block">
                    {lang === "ar" ? "أبرز مميزات النموذج:" : "Key Elements:"}
                  </span>
                  <ul className="space-y-1.5 text-xs text-ivory-dark">
                    {(lang === "ar" ? model.keyAspectsAr : model.keyAspectsEn).map((aspect, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sand flex-shrink-0" />
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal-700/60">
                <Link
                  href={`/contact?model=${model.id}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-charcoal-800 hover:bg-sand hover:text-charcoal-950 text-sand border border-sand/30 font-bold text-xs transition-all shadow-sm"
                >
                  <span>{t.common.requestProposal}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="bg-charcoal-850 border border-sand/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h3 className="text-2xl sm:text-4xl font-extrabold text-ivory">
          {lang === "ar" ? "اطلب تصورًا مخصصًا لشركتك" : "Request a Tailored Corporate Brief"}
        </h3>
        <p className="text-sm sm:text-base text-ivory-dark max-w-2xl mx-auto leading-relaxed">
          {lang === "ar"
            ? "نحن جاهزون للاجتماع بكم، ومناقشة تفاصيل المسار المقترح والمخرجات التي تخدم استراتيجيتكم التسويقية بأعلى مستويات الاحترافية."
            : "We are ready to convene with your executive team, discussing customized route staging and asset deliverables aligned with your commercial agenda."}
        </p>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sand text-charcoal-950 font-bold text-sm hover:bg-sand-light transition-all shadow-card hover:shadow-glow"
          >
            <span>{t.common.requestProposal}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

