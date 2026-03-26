import Link from 'next/link';

const HIGHLIGHTS = [
  { label: 'Years Serving Northern Virginia', value: '10+' },
  { label: 'Customer Satisfaction Rating', value: '4.9★' },
  { label: 'Service Availability', value: '24/7' },
  { label: 'Service Areas in Northern VA', value: '15+' },
];

const QUALITIES = [
  'Licensed & insured HVAC technician',
  'Expert knowledge in all major brands',
  'Honest diagnostics — no upsells',
  'Responsive even outside business hours',
  'Fair, transparent pricing always',
  'Meticulous, clean workmanship',
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-primary rounded-xl p-6 flex flex-col gap-2"
                >
                  <span className="font-bebas text-4xl text-accent-cool leading-none">
                    {value}
                  </span>
                  <span className="text-slate-400 text-xs font-outfit font-medium leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accent card */}
            <div className="mt-4 bg-accent rounded-xl p-5 flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <QuoteIcon />
              </div>
              <blockquote className="text-white text-sm font-outfit italic leading-relaxed">
                &ldquo;He was willing to talk to me even though he was already home
                with his family.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="section-label mb-3">About Eric</p>
            <h2
              id="about-heading"
              className="section-title text-3xl sm:text-4xl lg:text-5xl mb-6"
            >
              Your Neighbor.
              <br />
              <span className="text-secondary">Your HVAC Expert.</span>
            </h2>

            <div className="space-y-4 text-slate-600 font-outfit text-base leading-relaxed mb-8">
              <p>
                Eric Aviles founded Aviles Heating &amp; Air Conditioning on a simple
                principle: every homeowner in Northern Virginia deserves honest, expert
                HVAC service at a price that&apos;s fair.
              </p>
              <p>
                With deep hands-on experience and a genuine commitment to his customers,
                Eric has earned a 4.9-star reputation built entirely on word of mouth and
                verified reviews. He shows up when he says he will—and he gets the job
                done right the first time.
              </p>
              <p>
                Whether you need an emergency repair at midnight or a scheduled
                maintenance visit, Eric brings the same level of care, knowledge, and
                professionalism to every call.
              </p>
            </div>

            {/* Qualities checklist */}
            <ul className="space-y-2.5 mb-8" aria-label="Our commitments">
              {QUALITIES.map((quality) => (
                <li key={quality} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-slate-600 font-outfit text-sm">{quality}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-secondary">
              More About Aviles H&amp;A
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span
      className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#16a34a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function QuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
