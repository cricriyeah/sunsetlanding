"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function HeroContent() {
  return (
    <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-start">
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto flex justify-start">
        <div className="max-w-3xl text-left">

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.4,
                },
              },
            }}
            className="mb-6 text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl font-literata drop-shadow-md"
          >
            {"El confort que conoces,".split("").map((char, index) => (
              <motion.span
                key={`line1-${index}`}
                style={{ display: "inline-block", whiteSpace: "pre" }}
                variants={{
                  hidden: { opacity: 0, filter: "blur(12px)", y: 15 },
                  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
                }}
                transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
              >
                {char}
              </motion.span>
            ))}
            <br />
            {"La esencia que buscabas".split("").map((char, index) => (
              <motion.span
                key={`line2-${index}`}
                style={{ display: "inline-block", whiteSpace: "pre" }}
                variants={{
                  hidden: { opacity: 0, filter: "blur(12px)", y: 15 },
                  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
                }}
                transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mb-10 text-lg leading-8 text-white/80 sm:text-lg lg:text-xl mr-auto font-montserrat drop-shadow-md font-medium"
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
