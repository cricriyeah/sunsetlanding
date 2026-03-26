"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { CinematicHeading } from "@/components/ui/CinematicHeading";

export function HeroContent() {
  return (
    <div className="relative z-10 flex flex-1 items-end pb-32 sm:pb-48">
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto flex justify-start">
        <div className="max-w-3xl text-left">

          <div className="mb-6">
            <CinematicHeading
              text="El confort que conoces,"
              className="text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl font-literata drop-shadow-md"
              type="word"
              delayChildren={0.4}
            />
            <CinematicHeading
              text="La esencia que buscabas"
              className="text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl font-literata drop-shadow-md"
              type="word"
              delayChildren={0.9} // Slight delay after the first line
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }} // Delayed to follow headings
            className="mb-10 text-lg leading-8 text-white sm:text-lg lg:text-xl mr-auto font-montserrat drop-shadow-md font-light"
          >
            Elevamos el estándar de vida en La Paz con tecnología inteligente y diseño consciente. Redescubre el lujo de la Baja a través de la visión moderna de quienes saben lo que significa sentirse en casa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12"
          >
            <Button size="sm" className="shadow-2xl shadow-white/25 font-semibold">
              Explore Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
