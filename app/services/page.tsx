import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wallet,
  ClipboardList,
  PiggyBank,
  ReceiptText,
  LineChart,
  ShieldCheck,
  ArrowRight,
  Check,
} from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { CTASection } from '@/components/site/cta-section';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Wealth management, financial planning, retirement, tax, investment and insurance planning — structured around your goals.',
};

const iconMap = {
  Wallet,
  ClipboardList,
  PiggyBank,
  ReceiptText,
  LineChart,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Our Services
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Solutions designed around your goals
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              From wealth management to retirement planning, each service is
              built to give you clarity and a clear path forward.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-20">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={s.slug} delay={60}>
                <div
                  id={s.slug}
                  className="grid scroll-mt-24 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center"
                  style={{
                    gridTemplateAreas: reversed
                      ? '"text visual"'
                      : '"visual text"',
                  }}
                >
                  <div style={{ gridArea: 'text' }}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>

                    <div className="mt-7">
                      <p className="text-sm font-semibold">Key benefits</p>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {s.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent">
                              <Check className="h-3 w-3" />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-soft"
                    >
                      Discuss Your Goals
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  <div style={{ gridArea: 'visual' }}>
                    <ServiceVisual index={i} icon={s.icon} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        description="Tell us about your goals and we'll help you find the right starting point."
        buttonText="Talk to an Advisor"
        href="/contact"
      />
    </>
  );
}

function ServiceVisual({ index, icon }: { index: number; icon: string }) {
  const Icon = iconMap[icon as keyof typeof iconMap];
  const visuals = [
    'from-emerald-400/15 to-teal-500/5',
    'from-sky-400/15 to-blue-500/5',
    'from-amber-400/15 to-orange-500/5',
    'from-rose-400/15 to-pink-500/5',
    'from-violet-400/15 to-fuchsia-500/5',
    'from-cyan-400/15 to-teal-500/5',
  ];
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${
        visuals[index % visuals.length]
      } p-8`}
    >
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      <div className="relative grid w-full max-w-sm gap-3">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/70 text-accent shadow-soft backdrop-blur-sm">
              {row === 0 ? <Icon className="h-4 w-4" /> : <div className="h-2 w-2 rounded-full bg-accent/60" />}
            </div>
            <div className="h-2.5 flex-1 rounded-full bg-foreground/10" style={{ width: `${90 - row * 20}%` }} />
            <div className="h-2.5 w-10 rounded-full bg-foreground/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
