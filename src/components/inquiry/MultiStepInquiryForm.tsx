"use client";

import React, { useState } from "react";
import { useLanguage } from "../layout/LanguageContext";
import { siteConfig } from "@/config/site";
import { partnershipModels } from "@/config/partners";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Send,
  MessageSquare,
  Mail,
  AlertTriangle,
  Building2,
  User,
  Sliders,
  FileCheck,
} from "lucide-react";

interface FormData {
  companyName: string;
  industry: string;
  contactName: string;
  jobTitle: string;
  email: string;
  phoneWhatsApp: string;
  campaignSelection: string;
  partnershipModel: string;
  preferredRegions: string;
  campaignPeriod: string;
  objectives: string;
  contentFormats: string[];
  vehicleSupport: string;
  fuelSupport: string;
  equipmentSupport: string;
  accommodationSupport: string;
  additionalDetails: string;
}

export function MultiStepInquiryForm({ initialCampaign }: { initialCampaign?: string }) {
  const { lang, t, isRtl } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    industry: "",
    contactName: "",
    jobTitle: "",
    email: "",
    phoneWhatsApp: "",
    campaignSelection: initialCampaign || "natco-jetour",
    partnershipModel: "pilot-journey",
    preferredRegions: "",
    campaignPeriod: "",
    objectives: "",
    contentFormats: ["4K Master Film", "Short-Form Reels", "High-Res Photography"],
    vehicleSupport: "under-discussion",
    fuelSupport: "under-discussion",
    equipmentSupport: "not-needed",
    accommodationSupport: "under-discussion",
    additionalDetails: "",
  });

  const handleChange = (
    field: keyof FormData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage("");
  };

  const handleFormatToggle = (format: string) => {
    const exists = formData.contentFormats.includes(format);
    const updated = exists
      ? formData.contentFormats.filter((f) => f !== format)
      : [...formData.contentFormats, format];
    handleChange("contentFormats", updated);
  };

  const validateStep = (step: number) => {
    if (step === 1) {
      if (!formData.companyName.trim() || !formData.contactName.trim() || !formData.email.trim() || !formData.phoneWhatsApp.trim()) {
        setErrorMessage(t.form.validationError);
        return false;
      }
    }
    setErrorMessage("");
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrorMessage("");
  };

  // Compile formatted inquiry text for WhatsApp transmission
  const generateMessageText = () => {
    const text = `*طلب مناقشة شراكة مشروع دَرْب (DARB)*
-----------------------------------
*الشركة:* ${formData.companyName}
*القطاع:* ${formData.industry || "غير محدد"}
*المسؤول:* ${formData.contactName} (${formData.jobTitle || "مسؤول التواصل"})
*البريد الإلكتروني:* ${formData.email}
*الهاتف / واتساب:* ${formData.phoneWhatsApp}

*الحملة المقترحة:* ${formData.campaignSelection}
*نموذج الشراكة المفضل:* ${formData.partnershipModel}
*المسارات / المناطق المستهدفة:* ${formData.preferredRegions || "حسب التنسيق المشترك"}
*الفترة المرغوبة:* ${formData.campaignPeriod || "يحدد لاحقاً"}
*الأهداف:* ${formData.objectives || "استكشاف فكرة الحملة وبحث الشراكة"}

*تنسيقات المحتوى:* ${formData.contentFormats.join(", ")}
*دعم المركبة:* ${formData.vehicleSupport}
*دعم الوقود / الشحن:* ${formData.fuelSupport}
*تفاصيل إضافية:* ${formData.additionalDetails || "لا توجد ملاحظات إضافية"}
-----------------------------------
(تم الإرسال عبر البوابة الرسمية لمشروع درب)`;
    return encodeURIComponent(text);
  };

  // Direct WhatsApp transmission
  const handleSendWhatsApp = () => {
    const rawNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
    const msg = generateMessageText();
    const url = `https://wa.me/${rawNumber}?text=${msg}`;
    window.open(url, "_blank");
  };

  // Direct Mailto fallback
  const handleSendEmail = () => {
    const subject = encodeURIComponent(`DARB Partnership Inquiry - ${formData.companyName}`);
    const body = decodeURIComponent(generateMessageText());
    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="bg-charcoal-900 border border-sand/25 rounded-2xl p-6 sm:p-10 shadow-cinematic text-ivory">
      {/* Header & Step Tracker */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-charcoal-700/60 pb-6">
          <div>
            <span className="text-xs font-mono text-sand uppercase tracking-wider">
              DARB PARTNERSHIP INQUIRY
            </span>
            <h2 className="text-2xl font-bold text-ivory mt-1">{t.form.title}</h2>
            <p className="text-xs sm:text-sm text-ivory-dark mt-1">{t.form.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === currentStep
                    ? "bg-sand text-charcoal-950 font-bold shadow-glow"
                    : step < currentStep
                    ? "bg-olive text-ivory"
                    : "bg-charcoal-800 text-muted border border-charcoal-700"
                }`}
              >
                {step < currentStep ? <CheckCircle2 className="w-4 h-4" /> : step}
              </div>
            ))}
          </div>
        </div>

        {/* Step Indicator Header */}
        <div className="flex items-center gap-2 text-sm font-semibold text-sand">
          {currentStep === 1 && <Building2 className="w-4 h-4" />}
          {currentStep === 2 && <Sliders className="w-4 h-4" />}
          {currentStep === 3 && <User className="w-4 h-4" />}
          {currentStep === 4 && <FileCheck className="w-4 h-4" />}
          <span>
            {currentStep === 1 && t.form.step1Title}
            {currentStep === 2 && t.form.step2Title}
            {currentStep === 3 && t.form.step3Title}
            {currentStep === 4 && t.form.step4Title}
          </span>
        </div>
      </div>

      {/* Error Message Notice */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-lg bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* STEP 1: Company & Contact Information */}
      {currentStep === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-ivory-dark mb-2">
              {t.form.companyName}
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              placeholder={lang === "ar" ? "مثال: شركة ناتكو للسيارات" : "e.g. NATCO Automotive"}
              className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-ivory-dark mb-2">
              {t.form.industry}
            </label>
            <input
              type="text"
              required
              value={formData.industry}
              onChange={(e) => handleChange("industry", e.target.value)}
              placeholder={lang === "ar" ? "مثال: تجارة السيارات والمركبات" : "e.g. Automotive & Mobility"}
              className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-ivory-dark mb-2">
              {t.form.contactName}
            </label>
            <input
              type="text"
              required
              value={formData.contactName}
              onChange={(e) => handleChange("contactName", e.target.value)}
              placeholder={lang === "ar" ? "الاسم الثلاثي للمسؤول" : "Full Name"}
              className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-ivory-dark mb-2">
              {t.form.jobTitle}
            </label>
            <input
              type="text"
              required
              value={formData.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
              placeholder={lang === "ar" ? "مثال: مدير التسويق / مدير العلاقات" : "e.g. Marketing Director"}
              className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-ivory-dark mb-2">
              {t.form.email}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="contact@company.com"
              className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-ivory-dark mb-2">
              {t.form.phoneWhatsApp}
            </label>
            <input
              type="tel"
              required
              value={formData.phoneWhatsApp}
              onChange={(e) => handleChange("phoneWhatsApp", e.target.value)}
              placeholder="+967 7X XXX XXXX"
              className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
            />
          </div>
        </div>
      )}

      {/* STEP 2: Scope & Partnership Model */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-ivory-dark mb-2">
                {t.form.campaignSelection}
              </label>
              <select
                value={formData.campaignSelection}
                onChange={(e) => handleChange("campaignSelection", e.target.value)}
                className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
              >
                <option value="natco-jetour">
                  {lang === "ar"
                    ? "ناتكو × جيتور (جيتور على الطريق)"
                    : "NATCO Automotive × JETOUR (Beyond the Road)"}
                </option>
                <option value="from-factory-to-people">
                  {lang === "ar"
                    ? "من المصنع إلى الناس (للقطاع الصناعي والاستهلاكي)"
                    : "FROM FACTORY TO PEOPLE (Manufacturing & FMCG)"}
                </option>
                <option value="custom-brand-journey">
                  {lang === "ar"
                    ? "تصور رحلة استكشافية مخصصة للعلامة"
                    : "Bespoke Custom Brand Expedition"}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-ivory-dark mb-2">
                {t.form.partnershipModel}
              </label>
              <select
                value={formData.partnershipModel}
                onChange={(e) => handleChange("partnershipModel", e.target.value)}
                className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
              >
                {partnershipModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {lang === "ar" ? model.titleAr : model.titleEn}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-ivory-dark mb-2">
                {t.form.preferredRegions}
              </label>
              <input
                type="text"
                value={formData.preferredRegions}
                onChange={(e) => handleChange("preferredRegions", e.target.value)}
                placeholder={lang === "ar" ? "مثال: خط صنعاء - تعز، عدن، حضرموت..." : "e.g. Sana'a, Aden, Taiz, Coastal highway..."}
                className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-ivory-dark mb-2">
                {t.form.campaignPeriod}
              </label>
              <input
                type="text"
                value={formData.campaignPeriod}
                onChange={(e) => handleChange("campaignPeriod", e.target.value)}
                placeholder={lang === "ar" ? "مثال: خلال الربع القادم / شهر محدد" : "e.g. Upcoming quarter / specific month"}
                className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-ivory-dark mb-2">
              {t.form.objectives}
            </label>
            <textarea
              rows={3}
              value={formData.objectives}
              onChange={(e) => handleChange("objectives", e.target.value)}
              placeholder={
                lang === "ar"
                  ? "ما هي الرسالة أو النتيجة التسويقية الرئيسية التي ترغب شركتكم في تحقيقها من خلال هذه الرحلة؟"
                  : "What key commercial or brand storytelling message do you wish to communicate through this expedition?"
              }
              className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
            />
          </div>
        </div>
      )}

      {/* STEP 3: Content Formats & Operational Support */}
      {currentStep === 3 && (
        <div className="space-y-6">
          {/* Desired Content Formats */}
          <div>
            <label className="block text-xs font-medium text-ivory-dark mb-3">
              {t.form.contentFormats}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { ar: "فيلم وثائقي رئيسي (4K)", en: "4K Master Documentary Film" },
                { ar: "حزمة مقاطع قصيرة عمودية (Reels)", en: "Short-Form Vertical Reels" },
                { ar: "مكتبة صور فوتوغرافية تحريرية", en: "High-Res Photography Library" },
                { ar: "كواليس ومشاهد ميدانية (BTS)", en: "Behind-The-Scenes Vignettes" },
                { ar: "مقابلة تعريفية مع مسؤولي الشركة", en: "Corporate Executive Feature" },
                { ar: "تقرير أداء وتحليل التفاعل", en: "Post-Campaign Analytics Summary" },
              ].map((fmt, i) => {
                const isSelected = formData.contentFormats.includes(fmt.en);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleFormatToggle(fmt.en)}
                    className={`p-3 rounded-lg border text-xs text-start transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-olive/40 border-sand text-ivory"
                        : "bg-charcoal-850 border-sand/15 text-muted hover:border-sand/30 hover:text-ivory"
                    }`}
                  >
                    <span>{lang === "ar" ? fmt.ar : fmt.en}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-sand flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Support Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-charcoal-700/60">
            <div>
              <label className="block text-xs font-medium text-ivory-dark mb-2">
                {t.form.vehicleSupport}
              </label>
              <select
                value={formData.vehicleSupport}
                onChange={(e) => handleChange("vehicleSupport", e.target.value)}
                className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
              >
                <option value="partner-provided">
                  {lang === "ar" ? "نعم، الشركة ستوفر المركبة للرحلة" : "Yes, company will supply the vehicle"}
                </option>
                <option value="under-discussion">
                  {lang === "ar" ? "قيد المناقشة والتحديد" : "To be discussed"}
                </option>
                <option value="not-applicable">
                  {lang === "ar" ? "غير مطلوب للمشروع" : "Not applicable"}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-ivory-dark mb-2">
                {t.form.fuelSupport}
              </label>
              <select
                value={formData.fuelSupport}
                onChange={(e) => handleChange("fuelSupport", e.target.value)}
                className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
              >
                <option value="covered-by-sponsor">
                  {lang === "ar" ? "نعم، سيتم تغطية الوقود أو الشحن" : "Yes, fuel or charging covered"}
                </option>
                <option value="under-discussion">
                  {lang === "ar" ? "قيد المناقشة في العرض المالي" : "To be included in financial scope"}
                </option>
                <option value="not-applicable">
                  {lang === "ar" ? "غير مطلوب" : "Not applicable"}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-ivory-dark mb-2">
              {t.form.additionalDetails}
            </label>
            <textarea
              rows={2}
              value={formData.additionalDetails}
              onChange={(e) => handleChange("additionalDetails", e.target.value)}
              placeholder={lang === "ar" ? "أي ملاحظات إضافية، متطلبات سلامة، أو تفضيلات معينة..." : "Any additional notes, safety guidelines, or operational requirements..."}
              className="w-full bg-charcoal-850 border border-sand/20 rounded-lg px-4 py-2.5 text-sm text-ivory placeholder-muted/50 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand"
            />
          </div>
        </div>
      )}

      {/* STEP 4: Review Summary & Honest Transmission */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <div className="bg-charcoal-850 rounded-xl p-6 border border-sand/25 space-y-4">
            <h3 className="text-base font-bold text-sand flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-sand" />
              <span>{t.form.reviewTitle}</span>
            </h3>
            <p className="text-xs text-muted leading-relaxed">{t.form.reviewDesc}</p>

            {/* Review Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-3 border-t border-charcoal-700">
              <div>
                <span className="text-muted block">{lang === "ar" ? "الشركة:" : "Company:"}</span>
                <span className="font-semibold text-ivory">{formData.companyName || "—"}</span>
              </div>
              <div>
                <span className="text-muted block">{lang === "ar" ? "القطاع:" : "Industry:"}</span>
                <span className="font-semibold text-ivory">{formData.industry || "—"}</span>
              </div>
              <div>
                <span className="text-muted block">{lang === "ar" ? "المسؤول:" : "Contact Person:"}</span>
                <span className="font-semibold text-ivory">{formData.contactName} ({formData.jobTitle})</span>
              </div>
              <div>
                <span className="text-muted block">{lang === "ar" ? "الهاتف / البريد:" : "Phone / Email:"}</span>
                <span className="font-semibold text-ivory">{formData.phoneWhatsApp} | {formData.email}</span>
              </div>
              <div>
                <span className="text-muted block">{lang === "ar" ? "الحملة المختارة:" : "Campaign:"}</span>
                <span className="font-semibold text-sand">{formData.campaignSelection}</span>
              </div>
              <div>
                <span className="text-muted block">{lang === "ar" ? "نموذج الشراكة:" : "Partnership Model:"}</span>
                <span className="font-semibold text-ivory">{formData.partnershipModel}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-muted block">{lang === "ar" ? "المخرجات المطلوبة:" : "Deliverables:"}</span>
                <span className="font-semibold text-ivory">{formData.contentFormats.join(" • ")}</span>
              </div>
            </div>
          </div>

          {/* Submission Channels */}
          <div className="space-y-3">
            <div className="text-xs text-muted">
              {lang === "ar"
                ? "اختر القناة المباشرة لإرسال هذا الطلب لفريق درب:"
                : "Select your direct communication channel to send this brief to the DARB team:"}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-card hover:shadow-glow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.form.submitWhatsApp}</span>
              </button>

              <button
                type="button"
                onClick={handleSendEmail}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 border border-sand/30 text-sand hover:text-ivory font-bold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>{t.form.submitEmail}</span>
              </button>
            </div>

            <div className="text-[11px] text-muted-dark text-center pt-2">
              {t.form.fallbackNotice}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Stepper Controls */}
      <div className="mt-8 pt-6 border-t border-charcoal-700/60 flex items-center justify-between">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md border border-sand/20 text-ivory hover:bg-charcoal-800 transition-colors"
          >
            {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            <span>{t.form.prevStep}</span>
          </button>
        ) : (
          <div />
        )}

        {currentStep < 4 && (
          <button
            type="button"
            onClick={nextStep}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold rounded-md bg-sand text-charcoal-950 hover:bg-sand-light transition-all shadow-card"
          >
            <span>{t.form.nextStep}</span>
            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

