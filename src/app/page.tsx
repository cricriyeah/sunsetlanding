"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Leaf, Heart, Sparkles, Home as HomeIcon, Bath, Utensils, Clock, KeyRound, DollarSign } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroContent } from "@/components/HeroContent";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { CinematicHeading } from "@/components/ui/CinematicHeading";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "none" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "none",
    transition: { duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] },
  }),
};

export default function Home() {
  const { l } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Hero video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-page-bg text-page-text overflow-x-hidden">
      <Navbar />

      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1774756252/12297868_3840_2160_30fps-00.00.00.000-00.00.17.018_iqn6f3.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay gradients for readability with brand brown */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-orange/40 via-transparent to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-orange/20 via-transparent to-transparent" />


        <HeroContent />

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-page-bg to-transparent z-10 pointer-events-none" />
      </section>

      {/* ──── FILOSOFÍA ──── */}
      <section className="relative py-20 lg:py-32 bg-page-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28">

          {/* Header - Cinematic Reveal */}
          <div className="mb-16 lg:mb-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-montserrat text-xs font-semibold text-page-text/60 tracking-[0.3em] uppercase block mb-6"
            >
              {l("Nuestra Filosofía", "Our Philosophy")}
            </motion.span>
            <CinematicHeading
              text={l("Diseñamos el equilibrio entre la luz y el silencio", "We design the balance between light and silence")}
              className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl font-literata font-light text-page-text leading-[1.1] max-w-4xl"
              type="word"
              delayChildren={0.2}
            />
          </div>

          {/* Mosaic & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            {/* Narrative Text */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.4}
                className="space-y-8"
              >
                <p className="text-page-text font-montserrat font-light text-lg lg:text-xl leading-relaxed max-w-md">
                  {l("En", "At")} <span className="font-semibold italic">Sunset</span>, {l("no construimos estructuras; esculpimos experiencias. Cada proyecto es una respuesta consciente al entorno único de La Baja.", "we don't build structures; we sculpt experiences. Each project is a conscious response to the unique environment of La Baja.")}
                </p>
                <div className="h-px w-16 bg-page-text" />
                <p className="text-page-text font-montserrat font-light text-base lg:text-lg leading-relaxed opacity-80 max-w-md">
                  {l("Creemos que el verdadero lujo reside en la armonía. Por eso integramos materiales locales, luz natural cenital y ventilación cruzada para crear refugios que respiran y fluyen con el desierto y el mar.", "We believe true luxury lies in harmony. That's why we integrate local materials, zenithal natural light, and cross ventilation to create refuges that breathe and flow with the desert and the sea.")}
                </p>
                <Button
                  variant="ghost"
                  href="/nosotros"
                  className="group px-0 !text-page-text font-montserrat tracking-widest text-[10px] font-bold uppercase hover:bg-transparent"
                >
                  {l("Conoce nuestra visión", "Discover our vision")} <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>

            {/* The Visual Mosaic */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              <div className="grid grid-cols-12 gap-3 h-[450px] lg:h-[550px]">

                {/* Image 1: Main Exterior Anchor (Afuera 3) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="col-span-7 h-full relative rounded-none overflow-hidden group"
                >
                  <Image
                    src="/afuera3.webp"
                    alt="Estructura Exterior"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-page-text/5" />
                </motion.div>

                {/* Secondary Column */}
                <div className="col-span-5 grid grid-rows-2 gap-3">
                  {/* Image 2: Alberca */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                    className="relative rounded-none overflow-hidden group"
                  >
                    <Image
                      src="/alberca.webp"
                      alt="Área de Alberca"
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Image 3: Bano */}
                  <motion.div
                    initial={{ opacity: 0, x: 20, filter: "none" }}
                    whileInView={{ opacity: 1, x: 0, filter: "none" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                    className="relative rounded-none overflow-hidden group"
                    style={{ 
                      display: "inline-block", 
                      whiteSpace: "pre",
                      willChange: "opacity, transform"
                    }}
                  >
                    <Image
                      src="/bano.webp"
                      alt="Detalle de Interior"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>


              </div>
            </div>
          </div>

          {/* Core Pillars - Card-based Values */}
          <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Pillar 1: Vanguardia */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-start p-10 bg-page-bg border border-page-text/10 transition-card duration-500 hover:shadow-sm hover:shadow-brand-blue/5 rounded-3xl"
            >
              <div className="w-12 h-12 mb-10 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-2xl transition-card duration-500 group-hover:translate-x-1">
                <Compass className="w-6 h-6 text-brand-blue" />
              </div>
              <h4 className="text-2xl font-literata font-light italic mb-5 text-page-text">{l("Vanguardia Consciente", "Conscious Vanguard")}</h4>
              <p className="text-sm font-montserrat font-light text-page-text/80 leading-relaxed">
                {l("Utilizamos sistemas constructivos modernos para optimizar tiempos sin sacrificar la calidad artesanal que nos define.", "We use modern construction systems to optimize time without sacrificing the artisanal quality that defines us.")}
              </p>
            </motion.div>

            {/* Pillar 2: Naturaleza */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-start p-10 bg-page-bg border border-page-text/10 transition-card duration-500 hover:shadow-sm hover:shadow-sc-accent/5 rounded-3xl"
            >
              <div className="w-12 h-12 mb-10 flex items-center justify-center bg-sc-accent/10 border border-sc-accent/20 rounded-2xl transition-transform duration-500 group-hover:translate-x-1">
                <Leaf className="w-6 h-6 text-sc-accent" />
              </div>
              <h4 className="text-2xl font-literata font-light italic mb-5 text-page-text">{l("Respeto al Entorno", "Respect for the Environment")}</h4>
              <p className="text-sm font-montserrat font-light text-page-text/80 leading-relaxed">
                {l("Nuestros proyectos se pierden en el paisaje, respetando la topografía y los recursos naturales de Baja California Sur.", "Our projects blend into the landscape, respecting the topography and natural resources of Baja California Sur.")}
              </p>
            </motion.div>

            {/* Pillar 3: Bienestar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.3}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-start p-10 bg-page-bg border border-page-text/10 transition-card duration-500 hover:shadow-sm hover:shadow-brand-orange/5 rounded-3xl"
            >
              <div className="w-12 h-12 mb-10 flex items-center justify-center bg-brand-orange/10 border border-brand-orange/20 rounded-2xl transition-transform duration-500 group-hover:translate-x-1">
                <Heart className="w-6 h-6 text-brand-orange" />
              </div>
              <h4 className="text-xl sm:text-2xl font-literata font-light italic mb-5 text-page-text">{l("Habitar el Bienestar", "Inhabiting Wellness")}</h4>
              <p className="text-sm font-montserrat font-light text-page-text/80 leading-relaxed">
                {l("Diseñamos para el ser humano: espacios que invitan a la calma, el silencio y la desconexión total del ruido urbano.", "We design for human beings: spaces that invite calm, silence, and total disconnection from urban noise.")}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──── PROYECTOS DESTACADOS ──── */}
      <section id="proyectos" className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56 bg-page-bg-alt scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={0}
            variants={fadeUp}
            className="animate-on-scroll mb-20 text-center max-w-3xl mx-auto"
          >
            <span className="font-montserrat text-sm font-medium text-page-text tracking-[0.2em] uppercase block mb-4">{l("Nuestras Obras", "Our Works")}</span>
            <h2 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-literata font-light text-page-text italic">
              {l("Proyectos Destacados", "Featured Projects")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {/* Project 1: Casas Sur */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
              variants={fadeUp}
              className="animate-on-scroll"
            >
              <Link href="/proyectos/casas-sur" className="group flex flex-col md:flex-row h-full rounded-3xl bg-page-bg border border-page-text/10 shadow-sm hover:shadow-sm hover:shadow-page-text/5 transition-card duration-500 overflow-hidden">
                <div className="relative w-full md:w-[55%] aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full bg-brand-orange text-white font-montserrat font-bold text-[10px] tracking-[0.2em] uppercase border border-white/10 backdrop-blur-md">
                    {l("Empieza con $10,000 MXN", "Starts at $10,000 MXN")}
                  </div>

                  <Image
                    src="/casasur/hero.webp"
                    alt="Casas Sur"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 lg:p-12 w-full md:w-[45%] flex flex-col justify-center">
                  <span className="font-montserrat text-xs font-semibold tracking-widest text-brand-blue uppercase mb-3">Casas Sur</span>
                  <h3 className="text-3xl lg:text-4xl font-literata text-page-text mb-4 group-hover:text-brand-blue transition-colors duration-300">
                    {l("Vivienda Modular Lista", "Ready Modular Housing")}
                  </h3>
                  <p className="text-page-text font-montserrat font-light text-base lg:text-lg mb-8 leading-relaxed">
                    {l("Vivienda modular lista en 30 días. Tu hogar, rápido y accesible.", "Modular housing ready in 30 days. Your home, fast and accessible.")}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-montserrat font-semibold text-page-text group-hover:text-brand-blue transition-colors duration-300">
                    {l("Explorar proyecto", "Explore project")} <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 2: Sunset Condominios */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.2}
              variants={fadeUp}
              className="animate-on-scroll"
            >
              <Link href="/proyectos/sunset-condominios" className="group flex flex-col md:flex-row-reverse h-full rounded-3xl bg-page-bg border border-page-text/10 shadow-sm hover:shadow-sm hover:shadow-page-text/5 transition-card duration-500 overflow-hidden">
                <div className="relative w-full md:w-[55%] aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full bg-sc-contrast/80 text-white font-montserrat font-light text-xs tracking-widest uppercase border border-white/10 backdrop-blur-md">
                    {l("Preventa", "Presale")}
                  </div>

                  <Image
                    src="/herocondo3.webp"
                    alt="Sunset Condominios"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 lg:p-12 w-full md:w-[45%] flex flex-col justify-center">
                  <span className="font-montserrat text-xs font-semibold tracking-widest text-brand-orange uppercase mb-3">Sunset Condominios</span>
                  <h3 className="text-3xl lg:text-4xl font-literata text-page-text mb-4 group-hover:text-brand-orange transition-colors duration-300">
                    {l("Confort en la Bahía", "Comfort in the Bay")}
                  </h3>
                  <p className="text-page-text font-montserrat font-light text-base lg:text-lg mb-8 leading-relaxed">
                    {l("Un refugio de diseño moderno donde el confort del hogar se encuentra con la belleza del horizonte marino y las brisas del Golfo.", "A modern design refuge where the comfort of home meets the beauty of the sea horizon and Gulf breezes.")}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-montserrat font-semibold text-page-text group-hover:text-brand-orange transition-colors duration-300">
                    {l("Explorar proyecto", "Explore project")} <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ──── CTA ──── */}
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56 bg-page-text text-page-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={0}
            variants={fadeUp}
            className="animate-on-scroll"
          >
            <h2 className="text-3xl sm:text-5xl font-literata font-light italic mb-6">
              {l("Construyamos juntos tu futuro", "Let's build your future together")}
            </h2>
            <p className="font-montserrat font-light text-lg max-w-xl mx-auto mb-10 opacity-90">
              {l("Conoce nuestra visión inmobiliaria y contáctanos para descubrir la próxima etapa de tu vida en La Baja.", "Discover our real estate vision and contact us to uncover the next stage of your life in La Baja.")}
            </p>
            <Button
              href="/nosotros"
              size="sm"
              className="mt-4 shadow-sm shadow-black/20"
            >
              {l("Conocer al equipo", "Meet the team")}
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
