import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Literata } from "next/font/google";
import { Globe } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sunset-landing.example.com'), // Note: Update with actual domain
  title: {
    template: "%s | Sunset",
    default: "Sunset | Desarrollos Inmobiliarios en La Paz, BCS",
  },
  description: "Experiencia inmobiliaria de alta gama en La Paz y sus alrededores. Descubre desarrollos inteligentes, sostenibles y modernos en Baja California Sur.",
  keywords: ["bienes raíces La Paz", "desarrollo inmobiliario BCS", "casas inteligentes La Paz", "Sunset Condominios", "Casas Sur", "inversión inmobiliaria México"],
  openGraph: {
    title: "Sunset | Desarrollos Inmobiliarios en La Paz, BCS",
    description: "Experiencia inmobiliaria de alta gama en La Paz y sus alrededores. Descubre desarrollos inteligentes, sostenibles y modernos en Baja California Sur.",
    siteName: "Sunset",
    locale: "es_MX",
    type: "website",
  },
};

import { LightboxProvider } from "@/context/LightboxContext";
import { Lightbox } from "@/components/ui/Lightbox";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LanguageProvider } from "@/context/LanguageContext";
import { PageTransition } from "@/components/PageTransition";
import { CasasSurPopover } from "@/components/CasasSurPopover";
import { CasasSurBanner } from "@/components/CasasSurBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${literata.variable}`}>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <LanguageProvider>
          <LightboxProvider>
            <PageTransition>
              {children}
            </PageTransition>
            <Lightbox />
          </LightboxProvider>

          {/* Floating Language Toggler */}
          <LanguageSwitcher />

          {/* Casas Sur Promo Popover (one-time modal) */}
          <CasasSurPopover />

          {/* Casas Sur Persistent Floating Banner */}
          <CasasSurBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
