import type { Metadata } from 'next';
import { FinancialCalculator } from '@/components/site/financial-calculator';
import { Reveal } from '@/components/site/reveal';

export const metadata: Metadata = {
  title: 'Financial Calculator',
  description:
    'Interactive SIP and goal-planning calculators for educational and demonstration purposes.',
};

export default function CalculatorPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-20 pb-12 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Financial Calculator
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              See how your money could grow
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Adjust the sliders to estimate the future value of your
              investments and track progress toward a goal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FinancialCalculator />
        </div>
      </section>
    </>
  );
}
