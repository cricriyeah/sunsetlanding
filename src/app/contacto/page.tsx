"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Instagram,
  Facebook,
  MessageCircle,
  ChevronDown,
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
    transition: {
      duration: 0.8,
      delay,
      ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
    },
  }),
};

export default function ContactoPage() {
  const { l } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Manual validation check
    if (!formData.name || !formData.email || !formData.phone || !formData.project || !formData.message || formData.project === "") {
      setStatus("error");
      setErrorMessage(l("Por favor llena todos los campos.", "Please fill in all fields."));
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/send_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          project: "Otro",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Error al enviar el mensaje.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("No se pudo conectar con el servidor de correos.");
    }
  };

  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-sc-accent/30 overflow-x-hidden">
      <Navbar />
      {/* ──── HERO ──── */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex flex-col">
        {/* Purple & Pink Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 via-pink-400/20 to-page-bg z-0" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full z-0 animate-pulse" />
        <div className="absolute bottom-0 left-[-5%] w-[600px] h-[600px] bg-brand-purple/10 blur-[130px] rounded-full z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-page-bg via-transparent to-transparent z-10" />

        {/* Noise Filter */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("/noise-texture.webp")`,
            backgroundSize: "240px",
            backgroundRepeat: "repeat",
          }}
        />


        <div className="relative z-20 flex flex-1 items-center justify-center pt-24 pb-12 text-center px-6 lg:pt-48 lg:pb-32">
          <div className="max-w-4xl w-full mx-auto px-6 lg:px-20 xl:px-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-4"
            >{l("Comienza tu historia", "Start your story")}</motion.span>

            <div className="mb-6">
              <CinematicHeading
                text={l("Hablemos de tu futuro", "Let's talk about your future")}
                className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl font-literata font-light tracking-tight text-page-text"
                type="word"
                delayChildren={0.4}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg sm:text-xl text-page-text font-montserrat font-light max-w-2xl mx-auto leading-relaxed opacity-80"
            >{l("Estamos listos para materializar tu visión. Agenda una llamada privada o visítanos en nuestras oficinas en La Paz.", "We are ready to materialize your vision. Schedule a private call or visit us at our offices in La Paz.")}</motion.p>
          </div>
        </div>
      </section>

      {/* ──── CONTACT CONTENT ──── */}
      <section className="relative py-24 lg:py-40 xl:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
              >
                <h3 className="text-2xl font-literata font-light italic text-page-text mb-8">{l("Nuestras Oficinas", "Our Offices")}</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-sc-accent/10 flex items-center justify-center shrink-0 group-hover:bg-sc-accent/20 transition-all">
                      <MapPin className="w-5 h-5 text-sc-accent" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-xs tracking-widest uppercase text-page-text opacity-100 mb-1">{l("Dirección", "Address")}</p>
                      <p className="font-montserrat font-light text-base text-page-text leading-relaxed">
                        C. Toronja 561-local 2, Indeco, Libertad <br /> 23078 La Paz, B.C.S.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-sc-accent/10 flex items-center justify-center shrink-0 group-hover:bg-sc-accent/20 transition-all">
                      <Phone className="w-5 h-5 text-sc-accent" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-xs tracking-widest uppercase text-page-text opacity-100 mb-1">{l("Teléfono", "Phone")}</p>
                      <p className="font-montserrat font-light text-base text-page-text">
                        +52 (612) 213 4747
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-sc-accent/10 flex items-center justify-center shrink-0 group-hover:bg-sc-accent/20 transition-all">
                      <Mail className="w-5 h-5 text-sc-accent" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-xs tracking-widest uppercase text-page-text opacity-100 mb-1">{l("Correo", "Email")}</p>
                      <p className="font-montserrat font-light text-base text-page-text">
                        contacto@sunsetbcs.com
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
                <h3 className="text-xl font-literata font-light italic text-page-text mb-6">{l("Síguenos", "Follow us")}</h3>
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
                    href="https://wa.me/5216122134747"
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

            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7 w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.1}
                className="w-full bg-white/70 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 sm:p-10 lg:p-10 transition-all duration-500 shadow-sm shadow-page-text/5"
              >
                {/* Status Message Display */}
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.6 
                      }}
                      className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <ArrowRight className="w-8 h-8 text-green-600 -rotate-45" />
                      </div>
                      <h4 className="text-2xl font-literata font-light italic text-page-text">{l("¡Mensaje Enviado!", "Message Sent!")}</h4>
                      <p className="font-montserrat font-light text-page-text/70 max-w-sm">{l("Gracias por tu interés en Sunset. Nos pondremos en contacto contigo lo antes posible.", "Thank you for your interest in Sunset. We will contact you as soon as possible.")}</p>
                      <Button
                        variant="ghost"
                        onClick={() => setStatus("idle")}
                        className="text-sc-accent font-montserrat text-sm mt-4 underline underline-offset-4 hover:bg-transparent px-0"
                      >{l("Enviar otro mensaje", "Send another message")}</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/80 ml-1">{l("Nombre", "Name")}</label>
                          <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            type="text"
                            placeholder={l("Escribe tu nombre", "Write your name")}
                            className="w-full h-12 bg-white/50 border border-page-text/10 rounded-2xl px-5 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-sc-accent/30 transition-all text-page-text placeholder:text-page-text/30"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/60 ml-1">Email</label>
                          <input
                            required
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            type="email"
                            placeholder="tu@email.com"
                            className="w-full h-12 bg-white/50 border border-page-text/10 rounded-2xl px-5 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-sc-accent/30 transition-all text-page-text placeholder:text-page-text/30"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/60 ml-1">Teléfono</label>
                          <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            type="tel"
                            placeholder="+52 (...) ..."
                            className="w-full h-12 bg-white/50 border border-page-text/10 rounded-2xl px-5 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-sc-accent/30 transition-all text-page-text placeholder:text-page-text/30"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/60 ml-1">{l("Proyecto de interés", "Project of interest")}</label>
                          <div className="relative">
                            <select 
                              required
                              name="project"
                              value={formData.project}
                              onChange={(e) => setFormData({...formData, project: e.target.value})}
                              className="w-full h-12 bg-white/50 border border-page-text/10 rounded-2xl px-5 pr-10 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-sc-accent/30 transition-all appearance-none cursor-pointer text-page-text relative z-10"
                            >
                              <option className="bg-white text-page-text" value="" disabled>{l("Selecciona un interés", "Select an interest")}</option>
                              <option className="bg-white text-page-text" value="Otro">Otro</option>
                              <option className="bg-white text-page-text" value="Sunset Condominios">Sunset Condominios</option>
                              <option className="bg-white text-page-text" value="Casas Sur">Casas Sur</option>
                              <option className="bg-white text-page-text" value="Vendedor">{l("Vendedor", "Salesperson")}</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                              <ChevronDown className="w-4 h-4 text-page-text/40" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-semibold text-page-text/80 ml-1">{l("Mensaje", "Message")}</label>
                        <textarea
                          required
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder={l("Cuéntanos sobre tu visión...", "Tell us about your vision...")}
                          rows={5}
                          className="w-full bg-white/50 border border-page-text/10 rounded-[1.5rem] p-5 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-sc-accent/30 transition-all resize-none text-page-text placeholder:text-page-text/30"
                        />
                      </div>

                      {status === "error" && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50/50 border border-red-200/50 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <p className="text-red-600 font-montserrat text-xs font-medium">
                            {errorMessage || l("Hubo un error al enviar el mensaje. Reintenta.", "There was an error sending the message. Try again.")}
                          </p>
                        </motion.div>
                      )}

                      <div className="pt-4">
                        <Button
                          disabled={status === "loading"}
                          variant="brand"
                          className="w-full h-14 text-base font-semibold transition-all bg-brand-purple/90 hover:bg-brand-purple shadow-sm shadow-brand-purple/10 disabled:opacity-50"
                        >
                          {status === "loading" ? l("Enviando...", "Sending...") : l("Enviar Mensaje", "Send Message")} 
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                        <p className="text-center mt-6 text-xs font-montserrat font-light text-page-text/40 italic">{l("Al enviar, aceptas nuestra política de privacidad y tratamiento de datos.", "By sending, you accept our privacy policy and data processing.")}</p>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── MAP SECTION (Full Width) ──── */}
      <section className="relative w-full pt-24 lg:pt-40 pb-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-16 mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-medium text-[10px] sm:text-xs text-page-text/100 tracking-[0.2em] uppercase block mb-3"
          >{l("Ubicación", "Location")}</motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-literata font-light italic text-page-text"
          >{l("Visítanos en nuestras oficinas", "Visit us at our offices")}</motion.h3>
        </div>

        <div className="relative w-full h-[450px] overflow-hidden transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1817.9739502845683!2d-110.319869!3d24.126866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA3JzM2LjciTiAxMTDCsDE5JzExLjUiVw!5e0!3m2!1ses-419!2smx!4v1711430000000!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de nuestras oficinas"
          />
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
