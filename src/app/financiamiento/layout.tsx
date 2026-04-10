import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financiamiento',
  description: 'Opciones de financiamiento flexibles y asesoría para adquirir tu propiedad ideal en La Paz y sus alrededores.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
