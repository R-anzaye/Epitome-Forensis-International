import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/ui/CTASection';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { articles } from '@/data/articles';

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout title="Article Not Found — Aurelius Legal" description="The requested article could not be found.">
        <section className="bg-jet py-40 text-center">
          <div className="container-firm">
            <h1 className="mb-6 font-serif text-3xl text-white">Article Not Found</h1>
            <p className="mb-8 text-white/60">The article you are looking for may have been moved or is no longer available.</p>
            <Button to="/insights" variant="secondary" size="md">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              Back to Insights
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);
  const fallbackRelated = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);
  const related = relatedArticles.length > 0 ? relatedArticles : fallbackRelated;

  return (
    <Layout
      title={`${article.title} — Aurelius Legal`}
      description={article.excerpt}
    >
      {/* Hero / Header */}
      <section className="bg-jet py-24 lg:py-32">
        <div className="container-firm">
          <Link
            to="/insights"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back to Insights
          </Link>
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-jet">
                {article.category}
              </span>
              {article.draft && (
                <span className="border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/50">
                  Draft
                </span>
              )}
            </div>
            <h1 className="mb-6 font-serif text-3xl leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" strokeWidth={1.5} />
                {article.author}
              </span>
              <span>{formattedDate}</span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" strokeWidth={1.5} />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-jet">
        <div className="container-firm pb-20">
          <div className="aspect-[16/8] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <Eyebrow>Article</Eyebrow>
            </div>
            <div className="space-y-6">
              {article.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed ${
                    i === 0 && paragraph.startsWith('[')
                      ? 'border-l-2 border-gold bg-off-white p-6 text-sm text-jet/60 italic'
                      : 'text-jet/80'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-16 border-t border-jet/10 pt-8">
              <p className="text-xs leading-relaxed text-jet/40">
                This article is for general informational purposes only and does not constitute legal advice. It does not establish an advocate-client relationship. Please consult a qualified advocate before acting on any information contained herein.
              </p>
            </div>

            {/* Author placeholder */}
            <div className="mt-12 border border-jet/10 p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-gold/10 text-gold">
                  <User className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-lg text-jet">{article.author}</p>
                  <p className="text-sm text-jet/50">[Author bio to be added]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="mb-12">
            <Eyebrow>Related Reading</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-jet sm:text-4xl">More From This Area</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
}
