import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import { navItems, siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

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

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-jet/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-jet/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-firm" aria-label="Primary navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label={`${siteConfig.firmName} homepage`}>
            <Scale className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            <span className="font-serif text-xl font-medium tracking-wide text-white">
              {siteConfig.firmName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path) ? 'text-gold' : 'text-white/90 hover:text-gold'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-gold" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" size="sm">
              Book a Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="p-2 text-white transition-colors hover:text-gold lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-jet ${
          mobileOpen ? 'max-h-[600px] border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="container-firm py-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-gold border-l-2 border-gold pl-3'
                    : 'text-white/90 hover:text-gold border-l-2 border-transparent'
                }`}
                style={{
                  animation: mobileOpen ? `fadeUp 0.3s ease-out ${i * 50}ms forwards` : undefined,
                  opacity: mobileOpen ? undefined : 0,
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
