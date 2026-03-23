"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const interiorTabsData = [
  {
    id: "sala",
    title: "Sala Principal",
    description: "Un espacio de concepto abierto diseñado para la convivencia, con ventanales que integran el exterior y acabados que exudan un lujo sereno.",
    image: "/herocondo3.png",
  },
  {
    id: "comedor",
    title: "Comedor",
    description: "El escenario perfecto para cenas inolvidables, ubicado estratégicamente para disfrutar de las vistas mientras compartes momentos con familia y amigos.",
    image: "/comedor.jpeg",
  },
  {
    id: "recamara",
    title: "Recámara Principal",
    description: "Un refugio íntimo con ventanales de piso a techo. Despierta con vistas panorámicas y disfruta de un vestidor amplio diseñado para tu máximo confort.",
    image: "/dormitorio.jpeg",
  },
  {
    id: "cocina",
    title: "Cocina Gourmet",
    description: "Equipada con tecnología moderna y superficies de piedra natural. Una isla central perfecta tanto para el día a día como para recibir a tus invitados.",
    image: "/herocondo.png",
  },
  {
    id: "banos",
    title: "Baños de Lujo",
    description: "Diseño minimalista con detalles en grifería de alta gama y cancelería fina. Un santuario privado tipo spa en tu propio hogar.",
    image: "/bano.jpeg",
  },
];

export function InteriorTabs() {
  const [activeTab, setActiveTab] = useState(interiorTabsData[0].id);

  const activeContent = interiorTabsData.find(t => t.id === activeTab)!;

  return (
    <section className="relative py-24 sm:py-32 bg-page-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-montserrat text-sm font-medium text-brand-orange tracking-[0.2em] uppercase block mb-3">Diseño y Confort</span>
          <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic">
            Interiores Exclusivos
          </h2>
        </div>

        {/* Layout: Sidebar (Tabs) + Main Content (Image & Text) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Tabs Menu */}
          <div className="lg:w-1/4 flex flex-row lg:flex-col gap-2 relative overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-page-text/10 rounded-full" />
            <div className="lg:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-page-text/10 rounded-full" />
            
            {interiorTabsData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left whitespace-nowrap lg:white-space-normal px-4 lg:pl-6 lg:px-0 py-3 lg:py-4 relative transition-all duration-300 font-montserrat ${isActive ? "text-page-text font-semibold" : "text-page-text/50 hover:text-page-text/80"}`}
                >
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="activeTabIndicatorVertical"
                        className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-brand-orange rounded-full z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                      <motion.div
                        layoutId="activeTabIndicatorHorizontal"
                        className="lg:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange rounded-full z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </>
                  )}
                  <span className="text-base sm:text-lg">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Content */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl shadow-page-text/10 border border-page-text/5 group"
              >
                {/* Image */}
                <Image
                  src={activeContent.image}
                  alt={activeContent.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Gradient Overlay for Text legibility - using page-text color */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-page-text/90 via-page-text/40 to-transparent" />
                
                {/* Text inside Image */}
                <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full max-w-3xl z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-literata text-page-bg mb-2 italic">{activeContent.title}</h3>
                    <p className="text-page-bg/80 font-montserrat text-base sm:text-lg leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {activeContent.description}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
