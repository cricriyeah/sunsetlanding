import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-page-text text-page-bg py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8">
        
        {/* BRAND & DESC */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo-color.svg" alt="Sunset Logo" width={32} height={32} className="opacity-90 brightness-0 invert object-contain" />
            <span className="font-montserrat text-xl sm:text-2xl font-medium text-page-bg lowercase">sunset</span>
          </div>
          <p className="text-page-bg font-montserrat font-light text-sm leading-relaxed mb-6">
            Construyendo el futuro inmobiliario de La Baja, combinando arquitectura de autor con un profundo respeto por el entorno natural.
          </p>
        </div>

        {/* EXPLORAR */}
        <div>
          <h4 className="font-montserrat text-sm font-semibold text-page-bg mb-6 uppercase tracking-wider">Explorar</h4>
          <ul className="flex flex-col gap-4 text-page-bg font-montserrat font-light text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
            <li><Link href="/financiamiento" className="hover:text-white transition-colors">Financiamiento</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* PROYECTOS */}
        <div>
          <h4 className="font-montserrat text-sm font-semibold text-page-bg mb-6 uppercase tracking-wider">Proyectos</h4>
          <ul className="flex flex-col gap-4 text-page-bg font-montserrat font-light text-sm">
            <li><Link href="/proyectos/sunset-condominios" className="hover:text-white transition-colors">Sunset Condominios</Link></li>
            <li><Link href="/proyectos/casas-sur" className="hover:text-white transition-colors">Casas Sur</Link></li>
            <li><Link href="/proyectos/residencia-armok" className="hover:text-white transition-colors">Residencia Armok</Link></li>
            <li><Link href="/proyectos/residencia-quintard" className="hover:text-white transition-colors">Residencia Quintard</Link></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="font-montserrat text-sm font-semibold text-page-bg mb-6 uppercase tracking-wider">Contacto</h4>
          <ul className="flex flex-col gap-4 text-page-bg font-montserrat font-light text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <a href="mailto:hola@sunsetlanding.mx" className="hover:text-white transition-colors">hola@sunsetlanding.mx</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              <a href="tel:+526121234567" className="hover:text-white transition-colors">+52 (612) 123 4567</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Calle Toronja esq. Blvd. Colosio, <br /> La Paz, B.C.S.</span>
            </li>
          </ul>
        </div>

        {/* REDES */}
        <div>
          <h4 className="font-montserrat text-sm font-semibold text-page-bg mb-6 uppercase tracking-wider">Síguenos</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-page-bg/5 border border-page-bg/10 flex items-center justify-center text-page-bg hover:bg-page-bg/20 hover:text-white transition-all hover:-translate-y-1">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-page-bg/5 border border-page-bg/10 flex items-center justify-center text-page-bg hover:bg-page-bg/20 hover:text-white transition-all hover:-translate-y-1">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-page-bg/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-page-bg font-montserrat font-light text-xs">
          © {new Date().getFullYear()} Sunset Desarrolladora. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4 text-page-bg font-montserrat font-light text-xs">
          <Link href="#" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
          <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
        </div>
      </div>
    </footer>
  );
}
