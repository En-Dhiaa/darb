"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/layout/LanguageContext";
import { siteConfig } from "@/config/site";
import { campaignsData } from "@/config/campaigns";
import { CampaignCard } from "@/components/campaigns/CampaignCard";
import { ProposalNotice } from "@/components/ui/ProposalNotice";
import {
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Camera,
  Navigation,
  Sparkles,
  CheckCircle,
  FileText,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  const { lang, t, isRtl } = useLanguage();
  const campaignsList = Object.values(campaignsData);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. CINEMATIC EDITORIAL HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-sand/15">
        {/* Hero Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-expedition.svg"
            alt="DARB Expedition Scenery"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/70 to-charcoal-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,185,157,0.08)_0%,transparent_70%)]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-800/80 border border-sand/30 shadow-glow">
            <span className="w-2 h-2 rounded-full bg-sand animate-ping" />
            <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
              {t.home.heroEyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-ivory leading-[1.15]">
            {lang === "ar" ? siteConfig.tagline.ar : siteConfig.tagline.en}
          </h1>

          {/* Subheadline & Value Proposition */}
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-ivory-dark/90 leading-relaxed font-normal">
            {t.home.heroDesc}
          </p>

          {/* CTAs & Navigation */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/campaigns"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-sand text-charcoal-950 font-bold text-base hover:bg-sand-light active:bg-sand-dark transition-all duration-300 shadow-card hover:shadow-glow group"
            >
              <span>{t.home.primaryCta}</span>
              <ArrowUpRight
                className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  isRtl ? "rotate-270" : ""
                }`}
              />
            </Link>

            <Link
              href="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-charcoal-800/80 hover:bg-charcoal-700/80 text-ivory border border-sand/25 font-semibold text-base transition-all duration-300"
            >
              <Compass className="w-5 h-5 text-sand" />
              <span>{t.home.secondaryCta}</span>
            </Link>
          </div>

          {/* Proposal Integrity Notice */}
          <div className="pt-6 max-w-2xl mx-auto">
            <ProposalNotice variant="compact" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted-dark hover:text-sand transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase">
            {lang === "ar" ? "اكتشف المزيد" : "EXPLORE"}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* 2. THE DARB ETHOS & THREE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-800 px-3 py-1 rounded-full border border-sand/20">
            {t.home.ethosBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory">
            {t.home.ethosTitle}
          </h2>
          <p className="text-sm sm:text-base text-ivory-dark leading-relaxed">
            {t.home.ethosDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Pillar 1 */}
          <div className="bg-charcoal-850/80 border border-sand/20 rounded-2xl p-8 space-y-4 hover:border-sand/40 hover:shadow-glow transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-sand/30 flex items-center justify-center text-sand">
              <Camera className="w-6 h-6 text-sand" />
            </div>
            <h3 className="text-xl font-bold text-ivory">
              {t.home.cinematicTruthTitle}
            </h3>
            <p className="text-sm text-ivory-dark/85 leading-relaxed">
              {t.home.cinematicTruthDesc}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-charcoal-850/80 border border-sand/20 rounded-2xl p-8 space-y-4 hover:border-sand/40 hover:shadow-glow transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-sand/30 flex items-center justify-center text-sand">
              <Navigation className="w-6 h-6 text-sand" />
            </div>
            <h3 className="text-xl font-bold text-ivory">
              {t.home.fieldRigorTitle}
            </h3>
            <p className="text-sm text-ivory-dark/85 leading-relaxed">
              {t.home.fieldRigorDesc}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-charcoal-850/80 border border-sand/20 rounded-2xl p-8 space-y-4 hover:border-sand/40 hover:shadow-glow transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-sand/30 flex items-center justify-center text-sand">
              <Sparkles className="w-6 h-6 text-sand" />
            </div>
            <h3 className="text-xl font-bold text-ivory">
              {t.home.businessImpactTitle}
            </h3>
            <p className="text-sm text-ivory-dark/85 leading-relaxed">
              {t.home.businessImpactDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROPOSED CAMPAIGN CONCEPTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal-700/60 pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
              {lang === "ar" ? "مسودات وعروض تحريرية" : "EDITORIAL PITCHES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory">
              {t.home.campaignsSectionTitle}
            </h2>
            <p className="text-sm text-ivory-dark">
              {t.home.campaignsSectionSubtitle}
            </p>
          </div>
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-2 text-sm font-bold text-sand hover:text-ivory transition-colors"
          >
            <span>{t.common.allCampaigns}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaignsList.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>

      {/* 4. THE FOUNDING TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-800 px-3 py-1 rounded-full border border-sand/20">
            {lang === "ar" ? "قيادة المشروع" : "LEADERSHIP"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory">
            {t.home.teamSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-ivory-dark">
            {t.home.teamSectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.team.map((member, idx) => (
            <div
              key={idx}
              className="bg-charcoal-850/80 border border-sand/20 rounded-2xl p-8 flex flex-col justify-between hover:border-sand/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-charcoal-800 border-2 border-sand/40 flex-shrink-0">
                    <Image
                      src={idx === 0 ? "/images/team-dhiaa.webp" : "/images/team-abdulrahman.svg"}
                      alt={lang === "ar" ? member.nameAr : member.nameEn}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ivory">
                      {lang === "ar" ? member.nameAr : member.nameEn}
                    </h3>
                    <p className="text-xs font-semibold text-sand mt-0.5">
                      {lang === "ar" ? member.roleAr : member.roleEn}
                    </p>
                    <span className="text-[10px] text-muted font-mono block mt-1">
                      {idx === 0 ? "VISUAL DIRECTOR & MEDIA LEAD" : "EXPEDITION & ROUTE LEAD"}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-ivory-dark leading-relaxed">
                  {lang === "ar" ? member.bioAr : member.bioEn}
                </p>
              </div>

              {/* Specialties Pills */}
              <div className="pt-6 mt-6 border-t border-charcoal-700/60 flex flex-wrap gap-2">
                {member.specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-charcoal-900 border border-sand/15 text-sand"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CORPORATE INVITATION / MASTER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-charcoal-850 via-charcoal-800 to-charcoal-850 rounded-3xl p-8 sm:p-14 border border-sand/30 shadow-cinematic overflow-hidden text-center space-y-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sand/10 rounded-full blur-3xl -z-10" />

          <span className="inline-block text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-900/90 px-4 py-1.5 rounded-full border border-sand/30">
            {lang === "ar" ? "جاهزون للانطلاق" : "READY TO VENTURE"}
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-ivory max-w-3xl mx-auto leading-tight">
            {lang === "ar"
              ? "هل تود أن نوثق قصة علامتك التجارية في الميدان؟"
              : "Ready to take your brand story beyond closed doors?"}
          </h2>

          <p className="text-sm sm:text-base text-ivory-dark/90 max-w-2xl mx-auto leading-relaxed">
            {lang === "ar"
              ? "سواء كنت تمثل وكيلاً لقطاع السيارات، مصنعاً وطنياً، أو علامة استهلاكية تسعى لترسيخ مكانتها، يسعدنا تصميم رحلة مخصصة تليق برؤيتكم."
              : "Whether you represent an automotive distributor, an industrial plant, or a consumer brand seeking genuine consumer trust, we are ready to design a tailored journey."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sand text-charcoal-950 font-bold text-base hover:bg-sand-light transition-all shadow-card hover:shadow-glow"
            >
              <span>{t.nav.discussCta}</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <Link
              href="/partners"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-ivory border border-sand/25 font-semibold text-base transition-all"
            >
              <FileText className="w-5 h-5 text-sand" />
              <span>{t.common.requestProposal}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
