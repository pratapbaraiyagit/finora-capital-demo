'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { articles, articleCategories } from '@/lib/data';
import { Reveal } from '@/components/site/reveal';

export function Resources() {
  const [active, setActive] = React.useState<string | null>(null);
  const filtered = active
    ? articles.filter((a) => a.category === active)
    : articles;

  return (
    <div className="mx-auto max-w-6xl">
      <Reveal>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === null
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-background text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {articleCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 3) * 80}>
            <Link
              href={`/resources/${a.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary to-secondary/40">
                <div className="absolute inset-0 bg-dots opacity-30" />
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <span className="relative rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
                  {a.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {a.readTime}
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Read Article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
