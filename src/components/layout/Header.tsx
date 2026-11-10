import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Phone } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { navItems, siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

const socialLinks = [
  { url: siteConfig.social.linkedin, label: 'LinkedIn' },
  { url: siteConfig.social.whatsapp, label: 'WhatsApp' },
  { url: siteConfig.social.twitter, label: 'X' },
  { url: siteConfig.social.facebook, label: 'Facebook' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? 'shadow-lg shadow-black/30' : ''
    }`}>

      {/* ── Main nav ────────────────────────────────────────── */}
      <div className={`transition-all duration-500 ${
        scrolled
          ? 'bg-jet/98 backdrop-blur-md'
          : 'bg-jet/85 backdrop-blur-sm'
      }`}>
        {/* Gold accent line at very top when scrolled */}
        {scrolled && <div className="h-px w-full bg-gold/40" />}

        <nav className="container-firm" aria-label="Primary navigation">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-3"
              aria-label={`${siteConfig.firmName} homepage`}
            >
              {/* Icon mark */}
              <div className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-jet">
                <Scale className="h-5 w-5" strokeWidth={1.5} />
              </div>
              {/* Firm name — split into two lines on desktop */}
              <div className="flex flex-col leading-none">
                <span className="font-serif text-base font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-gold lg:text-lg">
                  Epitome Forensis
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gold/80">
                  International
                </span>
              </div>
            </Link>

            {/* Desktop Nav links */}
            <div className="hidden items-center lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path) ? 'text-gold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Active underline */}
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-gold transition-all duration-300 ${
                    isActive(item.path) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`} />
                  {/* Hover underline */}
                  {!isActive(item.path) && (
                    <span className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gold/50 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <Button to="/contact" variant="primary" size="sm">
                Book a Consultation
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-all duration-300 hover:border-gold hover:text-gold lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-jet ${
        mobileOpen ? 'max-h-[640px]' : 'max-h-0'
      }`}>
        {/* Gold top border */}
        <div className="h-px w-full bg-gold/30" />

        <div className="container-firm py-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-gold border-l-2 border-gold bg-white/3'
                    : 'text-white/80 border-l-2 border-transparent hover:text-gold hover:border-gold/50 hover:bg-white/3'
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms',
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-8px)',
                  opacity: mobileOpen ? 1 : 0,
                }}
              >
                {isActive(item.path) && (
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                )}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile divider */}
          <div className="my-5 h-px bg-white/8" />

          {/* Mobile contact + social */}
          <div className="flex items-center justify-between px-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 text-xs text-white/50 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
              {siteConfig.contact.phone}
            </a>
            <div className="flex items-center gap-1">
              {socialLinks.map((s) => (
                <SocialIcon
                  key={s.label}
                  url={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ width: 28, height: 28 }}
                  bgColor="transparent"
                  fgColor="rgba(255,255,255,0.4)"
                  className="social-icon-btn !border-0"
                />
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="mt-5 px-4">
            <Button to="/contact" variant="primary" size="md" className="w-full justify-center">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
