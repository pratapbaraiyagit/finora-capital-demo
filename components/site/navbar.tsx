'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks, company } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/site/logo';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-background/0'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-18 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label={`${company.name} home`}
        >
          <Logo className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight">
            {company.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                isActive(link.href)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute inset-x-4 -bottom-px h-px bg-accent" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-soft"
          >
            Talk to an Advisor
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden',
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      >
        <div className="flex h-[calc(100vh-4rem)] flex-col px-6 py-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                )}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
                <ArrowRight className="h-4 w-4 opacity-40" />
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-8">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground"
            >
              Talk to an Advisor
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              {company.email} · {company.phone}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
