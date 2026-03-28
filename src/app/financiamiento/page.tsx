"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] },
  }),
};

export default function FinanciamientoPage() {
  return (
    <div className="min-h-screen bg-page-bg text-page-text overflow-x-hidden">
      {/* ──── HERO ──── */}
      <section className="relative min-h-[65vh] w-full overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-sc-contrast/80 via-sc-contrast/30 to-brand-sand/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-page-bg via-transparent to-transparent" />

        {/* Noise Filter */}
        <div
          className="absolute inset-0 z-0 opacity-[0.075] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("/noise-texture.png")`,
            backgroundSize: "240px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-1 items-center justify-center pt-16 pb-8">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-4"
            >
              Programa Residencial
            </motion.span>

            <CinematicHeading
              text="Financiamiento"
              className="text-4xl sm:text-6xl lg:text-7xl font-literata font-light tracking-tight mb-6 text-page-text"
              type="word"
              delayChildren={0.4}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl text-page-text font-montserrat font-light max-w-2xl leading-relaxed"
            >
              Construye tu hogar ideal en La Baja con nuestro Programa 40/60. Tú pones el terreno, nosotros financiamos tu futuro.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──── PROGRAMA 40/60 ──── */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-page-text/5 border border-page-text/5 flex items-center justify-center">
                  <HandCoins className="w-5 h-5 text-page-text" />
                </div>
                <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase">El Modelo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-literata font-light text-page-text/90 italic mb-8">
                Esquema de Inversión 40/60
              </h2>
              <div className="space-y-6">
                <p className="text-page-text font-montserrat font-light text-base sm:text-lg leading-relaxed">
                  Ofrecemos nuestro Programa 40/60, en el cual el cliente aporta su terreno libre de gravamen y nosotros financiamos el 60% del costo de construcción.
                </p>
                <div className="bg-page-text/5 border border-page-text/5 rounded-2xl p-6 sm:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <Percent className="w-5 h-5 text-sc-contrast mt-1 shrink-0" />
                    <div>
                      <h4 className="font-literata text-page-text text-lg mb-1">Tasa Preferencial</h4>
                      <p className="text-page-text font-montserrat font-light text-sm italic">7.99% anual fija, brindando estabilidad a tu inversión.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CalendarDays className="w-5 h-5 text-sc-contrast-light mt-1 shrink-0" />
                    <div>
                      <h4 className="font-literata text-page-text text-lg mb-1">Plazo Flexible</h4>
                      <p className="text-page-text font-montserrat font-light text-sm italic">Hasta 30 años de plazo máximo para liquidar el financiamiento.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="p-12 sm:p-14 rounded-[2.5rem] bg-sc-contrast/10 border border-sc-contrast/10 text-center flex flex-col items-center justify-center hover:bg-sc-contrast/10 transition-colors group sm:-translate-y-8">
                <span className="text-5xl sm:text-7xl font-literata font-light text-sc-contrast mb-4 group-hover:scale-110 transition-transform">40%</span>
                <p className="text-page-text font-montserrat font-light text-sm sm:text-base uppercase tracking-widest font-semibold">Tú aportas</p>
                <p className="text-page-text font-montserrat font-light text-xs sm:text-sm mt-3 italic leading-tight">Terreno y aportación inicial</p>
              </div>
              <div className="p-12 sm:p-14 rounded-[2.5rem] bg-sc-contrast-light/10 border border-sc-contrast-light/10 text-center flex flex-col items-center justify-center hover:bg-sc-contrast-light/10 transition-colors group sm:translate-y-16">
                <span className="text-5xl sm:text-7xl font-literata font-light text-sc-contrast-light mb-4 group-hover:scale-110 transition-transform">60%</span>
                <p className="text-page-text font-montserrat font-light text-sm sm:text-base uppercase tracking-widest font-semibold">Financiamos</p>
                <p className="text-page-text font-montserrat font-light text-xs sm:text-sm mt-3 italic leading-tight">Del costo total de obra</p>
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
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-3">El Camino</span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
              Pasos del Proceso
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
              variants={fadeUp}
              className="relative flex flex-col sm:flex-row items-start gap-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-page-text/5 shadow-sm flex items-center justify-center font-literata text-xl text-sc-contrast">1</div>
              <div>
                <h3 className="text-2xl font-literata text-page-text mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-page-text" />
                  Entrevista Inicial
                </h3>
                <p className="text-page-text font-montserrat font-light text-base leading-relaxed mb-4">
                  Reunión presencial o vía Zoom para definir las especificaciones de la obra.
                </p>
                <div className="bg-white/50 p-4 rounded-xl border border-page-text/5 text-left">
                  <p className="text-xs font-montserrat font-semibold italic text-page-text uppercase tracking-wider mb-2">Fundamental:</p>
                  <p className="text-sm text-page-text font-montserrat font-light leading-relaxed">
                    En caso de ser una pareja casada, es fundamental que ambos asistan para asegurar el consenso en el diseño y visión del hogar.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.2}
              variants={fadeUp}
              className="relative flex flex-col sm:flex-row items-start gap-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-page-text/5 shadow-sm flex items-center justify-center font-literata text-xl text-sc-contrast-light">2</div>
              <div>
                <h3 className="text-2xl font-literata text-page-text mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-page-text" />
                  Cotización y Plazos
                </h3>
                <p className="text-page-text font-montserrat font-light text-base leading-relaxed mb-4">
                  Finalizado el diseño, entregaremos una propuesta integral que incluye:
                </p>
                <ul className="space-y-3 font-montserrat font-light text-sm text-page-text">
                  <li className="flex items-center gap-2">• Cotización detallada de la obra</li>
                  <li className="flex items-center gap-2">• Desglose financiero completo</li>
                  <li className="flex items-center gap-2">• Cronograma detallado de ejecución</li>
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
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeUp}
            >
              <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-3">Transparencia</span>
              <h2 className="text-3xl sm:text-4xl font-literata font-light text-page-text italic mb-8">
                Esquemas de Pagos
              </h2>
              <div className="space-y-8">
                <div className="bg-sc-contrast/[0.03] border border-sc-contrast/10 p-8 rounded-3xl group hover:bg-sc-contrast/5 transition-all">
                  <h4 className="font-literata text-xl text-page-text mb-4 flex items-center justify-between">
                    Con Financiamiento
                    <HandCoins className="w-5 h-5 text-sc-contrast group-hover:scale-110 transition-transform" />
                  </h4>
                  <p className="text-page-text font-montserrat font-light text-base leading-relaxed">
                    Al firmar contrato, se deposita el 30% de tu aportación inicial (del 40% correspondiente). El resto se cubre en cuotas mensuales durante la construcción.
                  </p>
                </div>

                <div className="bg-sc-contrast-light/[0.03] border border-sc-contrast-light/10 p-8 rounded-3xl group hover:bg-sc-contrast-light/5 transition-all">
                  <h4 className="font-literata text-xl text-page-text mb-4 flex items-center justify-between">
                    Sin Financiamiento
                    <X className="w-5 h-5 text-sc-contrast-light group-hover:scale-110 transition-transform" />
                  </h4>
                  <p className="text-page-text font-montserrat font-light text-base leading-relaxed">
                    El depósito inicial es del 25% del costo total de la obra, con pagos mensuales subsecuentes conforme al catálogo de conceptos.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              variants={fadeUp}
              className="bg-white/40 border border-page-text/5 p-10 rounded-3xl shadow-xl shadow-page-text/5 relative overflow-hidden"
            >


              <h3 className="text-2xl font-literata text-page-text mb-8 flex items-center gap-3">
                <Clock className="w-6 h-6 text-sc-contrast shrink-0" />
                Tiempos de Entrega
              </h3>

              <div className="space-y-10 relative">
                <div className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-sc-contrast/10 border border-sc-contrast/20 flex items-center justify-center font-literata text-sm text-sc-contrast z-10">01</div>
                  <div>
                    <h5 className="font-montserrat font-bold text-xs uppercase tracking-widest text-page-text mb-1">Inicio de Obra</h5>
                    <p className="text-page-text font-montserrat font-light italic">Generalmente 30 días después de la firma del contrato.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-sc-contrast-light/10 border border-sc-contrast-light/20 flex items-center justify-center font-literata text-sm text-sc-contrast-light z-10">02</div>
                  <div>
                    <h5 className="font-montserrat font-bold text-xs uppercase tracking-widest text-page-text mb-1">Ejecución</h5>
                    <p className="text-page-text font-montserrat font-light italic">El tiempo estimado de construcción es de 8 a 12 meses.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-sc-contrast/20 border border-sc-contrast/30 flex items-center justify-center font-literata text-sm text-sc-contrast z-10">03</div>
                  <div>
                    <h5 className="font-montserrat font-bold text-xs uppercase tracking-widest text-page-text mb-1">Entrega Final</h5>
                    <p className="text-page-text font-montserrat font-light italic">Se realiza 30 días posteriores al pago final.</p>
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
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-white italic mb-6">
              ¿Listo para dar el primer paso?
            </h2>
            <p className="text-white font-montserrat font-light text-lg max-w-xl mx-auto mb-10">
              Agenda tu entrevista inicial para definir los alcances de tu proyecto y conocer nuestros planes flexibles.
            </p>
            <Button href="/contacto" size="sm" className="shadow-1xl shadow-black/10 mt-4 font-semibold">
              Agendar Entrevista Inicial
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
