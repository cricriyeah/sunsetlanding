"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  ArrowRight,
  KeyRound,
  DollarSign,
  MapPin,
  Zap,
  Home as HomeIcon,
  TrendingUp,
  Palmtree,
  Users,
  Compass,
  MessageCircle,
  Hammer,
  Ruler,
  Truck,
  Package,
  Check,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { CinematicHeading } from "@/components/ui/CinematicHeading";

/* ────────────────────────────── animations ────────────────────────────── */
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

/* ────────────────────────────── data ────────────────────────────── */
const WA_NUMBER = "5216121234567"; // ← reemplazar con número real

const profiles = [
  {
    icon: MapPin,
    title: "Tengo terreno ejidal",
    desc: "Instalamos en terreno ejidal o privado, sin trámites extra.",
  },
  {
    icon: Zap,
    title: "Quiero vivir ya",
    desc: "De plano a llaves en mínimo 30 días. Sin esperas de obra negra.",
  },
  {
    icon: TrendingUp,
    title: "Quiero rentar",
    desc: "Genera ingresos mensuales desde el primer mes de entrega.",
  },
  {
    icon: Palmtree,
    title: "Inversión Airbnb",
    desc: "Recupera tu inversión en 12–24 meses con renta vacacional.",
  },
];

const models = [
  {
    id: "basic",
    name: "Esencial",
    cardName: "Casa Esencial",
    price: "$280k – $420k MXN",
    images: ["/casasur/afuera.png", "/casasur/interior.png", "/casasur/bano.png"],
    ideal: "Primera vivienda o renta fija",
    profit: "Renta estimada: $8,000–$12,000/mes",
    includes: [
      "1–2 recámaras · 1 baño completo",
      "Cocina integral con barra",
      "Sala–comedor abierto",
      "Aislamiento térmico completo",
      "Piso vinílico de alto tráfico",
      "Instalación eléctrica e hidráulica",
      "Puertas de vidrio templado",
      "Transporte e instalación en sitio",
    ],
  },
  {
    id: "smart",
    name: "Smart",
    cardName: "Casa Inteligente",
    price: "$480k – $720k MXN",
    images: ["/casasur/interior.png", "/casasur/afuera.png", "/casasur/bano.png"],
    ideal: "Familia joven o Airbnb premium",
    profit: "Renta estimada: $18,000–$28,000/mes",
    includes: [
      "2–3 recámaras · 2 baños completos",
      "Cocina integral con isla",
      "Terraza integrada con pérgola",
      "Mini Split instalado (2 unidades)",
      "Acabados premium: porcelanato",
      "Iluminación LED inteligente",
      "Closets empotrados",
      "Cisterna + bomba presurizadora",
    ],
  },
  {
    id: "luxury",
    name: "Lujo",
    cardName: "Vivienda de Lujo",
    price: "$850k – $1.2M MXN",
    images: ["/casasur/bano.png", "/casasur/afuera.png", "/casasur/interior.png"],
    ideal: "Airbnb de lujo o casa principal",
    profit: "Renta estimada: $45,000–$70,000/mes",
    includes: [
      "3–4 recámaras · 3 baños + medio baño",
      "Cocina gourmet con electrodomésticos",
      "Rooftop o deck con vista panorámica",
      "Sistema fotovoltaico (paneles solares)",
      "Acabados arquitectónicos de autor",
      "Domótica y cerraduras inteligentes",
      "Jardín interior integrado",
      "Diseño paisajístico incluido",
    ],
  },
];

const processSteps = [
  {
    icon: Compass,
    title: "Sesión de Descubrimiento",
    desc: "Definimos tu visión, presupuesto y alcance en una reunión de 45 min.",
  },
  {
    icon: Ruler,
    title: "Diseño y Cotización",
    desc: "Recibes planos, renders 3D y cotización detallada en 5 días hábiles.",
  },
  {
    icon: Hammer,
    title: "Construcción en Taller",
    desc: "Tu casa se fabrica en nuestro taller bajo control de calidad estricto.",
  },
  {
    icon: Truck,
    title: "Entrega e Instalación",
    desc: "Transportamos, instalamos y entregas llaves. Listo para habitar.",
  },
];

export default function CasasSurPage() {
  const [activeModel, setActiveModel] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleModelChange = (i: number) => {
    setActiveModel(i);
    setPhotoIndex(0);
  };

  const currentImages = models[activeModel].images;
  const prevPhoto = () => setPhotoIndex((p) => (p === 0 ? currentImages.length - 1 : p - 1));
  const nextPhoto = () => setPhotoIndex((p) => (p === currentImages.length - 1 ? 0 : p + 1));

  const waLink = (model?: string) => {
    const msg = model
      ? `Hola, me interesa cotizar el modelo ${model} de Casas Sur.`
      : `Hola, me interesa cotizar una casa de Casas Sur.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-page-text/20">
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/casasur/hero2.png"
            alt="Casa Sur — vivienda moderna lista en 45 días"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-page-text/40 via-page-text/15 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-page-bg via-page-bg/80 to-transparent z-20" />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-1 items-end pb-24 sm:pb-40 text-page-text">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
            {/* Pills moved up */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { icon: Clock, label: "30 días" },
                { icon: KeyRound, label: "Llave en mano en semanas" },
                { icon: DollarSign, label: "Empieza con $10k" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/100 backdrop-blur-md border border-page-text/10 font-montserrat text-xs sm:text-sm font-medium text-page-text shadow-sm"
                >
                  <pill.icon className="w-4 h-4 text-brand-orange/90" />
                  {pill.label}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <div className="mb-1 sm:mb-4">
              <CinematicHeading
                text="Tu casa lista en 30 días."
                className="text-4xl sm:text-6xl lg:text-8xl font-literata font-light tracking-tighter text-page-text"
                type="word"
                delayChildren={0.3}
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <CinematicHeading
                text="Empieza solo con $10k MXN."
                className="text-3xl sm:text-5xl lg:text-7xl font-literata font-light tracking-tighter text-brand-orange/90 italic"
                type="word"
                delayChildren={0.6}
              />
            </div>

            {/* Subtitle */}
            <div className="text-base sm:text-xl font-montserrat font-light max-w-2xl leading-relaxed text-page-text mb-8 sm:mb-10">
              <RevealLine delay={0.9}>Hecha a tu medida, en tu propio terreno, con llave en mano en semanas.</RevealLine>
            </div>



            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#modelos"
                className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-11 px-6 text-sm bg-page-text text-white hover:bg-page-text/90"
              >
                <span className="relative z-10 flex items-center">
                  Ver modelos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-11 px-6 text-sm bg-brand-orange/90 text-white hover:bg-brand-orange/90"
              >
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Cotizar ahora
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. PARA QUIÉN ES
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-brand-orange/90 tracking-[0.2em] uppercase block mb-3">
              BENEFICIOS
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
              ¿Por qué elegir Casas Sur?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {profiles.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.1}
                variants={fadeUp}
                className="animate-on-scroll group shadow-md p-8 rounded-3xl bg-page-text border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:shadow-page-text/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/80 flex items-center justify-center mb-5 transition-all">
                  <p.icon className="w-7 h-7 text-white/90 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-literata text-white mb-2">{p.title}</h3>
                <p className="font-montserrat font-light text-sm leading-relaxed text-white/70">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════════════
          3. MODELOS — Fullscreen Carousel with Multi-Photo
          ══════════════════════════════════════════════════════════════ */}
      <section id="modelos" className="relative scroll-mt-20 overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 sm:pt-32 pb-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="font-montserrat font-medium text-sm text-brand-orange/90 tracking-[0.2em] uppercase block mb-3">
              Catálogo
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic mb-8">
              Elige tu modelo
            </h2>

            {/* ── Pills de modelo ── */}
            <div className="flex flex-wrap justify-center gap-2">
              {models.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => handleModelChange(i)}
                  className={`px-5 py-2.5 rounded-full font-montserrat text-sm font-medium transition-all duration-300 ${activeModel === i
                    ? "bg-page-text text-white shadow-lg shadow-page-text/20"
                    : "bg-white/60 text-page-text border border-page-text/10 hover:bg-white hover:border-page-text/20"
                    }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Carrusel — contenido centrado en desktop, full-width en mobile ── */}
        <div className="relative w-full">
          <div className="mx-0 sm:mx-6 lg:mx-16 xl:mx-24">
            <div className="relative w-full h-[55vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden rounded-none">

              {/* Imagen */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeModel}-${photoIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImages[photoIndex]}
                    alt={`${models[activeModel].name} — foto ${photoIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
                </motion.div>
              </AnimatePresence>

              {/* Dots — top center */}
              {currentImages.length > 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                  {currentImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPhotoIndex(i)}
                      className={`rounded-full transition-all duration-300 ${photoIndex === i
                        ? "w-5 h-1.5 bg-white"
                        : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                      aria-label={`Foto ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Flechas */}
              <button
                onClick={prevPhoto}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-all hover:scale-105 active:scale-95"
                aria-label="Foto anterior"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-all hover:scale-105 active:scale-95"
                aria-label="Foto siguiente"
              >
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>{/* fin imagen */}

            {/* ── Spec Card — FUERA del overflow, encimada con -mt ── */}
            <div className="relative z-20 -mt-16 sm:-mt-20 px-3 sm:px-6 pb-8 sm:pb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`specs-${activeModel}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-white/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/10"
                >
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="w-fit inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/90 text-white font-montserrat text-[10px] font-bold tracking-wide mb-1">
                        <Star className="w-3 h-3" />
                        Ideal para: {models[activeModel].ideal}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-literata font-light text-page-text">
                        {models[activeModel].cardName}
                      </h3>
                      <p className="text-lg sm:text-xl font-literata text-brand-orange/90 font-light">
                        {models[activeModel].price}
                      </p>
                      <p className="font-montserrat text-xs text-page-text/70 font-medium flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-brand-orange/80" />
                        {models[activeModel].profit}
                      </p>
                    </div>

                    <a
                      href={waLink(models[activeModel].name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 self-start inline-flex items-center justify-center font-montserrat font-semibold transition-all h-9 px-5 text-xs rounded-full bg-page-text text-white hover:bg-page-text/90"
                    >
                      <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                      Cotizar este modelo
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-page-text/10 mb-4" />

                  {/* Includes desktop — 4 cols */}
                  <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {models[activeModel].includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-orange/90 shrink-0 mt-0.5" />
                        <span className="font-montserrat font-light text-xs text-page-text/80 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Includes mobile — 4 primeros en 2 cols */}
                  <div className="sm:hidden grid grid-cols-2 gap-2">
                    {models[activeModel].includes.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-brand-orange/90 shrink-0 mt-0.5" />
                        <span className="font-montserrat font-light text-[11px] text-page-text/80 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>{/* fin spec card */}

          </div>{/* fin mx wrapper */}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. PROCESO
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-brand-orange/90 tracking-[0.2em] uppercase block mb-3">
              Tu Camino
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
              De la idea a las llaves
            </h2>
          </motion.div>

          {/* Deposit Badge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0.1}
            className="animate-on-scroll flex justify-center mb-12"
          >
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-6 py-4 sm:py-3 rounded-3xl sm:rounded-full bg-brand-orange/10 border border-brand-orange/20 text-center sm:text-left">
              <DollarSign className="w-5 h-5 text-brand-orange/90 shrink-0" />
              <span className="font-montserrat text-xs sm:text-sm font-semibold text-page-text leading-tight max-w-[240px] sm:max-w-none">
                Con $10,000 MXN de depósito iniciamos tu diseño.
              </span>
            </div>
          </motion.div>

          {/* Timeline ZigZag */}
          <div className="relative">
            {/* Desktop ZigZag SVG Path */}
            <div className="hidden lg:block absolute inset-x-0 top-0 h-full pointer-events-none z-0">
              <svg
                viewBox="0 0 1200 450"
                fill="none"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
              >
                <motion.path
                  d="M 150 280 L 450 80 L 750 280 L 1050 80"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8,12"
                  className="text-brand-orange/20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Mobile Vertical Line (behind icons) */}
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-12 w-px bg-brand-orange/10 z-0">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-brand-orange/60 via-brand-orange/40 to-transparent shadow-[0_0_15px_rgba(255,107,0,0.2)]"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i * 0.15}
                  variants={fadeUp}
                  className={`animate-on-scroll relative text-center ${i % 2 === 0 ? "lg:mt-[200px]" : "lg:mt-0"}`}
                >
                  {/* Floating Effect for Node */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className="relative z-10"
                    >
                      {/* Glow backdrop */}
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-brand-orange/10 blur-2xl rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Node */}
                      <div className="w-16 h-16 rounded-2xl bg-white border border-brand-orange/10 shadow-xl shadow-brand-orange/5 flex items-center justify-center mx-auto relative z-10 group transition-all duration-300 hover:border-brand-orange/30">
                        <step.icon className="w-7 h-7 text-brand-orange/90 group-hover:scale-110 transition-transform" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="relative group/card cursor-default">
                    {/* Shadow glow on hover */}
                    <div className="absolute -inset-2 bg-brand-orange/5 blur-2xl rounded-[2.5rem] opacity-0 group-hover/card:opacity-100 transition-opacity" />

                    <div className="relative p-6 px-7 rounded-[2rem] bg-white/70 backdrop-blur-md border border-brand-orange/10 shadow-xl shadow-brand-orange/5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/80 hover:border-brand-orange/20">
                      <span className="font-montserrat font-bold text-[10px] text-brand-orange/80 tracking-[0.3em] uppercase block mb-4">
                        Paso {i + 1}
                      </span>
                      <h3 className="text-xl font-literata text-page-text font-medium leading-tight mb-3">
                        {step.title}
                      </h3>
                      <p className="font-montserrat font-light text-sm text-page-text/70 leading-relaxed max-w-[210px] mx-auto">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. ROI STRIP
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 bg-page-text/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-brand-orange/90 tracking-[0.2em] uppercase block mb-3">
              BENEFICIOS
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
              Rentabilidad y Eficiencia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: TrendingUp,
                metric: "12–24 meses",
                label: "Recuperas inversión con Airbnb",
              },
              {
                icon: DollarSign,
                metric: "Más barato",
                label: "Que obra negra tradicional",
              },
              {
                icon: Clock,
                metric: "30 días",
                label: "Para tener las llaves en mano",
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.1}
                variants={fadeUp}
                className="animate-on-scroll group p-8 rounded-3xl bg-page-text border border-white/5 text-center hover:-translate-y-1 transition-all duration-500 shadow-xl shadow-page-text/20"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/80 flex items-center justify-center mb-4 mx-auto transition-all">
                  <card.icon className="w-6 h-6 text-white/100" />
                </div>
                <p className="text-3xl sm:text-4xl font-literata font-light text-white mb-2">
                  {card.metric}
                </p>
                <p className="font-montserrat font-light text-sm text-white/60">
                  {card.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.3}
            className="animate-on-scroll flex justify-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-3xl sm:rounded-full bg-brand-orange/90 text-white font-montserrat text-md sm:text-lg shadow-lg shadow-brand-orange/20 text-center sm:text-left">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="max-w-[260px] sm:max-w-none">Instalamos en terreno ejidal o privado en toda BCS.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. CTA FINAL
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-40 text-center bg-page-text text-white overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("/noise-texture.png")`,
            backgroundSize: "240px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-literata font-light mb-6 leading-tight">
              ¿Hablamos?
            </h2>
            <p className="text-xl sm:text-2xl font-literata font-light text-white/80 italic mb-4">
              Empieza con $10,000 MXN.
            </p>
            <p className="text-white/60 font-montserrat font-light text-base max-w-md mx-auto mb-10">
              Agenda tu sesión de descubrimiento y recibe tu cotización en menos de 5 días.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-12 px-8 text-sm bg-white text-page-text hover:bg-gray-100"
              >
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </span>
              </a>
              <a
                href="#modelos"
                className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-12 px-8 text-sm border border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/30"
              >
                <span className="relative z-10 flex items-center">
                  Ver modelos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
