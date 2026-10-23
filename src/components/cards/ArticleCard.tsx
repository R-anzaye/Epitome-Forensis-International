import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="group flex flex-col border border-jet/8 bg-white transition-all duration-500 hover:border-gold/40">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-jet">
            {article.category}
          </span>
        </div>
        {article.draft && (
          <div className="absolute bottom-4 right-4">
            <span className="bg-jet/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
              Draft
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-jet/40">
          <span>{formattedDate}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" strokeWidth={1.5} />
            {article.readTime}
          </span>
        </div>

        <h3 className="mb-3 font-serif text-lg leading-snug text-jet transition-colors duration-300 group-hover:text-gold">
          {article.title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-jet/60">{article.excerpt}</p>

        <Link
          to={`/insights/${article.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-jet transition-colors duration-300 hover:text-gold"
        >
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>
      </div>
    </article>
  );
}
