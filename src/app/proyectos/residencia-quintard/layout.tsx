import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residencia Quintard',
  description: 'Residencia Quintard: Descubre la sofisticación, diseño moderno y tecnología integrada en un proyecto residencial único.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
