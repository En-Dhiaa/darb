import type { Metadata, Viewport } from "next";
import { Cairo, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/layout/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#101315",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://darbmedia.com"),
  title: {
    default: "دَرْب | DARB — لا نكتفي بأن نحكي قصة شركتك. ننطلق لنعيشها.",
    template: "%s | دَرْب DARB",
  },
  description:
    "مشروع إعلامي استكشفي وتوثيقي ميداني للعلامات التجارية والسيارات والقطاع الصناعي في اليمن. بقيادة ضياء الحميري وعبدالرحمن هباش.",
  keywords: [
    "درب",
    "DARB",
    "توثيق ميداني",
    "أفلام وثائقية للشركات",
    "سيارات اليمن",
    "جيتور ناتكو",
    "سرد قصصي للعلامات التجارية",
    "ضياء الحميري",
    "عبدالرحمن هباش",
  ],
  authors: [
    { name: "ضياء عبدالرحمن الحميري" },
    { name: "عبدالرحمن علي هباش" },
  ],
  openGraph: {
    type: "website",
    locale: "ar_YE",
    alternateLocale: ["en_US"],
    url: "https://darbmedia.com",
    title: "دَرْب | DARB — We Don't Just Tell Your Story. We Go Live It.",
    description:
      "مشروع إعلامي واستكشافي ميداني يحوّل رحلات السيارات والشركات إلى سينما وثائقية واقعية.",
    siteName: "DARB | دَرْب",
  },
  twitter: {
    card: "summary_large_image",
    title: "دَرْب | DARB",
    description: "لا نكتفي بأن نحكي قصة شركتك. ننطلق لنعيشها.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-charcoal-900 text-ivory antialiased flex flex-col font-cairo">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
