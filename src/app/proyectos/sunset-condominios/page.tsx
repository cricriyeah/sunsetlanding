"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  MapPin, Trash, Shirt, Wifi, Camera, Droplets, Car, Home, ArrowRight,
  Umbrella, Waves, Utensils, Flame,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { PhotoCollage } from "@/components/PhotoCollage";
import { CinematicHeading } from "@/components/ui/CinematicHeading";

// ─── Variantes globales ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] },
  }),
};

// ─── Datos ─────────────────────────────────────────────────────────────────
const benefits = [
  { icon: Trash, title: "Recolección de basura", description: "Servicio de manejo y recolección de residuos." },
  { icon: Shirt, title: "Lavandería", description: "Área de lavado y secado equipada." },
  { icon: Wifi, title: "Wi-Fi", description: "Red inalámbrica de alta velocidad." },
  { icon: Camera, title: "Sistema de cámaras", description: "Cámaras de seguridad operando 24/7." },
  { icon: Droplets, title: "Agua", description: "Suministro constante y garantizado." },
  { icon: Car, title: "Estacionamiento privado", description: "Cajones techados, seguros y exclusivos." },
  { icon: Waves, title: "Alberca y Palapa", description: "Área de relajación con piscina de diseño y espacios de sombra." },
  { icon: Utensils, title: "Restaurante", description: "Oferta gastronómica exclusiva para residentes." },
  { icon: Flame, title: "Terraza con asador", description: "Área social equipada para convivencia." },
];

const models = [
  {
    num: "01", tag: "Planta baja", title: "1 Recámara",
    description: "Accesibilidad total y conexión directa con los espacios comunes. Ideal para quienes buscan comodidad sin compromisos.",
    specs: [
      { label: "Recámaras", value: "1" },
      { label: "Baños", value: "1" },
      { label: "Nivel", value: "PB" },
      { label: "Sala · Comedor", value: "Integrados" },
      { label: "Cocina", value: "Italiana" },
      { label: "Terraza", value: "Privada" },
    ],
  },
  {
    num: "02", tag: "Planta alta", title: "2 Recámaras",
    description: "Mayor privacidad, doble amplitud y las vistas más abiertas del desarrollo. Para quienes buscan vivir en otro nivel.",
    specs: [
      { label: "Recámaras", value: "2" },
      { label: "Baños", value: "1" },
      { label: "Nivel", value: "PA" },
      { label: "Sala · Comedor", value: "Integrados" },
      { label: "Cocina", value: "Italiana" },
      { label: "Terraza", value: "Privada" },
    ],
  },
];

const conceptLines = [
  "Sunset Condominios nació de una pregunta simple:",
  "¿cómo debería sentirse el hogar estratégico?",
  "La respuesta es esta:",
  "espacios que respiran, que dejan entrar la luz,",
  "que no compiten con el paisaje — lo enmarcan.",
];

const scPhotos = [
  { src: "/herocondo.png", alt: "Vista interior principal", col: "span 2", row: "span 2" },
  { src: "/alberca.jpeg", alt: "Área de alberca" },
  { src: "/palapa-asador.jpeg", alt: "Palapa y asadores" },
  { src: "/afuera1.jpeg", alt: "Fachada exterior" },
  { src: "/afuera2.jpeg", alt: "Vista panorámica" },
  { src: "/afuera3.jpeg", alt: "Fachada principal", col: "span 2" },
  { src: "/afuera4.png", alt: "Detalle arquitectónico", col: "span 2" },
  { src: "/herocondo3.png", alt: "Vista general del desarrollo", col: "span 4" },
];

// ─── RevealLine ────────────────────────────────────────────────────────────
function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <span ref={ref} className="block overflow-hidden leading-tight">
      <motion.span
        className="block"
        initial={{ y: "100%", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.75, delay, ease: [0.22, 0.65, 0.3, 0.9] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// ─── SpecRow ───────────────────────────────────────────────────────────────
function SpecRow({ label, value, index, inView }: { label: string; value: string; index: number; inView: boolean }) {
  return (
    <motion.div
      className="flex justify-between items-baseline py-3 border-b border-sc-primary/20"
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.06, ease: [0.22, 0.65, 0.3, 0.9] }}
    >
      <span className="font-montserrat text-xs text-sc-text tracking-wide font-light uppercase">{label}</span>
      <span className="font-literata text-sc-text text-base">{value}</span>
    </motion.div>
  );
}

// ─── ModelCard ─────────────────────────────────────────────────────────────
function ModelCard({ model, index }: { model: (typeof models)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardStyles = index === 0
    ? "bg-white/40 border-sc-primary/15"
    : "bg-sc-primary/20 border-sc-primary/20";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 0.65, 0.3, 0.9] }}
      className={`relative rounded-2xl p-8 sm:p-10 backdrop-blur-md border transition-all duration-500 hover:-translate-y-1 ${cardStyles}`}
    >
      <div
        aria-hidden
        className="absolute top-4 right-6 font-literata text-[6rem] leading-none text-sc-primary/20 select-none pointer-events-none"
      >
        {model.num}
      </div>

      <div className="relative pb-6 border-b border-sc-primary/15 mb-4">
        <span className="font-montserrat text-[10px] tracking-[0.18em] uppercase text-sc-primary-dark font-medium block mb-2">
          {model.tag}
        </span>
        <h3 className="font-literata text-2xl text-sc-text font-light italic mb-3">{model.title}</h3>
        <p className="font-montserrat text-sm text-sc-text font-light leading-relaxed max-w-xs">{model.description}</p>
      </div>

      <div className="space-y-1">
        {model.specs.map((spec, i) => (
          <SpecRow key={spec.label} label={spec.label} value={spec.value} index={i} inView={inView} />
        ))}
      </div>
    </motion.div>
  );
}

// ─── ConceptSection (solo texto, sin marca de agua) ───────────────────────
function ConceptSection() {
  const values = [
    {
      title: "Ubicación estratégica",
      description: "En una de las zonas con mayor crecimiento y plusvalía de La Paz, B.C.S.",
    },
    {
      title: "Conectividad real",
      description: "Acceso directo a las principales arterias viales y servicios esenciales de la ciudad.",
    },
    {
      title: "Diseño con propósito",
      description: "Espacios que respiran, que enmarcan el paisaje y que están pensados para el bienestar.",
    },
    {
      title: "Inversión con futuro",
      description: "Preventa en una zona de alta demanda, con planes de financiamiento accesibles.",
    },
  ];

  return (
    <section className="relative pt-20 sm:pt-28 pb-28 sm:pb-28 bg-sc-primary/20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="font-montserrat font-medium text-sm text-sc-primary-dark tracking-[0.2em] uppercase block mb-10"
        >
          El Concepto
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Titular */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            variants={fadeUp}
          >
            <h2 className="font-literata font-light text-3xl sm:text-4xl lg:text-5xl text-sc-text leading-snug mb-6">
              Donde la vida<br />
              <span className="italic text-sc-text/70">encuentra su lugar.</span>
            </h2>
            <p className="font-montserrat text-sm text-sc-text font-light leading-relaxed">
              Sunset Condominios nació de una pregunta simple: ¿cómo debería sentirse el hogar estratégico?
              La respuesta es esta: espacios que respiran, que dejan entrar la luz,
              que no compiten con el paisaje — lo enmarcan.
            </p>
          </motion.div>

          {/* Cards de valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.15 + i * 0.1}
                variants={fadeUp}
                className="p-5 rounded-2xl bg-sc-primary/5 border border-sc-primary/20 hover:bg-sc-primary/20 transition-all duration-500 hover:-translate-y-1"
              >
                <h3 className="font-literata text-base text-sc-text mb-1">{v.title}</h3>
                <p className="font-montserrat text-xs text-sc-text font-light leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
// ─── ModelsSection (ahora va después de la galería) ───────────────────────
function ModelsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-sc-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Divisor con label */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-montserrat font-medium text-sm text-sc-primary-dark tracking-[0.2em] uppercase block">
            Modelos disponibles
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16">
          {models.map((model, i) => (
            <ModelCard key={model.num} model={model} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Página principal ──────────────────────────────────────────────────────
export default function SunsetCondominiosPage() {
  return (
    <div className="min-h-screen bg-page-bg text-sc-text">

      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">

        <Image
          src="/afuera4.png"
          alt="Sunset Condominios"
          fill
          className="object-cover"
          priority
        />


        {/* Capas de gradiente para legibilidad y tono */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-sc-bg via-sc-bg/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-sc-primary/20 via-sc-primary/40 to-transparent z-10" />

        {/* Navbar */}
        <div className="relative z-30">
          <Navbar />
        </div>

        {/* Hero text */}
        <div className="relative z-20 flex flex-1 items-end pb-32 sm:pb-48">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
            >
              <span className="w-fit px-4 py-1.5 rounded-full bg-sc-contrast/80 text-white font-montserrat font-light text-[10px] sm:text-xs tracking-widest uppercase border border-white/10 backdrop-blur-md">
                Preventa
              </span>
            </motion.div>

            <div className="mb-8 flex items-center gap-4 sm:gap-6">
              <motion.img
                src="/logocondo.svg"
                alt="Sunset Condominios logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-8 h-8 sm:w-[60px] sm:h-[60px] lg:w-24 lg:h-24 shrink-0 self-center"
                style={{ filter: "brightness(0) saturate(100%) invert(12%) sepia(30%) saturate(600%) hue-rotate(340deg) brightness(90%)" }}
              />
              <CinematicHeading
                text="Sunset Condominios"
                className="text-3xl sm:text-6xl lg:text-8xl font-literata font-light tracking-tight text-sc-text leading-tight"
                type="word"
                delayChildren={0.5}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg sm:text-xl text-sc-text font-montserrat font-light max-w-2xl leading-relaxed"
            >
              Un refugio de diseño contemporáneo donde el confort del hogar se encuentra con la belleza indómita de la Baja.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──── CONCEPTO (solo texto) ──── */}
      <ConceptSection />

      {/* ──── GALERÍA ──── */}
      <PhotoCollage
        photos={scPhotos}
        title="El arte de vivir en la Baja Sur"
        subtitle="Galería Exclusiva"
        sectionBg="bg-sc-bg"
        accentColor="text-sc-contrast"
        textColor="text-sc-text"
      />

      {/* ──── MODELOS (después de la galería) ──── */}
      <ModelsSection />

      {/* ──── AMENIDADES ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0} variants={fadeUp} className="mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-sc-contrast tracking-[0.2em] uppercase block mb-3">
              Confort y Seguridad
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-sc-text italic">
              Servicios y Amenidades
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.1} variants={fadeUp}
                className="group p-6 rounded-2xl bg-sc-primary/5 border border-sc-primary/20 hover:bg-sc-primary/20  transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-sc-primary/20 flex items-center justify-center mb-4 group-hover:bg-sc-primary/20 transition-all">
                  <item.icon className="w-5 h-5 text-sc-primary/80 group-hover:text-sc-primary transition-colors" />
                </div>
                <h3 className="text-base font-literata text-sc-text mb-2">{item.title}</h3>
                <p className="text-sc-text font-montserrat font-light text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── PRECIOS ──── */}
      <section className="relative py-24 sm:py-32 bg-sc-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0} variants={fadeUp} className="text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-sc-primary-dark tracking-[0.2em] uppercase block mb-3">
              Inversión
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-sc-text italic mb-5">
              Elige tu espacio
            </h2>
            <span className="w-fit px-4 py-1.5 rounded-full bg-sc-contrast/80 text-white font-montserrat font-light text-[10px] sm:text-xs tracking-widest uppercase border border-white/10 backdrop-blur-md">
              Precios de preventa disponibles hasta fin de obra
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Planta Baja */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={0.1} variants={fadeUp}
              className="relative rounded-2xl p-8 sm:p-10 flex flex-col bg-white/40 backdrop-blur-md border border-sc-primary/15 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="font-montserrat font-medium text-sm text-sc-primary-dark tracking-[0.2em] uppercase block mb-3">Planta baja</span>
              <h3 className="text-2xl font-literata text-sc-text font-light mb-1">1 Recámara</h3>
              <p className="text-sc-text font-montserrat text-sm font-light mb-8 leading-relaxed">Accesibilidad inmediata y conexión directa con los espacios comunes.</p>
              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-sc-primary/20">
                <span className="text-5xl font-literata font-light text-sc-text">$950,000</span>
                <span className="text-sc-text font-montserrat text-xs font-light tracking-wider">MXN</span>
              </div>
              <ul className="space-y-3 font-montserrat text-sm text-sc-text font-light mb-8 flex-1">
                {["1 Recámara", "1 Baño completo", "Sala · Comedor · Cocina"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-sc-primary/60 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl bg-sc-primary/5 p-5 space-y-2.5 font-montserrat text-xs text-sc-text">
                <div className="flex justify-between items-center font-medium"><span>Contado</span><span className="bg-sc-primary/20 text-sc-primary-dark rounded px-2 py-0.5 text-[10px]">− $50,000 MXN</span></div>
                <div className="h-px bg-sc-primary/20" />
                <div className="flex justify-between"><span>Enganche</span><span>30%</span></div>
                <div className="flex justify-between"><span>Mensualidades</span><span>24 pagos</span></div>
                <div className="flex justify-between"><span>Interés anual</span><span>6%</span></div>
              </div>

              <div className="mt-8">
                <Button href="/contacto" size="sm" className="w-full font-semibold">
                  Agenda una visita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            {/* Planta Alta */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={0.2} variants={fadeUp}
              className="relative rounded-2xl p-8 sm:p-10 flex flex-col bg-sc-primary/20 backdrop-blur-md border border-sc-primary/20 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="font-montserrat font-medium text-sm text-sc-primary-dark tracking-[0.2em] uppercase block mb-3">Planta alta</span>
              <h3 className="text-2xl font-literata text-sc-text font-light mb-1">2 Recámaras</h3>
              <p className="text-sc-text font-montserrat text-sm font-light mb-8 leading-relaxed">Mayor privacidad, amplitud y las mejores vistas del desarrollo.</p>
              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-sc-primary/15">
                <span className="text-5xl font-literata font-light text-sc-text">$1,500,000</span>
                <span className="text-sc-text font-montserrat text-xs font-light tracking-wider">MXN</span>
              </div>
              <ul className="space-y-3 font-montserrat text-sm text-sc-text font-light mb-8 flex-1">
                {["2 Recámaras", "1 Baño completo", "Sala · Comedor · Cocina"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-sc-primary/60 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl bg-sc-primary/8 p-5 space-y-2.5 font-montserrat text-xs text-sc-text">
                <div className="flex justify-between items-center font-medium"><span>Contado</span><span className="bg-sc-primary/15 text-sc-primary-dark rounded px-2 py-0.5 text-[10px]">− $50,000 MXN</span></div>
                <div className="h-px bg-sc-primary/20" />
                <div className="flex justify-between"><span>Enganche</span><span>30%</span></div>
                <div className="flex justify-between"><span>Mensualidades</span><span>24 pagos</span></div>
                <div className="flex justify-between"><span>Interés anual</span><span>6%</span></div>
              </div>

              <div className="mt-8">
                <Button href="/contacto" size="sm" className="w-full font-semibold">
                  Agenda una visita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── UBICACIÓN ──── */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp} custom={0}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="font-montserrat text-sm font-medium text-sc-contrast tracking-[0.2em] uppercase block mb-3">Ubicación</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-sc-text italic mb-8">
              Ubicacion Ideal para vivir o invertir
            </h2>
            <p className="text-sc-text font-montserrat text-lg font-light leading-relaxed mb-10">
              Ubicados en una de las zonas de mayor desarrollo y plusvalía en La Paz, B.C.S., con acceso inmediato a servicios y vialidades clave de la región.
            </p>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {[
                { label: "10 min. de Centros Comerciales" },
                { label: "20 min. del Aeropuerto Int." },
              ].map(({ label }) => (
                <div key={label} className="flex items-center gap-3 pb-2 border-b border-sc-primary/20">
                  <MapPin className="w-4 h-4 text-sc-contrast shrink-0" />
                  <span className="font-montserrat text-sm text-sc-text font-light">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mapa Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full relative aspect-[21/9] sm:aspect-[25/7] min-h-[450px] bg-sc-primary/5 border-y border-sc-primary/20 overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14548.97!2d-110.312!3d24.142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1711411511511!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 pointer-events-none bg-sc-primary/5 mix-blend-multiply" />


        </motion.div>
      </section>

      {/* ──── CTA ──── */}
      <section className="relative py-24 sm:py-32 bg-sc-contrast overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0} variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-white italic mb-6">
              ¿Listo para empezar una nueva historia?
            </h2>
            <p className="text-white font-montserrat font-light text-lg max-w-xl mx-auto mb-10">
              Agenda una visita para conocer los modelos disponibles y los planes de financiamiento.
            </p>
            <Button href="/contacto" size="sm" className="font-semibold">
              Agenda una visita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
