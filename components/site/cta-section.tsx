import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  className?: string;
}

export function CTASection({
  title = 'Ready to take control of your financial future?',
  description = 'Start with a conversation about your goals.',
  buttonText = 'Schedule a Consultation',
  href = '/contact',
  className,
}: CTASectionProps) {
  return (
    <section className={cn('relative px-6 py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center shadow-float sm:px-16">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
              <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-primary-foreground/70 sm:text-lg">
                {description}
              </p>
              <div className="mt-9 flex justify-center">
                <Link
                  href={href}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:gap-3 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                >
                  {buttonText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
