const CONTACT_INFO = [
  {
    label: 'Address',
    value: '13000 Elm Tree Dr, Herndon, VA 20171',
    href: 'https://maps.google.com/?q=13000+Elm+Tree+Dr+Herndon+VA+20171',
    icon: <MapPinIcon />,
  },
  {
    label: 'Phone',
    value: '(571) 665-8027',
    href: 'tel:+15716658027',
    icon: <PhoneIcon />,
  },
  {
    label: 'Hours',
    value: 'Open 24 Hours, 7 Days a Week',
    href: null,
    icon: <ClockIcon />,
  },
];

const SERVICE_AREAS = [
  'Herndon',
  'Reston',
  'Sterling',
  'Chantilly',
  'Ashburn',
  'Dulles',
  'Centreville',
  'Great Falls',
  'McLean',
  'Vienna',
  'Fairfax',
  'Falls Church',
];

export default function LocationSection() {
  return (
    <section className="section-padding bg-bg-light" aria-labelledby="location-heading">
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Find Us</p>
          <h2 id="location-heading" className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">
            Serving All of <span className="text-secondary">Northern Virginia</span>
          </h2>
          <p className="text-slate-500 font-outfit text-base max-w-xl mx-auto">
            Based in Herndon, VA — we serve homeowners and families across all of Northern Virginia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Info */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className="card p-6 space-y-5">
              {CONTACT_INFO.map(({ label, value, href, icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary"
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-outfit font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-outfit font-medium text-primary hover:text-secondary transition-colors duration-150 text-sm sm:text-base"
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-outfit font-medium text-primary text-sm sm:text-base">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Service areas */}
            <div className="card p-6">
              <h3 className="font-outfit font-bold text-primary text-base mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-outfit font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 text-xs font-outfit mt-3">
                + surrounding Northern Virginia communities
              </p>
            </div>
          </div>

          {/* Right: Map */}
          <div className="card overflow-hidden h-80 lg:h-full min-h-80">
            <iframe
              src="https://maps.google.com/maps?q=13000+Elm+Tree+Dr,+Herndon,+VA+20171&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aviles Heating & Air Conditioning location map — 13000 Elm Tree Dr, Herndon, VA 20171"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
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
      strokeWidth="2"
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
      width="20"
      height="20"
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
