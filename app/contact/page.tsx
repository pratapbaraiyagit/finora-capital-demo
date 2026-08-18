import type { Metadata } from 'next';
import { Reveal } from '@/components/site/reveal';
import { ContactForm, ContactInfo } from '@/components/site/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a conversation about your financial goals with Finora Capital. Demo contact form for presentation purposes.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-20 pb-12 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-30" />
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get in Touch
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s talk about your financial goals.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Share a few details and we&apos;ll start a conversation about how
              structured planning could work for you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
