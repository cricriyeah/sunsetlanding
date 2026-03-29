"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, ArrowRight, Zap, Leaf, ShieldCheck, Palmtree } from "lucide-react";
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
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1774753742/12225256_3840_2160_30fps_1_thb81u.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay gradients for text readability and smooth blending */}
        {/* Top shadow for contrast with brand brown */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-page-text/60 via-page-text/20 to-transparent" />

        {/* Bottom: Smooth blending with page-bg */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 z-[1] bg-gradient-to-t from-page-bg via-page-bg/80 to-transparent" />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-1 items-end pb-32 sm:pb-48">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-montserrat font-medium text-sm text-white/80 tracking-[0.2em] uppercase block mb-4"
            >
              Quiénes somos
            </motion.span>

            <CinematicHeading
              text="El estándar americano, arraigado en el espíritu de la Baja Sur"
              className="text-3xl sm:text-5xl lg:text-6xl font-literata font-light tracking-tight mb-6 text-white drop-shadow-md"
              type="word"
              delayChildren={0.4}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl text-white/90 font-montserrat font-light max-w-2xl leading-relaxed drop-shadow-sm"
            >
              Experiencia inmobiliaria de alta gama en La Paz y sus alrededores. Fusionamos la innovación de las smart homes y la energía renovable con la esencia indomable del Mar de Cortés. No es un destino nuevo, es el estilo de vida que ya conoces, en el lugar que siempre soñaste.
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
              className="animate-on-scroll"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-page-text/5 border border-page-text/5 flex items-center justify-center">
                  <Target className="w-5 h-5 text-page-text" />
                </div>
                <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase">Nuestra Misión</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-literata font-light text-page-text italic mb-8">
                Transformar el paisaje inmobiliario de la Baja Sur
              </h2>
              <p className="text-page-text font-montserrat font-light text-base sm:text-lg leading-relaxed">
                Nuestra misión es transformar el paisaje inmobiliario de La Paz y sus alrededores a través de desarrollos inteligentes y sostenibles que cumplen con los más altos estándares internacionales de confort. Buscamos ofrecer a nuestros clientes una transición sin fricciones entre la modernidad tecnológica y la autenticidad costera de Baja California Sur.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              variants={fadeUp}
              className="animate-on-scroll relative aspect-[4/3] rounded-none overflow-hidden bg-page-text/[0.03] border border-page-text/8"
            >
              <Image src="/lpz.jpg" alt="La Paz" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-brand-blue/5 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── VALORES ──── */}
      <section className="relative py-24 sm:py-32 bg-page-bg-alt overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="animate-on-scroll text-center mb-16 sm:mb-24"
          >
            <span className="font-montserrat font-medium text-sm text-brand-blue/60 tracking-[0.2em] uppercase block mb-3">Nuestros Pilares</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic leading-tight">Principios que guían <br className="hidden sm:block" /> nuestra excelencia</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Innovación",
                desc: "Integramos las últimas tecnologías en smart homes y eficiencia energética para crear hogares del futuro.",
                icon: Zap
              },
              {
                title: "Sostenibilidad",
                desc: "Respeto profundo por el ecosistema de la Baja, minimizando nuestro impacto ambiental en cada obra.",
                icon: Leaf
              },
              {
                title: "Calidad",
                desc: "Estándares americanos de construcción y acabados de lujo certificados en cada detalle arquitectónico.",
                icon: ShieldCheck
              },
              {
                title: "Herencia",
                desc: "Celebramos y preservamos la identidad única de Baja California Sur a través de arquitectura sensible.",
                icon: Palmtree
              }
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.15}
                variants={fadeUp}
                className="group relative animate-on-scroll"
              >
                <div className="h-full bg-white/40 backdrop-blur-md border border-page-text/5 p-8 lg:p-10 rounded-[2.5rem] transition-card duration-500 hover:bg-brand-blue/[0.03] hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-brand-blue/5 overflow-hidden">
                  {/* Decorative corner glow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-blue/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 group-hover:scale-110 transition-all duration-500">
                      <v.icon className="w-6 h-6 text-brand-blue/60 group-hover:text-brand-blue transition-colors" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-literata text-page-text mb-4 font-light italic">{v.title}</h3>
                    <p className="text-page-text/60 font-montserrat font-light text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            className="animate-on-scroll"
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
