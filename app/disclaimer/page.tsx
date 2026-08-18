import type { Metadata } from 'next';
import { Reveal } from '@/components/site/reveal';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Finora Capital is a fictional brand. All content is illustrative and for demonstration purposes only.',
};

export default function DisclaimerPage() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-20" />
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Legal
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Disclaimer
          </h1>
        </Reveal>

        <div className="mt-10 space-y-6">
          <Reveal>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">Important:</span> Finora Capital
                is a fictional brand created for demonstration purposes. It is
                not a real financial services company and is not registered with
                any regulatory authority.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
              <p>
                All information, figures, statistics, testimonials, examples
                and calculators shown on this website are illustrative and
                should not be considered financial advice. No real financial
                products, investment products, or services are being offered.
              </p>
              <p>
                All names, profiles, client stories and contact details are
                fictional and created solely for presentation purposes. Any
                resemblance to real persons, companies, or products is
                coincidental.
              </p>
              <p>
                The calculators on this site are provided for educational and
                demonstration purposes only. They rely on simplified
                assumptions and do not account for taxes, fees, market
                fluctuations or other real-world factors. Actual investment
                outcomes may vary significantly.
              </p>
              <p>
                The illustrative investment strategies shown do not represent
                actual investment products, do not promise any returns, and
                should not be interpreted as a recommendation to buy, sell or
                hold any financial instrument.
              </p>
              <p>
                This website is a demo project built to showcase design and
                user experience concepts for a potential client. It does not
                collect, store, or transmit any real user data submitted
                through its forms.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <p className="text-sm font-semibold text-foreground">
                Privacy Policy &amp; Terms of Use
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                As this is a demonstration website, no real privacy policy or
                terms of use are in effect. Any form submissions are processed
                only in the browser and are not sent to or stored on any
                server.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
