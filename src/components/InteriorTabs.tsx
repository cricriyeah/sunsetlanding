import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLightbox } from "@/context/LightboxContext";
import { Search } from "lucide-react";

export const interiorTabsData = [
  {
    id: "sala",
    title: "Sala Principal",
    description: "Un espacio de concepto abierto diseñado para la convivencia, con ventanales que integran el exterior y acabados que exudan un lujo sereno.",
    image: "/herocondo3.webp",
  },
  {
    id: "comedor",
    title: "Comedor",
    description: "El escenario perfecto para cenas inolvidables, ubicado estratégicamente para disfrutar de las vistas mientras compartes momentos con familia y amigos.",
    image: "/comedor.webp",
  },
  {
    id: "recamara",
    title: "Recámara Principal",
    description: "Un refugio íntimo con ventanales de piso a techo. Despierta con vistas panorámicas y disfruta de un vestidor amplio diseñado para tu máximo confort.",
    image: "/dormitorio.webp",
  },
  {
    id: "cocina",
    title: "Cocina Gourmet",
    description: "Equipada con tecnología moderna y superficies de piedra natural. Una isla central perfecta tanto para el día a día como para recibir a tus invitados.",
    image: "/herocondo.webp",
  },
  {
    id: "banos",
    title: "Baños de Lujo",
    description: "Diseño minimalista con detalles en grifería de alta gama y cancelería fina. Un santuario privado tipo spa en tu propio hogar.",
    image: "/bano.webp",
  },
];

export function InteriorTabs() {
  const [activeTab, setActiveTab] = useState(interiorTabsData[0].id);
  const { openLightbox } = useLightbox();

  const activeContent = interiorTabsData.find(t => t.id === activeTab)!;
  const activeIndex = interiorTabsData.findIndex(t => t.id === activeTab);

  return (
    <section className="relative py-24 sm:py-32 bg-page-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header - Centered for the new wide layout */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="font-montserrat text-sm font-medium text-brand-orange tracking-[0.2em] uppercase block mb-3">Diseño y Confort</span>
          <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
            Interiores Exclusivos
          </h2>
        </div>

        {/* Main Content Area: Image + Text Overlay */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent.id}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] sm:aspect-[21/9] rounded-[1rem] sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-page-text/10 border border-page-text/5 group cursor-pointer"
              onClick={() => openLightbox(interiorTabsData.map(d => ({ src: d.image, alt: d.title, type: 'image' as const })), activeIndex)}
            >
              {/* Image */}
              <Image
                src={activeContent.image}
                alt={activeContent.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                priority
              />

              {/* Gradient Overlay for Text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-page-text/90 via-page-text/40 to-transparent" />

              {/* Text inside Image */}
              <div className="absolute bottom-0 left-0 p-8 sm:p-16 w-full max-w-4xl z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-literata text-page-bg mb-4 italic">{activeContent.title}</h3>
                  <p className="text-page-bg font-montserrat font-light text-base sm:text-lg leading-relaxed max-w-2xl">
                    {activeContent.description}
                  </p>
                </motion.div>
              </div>
              
              {/* Lupa overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <Search className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Noise/Texture Overlay */}
              <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none opacity-50" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tabs Menu - Refined Glass Pills below the image */}
        <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">
          {interiorTabsData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-montserrat text-sm sm:text-base transition-all duration-500 overflow-hidden
                  ${isActive
                    ? "text-page-bg shadow-lg shadow-sc-primary/20 scale-105"
                    : "text-page-text hover:text-page-text bg-white/40 backdrop-blur-md border border-page-text/10 hover:border-page-text/20"
                  }`}
              >
                {/* Active Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-sc-primary z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Text */}
                <span className="relative z-10 font-medium tracking-wide">
                  {tab.title}
                </span>

                {/* Hover Glow for inactive */}
                {!isActive && (
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
