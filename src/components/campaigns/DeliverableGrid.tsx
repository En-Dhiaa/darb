"use client";

import React from "react";
import { useLanguage } from "../layout/LanguageContext";
import { DeliverableItem } from "@/config/campaigns";
import { Film, Video, Camera, Sparkles, UserCheck, BarChart3 } from "lucide-react";

interface DeliverableGridProps {
  deliverables: DeliverableItem[];
}

export function DeliverableGrid({ deliverables }: DeliverableGridProps) {
  const { lang, t } = useLanguage();

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Film className="w-5 h-5 text-sand" />;
      case 1:
        return <Video className="w-5 h-5 text-sand" />;
      case 2:
        return <Camera className="w-5 h-5 text-sand" />;
      case 3:
        return <Sparkles className="w-5 h-5 text-sand" />;
      case 4:
        return <UserCheck className="w-5 h-5 text-sand" />;
      default:
        return <BarChart3 className="w-5 h-5 text-sand" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deliverables.map((item, idx) => (
          <div
            key={idx}
            className="bg-charcoal-850/70 border border-sand/20 rounded-xl p-6 flex flex-col justify-between hover:border-sand/40 hover:bg-charcoal-800/80 transition-all duration-300 shadow-card"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-charcoal-900 border border-sand/30 flex items-center justify-center">
                  {getIcon(idx)}
                </div>
                <span className="text-xs font-mono text-sand/80 bg-charcoal-900 px-2 py-0.5 rounded border border-sand/15">
                  {lang === "ar" ? item.qtyEstimateAr : item.qtyEstimateEn}
                </span>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-ivory">
                  {lang === "ar" ? item.nameAr : item.nameEn}
                </h4>
                <p className="text-xs text-ivory-dark/80 leading-relaxed">
                  {lang === "ar" ? item.descAr : item.descEn}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-charcoal-700/50 flex items-center justify-between text-[11px] text-muted">
              <span>{lang === "ar" ? "تسليم بجودة 4K / RAW" : "4K Master Delivery"}</span>
              <span className="font-mono">#{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Package Disclaimer */}
      <div className="p-4 rounded-lg bg-charcoal-900/60 border border-sand/15 text-xs text-muted leading-relaxed">
        <span className="font-semibold text-sand">
          {lang === "ar" ? "ملاحظة توضيحية:" : "Illustrative Package Note:"}{" "}
        </span>
        {lang === "ar"
          ? "تُعد هذه القائمة حزمة مقترحة للاسترشاد بها. يتم الاتفاق على الكميات النهائية، صيغ التسليم، جدول الإنتاج، جولات التعديل، قنوات النشر، وحقوق ترخيص المحتوى بالتنسيق المباشر مع الشريك التجاري."
          : "This deliverables package is illustrative. Final quantities, delivery codecs, production schedules, revision rounds, distribution channels, and commercial usage rights are customized and formally approved with the sponsor."}
      </div>
    </div>
  );
}
