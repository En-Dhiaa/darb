"use client";

import React from "react";
import { useLanguage } from "../layout/LanguageContext";
import { StoryboardStage } from "@/config/campaigns";
import {
  Building2,
  Car,
  Compass,
  Mountain,
  HelpCircle,
  Film,
  Building,
  Users,
  Cog,
  ShoppingBag,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

interface StoryboardTimelineProps {
  stages: StoryboardStage[];
}

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Car,
  Compass,
  Mountain,
  HelpCircle,
  Film,
  Building,
  Users,
  Cog,
  ShoppingBag,
  CheckCircle,
};

export function StoryboardTimeline({ stages }: StoryboardTimelineProps) {
  const { lang, isRtl } = useLanguage();

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:left-5 before:rtl:left-auto before:rtl:right-5 sm:before:left-1/2 sm:before:rtl:left-1/2 sm:before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-sand/60 before:via-sand/20 before:to-transparent">
      {stages.map((stage, idx) => {
        const IconComponent = iconMap[stage.iconName] || Compass;
        const isEven = idx % 2 === 0;

        return (
          <div
            key={stage.step}
            className={`relative flex flex-col sm:flex-row items-start ${
              isEven ? "sm:flex-row-reverse" : ""
            } gap-6 group`}
          >
            {/* Step Icon Node */}
            <div className="absolute left-0 rtl:left-auto rtl:right-0 sm:left-1/2 sm:rtl:left-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-charcoal-900 border-2 border-sand shadow-glow z-10 group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="w-5 h-5 text-sand" />
            </div>

            {/* Content Card */}
            <div className="pl-12 rtl:pl-0 rtl:pr-12 sm:pl-0 sm:rtl:pr-0 w-full sm:w-[calc(50%-2rem)]">
              <div className="bg-charcoal-850/80 backdrop-blur border border-sand/20 rounded-xl p-6 shadow-card hover:border-sand/40 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase bg-charcoal-900 px-2.5 py-1 rounded border border-sand/25">
                    {lang === "ar" ? `المرحلة ${stage.step}` : `STAGE ${stage.step}`}
                  </span>
                  <span className="text-xs text-muted font-medium">
                    {lang === "ar" ? stage.subtitleAr : stage.subtitleEn}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-ivory mb-2 group-hover:text-sand transition-colors">
                  {lang === "ar" ? stage.titleAr : stage.titleEn}
                </h3>

                <p className="text-sm text-ivory-dark/90 leading-relaxed">
                  {lang === "ar" ? stage.descAr : stage.descEn}
                </p>
              </div>
            </div>

            {/* Spacer for two-column desktop alternating layout */}
            <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
          </div>
        );
      })}
    </div>
  );
}

