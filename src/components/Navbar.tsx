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
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[100] py-4 transition-colors duration-500 ${isScrolled ? 'bg-gradient-to-b from-page-text/60 to-transparent' : 'bg-transparent'}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo-color.svg" alt="Sunset Desarrolladora Logo" width={24} height={24} className="brightness-0 invert object-contain" priority />
          </div>

          <motion.div
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={{
              collapsed: {
                width: "310px",
                height: "44px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                transition: {
                  height: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
                  width: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
                  borderRadius: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
                  backgroundColor: { delay: 0.2, duration: 0.4 },
                  borderColor: { delay: 0.2, duration: 0.4 }
                }
              },
              expanded: {
                width: "800px",  // Restricted width to prevent overlap
                height: "60vh",
                borderRadius: "24px",
                backgroundColor: "rgba(44, 26, 14, 0.45)", // Darker background for better readability
                borderColor: "rgba(255, 255, 255, 0.2)",
                transition: {
                  width: { delay: 0, duration: 0.4, ease: "easeInOut" },
                  height: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
                  borderRadius: { delay: 0.1, duration: 0.4, ease: "easeInOut" },
                  backgroundColor: { duration: 0.4 },
                  borderColor: { duration: 0.4 }
                }
              }
            }}
            className="absolute left-1/2 top-[10px] -translate-x-1/2 overflow-hidden backdrop-blur-3xl border flex flex-col shadow-2xl origin-top max-w-[calc(100vw-32px)]"
          >
            {/* Navbar Links Row (Always visible) */}
            <div className="flex w-full items-center p-1 shrink-0 h-[44px] relative">
              <div className="flex items-center space-x-1 mx-auto">
                <a
                  href="/"
                  className={`font-montserrat rounded-full px-4 py-1.5 text-sm font-medium transition-all ${isExpanded ? 'text-white/60 hover:text-white' : 'text-white/100 hover:bg-white/10'}`}
                  onClick={() => setIsExpanded(false)}
                >
                  Inicio
                </a>
                <button
                  className={`flex items-center gap-1.5 font-montserrat rounded-full pl-4 pr-3 py-1.5 text-sm font-medium transition-all ${isExpanded ? 'bg-white/10 text-white shadow-inner' : 'text-white/100 hover:bg-white/10 hover:text-white'}`}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <span>Proyectos</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-white/70' : 'text-white/50 group-hover:text-white'}`} />
                </button>
                <a
                  href="/nosotros"
                  className={`font-montserrat rounded-full px-4 py-1.5 text-sm font-medium transition-all ${isExpanded ? 'text-white/60 hover:text-white' : 'text-white/100 hover:bg-white/10'}`}
                  onClick={() => setIsExpanded(false)}
                >
                  Nosotros
                </a>
              </div>

              {isExpanded && (
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/50 hover:bg-white/10 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Expanded Body: Projects Vertical List */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0, transition: { delay: 0.7, duration: 0.5 } }}
                  exit={{ opacity: 0, filter: "blur(5px)", y: -10, transition: { duration: 0.2 } }}
                  className="flex-1 w-full p-4 sm:px-6 sm:py-8 overflow-y-auto"
                >
                  <h2 className="text-1xl font-literata text-white/90 italic font-light tracking-wide mb-6 sm:mb-8 text-left">
                    Nuestros Proyectos
                  </h2>
                  <div className="flex flex-col gap-6">
                    {/* Project 1 */}
                    <Link href="/proyectos/sunset-condominios" onClick={() => setIsExpanded(false)} className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 p-3 rounded-2xl border border-transparent hover:border-white/10">
                      <div className="w-full sm:w-[160px] h-[100px] shrink-0 rounded-xl bg-black/20 overflow-hidden relative">
                        <Image src="/herocondo3.png" alt="Sunset Condominios" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-literata text-white mb-1">Sunset Condominios</h3>
                        <p className="text-white/60 font-montserrat text-sm leading-relaxed">
                          La cúspide del confort junto al mar. Espacios pensados para fluir con la brisa.
                        </p>
                      </div>
                    </Link>


                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="flex items-center space-x-4">
            <Button size="sm" className="font-montserrat shadow-2xl shadow-white/25 font-semibold">
              Agenda una visita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
