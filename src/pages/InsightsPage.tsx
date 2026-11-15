import { useState, useMemo } from 'react';
import { Search, Mail, CheckCircle2, AlertCircle, ArrowRight, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { CTASection } from '@/components/ui/CTASection';
import { articles, articleCategories, type Article } from '@/data/articles';
import { Link } from 'react-router-dom';

export function InsightsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
  const otherArticles = articles.filter((a) => a.slug !== featuredArticle.slug);

  const filteredArticles = useMemo(() => {
    return otherArticles.filter((article) => {
      const matchesCategory = category === 'All' || article.category === category;
      const matchesSearch =
        search === '' ||
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [otherArticles, category, search]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('idle');
    setNewsletterError('');

    if (!newsletterEmail.trim()) {
      setNewsletterError('Please enter your email address.');
      setNewsletterStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address.');
      setNewsletterStatus('error');
      return;
    }

    setNewsletterStatus('loading');

    // Simulated submission — connect to a real backend when available
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
    }, 800);
  };

  const formattedDate = (date: string) =>
    new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <Layout
      title="Insights & Resources — Epitome Forensis International"
      description="Legal insights, articles, and resources from Epitome Forensis International. Stay informed on corporate law, property, employment, family law, and dispute resolution."
    >
      {/* Hero */}
      <section className="bg-jet py-32 lg:py-40">
        <div className="container-firm">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 animate-fade-up">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                Insights & Resources
              </span>
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-white text-balance animate-fade-up animate-delay-100 sm:text-5xl lg:text-6xl">
              Legal Insights.<br />
              Clear Perspectives.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 animate-fade-up animate-delay-200">
              We share our perspectives on the legal issues that matter to our clients and our community. Our articles and guides are designed to inform, not to replace tailored legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <Eyebrow className="mb-8">Featured Article</Eyebrow>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-jet">
                  {featuredArticle.category}
                </span>
                {featuredArticle.draft && (
                  <span className="border border-jet/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-jet/50">
                    Draft
                  </span>
                )}
              </div>
              <h2 className="mb-6 font-serif text-2xl leading-tight text-jet sm:text-3xl lg:text-4xl text-balance">
                {featuredArticle.title}
              </h2>
              <p className="mb-8 text-base leading-relaxed text-jet/70">
                {featuredArticle.excerpt}
              </p>
              <div className="mb-8 flex items-center gap-4 text-sm text-jet/50">
                <span>{formattedDate(featuredArticle.date)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {featuredArticle.readTime}
                </span>
                <span>By {featuredArticle.author}</span>
              </div>
              <Button to={`/insights/${featuredArticle.slug}`} variant="light-outline" size="md">
                Read Article
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid with Search & Filter */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="All Articles"
            title="Browse Our Legal Publications"
            align="center"
            className="mb-12"
          />

          {/* Search & Filter */}
          <div className="mx-auto mb-16 max-w-4xl">
            <div className="flex flex-col gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-jet/40" strokeWidth={1.5} />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-jet/15 bg-white py-3.5 pl-12 pr-4 text-sm text-jet placeholder:text-jet/40 focus:border-gold focus:outline-none"
                  aria-label="Search articles"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {articleCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                      category === cat
                        ? 'bg-jet text-white'
                        : 'border border-jet/15 bg-white text-jet/60 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Article Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-jet/50">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setCategory('All');
                }}
                className="mt-4 text-sm font-semibold text-gold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-jet py-24 lg:py-32">
        <div className="container-firm">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-gold/30 text-gold">
              <Mail className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <SectionHeading
              eyebrow="Stay Informed"
              title="Subscribe to Our Newsletter"
              align="center"
              variant="light"
              className="mb-6"
            />
            <p className="mb-10 text-base leading-relaxed text-white/60">
              Receive our latest legal insights and updates. We respect your privacy and will never share your details.
            </p>

            {newsletterStatus === 'success' ? (
              <div className="flex items-center justify-center gap-3 border border-gold/30 bg-charcoal p-6">
                <CheckCircle2 className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <p className="text-sm text-white">
                  Thank you for subscribing. You will receive our next newsletter shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} noValidate>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      placeholder="Your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      aria-invalid={newsletterStatus === 'error'}
                      aria-describedby={newsletterStatus === 'error' ? 'newsletter-error' : undefined}
                      className="w-full border border-white/15 bg-charcoal px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="inline-flex items-center justify-center bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-jet transition-colors duration-300 hover:bg-[#E5C25A] disabled:opacity-50"
                  >
                    {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {newsletterStatus === 'error' && (
                  <p id="newsletter-error" className="mt-4 flex items-center justify-center gap-2 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                    {newsletterError}
                  </p>
                )}
                <p className="mt-4 text-xs text-white/40">
                  [This form requires a backend submission service to send emails. Connect it to a real service before going live.]
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
}
