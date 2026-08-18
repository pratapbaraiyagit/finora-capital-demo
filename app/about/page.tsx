import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Eye, ShieldCheck, HeartHandshake, TrendingUp, BookOpen } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { CTASection } from '@/components/site/cta-section';
import { team, values, company } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Finora Capital is a fictional financial services brand created to demonstrate transparent, structured financial planning.',
};

const valueIcons = { Eye, ShieldCheck, HeartHandshake, TrendingUp, BookOpen };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-20 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-30" />
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About Finora Capital
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Financial expertise built around your goals.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              We simplify financial planning through transparent
              communication, structured strategies and thoughtful use of
              technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <Reveal>
              <div>
                <span className="text-sm font-medium text-accent">Our Story</span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                  A demonstration concept with a real philosophy
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
                <p>
                  Finora Capital is a fictional financial services brand
                  created as a demonstration concept. The company focuses on
                  simplifying financial planning through transparent
                  communication, structured strategies and technology.
                </p>
                <p>
                  The idea behind Finora is simple: most people don&apos;t
                  need more financial jargon — they need a clearer picture of
                  where they stand and a practical path forward. Every
                  example on this site is illustrative, built to show how a
                  modern wealth management experience could feel.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-secondary/30 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <TargetIcon />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                  Mission
                </h3>
                <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                  Make financial planning easier to understand and easier to
                  act on.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <EyeIcon />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                  Vision
                </h3>
                <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                  Help people make more confident financial decisions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-accent">Our Values</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                What guides every decision we make
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = valueIcons[v.icon as keyof typeof valueIcons];
              return (
                <Reveal key={v.title} delay={(i % 3) * 80}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-accent">Our Team</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Meet the people behind the plan
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fictional profiles created for this demonstration.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-card">
                  <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-secondary to-secondary/40">
                    <div className="absolute inset-0 bg-dots opacity-30" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-semibold text-primary-foreground shadow-soft">
                      {member.initials}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-accent">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-10 text-center text-xs text-muted-foreground">
              Demo content — team profiles are fictional.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Curious how this could work for you?"
        description="Explore our services or start a conversation about your goals."
        buttonText="Explore Services"
        href="/services"
      />
    </>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function EyeIcon() {
  return <Eye className="h-5 w-5" />;
}
