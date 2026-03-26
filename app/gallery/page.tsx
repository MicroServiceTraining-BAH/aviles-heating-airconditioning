import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata: Metadata = {
  title: 'Gallery | HVAC Work in Herndon & Northern Virginia',
  description:
    'See examples of HVAC installations, repairs, and maintenance completed by Aviles Heating & Air Conditioning in Herndon, Reston, Sterling & Northern Virginia.',
};

const GALLERY_ITEMS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    alt: 'HVAC technician performing system inspection and maintenance',
    caption: 'System Inspection',
    category: 'Maintenance',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Outdoor air conditioning condensing unit installation',
    caption: 'AC Unit Installation',
    category: 'Installation',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    alt: 'HVAC professional working on residential heating system',
    caption: 'Heating System Repair',
    category: 'Repair',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    alt: 'Smart thermostat installation in modern home',
    caption: 'Thermostat Upgrade',
    category: 'Installation',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b511?w=800&q=80',
    alt: 'HVAC ductwork and airflow system in residential property',
    caption: 'Ductwork & Airflow',
    category: 'Installation',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80',
    alt: 'High-efficiency HVAC system installation completed',
    caption: 'High-Efficiency System',
    category: 'Installation',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    alt: 'Modern programmable thermostat with energy-saving settings',
    caption: 'Smart Thermostat Setup',
    category: 'Installation',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1596003906949-67221c37965c?w=800&q=80',
    alt: 'HVAC diagnostic equipment and system performance testing',
    caption: 'System Diagnostics',
    category: 'Diagnostics',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1573207079032-d57cef0ad0e2?w=800&q=80',
    alt: 'Residential HVAC maintenance and seasonal tune-up service',
    caption: 'Seasonal Tune-Up',
    category: 'Maintenance',
  },
];

const CATEGORIES = ['All', 'Installation', 'Repair', 'Maintenance', 'Diagnostics'];

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
            {/* Category pills */}
            <div
              className="flex flex-wrap justify-center gap-2"
              role="list"
              aria-label="Filter categories"
            >
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  role="listitem"
                  className={`inline-flex px-4 py-1.5 rounded-full text-sm font-outfit font-medium ${
                    cat === 'All'
                      ? 'bg-secondary text-white'
                      : 'bg-white text-slate-500 border border-slate-200'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GALLERY_ITEMS.map(({ id, src, alt, caption, category }) => (
              <article key={id} className="card overflow-hidden group">
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-outfit font-semibold text-primary text-sm">{caption}</h3>
                  </div>
                  <span className="inline-flex px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-outfit font-medium rounded-full">
                    {category}
                  </span>
                </div>
              </article>
            ))}
          </div>
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
