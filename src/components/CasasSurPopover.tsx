"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, ArrowRight, Clock, KeyRound, DollarSign, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "5216122134747";

export function CasasSurPopover() {
  const { l } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("casasSurPopoverDismissed");
    if (dismissed === "true") return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("casasSurPopoverDismissed", "true");
  };

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola, me interesa cotizar una casa de Casas Sur.")}`;

  return (
    // AnimatePresence MUST wrap the conditional so exit animations fire correctly
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[5000]"
          />

          {/* Card */}
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.92, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 28 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5001] w-[calc(100vw-32px)] max-w-3xl"
          >
            {/* Outer glow */}
            <div className="absolute -inset-3 bg-gradient-to-br from-brand-blue/30 via-brand-blue/10 to-transparent rounded-[2.5rem] blur-2xl pointer-events-none" />

            {/* Main card */}
            <div className="relative bg-page-bg rounded-3xl shadow-2xl overflow-hidden">

              {/* Close */}
              <button
                onClick={handleDismiss}
                aria-label={l("Cerrar", "Close")}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-page-text/10 hover:bg-page-text/20 backdrop-blur-md transition-colors group"
              >
                <X className="w-4 h-4 text-white group-hover:text-page-text transition-colors" />
              </button>

              {/* Hero image */}
              <div className="relative h-44 sm:h-[480px] w-full overflow-hidden">
                <Image
                  src="/casasur/smart/Gemini_Generated_Image_jq8q2djq8q2djq8q.webp"
                  alt="Casas Sur — vivienda modular en BCS"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-page-bg/10 to-page-bg/80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent" />

                {/* Floating badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-page-bg font-montserrat font-bold text-[9px] tracking-widest uppercase shadow-lg overflow-hidden group/badge">
                  <div className="absolute inset-0 bg-brand-orange/80 group-hover/badge:bg-brand-purple/25 transition-colors" />
                  <Home className="relative z-10 w-3 h-3 text-white" />
                  <span className="relative z-10 text-white">{l("Proyecto Destacado", "Featured Project")}</span>
                </div>

                {/* Bottom stats row */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {[
                    { icon: Clock, label: l("30 días", "30 days") },
                    { icon: KeyRound, label: l("Llave en mano", "Turnkey") },
                    { icon: DollarSign, label: l("Desde $10k", "From $10k") },
                  ].map((pill) => (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-page-text font-montserrat text-[9px] font-semibold shadow-sm"
                    >
                      <pill.icon className="w-2.5 h-2.5 text-brand-blue" />
                      {pill.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 sm:px-8 pt-5 pb-6 sm:pb-8">
                <h3 className="text-2xl sm:text-3xl font-literata font-light text-page-text italic leading-tight mb-2">
                  {l("Tu casa lista en 30 días.", "Your home ready in 30 days.")}
                </h3>
                <p className="text-page-text/65 font-montserrat font-light text-sm leading-relaxed mb-6">
                  {l(
                    "Casas modulares de contenedor hechas a tu medida, en tu propio terreno, con llave en mano en semanas.",
                    "Custom container modular homes built on your own land, turnkey in weeks."
                  )}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/proyectos/casas-sur"
                    onClick={handleDismiss}
                    className="group flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-page-text text-white font-montserrat font-semibold text-sm hover:bg-page-text/90 transition-all hover:shadow-lg hover:shadow-page-text/15 active:scale-[0.97]"
                  >
                    {l("Ver proyecto", "View project")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDismiss}
                    className="group flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-blue font-montserrat font-semibold text-sm hover:bg-brand-blue/10 transition-all active:scale-[0.97]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {l("Cotizar ahora", "Quote now")}
                  </a>
                </div>

                {/* Dismiss link */}
                <button
                  onClick={handleDismiss}
                  className="mt-4 w-full text-center font-montserrat text-[11px] text-page-text/30 hover:text-page-text/50 transition-colors"
                >
                  {l("No me interesa", "Not interested")}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
