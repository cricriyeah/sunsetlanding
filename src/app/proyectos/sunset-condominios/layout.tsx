import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sunset Condominios',
  description: 'Departamentos de ultra lujo frente al mar. Amenidades de primer nivel como rooftop pool y gimnasio en La Paz.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
