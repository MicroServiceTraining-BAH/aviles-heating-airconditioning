import type { Metadata } from 'next';
import Link from 'next/link';

import EmergencyCTA from '@/components/EmergencyCTA';
import ServicesSection from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: 'HVAC Services | AC Repair, Heating, Installation — Herndon VA',
  description:
    'Full-spectrum HVAC services in Herndon & Northern Virginia. AC repair, heating repair, installation, maintenance, emergency service & more. Call (571) 665-8027.',
};

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Call or Request Online',
    description:
      'Reach out by phone or fill out our contact form. We respond quickly—often within the hour.',
  },
  {
    number: '02',
    title: 'Thorough Diagnosis',
    description:
      'Eric arrives on time, inspects your system completely, and explains exactly what he finds—no jargon.',
  },
  {
    number: '03',
    title: 'Upfront Quote',
    description:
      'You receive a clear, fair price before any work begins. No hidden fees. No surprise charges.',
  },
  {
    number: '04',
    title: 'Expert Repair or Install',
    description:
      'Work is completed efficiently with quality parts. We clean up completely before we leave.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-primary pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" aria-hidden="true" />
        <div className="container-xl relative z-10">
          <p className="section-label mb-3">What We Offer</p>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white leading-none mb-4">
            HVAC SERVICES IN
            <br />
            <span className="text-accent-cool">NORTHERN VIRGINIA</span>
          </h1>
          <p className="text-slate-300 font-outfit text-lg max-w-2xl leading-relaxed mb-8">
            From emergency AC repair to full system installations, we handle every aspect
            of residential HVAC in Herndon, Reston, Sterling, and all of Northern Virginia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+15716658027" className="btn-primary">
              <PhoneIcon />
              Call (571) 665-8027
            </a>
            <Link href="/contact" className="btn-outline">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* All services */}
      <ServicesSection />

      {/* Process */}
      <section className="section-padding bg-white" aria-labelledby="process-heading">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-label mb-3">How It Works</p>
            <h2 id="process-heading" className="section-title text-3xl sm:text-4xl">
              Simple. Fast. <span className="text-secondary">Reliable.</span>
            </h2>
            <p className="text-slate-500 font-outfit text-base max-w-xl mx-auto mt-3">
              From your first call to a fully working system — here&apos;s what to expect when
              you work with Aviles Heating &amp; Air Conditioning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ number, title, description }) => (
              <div key={number} className="relative">
                <div className="card p-6">
                  <span className="font-bebas text-6xl text-slate-100 leading-none block mb-3">
                    {number}
                  </span>
                  <h3 className="font-outfit font-bold text-primary text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm font-outfit leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area CTA */}
      <section className="section-padding bg-bg-light" aria-labelledby="service-area-heading">
        <div className="container-xl">
          <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-100" aria-hidden="true" />
            <div className="relative z-10">
              <p className="section-label mb-3">Service Area</p>
              <h2 id="service-area-heading" className="font-outfit font-bold text-white text-3xl sm:text-4xl mb-4">
                Serving Herndon & All of <span className="text-accent-cool">Northern Virginia</span>
              </h2>
              <p className="text-slate-400 font-outfit text-base max-w-xl mx-auto mb-8">
                Herndon · Reston · Sterling · Ashburn · Chantilly · Fairfax · McLean · Vienna
                · Falls Church · Great Falls · Dulles · Centreville · and more
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+15716658027" className="btn-primary">
                  <PhoneIcon />
                  Call Now — 24/7
                </a>
                <Link href="/contact" className="btn-outline">
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
