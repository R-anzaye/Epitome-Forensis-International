import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
}

export function Eyebrow({ children, variant = 'dark', className = '' }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-10 bg-gold" />
      <span
        className={`text-xs font-semibold uppercase tracking-widest-xl ${
          variant === 'light' ? 'text-muted-gold' : 'text-gold'
        }`}
      >
        {children}
      </span>
    </div>
  );
}
