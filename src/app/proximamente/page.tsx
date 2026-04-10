"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CinematicHeading } from "@/components/ui/CinematicHeading";

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

export default function ProximamentePage() {
  return (
    <div className="min-h-screen bg-page-bg text-page-text selection:bg-sc-accent/30 flex flex-col">
      {/* ──── HERO / MAIN CONTENT ──── */}
      <section className="relative flex-1 w-full overflow-hidden flex flex-col justify-center items-center">
        {/* Blue & Pink Gradient - Mirrored from Contact page for styling */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 via-sc-accent/40 to-brand-sand/10 z-0" />
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

        <div className="relative z-30 w-full top-0 absolute">
          <Navbar />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 lg:pt-56 lg:pb-48 3xl:pt-48 3xl:pb-40">
          <div className="max-w-4xl w-full mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase block mb-6 px-4 py-1.5 bg-page-bg/10 backdrop-blur-md rounded-full w-fit mx-auto border border-page-text/10"
            >
              Nuevos Horizontes
            </motion.span>

            <div className="mb-8">
              <CinematicHeading
                text="Próximamente"
                className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-literata font-light tracking-tight text-page-text"
                type="word"
                delayChildren={0.4}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-xl sm:text-2xl text-page-text font-montserrat font-light max-w-2xl mx-auto leading-relaxed opacity-90 italic"
            >
              Estamos diseñando algo extraordinario. La espera valdrá la pena.
            </motion.p>

            {/* SOCIAL BAR - Styled like contact page */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1.4}
              className="mt-16 flex flex-col items-center gap-6"
            >
              <h3 className="text-xs font-montserrat font-medium uppercase tracking-[0.3em] text-page-text/60">
                Mantente Conectado
              </h3>
              <div className="flex gap-6 flex-wrap justify-center">
                {[
                  { Icon: Instagram, link: "#" },
                  { Icon: Facebook, link: "#" },
                  { Icon: MessageCircle, link: "https://wa.me/5216122134747" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="w-12 h-12 rounded-full border border-page-text/10 flex items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-sc-accent hover:border-sc-accent hover:text-white transition-all duration-500 shadow-lg shadow-black/5"
                  >
                    <social.Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
