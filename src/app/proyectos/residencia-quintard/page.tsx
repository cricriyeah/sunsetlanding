"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  ArrowRight,
  Home as HomeIcon,
  Sun,
  ShieldCheck,
  Zap,
  Waves,
  Maximize,
  Trees,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { CinematicHeading } from "@/components/ui/CinematicHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay,
      ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
    },
  }),
};

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden leading-tight">
      <motion.span
        className="block"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay, ease: [0.22, 0.65, 0.3, 0.9] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const benefits = [
  {
    icon: Maximize,
    title: "Vistas Infinitas",
    description: "Arquitectura diseñada para enmarcar la Bahía de La Paz desde cada habitación.",
  },
  {
    icon: Zap,
    title: "Smart Home",
    description: "Integración total de domótica para control de iluminación, clima y seguridad.",
  },
  {
    icon: Sun,
    title: "Energía Solar",
    description: "Sistemas fotovoltaicos de última generación para una huella de carbono neutra.",
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Alberca de borde infinito que se funde con el horizonte del Mar de Cortés.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad 24/7",
    description: "Privada exclusiva con acceso controlado y monitoreo inteligente de última milla.",
  },
  {
    icon: HomeIcon,
    title: "380 m² de Diseño",
    description: "Espacios de triple altura y materiales nobles como piedra local y madera curada.",
  },
];

export default function ResidenciaQuintardPage() {
  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-brand-orange/30">
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/40 via-brand-orange/20 to-transparent mix-blend-multiply z-10" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-page-bg via-page-bg/80 to-transparent z-20" />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-1 items-end pb-32 sm:pb-48 text-page-text">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
            >
              <span className="w-fit px-4 py-1.5 rounded-full bg-white/20 text-white font-montserrat font-light text-[10px] sm:text-xs tracking-widest uppercase border border-white/20 backdrop-blur-md">
                Obra Entregada
              </span>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-page-text shrink-0" />
                <span className="font-montserrat text-xs sm:text-sm text-page-text tracking-wider uppercase font-medium">
                  El Centenario · La Paz · Residencia Privada
                </span>
              </div>
            </motion.div>

            <div className="mb-8">
              <CinematicHeading
                text="Residencia Quintard"
                className="text-5xl sm:text-7xl lg:text-9xl font-literata font-light tracking-tighter text-page-text italic"
                type="word"
                delayChildren={0.4}
              />
            </div>

            <div className="text-lg sm:text-xl text-page-text font-montserrat font-light max-w-2xl leading-relaxed">
              <RevealLine delay={0.9}>Un manifiesto de arquitectura brutalista y orgánica que se asoma a la Bahía de La Paz.</RevealLine>
              <RevealLine delay={1.0}>Diseñada para desaparecer en el desierto y renacer frente al mar.</RevealLine>
            </div>
          </div>
        </div>
      </section>

      {/* ──── DESCRIPTION ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-montserrat text-sm font-medium text-brand-orange tracking-[0.2em] uppercase block mb-3">
                El Concepto
              </span>
              <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic mb-8">
                Diálogo entre la piedra y el horizonte.
              </h2>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed mb-6">
                Residencia Quintard es nuestro proyecto más ambicioso de integración paisajística.
                Ubicada en la cresta de El Centenario, la propiedad utiliza la topografía natural como
                parte esencial de su estructura, permitiendo que el aire y la luz fluyan sin barreras.
              </p>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed">
                Con más de 380 m² de construcción, cada detalle ha sido seleccionado para honrar los
                materiales nobles de la región: concreto aparente pulido, carpintería de parota y
                piedra laja local de la Sierra de la Laguna.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0.2}
              className="relative aspect-square sm:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-page-text/5 border border-page-text/5"
            >
              <Image
                src="/quintard_hero_1774501764500.png"
                alt="Vista Residencia Quintard"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── BENEFITS ──── */}
      <section className="relative py-24 sm:py-32 bg-page-text/5 text-page-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center lg:text-left"
          >
            <span className="font-montserrat font-medium text-sm text-brand-orange tracking-[0.2em] uppercase block mb-3">
              Ficha Técnica
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
              Diseño sin compromisos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.1}
                variants={fadeUp}
                className="group p-8 rounded-[2rem] bg-page-bg border border-page-text/5 hover:border-brand-orange/20 transition-card duration-500 hover:shadow-xl hover:shadow-brand-orange/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-all">
                  <item.icon className="w-6 h-6 text-brand-orange group-hover:text-brand-orange transition-colors" />
                </div>
                <h3 className="text-xl font-literata text-page-text mb-3">{item.title}</h3>
                <p className="text-page-text font-montserrat font-light text-sm leading-relaxed opacity-80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
