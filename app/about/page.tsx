import type { Metadata } from 'next';
import Link from 'next/link';

import EmergencyCTA from '@/components/EmergencyCTA';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'About Eric Aviles | Trusted HVAC Technician in Herndon VA',
  description:
    'Meet Eric Aviles — experienced HVAC technician serving Herndon, Reston, Sterling & Northern Virginia. 4.9-star rated, 24/7 available, honest pricing. Call (571) 665-8027.',
};

const VALUES = [
  {
    title: 'Honesty First',
    description:
      "We'll never recommend a repair or part you don't need. You get a straight diagnosis and a fair quote—every time.",
    icon: <ShieldIcon />,
    color: 'text-green-600',
    bg: 'bg-green-50 border-green-200',
  },
  {
    title: 'Expert Knowledge',
    description:
      'Deep expertise across all major HVAC brands and systems. Eric diagnoses accurately and fixes it right—no guesswork.',
    icon: <StarIcon />,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50 border-yellow-200',
  },
  {
    title: 'Always Available',
    description:
      "HVAC emergencies happen at the worst times. Eric is reachable 24/7 because he knows your comfort can't wait.",
    icon: <ClockIcon />,
    color: 'text-accent',
    bg: 'bg-red-50 border-red-200',
  },
  {
    title: 'Quality Workmanship',
    description:
      'From small repairs to full system installs, every job is completed with precision and care. We clean up and make sure everything works before we leave.',
    icon: <WrenchIcon />,
    color: 'text-secondary',
    bg: 'bg-blue-50 border-blue-200',
  },
];

const MILESTONES = [
  { year: '2014', event: 'Aviles H&A founded in Herndon, VA' },
  { year: '2016', event: 'First 100 five-star Google reviews' },
  { year: '2019', event: 'Expanded service coverage to all of Northern Virginia' },
  { year: '2022', event: '4.9★ rating maintained across 200+ verified reviews' },
  { year: '2024', event: 'Launched 24/7 emergency line — no extra charge' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-primary pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" aria-hidden="true" />
        <div className="container-xl relative z-10">
          <p className="section-label mb-3">Our Story</p>
          <h1 className="font-bebas text-5xl sm:text-7xl text-white leading-none mb-4">
            BUILT ON TRUST.
            <br />
            <span className="text-accent-cool">DRIVEN BY RESULTS.</span>
          </h1>
          <p className="text-slate-300 font-outfit text-lg max-w-2xl leading-relaxed">
            Aviles Heating &amp; Air Conditioning was built from the ground up on honest service,
            expert workmanship, and a genuine commitment to Northern Virginia homeowners.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label mb-3">About Eric</p>
              <h2 className="section-title text-3xl sm:text-4xl mb-6">
                The Person Behind <span className="text-secondary">Every Call</span>
              </h2>
              <div className="space-y-4 text-slate-600 font-outfit text-base leading-relaxed">
                <p>
                  Eric Aviles is a licensed, insured HVAC technician with over a decade of hands-on
                  experience serving homeowners in Herndon and across Northern Virginia. He founded
                  Aviles Heating &amp; Air Conditioning with one goal: to provide the kind of
                  honest, expert service that he&apos;d want for his own family.
                </p>
                <p>
                  Unlike large HVAC companies where you never know who&apos;s showing up, when you
                  call Aviles, you get Eric. He diagnoses your system accurately, explains
                  what&apos;s wrong in plain language, and gives you a fair quote before any work
                  begins.
                </p>
                <p>
                  His customers consistently praise not just his technical skill, but his
                  character—the fact that he&apos;ll pick up the phone and walk you through a
                  problem even when he&apos;s off the clock. That level of dedication is what built
                  a 4.9-star reputation entirely on word of mouth.
                </p>
                <p>
                  Whether it&apos;s a routine tune-up or a midnight emergency, Eric shows up
                  prepared, works efficiently, and leaves your home clean. That&apos;s the Aviles
                  promise.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Testimonial highlight */}
              <div className="bg-primary rounded-xl p-8">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FBBF24"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white text-lg font-outfit italic leading-relaxed mb-4">
                  &ldquo;The service, quality, professionalism and timeliness were
                  outstanding.&rdquo;
                </blockquote>
                <p className="text-accent-cool text-sm font-outfit font-medium">
                  — Herndon, VA Homeowner · Google Review
                </p>
              </div>

              <div className="bg-secondary rounded-xl p-8">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FBBF24"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white text-lg font-outfit italic leading-relaxed mb-4">
                  &ldquo;His price was fair and his work and product knowledge was excellent.&rdquo;
                </blockquote>
                <p className="text-blue-200 text-sm font-outfit font-medium">
                  — Reston, VA Customer · Google Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-light">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Our Values</p>
            <h2 className="section-title text-3xl sm:text-4xl">What Sets Us Apart</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ title, description, icon, color, bg }) => (
              <div key={title} className="card p-6 flex flex-col gap-4">
                <div className={`inline-flex p-3 rounded-lg ${bg} border self-start`}>
                  <div className={color} aria-hidden="true">
                    {icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-primary text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm font-outfit leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Our Journey</p>
              <h2 className="section-title text-3xl sm:text-4xl">
                A Decade of <span className="text-secondary">Trusted Service</span>
              </h2>
            </div>
            <ol
              className="relative border-l-2 border-slate-200 space-y-8 pl-8"
              aria-label="Company milestones"
            >
              {MILESTONES.map(({ year, event }) => (
                <li key={year} className="relative">
                  <span
                    className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-white shadow"
                    aria-hidden="true"
                  />
                  <p className="font-bebas text-secondary text-xl leading-none mb-1">{year}</p>
                  <p className="text-slate-600 font-outfit text-base">{event}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Testimonials />
      <EmergencyCTA />

      <section className="section-padding bg-bg-light">
        <div className="container-xl text-center">
          <h2 className="section-title text-3xl sm:text-4xl mb-4">Ready to Work with Eric?</h2>
          <p className="text-slate-500 font-outfit text-base mb-8 max-w-lg mx-auto">
            Whether you need an emergency repair or want to schedule a maintenance visit, Eric is
            ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15716658027" className="btn-primary">
              <PhoneIcon />
              Call (571) 665-8027
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Service Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
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
