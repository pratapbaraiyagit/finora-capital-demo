import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { Logo } from '@/components/site/logo';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-soft">
          <Logo className="h-8 w-8" />
        </div>
        <p className="mt-8 font-display text-7xl font-semibold tracking-tight text-accent sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground">
          The page you&apos;re looking for may have moved or never existed.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-soft"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-secondary"
          >
            Explore Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
