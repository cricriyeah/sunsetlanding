"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, animate } from "framer-motion";
import {
  HandCoins,
  CalendarDays,
  ArrowRight,
  UserCheck,
  FileText,
  Percent,
  Clock,
  Phone,
  MessageSquare,
  X
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
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

export default function FinanciamientoPage() {
  const { l } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (isSplashVisible) return;

    // Auto-scroll after typing animation completes (approx 3 seconds)
    const timer = setTimeout(() => {
      if (contentRef.current) {
        const targetScroll = contentRef.current.offsetTop;

        animate(window.scrollY, targetScroll, {
          duration: 1.5, // Snappier duration
          ease: [0.32, 0, 0.1, 1], // Cinematic cubic-bezier easing
          onUpdate: (latest) => window.scrollTo(0, latest)
        });
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-page-bg text-page-text overflow-x-hidden">
      {/* ──── VIDEO HERO (ATTENTION) ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1774771720/5981451-uhd_4096_2160_25fps_wfuw6b.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 z-[1] bg-gradient-to-t from-page-bg via-transparent to-transparent" />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-1 items-center justify-center">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 text-center">
            <CinematicHeading
              text={l("¿Los bancos cobran demasiado interés?", "Do banks charge too much interest?")}
              className="text-4xl sm:text-6xl lg:text-8xl font-literata font-light tracking-tight text-white drop-shadow-2xl"
              type="char"
              variant="typing"
              staggerChildren={0.08}
              delayChildren={0.4}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, filter: "none" }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12"
            >
              <div className="w-[3px] h-24 bg-gradient-to-b from-white to-transparent mx-auto opacity-70" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── PROGRAMA HERO (CONTENT) ──── */}
      <section ref={contentRef} className="relative py-24 sm:py-32 flex flex-col">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
            className="animate-on-scroll font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-4"
          >{l("Programa Residencial", "Residential Program")}</motion.span>

          <CinematicHeading
            text={l("Financiamiento", "Financing")}
            className="text-4xl sm:text-6xl lg:text-7xl font-literata font-light tracking-tight mb-6 text-page-text"
            type="word"
            delayChildren={0.2}
          />

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.4}
            className="animate-on-scroll text-lg sm:text-xl text-page-text/80 font-montserrat font-light max-w-2xl leading-relaxed"
          >{l("Construye tu hogar ideal en La Baja con nuestro Programa 40/60. Tú pones el terreno, nosotros financiamos tu futuro.", "Build your ideal home in La Baja with our 40/60 Program. You provide the land, we finance your future.")}</motion.p>
        </div>
      </section>

      {/* ──── PROGRAMA 40/60 ──── */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0}
              variants={fadeUp}
              className="animate-on-scroll"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-page-text/5 border border-page-text/5 flex items-center justify-center">
                  <HandCoins className="w-5 h-5 text-page-text" />
                </div>
                <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase">{l("El Modelo", "The Model")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-literata font-light text-page-text/90 italic mb-8">{l("Esquema de Inversión 40/60", "40/60 Investment Scheme")}</h2>
              <div className="space-y-6">
                <p className="text-page-text font-montserrat font-light text-base sm:text-lg leading-relaxed">{l("Ofrecemos nuestro Programa 40/60, en el cual el cliente aporta su terreno libre de gravamen y nosotros financiamos el 60% del costo de construcción.", "We offer our 40/60 Program, in which the client provides their lien-free land and we finance 60% of the construction cost.")}</p>
                <div className="bg-page-text/5 border border-page-text/5 rounded-2xl p-6 sm:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <Percent className="w-5 h-5 text-sc-contrast mt-1 shrink-0" />
                    <div>
                      <h4 className="font-literata text-page-text text-lg mb-1">{l("Tasa Preferencial", "Preferential Rate")}</h4>
                      <p className="text-page-text font-montserrat font-light text-sm italic">{l("7.99% anual fija, brindando estabilidad a tu inversión.", "7.99% fixed annual rate, providing stability to your investment.")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CalendarDays className="w-5 h-5 text-sc-contrast-light mt-1 shrink-0" />
                    <div>
                      <h4 className="font-literata text-page-text text-lg mb-1">{l("Plazo Flexible", "Flexible Term")}</h4>
                      <p className="text-page-text font-montserrat font-light text-sm italic">{l("Hasta 30 años de plazo máximo para liquidar el financiamiento.", "Up to 30 years maximum term to settle the financing.")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0.2}
              variants={fadeUp}
              className="animate-on-scroll grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="sm:-translate-y-8">
                <motion.div 
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="p-12 sm:p-14 rounded-[2.5rem] bg-sc-contrast/10 border border-sc-contrast/10 text-center flex flex-col items-center justify-center hover:bg-sc-contrast/10 transition-all duration-500 group h-full"
                >
                  <span className="text-5xl sm:text-7xl font-literata font-light text-sc-contrast mb-4 group-hover:scale-110 transition-transform">40%</span>
                  <p className="text-page-text font-montserrat font-light text-sm sm:text-base uppercase tracking-widest font-semibold">{l("Tú aportas", "You contribute")}</p>
                  <p className="text-page-text font-montserrat font-light text-xs sm:text-sm mt-3 italic leading-tight">{l("Terreno y aportación inicial", "Land and initial contribution")}</p>
                </motion.div>
              </div>
              <div className="sm:translate-y-16">
                <motion.div 
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="p-12 sm:p-14 rounded-[2.5rem] bg-sc-contrast-light/10 border border-sc-contrast-light/10 text-center flex flex-col items-center justify-center hover:bg-sc-contrast-light/10 transition-all duration-500 group h-full"
                >
                  <span className="text-5xl sm:text-7xl font-literata font-light text-sc-contrast-light mb-4 group-hover:scale-110 transition-transform">60%</span>
                  <p className="text-page-text font-montserrat font-light text-sm sm:text-base uppercase tracking-widest font-semibold">{l("Financiamos", "We finance")}</p>
                  <p className="text-page-text font-montserrat font-light text-xs sm:text-sm mt-3 italic leading-tight">{l("Del costo total de obra", "Of total construction cost")}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── PROCESO ──── */}
      <section className="relative py-24 sm:py-32 bg-sc-contrast/[0.04] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0}
            variants={fadeUp}
            className="animate-on-scroll mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-3">{l("El Camino", "The Path")}</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">{l("Pasos del Proceso", "Process Steps")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0.1}
              variants={fadeUp}
              className="animate-on-scroll relative flex flex-col sm:flex-row items-start gap-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-page-text/5 shadow-sm flex items-center justify-center font-literata text-xl text-sc-contrast">1</div>
              <div>
                <h3 className="text-2xl font-literata text-page-text mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-page-text" />
                  {l("Entrevista Inicial", "Initial Interview")}
                </h3>
                <p className="text-page-text font-montserrat font-light text-base leading-relaxed mb-4">{l("Reunión presencial o vía Zoom para definir las especificaciones de la obra.", "In-person or Zoom meeting to define the project specifications.")}</p>
                <div className="bg-white/50 p-4 rounded-xl border border-page-text/5 text-left">
                  <p className="text-xs font-montserrat font-semibold italic text-page-text uppercase tracking-wider mb-2">{l("Fundamental:", "Essential:")}</p>
                  <p className="text-sm text-page-text font-montserrat font-light leading-relaxed">{l("En caso de ser una pareja casada, es fundamental que ambos asistan para asegurar el consenso en el diseño y visión del hogar.", "In case of a married couple, it is essential that both attend to ensure consensus on the design and vision of the home.")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0.2}
              variants={fadeUp}
              className="animate-on-scroll relative flex flex-col sm:flex-row items-start gap-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-page-text/5 shadow-sm flex items-center justify-center font-literata text-xl text-sc-contrast-light">2</div>
              <div>
                <h3 className="text-2xl font-literata text-page-text mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-page-text" />
                  {l("Cotización y Plazos", "Quote and Deadlines")}
                </h3>
                <p className="text-page-text font-montserrat font-light text-base leading-relaxed mb-4">{l("Finalizado el diseño, entregaremos una propuesta integral que incluye:", "Once the design is finished, we will deliver a comprehensive proposal that includes:")}</p>
                <ul className="space-y-3 font-montserrat font-light text-sm text-page-text">
                  <li className="flex items-center gap-2">• {l("Cotización detallada de la obra", "Detailed construction quote")}</li>
                  <li className="flex items-center gap-2">• {l("Desglose financiero completo", "Complete financial breakdown")}</li>
                  <li className="flex items-center gap-2">• {l("Cronograma detallado de ejecución", "Detailed execution schedule")}</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── ESQUEMAS DE PAGO ──── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0}
              variants={fadeUp}
              className="animate-on-scroll"
            >
              <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-3">{l("Transparencia", "Transparency")}</span>
              <h2 className="text-3xl sm:text-4xl font-literata font-light text-page-text italic mb-8">{l("Esquemas de Pagos", "Payment Schemes")}</h2>
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-sc-contrast/[0.03] border border-sc-contrast/10 p-8 rounded-3xl group hover:bg-sc-contrast/5 transition-colors duration-500"
                >
                  <h4 className="font-literata text-xl text-page-text mb-4 flex items-center justify-between">
                    {l("Con Financiamiento", "With Financing")}
                    <HandCoins className="w-5 h-5 text-sc-contrast group-hover:scale-110 transition-transform" />
                  </h4>
                  <p className="text-page-text font-montserrat font-light text-base leading-relaxed">{l("Al firmar contrato, se deposita el 30% de tu aportación inicial (del 40% correspondiente). El resto se cubre en cuotas mensuales durante la construcción.", "Upon signing the contract, 30% of your initial contribution (of the corresponding 40%) is deposited. The rest is covered in monthly installments during construction.")}</p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-sc-contrast-light/[0.03] border border-sc-contrast-light/10 p-8 rounded-3xl group hover:bg-sc-contrast-light/5 transition-colors duration-500"
                >
                  <h4 className="font-literata text-xl text-page-text mb-4 flex items-center justify-between">
                    {l("Sin Financiamiento", "Without Financing")}
                    <X className="w-5 h-5 text-sc-contrast-light group-hover:scale-110 transition-transform" />
                  </h4>
                  <p className="text-page-text font-montserrat font-light text-base leading-relaxed">{l("El depósito inicial es del 25% del costo total de la obra, con pagos mensuales subsecuentes conforme al catálogo de conceptos.", "The initial deposit is 25% of the total cost of the work, with subsequent monthly payments according to the concept catalog.")}</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0.2}
              variants={fadeUp}
              className="animate-on-scroll bg-white/40 border border-page-text/5 p-10 rounded-3xl shadow-xl shadow-page-text/5 relative overflow-hidden"
            >


              <h3 className="text-2xl font-literata text-page-text mb-8 flex items-center gap-3">
                <Clock className="w-6 h-6 text-sc-contrast shrink-0" />
                {l("Tiempos de Entrega", "Delivery Times")}
              </h3>

              <div className="space-y-10 relative">
                <div className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-sc-contrast/10 border border-sc-contrast/20 flex items-center justify-center font-literata text-sm text-sc-contrast z-10">01</div>
                  <div>
                    <h5 className="font-montserrat font-bold text-xs uppercase tracking-widest text-page-text mb-1">{l("Inicio de Obra", "Start of Construction")}</h5>
                    <p className="text-page-text font-montserrat font-light italic">{l("Generalmente 30 días después de la firma del contrato.", "Generally 30 days after signing the contract.")}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-sc-contrast-light/10 border border-sc-contrast-light/20 flex items-center justify-center font-literata text-sm text-sc-contrast-light z-10">02</div>
                  <div>
                    <h5 className="font-montserrat font-bold text-xs uppercase tracking-widest text-page-text mb-1">{l("Ejecución", "Execution")}</h5>
                    <p className="text-page-text font-montserrat font-light italic">{l("El tiempo estimado de construcción es de 8 a 12 meses.", "The estimated construction time is 8 to 12 months.")}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-sc-contrast/20 border border-sc-contrast/30 flex items-center justify-center font-literata text-sm text-sc-contrast z-10">03</div>
                  <div>
                    <h5 className="font-montserrat font-bold text-xs uppercase tracking-widest text-page-text mb-1">{l("Entrega Final", "Final Delivery")}</h5>
                    <p className="text-page-text font-montserrat font-light italic">{l("Se realiza 30 días posteriores al pago final.", "In-person delivery 30 days after final payment.")}</p>
                  </div>
                </div>

                {/* Connector line */}
                <div className="absolute left-4 top-8 bottom-8 w-px bg-gradient-to-b from-sc-contrast/20 via-sc-contrast-light/30 to-sc-contrast/5 -z-0" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="relative py-24 sm:py-32 bg-sc-contrast text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={0}
            className="animate-on-scroll"
          >
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-white italic mb-6">{l("¿Listo para dar el primer paso?", "Ready to take the first step?")}</h2>
            <p className="text-white font-montserrat font-light text-lg max-w-xl mx-auto mb-10">{l("Agenda tu entrevista inicial para definir los alcances de tu proyecto y conocer nuestros planes flexibles.", "Schedule your initial interview to define the scope of your project and learn about our flexible plans.")}</p>
            <Button href="/contacto" size="sm" className="shadow-1xl shadow-black/10 mt-4 font-semibold">
              {l("Agendar Entrevista Inicial", "Schedule Initial Interview")}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <Footer />
    </div>
  );
}
