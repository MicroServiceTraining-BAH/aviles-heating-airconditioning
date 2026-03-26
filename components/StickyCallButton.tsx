const PHONE = '(571) 665-8027';
const PHONE_HREF = 'tel:+15716658027';

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden" aria-label="Quick call button">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-3 w-full bg-accent text-white font-outfit font-bold text-base py-4 hover:bg-red-600 transition-colors duration-200 shadow-lg shadow-accent/30 min-h-[60px]"
        aria-label={`Call Aviles Heating & Air Conditioning at ${PHONE}`}
      >
        <PhoneIcon />
        <span>Call Now — {PHONE}</span>
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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
