"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Compass, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CinematicHeading } from "@/components/ui/CinematicHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] },
  }),
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-page-bg text-page-text overflow-x-hidden">
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 via-brand-sand/30 to-brand-orange/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-page-bg via-transparent to-transparent" />
        
        {/* Noise Filter */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.075] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
            backgroundSize: "240px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-1 items-end pb-32 sm:pb-48">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-4"
            >
              Quiénes somos
            </motion.span>

            <CinematicHeading
              text="El estándar americano, arraigado en el espíritu de Baja."
              className="text-3xl sm:text-5xl lg:text-6xl font-literata font-light tracking-tight mb-6 text-page-text"
              type="word"
              delayChildren={0.4}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl text-page-text font-montserrat font-light max-w-2xl leading-relaxed"
            >
              Experiencia inmobiliaria de alta gama en La Paz. Fusionamos la innovación de las smart homes y la energía renovable con la esencia indomable del Mar de Cortés. No es un destino nuevo, es el estilo de vida que ya conoces, en el lugar que siempre soñaste.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──── MISIÓN ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-page-text/5 border border-page-text/5 flex items-center justify-center">
                  <Target className="w-5 h-5 text-page-text" />
                </div>
                <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase">Nuestra Misión</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-literata font-light text-page-text italic mb-8">
                Transformar el paisaje inmobiliario de La Paz
              </h2>
              <p className="text-page-text font-montserrat font-light text-base sm:text-lg leading-relaxed">
                Nuestra misión es transformar el paisaje inmobiliario de La Paz a través de desarrollos inteligentes y sostenibles que cumplen con los más altos estándares internacionales de confort. Buscamos ofrecer a nuestros clientes una transición sin fricciones entre la modernidad tecnológica y la autenticidad costera de Baja California Sur.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              variants={fadeUp}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-page-text/[0.03] border border-page-text/8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-brand-blue/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-montserrat tracking-[0.3em] text-page-text/15 text-xs uppercase">Imagen equipo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── VISIÓN ──── */}
      <section className="relative py-24 sm:py-32 bg-page-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeUp}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/50 border border-page-text/5 order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-brand-blue/5 to-brand-orange/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-montserrat tracking-[0.3em] text-page-text/15 text-xs uppercase">Imagen visión</span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              variants={fadeUp}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-page-text/5 border border-page-text/5 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-page-text" />
                </div>
                <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase">Nuestra Visión</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-literata font-light text-page-text italic mb-8">
                Ser la desarrolladora líder del noroeste de México
              </h2>
              <p className="text-page-text font-montserrat font-light text-base sm:text-lg leading-relaxed">
                Ser la desarrolladora líder en el noroeste de México, reconocida por traer la visión vanguardista del mercado estadounidense a entornos naturales privilegiados. Aspiramos a crear comunidades que definan el nuevo lujo: un equilibrio perfecto entre eficiencia energética, diseño cosmopolita y respeto absoluto por la identidad local.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic mb-6">
              Construyamos juntos
            </h2>
            <p className="text-page-text font-montserrat font-light text-lg max-w-xl mx-auto mb-10">
              Conócenos y descubre cómo estamos transformando el paisaje residencial de La Paz.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-page-text text-page-bg px-8 py-3 text-sm font-montserrat font-semibold hover:bg-page-text-hover transition-all shadow-lg shadow-page-text/15"
            >
              Ver proyectos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <Footer />
    </div>
  );
}
