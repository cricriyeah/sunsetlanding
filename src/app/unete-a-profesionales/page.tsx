"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Briefcase,
  Star,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileCheck,
  Building,
  HardHat,
  UploadCloud,
  File
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { CinematicHeading } from "@/components/ui/CinematicHeading";
import { useLanguage } from "@/context/LanguageContext";


export default function UneteProfesionalesPage() {
  const { l } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    profesion: "",
    rfc: "No",
  });
  
  const [ineFrente, setIneFrente] = useState<File | null>(null);
  const [ineReverso, setIneReverso] = useState<File | null>(null);
  
  const ineFrenteInput = useRef<HTMLInputElement>(null);
  const ineReversoInput = useRef<HTMLInputElement>(null);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert(l("El archivo es demasiado grande (máx 5MB).", "The file is too large (max 5MB)."));
        return;
      }
      setter(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.nombre || !formData.celular || !formData.profesion || !ineFrente || !ineReverso) {
      setStatus("error");
      setErrorMessage(l("Por favor llene todos los campos y adjunte su INE.", "Please fill in all fields and attach your INE."));
      return;
    }

    setStatus("loading");
    
    try {
      const data = new FormData();
      data.append("nombre", formData.nombre);
      data.append("celular", formData.celular);
      data.append("profesion", formData.profesion);
      data.append("rfc", formData.rfc);
      data.append("ineFrente", ineFrente);
      data.append("ineReverso", ineReverso);

      const response = await fetch("/send_profesionales.php", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || l("Error al enviar la solicitud.", "Error sending the application."));
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(l("Error de conexión.", "Connection error."));
    }
  };

  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-brand-orange/20 overflow-x-hidden">
      <Navbar />
      {/* ──── HERO ──── */}
      <section className="relative min-h-[70vh] w-full overflow-hidden flex flex-col justify-center">
        {/* Dynamic Gradients (Orange) */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-brand-orange/5 to-page-bg z-0" />
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full z-0 animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-brand-orange/10 blur-[130px] rounded-full z-0" />
        
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8"
            >
              <Star className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              <span className="font-montserrat font-bold text-[9px] uppercase tracking-[0.25em] text-brand-orange">
                {l("Únete como Profesional", "Join as a Professional")}
              </span>
            </motion.div>

            <div className="mb-8">
              <CinematicHeading
                text={l("Se parte de nuestro equipo exclusivo de profesionales", "Be part of our exclusive team of professionals")}
                className="text-4xl sm:text-6xl lg:text-7xl font-literata font-light tracking-tight text-page-text"
                type="word"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-brand-orange font-literata font-light italic max-w-2xl mx-auto mb-6"
            >
              {l("desarrollando el futuro en BCS", "developing the future in BCS")}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base sm:text-lg text-page-text font-montserrat font-light max-w-xl mx-auto leading-relaxed"
            >
              {l("Ingrese sus datos y documentos para verificar su perfil e integrarse a nuestras vacantes y proyectos.", "Enter your details and documents to verify your profile and join our vacancies and projects.")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──── FORM CONTENT ──── */}
      <section className="relative py-24 pb-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-16 items-center">
            
            {/* Perks row */}
            <motion.div className="w-full">
              <h3 className="text-2xl font-literata font-light italic text-page-text mb-10 text-center">
                {l("Beneficios Exclusivos", "Exclusive Benefits")}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center gap-4 group p-6 rounded-[2rem] bg-white/40 border border-page-text/5 hover:border-brand-orange/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-widest text-page-text mb-2">{l("Estabilidad Laboral", "Job Stability")}</h4>
                    <p className="font-montserrat font-light text-sm text-page-text leading-relaxed">
                      {l("Colabora permanentemente en múltiples proyectos en la zona con proyección a largo plazo.", "Collaborate continuously on multiple projects in the area with long-term projection.")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 group p-6 rounded-[2rem] bg-white/40 border border-page-text/5 hover:border-brand-orange/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-widest text-page-text mb-2">{l("Proyectos Premium", "Premium Projects")}</h4>
                    <p className="font-montserrat font-light text-sm text-page-text leading-relaxed">
                      {l("Añada proyectos de alto impacto e innovación sustentable a su currículum.", "Add high-impact and sustainable innovation projects to your resume.")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 group p-6 rounded-[2rem] bg-white/40 border border-page-text/5 hover:border-brand-orange/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-widest text-page-text mb-2">{l("Formación Continua", "Continuous Training")}</h4>
                    <p className="font-montserrat font-light text-sm text-page-text leading-relaxed">
                      {l("Participa con métodos constructivos modernos, certificaciones y desarrollo personal.", "Participate with modern constructive methods, certifications, and personal development.")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form row */}
            <div className="w-full">
              <motion.div
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
                        {l("Analizaremos su perfil profesional y nos pondremos en contacto con usted vía telefónica.", "We will analyze your professional profile and contact you by phone.")}
                      </p>
                      <Button 
                        variant="ghost" 
                        onClick={() => {
                          setStatus("idle");
                          setFormData({ nombre: "", celular: "", profesion: "", rfc: "No" });
                          setIneFrente(null);
                          setIneReverso(null);
                        }} 
                        className="text-brand-orange hover:bg-transparent font-montserrat font-semibold text-sm underline underline-offset-8"
                      >
                        {l("Enviar otra solicitud", "Send another application")}
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-12">
                      {/* --- SECCIÓN 1: DATOS PERSONALES --- */}
                      <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="h-px bg-page-text/10 flex-1" />
                          <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-page-text font-bold whitespace-nowrap">
                            {l("01. Identidad Laboral", "01. Work Identity")}
                          </span>
                          <div className="h-px bg-page-text/10 flex-1" />
                        </div>

                        <div className="space-y-2.5">
                          <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("Nombre Completo", "Full Name")}</label>
                          <input
                            required
                            type="text"
                            placeholder={l("Su nombre y apellidos", "Your full name")}
                            className="w-full h-14 bg-white/40 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange/30 transition-all placeholder:text-page-text"
                            value={formData.nombre}
                            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                          <div className="space-y-2.5">
                            <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("Número de Celular", "Mobile Number")}</label>
                            <input
                              required
                              type="tel"
                              placeholder="+52 (...) ..."
                              className="w-full h-14 bg-white/40 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange/30 transition-all placeholder:text-page-text"
                              value={formData.celular}
                              onChange={(e) => setFormData({...formData, celular: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2.5">
                            <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2">{l("Profesión / Oficio", "Profession / Trade")}</label>
                            <input
                              required
                              type="text"
                              placeholder={l("Ej. Arquitecto, Maestro...", "E.g. Architect, Master...")}
                              className="w-full h-14 bg-white/40 border border-page-text/10 rounded-2xl px-6 font-montserrat font-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange/30 transition-all placeholder:text-page-text"
                              value={formData.profesion}
                              onChange={(e) => setFormData({...formData, profesion: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>

                      {/* --- SECCIÓN 2: DOCUMENTACIÓN --- */}
                      <div className="space-y-10 pt-4">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="h-px bg-page-text/10 flex-1" />
                          <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-page-text font-bold whitespace-nowrap">
                            {l("02. Verificación Legal", "02. Legal Verification")}
                          </span>
                          <div className="h-px bg-page-text/10 flex-1" />
                        </div>

                        <div className="space-y-4">
                          <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2 block">{l("¿Cuenta con RFC?", "Do you have an RFC?")}</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            <button 
                              type="button"
                              onClick={() => setFormData({...formData, rfc: "Sí"})}
                              className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${formData.rfc === "Sí" ? 'bg-brand-orange/5 border-brand-orange shadow-sm' : 'bg-white/40 border-page-text/10 hover:border-page-text/20'}`}
                            >
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${formData.rfc === "Sí" ? 'border-brand-orange' : 'border-page-text/20'}`}>
                                {formData.rfc === "Sí" && <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />}
                              </div>
                              <span className={`font-montserrat text-xs font-semibold ${formData.rfc === "Sí" ? 'text-page-text' : 'text-page-text'}`}>
                                {l("Sí, cuento con RFC", "Yes, I have an RFC")}
                              </span>
                            </button>

                            <button 
                              type="button"
                              onClick={() => setFormData({...formData, rfc: "No"})}
                              className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${formData.rfc === "No" ? 'bg-brand-orange/5 border-brand-orange shadow-sm' : 'bg-white/40 border-page-text/10 hover:border-page-text/20'}`}
                            >
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${formData.rfc === "No" ? 'border-brand-orange' : 'border-page-text/20'}`}>
                                {formData.rfc === "No" && <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />}
                              </div>
                              <span className={`font-montserrat text-xs font-semibold ${formData.rfc === "No" ? 'text-page-text' : 'text-page-text'}`}>
                                {l("No cuento con RFC", "No, I don't")}
                              </span>
                            </button>
                          </div>
                        </div>

                        {/* File Uploads Tiles */}
                        <div className="space-y-4">
                          <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase font-bold text-page-text ml-2 block">
                            {l("Fotografía de INE Vigente", "Current ID Photo (INE)")}
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div 
                              onClick={() => ineFrenteInput.current?.click()}
                              className={`group relative overflow-hidden h-40 bg-white/40 border-2 border-dashed transition-all cursor-pointer rounded-2xl flex flex-col items-center justify-center p-6 text-center ${ineFrente ? 'border-brand-orange bg-brand-orange/5' : 'border-page-text/10 hover:border-brand-orange/30 hover:bg-white/60'}`}
                            >
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                ref={ineFrenteInput} 
                                onChange={(e) => handleFileChange(e, setIneFrente)} 
                              />
                              {ineFrente ? (
                                <>
                                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white mb-3 shadow-lg shadow-brand-orange/20">
                                    <FileCheck className="w-5 h-5" />
                                  </div>
                                  <span className="font-montserrat text-[11px] font-bold text-page-text truncate max-w-full px-2">{ineFrente.name}</span>
                                  <span className="font-montserrat text-[8px] uppercase tracking-widest text-brand-orange font-bold mt-1">{l("Frente Capturado", "Front Captured")}</span>
                                </>
                              ) : (
                                <>
                                  <div className="w-10 h-10 rounded-xl bg-page-text/5 flex items-center justify-center text-page-text/30 mb-3 group-hover:scale-110 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-all duration-500">
                                    <UploadCloud className="w-5 h-5" />
                                  </div>
                                  <span className="font-montserrat text-[10px] font-semibold text-page-text group-hover:text-page-text transition-colors">{l("Lado Frontal", "Front Side")}</span>
                                  <span className="font-montserrat text-[8px] uppercase tracking-widest text-page-text/30 mt-1">{l("Clic para subir", "Click to upload")}</span>
                                </>
                              )}
                            </div>

                            <div 
                              onClick={() => ineReversoInput.current?.click()}
                              className={`group relative overflow-hidden h-40 bg-white/40 border-2 border-dashed transition-all cursor-pointer rounded-2xl flex flex-col items-center justify-center p-6 text-center ${ineReverso ? 'border-brand-orange bg-brand-orange/5' : 'border-page-text/10 hover:border-brand-orange/30 hover:bg-white/60'}`}
                            >
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                ref={ineReversoInput} 
                                onChange={(e) => handleFileChange(e, setIneReverso)} 
                              />
                              {ineReverso ? (
                                <>
                                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white mb-3 shadow-lg shadow-brand-orange/20">
                                    <FileCheck className="w-5 h-5" />
                                  </div>
                                  <span className="font-montserrat text-[11px] font-bold text-page-text truncate max-w-full px-2">{ineReverso.name}</span>
                                  <span className="font-montserrat text-[8px] uppercase tracking-widest text-brand-orange font-bold mt-1">{l("Reverso Capturado", "Back Captured")}</span>
                                </>
                              ) : (
                                <>
                                  <div className="w-10 h-10 rounded-xl bg-page-text/5 flex items-center justify-center text-page-text/30 mb-3 group-hover:scale-110 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-all duration-500">
                                    <UploadCloud className="w-5 h-5" />
                                  </div>
                                  <span className="font-montserrat text-[10px] font-semibold text-page-text group-hover:text-page-text transition-colors">{l("Lado Trasero", "Back Side")}</span>
                                  <span className="font-montserrat text-[8px] uppercase tracking-widest text-page-text/30 mt-1">{l("Clic para subir", "Click to upload")}</span>
                                </>
                              )}
                            </div>
                          </div>
                          <p className="text-[9px] font-montserrat text-page-text italic ml-2 mt-2">
                            {l("* Asegúrese de que las fotos sean legibles y estén bien iluminadas.", "* Please ensure the photos are legible and well-lit.")}
                          </p>
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

                      <div className="pt-10">
                        <Button
                          disabled={status === "loading"}
                          variant="brand"
                          className="w-full h-16 text-base font-semibold bg-brand-orange hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/10 rounded-2xl text-white outline-none ring-0 border-0"
                        >
                          {status === "loading" ? l("Enviando Solicitud...", "Sending Application...") : l("Enviar Solicitud", "Submit Application")}
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                        <p className="text-center mt-6 text-[9px] font-montserrat font-light text-page-text uppercase tracking-[0.2em]">
                          {l("Privacidad garantizada | Reclutamiento Sunset", "Privacy guaranteed | Sunset Recruitment")}
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
            className="text-center mb-16"
          >
            <span className="font-montserrat font-medium text-sm text-brand-orange tracking-[0.2em] uppercase block mb-3">
              {l("Preguntas Frecuentes", "Common Questions")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
              {l("Todo lo que necesita saber", "Everything you need to know")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {[
              {
                q: l("¿Cuánto tardan en revisar mi solicitud?", "How long does it take to review my application?"),
                a: l("Nuestro equipo de recursos humanos evalúa cada aplicación en un lapso máximo de 48 horas tras su envío.", "Our human resources team evaluates each application within a maximum of 48 hours after submission.")
              },
              {
                q: l("¿Por qué necesitan mi INE y RFC?", "Why do you need my ID and RFC?"),
                a: l("Para cumplir con los procesos legales y de contratación formalizados ante la ley, garantizando un ambiente seguro.", "To comply with legal and formal hiring processes according to the law, ensuring a safe environment.")
              },
              {
                q: l("¿Es necesario tener experiencia previa?", "Is prior experience required?"),
                a: l("Dependiendo del rol, valoramos la experiencia, pero también apostamos por el talento emergente y la actitud de servicio.", "Depending on the role, we value experience, but we also bet on emerging talent and a service attitude.")
              },
              {
                q: l("¿En dónde están ubicados los proyectos?", "Where are the projects located?"),
                a: l("Contamos con sedes en toda Baja California Sur, con principal concentración en La Paz.", "We have locations throughout Baja California Sur, with a main concentration in La Paz.")
              }
            ].map((faq, i) => (
               <motion.div
                key={i}
                custom={i * 0.1}
                className="p-8 rounded-[2rem] bg-white/40 border border-page-text/5 hover:border-brand-orange/20 transition-all duration-500"
              >
                <h3 className="font-literata text-xl text-page-text mb-4 italic">{faq.q}</h3>
                <p className="font-montserrat font-light text-sm text-page-text leading-relaxed italic">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── DIRECT CONTACT ──── */}
      <section className="relative py-24 sm:py-32 bg-page-text/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <motion.div
          >
            <div className="mb-12">
              <h3 className="text-2xl font-literata font-light text-page-text mb-2 italic">
                {l("¿Problemas con el formulario? Escríbanos", "Issues with the form? Write to us")}
              </h3>
              <p className="font-montserrat text-sm text-brand-orange font-medium tracking-widest uppercase">
                Departamento de Recursos Humanos
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
              <a 
                href="tel:+526122134747" 
                className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm shadow-brand-orange/10">
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
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm shadow-brand-orange/10">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="font-montserrat text-sm font-medium text-page-text tracking-wide">WhatsApp HR</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
