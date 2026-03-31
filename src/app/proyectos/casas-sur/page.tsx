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
  TrendingUp,
  Palmtree,
  Compass,
  MessageCircle,
  Hammer,
  Ruler,
  Truck,
  Check,
  Star,
  Sun,
  Droplet,
  Lock,
  Play,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CinematicHeading } from "@/components/ui/CinematicHeading";
import { useLightbox } from "@/context/LightboxContext";
import { Search } from "lucide-react";

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
    cardName: "Casa Esencial (20 pies)",
    price: "$280k – $420k MXN",
    images: [
      "/casasur/basico/Gemini_Generated_Image_cr9dwbcr9dwbcr9d.png",
      "/casasur/basico/Gemini_Generated_Image_s6wt45s6wt45s6wt.png",
      "/casasur/basico/Gemini_Generated_Image_xwtt18xwtt18xwtt.png",
      "/casasur/basico/Gemini_Generated_Image_7tm1wf7tm1wf7tm1.png",
      "/casasur/basico/bano.png",
      "/casasur/basico/interior.png",
    ],
    video: "https://ik.imagekit.io/ymn210s8o/videobasico.mp4",
    ideal: "Primera vivienda o renta fija",
    profit: "Renta estimada: $8,000–$12,000/mes",
    includes: [
      "1 recámara · 1 baño completo",
      "Cocina integral",
      "Sala–comedor abierto",
      "Aislamiento térmico completo",
      "Piso vinílico de alto tráfico",
      "Instalación eléctrica e hidráulica",
      "Puertas de vidrio templado",
    ],
  },
  {
    id: "smart",
    name: "Smart",
    cardName: "Casa Inteligente (40 pies)",
    price: "$560k – $720k MXN",
    images: [
      "/casasur/smart/Gemini_Generated_Image_jq8q2djq8q2djq8q.png",
      "/casasur/smart/Gemini_Generated_Image_7hhxey7hhxey7hhx.png",
      "/casasur/smart/Gemini_Generated_Image_ifuvehifuvehifuv.png",
      "/casasur/smart/Gemini_Generated_Image_db3vr2db3vr2db3v.png",
    ],
    video: "/casasur/smart/videocontendoressmart.mp4",
    ideal: "Familia joven o Airbnb premium",
    profit: "Renta estimada: $18,000–$28,000/mes",
    includes: [
      "hasta 2 recámaras · 2 baños completos",
      "Cocina integral con isla",
      "Acabados premium",
      "Iluminación LED inteligente",
    ],
  },
  {
    id: "luxury",
    name: "Lujo",
    cardName: "Vivienda de Lujo (40 pies)",
    price: "$850k – $1.2M MXN",
    images: [
      "/casasur/lujo/Gemini_Generated_Image_mj0qffmj0qffmj0q.png",
      "/casasur/lujo/Gemini_Generated_Image_5o0a645o0a645o0a.png",
      "/casasur/lujo/Gemini_Generated_Image_uhw3ziuhw3ziuhw3 - copia.png",
      "/casasur/lujo/Gemini_Generated_Image_sm1e3dsm1e3dsm1e.png",
      "/casasur/lujo/Gemini_Generated_Image_inu65rinu65rinu6.png",
    ],
    video: "https://ik.imagekit.io/ymn210s8o/videolujocontenedores.mp4",
    ideal: "Airbnb de lujo o casa principal",
    profit: "Renta estimada: $45,000–$70,000/mes",
    includes: [
      "2 o mas contenedores de 40 pies",
      "desde 3 recámaras · 3 baños + medio baño",
      "Cocina gourmet",
      "Rooftop o deck con vista panorámica",
      "Sistema fotovoltaico (paneles solares)",
      "Acabados de lujo",
      "Domótica y cerraduras inteligentes",
      "Jardín interior integrado",
      "Diseño paisajístico incluido",
    ],
  },
];

const extraAmenities = [
  { icon: Sun, title: "Paneles Solares" },
  { icon: Lock, title: "Domótica y Cerraduras" },
  { icon: Palmtree, title: "Alberca Orgánica" },
  { icon: Truck, title: "Traslado Especial" },
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
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const { openLightbox } = useLightbox();

  const handleModelChange = (i: number) => {
    setActiveModel(i);
    setActiveMediaIndex(0);
  };

  const waLink = (model?: string) => {
    const msg = model
      ? `Hola, me interesa cotizar el modelo ${model} de Casas Sur.`
      : `Hola, me interesa cotizar una casa de Casas Sur.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const activeData = models[activeModel];

  // Derive mediaItems for carousel
  const mediaItems = [
    ...(activeData.video ? [{ type: "video" as const, src: activeData.video }] : []),
    ...activeData.images.map(src => ({ type: "image" as const, src }))
  ];

  const handlePrevMedia = () => {
    setActiveMediaIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const handleNextMedia = () => {
    setActiveMediaIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-page-text/20">
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/casasur/hero.png"
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

        <div className="relative z-20 flex flex-1 items-end pb-24 sm:pb-32 lg:pb-16 text-page-text">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
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
                  <pill.icon className="w-4 h-4 text-brand-green/80" />
                  {pill.label}
                </span>
              ))}
            </motion.div>

            <div className="mb-1 sm:mb-4">
              <CinematicHeading
                text="Tu casa lista en 30 días."
                className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-literata font-light tracking-tighter text-white"
                type="word"
                delayChildren={0.3}
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <CinematicHeading
                text="Empieza solo con $10k MXN."
                className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-literata font-light tracking-tighter text-page-text italic"
                type="word"
                delayChildren={0.6}
              />
            </div>

            <div className="text-base sm:text-xl font-montserrat font-light max-w-2xl leading-relaxed text-page-text mb-8 sm:mb-10">
              <RevealLine delay={0.9}>Hecha a tu medida, en tu propio terreno, con llave en mano en semanas.</RevealLine>
            </div>

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
                className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-11 px-6 text-sm bg-brand-blue/10 text-brand-blue/90 border border-brand-blue/20 hover:bg-brand-blue/20"
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
      <section className="relative py-16 sm:py-24 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-brand-blue/80 tracking-[0.2em] uppercase block mb-3">
              PERFILES
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
                className="animate-on-scroll group shadow-sm p-8 rounded-3xl bg-page-bg-alt border border-page-text/5 transition-card duration-500 hover:-translate-y-1 hover:shadow-md hover:shadow-page-text/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5 transition-all border border-brand-blue/20">
                  <p.icon className="w-7 h-7 text-brand-blue/80 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-literata text-page-text mb-2">{p.title}</h3>
                <p className="font-montserrat font-light text-sm leading-relaxed text-page-text/70">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. ROI STRIP (Beneficios mudados aquí)
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 lg:py-16 bg-page-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll text-center mb-16"
          >
            <span className="font-montserrat font-medium text-xs text-brand-blue/80 tracking-[0.2em] uppercase block mb-3">
              BENEFICIOS
            </span>
            <h2 className="text-2xl sm:text-4xl font-literata font-light text-page-text italic">
              Rentabilidad y Eficiencia
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 mb-16 max-w-5xl mx-auto">
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
            ].map((item, i) => (
              <React.Fragment key={item.label}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i * 0.15}
                  variants={fadeUp}
                  className="animate-on-scroll flex-1 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green/10 text-brand-green/80 mb-6 group-hover:scale-110 transition-transform border border-brand-green/20">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-literata font-light text-page-text mb-3 tracking-tight group-hover:text-brand-green/90 transition-colors">
                    {item.metric}
                  </h3>
                  <p className="font-montserrat font-medium text-[10px] lg:text-xs text-page-text/50 uppercase tracking-widest max-w-[200px] mx-auto leading-relaxed">
                    {item.label}
                  </p>
                </motion.div>
                {i < 2 && (
                  <div className="hidden md:block w-px h-24 bg-page-text/10" />
                )}
              </React.Fragment>
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
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-3xl sm:rounded-full bg-brand-sand text-page-text font-montserrat text-sm sm:text-base shadow-lg shadow-black/5 text-center sm:text-left">
               <MapPin className="w-4 h-4 shrink-0" />
               <span className="max-w-[260px] sm:max-w-none">Instalamos en terreno ejidal o privado en toda BCS.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. MODELOS & VIDEOS (Nueva Interfaz) + Amenidades Compactas
          ══════════════════════════════════════════════════════════════ */}
      <section id="modelos" className="relative scroll-mt-20 py-16 sm:py-24 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 mt-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-montserrat font-medium text-sm text-brand-blue/80 tracking-[0.2em] uppercase block mb-3">
                Catálogo Interactivo
              </span>
              <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic mb-8">
                Un modelo para cada visión
              </h2>

              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-1.5 rounded-full bg-page-text/5 inline-flex backdrop-blur-md">
                {models.map((m, i) => (
                  <button
                    key={m.id}
                    onClick={() => handleModelChange(i)}
                    className={`px-6 py-3 rounded-full font-montserrat text-sm font-semibold transition-all duration-300 ${activeModel === i
                      ? "bg-page-text text-white shadow-xl shadow-page-text/20 scale-105"
                      : "text-page-text/70 hover:text-page-text hover:bg-page-text/5"
                      }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Área Principal: Layout Dividido */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row gap-6 mb-12"
            >
              {/* Media Principal (Carrusel) */}
              <div className="w-full lg:w-[60%] xl:w-[65%] h-[50vh] sm:h-[55vh] lg:h-[50vh] xl:h-[55vh] relative overflow-hidden bg-black/5 shadow-2xl shadow-black/10 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMediaIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {mediaItems[activeMediaIndex].type === "video" ? (
                      <video
                        src={mediaItems[activeMediaIndex].src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div
                        className="w-full h-full relative cursor-pointer"
                        onClick={() => openLightbox(activeData.images.map(src => ({ src, alt: activeData.name })), activeMediaIndex - (activeData.video ? 1 : 0))}
                      >
                        <Image
                          src={mediaItems[activeMediaIndex].src}
                          alt={activeData.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/20">
                          <div className="p-4 rounded-full bg-white/20 backdrop-blur-md">
                            <Search className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Flechas de Navegación */}
                {mediaItems.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrevMedia(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-x-0 md:-translate-x-4 md:group-hover:translate-x-0 cursor-pointer shadow-sm"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-page-text" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNextMedia(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-x-0 md:translate-x-4 md:group-hover:translate-x-0 cursor-pointer shadow-sm"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-page-text" />
                    </button>
                  </>
                )}

                {/* Etiqueta de modelo flotante */}
                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  {mediaItems[activeMediaIndex].type === "video" && <Play className="w-3.5 h-3.5 text-brand-blue/80 fill-brand-blue/80" />}
                  <span className="font-montserrat font-bold text-xs uppercase tracking-wider text-page-text">
                    {mediaItems[activeMediaIndex].type === "video" ? `Recorrido ${activeData.name}` : `Vista ${activeData.name}`}
                  </span>
                </div>
              </div>

              {/* Specs & Thumbnails */}
              <div className="w-full lg:w-[40%] xl:w-[35%] flex flex-col gap-6">
                <div className="bg-white border border-page-text/10 rounded-3xl p-6 sm:p-8 shadow-xl flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green/80 font-montserrat text-[10px] font-bold tracking-wide mb-3">
                      <Star className="w-3 h-3" />
                      Ideal para: {activeData.ideal}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-literata font-light text-page-text mb-1">
                      {activeData.cardName}
                    </h3>
                    <p className="text-xl font-literata text-brand-blue/80 font-medium mb-3">
                      {activeData.price}
                    </p>
                    <p className="font-montserrat text-sm text-page-text/70 font-medium flex items-center gap-1.5 mb-6 bg-page-text/5 w-fit px-3 py-1.5 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-brand-green/80" />
                      {activeData.profit}
                    </p>

                    <div className="space-y-2 mb-8">
                      {activeData.includes.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-brand-green/70 shrink-0 mt-0.5" />
                          <span className="font-montserrat font-light text-sm text-page-text/80 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={waLink(activeData.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-12 px-6 bg-page-text text-white hover:bg-page-text/90 shadow-md"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Cotizar este modelo
                  </a>
                </div>

                {/* Thumbnails Interactivos */}
                {mediaItems.length > 1 && (
                  <div className="flex gap-4 h-24 sm:h-28">
                    {mediaItems.slice(0, 4).map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 relative overflow-hidden cursor-pointer rounded-xl transition-all duration-300 border-2 ${activeMediaIndex === idx ? "border-brand-green/80 shadow-md scale-[1.02]" : "border-transparent opacity-70 hover:opacity-100"}`}
                        onClick={() => setActiveMediaIndex(idx)}
                      >
                        {item.type === "video" ? (
                          <>
                            <video src={item.src} className="w-full h-full object-cover" muted playsInline />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <Play className="w-6 h-6 text-white fill-white" />
                            </div>
                          </>
                        ) : (
                          <Image src={item.src} fill className="object-cover" alt="thumb" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* AMENIDADES EXTRA (Compacto estilo listón) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mt-8 pt-8 border-t border-page-text/10"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
              <span className="font-literata italic text-page-text/70 text-sm whitespace-nowrap">Amenidades extra opcionales:</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {extraAmenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-sand/10 border border-brand-sand/20 group hover:border-brand-sand/50 hover:bg-brand-sand/30 transition-colors cursor-default">
                    <amenity.icon className="w-4 h-4 text-brand-blue/80 group-hover:scale-110 transition-transform" />
                    <span className="font-montserrat text-xs font-medium text-page-text/90 tracking-wide">{amenity.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. PROCESO
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 lg:py-16 overflow-hidden bg-page-bg text-page-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-brand-blue/80 tracking-[0.2em] uppercase block mb-3">
              Tu Camino
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light italic text-page-text">
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
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-6 py-4 sm:py-3 rounded-3xl sm:rounded-full bg-page-bg-alt border border-page-text/10 text-center sm:text-left shadow-sm">
              <DollarSign className="w-5 h-5 text-brand-green/80 shrink-0" />
              <span className="font-montserrat text-xs sm:text-sm font-semibold leading-tight max-w-[240px] sm:max-w-none text-page-text">
                Con $10,000 MXN de depósito iniciamos tu diseño.
              </span>
            </div>
          </motion.div>

          <div className="relative">
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
                  className="text-page-text/10"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-12 w-px bg-page-text/10 z-0">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-brand-blue/30 via-brand-blue/10 to-transparent"
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
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className="relative z-10"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 backdrop-blur-xl flex items-center justify-center mx-auto relative z-10 group transition-all duration-300 hover:border-brand-blue/30 hover:bg-brand-blue/10">
                        <step.icon className="w-7 h-7 text-brand-blue/80 group-hover:scale-110 transition-transform" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative group/card cursor-default">
                    <div className="relative p-6 px-7 rounded-[2rem] bg-page-bg-alt border border-page-text/5 transition-card duration-500 hover:-translate-y-1 hover:bg-page-bg-alt/80 hover:shadow-md">
                      <span className="font-montserrat font-bold text-[10px] text-brand-sand tracking-[0.3em] uppercase block mb-4">
                        Paso {i + 1}
                      </span>
                      <h3 className="text-xl font-literata font-medium leading-tight mb-3 text-page-text">
                        {step.title}
                      </h3>
                      <p className="font-montserrat font-light text-sm text-page-text/60 leading-relaxed max-w-[210px] mx-auto">
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
          6. CTA FINAL
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 lg:py-16 text-center bg-brand-green/15 text-page-text overflow-hidden">
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
            <p className="text-xl sm:text-2xl font-literata font-light text-page-text/80 italic mb-4">
              Empieza con $10,000 MXN.
            </p>
            <p className="text-page-text/60 font-montserrat font-light text-base max-w-md mx-auto mb-10">
              Agenda tu sesión de descubrimiento y recibe tu cotización en menos de 5 días.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-12 px-8 text-sm bg-brand-sand text-page-text hover:bg-brand-sand/90"
              >
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </span>
              </a>
              <a
                href="#modelos"
                className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-12 px-8 text-sm border border-page-text/20 bg-transparent text-page-text hover:bg-page-text/5 hover:border-page-text/30"
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
