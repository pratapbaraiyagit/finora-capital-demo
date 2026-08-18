import type { Metadata } from 'next';
import {
  Shield,
  Scale,
  Rocket,
  Check,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { CTASection } from '@/components/site/cta-section';
import { investmentStrategies } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Investment Planning',
  description:
    'Understand different illustrative investment approaches based on your goals, time horizon and risk preferences.',
};

const iconMap = { Shield, Scale, Rocket };

export default function InvestmentPlanningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Investment Planning
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Invest with a plan, not guesswork.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Investment planning starts with understanding your goals, time
              horizon and risk preferences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                A structured approach to investing
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Rather than chasing returns, a thoughtful investment plan
                aligns your money with your life. It considers when you&apos;ll
                need the funds, how much variability you can tolerate, and how
                your goals fit together. Below are three illustrative strategy
                profiles — not actual products, and not promises of
                performance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategy cards */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Three illustrative strategy profiles
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Each profile reflects a different balance between stability and
              growth. These are examples for demonstration only.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {investmentStrategies.map((s, i) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <Reveal key={s.name} delay={i * 100}>
                  <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      Focus: {s.focus}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <Check className="h-3 w-3" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    {/* Allocation bar */}
                    <div className="mt-6 border-t border-border pt-5">
                      <p className="text-xs font-medium text-muted-foreground">
                        Illustrative allocation
                      </p>
                      <div className="mt-3 flex h-2.5 w-full overflow-hidden rounded-full">
                        {s.allocation.map((a) => (
                          <div
                            key={a.name}
                            style={{
                              width: `${a.value}%`,
                              backgroundColor: a.color,
                            }}
                            className="h-full"
                          />
                        ))}
                      </div>
                      <div className="mt-3 space-y-1.5">
                        {s.allocation.map((a) => (
                          <div
                            key={a.name}
                            className="flex items-center justify-between text-xs"
                          >
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                              <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: a.color }}
                              />
                              {a.name}
                            </span>
                            <span className="font-medium">{a.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <p className="text-sm leading-relaxed">
                These strategies are illustrative examples for demonstration
                purposes only. They are not investment advice, do not promise
                any returns, and do not represent actual investment products.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-accent">The Process</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                How investment planning works at Finora
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: '01',
                t: 'Assess',
                d: 'Understand your goals, horizon and risk tolerance.',
              },
              {
                n: '02',
                t: 'Design',
                d: 'Map goals to suitable illustrative strategies.',
              },
              {
                n: '03',
                t: 'Implement',
                d: 'Build an allocation framework you understand.',
              },
              {
                n: '04',
                t: 'Review',
                d: 'Adjust as your life and circumstances change.',
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-display text-2xl font-semibold text-accent">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{step.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want help thinking through your approach?"
        description="Start a conversation about your goals, horizon and preferences."
        buttonText="Talk to an Advisor"
        href="/contact"
      />
    </>
  );
}
