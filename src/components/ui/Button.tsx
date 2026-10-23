import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'light' | 'light-outline';
type Size = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends BaseButtonProps {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
}

interface AnchorButtonProps extends BaseButtonProps {
  to?: never;
  href: string;
  onClick?: never;
  type?: never;
}

interface ActionButtonProps extends BaseButtonProps {
  to?: never;
  href?: never;
  onClick: () => void;
  type?: 'button' | 'submit';
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | ActionButtonProps;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-jet hover:bg-[#E5C25A] focus-visible:ring-gold/60',
  secondary:
    'bg-transparent border border-gold text-white hover:bg-gold hover:text-jet focus-visible:ring-gold/60',
  light:
    'bg-white text-jet hover:bg-off-white focus-visible:ring-white/60',
  'light-outline':
    'bg-transparent border border-jet/20 text-jet hover:border-gold hover:text-gold focus-visible:ring-jet/20',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-sm',
};

function getClasses(variant: Variant, size: Size, className?: string) {
  return `inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-none ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ''}`;
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className } = props;
  const classes = getClasses(variant, size, className);

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  const { type = 'button' } = props as ActionButtonProps;
  return (
    <button type={type} onClick={props.onClick} className={classes}>
      {children}
    </button>
  );
}
