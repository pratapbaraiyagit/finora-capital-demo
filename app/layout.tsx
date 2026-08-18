import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { ScrollProgress } from '@/components/site/scroll-progress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://finoracapital.demo'),
  title: {
    default: 'Finora Capital — Build wealth with clarity.',
    template: '%s · Finora Capital',
  },
  description:
    'Personalized financial planning and wealth management solutions designed to help you make more confident financial decisions.',
  keywords: [
    'financial planning',
    'wealth management',
    'investment planning',
    'retirement planning',
    'Finora Capital',
  ],
  openGraph: {
    title: 'Finora Capital — Build wealth with clarity.',
    description:
      'Personalized financial planning and wealth management solutions designed to help you make more confident financial decisions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
