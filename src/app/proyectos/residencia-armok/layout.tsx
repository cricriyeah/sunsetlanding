import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residencia Armok',
  description: 'Residencia Armok: exclusividad, diseño y tecnología al nivel del estándar americano en La Paz.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
