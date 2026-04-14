"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ArrowRight, 
  Clock, 
  MessageCircle, 
  Bell, 
  Home,
  Briefcase,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "5216122134747";

export function CasasSurBanner() {
  const { l } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [tooltipMessageIndex, setTooltipMessageIndex] = useState(0);

  const tooltipMessages = [
    l("¡Tu casa en 30 días!", "Your home in 30 days!"),
    l("¡Conviértete en vendedor!", "Become a seller!")
  ];

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isMounted || isOpen) return;
    
    // Initial show
    const initialT = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    const hideInitialT = setTimeout(() => setShowTooltip(false), 10000);

    // Periodic show with alternating message
    const showTimer = setInterval(() => {
      setTooltipMessageIndex((prev) => (prev + 1) % tooltipMessages.length);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 6000);
    }, 25000);

    return () => {
      clearTimeout(initialT);
      clearTimeout(hideInitialT);
      clearInterval(showTimer);
    };
  }, [isMounted, isOpen, tooltipMessages.length]);

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, me interesa obtener información sobre Casas Sur."
  )}`;

  const waVendedorLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, me gustaría recibir información para ser vendedor de Sunset."
  )}`;

  if (!isMounted) return null;

  return (
    <>
      {/* ── TRIGGER BELL ── */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[5000] flex flex-col items-end">
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="mb-3 mr-2 relative"
            >
              <div className="bg-page-text text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-white/10 whitespace-nowrap">
                <p className="font-montserrat text-[11.5px] font-normal tracking-tight">
                  {tooltipMessages[tooltipMessageIndex]}
                </p>
                <div className="absolute top-full right-6 w-3 h-3 bg-page-text rotate-45 -translate-y-1.5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-page-bg border border-page-text/10 shadow-2xl flex items-center justify-center group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Active Status Dot */}
          <span className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
          </span>

          <Bell className="w-6 h-6 sm:w-7 sm:h-7 text-brand-orange transition-transform duration-500 group-hover:rotate-12" />
        </motion.button>
      </div>

      {/* ── ANNOUNCEMENT CENTER (POPOVER) ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Minimal Backdrop (only blurs background slightly) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[6000]"
            />

            <motion.div
              initial={{ opacity: 0, x: 60, y: 0, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-24 right-6 sm:right-8 z-[6001] w-[calc(100vw-48px)] max-w-sm"
            >
              <div className="relative bg-page-bg rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-page-text/5">
                
                {/* Header */}
                <div className="px-6 py-5 border-b border-page-text/5 flex items-center justify-between bg-white/60 backdrop-blur-xl">
                  <div>
                    <h3 className="font-montserrat font-bold text-[10px] uppercase tracking-[0.25em] text-page-text/40">
                      {l("Sunset Novedades", "Sunset Newsroom")}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="w-8 h-8 rounded-full bg-page-text/5 hover:bg-page-text/10 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-page-text/40" />
                  </button>
                </div>

                {/* List Content */}
                <div className="p-3 flex flex-col gap-3">
                  
                  {/* CARD 1: CASAS SUR */}
                  <Link 
                    href="/proyectos/casas-sur"
                    onClick={() => setIsOpen(false)}
                    className="group relative bg-white/50 rounded-2xl overflow-hidden border border-page-text/[0.04] hover:border-page-text/20 transition-all hover:shadow-lg hover:shadow-page-text/[0.03] flex items-center p-3.5 gap-4"
                  >
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                      <Image
                        src="/casasur/smart/Gemini_Generated_Image_jq8q2djq8q2djq8q.webp"
                        alt="Casas Sur"
                        fill
                        sizes="80px"
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="flex items-center gap-1 text-[8px] font-bold font-montserrat uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-1.5 py-0.5 rounded">
                          <TrendingUp className="w-2.5 h-2.5" />
                          {l("Destacado", "New")}
                        </span>
                      </div>
                      <h4 className="font-literata italic text-base text-page-text leading-tight mb-1">
                        {l("Tu casa lista en 30 días.", "Your home in 30 days.")}
                      </h4>
                      <p className="text-[11px] text-page-text/50 font-montserrat leading-tight">
                        {l("Entrega ultra-rápida y diseño inteligente en BCS.", "Ultra-fast delivery and smart design in BCS.")}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white border border-page-text/10 flex items-center justify-center text-page-text shadow-sm group-hover:bg-page-text group-hover:text-white transition-all transform group-hover:translate-x-1 shrink-0">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </Link>

                  {/* CARD 2: VENDEDORES */}
                  <Link 
                    href="/unete-a-vendedores" 
                    onClick={() => setIsOpen(false)}
                    className="group relative bg-brand-purple/5 rounded-2xl overflow-hidden border border-brand-purple/20 hover:bg-brand-purple/10 transition-all hover:shadow-lg hover:shadow-brand-purple/[0.05] flex items-center p-4 gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-purple text-white flex items-center justify-center shrink-0 shadow-lg shadow-brand-purple/20">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-literata italic text-base text-page-text leading-tight mb-1">
                        {l("¿Quieres ser vendedor?", "Want to join us?")}
                      </h4>
                      <p className="text-[11px] text-page-text/60 font-montserrat leading-tight">
                        {l("Únete al equipo exclusivo de vendedores Sunset y gana comisiones del 10%.", "Join the exclusive Sunset sales team and earn 10% commissions.")}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white border border-page-text/10 flex items-center justify-center text-page-text shadow-sm group-hover:bg-brand-purple group-hover:text-white transition-all transform group-hover:translate-x-1 shrink-0">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </Link>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


