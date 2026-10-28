"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/layout/LanguageContext";
import { campaignsData } from "@/config/campaigns";
import { CampaignCard } from "@/components/campaigns/CampaignCard";
import { ProposalNotice } from "@/components/ui/ProposalNotice";
import { Sparkles, Layers, ShieldCheck } from "lucide-react";

export default function CampaignsDirectoryPage() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "automotive" | "industry">("all");

  const allCampaigns = Object.values(campaignsData);

  const filteredCampaigns = allCampaigns.filter((c) => {
    if (filter === "automotive") return c.id === "natco-jetour";
    if (filter === "industry") return c.id === "from-factory-to-people";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-sand/30">
          <Sparkles className="w-4 h-4 text-sand" />
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            {lang === "ar" ? "دليل الحملات الميدانية المقترحة" : "PROPOSED CAMPAIGN DIRECTORY"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory leading-tight">
          {t.campaignsDir.heading}
        </h1>

        <p className="text-base sm:text-lg text-ivory-dark max-w-3xl mx-auto leading-relaxed">
          {t.campaignsDir.supporting}
        </p>

        {/* Global Proposal Notice */}
        <div className="max-w-2xl mx-auto pt-2">
          <ProposalNotice
            customTextAr="جميع الحملات المعروضة في هذا القسم هي مسودات وتصورات إبداعية مقترحة للشركات المعنية، ولا تمثل اتفاقيات شراكة منجزة أو معلنة رسمياً."
            customTextEn="All campaigns presented in this directory are creative pitches and proposed brand briefs; they do not represent finalized or executed sponsor agreements."
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            filter === "all"
              ? "bg-sand text-charcoal-950 shadow-card"
              : "bg-charcoal-850 text-muted hover:text-ivory border border-sand/15"
          }`}
        >
          {t.campaignsDir.filterAll}
        </button>

        <button
          onClick={() => setFilter("automotive")}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            filter === "automotive"
              ? "bg-sand text-charcoal-950 shadow-card"
              : "bg-charcoal-850 text-muted hover:text-ivory border border-sand/15"
          }`}
        >
          {t.campaignsDir.filterAutomotive}
        </button>

        <button
          onClick={() => setFilter("industry")}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            filter === "industry"
              ? "bg-sand text-charcoal-950 shadow-card"
              : "bg-charcoal-850 text-muted hover:text-ivory border border-sand/15"
          }`}
        >
          {t.campaignsDir.filterIndustry}
        </button>
      </div>

      {/* Campaign Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-4">
        {filteredCampaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>

      {/* Corporate Co-Design Banner */}
      <div className="mt-16 bg-charcoal-850/60 border border-sand/20 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-start">
          <div className="flex items-center gap-2 text-sand text-xs font-bold font-mono">
            <Layers className="w-4 h-4" />
            <span>{lang === "ar" ? "تصميم حملة خاصة بنشاطك" : "BESPOKE BRAND STORY"}</span>
          </div>
          <h3 className="text-xl font-bold text-ivory">
            {lang === "ar"
              ? "هل تبحث عن مسار خاص بشركتك غير مدرج في هذه المقترحات؟"
              : "Looking for a specialized route or concept tailored to your brand?"}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-dark max-w-2xl">
            {lang === "ar"
              ? "نحن ندرس طبيعة منتجك، مناطق انتشارك، والتحديات التسويقية التي تواجهها لنبتكر مسار رحلة حصرية توثقها عدساتنا في الميدان."
              : "We evaluate your products, distribution territories, and commercial priorities to architect an exclusive field expedition."}
          </p>
        </div>

        <a
          href="/contact"
          className="whitespace-nowrap px-6 py-3 rounded-lg bg-sand text-charcoal-950 font-bold text-xs hover:bg-sand-light transition-all shadow-card flex-shrink-0"
        >
          {t.common.requestProposal}
        </a>
      </div>
    </div>
  );
}
