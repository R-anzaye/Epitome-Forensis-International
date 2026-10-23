import { Link } from 'react-router-dom';
import { Scale, Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig, navItems } from '@/config/site';

const practiceAreaLinks = [
  'Corporate & Commercial Law',
  'Civil Litigation',
  'Real Estate & Conveyancing',
  'Family Law',
  'Employment & Labour Law',
  'Intellectual Property',
];

const socialLinks = [
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-jet text-white">
      {/* Gold top border */}
      <div className="h-px w-full bg-gold/40" />

      <div className="container-firm py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-6 flex items-center gap-2.5">
              <Scale className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <span className="font-serif text-xl font-medium tracking-wide">
                {siteConfig.firmName}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              {siteConfig.firmDescription}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest-xl text-gold">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest-xl text-gold">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreaLinks.map((pa) => (
                <li key={pa}>
                  <Link
                    to="/practice-areas"
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-gold"
                  >
                    {pa}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest-xl text-gold">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="flex gap-3 text-sm text-white/60 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex gap-3 text-sm text-white/60 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="whitespace-pre-line">{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/40">
            {siteConfig.disclaimer}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.firmName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 transition-colors hover:text-gold">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 transition-colors hover:text-gold">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
