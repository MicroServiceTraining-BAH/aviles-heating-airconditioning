const PHONE = '(571) 665-8027';
const PHONE_HREF = 'tel:+15716658027';

export default function EmergencyCTA() {
  return (
    <section
      className="relative bg-accent overflow-hidden"
      aria-labelledby="emergency-cta-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container-xl relative z-10 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4">
              <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-white text-xs font-outfit font-semibold tracking-widest uppercase">
                Open 24 Hours
              </span>
            </div>
            <h2
              id="emergency-cta-heading"
              className="font-bebas text-4xl sm:text-6xl text-white leading-none mb-3"
            >
              HVAC EMERGENCY?
              <br />
              <span className="text-white/80">WE&apos;RE ALWAYS ON CALL.</span>
            </h2>
            <p className="text-white/85 font-outfit text-base sm:text-lg max-w-xl leading-relaxed">
              Heating out in January? AC down in August? Don&apos;t suffer through it.
              Call Eric directly—24 hours a day, 7 days a week, including holidays.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-white text-accent font-outfit font-bold text-xl sm:text-2xl px-8 py-5 rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95 min-h-11"
              aria-label={`Call emergency HVAC service at ${PHONE}`}
            >
              <PhoneIcon />
              {PHONE}
            </a>
            <p className="text-white/70 text-xs font-outfit font-medium tracking-wide uppercase">
              Available Now · No Extra Charge for Nights/Weekends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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
