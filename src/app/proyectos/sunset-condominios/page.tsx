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
  Home,
  Sparkles,
  Users,
  Trash,
  Shirt,
  Camera,
  Droplets,
  Utensils,
  Wine,
  Bath,
  Flame,
  ShieldCheck,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { InteriorTabs } from "@/components/InteriorTabs";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] },
  }),
};

const amenities = [
  { icon: Trash, title: "Recolección de basura", description: "Servicio de manejo y recolección de residuos." },
  { icon: Shirt, title: "Lavandería", description: "Área de lavado y secado equipada." },
  { icon: Wifi, title: "Wi-Fi", description: "Red inalámbrica de alta velocidad." },
  { icon: Camera, title: "Sistema de cámaras", description: "Cámaras de seguridad operando 24/7." },
  { icon: Droplets, title: "Agua", description: "Suministro constante y garantizado." },
  { icon: Car, title: "Estacionamiento privado", description: "Cajones techados, seguros y exclusivos." },
];

const benefits = [
  { icon: Sun, title: "340 días de sol al año", description: "La Paz disfruta de uno de los climas más privilegiados de México." },
  { icon: Waves, title: "A minutos del mar", description: "Ubicación estratégica a solo minutos del Malecón y las playas más icónicas." },
  { icon: Eye, title: "Vistas panorámicas", description: "Cada unidad fue diseñada para maximizar la vista al mar y al desierto." },
  { icon: Wind, title: "Ventilación natural", description: "Arquitectura bioclimática que aprovecha las corrientes del golfo." },
  { icon: ShieldCheck, title: "Entorno seguro", description: "Comunidad exclusiva con acceso controlado y vigilancia 24/7." },
  { icon: Leaf, title: "Diseño sostenible", description: "Integración con la naturaleza y uso eficiente de los recursos." },
];

const features = [
  { title: "Cocina Italiana", description: "Cubiertas de cuarzo, electrodomésticos de acero inoxidable y diseño ergonómico." },
  { title: "Pisos de porcelanato", description: "Acabados premium importados con tonos cálidos inspirados en la arena." },
  { title: "Baños de spa", description: "Regadera de lluvia, muebles flotantes y cancel de cristal templado." },
  { title: "Terraza privada", description: "Espacio exterior con acabado antiderrapante y vista despejada." },
  { title: "Closets vestidor", description: "Walk-in closets con iluminación LED y organización a medida." },
  { title: "Altura de 3 metros", description: "Techos altos que amplifican la sensación de amplitud y lujo." },
];

const gallerySlides = [
  { label: "Área de alberca", image: "/alberca.jpeg" },
  { label: "Palapa y asadores", image: "/palapa-asador.jpeg" },
  { label: "Fachada exterior", image: "/afuera1.jpeg" },
  { label: "Vista panorámica", image: "/afuera2.jpeg" },
  { label: "Fachada principal", image: "/afuera3.jpeg" },
];

function CarouselSlide({ slide, index, total, scrollYProgress }: any) {
  const peak = index / (total - 1);
  const distance = 0.25;

  const opacity = useTransform(scrollYProgress, (val: number) => {
    const diff = Math.abs(val - peak);
    if (diff >= distance) return 0.3;
    return 0.3 + (1 - 0.3) * (1 - diff / distance);
  });

  const scale = useTransform(scrollYProgress, (val: number) => {
    const diff = Math.abs(val - peak);
    if (diff >= distance) return 0.85;
    return 0.85 + (1 - 0.85) * (1 - diff / distance);
  });

  const y = useTransform(scrollYProgress, (val: number) => {
    const diff = Math.abs(val - peak);
    if (diff >= distance) return 40;
    return 40 + (0 - 40) * (1 - diff / distance);
  });

  const filter = useTransform(scrollYProgress, (val: number) => {
    const diff = Math.abs(val - peak);
    if (diff >= distance) return "blur(8px)";
    const blurObj = 8 + (0 - 8) * (1 - diff / distance);
    return `blur(${blurObj}px)`;
  });

  return (
    <motion.div
      style={{ opacity, scale, y, filter }}
      className="group relative shrink-0 w-[90vw] sm:w-[82vw] lg:w-[72vw] aspect-video sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-sc-primary/10 bg-sc-primary/[0.03] shadow-2xl shadow-black/10"
    >
      <Image
        src={slide.image}
        alt={slide.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-sc-text/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 lg:p-8">
        <span className="font-montserrat text-lg text-white/90 tracking-wide font-medium drop-shadow-md">
          {slide.label}
        </span>
      </div>
    </motion.div>
  );
}

function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
        setViewportHeight(window.innerHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section 
      ref={sectionRef} 
      style={{ height: viewportHeight > 0 ? `${scrollRange + viewportHeight}px` : "300vh" }} 
      className="relative bg-sc-bg-alt"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 mb-8">
          <span className="font-montserrat text-sm font-medium text-sc-contrast tracking-[0.2em] uppercase block mb-3">El Feeling</span>
          <h2 className="text-3xl sm:text-5xl font-literata font-light text-sc-text italic">
            Un vistazo a tu nuevo estilo de vida
          </h2>
        </div>

        {/* Horizontal track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 pl-6 lg:pl-8"
        >
          {gallerySlides.map((slide, index) => (
            <CarouselSlide
              key={index}
              slide={slide}
              index={index}
              total={gallerySlides.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function SunsetCondominiosPage() {
  return (
    <div className="min-h-screen bg-sc-bg text-sc-text">
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Rustic terracotta pure gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sc-primary via-sc-primary-dark to-sc-contrast/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-sc-bg via-sc-bg/60 to-transparent" />

        {/* Noise Filter */}
        <div
          className="absolute inset-0 z-0 opacity-[0.075] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
            backgroundSize: "240px",
            backgroundRepeat: "repeat",
          }}
        />

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
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-2 mb-4"
            >
              <Home className="w-4 h-4 text-page-text/100" />
              <span className="font-montserrat text-sm text-page-text/100 tracking-wider uppercase font-medium">Proyecto residencial</span>
            </motion.div>

            <div className="flex items-center gap-4 sm:gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-page-text translate-y-1 sm:translate-y-2"
                style={{
                  WebkitMaskImage: "url(/logocondo.svg)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: "url(/logocondo.svg)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.5 } },
                }}
                className="text-5xl sm:text-7xl lg:text-8xl font-literata font-light tracking-tight text-sc-text"
              >
                {"Sunset Condominios".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                    variants={{
                      hidden: { opacity: 0, filter: "blur(12px)", y: 15 },
                      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
                    }}
                    transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg sm:text-xl text-sc-text/60 font-montserrat font-medium max-w-2xl leading-relaxed"
            >
              Un refugio de diseño contemporáneo donde el confort del hogar se encuentra con la belleza indómita de la Baja.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──── PROJECT DESCRIPTION ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-montserrat text-sm font-medium text-sc-contrast tracking-[0.2em] uppercase block mb-3">El Proyecto</span>
              <h2 className="text-3xl sm:text-5xl font-literata font-light text-sc-text italic mb-6">
                Arquitectura que abraza el horizonte
              </h2>
              <p className="text-sc-text/60 font-montserrat text-lg leading-relaxed mb-6">
                Sunset Condominios es un desarrollo residencial exclusivo diseñado para quienes buscan una calidad de vida incomparable. Integrando lujo, comodidad y naturaleza, cada espacio ha sido concebido para maximizar las vistas y aprovechar la luz natural.
              </p>
              <p className="text-sc-text/60 font-montserrat text-lg leading-relaxed">
                Ubicado estratégicamente en una de las zonas con mayor plusvalía de La Paz, nuestro proyecto ofrece amenidades de primer nivel que transformarán tu día a día en una experiencia de resort permanente, todo en un entorno privado y seguro.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0.2}
              className="relative aspect-[4/3] rounded-[1rem] overflow-hidden shadow-2xl shadow-sc-primary/10 border border-sc-primary/10"
            >
              <Image
                src="/herocondo.png"
                alt="Vista del proyecto"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-sc-primary/5 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── INTERIORES TAB GALLERY ──── */}
      <InteriorTabs />

      {/* ──── RENDER GALLERY (Horizontal Scroll) ──── */}
      <HorizontalGallery />

      {/* ──── AMENITIES ──── */}
      <section className="relative py-24 sm:py-32 bg-sc-text text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-sc-primary tracking-[0.2em] uppercase block mb-3">Servicios Integrados</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-white italic">
              Otras Amenidades
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.1}
                variants={fadeUp}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-sc-primary transition-all">
                  <item.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-base font-literata text-white mb-2">{item.title}</h3>
                <p className="text-white/70 font-montserrat text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── BENEFITS (WHY LA PAZ) ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-sc-contrast tracking-[0.2em] uppercase block mb-3">Exclusividad</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-sc-text italic">
              Beneficios de vivir en Sunset Condominios
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.1}
                variants={fadeUp}
                className="group p-6 rounded-2xl bg-sc-primary/5 border border-sc-primary/10 hover:bg-sc-primary/10 hover:shadow-md hover:shadow-page-text/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-sc-primary/10 flex items-center justify-center mb-4 group-hover:bg-sc-primary/20 transition-all">
                  <item.icon className="w-5 h-5 text-sc-primary/80 group-hover:text-sc-primary transition-colors" />
                </div>
                <h3 className="text-base font-literata text-sc-text mb-2">{item.title}</h3>
                <p className="text-sc-text/60 font-montserrat text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── PRECIOS Y PREVENTA ──── */}
      <section className="relative py-24 sm:py-32 bg-sc-bg-alt border-y border-sc-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-sc-primary-dark tracking-[0.2em] uppercase block mb-3">
              Inversión Inteligente
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-sc-text italic mb-6">
              Oportunidad de Preventa
            </h2>
            <div className="inline-block bg-sc-primary/10 border border-sc-primary/20 rounded-full px-6 py-3 shadow-sm">
              <p className="text-sc-primary-dark font-montserrat font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Ahorra $500,000 MXN asegurando tu precio antes del fin de obra
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tarjeta Planta Baja */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={0.1}
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-sc-text/5 border border-sc-primary/10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sc-primary/10"
            >
              <h3 className="text-2xl font-literata text-sc-text mb-2">Planta Baja</h3>
              <p className="text-sc-text/60 font-montserrat text-sm mb-6 pb-6 border-b border-sc-bg-alt">
                Ideal para accesibilidad y comodidad inmediata.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-light font-literata text-sc-primary-dark">$950,000</span>
                <span className="text-sc-text/50 font-montserrat text-sm ml-2">MXN</span>
              </div>

              <ul className="space-y-4 font-montserrat text-sm text-sc-text/80 mb-8 flex-1">
                <li className="flex items-center gap-3"><Home className="w-4 h-4 text-sc-primary" /> 1 Recámara</li>
                <li className="flex items-center gap-3"><Bath className="w-4 h-4 text-sc-primary" /> 1 Baño completo</li>
                <li className="flex items-center gap-3"><Utensils className="w-4 h-4 text-sc-primary" /> Sala y Comedor</li>
              </ul>

              <div className="space-y-3 font-montserrat text-sm bg-sc-bg p-5 rounded-2xl">
                <div className="flex justify-between items-center text-sc-contrast-dark font-medium">
                  <span>Pago de Contado:</span>
                  <span className="bg-sc-contrast/20 text-sc-contrast px-2 py-1 rounded text-xs">- $50,000 MXN</span>
                </div>
                <div className="h-px w-full bg-sc-primary/10 my-2" />
                <div className="flex flex-col gap-1 text-sc-text/70">
                  <span className="font-medium text-sc-text">Plan de Crédito:</span>
                  <span>• 30% de enganche</span>
                  <span>• 24 pagos mensuales</span>
                  <span>• 6% de interés anual</span>
                </div>
              </div>
            </motion.div>

            {/* Tarjeta Planta Alta */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={0.2}
              variants={fadeUp}
              className="bg-sc-primary rounded-3xl p-8 sm:p-10 shadow-xl shadow-sc-primary/20 border border-sc-primary-dark/20 flex flex-col text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sc-primary/40"
            >
              <h3 className="text-2xl font-literata mb-2">Planta Alta</h3>
              <p className="text-white/70 font-montserrat text-sm mb-6 pb-6 border-b border-white/10">
                Mayor privacidad, espacio y vistas superiores.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-light font-literata">$1,500,000</span>
                <span className="text-white/60 font-montserrat text-sm ml-2">MXN</span>
              </div>

              <ul className="space-y-4 font-montserrat text-sm text-white/90 mb-8 flex-1">
                <li className="flex items-center gap-3"><Home className="w-4 h-4 text-sc-bg" /> 2 Recámaras</li>
                <li className="flex items-center gap-3"><Bath className="w-4 h-4 text-sc-bg" /> 1 Baño completo</li>
                <li className="flex items-center gap-3"><Utensils className="w-4 h-4 text-sc-bg" /> Sala y Comedor</li>
              </ul>

              <div className="space-y-3 font-montserrat text-sm bg-black/10 p-5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center font-medium">
                  <span>Pago de Contado:</span>
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">- $50,000 MXN</span>
                </div>
                <div className="h-px w-full bg-white/10 my-2" />
                <div className="flex flex-col gap-1 text-white/80">
                  <span className="font-medium text-white">Plan de Crédito:</span>
                  <span>• 30% de enganche</span>
                  <span>• 24 pagos mensuales</span>
                  <span>• 6% de interés anual</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="relative py-24 sm:py-32 bg-sc-contrast text-sc-text overflow-hidden">


        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-white italic mb-6">
              ¿Listo para empezar una nueva historia?
            </h2>
            <p className="text-white/80 font-montserrat text-lg max-w-xl mx-auto mb-10">
              Agenda una visita para conocer los modelos disponibles y los planes de financiamiento.
            </p>
            <Button
              href="/contacto"
              size="sm"
              className="shadow-1xl shadow-black/10 mt-4 font-semibold"
            >
              Agenda una visita
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
