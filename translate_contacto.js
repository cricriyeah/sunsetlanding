const fs = require('fs');
let content = fs.readFileSync('src/app/contacto/page.tsx', 'utf8');

// 1. Add hook
content = content.replace(
  'import { CinematicHeading } from "@/components/ui/CinematicHeading";',
  'import { CinematicHeading } from "@/components/ui/CinematicHeading";\nimport { useLanguage } from "@/context/LanguageContext";'
);

content = content.replace(
  'export default function ContactoPage() {',
  'export default function ContactoPage() {\n  const { l } = useLanguage();'
);

// Hero
content = content.replace(
  />\s*Comienza tu historia\s*<\/motion.span>/,
  `>{l("Comienza tu historia", "Start your story")}</motion.span>`
);

content = content.replace(
  /text="Hablemos de tu futuro"/,
  `text={l("Hablemos de tu futuro", "Let's talk about your future")}`
);

content = content.replace(
  />\s*Estamos listos para materializar tu visión. Agenda una llamada privada o visítanos\s*en nuestras oficinas en La Paz.\s*<\/motion.p>/,
  `>{l("Estamos listos para materializar tu visión. Agenda una llamada privada o visítanos en nuestras oficinas en La Paz.", "We are ready to materialize your vision. Schedule a private call or visit us at our offices in La Paz.")}</motion.p>`
);

// Address
content = content.replace(
  />\s*Nuestras Oficinas\s*<\/h3>/,
  `>{l("Nuestras Oficinas", "Our Offices")}</h3>`
);

content = content.replace(
  />Dirección<\/p>/,
  `>{l("Dirección", "Address")}</p>`
);

content = content.replace(
  />Teléfono<\/p>/g,
  `>{l("Teléfono", "Phone")}</p>`
);

content = content.replace(
  />Correo<\/p>/,
  `>{l("Correo", "Email")}</p>`
);

content = content.replace(
  />\s*Síguenos\s*<\/h3>/,
  `>{l("Síguenos", "Follow us")}</h3>`
);

// Status
content = content.replace(
  />\s*¡Mensaje Enviado!\s*<\/h4>/,
  `>{l("¡Mensaje Enviado!", "Message Sent!")}</h4>`
);

content = content.replace(
  />\s*Gracias por tu interés en Sunset. Nos pondremos en contacto contigo lo antes posible.\s*<\/p>/,
  `>{l("Gracias por tu interés en Sunset. Nos pondremos en contacto contigo lo antes posible.", "Thank you for your interest in Sunset. We will contact you as soon as possible.")}</p>`
);

content = content.replace(
  />\s*Enviar otro mensaje\s*<\/Button>/,
  `>{l("Enviar otro mensaje", "Send another message")}</Button>`
);

// Form
content = content.replace(
  />Nombre<\/label>/,
  `>{l("Nombre", "Name")}</label>`
);

content = content.replace(
  /placeholder="Escribe tu nombre"/,
  `placeholder={l("Escribe tu nombre", "Write your name")}`
);

content = content.replace(
  />Proyecto de interés<\/label>/,
  `>{l("Proyecto de interés", "Project of interest")}</label>`
);

content = content.replace(
  />Mensaje<\/label>/,
  `>{l("Mensaje", "Message")}</label>`
);

content = content.replace(
  /placeholder="Cuéntanos sobre tu visión..."/,
  `placeholder={l("Cuéntanos sobre tu visión...", "Tell us about your vision...")}`
);

content = content.replace(
  /\{errorMessage \|\| "Hubo un error al enviar el mensaje\. Reintenta\."\}/,
  `{errorMessage || l("Hubo un error al enviar el mensaje. Reintenta.", "There was an error sending the message. Try again.")}`
);

content = content.replace(
  /\{status === "loading" \? "Enviando\.\.\." : "Enviar Mensaje"\}/,
  `{status === "loading" ? l("Enviando...", "Sending...") : l("Enviar Mensaje", "Send Message")}`
);

content = content.replace(
  />\s*Al enviar, aceptas nuestra política de privacidad y tratamiento de datos.\s*<\/p>/,
  `>{l("Al enviar, aceptas nuestra política de privacidad y tratamiento de datos.", "By sending, you accept our privacy policy and data processing.")}</p>`
);

// Map
content = content.replace(
  />\s*Ubicación\s*<\/motion.span>/,
  `>{l("Ubicación", "Location")}</motion.span>`
);

content = content.replace(
  />\s*Visítanos en nuestras oficinas\s*<\/motion.h3>/,
  `>{l("Visítanos en nuestras oficinas", "Visit us at our offices")}</motion.h3>`
);

fs.writeFileSync('src/app/contacto/page.tsx', content);
console.log('Translated contacto/page.tsx');
