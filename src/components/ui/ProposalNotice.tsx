"use client";

import React from "react";
import { useLanguage } from "../layout/LanguageContext";
import { AlertCircle, FileText } from "lucide-react";

interface ProposalNoticeProps {
  customTextAr?: string;
  customTextEn?: string;
  variant?: "banner" | "badge" | "compact";
}

export function ProposalNotice({
  customTextAr,
  customTextEn,
  variant = "banner",
}: ProposalNoticeProps) {
  const { lang, t } = useLanguage();

  const text =
    lang === "ar"
      ? customTextAr || "تصور إبداعي مقترح — لا تمثل هذه الصفحة إعلانًا عن شراكة معتمدة أو حملة منفذة مسبقاً."
      : customTextEn || "Proposed Creative Concept — This proposal does not represent an approved partnership or completed campaign.";

  if (variant === "badge") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-olive/30 border border-sand/30 text-sand tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-sand animate-pulse" />
        {t.common.proposedConcept}
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2 text-xs text-muted-light bg-charcoal-850 px-3 py-2 rounded border border-sand/20">
        <FileText className="w-3.5 h-3.5 text-sand flex-shrink-0" />
        <span>{text}</span>
      </div>
    );
  }

  return (
    <div className="w-full bg-charcoal-850/90 border border-sand/25 rounded-lg p-3.5 sm:p-4 my-4 shadow-card">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-sand flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-ivory-dark leading-relaxed space-y-1">
          <p className="font-semibold text-sand">
            {lang === "ar" ? "إشعار العرض التحريري المقترح" : "Editorial Proposal Notice"}
          </p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

