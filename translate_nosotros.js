const fs = require('fs');
let content = fs.readFileSync('src/app/nosotros/page.tsx', 'utf8');

// 1. Add hook
content = content.replace(
  'import { CinematicHeading } from "@/components/ui/CinematicHeading";',
  'import { CinematicHeading } from "@/components/ui/CinematicHeading";\nimport { useLanguage } from "@/context/LanguageContext";'
);

content = content.replace(
  'export default function NosotrosPage() {',
  'export default function NosotrosPage() {\n  const { l } = useLanguage();'
);

content = content.replace(
  />\s*Quiénes somos\s*<\/motion.span>/g,
  '>{l("Quiénes somos", "Who we are")}</motion.span>'
);

content = content.replace(
  /text="El estándar americano, arraigado en el espíritu de la Baja Sur"/,
  'text={l("El estándar americano, arraigado en el espíritu de la Baja Sur", "The American standard, rooted in the spirit of Baja Sur")}'
);

content = content.replace(
  />\s*Experiencia inmobiliaria de alta gama en La Paz y sus alrededores. Fusionamos la innovación de las smart homes y la energía renovable con la esencia indomable del Mar de Cortés. No es un destino nuevo, es el estilo de vida que ya conoces, en el lugar que siempre soñaste.\s*<\/motion.p>/,
  `>{l("Experiencia inmobiliaria de alta gama en La Paz y sus alrededores. Fusionamos la innovación de las smart homes y la energía renovable con la esencia indomable del Mar de Cortés. No es un destino nuevo, es el estilo de vida que ya conoces, en el lugar que siempre soñaste.", "High-end real estate experience in La Paz and its surroundings. We merge the innovation of smart homes and renewable energy with the untamed essence of the Sea of Cortez. It's not a new destination, it's the lifestyle you know, in the place you always dreamed of.")}</motion.p>`
);

content = content.replace(
  />Nuestra Misión<\/span>/,
  `>{l("Nuestra Misión", "Our Mission")}</span>`
);

content = content.replace(
  />\s*Transformar el paisaje inmobiliario de la Baja Sur\s*<\/h2>/,
  `>{l("Transformar el paisaje inmobiliario de la Baja Sur", "Transforming the real estate landscape of Baja Sur")}</h2>`
);

content = content.replace(
  /<p className="text-page-text font-montserrat font-light text-base sm:text-lg leading-relaxed">\s*Nuestra misión es transformar el paisaje inmobiliario de La Paz y sus alrededores a través de desarrollos inteligentes y sostenibles que cumplen con los más altos estándares internacionales de confort. Buscamos ofrecer a nuestros clientes una transición sin fricciones entre la modernidad tecnológica y la autenticidad costera de Baja California Sur.\s*<\/p>/,
  `<p className="text-page-text font-montserrat font-light text-base sm:text-lg leading-relaxed">\n                {l("Nuestra misión es transformar el paisaje inmobiliario de La Paz y sus alrededores a través de desarrollos inteligentes y sostenibles que cumplen con los más altos estándares internacionales de confort. Buscamos ofrecer a nuestros clientes una transición sin fricciones entre la modernidad tecnológica y la autenticidad costera de Baja California Sur.", "Our mission is to transform the real estate landscape of La Paz and its surroundings through smart and sustainable developments that meet the highest international standards of comfort. We seek to offer our clients a frictionless transition between technological modernity and the coastal authenticity of Baja California Sur.")}\n              </p>`
);

content = content.replace(
  />Nuestros Pilares<\/h2>/,
  `>{l("Nuestros Pilares", "Our Pillars")}</h2>`
);

content = content.replace(
  /title: "Innovación",\s*desc: "Integramos las últimas tecnologías en smart homes y eficiencia energética para crear hogares del futuro."/,
  `title: l("Innovación", "Innovation"),\n                desc: l("Integramos las últimas tecnologías en smart homes y eficiencia energética para crear hogares del futuro.", "We integrate the latest technologies in smart homes and energy efficiency to create homes of the future.")`
);

content = content.replace(
  /title: "Sostenibilidad",\s*desc: "Respeto profundo por el ecosistema de la Baja, minimizando nuestro impacto ambiental en cada obra."/,
  `title: l("Sostenibilidad", "Sustainability"),\n                desc: l("Respeto profundo por el ecosistema de la Baja, minimizando nuestro impacto ambiental en cada obra.", "Profound respect for the Baja ecosystem, minimizing our environmental impact in every project.")`
);

content = content.replace(
  /title: "Calidad",\s*desc: "Estándares americanos de construcción y acabados de lujo certificados en cada detalle arquitectónico."/,
  `title: l("Calidad", "Quality"),\n                desc: l("Estándares americanos de construcción y acabados de lujo certificados en cada detalle arquitectónico.", "American construction standards and certified luxury finishes in every architectural detail.")`
);

content = content.replace(
  /title: "Herencia",\s*desc: "Celebramos y preservamos la identidad única de Baja California Sur a través de arquitectura sensible."/,
  `title: l("Herencia", "Heritage"),\n                desc: l("Celebramos y preservamos la identidad única de Baja California Sur a través de arquitectura sensible.", "We celebrate and preserve the unique identity of Baja California Sur through sensitive architecture.")`
);

content = content.replace(
  />Conócenos<\/span>/,
  `>{l("Conócenos", "Get to know us")}</span>`
);

content = content.replace(
  />El Equipo<\/h2>/,
  `>{l("El Equipo", "The Team")}</h2>`
);

content = content.replace(
  /role: "CEO & Fundador",\s*image: "\/erick\.webp",\s*desc: "Ingeniero Civil con formación en arquitectura y telecomunicaciones en Nueva York. Tras completar más de 500 proyectos residenciales, llega a La Paz con la visión de fusionar la innovación y el estándar de calidad estadounidense en cada desarrollo."/,
  `role: l("CEO & Fundador", "CEO & Founder"),\n                image: "/erick.webp",\n                desc: l("Ingeniero Civil con formación en arquitectura y telecomunicaciones en Nueva York. Tras completar más de 500 proyectos residenciales, llega a La Paz con la visión de fusionar la innovación y el estándar de calidad estadounidense en cada desarrollo.", "Civil Engineer with training in architecture and telecommunications in New York. After completing over 500 residential projects, he arrives in La Paz with the vision of merging innovation and American quality standards in every development.")`
);

content = content.replace(
  /role: "Líder Estratégico",\s*image: "\/isaias\.webp",\s*desc: "Maestro en Marketing y Ciencias Políticas. Impulsa la transformación tecnológica y diseña procesos claros para la construcción de marcas sólidas y negocios altamente escalables."/,
  `role: l("Líder Estratégico", "Strategic Leader"),\n                image: "/isaias.webp",\n                desc: l("Maestro en Marketing y Ciencias Políticas. Impulsa la transformación tecnológica y diseña procesos claros para la construcción de marcas sólidas y negocios altamente escalables.", "Master in Marketing and Political Sciences. He drives technological transformation and designs clear processes for building solid brands and highly scalable businesses.")`
);

content = content.replace(
  /role: "Asesoría Legal y Estratégica",\s*image: "\/isabel\.webp",\s*desc: "Licenciada en Derecho. Integra el poder de la estrategia con la protección legal preventiva para dotar a la empresa de bases corporativas inquebrantables y blindar el patrimonio de cada proyecto."/,
  `role: l("Asesoría Legal y Estratégica", "Legal and Strategic Advisor"),\n                image: "/isabel.webp",\n                desc: l("Licenciada en Derecho. Integra el poder de la estrategia con la protección legal preventiva para dotar a la empresa de bases corporativas inquebrantables y blindar el patrimonio de cada proyecto.", "Law Graduate. She integrates the power of strategy with preventive legal protection to provide the company with unbreakable corporate foundations and shield the assets of each project.")`
);

content = content.replace(
  />\s*Construyamos juntos\s*<\/h2>/,
  `>{l("Construyamos juntos", "Let's build together")}</h2>`
);

content = content.replace(
  />\s*Conócenos y descubre cómo estamos transformando el paisaje residencial de La Paz.\s*<\/p>/,
  `>{l("Conócenos y descubre cómo estamos transformando el paisaje residencial de La Paz.", "Get to know us and discover how we are transforming the residential landscape of La Paz.")}</p>`
);

content = content.replace(
  />\s*Ver proyectos\s*<ArrowRight/,
  `>{l("Ver proyectos", "View projects")}\n              <ArrowRight`
);

fs.writeFileSync('src/app/nosotros/page.tsx', content);
console.log('Translated nosotros/page.tsx');
