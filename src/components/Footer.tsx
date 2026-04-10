import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { l } = useLanguage();
  return (
    <footer className="bg-page-text text-page-bg py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16">
        
        {/* BRAND & DESC */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <Image src="/logo-color.svg" alt="Sunset Logo" width={32} height={32} className="opacity-90 brightness-0 invert object-contain" />
            <span className="font-montserrat text-xl sm:text-2xl font-medium text-page-bg lowercase">sunset</span>
          </div>
          <p className="text-page-bg font-montserrat font-light text-sm leading-relaxed mb-6">
            {l(
              "Construyendo el futuro inmobiliario de La Baja, combinando arquitectura de autor con un profundo respeto por el entorno natural.",
              "Building the real estate future of La Baja, combining signature architecture with a profound respect for the natural environment."
            )}
          </p>
        </div>

        {/* EXPLORAR */}
        <div>
          <h4 className="font-montserrat text-sm font-semibold text-page-bg mb-8 uppercase tracking-wider">{l("Explorar", "Explore")}</h4>
          <ul className="flex flex-col gap-5 text-page-bg font-montserrat font-light text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">{l("Inicio", "Home")}</Link></li>
            <li><Link href="/nosotros" className="hover:text-white transition-colors">{l("Nosotros", "About Us")}</Link></li>
            <li><Link href="/financiamiento" className="hover:text-white transition-colors">{l("Financiamiento", "Financing")}</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition-colors">{l("Contacto", "Contact")}</Link></li>
          </ul>
        </div>

        {/* PROYECTOS */}
        <div>
          <h4 className="font-montserrat text-sm font-semibold text-page-bg mb-8 uppercase tracking-wider">{l("Proyectos", "Projects")}</h4>
          <ul className="flex flex-col gap-5 text-page-bg font-montserrat font-light text-sm">
            <li><Link href="/proyectos/sunset-condominios" className="hover:text-white transition-colors">Sunset Condominios</Link></li>
            <li><Link href="/proyectos/casas-sur" className="hover:text-white transition-colors">Casas Sur</Link></li>
            <li><Link href="/proyectos/residencia-armok" className="hover:text-white transition-colors">Residencia Armok</Link></li>
            <li><Link href="/proximamente" className="hover:text-white transition-colors">Residencia Quintard</Link></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="font-montserrat text-sm font-semibold text-page-bg mb-8 uppercase tracking-wider">{l("Contacto", "Contact")}</h4>
          <ul className="flex flex-col gap-5 text-page-bg font-montserrat font-light text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <a href="mailto:contacto@sunsetbcs.com" className="hover:text-white transition-colors">contacto@sunsetbcs.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              <a href="tel:+526122134747" className="hover:text-white transition-colors">+52 (612) 213 4747</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{l("Calle Toronja esq. Blvd. Colosio,", "Toronja St. corner Blvd. Colosio,")} <br /> {l("La Paz, B.C.S.", "La Paz, B.C.S.")}</span>
            </li>
          </ul>
        </div>

        {/* REDES */}
        <div>
          <h4 className="font-montserrat text-sm font-semibold text-page-bg mb-8 uppercase tracking-wider">{l("Síguenos", "Follow Us")}</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-page-bg/5 border border-page-bg/10 flex items-center justify-center text-page-bg hover:bg-page-bg/20 hover:text-white transition-card hover:-translate-y-1">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-page-bg/5 border border-page-bg/10 flex items-center justify-center text-page-bg hover:bg-page-bg/20 hover:text-white transition-card hover:-translate-y-1">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24 mt-24 pt-10 border-t border-page-bg/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-page-bg font-montserrat font-light text-xs">
          © {new Date().getFullYear()} Sunset Desarrolladora. {l("Todos los derechos reservados.", "All rights reserved.")}
        </p>
        <div className="flex items-center gap-4 text-page-bg font-montserrat font-light text-xs">
          <Link href="#" className="hover:text-white transition-colors">{l("Aviso de Privacidad", "Privacy Policy")}</Link>
          <Link href="#" className="hover:text-white transition-colors">{l("Términos y Condiciones", "Terms and Conditions")}</Link>
        </div>
      </div>
    </footer>
  );
}
