import type { Metadata } from 'next';
import { Bebas_Neue, Outfit } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import StickyCallButton from '@/components/StickyCallButton';

import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Aviles Heating & Air Conditioning | HVAC Service Herndon VA',
    template: '%s | Aviles Heating & Air Conditioning',
  },
  description:
    'Expert HVAC repair, installation & maintenance in Herndon, VA. 24/7 emergency service available. 4.9-star rated. Serving Herndon, Reston, Sterling & Northern Virginia. Call (571) 665-8027.',
  keywords: [
    'HVAC repair Herndon VA',
    'AC repair near me',
    '24/7 HVAC service Northern Virginia',
    'heating repair Herndon',
    'air conditioning installation Herndon',
    'HVAC maintenance Reston VA',
    'emergency HVAC service',
    'AC installation Sterling VA',
  ],
  authors: [{ name: 'Aviles Heating & Air Conditioning' }],
  creator: 'Aviles Heating & Air Conditioning',
  metadataBase: new URL('https://avilesheatingandair.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://avilesheatingandair.com',
    siteName: 'Aviles Heating & Air Conditioning',
    title: 'Aviles Heating & Air Conditioning | 24/7 HVAC Service Herndon VA',
    description:
      'Fast, reliable HVAC repair, installation & maintenance in Northern Virginia. 4.9★ rated. Call (571) 665-8027 anytime.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${outfit.variable}`}>
      <body className="font-outfit bg-bg-light text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
