"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, TranslationDictionary } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationDictionary;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ar");

  useEffect(() => {
    // Check saved preference or default to Arabic
    const saved = localStorage.getItem("darb_lang") as Language | null;
    if (saved === "en" || saved === "ar") {
      setLangState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    } else {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("darb_lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const toggleLang = () => {
    const next = lang === "ar" ? "en" : "ar";
    setLang(next);
  };

  const isRtl = lang === "ar";
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

