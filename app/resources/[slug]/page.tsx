import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { articles } from '@/lib/data';
import { getArticleContent } from '@/lib/articles';
import { Reveal } from '@/components/site/reveal';
import { CTASection } from '@/components/site/cta-section';

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article' };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();
  const content = getArticleContent(params.slug);
  if (!content) notFound();

  const more = articles.filter((a) => a.slug !== params.slug).slice(0, 3);

  return (
    <>
      <article className="relative px-6 pt-20 pb-16 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-20" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 flex items-center gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-pretty text-lg text-muted-foreground">
              {article.excerpt}
            </p>
          </Reveal>

          <div className="mt-10 h-px w-full bg-border" />

          <div className="mt-8 space-y-8">
            <Reveal>
              <p className="text-pretty text-base leading-relaxed text-foreground">
                {content.intro}
              </p>
            </Reveal>
            {content.sections.map((s, i) => (
              <Reveal key={i} delay={i * 40}>
                <section>
                  <h2 className="font-display text-xl font-semibold tracking-tight">
                    {s.heading}
                  </h2>
                  <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </section>
              </Reveal>
            ))}
            <Reveal>
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
                <p className="text-sm font-semibold text-accent">Key takeaway</p>
                <p className="mt-2 text-pretty text-base leading-relaxed text-foreground">
                  {content.takeaway}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs text-muted-foreground">
                This article is fictional content created for demonstration
                purposes only and should not be considered financial advice.
              </p>
            </Reveal>
          </div>
        </div>
      </article>

      {/* More articles */}
      <section className="bg-secondary/30 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Keep reading
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link
                  href={`/resources/${a.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
                >
                  <span className="text-xs font-medium text-accent">
                    {a.category}
                  </span>
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
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to put this into action?"
        description="Start a conversation about your goals with a demo consultation."
        buttonText="Schedule a Consultation"
        href="/contact"
      />
    </>
  );
}
