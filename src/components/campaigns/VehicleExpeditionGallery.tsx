"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/layout/LanguageContext";
import { ChevronLeft, ChevronRight, Play, Pause, Camera, Compass, Maximize2, Sparkles, MapPin } from "lucide-react";

export interface GallerySlide {
  id: string;
  image: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  locationAr: string;
  locationEn: string;
  focusAr: string;
  focusEn: string;
}

export const defaultJetourSlides: GallerySlide[] = [
  {
    id: "mountain-ascent",
    image: "/images/jetour-expedition-mountain.jpg",
    titleAr: "صعود المنعطفات الجبلية العالية",
    titleEn: "High-Altitude Mountain Ascent",
    subtitleAr: "اختبار عزم الدوران، ثبات الهيكل، ومرونة الدفع الرباعي على الطرق الجبلية الملتوية في ساعات الفجر الأولى.",
    subtitleEn: "Testing low-end torque, chassis stability, and AWD response along winding limestone mountain switchbacks at dawn.",
    locationAr: "مسار المرتفعات الصخرية",
    locationEn: "Mountain Pass Waypoint",
    focusAr: "عزم الدوران والتحكم بالثبات",
    focusEn: "Torque & Electronic Stability",
  },
  {
    id: "sunset-overlook",
    image: "/images/jetour-expedition-sunset.jpg",
    titleAr: "أفق الغروب ومخيم الاستكشاف",
    titleEn: "Sunset Overlook & Field Scouting",
    subtitleAr: "توثيق انسيابية التصميم الخارجي وتفاصيل الإضاءة النهارية LED في أوقات التباين الضوئي الذهبي.",
    subtitleEn: "Showcasing aerodynamic body contours and signature daytime LED optics under dramatic sunset illumination.",
    locationAr: "إطلالة الوادي الفسيح",
    locationEn: "Valley Panorama Overlook",
    focusAr: "فخامة التصميم والإضاءة",
    focusEn: "Exterior Aesthetics & Lighting",
  },
  {
    id: "cockpit-view",
    image: "/images/jetour-cockpit-view.jpg",
    titleAr: "قمرة القيادة والملاحة الذكية الميدانية",
    titleEn: "Cockpit Ergonomics & Off-Grid Navigation",
    subtitleAr: "رؤية السائق من الداخل: شاشات رقمية متصلة، تجهيزات الراحة الفاخرة، وعزل المقصورة أثناء الرحلات الطويلة.",
    subtitleEn: "First-person driver perspective: dual digital instrumentation, acoustic insulation, and navigation across open horizons.",
    locationAr: "بيئة المقصورة الداخلية",
    locationEn: "Cabin Environment",
    focusAr: "راحة السائق والأنظمة الذكية",
    focusEn: "Ergonomics & Driver Assist",
  },
  {
    id: "canyon-pass",
    image: "/images/jetour-canyon-pass.jpg",
    titleAr: "عبور الممرات الوعرة ومسارات الوديان",
    titleEn: "Canyon Dynamics & Ground Clearance",
    subtitleAr: "توثيق قدرات خلوص المركبة عن الأرض وكفاءة نظام التعليق في التعامل مع الطرق غير المعبدة بأمان كامل.",
    subtitleEn: "Documenting practical approach angles, suspension travel, and underbody clearance across rugged canyon terrain.",
    locationAr: "مضيق الوادي الوعر",
    locationEn: "Canyon Basin Terrain",
    focusAr: "الخلوص الأرضي وامتصاص الصدمات",
    focusEn: "Ground Clearance & Damping",
  },
];

export function VehicleExpeditionGallery({
  slides = defaultJetourSlides,
}: {
  slides?: GallerySlide[];
}) {
  const { lang, isRtl } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slider
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-charcoal-700/60 pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800 border border-sand/25">
            <Camera className="w-3.5 h-3.5 text-sand animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-sand uppercase">
              {lang === "ar" ? "معرض المشاهد السينمائية المتحرك" : "DYNAMIC EXPEDITION REEL"}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-ivory">
            {lang === "ar" ? "رؤية بصرية حية لمشاهد الرحلة" : "Visual Atmosphere: The Expedition in Motion"}
          </h3>
        </div>

        {/* Playback Controls & Counter */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <span className="text-xs font-mono text-sand font-bold">
            0{currentIndex + 1} <span className="text-muted">/ 0{slides.length}</span>
          </span>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
            className="p-2 rounded-lg bg-charcoal-850 hover:bg-charcoal-800 border border-sand/20 text-sand hover:text-ivory transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="p-2 rounded-lg bg-charcoal-850 hover:bg-charcoal-800 border border-sand/20 text-ivory transition-colors"
            >
              <ChevronRight className={`w-4 h-4 ${isRtl ? "" : "rotate-180"}`} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="p-2 rounded-lg bg-charcoal-850 hover:bg-charcoal-800 border border-sand/20 text-ivory transition-colors"
            >
              <ChevronLeft className={`w-4 h-4 ${isRtl ? "" : "rotate-180"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Dynamic Viewport */}
      <div className="relative rounded-3xl overflow-hidden bg-charcoal-950 border border-sand/30 shadow-cinematic group aspect-[16/9] max-h-[580px]">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Ken-Burns Zoom/Pan Animation */}
              <div
                className={`relative w-full h-full transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-105 translate-x-1" : "scale-100 translate-x-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={lang === "ar" ? slide.titleAr : slide.titleEn}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center"
                />
              </div>

              {/* Cinematic Vignette & Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-transparent to-charcoal-950/50" />

              {/* Floating Slide Details */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 z-20 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sand text-charcoal-950 text-xs font-bold font-mono">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{lang === "ar" ? slide.focusAr : slide.focusEn}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-charcoal-900/80 backdrop-blur-md border border-sand/30 text-sand-light text-xs font-mono">
                    <MapPin className="w-3 h-3 text-sand" />
                    <span>{lang === "ar" ? slide.locationAr : slide.locationEn}</span>
                  </span>
                </div>

                <div className="space-y-1.5 max-w-3xl">
                  <h4 className="text-2xl sm:text-4xl font-extrabold text-ivory tracking-tight drop-shadow-md">
                    {lang === "ar" ? slide.titleAr : slide.titleEn}
                  </h4>
                  <p className="text-xs sm:text-base text-ivory-dark font-medium leading-relaxed drop-shadow">
                    {lang === "ar" ? slide.subtitleAr : slide.subtitleEn}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Progress Bar */}
        <div className="absolute top-0 inset-x-0 z-30 flex h-1 bg-charcoal-900/60">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className="flex-1 h-full relative overflow-hidden border-r border-charcoal-950/50"
            >
              <div
                className={`h-full bg-sand transition-all ${
                  idx === currentIndex
                    ? "w-full duration-[5000ms] ease-linear"
                    : idx < currentIndex
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Thumbnail Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {slides.map((slide, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlaying(false);
              }}
              className={`relative rounded-xl overflow-hidden text-right border transition-all duration-300 p-2 sm:p-3 flex items-center gap-3 bg-charcoal-850/80 ${
                isSelected
                  ? "border-sand shadow-glow ring-1 ring-sand/50 bg-charcoal-800"
                  : "border-sand/15 hover:border-sand/35 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-charcoal-900 border border-sand/20">
                <Image
                  src={slide.image}
                  alt={lang === "ar" ? slide.titleAr : slide.titleEn}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-0.5 min-w-0 flex-1">
                <span className="text-[10px] font-mono text-sand font-bold block">
                  0{idx + 1}
                </span>
                <p className="text-xs font-bold text-ivory truncate">
                  {lang === "ar" ? slide.titleAr : slide.titleEn}
                </p>
                <span className="text-[10px] text-muted block truncate">
                  {lang === "ar" ? slide.focusAr : slide.focusEn}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Demonstration Notice */}
      <div className="text-[11px] text-muted-dark bg-charcoal-900/50 border border-sand/15 rounded-xl p-3 flex items-center justify-between">
        <span>
          {lang === "ar"
            ? "⚠️ صور استعراضية تجريبية لمحاكاة أسلوب التصوير والتوثيق الميداني — تخضع لاختيار واعتماد الطراز والمسارات مع ناتكو."
            : "⚠️ Demonstration visual imagery illustrating field cinematography style — subject to vehicle selection and route sign-off with NATCO."}
        </span>
        <span className="font-mono text-sand font-semibold text-[10px] hidden sm:inline">
          DARB AUTOMOTIVE CINEMATOGRAPHY
        </span>
      </div>
    </div>
  );
}
