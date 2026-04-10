import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Conoce a nuestro equipo experto. El estándar americano arraigado en el espíritu de la Baja Sur.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
