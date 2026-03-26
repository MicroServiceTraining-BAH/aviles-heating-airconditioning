import type { Metadata } from 'next';
import Link from 'next/link';

import EmergencyCTA from '@/components/EmergencyCTA';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery | HVAC Work in Herndon & Northern Virginia',
  description:
    'See examples of HVAC installations, repairs, and maintenance completed by Aviles Heating & Air Conditioning in Herndon, Reston, Sterling & Northern Virginia.',
};

export default function GalleryPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-primary pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" aria-hidden="true" />
        <div className="container-xl relative z-10">
          <p className="section-label mb-3">Our Work</p>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white leading-none mb-4">
            HVAC WORK WE&apos;RE
            <br />
            <span className="text-accent-cool">PROUD OF</span>
          </h1>
          <p className="text-slate-300 font-outfit text-lg max-w-xl leading-relaxed">
            From full system installations to targeted repairs, every job gets the same attention to
            detail and commitment to quality.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-bg-light" aria-labelledby="gallery-heading">
        <div className="container-xl">
          <div className="text-center mb-10">
            <h2 id="gallery-heading" className="section-title text-3xl sm:text-4xl mb-4">
              Recent Projects
            </h2>
          </div>
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-xl text-center">
          <h2 className="section-title text-3xl sm:text-4xl mb-4">Need HVAC Work Done Right?</h2>
          <p className="text-slate-500 font-outfit text-base mb-8 max-w-lg mx-auto">
            Call Eric or request a service online. Every job gets the same quality you see above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15716658027" className="btn-primary">
              <PhoneIcon />
              Call (571) 665-8027
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Service
            </Link>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
