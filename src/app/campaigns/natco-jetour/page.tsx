"use client";

import React, { useState } from "react";
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
  Building2,
  ExternalLink,
  Car,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  FileText,
  Sliders,
  Sparkles,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

export default function NatcoJetourCampaignPage() {
  const { lang, t, isRtl } = useLanguage();
  const campaign = campaignsData["natco-jetour"];

  const handleWhatsAppClick = () => {
    const rawNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
    const msg = encodeURIComponent(
      `مرحباً فريق درب، نود مناقشة التصور المقترح لحملة ناتكو للسيارات × جيتور (على الطريق).`
    );
    window.open(`https://wa.me/${rawNumber}?text=${msg}`, "_blank");
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* SECTION A — HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-sand/20 bg-charcoal-950">
        <div className="absolute inset-0 z-0">
          <Image
            src={campaign.heroImage}
            alt="JETOUR Beyond The Road Concept"
            fill
            priority
            className="object-cover object-center opacity-45 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/70 to-charcoal-950/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,185,157,0.1)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-8">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-sand/35 shadow-glow">
            <span className="w-2 h-2 rounded-full bg-sand animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
              DARB PRESENTS A PROPOSED BRAND EXPERIENCE
            </span>
          </div>

          {/* Clean Text-Only Partnership Title (No unapproved logos) */}
          <div className="space-y-3">
            <div className="text-sm sm:text-base font-mono tracking-widest text-sand uppercase">
              NATCO AUTOMOTIVE × JETOUR
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-ivory tracking-tight leading-[1.15]">
              {campaign.titleAr}
            </h1>
            <div className="text-lg sm:text-2xl font-bold text-sand-light font-mono">
              {campaign.titleEn}
            </div>
          </div>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-xl font-semibold text-ivory-dark max-w-3xl mx-auto leading-relaxed">
            {lang === "ar"
              ? "ليست مجرد سيارة نعرضها. إنها تجربة ننطلق لاكتشافها."
              : "Not just a car we display. It's a journey we venture out to discover."}
          </p>

          {/* Pitch Description */}
          <p className="text-sm sm:text-base text-muted-light max-w-3xl mx-auto leading-relaxed">
            {lang === "ar" ? campaign.fullDescAr : campaign.fullDescEn}
          </p>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-sand text-charcoal-950 font-bold text-base hover:bg-sand-light active:bg-sand-dark transition-all shadow-card hover:shadow-glow group"
            >
              <span>{lang === "ar" ? "ناقش هذه الحملة مع فريق درب" : "Discuss This Campaign With DARB"}</span>
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
              <span>{lang === "ar" ? "اكتشف سيناريو الرحلة" : "Explore Journey Storyboard"}</span>
            </a>
          </div>

          {/* Mandatory Disclosure Banner */}
          <div className="pt-6 max-w-2xl mx-auto">
            <ProposalNotice
              customTextAr="تصور إبداعي مقترح — لا تمثل هذه الصفحة إعلانًا عن شراكة معتمدة مع ناتكو أو جيتور. نستخدم هنا مسميات نصية ولا نستخدم شعارات تجارية دون اعتماد مسبق."
              customTextEn="Proposed Creative Pitch — This proposal does not represent an approved endorsement or executed contract with NATCO or JETOUR. Clean typography is utilized without unauthorized commercial emblems."
            />
          </div>
        </div>
      </section>

      {/* SECTION B — THE CORE IDEA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-800 px-3 py-1 rounded-full border border-sand/20">
            {lang === "ar" ? "الفكرة الجوهرية" : "THE CORE CONCEPT"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory">
            {lang === "ar" ? "من داخل المعرض إلى قلب الرحلة" : "From The Showroom Floor to The Open Road"}
          </h2>
          <p className="text-base text-ivory-dark leading-relaxed">
            {lang === "ar" ? campaign.coreIdeaAr : campaign.coreIdeaEn}
          </p>
        </div>

        {/* Three-Part Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaign.threePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-charcoal-850/80 border border-sand/20 rounded-2xl p-8 space-y-4 hover:border-sand/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="text-xs font-mono text-sand tracking-widest uppercase">
                {idx === 0 ? "PART 01" : idx === 1 ? "PART 02" : "PART 03"}
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

      {/* SECTION C — WHY THIS CAMPAIGN? (OBJECTIVES VS NO GUARANTEED RESULTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-charcoal-700/60 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
              CAMPAIGN OBJECTIVES & SCOPE
            </span>
            <h2 className="text-3xl font-extrabold text-ivory">
              {lang === "ar" ? "لماذا هذه الحملة؟ وما الذي نحققه معاً؟" : "Why This Campaign? Measured Objectives"}
            </h2>
          </div>
          <div className="text-xs text-muted max-w-sm">
            {lang === "ar"
              ? "نحدد بوضوح الأهداف المرتقبة، ونميزها عن النتائج التجارية غير المضمونة."
              : "Clear strategic objectives distinctly differentiated from guaranteed sales or viral claims."}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Integrity Notice */}
        <div className="p-4 rounded-xl bg-charcoal-900 border border-sand/20 flex items-start gap-3 text-xs text-muted leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-sand flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-ivory">
              {lang === "ar" ? "التزام المصداقية الإعلامية:" : "Documentary Transparency Commitment:"}{" "}
            </span>
            {lang === "ar"
              ? "لا نعد بزيادات مبيعات وهمية أو أرقام مشاهدات خوارزمية غير مثبتة. التزامنا هو تقديم عمل بصري سينمائي عالي الجودة يعكس القيمة الحقيقية للسيارة ولشركة ناتكو، ويزودكم بمكتبة أصول إعلامية دائمة."
              : "We do not manufacture exaggerated sales forecasts or unverifiable viral pledges. Our commitment is delivering master-grade editorial media that honors the vehicle and NATCO's brand equity, providing an enduring corporate content archive."}
          </div>
        </div>
      </section>

      {/* SECTION D — THE JOURNEY STORYBOARD (VERTICAL TIMELINE WITH 6 STAGES) */}
      <section id="storyboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-800 px-3 py-1 rounded-full border border-sand/20">
            THE JOURNEY STORYBOARD
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-ivory">
            {lang === "ar" ? "سيناريو ومراحل الرحلة الميدانية" : "The 6-Stage Field Storyboard"}
          </h2>
          <p className="text-sm sm:text-base text-ivory-dark">
            {lang === "ar"
              ? "مراحل مدروسة تنطلق من مقر الشركة وتمر بالاختبارات الميدانية وحتى الفيلم النهائي"
              : "A cinematic progression structured from initial dealer orientation to the final master documentary release."}
          </p>
        </div>

        <div className="pt-4">
          <StoryboardTimeline stages={campaign.storyboard} />
        </div>
      </section>

      {/* SECTION E — PRODUCT STORYTELLING & SPECIFICATION SYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-800 px-3 py-1 rounded-full border border-sand/20">
            PRODUCT STORYTELLING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory">
            {lang === "ar" ? "نختبر التجربة، لا نكتفي بوصفها." : "We Test The Experience, Not Just Describe It."}
          </h2>
          <p className="text-sm sm:text-base text-ivory-dark">
            {lang === "ar"
              ? "نستعرض جوانب المركبة التقنية والعملية بأسلوب وثائقي شفاف دون أرقام مصطنعة."
              : "Reviewing vehicle engineering and cabin usability through real-world observation."}
          </p>
        </div>

        {/* Central Vehicle Config & Spec Notice */}
        <div className="bg-charcoal-850 border border-sand/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-charcoal-700/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-charcoal-900 border border-sand/30 flex items-center justify-center text-sand">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ivory">
                  {campaign.vehicleConfig?.modelName}
                </h3>
                <span className="text-xs font-mono text-sand">
                  JETOUR CONFIRMED MODEL SPEC SHEET (TBD WITH NATCO)
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-olive/30 border border-sand/25 text-sand text-xs font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? "تحدد المواصفات رسمياً مع الوكيل" : "Specs Verified with Dealer"}</span>
            </span>
          </div>

          <div className="text-xs sm:text-sm text-ivory-dark leading-relaxed space-y-2">
            <p>
              {lang === "ar"
                ? campaign.vehicleConfig?.powertrainNoteAr
                : campaign.vehicleConfig?.powertrainNoteEn}
            </p>
            <p className="text-muted text-xs">
              {lang === "ar"
                ? campaign.vehicleConfig?.specStatusNoticeAr
                : campaign.vehicleConfig?.specStatusNoticeEn}
            </p>
          </div>
        </div>

        {/* Feature Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaign.features?.map((feat) => (
            <div
              key={feat.id}
              className="bg-charcoal-850/60 border border-sand/15 rounded-xl p-6 space-y-3 hover:border-sand/35 hover:bg-charcoal-850 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-sand uppercase">
                    MODULE
                  </span>
                  <span className="text-[10px] text-muted bg-charcoal-900 px-2 py-0.5 rounded border border-sand/10">
                    {lang === "ar" ? feat.statusBadgeAr : feat.statusBadgeEn}
                  </span>
                </div>
                <h4 className="text-base font-bold text-ivory">
                  {lang === "ar" ? feat.titleAr : feat.titleEn}
                </h4>
                <p className="text-xs text-ivory-dark/80 leading-relaxed">
                  {lang === "ar" ? feat.descAr : feat.descEn}
                </p>
              </div>

              <div className="pt-3 border-t border-charcoal-700/50 text-[10px] text-muted-dark">
                {lang === "ar" ? "توثيق ميداني خاضع لكتيب الشركة" : "Documented per official manual"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION F — NATCO COMPANY INTRODUCTION & OFFICIAL REFERENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal-850/90 border border-sand/25 rounded-2xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-charcoal-700/60 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
                PARTNER SHOWCASE & INSTITUTIONAL PROFILE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ivory">
                {campaign.partnerIntro?.headingAr}
              </h2>
            </div>

            <a
              href={campaign.partnerIntro?.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-charcoal-900 border border-sand/30 text-sand hover:text-ivory text-xs font-semibold hover:border-sand transition-all self-start md:self-auto"
            >
              <span>{lang === "ar" ? campaign.partnerIntro?.websiteLabelAr : campaign.partnerIntro?.websiteLabelEn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-sm sm:text-base text-ivory-dark leading-relaxed">
            {lang === "ar" ? campaign.partnerIntro?.bodyAr : campaign.partnerIntro?.bodyEn}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="bg-charcoal-900/80 p-5 rounded-xl border border-sand/15 space-y-2">
              <Building2 className="w-5 h-5 text-sand" />
              <h4 className="text-sm font-bold text-ivory">
                {lang === "ar" ? "زيارة المعرض المعتمد" : "Authorized Showroom Tour"}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {lang === "ar"
                  ? "توثيق البيئة الراقية لمعرض ناتكو وتقديم الطرازات المتاحة للجمهور المحلي."
                  : "Highlighting showroom facilities and presenting local market offerings."}
              </p>
            </div>

            <div className="bg-charcoal-900/80 p-5 rounded-xl border border-sand/15 space-y-2">
              <HelpCircle className="w-5 h-5 text-sand" />
              <h4 className="text-sm font-bold text-ivory">
                {lang === "ar" ? "حوارات ما بعد البيع والصيانة" : "After-Sales & Care Discussions"}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {lang === "ar"
                  ? "مقابلة مسؤولي الصيانة للحديث عن الضمان المعتمد وتوفر قطع الغيار الأصلية."
                  : "Interviews on authorized warranty, certified maintenance, and parts supply."}
              </p>
            </div>

            <div className="bg-charcoal-900/80 p-5 rounded-xl border border-sand/15 space-y-2">
              <CheckCircle className="w-5 h-5 text-sand" />
              <h4 className="text-sm font-bold text-ivory">
                {lang === "ar" ? "قنوات تواصل مباشرة للعملاء" : "Official Direct Customer Inquiry"}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {lang === "ar"
                  ? "توجيه كافة المهتمين بالشراء والصيانة إلى الفروع ومراكز الاتصال الرسمية لناتكو."
                  : "Guiding all purchase and service inquiries directly to NATCO's official desks."}
              </p>
            </div>
          </div>

          <div className="text-[11px] text-muted-dark border-t border-charcoal-700/60 pt-4">
            {lang === "ar" ? campaign.partnerIntro?.disclaimerAr : campaign.partnerIntro?.disclaimerEn}
          </div>
        </div>
      </section>

      {/* SECTION G — SAMPLE DELIVERABLES (ILLUSTRATIVE PACKAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            CAMPAIGN DELIVERABLES
          </span>
          <h2 className="text-3xl font-extrabold text-ivory">
            {lang === "ar" ? "مخرجات الحملة المقترحة (حزمة استرشادية)" : "Sample Campaign Deliverables Package"}
          </h2>
          <p className="text-sm text-ivory-dark">
            {lang === "ar"
              ? "مكتبة أصول بصرية وتسجيلية متكاملة تسلم للشركة بجودة سينمائية لإعادة استخدامها."
              : "An integrated documentary asset library delivered for multi-channel corporate reuse."}
          </p>
        </div>

        <DeliverableGrid deliverables={campaign.deliverables} />
      </section>

      {/* SECTION H — WHAT WE REQUEST FROM NATCO (SPONSORSHIP SUPPORT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            PARTNER PROVISIONS & REQUIREMENTS
          </span>
          <h2 className="text-3xl font-extrabold text-ivory">
            {lang === "ar" ? "ما نقترحه من دعم تشغيلي من ناتكو" : "What We Request From NATCO (Proposed Support)"}
          </h2>
          <p className="text-sm text-ivory-dark">
            {lang === "ar"
              ? "تفصيل شفاف لمقومات نجاح الحملة، مصنفة حسب طبيعة الدعم المطلوب."
              : "Clear categorization of proposed operational, coordination, and production provisions."}
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
                {lang === "ar" ? "متطلبات مقترحة تخضع للموافقة المسبقة" : "Proposed terms subject to mutual sign-off"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION I — WHAT NATCO RECEIVES (PROPOSED VALUE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-charcoal-700/60 pb-6 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            DELIVERED VALUE FOR NATCO
          </span>
          <h2 className="text-3xl font-extrabold text-ivory">
            {lang === "ar" ? "ما الذي تحققه ناتكو وجيتور من هذه الحملة؟" : "What NATCO Receives: Strategic Brand Value"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaign.sponsorValue.map((val, i) => (
            <div
              key={i}
              className="bg-charcoal-850/60 border border-sand/15 rounded-xl p-6 space-y-3 hover:border-sand/30 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-charcoal-900 border border-sand/20 flex items-center justify-center text-sand text-xs font-mono font-bold">
                0{i + 1}
              </div>
              <p className="text-xs sm:text-sm text-ivory-dark leading-relaxed">
                {lang === "ar" ? val.ar : val.en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION J — SAFETY AND OPERATIONAL PLANNING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-charcoal-700/60 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
              SAFETY, DISCIPLINE & RISK MANAGEMENT
            </span>
            <h2 className="text-3xl font-extrabold text-ivory">
              {lang === "ar" ? "معايير السلامة والتخطيط الميداني المنضبط" : "Operational Safety & Risk Management"}
            </h2>
          </div>
          <div className="text-xs text-muted max-w-sm">
            {lang === "ar"
              ? "نلتزم التزاماً صارماً بقوانين المرور والسلامة دون أي مخاطرة بالمركبة أو الطاقم."
              : "Strict traffic and route safety compliance with zero dangerous stunts or unvetted hazards."}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaign.safetyProtocols.map((proto, idx) => (
            <div
              key={idx}
              className="bg-charcoal-850/70 border border-sand/20 rounded-xl p-6 space-y-3 hover:border-sand/40 transition-all"
            >
              <div className="flex items-center gap-2 text-sand text-xs font-bold font-mono">
                <ShieldCheck className="w-4 h-4 text-sand" />
                <span>PROTOCOL 0{idx + 1}</span>
              </div>
              <h4 className="text-base font-bold text-ivory">
                {lang === "ar" ? proto.titleAr : proto.titleEn}
              </h4>
              <p className="text-xs sm:text-sm text-ivory-dark/80 leading-relaxed">
                {lang === "ar" ? proto.descAr : proto.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION K — FINAL CTA (NO PUBLIC PRICING + WHATSAPP & MEETING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-charcoal-850 via-charcoal-800 to-charcoal-850 rounded-3xl p-8 sm:p-14 border border-sand/35 shadow-cinematic text-center space-y-6">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-900 px-4 py-1.5 rounded-full border border-sand/30">
            {lang === "ar" ? "الخطوة التالية" : "THE NEXT STEP"}
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-ivory max-w-3xl mx-auto leading-tight">
            {lang === "ar" ? "هل ننطلق معًا؟" : "Shall We Venture Together?"}
          </h2>

          <p className="text-sm sm:text-base text-ivory-dark max-w-2xl mx-auto leading-relaxed">
            {lang === "ar"
              ? "دعونا نناقش الطراز المناسب، والمسار، وأهداف الحملة، واحتياجات الإنتاج، ثم نصمم تصورًا يناسب استراتيجية ناتكو."
              : "Let us discuss the suitable vehicle trim, scouted routes, campaign objectives, and production logistics to tailor a journey that aligns with NATCO's corporate strategy."}
          </p>

          {/* Pricing Notice */}
          <div className="text-xs text-sand font-medium">
            {siteConfig.disclosures.pricingNoticeAr}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?campaign=natco-jetour"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sand text-charcoal-950 font-bold text-base hover:bg-sand-light transition-all shadow-card hover:shadow-glow"
            >
              <PhoneCall className="w-5 h-5" />
              <span>{lang === "ar" ? "طلب اجتماع لمناقشة الحملة" : "Request Meeting to Discuss Campaign"}</span>
            </Link>

            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-base transition-all shadow-card"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.common.discussWhatsApp}</span>
            </button>
          </div>

          <div className="pt-2 text-[11px] text-muted">
            {lang === "ar"
              ? "رقم الواتساب مخصص للمحادثات التنسيقية المباشرة مع ممثلي الشركات والجهات الراعية."
              : "WhatsApp channel reserved for direct coordination with prospective corporate sponsors."}
          </div>
        </div>
      </section>
    </div>
  );
}

