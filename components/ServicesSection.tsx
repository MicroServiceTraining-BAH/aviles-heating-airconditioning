import Link from 'next/link';

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  bgAccent: string;
};

const ALL_SERVICES: Service[] = [
  {
    id: 'ac-repair',
    title: 'AC Repair',
    description:
      "Beat the Virginia heat. We diagnose and fix all AC issues fast—from refrigerant leaks to compressor failures—so you're comfortable again the same day.",
    icon: <SnowflakeIcon />,
    accent: 'text-accent-cool',
    bgAccent: 'bg-sky-50 border-sky-200',
  },
  {
    id: 'heating-repair',
    title: 'Heating Repair',
    description:
      "Don't let a broken furnace freeze your family. We service all major brands and get your heat running reliably—even during the coldest nights.",
    icon: <FlameIcon />,
    accent: 'text-accent',
    bgAccent: 'bg-red-50 border-red-200',
  },
  {
    id: 'hvac-installation',
    title: 'HVAC Installation',
    description:
      'New system? Right-size equipment, professional installation, and manufacturer warranty. We match the perfect system to your home and budget.',
    icon: <WrenchIcon />,
    accent: 'text-secondary',
    bgAccent: 'bg-blue-50 border-blue-200',
  },
  {
    id: 'hvac-maintenance',
    title: 'HVAC Maintenance',
    description:
      'Preventive tune-ups extend equipment life, lower energy bills, and catch small problems before they become expensive emergencies.',
    icon: <GearIcon />,
    accent: 'text-green-600',
    bgAccent: 'bg-green-50 border-green-200',
  },
  {
    id: 'emergency-service',
    title: 'Emergency HVAC Service',
    description:
      "HVAC failures don't wait for business hours—neither do we. Call anytime, day or night. We'll be there when you need us most.",
    icon: <AlertIcon />,
    accent: 'text-accent',
    bgAccent: 'bg-red-50 border-red-200',
  },
  {
    id: 'system-diagnostics',
    title: 'System Diagnostics',
    description:
      "Not sure what's wrong? Our thorough diagnostic process identifies the exact problem so you get the right fix the first time—no guessing, no upsells.",
    icon: <DiagnosticIcon />,
    accent: 'text-purple-600',
    bgAccent: 'bg-purple-50 border-purple-200',
  },
  {
    id: 'thermostat-installation',
    title: 'Thermostat Installation',
    description:
      'Smart thermostats save up to 23% on energy costs. We install, program, and walk you through using your new thermostat with confidence.',
    icon: <ThermostatIcon />,
    accent: 'text-secondary',
    bgAccent: 'bg-blue-50 border-blue-200',
  },
  {
    id: 'airflow-efficiency',
    title: 'Airflow & Efficiency',
    description:
      'Poor airflow, uneven temps, high bills? We assess your ductwork, insulation, and system settings to maximize comfort and minimize costs.',
    icon: <WindIcon />,
    accent: 'text-accent-cool',
    bgAccent: 'bg-sky-50 border-sky-200',
  },
];

type ServicesSectionProps = {
  preview?: boolean;
};

export default function ServicesSection({ preview = false }: ServicesSectionProps) {
  const services = preview ? ALL_SERVICES.slice(0, 4) : ALL_SERVICES;

  return (
    <section className="section-padding bg-bg-light" aria-labelledby="services-heading">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="section-label mb-3">What We Do</p>
          <h2 id="services-heading" className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">
            HVAC Services in <span className="text-secondary">Northern Virginia</span>
          </h2>
          <p className="text-slate-500 font-outfit text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From emergency repairs to full system installations, Aviles Heating &amp; Air
            Conditioning delivers expert service across the full spectrum of HVAC needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`card p-6 flex flex-col gap-4 animate-on-load stagger-${i + 1} border border-slate-100`}
            >
              <div className={`inline-flex p-3 rounded-lg ${service.bgAccent} border self-start`}>
                <div className={service.accent} aria-hidden="true">
                  {service.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-outfit font-bold text-primary text-lg leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm font-outfit leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        {preview && (
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowIcon />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function SnowflakeIcon() {
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
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
    </svg>
  );
}

function FlameIcon() {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
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

function GearIcon() {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function AlertIcon() {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function DiagnosticIcon() {
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
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function ThermostatIcon() {
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
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  );
}

function WindIcon() {
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
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
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
