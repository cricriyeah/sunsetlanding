"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Home,
  CheckCircle2,
  Phone,
  MessageCircle,
  Building,
  AlertCircle
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { CinematicHeading } from "@/components/ui/CinematicHeading";
import { useLanguage } from "@/context/LanguageContext";


export default function CasasSurCotizacionPage() {
  const { l } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    modelo: "",
    amenidades: "",
    financiamiento: "", // "Sí" or "No"
    anticipo: "",
    informacionAdicional: "",
    codigoVendedor: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.nombre || !formData.celular || !formData.modelo || !formData.financiamiento) {
      setStatus("error");
      setErrorMessage(l("Por favor llena todos los campos solicitados.", "Please fill in all required fields."));
      return;
    }

    if (formData.financiamiento === "Sí" && !formData.anticipo) {
      setStatus("error");
      setErrorMessage(l("Por favor indica el anticipo con el que cuentas.", "Please specify your available down payment."));
      return;
    }

    setStatus("loading");
    
    try {
      const response = await fetch("/send_casassur.php", {
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
        setErrorMessage(result.message || l("Error al enviar la solicitud.", "Error sending the quotation request."));
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(l("Error de conexión.", "Connection error."));
    }
  };

  const modelos = ["Esencial (20 pies)", "Balance (40 pies)", "Lujo", "Negocio"];
  const amenidadesExtra = [
    { es: "Ninguna por el momento", en: "None for now" },
    { es: "Muebles y electrodomésticos", en: "Furniture and appliances" },
    { es: "Transporte a terreno", en: "Transportation to site" },
    { es: "Drenaje, plomería y agua", en: "Drainage, plumbing and water" },
    { es: "Base de asentamiento", en: "Foundation base" },
    { es: "Alberca", en: "Swimming pool" },
    { es: "Paneles Solares", en: "Solar panels" },
    { es: "Domótica y Cerraduras", en: "Smart home & Locks" },
    { es: "Aire acondicionado", en: "Air conditioning" }
  ];

  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-brand-blue/20 overflow-x-hidden">
      <Navbar />
      
      {/* ──── HERO ──── */}
      <section className="relative min-h-[50vh] pt-32 pb-8 w-full overflow-hidden flex flex-col justify-center">
        {/* Dynamic Gradients (Blue) */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-blue/5 to-page-bg z-0" />
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full z-0 animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-brand-blue/10 blur-[130px] rounded-full z-0" />
        
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

        <div className="relative z-20 text-center px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-8"
            >
              <Home className="w-3.5 h-3.5 text-brand-blue" />
              <span className="font-montserrat font-bold text-[9px] uppercase tracking-[0.25em] text-brand-blue">
                {l("Casas Sur", "Casas Sur")}
              </span>
            </motion.div>

            <div className="mb-6">
              <CinematicHeading
                text={l("Cotice su nuevo hogar", "Quote your new home")}
                className="text-4xl sm:text-5xl lg:text-6xl font-literata font-light tracking-tight text-page-text"
                type="word"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg text-page-text font-montserrat font-light max-w-xl mx-auto leading-relaxed"
            >
              {l("Déjenos sus datos y un asesor se pondrá en contacto con usted para detallar la entrega llave en mano de su proyecto.", "Leave us your details and an advisor will contact you to detail the turnkey delivery of your project.")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──── FORM SECTION ──── */}
      <section className="relative pt-16 pb-32">
        <div className="max-w-5xl mx-auto px-6 w-full relative z-20">
          <motion.div
            className="bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 sm:p-14 shadow-xl shadow-brand-blue/5 transition-all duration-500"
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
                  <h4 className="text-3xl font-literata italic text-page-text mb-4">{l("Cotización Solicitada", "Quotation Requested")}</h4>
                  <p className="font-montserrat font-light text-page-text max-w-sm mx-auto mb-10">
                    {l("Un asesor comercial revisará tu solicitud y te contactará a la brevedad.", "A sales advisor will review your request and contact you shortly.")}
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ nombre: "", celular: "", modelo: "", amenidades: "", financiamiento: "", anticipo: "", informacionAdicional: "", codigoVendedor: "" });
                    }} 
                    className="text-brand-blue hover:bg-transparent font-montserrat font-semibold text-sm underline underline-offset-8"
                  >
                    {l("Hacer otra cotización", "Make another quotation")}
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  
                  {/* --- TÍTULO DEL FORMULARIO --- */}
                  <div className="text-center mb-10">
                    <h3 className="text-2xl sm:text-3xl font-literata italic text-page-text mb-2">
                      {l("Llene los datos del formulario", "Fill out the form details")}
                    </h3>
                    <p className="font-montserrat text-sm text-page-text font-light">
                      {l("Complete la siguiente información para asignarle un asesor.", "Complete the following information to assign you an advisor.")}
                    </p>
                  </div>

                  {/* --- SECCIÓN 1: DATOS DE CONTACTO --- */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-px bg-page-text/10 flex-1" />
                      <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-brand-blue font-bold whitespace-nowrap">
                        {l("01. Datos de Contacto", "01. Contact Info")}
                      </span>
                      <div className="h-px bg-page-text/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2.5">
                        <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("Nombre Completo", "Full Name")}</label>
                        <input
                          required
                          type="text"
                          placeholder={l("Su nombre y apellidos", "Your name and surname")}
                          className="w-full h-14 bg-white/50 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/30 transition-all placeholder:text-page-text"
                          value={formData.nombre}
                          onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2.5">
                        <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("Número de Celular", "Mobile Number")}</label>
                        <input
                          required
                          type="tel"
                          placeholder="+52 (...) ..."
                          className="w-full h-14 bg-white/50 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/30 transition-all placeholder:text-page-text"
                          value={formData.celular}
                          onChange={(e) => setFormData({...formData, celular: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* --- SECCIÓN 2: INTERÉS DEL PROYECTO --- */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-px bg-page-text/10 flex-1" />
                      <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-brand-blue font-bold whitespace-nowrap">
                        {l("02. Tu Proyecto", "02. Your Project")}
                      </span>
                      <div className="h-px bg-page-text/10 flex-1" />
                    </div>

                    <div className="space-y-4">
                      <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2 block">
                        {l("¿Qué modelo le interesa?", "Which model are you interested in?")}
                      </label>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {modelos.map((mod) => (
                          <button
                            key={mod}
                            type="button"
                            onClick={() => setFormData({...formData, modelo: mod})}
                            className={`flex flex-col items-center justify-center py-4 rounded-2xl border transition-all ${
                              formData.modelo === mod 
                              ? "bg-brand-blue text-white border-brand-blue shadow-md" 
                              : "bg-white/40 border-page-text/10 hover:border-brand-blue/30 text-page-text"
                            }`}
                          >
                            <span className="font-montserrat text-xs font-semibold">{mod}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* --- SECCIÓN 3: DETALLES ADICIONALES --- */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-px bg-page-text/10 flex-1" />
                      <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-brand-blue font-bold whitespace-nowrap">
                        {l("03. Detalles", "03. Details")}
                      </span>
                      <div className="h-px bg-page-text/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                      <div className="space-y-4">
                        <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2 block">
                          {l("¿Necesitas amenidades extra?", "Do you need extra amenities?")}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {amenidadesExtra.map((item) => {
                            const isSelected = formData.amenidades.split("; ").includes(item.es);
                            return (
                              <button
                                key={item.es}
                                type="button"
                                onClick={() => {
                                  let current = formData.amenidades ? formData.amenidades.split("; ") : [];
                                  
                                  if (item.es === "Ninguna por el momento") {
                                    current = isSelected ? [] : ["Ninguna por el momento"];
                                  } else {
                                    current = current.filter(val => val !== "Ninguna por el momento");
                                    if (isSelected) {
                                      current = current.filter(val => val !== item.es);
                                    } else {
                                      current.push(item.es);
                                    }
                                  }
                                  
                                  setFormData({ ...formData, amenidades: current.join("; ") });
                                }}
                                className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-left group ${
                                  isSelected 
                                    ? "bg-brand-blue/5 border-brand-blue shadow-sm" 
                                    : "bg-white/40 border-page-text/10 hover:border-page-text/20"
                                }`}
                              >
                                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                                  isSelected ? "bg-brand-blue border-brand-blue" : "border-page-text/20 group-hover:border-page-text/40"
                                }`}>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                    >
                                      <CheckCircle2 className="w-3 h-3 text-white" />
                                    </motion.div>
                                  )}
                                </div>
                                <span className={`font-montserrat text-[11px] leading-tight font-medium ${
                                  isSelected ? "text-page-text" : "text-page-text"
                                }`}>
                                  {l(item.es, item.en)}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2 block">
                          {l("Información Adicional", "Additional Information")}
                        </label>
                        <textarea
                          placeholder={l("Escribe aquí cualquier duda, comentario o detalle...", "Write here any doubts, comments or details...")}
                          className="w-full min-h-[120px] bg-white/50 border border-page-text/10 rounded-2xl px-6 py-4 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/30 transition-all placeholder:text-page-text resize-y"
                          value={formData.informacionAdicional}
                          onChange={(e) => setFormData({...formData, informacionAdicional: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* --- SECCIÓN 4: FINANCIAMIENTO --- */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-px bg-page-text/10 flex-1" />
                      <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-brand-blue font-bold whitespace-nowrap">
                        {l("04. Inversión", "04. Investment")}
                      </span>
                      <div className="h-px bg-page-text/10 flex-1" />
                    </div>

                    <div className="space-y-4">
                      <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2 block">
                        {l("¿Necesitas financiamiento?", "Do you need financing?")}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, financiamiento: "Sí"})}
                          className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                            formData.financiamiento === "Sí" 
                            ? "bg-brand-blue/5 border-brand-blue shadow-sm" 
                            : "bg-white/40 border-page-text/10 hover:border-page-text/20"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                            formData.financiamiento === "Sí" ? "border-brand-blue" : "border-page-text/20"
                          }`}>
                            {formData.financiamiento === "Sí" && <div className="w-2.5 h-2.5 rounded-full bg-brand-blue" />}
                          </div>
                          <span className={`font-montserrat text-xs font-semibold ${
                            formData.financiamiento === "Sí" ? "text-page-text" : "text-page-text"
                          }`}>
                            {l("Sí, requiero financiamiento", "Yes, I need financing")}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setFormData({...formData, financiamiento: "No", anticipo: ""});
                          }}
                          className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                            formData.financiamiento === "No" 
                            ? "bg-brand-blue/5 border-brand-blue shadow-sm" 
                            : "bg-white/40 border-page-text/10 hover:border-page-text/20"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                            formData.financiamiento === "No" ? "border-brand-blue" : "border-page-text/20"
                          }`}>
                            {formData.financiamiento === "No" && <div className="w-2.5 h-2.5 rounded-full bg-brand-blue" />}
                          </div>
                          <span className={`font-montserrat text-xs font-semibold ${
                            formData.financiamiento === "No" ? "text-page-text" : "text-page-text"
                          }`}>
                            {l("No, pago de contado", "No, I will pay cash")}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Disclaimer Legal */}
                    <div className="bg-brand-blue/[0.03] border border-brand-blue/10 rounded-2xl p-5 sm:p-6 mt-4 flex items-start gap-4 transition-all hover:bg-brand-blue/[0.05]">
                      <AlertCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <p className="font-montserrat text-xs leading-relaxed text-page-text text-left">
                        <span className="font-bold text-brand-blue uppercase tracking-wider text-[10px] block mb-1">
                          {l("Aviso importante", "Important notice")}
                        </span>
                        <span className="font-medium">
                          {l("Para poder otorgar financiamiento es estrictamente necesario que el terreno sea de su propiedad y esté libre de gravamen.", "In order to provide financing, it is strictly necessary that you own the land and it is free of encumbrances.")}
                        </span>
                      </p>
                    </div>

                    {/* Conditional Input for Down Payment */}
                    <AnimatePresence>
                      {formData.financiamiento === "Sí" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-2.5">
                            <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">
                              {l("¿Cuánto tiene para dar de anticipo?", "How much do you have for down payment?")}
                            </label>
                            <div className="relative">
                              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-page-text/40 font-montserrat font-light text-sm">$</span>
                              <input
                                required
                                type="text"
                                placeholder="Ej. 150,000 MXN"
                                className="w-full h-14 bg-white/50 border border-page-text/10 rounded-2xl pl-10 pr-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/30 transition-all placeholder:text-page-text"
                                value={formData.anticipo}
                                onChange={(e) => setFormData({...formData, anticipo: e.target.value})}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* --- NUEVO CAMPO: CÓDIGO DE VENDEDOR --- */}
                    <div className="pt-8 border-t border-page-text/5">
                      <div className="space-y-4">
                        <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2 block">
                          {l("¿Eres vendedor? Agrega tu código de vendedor", "Are you a salesperson? Add your salesperson code")}
                        </label>
                        <input
                          type="text"
                          placeholder={l("Ingresa tu código aquí (opcional)", "Enter your code here (optional)")}
                          className="w-full h-14 bg-white/50 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/30 transition-all placeholder:text-page-text/40"
                          value={formData.codigoVendedor}
                          onChange={(e) => setFormData({...formData, codigoVendedor: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {status === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50/50 border border-red-200/50 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 mt-4"
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
                      style={{ backgroundColor: "#1e3a8a" }}
                      className="w-full h-16 text-base font-semibold transition-all shadow-xl shadow-brand-blue/20 rounded-2xl text-white outline-none ring-0 border-0 hover:bg-opacity-90"
                    >
                      {status === "loading" ? l("Cotizando...", "Requesting Quote...") : l("Solicitar Cotización", "Request Quote")}
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                    <p className="text-center mt-6 text-[9px] font-montserrat font-light text-page-text uppercase tracking-[0.2em]">
                      {l("Sunset BCS • Casas Sur", "Sunset BCS • Casas Sur")}
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ──── DIRECT CONTACT ──── */}
      <section className="relative py-24 sm:py-32 bg-page-text/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <motion.div
          >
            <div className="mb-12">
              <h3 className="text-2xl font-literata font-light text-page-text mb-2 italic">
                {l("¿Tiene dudas adicionales?", "Do you have additional questions?")}
              </h3>
              <p className="font-montserrat text-sm text-brand-blue font-medium tracking-widest uppercase">
                Contacte a un asesor de Casas Sur
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
              <a 
                href="tel:+526122134747" 
                className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm shadow-brand-blue/10">
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
                <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm shadow-brand-blue/10">
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
