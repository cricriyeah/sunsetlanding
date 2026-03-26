"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Waves,
  Sun,
  Shield,
  Car,
  Wifi,
  Wind,
  Eye,
  Home as HomeIcon,
  Sparkles,
  ShieldCheck,
  Leaf,
  ArrowRight,
  Mountain,
  Trees,
  Compass,
  Droplets,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { PhotoCollage } from "@/components/PhotoCollage";
import { CinematicHeading } from "@/components/ui/CinematicHeading";

// ─── Variantes globales (mismo estilo que condominios) ──────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] },
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
  { icon: Shield, title: "1.5 Hectáreas Privadas", description: "Un extenso terreno de 3.79 acres que asegura un dominio absoluto sobre el paisaje." },
  { icon: Leaf, title: "Reserva Natural", description: "Colindancia directa con reserva de conservación estatal, garantizando un entorno virgen." },
  { icon: Droplets, title: "Agua Natural", description: "La propiedad integra fuentes de agua naturales que potencian el microclima del jardín." },
  { icon: ShieldCheck, title: "Camino Privado", description: "Acceso exclusivo al final de una calle sin salida, maximizando la seguridad y discreción." },
  { icon: HomeIcon, title: "455 m² de Diseño", description: "4,900 sq ft de construction contemporánea con amplios ventanales y techos altos." },
  { icon: Sparkles, title: "Plusvalía Educativa", description: "Ubicación con acceso a los distritos escolares más prestigiosos, asegurando tu inversión." },
];

const armokPhotos = [
  { src: "/amrok/amrokarriba.webp", alt: "Vista aérea del terreno", col: "span 2", row: "span 2" },
  { src: "/amrok/amroksala1.webp", alt: "Estancia principal con doble altura" },
  { src: "/amrok/amrokcomedor1.webp", alt: "Comedor minimalista integrado" },
  { src: "/amrok/amrokdormitorio1.webp", alt: "Master suite con vistas al bosque" },
  { src: "/amrok/amrokbanos1.webp", alt: "Detalle de baño spa" },
  { src: "/amrok/amrokcine1.webp", alt: "Cine privado de última generación", col: "span 2" },
  { src: "/amrok/amrok2.webp", alt: "Fachada contemporánea", col: "span 2" },
  { src: "/amrok/amrok3.webp", alt: "Integración con la naturaleza", col: "span 4" },
];

export default function ResidenciaArmokPage() {
  return (
    <div className="min-h-screen bg-armok-bg text-armok-text selection:bg-brand-blue/30">
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Blended background image */}
        <Image
          src="/amrok/hero1.png"
          alt="Residencia Armok"
          fill
          className="object-cover"
          priority
        />

        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-armok-primary/60 via-armok-primary/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-armok-bg via-armok-bg/80 to-transparent z-10" />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-1 items-end pb-32 sm:pb-48">
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
                <HomeIcon className="w-4 h-4 text-armok-text shrink-0" />
                <span className="font-montserrat text-xs sm:text-sm text-armok-text tracking-wider uppercase font-medium">
                  Armonk · NY · Residencia Unifamiliar
                </span>
              </div>
            </motion.div>

            <div className="mb-8">
              <CinematicHeading
                text="Residencia Armok"
                className="text-5xl sm:text-7xl lg:text-9xl font-literata font-light tracking-tighter text-armok-text italic"
                type="word"
                delayChildren={0.4}
              />
            </div>

            <div className="text-lg sm:text-xl text-armok-text font-montserrat font-light max-w-2xl leading-relaxed">
              <RevealLine delay={0.9}>
                Un refugio de 455 m² diseñado para integrarse con el paisaje de Armonk.
              </RevealLine>
              <RevealLine delay={1.0}>
                Privacidad absoluta rodeado de bosques y reservas naturales.
              </RevealLine>
            </div>
          </div>
        </div>
      </section>

      {/* ──── DESCRIPTION ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-montserrat text-sm font-medium text-armok-primary tracking-[0.2em] uppercase block mb-3">El Concepto</span>
              <h2 className="text-3xl sm:text-5xl font-literata font-light text-armok-text italic mb-6">
                Donde la solidez se vuelve etérea
              </h2>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed mb-6">
                Residencia Armok es una pieza de colección en el exclusivo panorama de Armonk, NY. Situada al final de un camino privado y rodeada de 1.5 hectáreas de terreno virgen, esta casa de 4,900 sq ft ha sido proyectada para ofrecer una conexión total con la naturaleza protegida del Hudson Valley.
              </p>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed">
                El diseño contemporáneo de volúmenes limpios aprovecha la topografía del terreno del estado de Nueva York, que colinda directamente con una reserva de conservación, garantizando que tu vista al bosque y tu privacidad permanezcan inalteradas para siempre.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0.2}
              className="relative aspect-square rounded-none overflow-hidden shadow-2xl shadow-page-text/5 border border-page-text/5"
            >
              <Image
                src="/amrok/amrok1.webp"
                alt="Vista Residencia Armok"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── GALERÍA ──── */}
      <PhotoCollage
        photos={armokPhotos}
        title="La solidez se vuelve etérea"
        subtitle="Residencia Privada"
        sectionBg="bg-armok-bg-alt"
        accentColor="text-armok-primary"
        textColor="text-armok-text"
      />
      {/* ──── BENEFITS ──── */}
      <section className="relative py-24 sm:py-32 bg-armok-bg text-armok-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-armok-primary tracking-[0.2em] uppercase block mb-3">Exclusividad en Armonk</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-armok-text italic">
              Vivir en total armonía
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.1}
                variants={fadeUp}
                className="group p-8 rounded-3xl bg-armok-secondary border border-armok-text/5 hover:bg-armok-primary/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-armok-primary/10 flex items-center justify-center mb-6 group-hover:bg-armok-primary/20 transition-all">
                  <item.icon className="w-6 h-6 text-armok-primary transition-colors" />
                </div>
                <h3 className="text-xl font-literata text-armok-text mb-3">{item.title}</h3>
                <p className="text-armok-text font-montserrat font-light text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <Footer />
    </div>
  );
}
