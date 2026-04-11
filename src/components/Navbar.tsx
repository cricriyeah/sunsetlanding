"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { l } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false); // For Desktop Pill
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For Mobile Overlay
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // For Mobile Projects Submenu
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const projects = [
    {
      name: "Casas Sur",
      href: "/proyectos/casas-sur",
      img: "/casasur/hero.webp",
      tag: l("Empieza con $10,000 MXN", "Starts at $10,000 MXN"),
      desc: l(
        "Vivienda modular lista en 30 días. Tu hogar, rápido y accesible.",
        "Modular housing ready in 30 days. Your home, fast and accessible."
      ),
      featured: true
    },
    {
      name: "Sunset Condominios",
      href: "/proyectos/sunset-condominios",
      img: "/herocondo3.webp",
      tag: l("Preventa", "Presale"),
      desc: l(
        "La cúspide del confort junto al mar. Espacios pensados para fluir con la brisa.",
        "The pinnacle of seaside comfort. Spaces designed to flow with the breeze."
      )
    },
    {
      name: "Residencia Armok",
      href: "/proyectos/residencia-armok",
      img: "/amrok/hero1.webp",
      tag: l("Obra Entregada", "Delivered Project"),
      desc: l(
        "Brutalismo y descanso en el desierto. Una pieza única de arquitectura de autor.",
        "Brutalism and rest in the desert. A unique piece of signature architecture."
      )
    },
    {
      name: "Residencia Quintard",
      href: "/proximamente",
      img: "/quintard.webp",
      tag: l("Obra Entregada", "Delivered Project"),
      desc: l(
        "Diálogo entre la piedra y el horizonte de La Baja. Un refugio contemporáneo en El Centenario.",
        "A dialogue between stone and the Baja horizon. A contemporary refuge in El Centenario."
      )
    },
  ];

  const mainLinks = [
    { name: l("Inicio", "Home"), href: "/" },
    { name: l("Crédito", "Financing"), href: "/financiamiento" },
    { name: l("Nosotros", "About Us"), href: "/nosotros" },
  ];

  // Animation variants for staggered list
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.42
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }
    }
  };

  return (
    <>
      {/* ──── TOP HEADER (Always Fixed Top) ──── */}
      <div className="fixed top-0 left-0 w-full z-[5000] py-5 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-12 pointer-events-none">
        {/* Background gradient on scroll */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-page-text/50 to-transparent transition-opacity duration-700 pointer-events-none ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="relative mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">

          {/* Mobile "Menu" Pill - Left Column */}
          <div className="flex sm:hidden z-10">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center gap-2 h-9 px-5 rounded-full font-montserrat text-sm font-light text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <Menu className="w-3.5 h-3.5 opacity-80" />
              <span>{l("Menu", "Menu")}</span>
            </button>
          </div>




          {/* Logo - Center Column on mobile, Left on desktop */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:static sm:translate-x-0 sm:translate-y-0 flex justify-center sm:justify-start sm:flex-1 pointer-events-none">
            <Link href="/" className="flex items-center shrink-0 pointer-events-auto">
              <Image
                src="/logo-color.svg"
                alt="Sunset Logo"
                width={48}
                height={48}
                className="brightness-0 invert object-contain w-10 h-auto sm:w-8 sm:h-8 lg:w-12 lg:h-12"
              />
            </Link>
          </div>

          {/* Action Button - Right Column */}
          <div className="flex justify-end sm:flex-initial z-10">
            <Button href="/contacto" size="sm" className="font-montserrat shadow-2xl shadow-white/20 font-semibold h-9 sm:h-10 px-4 sm:px-6 shrink-0">
              <span className="hidden sm:inline">{l("Agenda una visita", "Schedule a visit")}</span>
              <span className="sm:hidden">{l("Agendar", "Schedule")}</span>
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
            className="fixed inset-0 z-[6000] sm:hidden"
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-y-0 right-0 w-full bg-page-bg/10 backdrop-blur-xl border-l border-white/10 flex flex-col p-8 pt-24 overflow-y-auto subtle-scrollbar will-change-transform"
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
                  className="group flex items-center justify-between py-4 border-b border-white/5 transition-colors"
                >
                  <span className="font-literata text-2xl text-white font-light group-hover:text-brand-orange transition-colors">
                    {l("Inicio", "Home")}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                </Link>

                {/* Projects Expandable */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    className="group flex items-center justify-between w-full py-4 border-b border-white/5 transition-colors text-left"
                  >
                    <span className={`font-literata text-2xl font-light transition-colors ${isProjectsOpen ? 'text-brand-orange' : 'text-white group-hover:text-brand-orange'}`}>
                      {l("Proyectos", "Projects")}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isProjectsOpen ? 'rotate-180 text-brand-orange' : 'text-white/20 group-hover:text-brand-orange'}`} />
                  </button>

                  <AnimatePresence>
                    {isProjectsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-3 pt-4 pb-6"
                      >
                        {projects.map((project) => (
                          <div key={project.href}>
                            <ProjectCard
                              href={project.href}
                              img={project.img}
                              title={project.name}
                              tag={project.tag}
                              desc={project.desc}
                              priority={true}
                              featured={project.featured}
                              onClose={() => setIsMobileMenuOpen(false)}
                            />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Credit link */}
                <Link
                  href="/financiamiento"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-white/5 transition-colors"
                >
                  <span className="font-literata text-2xl text-white font-light group-hover:text-brand-orange transition-colors">
                    {l("Crédito", "Financing")}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                </Link>

                {/* About link */}
                <Link
                  href="/nosotros"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-white/5 transition-colors"
                >
                  <span className="font-literata text-2xl text-white font-light group-hover:text-brand-orange transition-colors">
                    {l("Nosotros", "About Us")}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                </Link>
              </nav>

              <div className="mt-auto pt-10 border-t border-white/10">
                <Button href="/contacto" className="w-full justify-between h-14 text-base font-medium">
                  {l("Agenda una visita", "Schedule a visit")}
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
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1],
              backgroundColor: { delay: 0.1 },
              borderColor: { delay: 0.1 }
            }
          },
          expanded: {
            width: "800px",
            height: "85vh",
            borderRadius: "24px",
            backgroundColor: "rgba(44, 26, 14, 0.45)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            y: 0,
            transition: {
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }
          }
        }}
        className={`hidden sm:flex fixed z-[5000] left-1/2 -translate-x-1/2 backdrop-blur-xl border flex flex-col shadow-2xl overflow-hidden max-w-[calc(100vw-48px)] top-[14px] lg:top-[24px] origin-top will-change-[width,height] transform-gpu`}
      >
        {/* Navbar Links Row (Always visible) */}
        <div className="flex w-full items-center p-1 shrink-0 h-[44px] relative justify-center">
          <div className="flex items-center space-x-1">
            <button
              className={`flex items-center gap-1.5 font-montserrat rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-500 cursor-pointer ${isExpanded ? 'bg-white/10 text-white shadow-inner' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>{l("Proyectos", "Projects")}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            {mainLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-montserrat rounded-full px-3 py-1.5 text-sm font-medium text-white transition-all duration-500 hover:bg-white/10 cursor-pointer"
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
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 w-full p-4 px-6 py-8 overflow-y-auto subtle-scrollbar"
            >
              <h2 className="text-1xl font-literata text-white italic font-light tracking-wide mb-8 text-left">
                Nuestros Proyectos
              </h2>
              <div className="flex flex-col gap-3 pb-8">
                {projects.map((project) => (
                  <motion.div key={project.href} variants={itemVariants}>
                    <ProjectCard
                      href={project.href}
                      img={project.img}
                      title={project.name}
                      tag={project.tag}
                      desc={project.desc}
                      priority={true}
                      featured={project.featured}
                      onClose={() => setIsExpanded(false)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

// Helper component for cleaner code
function ProjectCard({ href, img, title, tag, desc, onClose, priority = false, featured = false }: { href: string; img: string; title: string; tag: string; desc: string; onClose: () => void; priority?: boolean; featured?: boolean }) {
  const { l } = useLanguage();
  return (
    <Link href={href} onClick={onClose} className="group flex flex-col sm:flex-row items-stretch bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-2xl border border-white/10 overflow-hidden min-h-[140px] relative">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-0 left-0 z-30 px-3 py-1.5 rounded-br-xl rounded-tl-2xl bg-page-bg font-montserrat font-bold text-[8px] tracking-[0.15em] uppercase shadow-lg overflow-hidden group/badge">
          <div className="absolute inset-0 bg-brand-orange/80 transition-colors group-hover/badge:bg-brand-purple/25" />
          <span className="relative z-10 text-white">★ {l("Destacado", "Featured")}</span>
        </div>
      )}
      <div className="w-full sm:w-[180px] h-40 sm:h-auto shrink-0 bg-black/20 overflow-hidden relative">
        <Image src={img} alt={title} fill className="object-cover" priority={priority} />
        <div className="absolute inset-0 bg-gradient-to-tr from-sc-contrast/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex-1 flex flex-col justify-center text-left py-4 px-6">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h3 className="text-lg sm:text-xl font-literata text-white">{title}</h3>
          <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-white font-montserrat font-light text-[9px] tracking-widest uppercase border border-white/5 whitespace-nowrap">
            {tag}
          </span>
        </div>
        <p className="text-white/70 font-montserrat font-light text-xs sm:text-sm leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}


