"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { siteConfig } from "@/config/site";
import { Compass, ShieldCheck, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const { lang, t, isRtl } = useLanguage();

  return (
    <footer className="w-full bg-charcoal-950 border-t border-sand/15 text-ivory-dark text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-charcoal-800 border border-sand/30 flex items-center justify-center text-sand">
                <Compass className="w-5 h-5 text-sand" />
              </div>
              <span className="text-xl font-bold tracking-wider text-ivory">
                {siteConfig.name.full}
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {lang === "ar" ? siteConfig.tagline.ar : siteConfig.tagline.en}
            </p>
            <p className="text-xs text-muted/80 leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-sand/90">
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? siteConfig.contact.location.ar : siteConfig.contact.location.en}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sand">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-sand transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-sand transition-colors">
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="hover:text-sand transition-colors">
                  {t.nav.campaigns}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-sand transition-colors">
                  {t.nav.partners}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-sand transition-colors">
                  {t.nav.team}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sand transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Proposed Campaigns */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sand">
              {lang === "ar" ? "الحملات المقترحة (مسودات)" : "Proposed Campaigns (Pitches)"}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/campaigns/natco-jetour"
                  className="group flex items-start gap-1.5 hover:text-sand transition-colors"
                >
                  <span className="text-sand/70">•</span>
                  <span>
                    {lang === "ar"
                      ? "ناتكو للسيارات × جيتور (على الطريق)"
                      : "NATCO Automotive × JETOUR"}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/campaigns/from-factory-to-people"
                  className="group flex items-start gap-1.5 hover:text-sand transition-colors"
                >
                  <span className="text-sand/70">•</span>
                  <span>
                    {lang === "ar"
                      ? "من المصنع إلى الناس (للقطاع الصناعي)"
                      : "FROM FACTORY TO PEOPLE"}
                  </span>
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <span className="inline-block text-[10px] text-muted-light border border-muted/30 bg-charcoal-900 px-2 py-1 rounded">
                {t.common.proposedConcept}
              </span>
            </div>
          </div>

          {/* Founding Team Direct Credit */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sand">
              {lang === "ar" ? "فريق العمل التأسيسي" : "Founding Team"}
            </h3>
            <div className="space-y-3 text-xs">
              {siteConfig.team.map((member, i) => (
                <div key={i} className="border-r-2 border-sand/40 pr-2.5 rtl:pr-2.5 ltr:border-l-2 ltr:border-r-0 ltr:pl-2.5">
                  <div className="font-semibold text-ivory">
                    {lang === "ar" ? member.nameAr : member.nameEn}
                  </div>
                  <div className="text-[11px] text-muted">
                    {lang === "ar" ? member.roleAr : member.roleEn}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand hover:underline"
              >
                <span>{t.nav.discussCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Integrity Notice */}
        <div className="pt-8 border-t border-charcoal-800 space-y-3">
          <div className="flex items-start gap-2 bg-charcoal-900/60 border border-sand/15 p-3.5 rounded-lg text-xs text-muted leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>{t.footer.governingNotice}</p>
              <p>{siteConfig.disclosures.pricingNoticeAr}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted/70 gap-2 pt-2">
            <div>{t.footer.rights}</div>
            <div>{t.footer.yemenFocus}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
