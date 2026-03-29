"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLightbox } from "@/context/LightboxContext";
import { Search } from "lucide-react";

// ─── Tipos ─────────────────────────────────────────────────────────────────
export interface Photo {
  src: string;
  alt: string;
  col?: string;
  row?: string;
}

interface PhotoCollageProps {
  photos: Photo[];
  title: string;
  subtitle: string;
  sectionBg?: string;
  accentColor?: string;
  textColor?: string;
}

// ─── Variantes de animación Dreamy ──────────────────────────────────────────
const dreamyFade = {
  hidden: { 
    opacity: 0, 
    scale: 1.08, 
    filter: "blur(15px)",
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // expo out
    },
  },
};

// ─── Componente ────────────────────────────────────────────────────────────
export function PhotoCollage({ 
  photos, 
  title, 
  subtitle, 
  sectionBg = "bg-page-bg", 
  accentColor = "text-sc-contrast", 
  textColor = "text-page-text" 
}: PhotoCollageProps) {
  const { openLightbox } = useLightbox();

  return (
    <section className={`relative py-24 sm:py-32 ${sectionBg}`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          <span className={`font-montserrat text-sm font-medium ${accentColor} tracking-[0.2em] uppercase block mb-3`}>
            {subtitle}
          </span>
          <h2 className={`text-3xl sm:text-5xl font-literata font-light ${textColor} italic`}>
            {title}
          </h2>
        </motion.div>
      </div>

      {/* Grid full-bleed */}
      <div
        className="w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "clamp(200px, 25vw, 320px)",
          gap: "4px",
        }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={dreamyFade}
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => openLightbox(photos.map(p => ({ src: p.src, alt: p.alt })), i)}
            style={{
              gridColumn: photo.col ?? "span 1",
              gridRow:    photo.row ?? "span 1",
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Overlay con nombre de foto y lupa */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700">
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <Search className="w-5 h-5 text-white" />
                  </div>
               </div>
               
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="font-montserrat text-xs sm:text-sm text-white font-light tracking-wide">
                  {photo.alt}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
