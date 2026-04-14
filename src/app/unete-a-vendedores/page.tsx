"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Briefcase,
  Star,
  CheckCircle2,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { CinematicHeading } from "@/components/ui/CinematicHeading";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number]
    },
  }),
};

export default function UneteVendedoresPage() {
  const { l } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    fechaNacimiento: "",
    celular: "",
    correo: "",
    razon: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Manual validation
    if (!formData.nombre || !formData.fechaNacimiento || !formData.celular || !formData.correo || !formData.razon) {
      setStatus("error");
      setErrorMessage(l("Por favor llena todos los campos.", "Please fill in all fields."));
      return;
    }

    setStatus("loading");
    
    try {
      const response = await fetch("/send_vendedores.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || l("Error al enviar el mensaje.", "Error sending the message."));
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(l("Error de conexión.", "Connection error."));
    }
  };

  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-brand-purple/20 overflow-x-hidden">
      <Navbar />
      {/* ──── HERO ──── */}
      <section className="relative min-h-[70vh] w-full overflow-hidden flex flex-col justify-center">
        {/* Dynamic Gradients (Purple) */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-brand-purple/5 to-page-bg z-0" />
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full z-0 animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-brand-purple/10 blur-[130px] rounded-full z-0" />
        
        {/* Noise Filter */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("/noise-texture.webp")`,
            backgroundSize: "240px",
            backgroundRepeat: "repeat",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-page-bg via-transparent to-transparent z-10" />


        <div className="relative z-20 pt-32 pb-16 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-8"
            >
              <Star className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
              <span className="font-montserrat font-bold text-[9px] uppercase tracking-[0.25em] text-brand-purple">
                {l("Únete al Círculo Elite", "Join the Elite Circle")}
              </span>
            </motion.div>

            <div className="mb-8">
              <CinematicHeading
                text={l("Únete a nuestro equipo exclusivo de vendedores", "Join our exclusive sales team")}
                className="text-4xl sm:text-6xl lg:text-7xl font-literata font-light tracking-tight text-page-text"
                type="word"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-brand-purple font-literata font-light italic max-w-2xl mx-auto mb-6"
            >
              {l("y gana comisiones del 10%", "and earn 10% commissions")}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base sm:text-lg text-page-text font-montserrat font-light max-w-xl mx-auto leading-relaxed"
            >
              {l("Ingresa tus datos para aprobación y formar parte de este equipo exclusivo.", "Enter your details for approval to become part of this exclusive team.")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──── FORM CONTENT ──── */}
      <section className="relative py-24 pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Perks column */}
            <div className="lg:col-span-5 space-y-16">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
                <h3 className="text-2xl font-literata font-light italic text-page-text mb-12">
                  {l("Beneficios Exclusivos", "Exclusive Benefits")}
                </h3>
                
                <div className="space-y-12">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-sm">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-widest text-page-text mb-2">{l("Comisión del 10%", "10% Commission")}</h4>
                      <p className="font-montserrat font-light text-sm text-page-text leading-relaxed">
                        {l("Maximiza tus ingresos con el esquema de comisiones más alto del sector.", "Maximize your income with the highest commission scheme in the sector.")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-sm">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-widest text-page-text mb-2">{l("Crecimiento Acelerado", "Accelerated Growth")}</h4>
                      <p className="font-montserrat font-light text-sm text-page-text leading-relaxed">
                        {l("Acceso directo a preventas exclusivas y red de inversionistas Sunset.", "Direct access to exclusive presales and the Sunset investor network.")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-sm">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-widest text-page-text mb-2">{l("Portafolio Triple A", "AAA Portfolio")}</h4>
                      <p className="font-montserrat font-light text-sm text-page-text leading-relaxed">
                        {l("Representa los desarrollos más innovadores y sostenibles de BCS.", "Represent the most innovative and sustainable developments in BCS.")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-7 w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.2}
                className="bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] p-8 sm:p-14 transition-all duration-500 shadow-sm shadow-page-text/5"
              >
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h4 className="text-3xl font-literata italic text-page-text mb-4">{l("Solicitud Recibida", "Application Received")}</h4>
                      <p className="font-montserrat font-light text-page-text max-w-sm mx-auto mb-10">
                        {l("Analizaremos tu perfil y nos pondremos en contacto contigo pronto.", "We will analyze your profile and contact you soon.")}
                      </p>
                      <Button 
                        variant="ghost" 
                        onClick={() => setStatus("idle")} 
                        className="text-brand-purple hover:bg-transparent font-montserrat font-semibold text-sm underline underline-offset-8"
                      >
                        {l("Enviar otra solicitud", "Send another application")}
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-2.5">
                        <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("Nombre Completo", "Full Name")}</label>
                        <input
                          required
                          type="text"
                          placeholder={l("Tu nombre y apellidos", "Your full name")}
                          className="w-full h-14 bg-white/50 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all placeholder:text-page-text/20"
                          value={formData.nombre}
                          onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-2.5">
                          <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("Fecha de Nacimiento", "Date of Birth")}</label>
                          <input
                            required
                            type="date"
                            className="w-full h-14 bg-white/50 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all text-page-text/60"
                            value={formData.fechaNacimiento}
                            onChange={(e) => setFormData({...formData, fechaNacimiento: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2.5">
                          <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("Número de Celular", "Mobile Number")}</label>
                          <input
                            required
                            type="tel"
                            placeholder="+52 (...) ..."
                            className="w-full h-14 bg-white/50 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all placeholder:text-page-text/20"
                            value={formData.celular}
                            onChange={(e) => setFormData({...formData, celular: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("Correo Electrónico", "Email Address")}</label>
                        <input
                          required
                          type="email"
                          placeholder="tu@email.com"
                          className="w-full h-14 bg-white/50 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all placeholder:text-page-text/20"
                          value={formData.correo}
                          onChange={(e) => setFormData({...formData, correo: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2.5">
                        <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("¿Por qué te interesa ser vendedor?", "Why do you want to be a seller?")}</label>
                        <textarea
                          required
                          rows={4}
                          placeholder={l("Cuéntanos sobre tu experiencia o visión...", "Tell us about your experience or vision...")}
                          className="w-full bg-white/50 border border-page-text/10 rounded-[2rem] p-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-purple/30 transition-all resize-none placeholder:text-page-text/20"
                          value={formData.razon}
                          onChange={(e) => setFormData({...formData, razon: e.target.value})}
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
                            {errorMessage || l("Hubo un error. Reintenta.", "There was an error. Try again.")}
                          </p>
                        </motion.div>
                      )}

                      <div className="pt-6">
                        <Button
                          disabled={status === "loading"}
                          variant="brand"
                          className="w-full h-16 text-base font-semibold bg-brand-purple hover:bg-brand-purple/90 transition-all shadow-sm shadow-brand-purple/20 rounded-2xl"
                        >
                          {status === "loading" ? l("Enviando...", "Sending...") : l("Enviar Solicitud", "Submit Application")}
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                        <p className="text-center mt-6 text-[9px] font-montserrat font-light text-page-text uppercase tracking-[0.2em]">
                          {l("Privacidad asegurada | Candidatos Sunset", "Privacy assured | Sunset Candidates")}
                        </p>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ──── FAQ SECTION ──── */}
      <section className="relative py-24 sm:py-32 bg-page-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-brand-purple tracking-[0.2em] uppercase block mb-3">
              {l("Preguntas Frecuentes", "Common Questions")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
              {l("Todo lo que necesitas saber", "Everything you need to know")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {[
              {
                q: l("¿Es realmente el 10% de comisión?", "Is it really 10% commission?"),
                a: l("¡Sí, así como lo escuchas! Todas las ventas cerradas a través de nuestro programa elite califican automáticamente para el 10% de comisión sobre la utilidad neta de la operación.", "Yes, just as you hear! All sales closed through our elite program automatically qualify for a 10% commission on the net profit of the operation.")
              },
              {
                q: l("¿Recibo capacitación sobre los proyectos?", "Do I receive training on the projects?"),
                a: l("Sí, tendrás acceso a nuestro portal con renders de alta resolución, fichas técnicas y sesiones de capacitación presenciales.", "Yes, you will have access to our portal with high-resolution renders, technical sheets, and in-person training sessions.")
              },
              {
                q: l("¿Hay un mínimo de ventas requerido?", "Is there a minimum sales requirement?"),
                a: l("No exigimos un mínimo mensual, pero priorizamos a los vendedores que participan activamente en nuestros lanzamientos exclusivos.", "We do not require a monthly minimum, but we prioritize sellers who actively participate in our exclusive launches.")
              },
              {
                q: l("¿Cómo se realizan los pagos?", "How are payments made?"),
                a: l("Las comisiones se dispersan en un plazo de 5 a 10 días hábiles posteriores a la liquidación del enganche o firma de contrato.", "Commissions are dispersed within 5 to 10 business days after the down payment settlement or contract signing.")
              },
              {
                q: l("¿Cuánto tardan en aprobar o dar respuesta?", "How long does it take for approval/response?"),
                a: l("Nuestro equipo revisa las aplicaciones en 2 a 3 días hábiles. Una vez aprobada, nos pondremos en contacto contigo directamente vía WhatsApp.", "Our team reviews applications in 2 to 3 business days. Once approved, we will contact you directly via WhatsApp.")
              },
              {
                q: l("¿Existen bonos además de la comisión?", "Are there bonuses besides the commission?"),
                a: l("¡Así es! Contamos con un programa de incentivos adicionales para nuestros mejores vendedores y recompensas especiales para el vendedor del mes.", "That's right! We have an additional incentive program for our top sellers and special rewards for the seller of the month.")
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.1}
                className="p-8 rounded-[2rem] bg-white/40 border border-page-text/5 hover:border-brand-purple/20 transition-all duration-500"
              >
                <h3 className="font-literata text-xl text-page-text mb-4 italic">{faq.q}</h3>
                <p className="font-montserrat font-light text-sm text-page-text/70 leading-relaxed italic">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── DIRECT CONTACT ──── */}
      <section className="relative py-24 sm:py-32 bg-page-text/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-literata font-light text-page-text mb-2 italic">
                {l("¿Tienes dudas adicionales? Contáctanos directamente", "Have more questions? Contact us directly")}
              </h3>
              <p className="font-montserrat text-sm text-brand-purple font-medium tracking-widest uppercase opacity-70">
                Ing. Eric Salinas | Asesor de ventas
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
              <a 
                href="mailto:ventas@sunsetbcs.com" 
                className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-sm shadow-brand-purple/10">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-montserrat text-sm font-medium text-page-text tracking-wide">ventas@sunsetbcs.com</span>
              </a>
              
              <a 
                href="tel:+526122134747" 
                className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-sm shadow-brand-purple/10">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="font-montserrat text-sm font-medium text-page-text tracking-wide">+52 (612) 213 4747</span>
              </a>

              <a 
                href="https://wa.me/5216122134747" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-sm shadow-brand-purple/10">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="font-montserrat text-sm font-medium text-page-text tracking-wide">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
