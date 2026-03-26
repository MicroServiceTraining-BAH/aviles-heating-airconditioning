import Link from 'next/link';

const PHONE = '(571) 665-8027';
const PHONE_HREF = 'tel:+15716658027';
const ADDRESS = '13000 Elm Tree Dr, Herndon, VA 20171';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const SERVICES = [
  { label: 'AC Repair', href: '/services' },
  { label: 'Heating Repair', href: '/services' },
  { label: 'HVAC Installation', href: '/services' },
  { label: 'HVAC Maintenance', href: '/services' },
  { label: 'Emergency Service', href: '/services' },
  { label: 'System Diagnostics', href: '/services' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-slate-300 font-outfit" aria-label="Footer">
      {/* Main footer */}
      <div className="container-xl py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-4 group"
              aria-label="Aviles Heating & Air Conditioning"
            >
              <div className="w-9 h-9 bg-accent rounded-md flex items-center justify-center group-hover:bg-red-600 transition-colors duration-200 flex-shrink-0">
                <FlameIcon />
              </div>
              <div>
                <span className="block font-bebas text-white text-xl tracking-wide leading-none">
                  AVILES
                </span>
                <span className="block text-[10px] font-medium text-accent-cool tracking-[0.15em] uppercase leading-none mt-0.5">
                  Heating & Air
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Trusted HVAC service in Herndon & Northern Virginia. Fast, honest, and available 24/7.
            </p>
            <div className="space-y-2">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-accent-cool hover:text-white transition-colors duration-150 text-sm font-medium"
                aria-label={`Call ${PHONE}`}
              >
                <PhoneIcon />
                {PHONE}
              </a>
              <p className="text-slate-400 text-xs">{ADDRESS}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Hours & Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <ClockIcon />
                <div>
                  <p className="text-white font-medium">Open 24 Hours</p>
                  <p className="text-slate-400">7 Days a Week · Including Holidays</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPinIcon />
                <p className="text-slate-400">{ADDRESS}</p>
              </div>
            </div>
            <a
              href={PHONE_HREF}
              className="mt-6 btn-primary py-3 text-sm w-full sm:w-auto justify-center"
              aria-label={`Call for emergency HVAC service at ${PHONE}`}
            >
              <PhoneIcon />
              Call Now — 24/7
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {year} Aviles Heating &amp; Air Conditioning. All rights reserved. Herndon, VA.
          </p>
          <p className="text-slate-500 text-xs">
            Made by{' '}
            <a
              href="https://lvluplocal.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cool hover:text-white transition-colors duration-150 font-medium"
            >
              Level Up Local
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FlameIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
    >
      <path d="M12 2c0 0-5.5 4.5-5.5 9.5 0 2.5 1.5 4.5 3.5 5.5-.5-1.5 0-3 1-4 .5 1.5 2 2.5 2 4.5 0 1-.5 2-1.5 2.5C13.5 20.5 16 18 16 15c0-2-1-3.5-2-5 0 1.5-.5 2.5-1.5 3C13 10.5 12 7.5 12 2z" />
    </svg>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 text-accent-cool mt-0.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 text-accent-cool mt-0.5"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
