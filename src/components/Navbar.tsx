"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false); // For Desktop Pill
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For Mobile Overlay
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // For Mobile Projects Submenu
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const projects = [
    { name: "Sunset Condominios", href: "/proyectos/sunset-condominios" },
    { name: "Casas Sur", href: "/proyectos/casas-sur" },
    { name: "Residencia Armok", href: "/proyectos/residencia-armok" },
    { name: "Residencia Quintard", href: "/proyectos/residencia-quintard" },
  ];

  const mainLinks = [
    { name: "Inicio", href: "/" },
    { name: "Crédito", href: "/financiamiento" },
    { name: "Nosotros", href: "/nosotros" },
  ];

  return (
    <>
      {/* ──── TOP HEADER (Always Fixed Top) ──── */}
      <div className="fixed top-0 left-0 w-full z-[110] py-4 sm:py-6 px-4 sm:px-6 lg:px-8 pointer-events-none">
        {/* Background gradient on scroll */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-page-text/50 to-transparent transition-opacity duration-700 pointer-events-none ${isScrolled ? 'opacity-100' : 'opacity-0'}`} 
        />
        
        <div className="relative mx-auto max-w-7xl grid grid-cols-3 items-center pointer-events-auto sm:flex sm:justify-between">
          
          {/* Mobile "Menu" Pill - Left Column */}
          <div className="flex justify-start sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center gap-2 h-9 px-5 rounded-full font-montserrat text-sm font-medium tracking-wide text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <Menu className="w-3.5 h-3.5 opacity-80" />
              <span>Menu</span>
            </button>
          </div>




          {/* Logo - Center Column on mobile, Left on desktop */}
          <div className="flex justify-center sm:justify-start sm:flex-1">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo-color.svg"
                alt="Sunset Logo"
                width={24}
                height={24}
                className="brightness-0 invert object-contain sm:w-6 sm:h-6"
              />
            </Link>
          </div>

          {/* Action Button - Right Column */}
          <div className="flex justify-end sm:flex-initial">
            <Button href="/contacto" size="sm" className="font-montserrat shadow-2xl shadow-white/20 font-semibold h-9 sm:h-10 px-4 sm:px-6 shrink-0">
              <span className="hidden sm:inline">Agenda una visita</span>
              <span className="sm:hidden">Agendar</span>
              <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>


      </div>

      {/* ──── MOBILE MENU OVERLAY ──── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] sm:hidden"
          >
            {/* Backdrop Dimming Effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            />

            {/* Content Container */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute inset-y-0 right-0 w-full bg-page-bg/10 backdrop-blur-3xl border-l border-white/10 flex flex-col p-8 pt-24 overflow-y-auto subtle-scrollbar"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <nav className="flex flex-col gap-8">
                {/* Home Link */}
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-literata text-2xl text-white font-light hover:text-brand-orange transition-colors"
                >
                  Inicio
                </Link>

                {/* Projects Expandable */}
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    className="flex items-center justify-between w-full font-literata text-2xl text-white font-light hover:text-brand-orange transition-colors text-left"
                  >
                    <span>Proyectos</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isProjectsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isProjectsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-4 pl-0 mt-4 pb-4"
                      >
                        <ProjectCard 
                          href="/proyectos/sunset-condominios" 
                          img="/herocondo3.png" 
                          title="Sunset Condominios" 
                          tag="Preventa" 
                          desc="La cúspide del confort junto al mar. Espacios pensados para fluir con la brisa."
                          onClose={() => setIsMobileMenuOpen(false)}
                        />
                        <ProjectCard 
                          href="/proyectos/casas-sur" 
                          img="/casasur/hero.png" 
                          title="Casas Sur" 
                          tag="Empieza con $10,000 MXN" 
                          desc="Vivienda modular de diseño industrial lista en 30 días. Tu hogar, rápido y accesible."
                          onClose={() => setIsMobileMenuOpen(false)}
                        />
                        <ProjectCard 
                          href="/proyectos/residencia-armok" 
                          img="/amrok/hero1.png" 
                          title="Residencia Armok" 
                          tag="Obra Entregada" 
                          desc="Brutalismo y descanso en el desierto. Una pieza única de arquitectura de autor."
                          onClose={() => setIsMobileMenuOpen(false)}
                        />
                        <ProjectCard 
                          href="/proyectos/residencia-quintard" 
                          img="/quintard.png" 
                          title="Residencia Quintard" 
                          tag="Obra Entregada" 
                          desc="Diálogo entre la piedra y el horizonte de La Baja. Un refugio contemporáneo en El Centenario."
                          onClose={() => setIsMobileMenuOpen(false)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Other standard links */}
                <Link 
                  href="/financiamiento" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-literata text-2xl text-white font-light hover:text-brand-orange transition-colors"
                >
                  Crédito
                </Link>
                <Link 
                  href="/nosotros" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-literata text-2xl text-white font-light hover:text-brand-orange transition-colors"
                >
                  Nosotros
                </Link>
              </nav>

              <div className="mt-auto pt-10 border-t border-white/10">
                <Button href="/contacto" className="w-full justify-between h-14 text-base font-medium">
                  Agenda una visita
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
      
      {/* ──── FLOATING PILL NAVBAR (Desktop Only) ──── */}
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
              type: "spring", stiffness: 300, damping: 30, mass: 1,
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
              type: "spring", stiffness: 260, damping: 28, mass: 1,
              backgroundColor: { duration: 0.4 },
              borderColor: { duration: 0.4 }
            }
          }
        }}
        className={`hidden sm:flex fixed z-[150] left-1/2 -translate-x-1/2 backdrop-blur-3xl border flex flex-col shadow-2xl overflow-hidden max-w-[calc(100vw-48px)] top-[20px] origin-top`}
      >
        {/* Navbar Links Row (Always visible) */}
        <div className="flex w-full items-center p-1 shrink-0 h-[44px] relative justify-center">
          <div className="flex items-center space-x-1">
            <button
              className={`flex items-center gap-1.5 font-montserrat rounded-full px-3 py-1.5 text-sm font-medium transition-all cursor-pointer ${isExpanded ? 'bg-white/10 text-white shadow-inner' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>Proyectos</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            {mainLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-montserrat rounded-full px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

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
              className="flex-1 w-full p-4 px-6 py-8 overflow-y-auto subtle-scrollbar"
            >
              <h2 className="text-1xl font-literata text-white italic font-light tracking-wide mb-8 text-left">
                Nuestros Proyectos
              </h2>
              <div className="flex flex-col gap-6 pb-8">
                {/* List of projects cards (existing logic but slightly cleaner) */}
                <ProjectCard 
                  href="/proyectos/sunset-condominios" 
                  img="/herocondo3.png" 
                  title="Sunset Condominios" 
                  tag="Preventa" 
                  desc="La cúspide del confort junto al mar. Espacios pensados para fluir con la brisa."
                  onClose={() => setIsExpanded(false)}
                />
                <ProjectCard 
                  href="/proyectos/casas-sur" 
                  img="/casasur/hero.png" 
                  title="Casas Sur" 
                  tag="Empieza con $10,000 MXN" 
                  desc="Vivienda modular de diseño industrial lista en 30 días. Tu hogar, rápido y accesible."
                  onClose={() => setIsExpanded(false)}
                />
                <ProjectCard 
                  href="/proyectos/residencia-armok" 
                  img="/amrok/hero1.png" 
                  title="Residencia Armok" 
                  tag="Obra Entregada" 
                  desc="Brutalismo y descanso en el desierto. Una pieza única de arquitectura de autor."
                  onClose={() => setIsExpanded(false)}
                />
                <ProjectCard 
                  href="/proyectos/residencia-quintard" 
                  img="/quintard.png" 
                  title="Residencia Quintard" 
                  tag="Obra Entregada" 
                  desc="Diálogo entre la piedra y el horizonte de La Baja. Un refugio contemporáneo en El Centenario."
                  onClose={() => setIsExpanded(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

// Helper component for cleaner code
function ProjectCard({ href, img, title, tag, desc, onClose }: { href: string; img: string; title: string; tag: string; desc: string; onClose: () => void }) {
  return (
    <Link href={href} onClick={onClose} className="group flex flex-col sm:flex-row items-stretch bg-white/5 hover:bg-white/10 transition-card duration-300 hover:-translate-y-1 rounded-2xl border border-white/10 overflow-hidden min-h-[140px]">
      <div className="w-full sm:w-[180px] h-40 sm:h-auto shrink-0 bg-black/20 overflow-hidden relative">
        <Image src={img} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-sc-contrast/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex-1 flex flex-col justify-center text-left py-4 px-6">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h3 className="text-lg sm:text-xl font-literata text-white">{title}</h3>
          <span className="px-2 py-0.5 rounded-full bg-sc-contrast/80 text-white font-montserrat font-light text-[9px] tracking-widest uppercase border border-white/10 whitespace-nowrap">
            {tag}
          </span>
        </div>
        <p className="text-white/70 font-montserrat font-light text-xs sm:text-sm leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}


