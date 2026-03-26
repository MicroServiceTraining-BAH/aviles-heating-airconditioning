import type { Metadata } from 'next';

import AboutSection from '@/components/AboutSection';
import EmergencyCTA from '@/components/EmergencyCTA';
import Hero from '@/components/Hero';
import LocationSection from '@/components/LocationSection';
import ServicesSection from '@/components/ServicesSection';
import Testimonials from '@/components/Testimonials';
import TrustBar from '@/components/TrustBar';

export const metadata: Metadata = {
  title: 'Aviles Heating & Air Conditioning | 24/7 HVAC Service Herndon VA',
  description:
    'Expert HVAC repair, installation & maintenance in Herndon, VA. 4.9-star rated. 24/7 emergency service. Serving Herndon, Reston, Sterling & Northern Virginia. Call (571) 665-8027.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection preview />
      <AboutSection />
      <Testimonials />
      <EmergencyCTA />
      <LocationSection />
    </>
  );
}
