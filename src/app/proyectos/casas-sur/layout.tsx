import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casas Sur',
  description: 'Conoce Casas Sur, el modelo de residencia esencial, balance y lujo con amenidades smart en un entorno inigualable.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
