"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../layout/LanguageContext";
import { CampaignConfig } from "@/config/campaigns";
import { ArrowUpRight, Compass, ShieldAlert } from "lucide-react";

interface CampaignCardProps {
  campaign: CampaignConfig;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const { lang, t, isRtl } = useLanguage();

  return (
    <article className="group relative bg-charcoal-850/90 rounded-2xl overflow-hidden border border-sand/20 hover:border-sand/50 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col justify-between">
      {/* Visual Header / Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal-900">
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent z-10" />

        {/* Proposal Badge */}
        <div className="absolute top-4 start-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-charcoal-950/80 backdrop-blur border border-sand/40 text-sand shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sand animate-pulse" />
            {t.common.proposedConcept}
          </span>
        </div>

        {/* Dynamic Image or fallback pattern */}
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          {campaign.heroImage ? (
            <Image
              src={campaign.heroImage}
              alt={lang === "ar" ? campaign.titleAr : campaign.titleEn}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-charcoal-800 flex items-center justify-center text-sand/30">
              <Compass className="w-16 h-16" />
            </div>
          )}
        </div>

        {/* Industry Tag */}
        <div className="absolute bottom-4 start-4 z-20">
          <span className="text-xs font-medium text-ivory-dark bg-charcoal-900/90 px-2.5 py-1 rounded border border-sand/15">
            {lang === "ar" ? campaign.industryAr : campaign.industryEn}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-xs font-mono tracking-wider text-sand uppercase">
              {lang === "ar" ? campaign.subtitleAr : campaign.subtitleEn}
            </div>
            <h3 className="text-2xl font-bold text-ivory group-hover:text-sand transition-colors">
              {lang === "ar" ? campaign.titleAr : campaign.titleEn}
            </h3>
          </div>

          <p className="text-sm text-ivory-dark leading-relaxed">
            {lang === "ar" ? campaign.shortDescAr : campaign.shortDescEn}
          </p>

          <div className="pt-2 flex items-center gap-2 text-[11px] text-muted">
            <ShieldAlert className="w-3.5 h-3.5 text-sand/70 flex-shrink-0" />
            <span>
              {lang === "ar"
                ? "مقترح تحريري موجه للشريك المحتمل، ليس إعلاناً رسمياً."
                : "Proposed creative brief for prospective sponsor; not a confirmed release."}
            </span>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-charcoal-700/60 flex items-center justify-between">
          <Link
            href={`/campaigns/${campaign.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-sand hover:text-ivory transition-colors group/link"
          >
            <span>{t.common.exploreIdea}</span>
            <ArrowUpRight
              className={`w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 ${
                isRtl ? "rotate-270" : ""
              }`}
            />
          </Link>
          <span className="text-xs text-muted/60 font-mono">DARB PITCH</span>
        </div>
      </div>
    </article>
  );
}

