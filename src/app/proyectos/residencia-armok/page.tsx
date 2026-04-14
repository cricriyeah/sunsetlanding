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
import { useLanguage } from "@/context/LanguageContext";

// ─── Variantes globales (mismo estilo que condominios) ──────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "none" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "none",
    transition: {
      duration: 0.8,
      delay,
      extraDelay: 0.2,
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

const getBenefits = (l: any) => [
  { icon: Shield, title: l("1.5 Hectáreas Privadas", "3.79 Private Acres"), description: l("Un extenso terreno de 3.79 acres que asegura un dominio absoluto sobre el paisaje.", "An extensive 3.79-acre plot that ensures absolute dominance over the landscape.") },
  { icon: Leaf, title: l("Reserva Natural", "Nature Reserve"), description: l("Colindancia directa con reserva de conservación estatal, garantizando un entorno virgen.", "Direct adjacency to a state conservation reserve, guaranteeing a pristine environment.") },
  { icon: Droplets, title: l("Agua Natural", "Natural Water"), description: l("La propiedad integra fuentes de agua naturales que potencian el microclima del jardín.", "The property integrates natural water sources that enhance the garden's microclimate.") },
  { icon: ShieldCheck, title: l("Camino Privado", "Private Road"), description: l("Acceso exclusivo al final de una calle sin salida, maximizando la seguridad y discreción.", "Exclusive access at the end of a cul-de-sac, maximizing security and discretion.") },
  { icon: HomeIcon, title: l("455 m² de Diseño", "4,900 sq ft of Design"), description: l("4,900 sq ft de construction contemporánea con amplios ventanales y techos altos.", "4,900 sq ft of contemporary construction with large windows and high ceilings.") },
  { icon: Sparkles, title: l("Plusvalía Educativa", "Educational Value"), description: l("Ubicación con acceso a los distritos escolares más prestigiosos, asegurando tu inversión.", "Location with access to the most prestigious school districts, securing your investment.") },
];

const getArmokPhotos = (l: any) => [
  { src: "/amrok/amrokarriba.webp", alt: l("Vista aérea del terreno", "Aerial view of the land"), col: "span 2", row: "span 2" },
  { src: "/amrok/amroksala1.webp", alt: l("Estancia principal con doble altura", "Main living room with double height") },
  { src: "/amrok/amrokcomedor1.webp", alt: l("Comedor minimalista integrado", "Integrated minimalist dining room") },
  { src: "/amrok/amrokdormitorio1.webp", alt: l("Master suite con vistas al bosque", "Master suite with forest views") },
  { src: "/amrok/amrokbanos1.webp", alt: l("Detalle de baño spa", "Spa bathroom detail") },
  { src: "/amrok/amrokcine1.webp", alt: l("Cine privado de última generación", "State-of-the-art private cinema"), col: "span 2" },
  { src: "/amrok/amrok2.webp", alt: l("Fachada contemporánea", "Contemporary facade"), col: "span 2" },
  { src: "/amrok/amrok3.webp", alt: l("Integración con la naturaleza", "Integration with nature"), col: "span 4" },
];

export default function ResidenciaArmokPage() {
  const { l } = useLanguage();
  const benefits = getBenefits(l);
  const armokPhotos = getArmokPhotos(l);
  return (
    <div className="min-h-screen bg-armok-bg text-armok-text selection:bg-brand-blue/30">
      <Navbar />
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Blended background image */}
        <Image
          src="/amrok/hero1.webp"
          alt="Residencia Armok"
          fill
          className="object-cover"
          priority
        />

        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-armok-primary/60 via-armok-primary/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-armok-bg via-armok-bg/80 to-transparent z-10" />


        <div className="relative z-20 flex flex-1 items-center pb-20 pt-24 sm:pb-24 sm:pt-32 lg:pb-40 lg:pt-52 3xl:pb-32 3xl:pt-48">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
            >
              <span className="w-fit px-4 py-1.5 rounded-full bg-white/20 text-white font-montserrat font-light text-[10px] sm:text-xs tracking-widest uppercase border border-white/20 backdrop-blur-md">{l("Obra Entregada", "Delivered Project")}</span>
              <div className="flex items-center gap-2">
                <HomeIcon className="w-4 h-4 text-armok-text shrink-0" />
                <span className="font-montserrat text-xs sm:text-sm text-armok-text tracking-wider uppercase font-medium">{l("Armonk · NY · Residencia Unifamiliar", "Armonk · NY · Single Family Residence")}</span>
              </div>
            </motion.div>

            <div className="mb-8">
              <CinematicHeading
                text="Residencia Armok"
                className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-literata font-light tracking-tighter text-armok-text italic"
                type="word"
                delayChildren={0.4}
              />
            </div>

            <div className="text-lg sm:text-xl text-armok-text font-montserrat font-light max-w-2xl leading-relaxed">
              <RevealLine delay={0.9}>{l("Un refugio de 455 m² diseñado para integrarse con el paisaje de Armonk.", "A 4,900 sq ft refuge designed to integrate with the Armonk landscape.")}</RevealLine>
              <RevealLine delay={1.0}>{l("Privacidad absoluta rodeado de bosques y reservas naturales.", "Absolute privacy surrounded by forests and nature reserves.")}</RevealLine>
            </div>
          </div>
        </div>
      </section>

      {/* ──── DESCRIPTION ──── */}
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-montserrat text-sm font-medium text-armok-primary tracking-[0.2em] uppercase block mb-3">{l("El Concepto", "The Concept")}</span>
              <h2 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-literata font-light text-armok-text italic mb-6">{l("Donde la solidez se vuelve etérea", "Where solidity becomes ethereal")}</h2>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed mb-6">{l("Residencia Armok es una pieza de colección en el exclusivo panorama de Armonk, NY. Situada al final de un camino privado y rodeada de 1.5 hectáreas de terreno virgen, esta casa de 4,900 sq ft ha sido proyectada para ofrecer una conexión total con la naturaleza protegida del Hudson Valley.", "Armok Residence is a collector's piece in the exclusive Armonk, NY landscape. Located at the end of a private road and surrounded by 3.79 acres of virgin land, this 4,900 sq ft house has been designed to offer a total connection with the protected nature of the Hudson Valley.")}</p>
              <p className="text-page-text font-montserrat font-light text-lg leading-relaxed">{l("El diseño contemporáneo de volúmenes limpios aprovecha la topografía del terreno del estado de Nueva York, que colinda directamente con una reserva de conservación, garantizando que tu vista al bosque y tu privacidad permanezcan inalteradas para siempre.", "The contemporary design of clean volumes takes advantage of the topography of the New York state land, which directly borders a conservation reserve, ensuring that your forest view and your privacy remain unaltered forever.")}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={0.2}
              className="relative aspect-square rounded-none overflow-hidden shadow-sm shadow-page-text/5 border border-page-text/5"
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
        title={l("La solidez se vuelve etérea", "Solidity becomes ethereal")}
        subtitle={l("Residencia Privada", "Private Residence")}
        sectionBg="bg-armok-bg-alt"
        accentColor="text-armok-primary"
        textColor="text-armok-text"
      />
      {/* ──── BENEFITS ──── */}
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56 bg-armok-bg text-armok-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0}
            variants={fadeUp}
            className="mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-armok-primary tracking-[0.2em] uppercase block mb-3">{l("Exclusividad en Armonk", "Exclusivity in Armonk")}</span>
            <h2 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-literata font-light text-armok-text italic">{l("Vivir en total armonía", "Living in total harmony")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={index * 0.1}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                variants={fadeUp}
                className="group p-8 rounded-3xl bg-armok-secondary border border-armok-text/5 hover:bg-armok-primary/5 transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-armok-primary/10 flex items-center justify-center mb-6 group-hover:bg-armok-primary/20 transition-transform duration-500 group-hover:translate-x-1">
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
