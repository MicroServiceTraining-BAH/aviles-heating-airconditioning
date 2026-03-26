'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_DATA: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

const SERVICES = [
  'AC Repair',
  'Heating Repair',
  'HVAC Installation',
  'HVAC Maintenance',
  'Emergency Service',
  'System Diagnostics',
  'Thermostat Installation',
  'Airflow & Efficiency',
  'Other / Not Sure',
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\+?[\d\s\-().]{7,}$/.test(data.phone)) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!data.service) errors.service = 'Please select a service.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  else if (data.message.trim().length < 10)
    errors.message = 'Please provide a bit more detail (at least 10 characters).';
  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      const newErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(INITIAL_DATA).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<keyof FormData, boolean>
    );
    setTouched(allTouched);
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('submitting');
    // Mock submit — replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData(INITIAL_DATA);
    setTouched({});
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-xl shadow-card p-10 text-center flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckIcon />
        </div>
        <h3 className="font-outfit font-bold text-primary text-2xl">Request Sent!</h3>
        <p className="text-slate-500 font-outfit text-base max-w-sm">
          Thank you! Eric will be in touch shortly. For urgent needs, call directly at{' '}
          <a href="tel:+15716658027" className="text-accent font-semibold hover:underline">
            (571) 665-8027
          </a>
          .
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mt-2">
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-xl shadow-card p-6 sm:p-8 space-y-5"
      aria-label="Service request form"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="field-label">
            Full Name{' '}
            <span className="text-accent" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`field-input ${errors.name ? 'border-accent focus:ring-accent/20' : ''}`}
            placeholder="John Smith"
          />
          {errors.name && (
            <p id="name-error" className="field-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="field-label">
            Phone Number{' '}
            <span className="text-accent" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`field-input ${errors.phone ? 'border-accent focus:ring-accent/20' : ''}`}
            placeholder="(571) 555-0000"
          />
          {errors.phone && (
            <p id="phone-error" className="field-error" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="field-label">
          Email Address{' '}
          <span className="text-accent" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`field-input ${errors.email ? 'border-accent focus:ring-accent/20' : ''}`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p id="email-error" className="field-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Service */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="field-label">
          Service Needed{' '}
          <span className="text-accent" aria-hidden="true">
            *
          </span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
          className={`field-input ${errors.service ? 'border-accent focus:ring-accent/20' : ''}`}
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="field-error" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="field-label">
          Describe Your Issue{' '}
          <span className="text-accent" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          className={`field-input resize-none ${errors.message ? 'border-accent focus:ring-accent/20' : ''}`}
          placeholder="e.g. AC unit stopped cooling, making a loud noise when it starts..."
        />
        <p id="message-hint" className="text-slate-400 text-xs font-outfit">
          The more detail you provide, the faster we can help.
        </p>
        {errors.message && (
          <p id="message-error" className="field-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
        aria-label="Submit service request"
      >
        {status === 'submitting' ? (
          <>
            <SpinnerIcon />
            Sending Your Request...
          </>
        ) : (
          <>
            <SendIcon />
            Send Service Request
          </>
        )}
      </button>

      <p className="text-center text-slate-400 text-xs font-outfit">
        For immediate help, call{' '}
        <a href="tel:+15716658027" className="text-accent font-semibold hover:underline">
          (571) 665-8027
        </a>{' '}
        — available 24/7.
      </p>
    </form>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16a34a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SpinnerIcon() {
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
      className="animate-spin"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function SendIcon() {
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
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
