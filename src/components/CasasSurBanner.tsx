"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Clock, MessageCircle, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "5216122134747";

export function CasasSurBanner() {
  const { l } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const hidden = sessionStorage.getItem("casasSurBannerHidden");
    if (hidden === "true") {
      setIsHidden(true);
      return;
    }

    const t = setTimeout(() => setIsMounted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleHide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMounted(false);
    setTimeout(() => setIsHidden(true), 450);
    sessionStorage.setItem("casasSurBannerHidden", "true");
  };

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, me interesa cotizar una casa de Casas Sur."
  )}`;

  if (isHidden) return null;

  // Animation variants for the "growing pill" container
  const containerVariants = {
    collapsed: {
      width: "260px",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number]
      }
    },
    expanded: {
      width: "320px",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          key="casas-sur-banner"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={isExpanded ? "expanded" : "collapsed"}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          variants={containerVariants}
          className="fixed top-28 sm:top-24 right-4 sm:right-6 z-[4000] shadow-2xl pointer-events-auto"
        >
          {/* Ambient glow */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-brand-blue/20 to-brand-blue/5 rounded-[2rem] blur-2xl pointer-events-none" />

          {/* Main Card Container */}
          <motion.div 
            layout
            className="relative bg-page-bg/95 backdrop-blur-xl rounded-[20px] shadow-2xl overflow-hidden border border-page-text/5"
          >
            {/* ── Always-visible header ── */}
            <motion.button
              layout="position"
              onClick={() => setIsExpanded((v) => !v)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-page-text/[0.02] transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-montserrat font-bold text-[9px] uppercase tracking-[0.2em] text-brand-blue opacity-80">
                  Casas Sur
                </p>
                <p className="font-literata text-sm text-page-text font-light leading-tight truncate">
                  {l("Tu casa en 30 días", "Your home in 30 days")}
                </p>
              </div>

              <ChevronUp
                className={`w-4 h-4 text-page-text/35 shrink-0 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
              />

              <span
                role="button"
                onClick={handleHide}
                className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center bg-page-text/5 hover:bg-page-text/10 transition-colors"
              >
                <X className="w-3.5 h-3.5 text-page-text/40" />
              </span>
            </motion.button>

            {/* ── Expanded Content ── */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-page-text/5">
                    {/* Image strip - now taller */}
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src="/casasur/smart/Gemini_Generated_Image_jq8q2djq8q2djq8q.webp"
                        alt="Casas Sur — vivienda modular BCS"
                        fill
                        sizes="320px"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-page-bg/95 via-transparent to-transparent" />

                      {/* Floating Badge (matches popover style) */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-orange/80 text-white font-montserrat font-bold text-[8px] tracking-widest uppercase shadow-lg">
                        {l("Destacado", "Featured")}
                      </div>

                      {/* Stat pills */}
                      <div className="absolute bottom-3 left-3 flex gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-page-text font-montserrat text-[9px] font-semibold shadow-sm">
                          <Clock className="w-2.5 h-2.5 text-brand-blue" />
                          {l("30 días", "30 days")}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="px-5 pt-3 pb-5 flex flex-col gap-4">
                      <p className="font-montserrat font-light text-[11.5px] text-page-text/80 leading-relaxed">
                        {l(
                          "Diseño modular inteligente, eficiencia radical y entrega llave en mano en semanas.",
                          "Smart modular design, radical efficiency, and turnkey delivery in weeks."
                        )}
                      </p>

                      <div className="flex flex-col gap-2">
                        <Link
                          href="/proyectos/casas-sur"
                          onClick={() => setIsExpanded(false)}
                          className="group w-full inline-flex items-center justify-between py-2.5 px-4 rounded-full bg-page-text text-white font-montserrat font-semibold text-[11px] hover:bg-page-text/90 transition-all hover:shadow-lg hover:shadow-page-text/10"
                        >
                          {l("Explorar proyecto", "Explore project")}
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue font-montserrat font-semibold text-[11px] hover:bg-brand-blue/10 transition-all"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          {l("Cotización inmediata", "Instant Quote")}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
