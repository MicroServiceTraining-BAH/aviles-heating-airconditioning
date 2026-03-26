import Link from 'next/link';

const PHONE_HREF = 'tel:+15716658027';
const PHONE = '(571) 665-8027';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
      aria-label="Hero section"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-100" aria-hidden="true" />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(135deg, transparent 40%, rgba(56,189,248,0.15) 100%)',
        }}
      />

      {/* Red accent stripe */}
      <div
        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent via-accent/60 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-xl relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-4xl">
          {/* Pre-headline badge */}
          <div className="hero-animate inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-slow" aria-hidden="true" />
            <span className="text-accent text-xs font-outfit font-semibold tracking-[0.15em] uppercase">
              24/7 Emergency Service Available
            </span>
          </div>

          {/* Main headline */}
          <h1 className="hero-animate-delay-1 font-bebas text-6xl sm:text-8xl lg:text-[7rem] text-white leading-none tracking-wide mb-4">
            HERNDON&apos;S{' '}
            <span className="text-accent-cool">TRUSTED</span>
            <br />
            HVAC EXPERT
          </h1>

          {/* Subheadline */}
          <p className="hero-animate-delay-2 text-slate-300 text-lg sm:text-xl font-outfit font-light max-w-2xl leading-relaxed mb-8 text-balance">
            Fast, reliable heating &amp; air conditioning repair when you need it most.
            Serving Herndon, Reston, Sterling &amp; all of Northern Virginia with
            honest pricing and expert workmanship.
          </p>

          {/* CTA buttons */}
          <div className="hero-animate-delay-3 flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={PHONE_HREF}
              className="btn-primary text-base px-8 py-4 shadow-cta text-center"
              aria-label={`Call now at ${PHONE}`}
            >
              <PhoneIcon />
              Call Now — {PHONE}
            </a>
            <Link
              href="/contact"
              className="btn-outline text-base px-8 py-4 text-center"
            >
              Request Service
              <ArrowIcon />
            </Link>
          </div>

          {/* Trust bar */}
          <div className="hero-animate-delay-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '4.9★', label: 'Google Rating', color: 'text-yellow-400' },
              { value: '24/7', label: 'Emergency Service', color: 'text-accent-cool' },
              { value: 'Fast', label: 'Response Times', color: 'text-accent' },
              { value: 'Fair', label: 'Honest Pricing', color: 'text-green-400' },
            ].map(({ value, label, color }) => (
              <div
                key={label}
                className="flex flex-col gap-0.5 border-l-2 border-white/10 pl-4"
              >
                <span className={`font-bebas text-2xl sm:text-3xl ${color} leading-none`}>
                  {value}
                </span>
                <span className="text-slate-400 text-xs font-outfit font-medium tracking-wide uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent"
        aria-hidden="true"
      />
    </section>
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
