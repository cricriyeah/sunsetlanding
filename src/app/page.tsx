"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Home as HomeIcon, Bath, Utensils } from "lucide-react";
import { ShadowOverlay } from "@/components/ui/ShadowOverlay";
import { Navbar } from "@/components/Navbar";
import { HeroContent } from "@/components/HeroContent";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-page-bg text-page-text overflow-x-hidden">

      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-brand-blue via-brand-sand to-brand-orange flex flex-col">
        <div className="absolute inset-0 z-0">
          <ShadowOverlay
            color="rgba(253, 186, 116, 0.85)"
            animation={{ scale: 25, speed: 90 }}
            noise={{ opacity: 0.15, scale: 1.2 }}
            sizing="fill"
            className="w-full h-full"
          />
        </div>

        <div className="relative z-30">
          <Navbar />
        </div>

        <HeroContent />

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-page-bg to-transparent z-10 pointer-events-none" />
      </section>

      {/* ──── FILOSOFÍA ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeUp}
            >
              <span className="font-montserrat text-sm font-medium text-page-text/40 tracking-[0.2em] uppercase block mb-3">Filosofía</span>
              <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text/90 italic mb-6">
                Innovación y diseño en cada detalle
              </h2>
              <p className="text-page-text/60 font-montserrat text-lg leading-relaxed mb-6">
                Creemos que los espacios que habitamos moldean nuestra vida. Por eso, en Sunset Desarrolladora creamos proyectos que no solo destacan por su arquitectura vanguardista, sino por su profundo respeto a la naturaleza y al entorno local.
              </p>
              <p className="text-page-text/60 font-montserrat text-lg leading-relaxed">
                Nuestros diseños están pensados para brindar tranquilidad, lujo e integración perfecta, dotando a la Baja de la funcionalidad que exige el mercado global sin perder la calidez del estilo de vida costero.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              variants={fadeUp}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-brand-sand/10 mix-blend-overlay z-10" />
              <Image
                src="/herocondo.png"
                alt="Filosofía de diseño"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── PROYECTOS DESTACADOS ──── */}
      <section className="relative py-24 sm:py-32 bg-page-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="font-montserrat text-sm font-medium text-page-text/40 tracking-[0.2em] uppercase block mb-3">Nuestras Obras</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text/90 italic">
              Proyectos Destacados
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
              variants={fadeUp}
            >
              <Link href="/proyectos/sunset-condominios" className="group block h-full p-6 rounded-3xl bg-page-text/5 border border-page-text/10 hover:bg-page-text/10 hover:shadow-md hover:shadow-page-text/5 transition-all duration-500 hover:-translate-y-1 xl:-translate-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src="/herocondo3.png"
                    alt="Sunset Condominios"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-literata text-page-text mb-2 group-hover:text-brand-orange transition-colors duration-300">Sunset Condominios</h3>
                <p className="text-page-text/60 font-montserrat text-sm mb-4 line-clamp-2">
                  Un refugio de diseño moderno donde el confort del hogar se encuentra con la belleza del horizonte marino y las brisas del Golfo.
                </p>
                <div className="flex items-center gap-2 text-sm font-montserrat font-semibold text-page-text group-hover:text-brand-orange transition-colors duration-300">
                  Explorar proyecto <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
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
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text/90 italic mb-6">
              Construyamos juntos tu futuro
            </h2>
            <p className="text-page-text/60 font-montserrat text-lg max-w-xl mx-auto mb-10">
              Conoce nuestra visión inmobiliaria y contáctanos para descubrir la próxima etapa de tu vida en La Baja.
            </p>
            <Button
              href="/nosotros"
              size="sm"
              className="shadow-2xl shadow-page-text/20 mt-4"
            >
              Conocer al equipo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <Footer />

    </div>
  );
}
