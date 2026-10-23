interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
  variant?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  variant = 'dark',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isLight = variant === 'light';

  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <div className={`mb-4 ${isCenter ? 'flex items-center justify-center gap-3' : ''}`}>
          {isCenter && <span className="h-px w-8 bg-gold" />}
          <span
            className={`text-xs font-semibold uppercase tracking-widest-xl ${
              isLight ? 'text-muted-gold' : 'text-gold'
            }`}
          >
            {eyebrow}
          </span>
          {isCenter && <span className="h-px w-8 bg-gold" />}
        </div>
      )}
      <h2
        className={`font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
          isLight ? 'text-white' : 'text-jet'
        } text-balance`}
      >
        {title}
      </h2>
    </div>
  );
}
