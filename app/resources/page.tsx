import type { Metadata } from 'next';
import { Reveal } from '@/components/site/reveal';
import { Resources } from '@/components/site/resources';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'A financial knowledge center with illustrative articles on investing, planning, retirement and more.',
};

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-20 pb-12 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Knowledge Center
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Resources to help you think clearly about money
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Illustrative articles for demonstration purposes — covering
              investing, planning, retirement and personal finance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <Resources />
      </section>
    </>
  );
}
