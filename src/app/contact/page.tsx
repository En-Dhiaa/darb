"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/layout/LanguageContext";
import { siteConfig } from "@/config/site";
import { MultiStepInquiryForm } from "@/components/inquiry/MultiStepInquiryForm";
import {
  Mail,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Building2,
  Clock,
  ArrowUpRight,
} from "lucide-react";

function ContactContent() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const campaignParam = searchParams.get("campaign") || undefined;

  const handleDirectWhatsApp = () => {
    const rawNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
    const msg = encodeURIComponent(
      `مرحباً فريق درب، نود الاستفسار ومناقشة مشروع رعاية أو إنتاج ميداني.`
    );
    window.open(`https://wa.me/${rawNumber}?text=${msg}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-sand/30 shadow-glow">
          <MessageSquare className="w-4 h-4 text-sand" />
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            DIRECT CORPORATE INQUIRY
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory leading-tight">
          {lang === "ar" ? "ناقش مشروعك أو حملتك مع فريق درب" : "Discuss Your Campaign with DARB"}
        </h1>

        <p className="text-base sm:text-lg text-ivory-dark max-w-2xl mx-auto leading-relaxed">
          {lang === "ar"
            ? "نرحب بالتواصل المباشر مع مديري التسويق، مسؤولي الشركات، ووكلاء العلامات التجارية لبحث المسارات والفرص المشتركة."
            : "We welcome direct consultation with corporate marketing directors and enterprise partners to evaluate customized field expeditions."}
        </p>
      </div>

      {/* Main Grid: Form + Direct Channels Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Multi-step Form (lg: 8 cols) */}
        <div className="lg:col-span-8">
          <MultiStepInquiryForm initialCampaign={campaignParam} />
        </div>

        {/* Sidebar Info & Direct Channels (lg: 4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Direct Channel Box */}
          <div className="bg-charcoal-850/90 border border-sand/25 rounded-2xl p-6 sm:p-8 space-y-6 shadow-card">
            <div className="space-y-2">
              <span className="text-xs font-mono text-sand uppercase tracking-wider block">
                {lang === "ar" ? "قنوات التواصل المباشر" : "DIRECT ACCESS"}
              </span>
              <h3 className="text-xl font-bold text-ivory">
                {lang === "ar" ? "تواصل فوري مع قيادة المشروع" : "Direct Leadership Channel"}
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-charcoal-900 border border-sand/15">
                <MessageSquare className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-muted block">{lang === "ar" ? "واتساب التنسيق المباشر:" : "Direct WhatsApp Desk:"}</span>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="font-bold text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>{siteConfig.contact.whatsappDisplay}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-charcoal-900 border border-sand/15">
                <Mail className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-muted block">{lang === "ar" ? "البريد الإلكتروني للشركات:" : "Corporate Inbox:"}</span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-bold text-ivory hover:text-sand hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-charcoal-900 border border-sand/15">
                <MapPin className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-muted block">{lang === "ar" ? "نطاق العمليات الميدانية:" : "Field Operational Reach:"}</span>
                  <span className="font-semibold text-ivory">
                    {lang === "ar" ? siteConfig.primaryMarket.ar : siteConfig.primaryMarket.en}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal-700/60 text-xs text-muted leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-sand inline me-1.5" />
              <span>
                {lang === "ar"
                  ? "تتم مراجعة كافة الطلبات من قبل ضياء الحميري وعبدالرحمن هباش لضمان الجدية والملاءمة التشغيلية."
                  : "All briefs are directly reviewed by Dhiaa Al-Himyari & Abdulrahman Habbash for operational viability."}
              </span>
            </div>
          </div>

          {/* Privacy & No Fixed Pricing Reminder */}
          <div className="bg-charcoal-900/80 border border-sand/20 rounded-2xl p-6 space-y-3 text-xs text-muted leading-relaxed">
            <span className="font-bold text-sand block">
              {lang === "ar" ? "سرية المعلومات والتسعير المخصص" : "Commercial Confidentiality"}
            </span>
            <p>
              {lang === "ar"
                ? "نحافظ على سرية كافة تفاصيل حملاتكم وأهدافكم، ويتم تقديم العروض الفنية والمالية بشكل خاص ومفصل بعد دراسة المسار المطلوب."
                : "All company data and proposed routes remain strictly confidential. Detailed scopes and quotes are issued following direct route assessment."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center text-sand font-mono text-sm">
          Loading DARB Inquiry Desk...
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
