import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/site/logo';
import { company, navLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-lg font-semibold tracking-tight">
                {company.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-pretty text-sm text-muted-foreground">
              {company.tagline} Personalized financial planning and wealth
              management for every stage of life.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-accent" />
                {company.email}
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                {company.phone}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                {company.office}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks
                .filter((l) =>
                  ['/about', '/services', '/resources', '/contact'].includes(
                    l.href
                  )
                )
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Planning</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/investment-planning"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Investment Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Financial Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <Link
                    href="/disclaimer"
                    className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                    <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-background/60 p-5">
          <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">
              Disclaimer:
            </span>{' '}
            Finora Capital is a fictional brand created for demonstration
            purposes. All information, figures, calculators, testimonials and
            examples shown on this website are illustrative and should not be
            considered financial advice.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. Demo project for
            presentation purposes.
          </p>
          <p>Build wealth with clarity.</p>
        </div>
      </div>
    </footer>
  );
}
