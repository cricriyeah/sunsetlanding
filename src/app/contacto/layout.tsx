import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con nuestros asesores inmobiliarios para iniciar tu próximo proyecto de vida en Baja California Sur.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
