export const siteConfig = {
  firmName: 'Aurelius Legal',
  firmTagline: 'Trusted Counsel. Strategic Solutions. Lasting Impact.',
  firmDescription:
    'Aurelius Legal is a professional law firm committed to protecting our clients\u2019 interests through strategic, ethical, and results-oriented legal guidance.',
  contact: {
    address: '1st Floor, Riverside Park, Riverside Drive, Nairobi, Kenya',
    phone: '+254 700 000 000',
    email: 'enquiries@aureliuslegal.co.ke',
    hours: 'Monday \u2013 Friday: 8:30 AM \u2013 5:30 PM\nSaturday: 9:00 AM \u2013 1:00 PM\nSunday: Closed',
  },
  social: {
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://www.twitter.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  disclaimer:
    'The content of this website is for general informational purposes only and does not constitute legal advice. Viewing this website or contacting us through it does not, by itself, establish an advocate-client relationship.',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.503741018377!2d36.78!3d-1.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTUnMzYuMCJTIDM2wrA0NycxMi4wIkU!5e0!3m2!1sen!2ske!4v1700000000000',
};

export type SiteConfig = typeof siteConfig;

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Practice Areas', path: '/practice-areas' },
  { label: 'Our Team', path: '/team' },
  { label: 'Insights & Resources', path: '/insights' },
  { label: 'Contact Us', path: '/contact' },
];
