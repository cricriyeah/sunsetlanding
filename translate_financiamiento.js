const fs = require('fs');
let content = fs.readFileSync('src/app/financiamiento/page.tsx', 'utf8');

// 1. Hook
content = content.replace(
  'import { CinematicHeading } from "@/components/ui/CinematicHeading";',
  'import { CinematicHeading } from "@/components/ui/CinematicHeading";\nimport { useLanguage } from "@/context/LanguageContext";'
);

content = content.replace(
  'export default function FinanciamientoPage() {',
  'export default function FinanciamientoPage() {\n  const { l } = useLanguage();'
);

// Translation replacements
content = content.replace(
  /text="¿Los bancos cobran demasiado interés?"/,
  `text={l("¿Los bancos cobran demasiado interés?", "Do banks charge too much interest?")}`
);

content = content.replace(
  />\s*Programa Residencial\s*<\/motion.span>/,
  `>{l("Programa Residencial", "Residential Program")}</motion.span>`
);

content = content.replace(
  /text="Financiamiento"/,
  `text={l("Financiamiento", "Financing")}`
);

content = content.replace(
  />\s*Construye tu hogar ideal en La Baja con nuestro Programa 40\/60. Tú pones el terreno, nosotros financiamos tu futuro.\s*<\/motion.p>/,
  `>{l("Construye tu hogar ideal en La Baja con nuestro Programa 40/60. Tú pones el terreno, nosotros financiamos tu futuro.", "Build your ideal home in La Baja with our 40/60 Program. You provide the land, we finance your future.")}</motion.p>`
);

content = content.replace(
  />El Modelo<\/span>/,
  `>{l("El Modelo", "The Model")}</span>`
);

content = content.replace(
  />\s*Esquema de Inversión 40\/60\s*<\/h2>/,
  `>{l("Esquema de Inversión 40/60", "40/60 Investment Scheme")}</h2>`
);

content = content.replace(
  />\s*Ofrecemos nuestro Programa 40\/60, en el cual el cliente aporta su terreno libre de gravamen y nosotros financiamos el 60% del costo de construcción.\s*<\/p>/,
  `>{l("Ofrecemos nuestro Programa 40/60, en el cual el cliente aporta su terreno libre de gravamen y nosotros financiamos el 60% del costo de construcción.", "We offer our 40/60 Program, in which the client provides their lien-free land and we finance 60% of the construction cost.")}</p>`
);

content = content.replace(
  />Tasa Preferencial<\/h4>/,
  `>{l("Tasa Preferencial", "Preferential Rate")}</h4>`
);

content = content.replace(
  />7\.99% anual fija, brindando estabilidad a tu inversión\.<\/p>/,
  `>{l("7.99% anual fija, brindando estabilidad a tu inversión.", "7.99% fixed annual rate, providing stability to your investment.")}</p>`
);

content = content.replace(
  />Plazo Flexible<\/h4>/,
  `>{l("Plazo Flexible", "Flexible Term")}</h4>`
);

content = content.replace(
  />Hasta 30 años de plazo máximo para liquidar el financiamiento\.<\/p>/,
  `>{l("Hasta 30 años de plazo máximo para liquidar el financiamiento.", "Up to 30 years maximum term to settle the financing.")}</p>`
);

content = content.replace(
  />Tú aportas<\/p>/,
  `>{l("Tú aportas", "You contribute")}</p>`
);

content = content.replace(
  />Terreno y aportación inicial<\/p>/,
  `>{l("Terreno y aportación inicial", "Land and initial contribution")}</p>`
);

content = content.replace(
  />Financiamos<\/p>/,
  `>{l("Financiamos", "We finance")}</p>`
);

content = content.replace(
  />Del costo total de obra<\/p>/,
  `>{l("Del costo total de obra", "Of total construction cost")}</p>`
);

content = content.replace(
  />El Camino<\/span>/,
  `>{l("El Camino", "The Path")}</span>`
);

content = content.replace(
  />\s*Pasos del Proceso\s*<\/h2>/,
  `>{l("Pasos del Proceso", "Process Steps")}</h2>`
);

content = content.replace(
  /Entrevista Inicial\s*<\/h3>/,
  `{l("Entrevista Inicial", "Initial Interview")}\n                </h3>`
);

content = content.replace(
  />\s*Reunión presencial o vía Zoom para definir las especificaciones de la obra\.\s*<\/p>/,
  `>{l("Reunión presencial o vía Zoom para definir las especificaciones de la obra.", "In-person or Zoom meeting to define the project specifications.")}</p>`
);

content = content.replace(
  />Fundamental:<\/p>/,
  `>{l("Fundamental:", "Essential:")}</p>`
);

content = content.replace(
  />\s*En caso de ser una pareja casada, es fundamental que ambos asistan para asegurar el consenso en el diseño y visión del hogar\.\s*<\/p>/,
  `>{l("En caso de ser una pareja casada, es fundamental que ambos asistan para asegurar el consenso en el diseño y visión del hogar.", "In case of a married couple, it is essential that both attend to ensure consensus on the design and vision of the home.")}</p>`
);

content = content.replace(
  /Cotización y Plazos\s*<\/h3>/,
  `{l("Cotización y Plazos", "Quote and Deadlines")}\n                </h3>`
);

content = content.replace(
  />\s*Finalizado el diseño, entregaremos una propuesta integral que incluye:\s*<\/p>/,
  `>{l("Finalizado el diseño, entregaremos una propuesta integral que incluye:", "Once the design is finished, we will deliver a comprehensive proposal that includes:")}</p>`
);

content = content.replace(
  />• Cotización detallada de la obra<\/li>/,
  `>• {l("Cotización detallada de la obra", "Detailed construction quote")}</li>`
);

content = content.replace(
  />• Desglose financiero completo<\/li>/,
  `>• {l("Desglose financiero completo", "Complete financial breakdown")}</li>`
);

content = content.replace(
  />• Cronograma detallado de ejecución<\/li>/,
  `>• {l("Cronograma detallado de ejecución", "Detailed execution schedule")}</li>`
);

content = content.replace(
  />Transparencia<\/span>/,
  `>{l("Transparencia", "Transparency")}</span>`
);

content = content.replace(
  />\s*Esquemas de Pagos\s*<\/h2>/,
  `>{l("Esquemas de Pagos", "Payment Schemes")}</h2>`
);

content = content.replace(
  /Con Financiamiento\s*<HandCoins/,
  `{l("Con Financiamiento", "With Financing")}\n                    <HandCoins`
);

content = content.replace(
  />\s*Al firmar contrato, se deposita el 30% de tu aportación inicial \(del 40% correspondiente\). El resto se cubre en cuotas mensuales durante la construcción.\s*<\/p>/,
  `>{l("Al firmar contrato, se deposita el 30% de tu aportación inicial (del 40% correspondiente). El resto se cubre en cuotas mensuales durante la construcción.", "Upon signing the contract, 30% of your initial contribution (of the corresponding 40%) is deposited. The rest is covered in monthly installments during construction.")}</p>`
);

content = content.replace(
  /Sin Financiamiento\s*<X/,
  `{l("Sin Financiamiento", "Without Financing")}\n                    <X`
);

content = content.replace(
  />\s*El depósito inicial es del 25% del costo total de la obra, con pagos mensuales subsecuentes conforme al catálogo de conceptos.\s*<\/p>/,
  `>{l("El depósito inicial es del 25% del costo total de la obra, con pagos mensuales subsecuentes conforme al catálogo de conceptos.", "The initial deposit is 25% of the total cost of the work, with subsequent monthly payments according to the concept catalog.")}</p>`
);

content = content.replace(
  /Tiempos de Entrega\s*<\/h3>/,
  `{l("Tiempos de Entrega", "Delivery Times")}\n              </h3>`
);

content = content.replace(
  />Inicio de Obra<\/h5>/,
  `>{l("Inicio de Obra", "Start of Construction")}</h5>`
);

content = content.replace(
  />Generalmente 30 días después de la firma del contrato\.<\/p>/,
  `>{l("Generalmente 30 días después de la firma del contrato.", "Generally 30 days after signing the contract.")}</p>`
);

content = content.replace(
  />Ejecución<\/h5>/,
  `>{l("Ejecución", "Execution")}</h5>`
);

content = content.replace(
  />El tiempo estimado de construcción es de 8 a 12 meses\.<\/p>/,
  `>{l("El tiempo estimado de construcción es de 8 a 12 meses.", "The estimated construction time is 8 to 12 months.")}</p>`
);

content = content.replace(
  />Entrega Final<\/h5>/,
  `>{l("Entrega Final", "Final Delivery")}</h5>`
);

content = content.replace(
  />Se realiza 30 días posteriores al pago final\.<\/p>/,
  `>{l("Se realiza 30 días posteriores al pago final.", "In-person delivery 30 days after final payment.")}</p>`
);

content = content.replace(
  />\s*¿Listo para dar el primer paso\?\s*<\/h2>/,
  `>{l("¿Listo para dar el primer paso?", "Ready to take the first step?")}</h2>`
);

content = content.replace(
  />\s*Agenda tu entrevista inicial para definir los alcances de tu proyecto y conocer nuestros planes flexibles\.\s*<\/p>/,
  `>{l("Agenda tu entrevista inicial para definir los alcances de tu proyecto y conocer nuestros planes flexibles.", "Schedule your initial interview to define the scope of your project and learn about our flexible plans.")}</p>`
);

content = content.replace(
  /Agendar Entrevista Inicial\s*<ArrowRight/,
  `{l("Agendar Entrevista Inicial", "Schedule Initial Interview")}\n              <ArrowRight`
);

fs.writeFileSync('src/app/financiamiento/page.tsx', content);
console.log('Translated financiamiento/page.tsx');
