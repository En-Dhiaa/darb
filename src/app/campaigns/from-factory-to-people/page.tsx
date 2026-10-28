"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/layout/LanguageContext";
import { siteConfig } from "@/config/site";
import { campaignsData } from "@/config/campaigns";
import { StoryboardTimeline } from "@/components/ui/StoryboardTimeline";
import { DeliverableGrid } from "@/components/campaigns/DeliverableGrid";
import { ProposalNotice } from "@/components/ui/ProposalNotice";
import {
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Building,
  Users,
  Cog,
  ShoppingBag,
  Sparkles,
  PhoneCall,
  MessageSquare,
  PackageCheck,
  Factory,
} from "lucide-react";

export default function FromFactoryToPeoplePage() {
  const { lang, t, isRtl } = useLanguage();
  const campaign = campaignsData["from-factory-to-people"];

  const handleWhatsAppClick = () => {
    const rawNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
    const msg = encodeURIComponent(
      `مرحباً فريق درب، نود مناقشة التصور المقترح لحملة (من المصنع إلى الناس) للقطاع الصناعي والاستهلاكي.`
    );
    window.open(`https://wa.me/${rawNumber}?text=${msg}`, "_blank");
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-sand/20 bg-charcoal-950">
        <div className="absolute inset-0 z-0">
          <Image
            src={campaign.heroImage}
            alt="From Factory to People Concept"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/70 to-charcoal-950/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,91,72,0.15)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-sand/35 shadow-glow">
            <Factory className="w-4 h-4 text-sand" />
            <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
              PROPOSED CREATIVE CONCEPT FOR MANUFACTURING & FMCG
            </span>
          </div>

          {/* Titles */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-ivory tracking-tight leading-[1.15]">
              {lang === "ar" ? "كل منتج له رحلة. ونحن نوثقها." : "Every Product Has A Journey. We Document It."}
            </h1>
            <div className="text-xl sm:text-3xl font-bold text-sand font-mono">
              {campaign.titleEn}
            </div>
          </div>

          {/* Supporting Headline */}
          <p className="text-base sm:text-xl text-ivory-dark max-w-3xl mx-auto leading-relaxed">
            {lang === "ar" ? campaign.fullDescAr : campaign.fullDescEn}
          </p>

          {/* Target Audience Pill */}
          <div className="pt-2">
            <span className="text-xs text-muted-light bg-charcoal-850 px-3.5 py-1.5 rounded-full border border-sand/20 font-medium">
              {lang === "ar" ? campaign.industryAr : campaign.industryEn}
            </span>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?campaign=from-factory-to-people"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-sand text-charcoal-950 font-bold text-base hover:bg-sand-light active:bg-sand-dark transition-all shadow-card hover:shadow-glow group"
            >
              <span>{lang === "ar" ? "صمم رحلة علامتك التجارية" : "Design Your Brand Expedition"}</span>
              <ArrowUpRight
                className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  isRtl ? "rotate-270" : ""
                }`}
              />
            </Link>

            <a
              href="#storyboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-charcoal-800/80 hover:bg-charcoal-700/80 text-ivory border border-sand/25 font-semibold text-base transition-all"
            >
              <Compass className="w-5 h-5 text-sand" />
              <span>{lang === "ar" ? "استكشف محطات القصة الست" : "Explore The 6 Stages"}</span>
            </a>
          </div>

          {/* Proposal Notice */}
          <div className="pt-6 max-w-2xl mx-auto">
            <ProposalNotice
              customTextAr="تصور إبداعي مقترح — هذا المقترح نموذج سردي مخصص للمصانع والشركات الاستهلاكية، ولا يمثل حملة منجزة مع شركة محددة أو إفشاءً لأسرار تشغيلية."
              customTextEn="Proposed Creative Pitch — This concept is designed for manufacturing and consumer goods brands; it does not claim a completed campaign or disclose proprietary operational data."
            />
          </div>
        </div>
      </section>

      {/* 2. THE CORE CONCEPT & THREE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-800 px-3 py-1 rounded-full border border-sand/20">
            THE NARRATIVE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory">
            {lang === "ar" ? "الفكرة الجوهرية: مسار المنتج الخفي" : "The Core Narrative: The Unseen Lifecycle"}
          </h2>
          <p className="text-base text-ivory-dark leading-relaxed">
            {lang === "ar" ? campaign.coreIdeaAr : campaign.coreIdeaEn}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaign.threePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-charcoal-850/80 border border-sand/20 rounded-2xl p-8 space-y-4 hover:border-sand/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="text-xs font-mono text-sand tracking-widest uppercase">
                {idx === 0 ? "STAGE 01" : idx === 1 ? "STAGE 02" : "STAGE 03"}
              </div>
              <h3 className="text-xl font-bold text-ivory">
                {lang === "ar" ? pillar.titleAr : pillar.titleEn}
              </h3>
              <p className="text-sm text-ivory-dark/85 leading-relaxed">
                {lang === "ar" ? pillar.descAr : pillar.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAMPAIGN OBJECTIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-charcoal-700/60 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
              STRATEGIC BRAND IMPACT
            </span>
            <h2 className="text-3xl font-extrabold text-ivory">
              {lang === "ar" ? "أهداف حملة (من المصنع إلى الناس)" : "Strategic Campaign Objectives"}
            </h2>
          </div>
          <div className="text-xs text-muted max-w-sm">
            {lang === "ar"
              ? "بناء ثقة عميقة بين المستهلك والصناعة الوطنية بالصوت والصورة الواقعية."
              : "Forging authentic consumer pride and loyalty through verified visual proof."}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaign.objectives.map((obj, i) => (
            <div
              key={i}
              className="bg-charcoal-850/50 border border-sand/15 rounded-xl p-6 space-y-3 hover:border-sand/30 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-charcoal-900 border border-sand/20 flex items-center justify-center text-sand text-xs font-mono font-bold">
                0{i + 1}
              </div>
              <p className="text-xs sm:text-sm text-ivory leading-relaxed">
                {lang === "ar" ? obj.ar : obj.en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STORYBOARD: 6 STORY STAGES */}
      <section id="storyboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-800 px-3 py-1 rounded-full border border-sand/20">
            THE 6 STORY STAGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-ivory">
            {lang === "ar" ? "مسار القصة المكتملة" : "The 6-Stage Narrative Storyboard"}
          </h2>
          <p className="text-sm sm:text-base text-ivory-dark">
            {lang === "ar"
              ? "من خطوط الإنتاج والكوادر إلى أسطول النقل ومتاجر التجزئة ومائدة المستهلك."
              : "Tracking the journey from factory technicians through distribution fleets to corner retail and dining tables."}
          </p>
        </div>

        <div className="pt-4">
          <StoryboardTimeline stages={campaign.storyboard} />
        </div>
      </section>

      {/* 5. POTENTIAL CONTENT DELIVERABLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            DELIVERABLE ASSETS
          </span>
          <h2 className="text-3xl font-extrabold text-ivory">
            {lang === "ar" ? "المخرجات الإعلامية المتوقعة للرحلة" : "Potential Content Assets Scope"}
          </h2>
          <p className="text-sm text-ivory-dark">
            {lang === "ar"
              ? "مكتبة وثائقية ثرية توفر للمنشأة محتوى متعدد الاستخدامات لحملاتها السنوية."
              : "A master visual library fueling corporate annual reports, digital campaigns, and PR."}
          </p>
        </div>

        <DeliverableGrid deliverables={campaign.deliverables} />
      </section>

      {/* 6. SPONSOR SUPPORT REQUESTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            SPONSOR FACILITATIONS & SUPPORT
          </span>
          <h2 className="text-3xl font-extrabold text-ivory">
            {lang === "ar" ? "الدعم التشغيلي المطلوب من المنشأة الراعية" : "What We Request From The Sponsor"}
          </h2>
          <p className="text-sm text-ivory-dark">
            {lang === "ar"
              ? "المتطلبات الميدانية والتنسيقية لتنفيذ العمل بأعلى معايير السلامة والجودة."
              : "Operational requirements to execute the production with absolute safety and visual excellence."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaign.sponsorSupportRequests.map((req, idx) => (
            <div
              key={idx}
              className="bg-charcoal-850/80 border border-sand/20 rounded-2xl p-8 space-y-6 flex flex-col justify-between hover:border-sand/40 transition-all shadow-card"
            >
              <div className="space-y-4">
                <div className="text-xs font-mono text-sand tracking-widest uppercase">
                  CATEGORY 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-ivory">
                  {lang === "ar" ? req.categoryAr : req.categoryEn}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-ivory-dark">
                  {(lang === "ar" ? req.itemsAr : req.itemsEn).map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <span className="text-sand font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-charcoal-700/60 text-[11px] text-muted">
                {lang === "ar" ? "تخضع للتنسيق والموافقة المسبقة" : "Subject to formal coordination"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SAFETY & CONFIDENTIALITY PROTOCOLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-charcoal-700/60 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
              CONFIDENTIALITY & OCCUPATIONAL SAFETY
            </span>
            <h2 className="text-3xl font-extrabold text-ivory">
              {lang === "ar" ? "السرية المهنية والسلامة الصناعية" : "Industrial Safety & Confidentiality"}
            </h2>
          </div>
          <div className="text-xs text-muted max-w-sm">
            {lang === "ar"
              ? "حماية تامة لأسرار التصنيع مع الالتزام الصارم بمهمات الوقاية داخل المصانع."
              : "Zero disclosure of trade secrets with strict PPE adherence inside all facilities."}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaign.safetyProtocols.map((proto, idx) => (
            <div
              key={idx}
              className="bg-charcoal-850/70 border border-sand/20 rounded-xl p-6 space-y-3 hover:border-sand/40 transition-all"
            >
              <div className="flex items-center gap-2 text-sand text-xs font-bold font-mono">
                <ShieldCheck className="w-4 h-4 text-sand" />
                <span>SAFETY 0{idx + 1}</span>
              </div>
              <h4 className="text-base font-bold text-ivory">
                {lang === "ar" ? proto.titleAr : proto.titleEn}
              </h4>
              <p className="text-xs text-ivory-dark/80 leading-relaxed">
                {lang === "ar" ? proto.descAr : proto.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-charcoal-850 via-charcoal-800 to-charcoal-850 rounded-3xl p-8 sm:p-14 border border-sand/35 shadow-cinematic text-center space-y-6">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-900 px-4 py-1.5 rounded-full border border-sand/30">
            {lang === "ar" ? "اكتشف ما لا يُرى" : "REVEAL THE JOURNEY"}
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-ivory max-w-3xl mx-auto leading-tight">
            {lang === "ar"
              ? "دع جمهورك يرى الرحلة التي لا يراها عادةً."
              : "Let your audience witness the journey they rarely see."}
          </h2>

          <p className="text-sm sm:text-base text-ivory-dark max-w-2xl mx-auto leading-relaxed">
            {lang === "ar"
              ? "دعونا نحدد المنتج والمسار، ونرسم معاً قصة وثائقية تبني الثقة وتوثق جهد كوادركم في كل بيت."
              : "Let us define your product and route, sculpting a documentary narrative that fosters deep consumer trust and honors your workforce."}
          </p>

          <div className="text-xs text-sand font-medium">
            {siteConfig.disclosures.pricingNoticeAr}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?campaign=from-factory-to-people"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sand text-charcoal-950 font-bold text-base hover:bg-sand-light transition-all shadow-card hover:shadow-glow"
            >
              <PhoneCall className="w-5 h-5" />
              <span>{lang === "ar" ? "ناقش فكرة حملتك" : "Discuss Your Campaign Idea"}</span>
            </Link>

            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-base transition-all shadow-card"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.common.discussWhatsApp}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

