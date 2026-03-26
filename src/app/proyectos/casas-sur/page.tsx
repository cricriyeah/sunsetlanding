"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Truck,
  Zap,
  Hammer,
  Clock,
  Home as HomeIcon,
  Maximize,
  Wind,
  ThermometerSnowflake,
  ArrowRight,
  Layers,
  Settings,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { PhotoCollage } from "@/components/PhotoCollage";
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

const features = [
  {
    icon: Clock,
    title: "Listo en 30 Días",
    description: "Tu hogar terminado y listo para habitar en un tiempo récord de un mes.",
  },
  {
    icon: Truck,
    title: "En tu Terreno",
    description: "Nos encargamos del transporte e instalación en cualquier punto de La Paz.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Aislamiento Térmico",
    description: "Fibra de vidrio y tabla roca para mantener el clima ideal bajo el sol de La Baja.",
  },
  {
    icon: Layers,
    title: "Modular y Apilable",
    description: "Inicia con un módulo y crece vertical u horizontalmente según tus necesidades.",
  },
  {
    icon: Settings,
    title: "100% Personalizable",
    description: "Elige ventanas, acabados, cocina, baños y distribución a tu gusto.",
  },
  {
    icon: Wind,
    title: "Equipamiento Total",
    description: "Opción de incluir Mini Split, acabados elegantes y muebles de cocina.",
  },
];

export default function CasasSurPage() {
  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-brand-blue/20">
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Blended background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/casasur/hero2.png"
            alt="Casas Sur Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/40 via-sc-contrast/30 to-transparent z-10" />
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
              <span className="w-fit px-4 py-1.5 rounded-full bg-brand-orange text-white font-montserrat font-bold text-[10px] sm:text-xs tracking-widest uppercase border border-white/10 backdrop-blur-md shadow-lg">
                Desde $280,000 MXN
              </span>
              <div className="flex items-center gap-2">
                <HomeIcon className="w-4 h-4 text-page-text shrink-0" />
                <span className="font-montserrat text-xs sm:text-sm text-page-text tracking-wider uppercase font-medium">
                  Arquitectura Modular · Homes in 30 Days
                </span>
              </div>
            </motion.div>

            <div className="mb-8">
              <CinematicHeading
                text="Casas Sur"
                className="text-5xl sm:text-7xl lg:text-9xl font-literata font-light tracking-tighter text-page-text italic"
                type="word"
                delayChildren={0.4}
              />
            </div>

            <div className="text-lg sm:text-xl font-montserrat font-light max-w-2xl leading-relaxed text-page-text/90">
              <RevealLine delay={0.9}>Tu casa lista, rápida y accesible en tu propio terreno.</RevealLine>
              <RevealLine delay={1.0}>Diseño contemporáneo en contenedores marítimos de 20 y 40 pies.</RevealLine>
            </div>
          </div>
        </div>
      </section>

      {/* ──── SPEED & CONCEPTO ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="font-montserrat text-sm font-medium text-brand-blue tracking-[0.2em] uppercase block mb-3">
              Eficiencia Radical
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic mb-8">
              Vive tu hogar en un mes, no en un año.
            </h2>
            <p className="text-page-text font-montserrat font-light text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Casas Sur revoluciona el mercado inmobiliario de La Baja ofreciendo viviendas modulares de diseño
              industrial-chic en contenedores marítimos. Nuestra meta es simple: que habites tu espacio en 30 días.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="group p-5 rounded-2xl bg-sc-contrast/5 border border-sc-contrast/10 hover:bg-sc-contrast/10 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className="w-10 h-10 rounded-xl bg-sc-contrast/20 flex items-center justify-center mb-4 group-hover:bg-sc-contrast/30 transition-all mx-auto">
                  <HomeIcon className="w-5 h-5 text-sc-contrast" />
                </div>
                <h3 className="text-xl font-literata text-page-text mb-1 italic">40 pies & 20 pies</h3>
                <p className="text-xs font-montserrat font-light text-page-text/100 leading-relaxed uppercase tracking-wider">Modelos Base de Contenedores</p>
              </div>

              <div className="group p-5 rounded-2xl bg-sc-contrast/5 border border-sc-contrast/10 hover:bg-sc-contrast/10 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className="w-10 h-10 rounded-xl bg-sc-contrast/20 flex items-center justify-center mb-4 group-hover:bg-sc-contrast/30 transition-all mx-auto">
                  <Clock className="w-5 h-5 text-sc-contrast" />
                </div>
                <h3 className="text-xl font-literata text-page-text mb-1 italic">30 Días</h3>
                <p className="text-xs font-montserrat font-light text-page-text/100 leading-relaxed uppercase tracking-wider">Entrega Llave en Mano Instalada</p>
              </div>

              <div className="group p-5 rounded-2xl bg-sc-contrast/5 border border-sc-contrast/10 hover:bg-sc-contrast/10 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className="w-10 h-10 rounded-xl bg-sc-contrast/20 flex items-center justify-center mb-4 group-hover:bg-sc-contrast/30 transition-all mx-auto">
                  <Zap className="w-5 h-5 text-sc-contrast" />
                </div>
                <h3 className="text-xl font-literata text-page-text mb-1 italic">$280k MXN</h3>
                <p className="text-xs font-montserrat font-light text-page-text/100 leading-relaxed uppercase tracking-wider">Inversión Inicial Accesible</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── GALERÍA EXCLUSIVA ──── */}
      <section className="relative pt-2 pb-24 sm:pt-2 sm:pb-32 bg-page-bg">


        {/* Grid de 3 imágenes iguales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { src: "/casasur/afuera.png", alt: "Vista exterior principal" },
            { src: "/casasur/bano.png", alt: "Detalle del baño" },
            { src: "/casasur/interior.png", alt: "Diseño de interiores" },
          ].map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="relative aspect-square sm:aspect-[4/3] overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                <span className="font-montserrat text-xs sm:text-sm text-white font-light tracking-wide">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── PERSONALIZACIÓN ──── */}
      <section className="relative py-24 sm:py-32 bg-sc-contrast/10 text-page-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <motion.span
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              className="font-montserrat font-medium text-sm text-sc-contrast tracking-[0.2em] uppercase block mb-3"
            >
              Configurador Modular
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              className="text-3xl sm:text-5xl font-literata font-light italic"
            >
              Diseñado por ti, construido por nosotros.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.1}
                variants={fadeUp}
                className="group p-8 rounded-3xl bg-brand-blue/5 border border-brand-blue/10 hover:bg-brand-blue/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-all">
                  <item.icon className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-literata text-page-text mb-3">{item.title}</h3>
                <p className="font-montserrat font-light text-sm leading-relaxed text-page-text/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── ESPECIFICACIONES ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-brand-blue/10 rounded-[1.5rem] p-8 sm:p-16 border border-brand-blue/20">
            <h3 className="text-2xl sm:text-4xl font-literata font-light text-page-text mb-12">
              ¿Qué incluye tu módulo base?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                <p className="font-montserrat font-bold text-xs uppercase tracking-widest text-sc-contrast">Estructura</p>
                <ul className="space-y-2 text-sm font-montserrat font-light opacity-80">
                  <li>Contenedor Marítimo</li>
                  <li>Cimentación base</li>
                  <li>Transporte incluido</li>
                  <li>Opción a duplicar</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat font-bold text-xs uppercase tracking-widest text-sc-contrast">Interiores</p>
                <ul className="space-y-2 text-sm font-montserrat font-light opacity-80">
                  <li>Aislamiento Térmico</li>
                  <li>Acabados en Tabla Roca</li>
                  <li>Piso Laminado / Vinílico</li>
                  <li>Puertas de Vidrio Templado</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat font-bold text-xs uppercase tracking-widest text-sc-contrast">Comodidad</p>
                <ul className="space-y-2 text-sm font-montserrat font-light opacity-80">
                  <li>Baño con Regadera (Opc)</li>
                  <li>Cocina Integral (Opc)</li>
                  <li>Preparación Mini Split</li>
                  <li>Electricidad e Iluminación</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="font-montserrat font-bold text-xs uppercase tracking-widest text-sc-contrast">Plus</p>
                <ul className="space-y-2 text-sm font-montserrat font-light opacity-80">
                  <li>Personalización de Ventanas</li>
                  <li>Colores a elección</li>
                  <li>Garantía Estructural</li>
                  <li>Bajo mantenimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="relative py-24 sm:py-48 text-center bg-brand-blue/80 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl sm:text-5xl font-literata font-light mb-10">
              ¿Hablamos de tu futura Casa a la medida?
            </h2>
            <Button href="/contacto" size="sm" className="font-semibold">
              Cotizar mi Módulo
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <p className="mt-8 text-white/70 font-montserrat font-medium text-sm tracking-wide">
              Tu nueva casa lista en menos de 30 días.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
