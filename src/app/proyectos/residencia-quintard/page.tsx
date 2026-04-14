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
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "none" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "none",
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
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay, ease: [0.22, 0.65, 0.3, 0.9] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const getBenefits = (l: any) => [
  {
    icon: Maximize,
    title: l("Vistas Infinitas", "Infinite Views"),
    description: l("Arquitectura diseñada para enmarcar la Bahía de La Paz desde cada habitación.", "Architecture designed to frame the Bay of La Paz from every room."),
  },
  {
    icon: Zap,
    title: l("Smart Home", "Smart Home"),
    description: l("Integración total de domótica para control de iluminación, clima y seguridad.", "Total integration of home automation for lighting, climate and security control."),
  },
  {
    icon: Sun,
    title: l("Energía Solar", "Solar Energy"),
    description: l("Sistemas fotovoltaicos de última generación para una huella de carbono neutra.", "State-of-the-art photovoltaic systems for a neutral carbon footprint."),
  },
  {
    icon: Waves,
    title: l("Infinity Pool", "Infinity Pool"),
    description: l("Alberca de borde infinito que se funde con el horizonte del Mar de Cortés.", "Infinity edge pool that blends with the horizon of the Sea of Cortez."),
  },
  {
    icon: ShieldCheck,
    title: l("Seguridad 24/7", "24/7 Security"),
    description: l("Privada exclusiva con acceso controlado y monitoreo inteligente de última milla.", "Exclusive gated community with controlled access and last-mile smart monitoring."),
  },
  {
    icon: HomeIcon,
    title: l("380 m² de Diseño", "380 sqm of Design"),
    description: l("Espacios de triple altura y materiales nobles como piedra local y madera curada.", "Triple height spaces and noble materials such as local stone and cured wood."),
  },
];

export default function ResidenciaQuintardPage() {
  const { l } = useLanguage();
  const benefits = getBenefits(l);
  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-brand-orange/30">
      <Navbar />
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/40 via-brand-orange/20 to-transparent mix-blend-multiply z-10" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-page-bg via-page-bg/80 to-transparent z-20" />


        <div className="relative z-20 flex flex-1 items-center pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-24 lg:pt-32 text-page-text">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
            >
              <span className="w-fit px-4 py-1.5 rounded-full bg-white/20 text-white font-montserrat font-light text-[10px] sm:text-xs tracking-widest uppercase border border-white/20 backdrop-blur-md">{l("Obra Entregada", "Delivered Project")}</span>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-page-text shrink-0" />
                <span className="font-montserrat text-xs sm:text-sm text-page-text tracking-wider uppercase font-medium">{l("El Centenario · La Paz · Residencia Privada", "El Centenario · La Paz · Private Residence")}</span>
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
              <RevealLine delay={0.9}>{l("Un manifiesto de arquitectura brutalista y orgánica que se asoma a la Bahía de La Paz.", "A manifesto of brutalist and organic architecture overlooking the Bay of La Paz.")}</RevealLine>
              <RevealLine delay={1.0}>{l("Diseñada para desaparecer en el desierto y renacer frente al mar.", "Designed to adapt to the desert and reborn facing the sea.")}</RevealLine>
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
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-montserrat text-sm font-medium text-brand-orange tracking-[0.2em] uppercase block mb-3">{l("El Concepto", "The Concept")}</span>
              <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic mb-8">{l("Diálogo entre la piedra y el horizonte.", "Dialogue between the stone and the horizon.")}</h2>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed mb-6">{l("Residencia Quintard es nuestro proyecto más ambicioso de integración paisajística. Ubicada en la cresta de El Centenario, la propiedad utiliza la topografía natural como parte esencial de su estructura, permitiendo que el aire y la luz fluyan sin barreras.", "Residencia Quintard is our most ambitious project of landscape integration. Located on the crest of El Centenario, the property uses the natural topography as an essential part of its structure, allowing air and light to flow without barriers.")}</p>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed">{l("Con más de 380 m² de construcción, cada detalle ha sido seleccionado para honrar los materiales nobles de la región: concreto aparente pulido, carpintería de parota y piedra laja local de la Sierra de la Laguna.", "With over 380 sqm of construction, every detail has been selected to honor the noble materials of the region: polished exposed concrete, parota woodwork and local flagstone from the Sierra de la Laguna.")}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={0.2}
              className="relative aspect-square sm:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-sm shadow-page-text/5 border border-page-text/5"
            >
              <Image
                src="/quintard_hero_1774501764500.webp"
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
            viewport={{ once: true, amount: 0.1 }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center lg:text-left"
          >
            <span className="font-montserrat font-medium text-sm text-brand-orange tracking-[0.2em] uppercase block mb-3">{l("Ficha Técnica", "Technical Sheet")}</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">{l("Diseño sin compromisos", "Uncompromising design")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={index * 0.1}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                variants={fadeUp}
                className="group p-8 rounded-[2rem] bg-page-bg border border-page-text/5 hover:border-brand-orange/20 transition-all duration-500 hover:shadow-sm hover:shadow-brand-orange/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-all duration-500 group-hover:translate-x-1">
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
