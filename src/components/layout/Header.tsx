"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import { siteConfig } from "@/config/site";
import { Compass, Menu, X, Globe, ArrowUpRight } from "lucide-react";

export function Header() {
  const { lang, toggleLang, t, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/how-it-works", label: t.nav.howItWorks },
    { href: "/campaigns", label: t.nav.campaigns },
    { href: "/partners", label: t.nav.partners },
    { href: "/team", label: t.nav.team },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-charcoal-900/90 backdrop-blur-md border-b border-sand/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sand/50 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-lg bg-charcoal-800 border border-sand/30 flex items-center justify-center text-sand group-hover:border-sand group-hover:shadow-glow transition-all duration-300">
            <Compass className="w-5 h-5 text-sand transition-transform duration-500 group-hover:rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-ivory flex items-center gap-2">
              <span>{siteConfig.name.ar}</span>
              <span className="text-xs text-sand/70 font-mono">|</span>
              <span className="text-sm tracking-widest text-sand uppercase font-semibold">
                {siteConfig.name.en}
              </span>
            </span>
            <span className="text-[10px] text-muted tracking-tight hidden sm:block">
              {lang === "ar" ? siteConfig.tagline.ar : siteConfig.tagline.en}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  active
                    ? "text-sand bg-charcoal-800 border border-sand/30"
                    : "text-ivory-muted hover:text-ivory hover:bg-charcoal-800/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Elements & Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            aria-label="Switch Language"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-sand/20 text-ivory-dark hover:text-ivory hover:border-sand/40 hover:bg-charcoal-800 transition-all duration-200"
          >
            <Globe className="w-3.5 h-3.5 text-sand" />
            <span>{t.nav.languageToggle}</span>
          </button>

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-sand text-charcoal-950 hover:bg-sand-light active:bg-sand-dark transition-all duration-200 shadow-card hover:shadow-glow group"
          >
            <span>{t.nav.discussCta}</span>
            <ArrowUpRight
              className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                isRtl ? "rotate-270" : ""
              }`}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleLang}
            aria-label="Switch Language"
            className="p-2 text-xs font-semibold rounded-md border border-sand/20 text-ivory"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-md text-ivory hover:text-sand hover:bg-charcoal-800 focus:outline-none focus:ring-2 focus:ring-sand"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-charcoal-950 border-b border-sand/20 px-4 pt-3 pb-6 space-y-3 transition-all duration-300">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    active
                      ? "text-sand bg-charcoal-800 border-r-2 border-sand"
                      : "text-ivory-muted hover:text-ivory hover:bg-charcoal-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-sand/15">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-sand text-charcoal-950 font-bold text-center shadow-card"
            >
              <span>{t.nav.discussCta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

