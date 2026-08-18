'use client';

import * as React from 'react';
import {
  Target,
  Eye,
  LineChart,
  TrendingUp,
  Wallet,
  ClipboardList,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  ArrowRight,
  Home as HomeIcon,
  GraduationCap,
  Scale,
  Shield,
  Rocket,
} from 'lucide-react';
import Link from 'next/link';
import {
  whyFinora,
  services,
  steps,
  goals,
  testimonials,
} from '@/lib/data';
import { Reveal } from '@/components/site/reveal';
import { Counter } from '@/components/site/counter';
import { HeroDashboard } from '@/components/site/hero-dashboard';
import { CTASection } from '@/components/site/cta-section';

const iconMap = {
  Target,
  Eye,
  LineChart,
  TrendingUp,
  Wallet,
  ClipboardList,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  Home: HomeIcon,
  GraduationCap,
  Scale,
  Shield,
  Rocket,
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <Badge>Financial clarity for every stage of life</Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                Build wealth with{' '}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-accent">clarity</span>
                  <svg
                    className="absolute -bottom-1 left-0 z-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                    style={{ height: 10 }}
                  >
                    <path
                      d="M2 9C40 3 160 3 198 9"
                      stroke="hsl(var(--accent))"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                  </svg>
                </span>
                .
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
                Personalized financial planning and wealth management
                solutions designed to help you make more confident financial
                decisions.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-soft"
                >
                  Explore Our Services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-secondary"
                >
                  Talk to an Advisor
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <HeroDashboard />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/30 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Helping clients plan with confidence
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: 10000, suffix: '+', label: 'Clients Served', prefix: '' },
              { value: 500, suffix: 'Cr+', label: 'Demo Assets Tracked', prefix: '₹' },
              { value: 15, suffix: '+', label: 'Years of Expertise', prefix: '' },
              { value: 98, suffix: '%', label: 'Client Satisfaction', prefix: '' },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    <Counter
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                    />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-10 text-center text-xs text-muted-foreground">
              Illustrative demo statistics for presentation purposes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Finora */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge>Why Finora</Badge>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Financial decisions, made simpler.
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                We combine structured planning with clear communication so you
                always know where you stand and what to do next.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyFinora.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <Badge>Our Services</Badge>
                <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Solutions designed around your goals
                </h2>
              </div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                View all services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <Reveal key={s.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge>How It Works</Badge>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                A simpler way to plan your financial future
              </h2>
            </div>
          </Reveal>
          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />
            <div className="grid gap-10 lg:grid-cols-4">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 100}>
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card font-display text-lg font-semibold text-accent shadow-soft">
                      {step.number}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial goals */}
      <section className="bg-secondary/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge>Plan With Purpose</Badge>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Whatever you&apos;re planning for, start with a clear strategy
              </h2>
              <p className="mt-4 text-muted-foreground">
                Illustrative example goals — your plan is built around your
                own numbers.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((g, i) => {
              const Icon = iconMap[g.icon as keyof typeof iconMap];
              return (
                <Reveal key={g.title} delay={i * 80}>
                  <div
                    className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${g.accent} p-6 transition-all hover:-translate-y-1 hover:shadow-card`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background/80 text-foreground backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold">{g.title}</h3>
                    <p className="mt-1 font-display text-2xl font-semibold tracking-tight">
                      {g.amount}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {g.subtitle}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge>Portfolio Preview</Badge>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                See your financial picture clearly
              </h2>
              <p className="mt-4 text-muted-foreground">
                A sample view of how your plan and progress come together.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14">
              <PortfolioChart />
            </div>
          </Reveal>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Illustrative data — not investment advice.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge>Client Stories</Badge>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                What our clients say
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fictional testimonials for demonstration purposes.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M10 1l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8 4.8 17.1l1-5.8L1.5 7.2l5.9-.9L10 1z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-medium text-accent">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} · {t.location}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function PortfolioChart() {
  const data = [
    { month: 'Jan', value: 1820000 },
    { month: 'Feb', value: 1890000 },
    { month: 'Mar', value: 1950000 },
    { month: 'Apr', value: 2010000 },
    { month: 'May', value: 2100000 },
    { month: 'Jun', value: 2160000 },
    { month: 'Jul', value: 2240000 },
    { month: 'Aug', value: 2290000 },
    { month: 'Sep', value: 2350000 },
    { month: 'Oct', value: 2400000 },
    { month: 'Nov', value: 2440000 },
    { month: 'Dec', value: 2485000 },
  ];
  const w = 600;
  const h = 220;
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(...data.map((d) => d.value));
  const range = max - min || 1;
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((d.value - min) / range) * (h - 30) - 15;
    return [x, y] as const;
  });
  const line = pts
    .map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`))
    .join(' ');
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid gap-6 sm:grid-cols-4">
        {[
          { label: 'Portfolio Value', value: '₹24,85,000' },
          { label: 'Demo Growth', value: '+12.4%' },
          { label: 'Monthly Investment', value: '₹35,000' },
          { label: 'Goal Progress', value: '68%' },
        ].map((m) => (
          <div key={m.label} className="rounded-2xl bg-secondary/50 p-4">
            <p className="text-xs text-muted-foreground">{m.label}</p>
            <p className="mt-1 font-display text-xl font-semibold tracking-tight">
              {m.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: 220 }}>
          <defs>
            <linearGradient id="portArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 0.25, 0.5, 0.75, 1].map((t) => (
            <line
              key={t}
              x1="0"
              x2={w}
              y1={t * h}
              y2={t * h}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
          ))}
          <path d={area} fill="url(#portArea)" />
          <path
            d={line}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {pts.map((p, i) => (
            <circle
              key={i}
              cx={p[0]}
              cy={p[1]}
              r="3"
              fill="hsl(var(--card))"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
            />
          ))}
        </svg>
        <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
          {data.map((d) => (
            <span key={d.month}>{d.month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
