'use client';

import * as React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { company } from '@/lib/data';

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
}

const interestOptions = [
  'Financial Planning',
  'Investment Planning',
  'Retirement Planning',
  'Wealth Management',
  'Other',
];

export function ContactForm() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>(
    'idle'
  );

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number.';
    } else if (!/^[+\d][\d\s-]{7,}$/.test(form.phone)) {
      e.phone = 'Please enter a valid phone number.';
    }
    if (!form.interest) e.interest = 'Please select an option.';
    if (!form.message.trim()) {
      e.message = 'Please tell us a little about your goals.';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1100));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <Reveal>
        <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-card sm:p-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
            Thank you, {form.name.split(' ')[0]}!
          </h3>
          <p className="mt-3 max-w-md text-pretty text-muted-foreground">
            Your demo consultation request has been received. This is a
            demonstration form — no real message was sent. A real
            implementation would forward your enquiry to an advisor.
          </p>
          <button
            onClick={() => {
              setStatus('idle');
              setForm({
                name: '',
                email: '',
                phone: '',
                interest: '',
                message: '',
              });
            }}
            className="mt-7 rounded-full border border-border bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Send another request
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Full Name"
            error={errors.name}
            htmlFor="name"
          >
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="e.g. Ananya Mehta"
              className={inputClass(!!errors.name)}
              aria-invalid={!!errors.name}
            />
          </Field>
          <Field label="Email" error={errors.email} htmlFor="email">
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="you@example.com"
              className={inputClass(!!errors.email)}
              aria-invalid={!!errors.email}
            />
          </Field>
          <Field label="Phone" error={errors.phone} htmlFor="phone">
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+91 00000 00000"
              className={inputClass(!!errors.phone)}
              aria-invalid={!!errors.phone}
            />
          </Field>
          <Field
            label="What are you interested in?"
            error={errors.interest}
            htmlFor="interest"
          >
            <select
              id="interest"
              value={form.interest}
              onChange={(e) => handleChange('interest', e.target.value)}
              className={inputClass(!!errors.interest)}
              aria-invalid={!!errors.interest}
            >
              <option value="">Select an option</option>
              {interestOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Message" error={errors.message} htmlFor="message">
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell us a little about your financial goals..."
              rows={5}
              className={`${inputClass(!!errors.message)} resize-none`}
              aria-invalid={!!errors.message}
            />
          </Field>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-soft disabled:opacity-60 sm:w-auto"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Request a Consultation
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
        <p className="mt-4 text-xs text-muted-foreground">
          Demo contact form — submissions are not sent or stored anywhere.
        </p>
      </form>
    </Reveal>
  );
}

function inputClass(hasError: boolean) {
  return `flex w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
    hasError
      ? 'border-destructive focus-visible:ring-destructive'
      : 'border-input'
  }`;
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>
      )}
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <a
                href={`mailto:${company.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Phone</p>
              <p className="text-sm text-muted-foreground">{company.phone}</p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={160}>
        <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Office</p>
              <p className="text-sm text-muted-foreground">{company.office}</p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={240}>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
          Demo contact information — these details are fictional and for
          presentation purposes only.
        </div>
      </Reveal>
    </div>
  );
}
