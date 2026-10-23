import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { PracticeArea } from '@/data/practiceAreas';

interface PracticeAreaCardProps {
  area: PracticeArea;
  variant?: 'light' | 'off-white';
}

export function PracticeAreaCard({ area, variant = 'light' }: PracticeAreaCardProps) {
  const bg = variant === 'light' ? 'bg-white' : 'bg-off-white';

  return (
    <div
      className={`group relative flex flex-col border border-jet/8 p-8 transition-all duration-500 hover:border-gold/50 ${bg}`}
    >
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center border border-gold/30 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-jet">
        <area.icon className="h-6 w-6" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="mb-4 font-serif text-xl text-jet">{area.title}</h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-jet/70">{area.description}</p>

      {/* Issues */}
      <div className="mt-auto">
        <ul className="mb-6 space-y-2">
          {area.issues.slice(0, 3).map((issue, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-jet/60">
              <span className="mt-1.5 h-1 w-1 shrink-0 bg-gold" />
              <span>{issue}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-jet transition-colors duration-300 hover:text-gold"
        >
          Enquire About This Service
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
