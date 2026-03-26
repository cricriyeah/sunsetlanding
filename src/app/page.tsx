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
            animation={{ scale: 15, speed: 45 }}
            noise={{ opacity: 0.1, scale: 1 }}
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
              <span className="font-montserrat text-sm font-medium text-page-text tracking-[0.2em] uppercase block mb-3">Filosofía</span>
              <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic mb-6">
                Innovación y diseño en cada detalle
              </h2>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed mb-6">
                Creemos que los espacios que habitamos moldean nuestra vida. Por eso, en Sunset Desarrolladora creamos proyectos que no solo destacan por su arquitectura vanguardista, sino por su profundo respeto a la naturaleza y al entorno local.
              </p>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed">
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
      <section className="relative py-24 sm:py-32 bg-page-text/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="font-montserrat text-sm font-medium text-page-text tracking-[0.2em] uppercase block mb-3">Nuestras Obras</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
              Proyectos Destacados
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Sunset Condominios */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
              variants={fadeUp}
            >
              <Link href="/proyectos/sunset-condominios" className="group block h-full rounded-3xl bg-page-text/5 border border-page-text/10 hover:bg-page-text/10 hover:shadow-md hover:shadow-page-text/5 transition-all duration-500 hover:-translate-y-1 xl:-translate-y-2 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full bg-sc-contrast/80 text-white font-montserrat font-light text-xs tracking-widest uppercase border border-white/10 backdrop-blur-md">
                    Preventa
                  </div>

                  <Image
                    src="/herocondo3.png"
                    alt="Sunset Condominios"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-literata text-page-text mb-2 group-hover:text-brand-orange transition-colors duration-300">Sunset Condominios</h3>
                  <p className="text-page-text font-montserrat font-light text-sm mb-4 line-clamp-2">
                    Un refugio de diseño moderno donde el confort del hogar se encuentra con la belleza del horizonte marino y las brisas del Golfo.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-montserrat font-semibold text-page-text group-hover:text-brand-orange transition-colors duration-300">
                    Explorar proyecto <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 2: Casas Sur */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.2}
              variants={fadeUp}
            >
              <Link href="/proyectos/casas-sur" className="group block h-full rounded-3xl bg-brand-blue/5 border border-brand-blue/10 hover:bg-brand-blue/10 hover:shadow-md hover:shadow-brand-blue/5 transition-all duration-500 hover:-translate-y-1 xl:-translate-y-2 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full bg-brand-orange text-white font-montserrat font-bold text-[10px] tracking-[0.2em] uppercase border border-white/10 backdrop-blur-md">
                    Desde $280,000 MXN
                  </div>

                  <Image
                    src="/casasur/hero.png"
                    alt="Casas Sur"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-literata text-page-text mb-2 group-hover:text-brand-blue transition-colors duration-300">Casas Sur</h3>
                  <p className="text-page-text font-montserrat font-light text-sm mb-4 line-clamp-2">
                    Vivienda modular de diseño industrial en contenedores de 20 y 40 pies. Tu casa lista en 30 días.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-montserrat font-semibold text-page-text group-hover:text-brand-blue transition-colors duration-300">
                    Explorar proyecto <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 3: Armok */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.3}
              variants={fadeUp}
            >
              <Link href="/proyectos/residencia-armok" className="group block h-full rounded-3xl bg-page-text/5 border border-page-text/10 hover:bg-page-text/10 hover:shadow-md hover:shadow-page-text/5 transition-all duration-500 hover:-translate-y-1 xl:-translate-y-2 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full bg-white/20 text-white font-montserrat font-light text-xs tracking-widest uppercase border border-white/20 backdrop-blur-md">
                    Obra Entregada
                  </div>

                  <Image
                    src="/amrok/hero1.png"
                    alt="Residencia Armok"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-literata text-page-text mb-2 group-hover:text-brand-orange transition-colors duration-300">Residencia Armok</h3>
                  <p className="text-page-text font-montserrat font-light text-sm mb-4 line-clamp-2">
                    Una oda al brutalismo y la piedra local. Arquitectura que respira la esencia de la Baja.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-montserrat font-semibold text-page-text group-hover:text-brand-orange transition-colors duration-300">
                    Explorar proyecto <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 4: Quintard */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.4}
              variants={fadeUp}
            >
              <Link href="/proyectos/residencia-quintard" className="group block h-full rounded-3xl bg-page-text/5 border border-page-text/10 hover:bg-page-text/10 hover:shadow-md hover:shadow-page-text/5 transition-all duration-500 hover:-translate-y-1 xl:-translate-y-2 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full bg-white/20 text-white font-montserrat font-light text-xs tracking-widest uppercase border border-white/20 backdrop-blur-md">
                    Obra Entregada
                  </div>

                  <Image
                    src="/quintard_hero_1774501764500.png"
                    alt="Residencia Quintard"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-literata text-page-text mb-2 group-hover:text-brand-orange transition-colors duration-300">Residencia Quintard</h3>
                  <p className="text-page-text font-montserrat font-light text-sm mb-4 line-clamp-2">
                    Diálogo entre la piedra y el horizonte de La Baja. Un refugio contemporáneo en El Centenario.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-montserrat font-semibold text-page-text group-hover:text-brand-orange transition-colors duration-300">
                    Explorar proyecto <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ──── CTA ──── */}
      <section className="relative py-24 sm:py-32 bg-brand-orange/70 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-5xl font-literata font-light italic mb-6">
              Construyamos juntos tu futuro
            </h2>
            <p className="font-montserrat font-light text-lg max-w-xl mx-auto mb-10 opacity-90">
              Conoce nuestra visión inmobiliaria y contáctanos para descubrir la próxima etapa de tu vida en La Baja.
            </p>
            <Button
              href="/nosotros"
              size="sm"
              className="mt-4 shadow-2xl shadow-black/20"
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
