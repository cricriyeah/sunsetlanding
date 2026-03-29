"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ──── TOP HEADER (Always Fixed Top) ──── */}
      <div className="fixed top-0 left-0 w-full z-[110] py-6 px-6 lg:px-8 pointer-events-none">
        {/* Optimized background transition (opacity is cheaper than gradient switching) */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-page-text/40 to-transparent transition-opacity duration-700 pointer-events-none ${isScrolled ? 'opacity-100' : 'opacity-0'}`} 
        />
        
        <div className="relative mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-color.svg"
              alt="Sunset Logo"
              width={24}
              height={24}
              className="brightness-0 invert object-contain"
            />
          </Link>

          {/* Action Button */}
          <Button href="/contacto" size="sm" className="font-montserrat shadow-2xl shadow-white/20 font-semibold h-10 px-6">
            <span className="hidden sm:inline">Agenda una visita</span>
            <span className="sm:hidden">Agendar</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* ──── BOTTOM GRADIENT (Mobile Only on Scroll) ──── */}
      <div
        className={`fixed bottom-0 left-0 w-full h-32 z-[90] pointer-events-none transition-opacity duration-700 sm:hidden bg-gradient-to-t from-page-text/40 to-transparent ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* ──── FLOATING PILL NAVBAR (Bottom Mobile / Top Desktop) ──── */}
      <motion.nav
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={{
          collapsed: {
            width: "420px",
            height: "44px",
            borderRadius: "99px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(0, 0, 0, 0.05)",
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
              backgroundColor: { delay: 0.2, duration: 0.4 },
              borderColor: { delay: 0.2, duration: 0.4 }
            }
          },
          expanded: {
            width: "800px",
            height: "60vh",
            borderRadius: "24px",
            backgroundColor: "rgba(44, 26, 14, 0.45)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            y: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 28,
              mass: 1,
              backgroundColor: { duration: 0.4 },
              borderColor: { duration: 0.4 }
            }
          }
        }}
        style={{ willChange: "transform, width, height, opacity" }} // Hardware Acceleration
        className={`fixed z-[150] left-1/2 -translate-x-1/2 backdrop-blur-3xl border flex flex-col shadow-2xl overflow-hidden max-w-[calc(100vw-48px)] bottom-6 sm:bottom-auto sm:top-[20px] origin-bottom sm:origin-top`}
      >
        {/* Navbar Links Row (Always visible) */}
        <div className="flex w-full items-center p-1 shrink-0 h-[44px] relative justify-center">
          <motion.div
            layout
            className="flex items-center space-x-1"
          >
            <button
              className={`flex items-center gap-1.5 font-montserrat rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition-all cursor-pointer ${isExpanded ? 'bg-white/10 text-white shadow-inner' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>Proyectos</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            <Link
              href="/"
              className="font-montserrat rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-white/10 cursor-pointer"
              onClick={() => setIsExpanded(false)}
            >
              Inicio
            </Link>
            <Link
              href="/financiamiento"
              className="font-montserrat rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-white/10 cursor-pointer"
              onClick={() => setIsExpanded(false)}
            >
              Crédito
            </Link>
            <Link
              href="/nosotros"
              className="font-montserrat rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-white/10 cursor-pointer"
              onClick={() => setIsExpanded(false)}
            >
              Nosotros
            </Link>
          </motion.div>

          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0, transition: { delay: 0.25, duration: 0.4 } }}
              exit={{ opacity: 0, filter: "blur(5px)", y: 10, transition: { duration: 0.2 } }}
              className="flex-1 w-full p-4 sm:px-6 sm:py-8 overflow-y-auto subtle-scrollbar"
            >
              <h2 className="text-1xl font-literata text-white italic font-light tracking-wide mb-6 sm:mb-8 text-left">
                Nuestros Proyectos
              </h2>
              <div className="flex flex-col gap-6 pb-8">
                {/* Project 1 */}
                <Link href="/proyectos/sunset-condominios" onClick={() => setIsExpanded(false)} className="group flex flex-col sm:flex-row items-stretch bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 rounded-2xl border border-transparent hover:border-white/10 overflow-hidden min-h-[110px]">
                  <div className="w-full sm:w-[180px] shrink-0 bg-black/20 overflow-hidden relative min-h-[140px] sm:min-h-[auto]">
                    <Image src="/herocondo3.png" alt="Sunset Condominios" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center text-center sm:text-left py-4 px-6">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-literata text-white">Sunset Condominios</h3>
                      <span className="px-2 py-0.5 rounded-full bg-sc-contrast/80 text-white font-montserrat font-light text-[9px] tracking-widest uppercase border border-white/10">
                        Preventa
                      </span>
                    </div>
                    <p className="text-white font-montserrat font-light text-sm leading-relaxed">
                      La cúspide del confort junto al mar. Espacios pensados para fluir con la brisa.
                    </p>
                  </div>
                </Link>

                {/* Project 2 */}
                <Link href="/proyectos/casas-sur" onClick={() => setIsExpanded(false)} className="group flex flex-col sm:flex-row items-stretch bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 rounded-2xl border border-transparent hover:border-white/10 overflow-hidden min-h-[110px]">
                  <div className="w-full sm:w-[180px] shrink-0 bg-black/20 overflow-hidden relative min-h-[140px] sm:min-h-[auto]">
                    <Image src="/casasur/hero.png" alt="Casas Sur" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center text-center sm:text-left py-4 px-6">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-literata text-white">Casas Sur</h3>
                      <span className="px-2 py-0.5 rounded-full bg-brand-orange text-white font-montserrat font-bold text-[9px] tracking-widest uppercase border border-white/10">
                        Empieza con $10,000 MXN
                      </span>
                    </div>
                    <p className="text-white font-montserrat font-light text-sm leading-relaxed">
                      Vivienda modular de diseño industrial lista en 30 días. Tu hogar, rápido y accesible.
                    </p>
                  </div>
                </Link>

                {/* Project 3 */}
                <Link href="/proyectos/residencia-armok" onClick={() => setIsExpanded(false)} className="group flex flex-col sm:flex-row items-stretch bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 rounded-2xl border border-transparent hover:border-white/10 overflow-hidden min-h-[110px]">
                  <div className="w-full sm:w-[180px] shrink-0 bg-black/20 overflow-hidden relative min-h-[140px] sm:min-h-[auto]">
                    <Image src="/amrok/hero1.png" alt="Residencia Armok" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center text-center sm:text-left py-4 px-6">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-literata text-white">Residencia Armok</h3>
                      <span className="px-2 py-0.5 rounded-full bg-white/20 text-white font-montserrat font-light text-[9px] tracking-widest uppercase border border-white/20">
                        Obra Entregada
                      </span>
                    </div>
                    <p className="text-white font-montserrat font-light text-sm leading-relaxed">
                      Brutalismo y descanso en el desierto. Una pieza única de arquitectura de autor.
                    </p>
                  </div>
                </Link>

                {/* Project 4 */}
                <Link href="/proyectos/residencia-quintard" onClick={() => setIsExpanded(false)} className="group flex flex-col sm:flex-row items-stretch bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 rounded-2xl border border-transparent hover:border-white/10 overflow-hidden min-h-[110px]">
                  <div className="w-full sm:w-[180px] shrink-0 bg-black/20 overflow-hidden relative min-h-[140px] sm:min-h-[auto]">
                    <Image src="/quintard.png" alt="Residencia Quintard" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center text-center sm:text-left py-4 px-6">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-literata text-white">Residencia Quintard</h3>
                      <span className="px-2 py-0.5 rounded-full bg-white/20 text-white font-montserrat font-light text-[9px] tracking-widest uppercase border border-white/20">
                        Obra Entregada
                      </span>
                    </div>
                    <p className="text-white font-montserrat font-light text-sm leading-relaxed">
                      Diálogo entre la piedra y el horizonte de La Baja. Un refugio contemporáneo en El Centenario.
                    </p>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
