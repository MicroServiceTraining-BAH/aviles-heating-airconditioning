const TRUST_ITEMS = [
  {
    icon: <StarIcon />,
    value: '4.9 Stars',
    detail: 'Google Verified Reviews',
    color: 'text-yellow-500',
    borderColor: 'border-yellow-500/30',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: <ClockIcon />,
    value: '24/7 Service',
    detail: 'Always Available',
    color: 'text-accent',
    borderColor: 'border-accent/30',
    bgColor: 'bg-red-50',
  },
  {
    icon: <BoltIcon />,
    value: 'Fast Response',
    detail: 'Same-Day Appointments',
    color: 'text-secondary',
    borderColor: 'border-secondary/30',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <ShieldIcon />,
    value: 'Fair Pricing',
    detail: 'Honest & Transparent',
    color: 'text-green-600',
    borderColor: 'border-green-600/30',
    bgColor: 'bg-green-50',
  },
];

export default function TrustBar() {
  return (
    <section
      className="bg-white border-b border-slate-100"
      aria-label="Why choose Aviles Heating & Air Conditioning"
    >
      <div className="container-xl py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_ITEMS.map(({ icon, value, detail, color, borderColor, bgColor }) => (
            <div
              key={value}
              className={`flex items-center gap-3 p-4 rounded-lg border ${borderColor} ${bgColor}`}
            >
              <div className={`flex-shrink-0 ${color}`} aria-hidden="true">
                {icon}
              </div>
              <div>
                <p className={`font-outfit font-bold text-sm sm:text-base text-primary leading-tight`}>
                  {value}
                </p>
                <p className="text-slate-500 text-xs sm:text-sm font-outfit leading-tight mt-0.5">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
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
      width="28"
      height="28"
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

function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
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
