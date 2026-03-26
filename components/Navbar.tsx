'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const PHONE = '(571) 665-8027';
const PHONE_HREF = 'tel:+15716658027';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? 'bg-primary shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Aviles Heating & Air Conditioning - Home"
            >
              <div className="flex items-center justify-center w-9 h-9 bg-accent rounded-md group-hover:bg-red-600 transition-colors duration-200 flex-shrink-0">
                <FlameIcon />
              </div>
              <div className="leading-none">
                <span className="block font-bebas text-white text-xl tracking-wide leading-none">
                  AVILES
                </span>
                <span className="block text-[10px] font-outfit font-medium text-accent-cool tracking-[0.15em] uppercase leading-none mt-0.5">
                  Heating & Air
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-outfit font-medium transition-colors duration-150 ${
                    pathname === href ? 'text-accent-cool' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href={PHONE_HREF}
              className="hidden md:inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-red-600 hover:shadow-cta transition-all duration-200 active:scale-95"
              aria-label={`Call us at ${PHONE}`}
            >
              <PhoneIcon />
              {PHONE}
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-white/10 transition-colors duration-150"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-primary border-t border-white/10 overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav aria-label="Mobile navigation" className="container-xl py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`py-3 px-3 rounded-md text-base font-outfit font-medium transition-colors duration-150 ${
                  pathname === href
                    ? 'text-accent-cool bg-white/5'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-3 btn-primary justify-center text-base"
              aria-label={`Call us at ${PHONE}`}
            >
              <PhoneIcon />
              Call {PHONE}
            </a>
          </nav>
        </div>
      </header>
    </>
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
