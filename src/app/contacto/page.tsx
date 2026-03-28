"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Instagram,
  Facebook,
  MessageCircle,
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
    transition: {
      duration: 0.8,
      delay,
      ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
    },
  }),
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-sc-accent/30">
      {/* ──── HERO ──── */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex flex-col">
        {/* Blue & Pink Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 via-sc-accent/40 to-brand-sand/10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-page-bg via-transparent to-transparent z-10" />

        {/* Noise Filter */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("/noise-texture.png")`,
            backgroundSize: "240px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-1 items-center justify-center pt-16 pb-8 text-center px-6">
          <div className="max-w-4xl w-full mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-4"
            >
              Comienza tu historia
            </motion.span>

            <div className="mb-6">
              <CinematicHeading
                text="Hablemos de tu futuro"
                className="text-4xl sm:text-6xl lg:text-7xl font-literata font-light tracking-tight text-page-text"
                type="word"
                delayChildren={0.4}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg sm:text-xl text-page-text font-montserrat font-light max-w-2xl mx-auto leading-relaxed opacity-80"
            >
              Estamos listos para materializar tu visión. Agenda una llamada privada o visítanos
              en nuestras oficinas en La Paz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──── CONTACT CONTENT ──── */}
      <section className="relative py-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact Info (4 cols) */}
            <div className="lg:col-span-4 space-y-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
              >
                <h3 className="text-2xl font-literata font-light italic text-page-text mb-8">
                  Nuestras Oficinas
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-sc-accent/10 flex items-center justify-center shrink-0 group-hover:bg-sc-accent/20 transition-all">
                      <MapPin className="w-5 h-5 text-sc-accent" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-xs tracking-widest uppercase text-page-text opacity-100 mb-1">Dirección</p>
                      <p className="font-montserrat font-light text-base text-page-text leading-relaxed">
                        Calle Toronja esq. Blvd. Colosio, <br /> La Paz, B.C.S.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-sc-accent/10 flex items-center justify-center shrink-0 group-hover:bg-sc-accent/20 transition-all">
                      <Phone className="w-5 h-5 text-sc-accent" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-xs tracking-widest uppercase text-page-text opacity-100 mb-1">Teléfono</p>
                      <p className="font-montserrat font-light text-base text-page-text">
                        +52 (612) 123 4567
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-sc-accent/10 flex items-center justify-center shrink-0 group-hover:bg-sc-accent/20 transition-all">
                      <Mail className="w-5 h-5 text-sc-accent" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-xs tracking-widest uppercase text-page-text opacity-100 mb-1">Correo</p>
                      <p className="font-montserrat font-light text-base text-page-text">
                        hola@sunsetlanding.mx
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.2}
              >
                <h3 className="text-xl font-literata font-light italic text-page-text mb-6">
                  Síguenos
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {[Instagram, Facebook].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full border border-page-text/10 flex items-center justify-center hover:bg-sc-accent hover:border-sc-accent hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                  <a
                    href="https://wa.me/526121234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-page-text/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form (8 cols) */}
            <div className="lg:col-span-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.1}
                className="bg-white/80 backdrop-blur-sm border border-page-text/5 rounded-[1.5rem] p-8 sm:p-12 transition-all duration-500 hover:bg-white/90"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/80 ml-1">Nombre</label>
                      <input
                        type="text"
                        placeholder="Escribe tu nombre"
                        className="w-full h-12 bg-white/40 border border-page-text/20 rounded-2xl px-5 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-page-text/30 transition-all text-page-text placeholder:text-page-text/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/80 ml-1">Email</label>
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full h-12 bg-white/40 border border-page-text/20 rounded-2xl px-5 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-page-text/30 transition-all text-page-text placeholder:text-page-text/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/80 ml-1">Teléfono</label>
                      <input
                        type="tel"
                        placeholder="+52 (...) ..."
                        className="w-full h-12 bg-white/40 border border-page-text/20 rounded-2xl px-5 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-page-text/30 transition-all text-page-text placeholder:text-page-text/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/80 ml-1">Proyecto de interés</label>
                      <select className="w-full h-12 bg-white/40 border border-page-text/20 rounded-2xl px-5 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-page-text/30 transition-all appearance-none cursor-pointer text-page-text">
                        <option className="bg-white text-page-text">Otro</option>
                        <option className="bg-white text-page-text">Sunset Condominios</option>
                        <option className="bg-white text-page-text">Casas Sur</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/80 ml-1">Mensaje</label>
                    <textarea
                      placeholder="Cuéntanos sobre tu visión..."
                      rows={5}
                      className="w-full bg-white/40 border border-page-text/20 rounded-[1.5rem] p-5 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-page-text/30 transition-all resize-none text-page-text placeholder:text-page-text/40"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="brand"
                      size="sm"
                      className="w-full h-14 text-base font-semibold transition-all shadow-none bg-sc-accent hover:bg-sc-accent/90"
                    >
                      Enviar Mensaje <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                    <p className="text-center mt-6 text-xs font-montserrat font-light text-page-text/40 italic">
                      Al enviar, aceptas nuestra política de privacidad y tratamiento de datos.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── MAP SECTION (Full Width) ──── */}
      <section className="relative w-full pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-medium text-[10px] sm:text-xs text-page-text/100 tracking-[0.2em] uppercase block mb-3"
          >
            Ubicación
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-literata font-light italic text-page-text"
          >
            Visítanos en nuestras oficinas
          </motion.h3>
        </div>

        <div className="relative w-full h-[450px] overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1818.067425442544!2d-110.3159231!3d24.116819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86afd308945653b1%3A0xc3ce1e5a5a1f1066!2sToronja%20%26%20Blvd.%20Luis%20Donaldo%20Colosio%2C%20La%20Paz%2C%20B.C.S.!5e0!3m2!1ses-419!2smx!4v1711430000000!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de nuestras oficinas"
          />
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
