"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "framer-motion";
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
  Search,
  ChevronLeft,
  ChevronRight,
  Sofa,
  Plus,
  ChevronDown,
  Waves,
  FileText
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CinematicHeading } from "@/components/ui/CinematicHeading";
import { useLightbox } from "@/context/LightboxContext";
import { useLanguage } from "@/context/LanguageContext";
import { PhotoCollage } from "@/components/PhotoCollage";

/* ────────────────────────────── animations ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "none" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "none",
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
const WA_NUMBER = "5216122134747"; // ← reemplazar con número real

const getProfiles = (l: any) => [
  {
    icon: MapPin,
    title: l("Tengo terreno ejidal", "I have ejidal land"),
    desc: l("Instalamos en terreno ejidal o privado, sin trámites extra.", "We install on ejidal or private land, without extra paperwork."),
  },
  {
    icon: Zap,
    title: l("Quiero vivir ya", "I want to live now"),
    desc: l("De plano a llaves en mínimo 30 días. Sin esperas de obra negra.", "From blueprint to keys in a minimum of 30 days. No waiting for gray work."),
  },
  {
    icon: TrendingUp,
    title: l("Quiero rentar", "I want to rent"),
    desc: l("Genera ingresos mensuales desde el primer mes de entrega.", "Generate monthly income from the first month of delivery."),
  },
  {
    icon: Palmtree,
    title: l("Inversión Airbnb", "Airbnb Investment"),
    desc: l("Recupera tu inversión en 12–24 meses con renta vacacional.", "Recover your investment in 12-24 months with vacation rental."),
  },
];

const getModels = (l: any) => [
  {
    id: "basic",
    name: l("Esencial", "Essential"),
    cardName: l("Casa Esencial (20 pies)", "Essential House (20 feet)"),
    price: l("$300 mil – 420 mil MXN", "$300k – 420k MXN"),
    images: [
      "/casasur/basico/Gemini_Generated_Image_cr9dwbcr9dwbcr9d.webp",
      "/casasur/basico/Gemini_Generated_Image_s6wt45s6wt45s6wt.webp",
      "/casasur/basico/Gemini_Generated_Image_xwtt18xwtt18xwtt.webp",
      "/casasur/basico/Gemini_Generated_Image_7tm1wf7tm1wf7tm1.webp",
      "/casasur/basico/bano.webp",
      "/casasur/basico/interior.webp",
    ],
    video: "https://ik.imagekit.io/ymn210s8o/videobasico.mp4",
    ideal: l("Primera vivienda o renta fija", "First home or fixed rent"),
    profit: l("Renta estimada: $8,000–$12,000/mes", "Estimated rent: $8,000–$12,000/month"),
    includes: [
      l("1 recámara · 1 baño completo", "1 bedroom · 1 full bath"),
      l("Cocina integral", "Full kitchen"),
      l("Sala–comedor abierto", "Open living-dining room"),
      l("Aislamiento térmico completo", "Complete thermal insulation"),
      l("Piso vinílico de alto tráfico", "High traffic vinyl flooring"),
      l("Instalación eléctrica", "Electrical installation"),
      l("Ventana de fachada principal", "Main facade window"),
    ],
  },
  {
    id: "balance",
    name: l("Balance", "Balance"),
    cardName: l("Modelo Balance (40 pies)", "Balance Model (40 feet)"),
    price: l("$600 mil – 720 mil MXN", "$600k – 720k MXN"),
    images: [
      "/casasur/smart/Gemini_Generated_Image_jq8q2djq8q2djq8q.webp",
      "/casasur/smart/Gemini_Generated_Image_7hhxey7hhxey7hhx.webp",
      "/casasur/smart/Gemini_Generated_Image_ifuvehifuvehifuv.webp",
      "/casasur/smart/Gemini_Generated_Image_db3vr2db3vr2db3v.webp",
    ],
    video: "https://ik.imagekit.io/ymn210s8o/videocontendoressmart.mp4",
    ideal: l("Familia joven o Airbnb premium", "Young family or premium Airbnb"),
    profit: l("Renta estimada: $18,000–$28,000/mes", "Estimated rent: $18,000–$28,000/month"),
    includes: [
      l("hasta 2 recámaras", "up to 2 bedrooms"),
      l("2 baños completos", "2 full baths"),
      l("Cocina integral con acabados premium", "Full kitchen with premium finishes"),
      l("Iluminación LED", "LED Lighting"),
      l("Desde 2 ventanas de fachada principal", "From 2 main facade windows"),
      l("Piso vinílico de alto tráfico", "High traffic vinyl flooring"),
      l("Instalación eléctrica", "Electrical installation"),
    ],
  },
  {
    id: "luxury",
    name: l("Lujo", "Luxury"),
    cardName: l("Vivienda de Lujo (40 pies)", "Luxury House (40 feet)"),
    price: l("$800 mil – 1.2M MXN", "$800k – 1.2M MXN"),
    images: [
      "/casasur/lujo/Gemini_Generated_Image_mj0qffmj0qffmj0q.webp",
      "/casasur/lujo/Gemini_Generated_Image_5o0a645o0a645o0a.webp",
      "/casasur/lujo/Gemini_Generated_Image_uhw3ziuhw3ziuhw3 - copia.webp",
      "/casasur/lujo/Gemini_Generated_Image_sm1e3dsm1e3dsm1e.webp",
      "/casasur/lujo/Gemini_Generated_Image_inu65rinu65rinu6.webp",
    ],
    video: "https://ik.imagekit.io/ymn210s8o/videolujocontenedores.mp4",
    ideal: l("Airbnb de lujo o casa principal", "Luxury Airbnb or main house"),
    profit: l("Renta estimada: $45,000–$70,000/mes", "Estimated rent: $45,000–$70,000/month"),
    includes: [
      l("El cielo es el límite", "The sky is the limit"),
      l("2 o más contenedores de 40 pies", "2 or more 40-foot containers"),
      l("Desde 3 recámaras · 3 baños", "From 3 bedrooms · 3 baths"),
      l("Cocina gourmet y acabados premium", "Gourmet kitchen & premium finishes"),
      l("Rooftop con vista panorámica", "Rooftop with panoramic view"),
      l("Energía solar y domótica", "Solar energy & home automation"),
      l("Diseño paisajístico incluido", "Landscaping design included"),
    ],
  },
];

const getExtraAmenities = (l: any) => [
  { icon: Sofa, title: l("Muebles", "Furniture") },
  { icon: Truck, title: l("Transporte a terreno", "Transport to land") },
  { icon: Droplet, title: l("Drenaje, plomería y agua", "Drainage, plumbing and water") },
  { icon: Ruler, title: l("Base de asentamiento", "Settlement base") },
  { icon: Waves, title: l("Alberca", "Pool") },
  { icon: Sun, title: l("Paneles Solares", "Solar Panels") },
  { icon: Lock, title: l("Domótica y Cerraduras", "Home automation & Locks") },
];

const getProcessSteps = (l: any) => [
  {
    icon: Compass,
    title: l("Sesión de Descubrimiento", "Discovery Session"),
    desc: l("Definimos tu visión, presupuesto y alcance en una reunión de 45 min.", "We define your vision, budget and scope in a 45 min meeting."),
  },
  {
    icon: Ruler,
    title: l("Diseño y Cotización", "Design and Quote"),
    desc: l("Recibes planos, renders 3D y cotización detallada en 5 días hábiles.", "You receive plans, 3D renders and detailed quote in 5 business days."),
  },
  {
    icon: Hammer,
    title: l("Construcción en Taller", "Workshop Construction"),
    desc: l("Tu casa se fabrica en nuestro taller bajo control de calidad estricto.", "Your house is manufactured in our workshop under strict quality control."),
  },
  {
    icon: Truck,
    title: l("Entrega e Instalación", "Delivery and Installation"),
    desc: l("Transportamos, instalamos y entregas llaves. Listo para habitar.", "We transport, install and deliver keys. Ready to live."),
  },
];

const getFaqs = (l: any) => [
  {
    q: l("¿Necesito tener terreno propio?", "Do I need to own land?"),
    a: l("No, nosotros nos encargamos de todo. Te entregamos tu casa lista para habitar.", "No, we take care of everything. We deliver your home ready to live in.")
  },
  {
    q: l("¿Es necesaria una cimentación para mi contenedor?", "Is a foundation necessary for my container?"),
    a: l("No es estrictamente necesaria ya que existen varias opciones de soporte, sin embargo, la cimentación es la opción más recomendada para asegurar la durabilidad y estabilidad en proyectos de alta inversión. Te asesoramos para elegir la mejor base según tu terreno y modelo.", "It is not strictly necessary as there are several support options, however, a foundation is the most recommended option to ensure durability and stability in high-investment projects. We advise you to choose the best base according to your land and model."),
    pdf: {
      es: "/docs/esp/cimentación-contenedor-sunset-2026-esp.pdf",
      en: "/docs/esp/cimentación-contenedor-sunset-2026-esp.pdf"
    }
  },
  {
    q: l("¿Cuál es el costo de transportar mi contenedor?", "What is the cost of transporting my container?"),
    a: l("El costo varía según la distancia y la accesibilidad del terreno. Durante la fase de cotización, calculamos la logística exacta hacia tu ubicación en Baja California Sur.", "The cost varies depending on the distance and accessibility of the land. During the quote phase, we calculate the exact logistics to your location in Baja California Sur."),
    pdf: {
      es: "/docs/esp/transporte-contenedor-sunset-2026-esp.pdf",
      en: "/docs/esp/transporte-contenedor-sunset-2026-esp.pdf"
    }
  },
  {
    q: l("¿Cómo funcionan los servicios de agua y drenaje en mi contenedor?", "How do water and drainage services work in my container?"),
    a: l("Nuestros contenedores se entregan listos para conectarse a la red local o a sistemas independientes. Ofrecemos servicios adicionales para la instalación de plomería, drenaje y tanques de agua.", "Our containers are delivered ready to connect to the local grid or independent systems. We offer additional services for plumbing, drainage, and water tank installation."),
    pdf: {
      es: "/docs/esp/cisternayfosa-contenedor-sunset-2026-esp.pdf",
      en: "/docs/esp/cisternayfosa-contenedor-sunset-2026-esp.pdf"
    }
  },
  {
    q: l("¿Cuánto tiempo toma el proceso?", "How long does the process take?"),
    a: l("El diseño y cotización toma 5 días hábiles. Una vez aprobado, la fabricación e instalación se realiza en un mínimo de 30 días, dependiendo del modelo.", "Design and quote takes 5 business days. Once approved, manufacturing and installation is done in a minimum of 30 days, depending on the model.")
  },
  {
    q: l("¿Incluye trámite de permisos?", "Does it include permit processing?"),
    a: l("Nuestras casas modulares generalmente no requieren los mismos permisos que una obra tradicional, sin embargo, te asesoramos con la normativa local según la ubicación de tu terreno.", "Our modular houses generally do not require the same permits as traditional construction, however, we advise you on local regulations depending on your land location.")
  },
  {
    q: l("¿Tienen opciones de financiamiento?", "Do you have financing options?"),
    a: l("Contamos con esquemas de pago flexibles durante el proceso de construcción. Pregunta por nuestras opciones vigentes.", "We have flexible payment schemes during the construction process. Ask about our current options.")
  }
];

const getGalleryPhotos = (l: any) => [
  { src: "/casasur/galeria/WhatsApp Image 2026-03-27 at 1.49.52 PM (1).jpg", alt: l("Interior luminoso", "Bright interior"), col: "span 2", row: "span 2" },
  { src: "/casasur/galeria/WhatsApp Image 2026-03-27 at 1.49.52 PM (2).jpg", alt: l("Detalle de fachada", "Facade detail") },
  { src: "/casasur/galeria/WhatsApp Image 2026-03-27 at 1.49.52 PM (3).jpg", alt: l("Espacios integrados", "Integrated spaces") },
  { src: "/casasur/galeria/WhatsApp Image 2026-04-09 at 1.46.38 PM.jpg", alt: l("Acabados premium", "Premium finishes"), row: "span 2" },
  { src: "/casasur/galeria/WhatsApp Image 2026-04-09 at 3.33.40 PM.jpg", alt: l("Diseño funcional", "Functional design") },
  { src: "/casasur/galeria/WhatsApp Image 2026-04-09 at 3.33.41 PM (1).jpg", alt: l("Cocina moderna", "Modern kitchen"), col: "span 2" },
  { src: "/casasur/galeria/WhatsApp Image 2026-04-09 at 3.33.41 PM (2).jpg", alt: l("Confort térmico", "Thermal comfort") },
  { src: "/casasur/galeria/WhatsApp Image 2026-04-09 at 3.33.41 PM.jpg", alt: l("Instalación rápida", "Quick installation"), col: "span 2", row: "span 2" },
  { src: "/casasur/galeria/WhatsApp Image 2026-04-09 at 3.33.42 PM (1).jpg", alt: l("Baño de lujo", "Luxury bathroom") },
  { src: "/casasur/galeria/WhatsApp Image 2026-04-09 at 3.33.42 PM (2).jpg", alt: l("Vida modular", "Modular living") },
  { src: "/casasur/galeria/WhatsApp Image 2026-04-09 at 3.33.42 PM.jpg", alt: l("Calidad BCS", "BCS Quality") },
  { src: "/casasur/galeria/WhatsApp Image 2026-04-09 at 3.33.43 PM.jpg", alt: l("Tu terreno, tu casa", "Your land, your home") },
];

function FAQItem({ q, a, pdf }: { q: string, a: string, pdf?: { es: string, en: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  const { l } = useLanguage();
  
  return (
    <div className="border-b border-page-text/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-brand-blue"
      >
        <span className="font-literata text-lg font-medium text-page-text">{q}</span>
        <ChevronDown className={`w-5 h-5 text-page-text/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              <p className="font-montserrat text-sm font-light text-page-text/70 leading-relaxed">
                {a}
              </p>
              
              {pdf && (
                <div className="mt-4">
                  <a 
                    href={l(pdf.es, pdf.en)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-page-text/5 text-page-text hover:text-brand-blue hover:bg-brand-blue/5 transition-all text-[11px] font-montserrat font-bold uppercase tracking-wider group"
                  >
                    <FileText className="w-4 h-4 text-brand-blue/60 group-hover:text-brand-blue" />
                    <span>{l("Descargar Ficha Técnica (PDF)", "Download Tech Sheet (PDF)")}</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CasasSurPage() {
  const { l } = useLanguage();
  const [activeTab, setActiveTab] = useState<number | "extras">(0);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const { openLightbox } = useLightbox();
  const profiles = getProfiles(l);
  const models = getModels(l);
  const extraAmenities = getExtraAmenities(l);
  const processSteps = getProcessSteps(l);
  const faqs = getFaqs(l);
  const carouselVideoRef = useRef<HTMLVideoElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      // Hide near bottom
      if (v > 0.85) setShowIndicator(false);
      else setShowIndicator(true);
    });
  }, [scrollYProgress]);

  const handleModelChange = (i: number | "extras") => {
    setActiveTab(i);
    setActiveMediaIndex(0);
  };

  const waLink = (model?: string) => {
    const msg = model
      ? `Hola, me interesa cotizar el modelo ${model} de Casas Sur.`
      : `Hola, me interesa cotizar una casa de Casas Sur.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const activeData = activeTab !== "extras" ? models[activeTab] : null;

  // Derive mediaItems for carousel
  const mediaItems = activeData ? [
    ...(activeData.video ? [{ type: "video" as const, src: activeData.video }] : []),
    ...activeData.images.map(src => ({ type: "image" as const, src }))
  ] : [];

  // Autoplay carousel video on mobile when tab changes or index changes
  useEffect(() => {
    if (activeMediaIndex !== null && mediaItems.length > 0 && mediaItems[activeMediaIndex]?.type === "video") {
      const playVideo = () => {
        if (carouselVideoRef && carouselVideoRef.current) {
          carouselVideoRef.current.defaultMuted = true; carouselVideoRef.current.muted = true; carouselVideoRef.current.play().catch(() => {
            // Fallback if autoplay is blocked
          });
        }
      };

      // Small timeout to ensure element is in DOM
      const timer = setTimeout(playVideo, 100);
      return () => clearTimeout(timer);
    }
  }, [activeMediaIndex, mediaItems]);

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
            src="/casasur/hero.webp"
            alt="Casa Sur — vivienda moderna lista en 45 días"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-page-text/40 via-page-text/15 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-page-bg via-page-bg/80 to-transparent z-20" />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-1 items-center pb-20 pt-24 sm:pb-24 sm:pt-32 lg:pb-40 lg:pt-52 3xl:pb-32 3xl:pt-48 text-page-text">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { icon: Clock, label: l("30 días", "30 days") },
                { icon: KeyRound, label: l("Llave en mano en semanas", "Turnkey in weeks") },
                { icon: DollarSign, label: l("Empieza con $10 mil", "Start with $10k") },
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
                text={l("Tu casa lista en 30 días.", "Your house ready in 30 days.")}
                className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl font-literata font-light tracking-tighter text-white drop-shadow-md"
                type="word"
                delayChildren={0.3}
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <CinematicHeading
                text={l("Empieza solo con $10 mil MXN.", "Start with only $10k MXN.")}
                className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-literata font-light tracking-tighter text-page-text italic drop-shadow-md"
                type="word"
                delayChildren={0.6}
              />
            </div>

            <div className="text-base sm:text-xl font-montserrat font-light max-w-2xl leading-relaxed text-page-text mb-8 sm:mb-10">
              <RevealLine delay={0.9}>{l("Hecha a tu medida, en tu propio terreno, con llave en mano en semanas.", "Custom made, on your own land, turnkey in final weeks.")}</RevealLine>
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
                <span className="relative z-10 flex items-center">{l("Ver modelos", "View models")}
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
                  <MessageCircle className="mr-2 h-4 w-4" />{l("Cotizar ahora", "Quote now")}
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Scroll Indicator (Mobile only, persistent until near CTA) */}
      <AnimatePresence>
        {showIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] lg:hidden flex flex-col items-center gap-1.5 pointer-events-none"
          >
            <div className="w-9 h-9 rounded-full border border-page-text/10 flex items-center justify-center bg-white/30 backdrop-blur-xl shadow-lg">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-page-text/50" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════
          2. PARA QUIÉN ES
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-brand-blue/80 tracking-[0.2em] uppercase block mb-3">{l("PERFILES", "PROFILES")}</span>
            <h2 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-literata font-light text-page-text italic">{l("¿Por qué elegir Casas Sur?", "Why choose Casas Sur?")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {profiles.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.1}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                variants={fadeUp}
                className="animate-on-scroll group shadow-sm p-8 rounded-3xl bg-page-bg-alt border border-page-text/5 hover:shadow-md hover:shadow-page-text/10 will-change-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5 transition-transform duration-500 border border-brand-blue/20 group-hover:translate-x-1">
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
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56 bg-page-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll text-center mb-16"
          >
            <span className="font-montserrat font-medium text-xs text-brand-blue/80 tracking-[0.2em] uppercase block mb-3">{l("BENEFICIOS", "BENEFITS")}</span>
            <h2 className="text-2xl sm:text-4xl font-literata font-light text-page-text italic">{l("Rentabilidad y Eficiencia", "Profitability and Efficiency")}</h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 mb-16 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                metric: l("12–24 meses", "12-24 months"),
                label: l("Recuperas inversión con Airbnb", "Recover investment with Airbnb"),
              },
              {
                icon: DollarSign,
                metric: l("Más barato", "Cheaper"),
                label: l("Que obra negra tradicional", "Than traditional gray work"),
              },
              {
                icon: Clock,
                metric: l("30 días", "30 days"),
                label: l("Para tener las llaves en mano", "To have keys in hand"),
              },
            ].map((item, i) => (
              <React.Fragment key={item.label}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i * 0.15}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  variants={fadeUp}
                  className="animate-on-scroll flex-1 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green/10 text-brand-green/80 mb-6 group-hover:scale-110 transition-transform duration-500 border border-brand-green/20">
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
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-3xl sm:rounded-full bg-page-bg-alt text-page-text font-montserrat text-sm sm:text-base shadow-lg shadow-black/5 text-center sm:text-left">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="max-w-[260px] sm:max-w-none">{l("Instalamos en terreno ejidal o privado en toda BCS.", "We install on ejidal or private land anywhere in BCS.")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. MODELOS & VIDEOS (Nueva Interfaz) + Amenidades Compactas
          ══════════════════════════════════════════════════════════════ */}
      <section id="modelos" className="relative scroll-mt-20 py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
          {/* Header */}
          <div className="text-center mb-12 mt-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-montserrat font-medium text-sm text-brand-blue/80 tracking-[0.2em] uppercase block mb-3">{l("Catálogo Interactivo", "Interactive Catalog")}</span>
              <h2 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-literata font-light text-page-text italic mb-8">{l("Un modelo para cada visión", "A model for every vision")}</h2>

              {/* Tabs */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-1.5 rounded-full bg-page-text/5 inline-flex backdrop-blur-md mb-2">
                  {models.map((m, i) => (
                    <button
                      key={m.id}
                      onClick={() => handleModelChange(i)}
                      className={`px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap rounded-full font-montserrat text-xs sm:text-sm font-semibold transition-all duration-300 ${activeTab === i
                        ? "bg-page-text text-white shadow-xl shadow-page-text/20 scale-105"
                        : "text-page-text/70 hover:text-page-text hover:bg-page-text/5"
                        }`}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handleModelChange("extras")}
                  className={`px-5 py-2 rounded-full font-montserrat text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${activeTab === "extras"
                    ? "bg-brand-blue border-brand-blue text-white shadow-md shadow-brand-blue/20 scale-105"
                    : "bg-transparent border-page-text/20 text-page-text/70 hover:border-brand-blue/50 hover:text-brand-blue"
                    }`}
                >{l("Ver Amenidades Extra", "View Extra Amenities")}</button>
              </div>
            </motion.div>
          </div>

          {/* Área Principal: Layout Dividido */}
          <AnimatePresence mode="wait">
            {activeTab === "extras" ? (
              <motion.div
                key="extras"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mb-12"
              >
                <div className="bg-white border border-page-text/10 rounded-3xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto flex flex-col gap-8">
                  <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl font-literata font-light text-page-text mb-3">{l("Amenidades y Extras Opcionales", "Optional Amenities and Extras")}</h3>
                    <p className="font-montserrat text-page-text/70 text-base max-w-xl mx-auto">{l("Personaliza tu modelo Casas Sur con elementos adicionales diseñados para elevar tu comodidad y estilo de vida.", "Customize your Casas Sur model with additional elements designed to elevate your comfort and lifestyle.")} <span className="italic font-medium text-page-text/90">{l("Pregunte al momento de cotizar.", "Ask when quoting.")}</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-2">
                    {[
                      ...extraAmenities,
                      { icon: Palmtree, title: l("Paisajismo", "Landscaping") },
                      { icon: Hammer, title: l("Bardas", "Fences") },
                      { icon: Sun, title: l("Toldos de mallasombra", "Shade sail awnings") }
                    ].map((amenity, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-page-text/5 border border-page-text/10 hover:border-brand-blue/30 hover:bg-page-text/[0.08] transition-all duration-500 text-left group"
                      >
                        <div className="w-10 h-10 shrink-0 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <amenity.icon className="w-5 h-5 text-brand-blue/80" />
                        </div>
                        <span className="font-montserrat font-medium text-page-text/90 text-sm leading-tight flex-1">
                          {amenity.title}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6">
                    <a
                      href={waLink("Extras Opcionales")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-12 px-8 bg-page-text text-white hover:bg-page-text/90 shadow-md"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />{l("Consultar Extras", "Consult Extras")}
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (activeData && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row gap-6 mb-12"
              >
                {/* Columna Izquierda: Media & Thumbnails */}
                <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col gap-4">
                  {/* Media Principal (Carrusel) */}
                  <div className="w-full h-[50vh] sm:h-[55vh] lg:h-[50vh] xl:h-[55vh] relative overflow-hidden bg-black/5 shadow-2xl shadow-black/10 group">
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
                          <div
                            className="w-full h-full relative cursor-pointer"
                            onClick={() => openLightbox(mediaItems.map(item => ({ src: item.src, alt: activeData.name, type: item.type })), activeMediaIndex)}
                          >
                            <video
                              ref={carouselVideoRef}
                              src={mediaItems[activeMediaIndex].src}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="auto"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/20">
                              <div className="p-4 rounded-full bg-white/20 backdrop-blur-md">
                                <Search className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="w-full h-full relative cursor-pointer"
                            onClick={() => openLightbox(mediaItems.map(item => ({ src: item.src, alt: activeData.name, type: item.type })), activeMediaIndex)}
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
                        {mediaItems[activeMediaIndex].type === "video" ? l(`Recorrido ${activeData.name}`, `Tour ${activeData.name}`) : l(`Vista ${activeData.name}`, `View ${activeData.name}`)}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnails Interactivos */}
                  {mediaItems.length > 1 && (
                    <div className="flex gap-3 sm:gap-4 h-24 sm:h-28">
                      {mediaItems.slice(0, 4).map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex-1 relative overflow-hidden cursor-pointer rounded-none transition-all duration-300 border-2 ${activeMediaIndex === idx ? "border-brand-green/80 shadow-md scale-[1.02] z-10" : "border-transparent opacity-70 hover:opacity-100"}`}
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

                {/* Columna Derecha: Specs */}
                <div className="w-full lg:w-[40%] xl:w-[35%] flex flex-col gap-6">
                  <div className="bg-white border border-page-text/8 rounded-3xl shadow-xl flex-1 flex flex-col overflow-hidden">

                    {/* Header: Model name + badge */}
                    <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green/80 font-montserrat text-[10px] font-bold uppercase tracking-wider mb-4">
                        <Star className="w-3 h-3" />{activeData.ideal}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-literata font-light text-page-text leading-tight">
                        {activeData.cardName}
                      </h3>
                    </div>

                    {/* Price block */}
                    <div className="mx-6 sm:mx-8 px-5 py-4 rounded-2xl bg-gradient-to-br from-page-text/[0.03] to-brand-blue/[0.05] border border-page-text/5 mb-2">
                      <span className="text-[10px] font-montserrat font-bold uppercase tracking-[0.25em] text-brand-blue/50 block mb-1">
                        {l("Inversión", "Investment")}
                      </span>
                      <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                        <span className="text-2xl sm:text-[1.7rem] font-literata font-semibold text-page-text tracking-tight leading-tight">
                          {activeData.price.replace(" MXN", "")}
                        </span>
                        <span className="text-xs sm:text-sm font-montserrat font-bold text-brand-blue/40 uppercase">
                          MXN
                        </span>
                      </div>
                    </div>

                    {/* Rent estimate */}
                    <div className="mx-6 sm:mx-8 py-3 flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-green/70 shrink-0" />
                      <span className="font-montserrat text-xs text-page-text/60 font-medium">
                        {activeData.profit}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="mx-6 sm:mx-8 h-px bg-page-text/15" />

                    {/* Features list */}
                    <div className="px-6 sm:px-8 py-5 flex-1">
                      <span className="text-[10px] font-montserrat font-bold uppercase tracking-[0.2em] text-page-text/40 block mb-3">
                        {l("Incluye", "Includes")}
                      </span>
                      <div className="space-y-2.5">
                        {activeData.includes.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <div className="w-4 h-4 shrink-0 mt-0.5 rounded-full bg-brand-green/10 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-brand-green/80" />
                            </div>
                            <span className="font-montserrat text-[13px] text-page-text/75 leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={(e) => { e.preventDefault(); handleModelChange("extras"); }}
                        className="mt-5 flex items-center gap-1.5 text-[11px] font-montserrat font-bold uppercase tracking-wider text-page-text/50 hover:text-brand-blue transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        {l("Ver amenidades extra", "View extra amenities")}
                      </button>
                    </div>

                    {/* CTA */}
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                      <a
                        href={waLink(activeData.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full group overflow-hidden rounded-full inline-flex items-center justify-center font-montserrat font-semibold transition-all h-13 px-6 text-sm bg-page-text text-white hover:bg-page-text/90 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />{l("Cotizar este modelo", "Quote this model")}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>



        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. PROCESO
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56 overflow-hidden bg-page-bg text-page-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-brand-blue/80 tracking-[0.2em] uppercase block mb-3">{l("Tu Camino", "Your Path")}</span>
            <h2 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-literata font-light italic text-page-text">{l("De la idea a las llaves", "From idea to keys")}</h2>
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
              <span className="font-montserrat text-xs sm:text-sm font-semibold leading-tight max-w-[240px] sm:max-w-none text-page-text">{l("Con $10,000 MXN de depósito iniciamos tu diseño.", "With a $10,000 MXN deposit we start your design.")}</span>
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
                  className="text-brand-blue/40"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-12 w-px bg-brand-blue/10 z-0">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-brand-blue via-brand-blue/50 to-transparent"
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
                      <div className="w-16 h-16 rounded-2xl bg-page-bg border-2 border-brand-blue/10 flex items-center justify-center mx-auto relative z-10 group transition-all duration-300 hover:border-brand-blue/30 shadow-sm">
                        <step.icon className="w-7 h-7 text-brand-blue/80 group-hover:scale-110 transition-transform" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative group/card cursor-default">
                    <div className="relative p-6 px-7 rounded-[2rem] bg-page-bg-alt border border-page-text/5 transition-card duration-500 hover:-translate-y-1 hover:bg-page-bg-alt/80 hover:shadow-md">
                      <span className="font-montserrat font-bold text-[10px] text-page-text/80 tracking-[0.3em] uppercase block mb-4">
                        {l("Paso", "Step")} {i + 1}
                      </span>
                      <h3 className="text-xl font-literata font-medium leading-tight mb-3 text-page-text">
                        {step.title}
                      </h3>
                      <p className="font-montserrat font-light text-sm text-page-text/80 leading-relaxed max-w-[210px] mx-auto">
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
          6. GALERÍA DE RESULTADOS
          ══════════════════════════════════════════════════════════════ */}
      <PhotoCollage
        photos={getGalleryPhotos(l)}
        title={l("Estás a un paso de hacerlo realidad", "You are one step away from making it real")}
        subtitle={l("Increíbles resultados", "Incredible results")}
        accentColor="text-brand-blue/80"
      />

      {/* ══════════════════════════════════════════════════════════════════
          7. FAQS
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 lg:py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={0}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-5xl font-literata font-light italic text-page-text">{l("¿Tienes preguntas?", "Do you have questions?")}</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            className="border-t border-page-text/10"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} pdf={faq.pdf} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. CTA FINAL
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 lg:py-16 text-center bg-page-bg-alt text-page-text overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-literata font-light mb-6 leading-tight">{l("¿Hablamos?", "Sounds good?")}</h2>
            <p className="text-xl sm:text-2xl font-literata font-light text-page-text/80 italic mb-4">
              {l("Empieza con $10,000", "Start with $10,000")}
              <span className="text-sm ml-2 opacity-60 not-italic font-montserrat font-bold">MXN</span>
            </p>
            <p className="text-page-text/60 font-montserrat font-light text-base max-w-md mx-auto mb-10">{l("Agenda tu sesión de descubrimiento y recibe tu cotización en menos de 5 días.", "Schedule your discovery session and receive your quote in less than 5 days.")}</p>

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
                <span className="relative z-10 flex items-center">{l("Ver modelos", "View models")}
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
