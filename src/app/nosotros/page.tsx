"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, ArrowRight, Zap, Leaf, ShieldCheck, Palmtree } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CinematicHeading } from "@/components/ui/CinematicHeading";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "none" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "none",
    transition: { duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] },
  }),
};

export default function NosotrosPage() {
  const { l } = useLanguage();
  return (
    <div className="min-h-screen bg-page-bg text-page-text overflow-x-hidden">
      <Navbar />
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1774753742/12225256_3840_2160_30fps_1_thb81u.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay gradients for text readability and smooth blending */}
        {/* Top shadow for contrast with brand brown */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-page-text/60 via-page-text/20 to-transparent" />

        {/* Bottom: Smooth blending with page-bg */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 z-[1] bg-gradient-to-t from-page-bg via-page-bg/80 to-transparent" />


        <div className="relative z-20 flex flex-1 items-center pb-20 pt-24 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-52">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-20 xl:px-28">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, filter: "none" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-montserrat font-medium text-sm text-white/80 tracking-[0.2em] uppercase block mb-4"
            >{l("Quiénes somos", "Who we are")}</motion.span>

            <CinematicHeading
              text={l("El estándar americano, arraigado en el espíritu de la Baja Sur", "The American standard, rooted in the spirit of Baja Sur")}
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-literata font-light tracking-tight mb-8 text-white drop-shadow-sm"
              type="word"
              delayChildren={0.4}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, filter: "none" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl text-white/90 font-montserrat font-light max-w-2xl leading-relaxed drop-shadow-sm"
            >{l("Experiencia inmobiliaria de alta gama en La Paz y sus alrededores. Fusionamos la innovación de las smart homes y la energía renovable con la esencia indomable del Mar de Cortés. No es un destino nuevo, es el estilo de vida que ya conoces, en el lugar que siempre soñaste.", "High-end real estate experience in La Paz and its surroundings. We merge the innovation of smart homes and renewable energy with the untamed essence of the Sea of Cortez. It's not a new destination, it's the lifestyle you know, in the place you always dreamed of.")}</motion.p>
          </div>
        </div>
      </section>

      {/* ──── MISIÓN ──── */}
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={0}
              variants={fadeUp}
              className="animate-on-scroll group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl !bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 shadow-sm">
                  <Target className="w-5 h-5 !text-brand-blue" />
                </div>
                <span className="font-montserrat font-medium text-sm text-page-text tracking-[0.2em] uppercase">{l("Nuestra Misión", "Our Mission")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-literata font-light text-page-text italic mb-8">{l("Transformar el paisaje inmobiliario de la Baja Sur", "Transforming the real estate landscape of Baja Sur")}</h2>
              <p className="text-page-text font-montserrat font-light text-base sm:text-lg leading-relaxed">
                {l("Nuestra misión es transformar el paisaje inmobiliario de La Paz y sus alrededores a través de desarrollos inteligentes y sostenibles que cumplen con los más altos estándares internacionales de confort. Buscamos ofrecer a nuestros clientes una transición sin fricciones entre la modernidad tecnológica y la autenticidad costera de Baja California Sur.", "Our mission is to transform the real estate landscape of La Paz and its surroundings through smart and sustainable developments that meet the highest international standards of comfort. We seek to offer our clients a frictionless transition between technological modernity and the coastal authenticity of Baja California Sur.")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1, filter: "none" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="animate-on-scroll relative aspect-[4/3] rounded-none overflow-hidden bg-page-text/[0.03] border border-page-text/10 shadow-sm shadow-black/5"
            >
              <Image src="/lpz.webp" alt="La Paz" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-blue/5 mix-blend-overlay opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── VALORES ──── */}
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56 bg-page-bg-alt overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0}
            variants={fadeUp}
            className="animate-on-scroll mb-20 lg:mb-24"
          >
          <h2 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-literata font-light text-page-text">{l("Nuestros Pilares", "Our Pillars")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16">
            {[
              {
                title: l("Innovación", "Innovation"),
                desc: l("Integramos las últimas tecnologías en smart homes y eficiencia energética para crear hogares del futuro.", "We integrate the latest technologies in smart homes and energy efficiency to create homes of the future."),
                icon: Zap
              },
              {
                title: l("Sostenibilidad", "Sustainability"),
                desc: l("Respeto profundo por el ecosistema de la Baja, minimizando nuestro impacto ambiental en cada obra.", "Profound respect for the Baja ecosystem, minimizing our environmental impact in every project."),
                icon: Leaf
              },
              {
                title: l("Calidad", "Quality"),
                desc: l("Estándares americanos de construcción y acabados de lujo certificados en cada detalle arquitectónico.", "American construction standards and certified luxury finishes in every architectural detail."),
                icon: ShieldCheck
              },
              {
                title: l("Herencia", "Heritage"),
                desc: l("Celebramos y preservamos la identidad única de Baja California Sur a través de arquitectura sensible.", "We celebrate and preserve the unique identity of Baja California Sur through sensitive architecture."),
                icon: Palmtree
              }
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={i * 0.15}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                variants={fadeUp}
                className="animate-on-scroll group flex items-start gap-5 sm:gap-6"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                  <motion.div
                    initial={{ scale: 0, rotate: -15, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: i * 0.15 + 0.3
                    }}
                    className="w-full h-full rounded-full !bg-brand-blue/15 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-blue/25 shadow-sm"
                  >
                    <v.icon
                      className="w-8 h-8 sm:w-10 sm:h-10 !text-brand-blue"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </div>
                <div className="flex-1 pt-1 sm:pt-2">
                  <h3 className="text-xl sm:text-2xl font-literata text-page-text mb-2 font-medium">{v.title}</h3>
                  <p className="text-page-text/80 font-montserrat font-light text-sm sm:text-base leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── EQUIPO ──── */}
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0}
            variants={fadeUp}
            className="animate-on-scroll text-center mb-20 lg:mb-28"
          >
            <span className="font-montserrat font-medium text-sm !text-brand-blue/60 tracking-[0.2em] uppercase block mb-4">{l("Conócenos", "Get to know us")}</span>
            <h2 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-literata font-light text-page-text italic">{l("El Equipo", "The Team")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                name: "Ing. Eric Salinas",
                role: l("CEO & Fundador", "CEO & Founder"),
                image: "/erick.webp",
                desc: l("Ingeniero Civil con formación en arquitectura y telecomunicaciones en Nueva York. Tras completar más de 500 proyectos residenciales, llega a La Paz con la visión de fusionar la innovación y el estándar de calidad estadounidense en cada desarrollo.", "Civil Engineer with training in architecture and telecommunications in New York. After completing over 500 residential projects, he arrives in La Paz with the vision of merging innovation and American quality standards in every development.")
              },
              {
                name: "M.C. Isaías Osuna",
                role: l("Líder Estratégico", "Strategic Leader"),
                image: "/isaias2.webp",
                imageClassName: "object-[center_top] scale-125 origin-top",
                desc: l("Maestro en Marketing y Ciencias Políticas. Impulsa la transformación tecnológica y diseña procesos claros para la construcción de marcas sólidas y negocios altamente escalables.", "Master in Marketing and Political Sciences. He drives technological transformation and designs clear processes for building solid brands and highly scalable businesses.")
              },
              {
                name: "Lic. Isabel de la Rosa",
                role: l("Asesoría Legal y Estratégica", "Legal and Strategic Advisor"),
                image: "/isabel.webp",
                desc: l("Licenciada en Derecho. Integra el poder de la estrategia con la protección legal preventiva para dotar a la empresa de bases corporativas inquebrantables y blindar el patrimonio de cada proyecto.", "Law Graduate. She integrates the power of strategy with preventive legal protection to provide the company with unbreakable corporate foundations and shield the assets of each project.")
              }
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={i * 0.15}
                variants={fadeUp}
                className="animate-on-scroll group flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-none mb-6 bg-page-text/5 border border-page-text/10 shrink-0">
                  <Image src={member.image} alt={member.name} fill className={`object-cover transition-transform duration-700 ${member.imageClassName ? member.imageClassName : "group-hover:scale-105"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-literata font-medium text-page-text mb-1">{member.name}</h3>
                <p className="font-montserrat font-medium text-[10px] !text-brand-blue uppercase tracking-widest mb-3">{member.role}</p>
                <p className="font-montserrat font-light text-xs text-page-text/80 leading-relaxed max-w-[95%]">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="relative py-24 sm:py-32 lg:py-52 xl:py-64 3xl:py-56">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-28 3xl:px-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0}
            variants={fadeUp}
            className="animate-on-scroll"
          >
            <h2 className="text-3xl sm:text-5xl font-literata font-light text-page-text italic mb-6">{l("Construyamos juntos", "Let's build together")}</h2>
            <p className="text-page-text font-montserrat font-light text-lg max-w-xl mx-auto mb-10">{l("Conócenos y descubre cómo estamos transformando el paisaje residencial de La Paz.", "Get to know us and discover how we are transforming the residential landscape of La Paz.")}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-page-text text-page-bg px-8 py-3 text-sm font-montserrat font-semibold hover:bg-page-text-hover transition-all shadow-sm shadow-page-text/15"
            >{l("Ver proyectos", "View projects")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <Footer />
    </div>
  );
}
