import type { Metadata } from 'next';

import ContactForm from '@/components/ContactForm';
import EmergencyCTA from '@/components/EmergencyCTA';
import LocationSection from '@/components/LocationSection';

export const metadata: Metadata = {
  title: 'Contact | Request HVAC Service in Herndon VA',
  description:
    'Contact Aviles Heating & Air Conditioning for HVAC repair, installation & maintenance in Herndon, VA. Call (571) 665-8027 or request service online. Available 24/7.',
};

const CONTACT_CARDS = [
  {
    label: 'Call or Text',
    value: '(571) 665-8027',
    detail: 'Available 24/7 — including nights, weekends & holidays',
    href: 'tel:+15716658027',
    icon: <PhoneIcon />,
    accent: 'border-accent',
    cta: 'Call Now',
  },
  {
    label: 'Our Location',
    value: '13000 Elm Tree Dr',
    detail: 'Herndon, VA 20171',
    href: 'https://maps.google.com/?q=13000+Elm+Tree+Dr+Herndon+VA+20171',
    icon: <MapPinIcon />,
    accent: 'border-secondary',
    cta: 'Get Directions',
  },
  {
    label: 'Hours',
    value: 'Open 24 Hours',
    detail: '7 Days a Week · Holidays Included',
    href: null,
    icon: <ClockIcon />,
    accent: 'border-green-500',
    cta: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-primary pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" aria-hidden="true" />
        <div className="container-xl relative z-10">
          <p className="section-label mb-3">Get In Touch</p>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white leading-none mb-4">
            REQUEST HVAC
            <br />
            <span className="text-accent-cool">SERVICE TODAY</span>
          </h1>
          <p className="text-slate-300 font-outfit text-lg max-w-xl leading-relaxed">
            For fastest response, call directly. Or fill out the form and Eric will
            get back to you quickly—usually within the hour.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-12" aria-label="Contact options">
        <div className="container-xl">
          <div className="grid sm:grid-cols-3 gap-5">
            {CONTACT_CARDS.map(({ label, value, detail, href, icon, accent, cta }) => (
              <div
                key={label}
                className={`card p-6 border-t-4 ${accent}`}
              >
                <div className="text-secondary mb-3" aria-hidden="true">{icon}</div>
                <p className="text-xs font-outfit font-semibold text-slate-400 uppercase tracking-wide mb-1">
                  {label}
                </p>
                <p className="font-outfit font-bold text-primary text-xl mb-0.5">{value}</p>
                <p className="text-slate-500 text-sm font-outfit mb-4">{detail}</p>
                {cta && href && (
                  <a
                    href={href}
                    className="text-secondary font-outfit font-semibold text-sm hover:text-secondary/80 inline-flex items-center gap-1 transition-colors duration-150"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {cta} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section-padding bg-bg-light" aria-labelledby="contact-form-heading">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <h2
                id="contact-form-heading"
                className="section-title text-2xl sm:text-3xl mb-2"
              >
                Send a Service Request
              </h2>
              <p className="text-slate-500 font-outfit text-sm mb-6">
                Fill out the form and Eric will respond promptly. For immediate emergencies,
                call{' '}
                <a href="tel:+15716658027" className="text-accent font-semibold">
                  (571) 665-8027
                </a>
                .
              </p>
              <ContactForm />
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="card p-6">
                <h3 className="font-outfit font-bold text-primary text-lg mb-3">
                  Why Call Instead?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Get Eric directly — no call centers',
                    'Immediate response for emergencies',
                    'Get an estimate over the phone',
                    'Same-day scheduling available',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5"
                        aria-hidden="true"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-slate-600 text-sm font-outfit">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+15716658027"
                  className="btn-primary w-full justify-center mt-5"
                  aria-label="Call Aviles Heating & Air Conditioning"
                >
                  <PhoneIcon />
                  (571) 665-8027
                </a>
              </div>

              <div className="bg-primary rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="inline-block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-white font-outfit font-semibold text-sm">
                      Emergency? Call now.
                    </p>
                    <p className="text-slate-400 text-xs font-outfit mt-0.5">
                      Eric is available 24 hours a day, 7 days a week—including all
                      holidays. No after-hours surcharge.
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+15716658027"
                  className="block text-accent-cool font-outfit font-bold text-xl hover:text-white transition-colors duration-150"
                  aria-label="Emergency call at (571) 665-8027"
                >
                  (571) 665-8027
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
      <EmergencyCTA />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
