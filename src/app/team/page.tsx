"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageContext";
import { siteConfig } from "@/config/site";
import { Users, Camera, Navigation, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export default function TeamPage() {
  const { lang, t, isRtl } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-sand/30 shadow-glow">
          <Users className="w-4 h-4 text-sand" />
          <span className="text-xs font-mono font-bold tracking-widest text-sand uppercase">
            {lang === "ar" ? "فريق عمل درب التأسيسي" : "THE DARB FOUNDING TEAM"}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-ivory leading-tight">
          {lang === "ar"
            ? "تكامل بين عدسة الرؤية البصرية والتحكم الميداني بالطريق"
            : "Where Cinema Vision Meets Expedition Mastery"}
        </h1>

        <p className="text-base sm:text-lg text-ivory-dark max-w-3xl mx-auto leading-relaxed">
          {lang === "ar"
            ? "يقوم مشروع درب على قيادة مشتركة تجمع بين الإخراج البصري والتصوير الفوتوغرافي المتقدم، وبين القيادة الاحترافية وتخطيط المسارات الآمنة."
            : "DARB operates on a foundational synergy uniting advanced documentary cinematography with professional driving and precision route navigation."}
        </p>
      </div>

      {/* Team Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {siteConfig.team.map((member, idx) => (
          <div
            key={idx}
            className="bg-charcoal-850/90 border border-sand/25 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-sand/45 hover:shadow-glow transition-all duration-300 space-y-8"
          >
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-charcoal-900 border-2 border-sand/40 flex-shrink-0 shadow-card">
                  <Image
                    src={idx === 0 ? "/images/team-dhiaa.webp" : "/images/team-abdulrahman.svg"}
                    alt={lang === "ar" ? member.nameAr : member.nameEn}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-charcoal-900 border border-sand/20 flex items-center justify-center text-sand mb-2">
                    {idx === 0 ? <Camera className="w-4 h-4" /> : <Navigation className="w-4 h-4" />}
                  </div>
                  <h3 className="text-2xl font-bold text-ivory">
                    {lang === "ar" ? member.nameAr : member.nameEn}
                  </h3>
                  <div className="text-sm font-semibold text-sand">
                    {lang === "ar" ? member.roleAr : member.roleEn}
                  </div>
                  <span className="text-[10px] text-muted font-mono tracking-wider block">
                    {idx === 0 ? "LEAD DIRECTOR & VISUAL ASSETS" : "FIELD LOGISTICS & EXPEDITION SAFETY"}
                  </span>
                </div>
              </div>

              <p className="text-sm text-ivory-dark leading-relaxed">
                {lang === "ar" ? member.bioAr : member.bioEn}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-charcoal-700/60">
              <span className="text-xs font-mono font-bold text-sand uppercase block">
                {lang === "ar" ? "مجالات التخصص والمسؤولية:" : "CORE DISCIPLINES:"}
              </span>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-charcoal-900 border border-sand/20 text-ivory font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Assurance */}
      <div className="p-6 rounded-2xl bg-charcoal-850/60 border border-sand/20 text-xs sm:text-sm text-muted leading-relaxed flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-sand flex-shrink-0 mt-0.5" />
        <p>
          {lang === "ar"
            ? "نلتزم في درب بأعلى معايير النزاهة والمصداقية المهنية. لا ندعي اعتمادات وهمية أو جوائز مصطنعة؛ التزامنا يتركز في جودة العمل الميداني الفعلي والأثر الملموس الذي يلمسه الشريك والجمهور."
            : "We adhere strictly to transparency and authentic capabilities. We present verified qualifications without exaggerated claims, letting on-location rigor and master-grade output speak for themselves."}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sand text-charcoal-950 font-bold text-sm hover:bg-sand-light transition-all shadow-card hover:shadow-glow"
        >
          <span>{lang === "ar" ? "تواصل مباشرة مع فريق القيادة" : "Connect With Team Leadership"}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
