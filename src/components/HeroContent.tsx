"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { CinematicHeading } from "@/components/ui/CinematicHeading";
import { useLanguage } from "@/context/LanguageContext";

export function HeroContent() {
  const { l } = useLanguage();
  return (
    <div className="relative z-20 flex flex-1 items-center pb-20 pt-24 sm:pb-24 sm:pt-32 lg:pb-40 lg:pt-52 3xl:pb-32 3xl:pt-48">
      <div className="w-full max-w-7xl px-6 lg:px-20 xl:px-28 3xl:px-24 mx-auto flex justify-start">
        <div className="max-w-2xl text-left">

          <div className="mb-8">
            <CinematicHeading
              text={l("El confort que conoces,", "The comfort you know,")}
              className="text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl font-literata drop-shadow-md"
              type="word"
              delayChildren={0.4}
            />
            <CinematicHeading
              text={l("La esencia que buscabas", "The essence you sought")}
              className="text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl font-literata drop-shadow-md"
              type="word"
              delayChildren={0.9}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="mb-12 text-lg leading-8 text-white sm:text-lg lg:text-lg xl:text-xl mr-auto font-montserrat drop-shadow-md font-light"
          >
            {l(
              "Elevamos el estándar de vida en La Paz con tecnología inteligente y diseño consciente. Redescubre el lujo de la Baja a través de la visión moderna de quienes saben lo que significa sentirse en casa.",
              "We elevate the standard of living in La Paz with smart technology and conscious design. Rediscover Baja luxury through the modern vision of those who know what it means to feel at home."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-start gap-6"
          >
            <Button href="#proyectos" size="sm" className="shadow-2xl shadow-white/25 font-semibold px-8 h-12">
              {l("Nuestras Obras", "Our Works")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
