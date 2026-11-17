
import {
  Scale,
  FileText,
  Handshake,
} from 'lucide-react';

import { Layout } from '@/components/layout/Layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';

// Static Hero Content
const heroSlide = {
  eyebrow: 'About the Firm',
  title: (
    <>
      Our Firm. Our Principles.
      <br />
      Your Interests.
    </>
  ),
  description: `${siteConfig.firmName} was founded on a simple belief: that exceptional legal service should be accessible, principled, and tailored to the real needs of each client.`,
  image:
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=85',
};

// Approach Areas
const approachAreas = [
  {
    icon: Handshake,
    title: 'Negotiation',
    description:
      'We seek commercially sensible outcomes through skilled negotiation, preserving relationships wherever possible.',
  },
  {
    icon: Scale,
    title: 'Dispute Resolution',
    description:
      'When disputes arise, we pursue resolution through mediation, arbitration, or litigation — whichever serves your interests best.',
  },
  {
    icon: FileText,
    title: 'Legal Representation',
    description:
      'We provide robust representation in courts and tribunals, presenting your case with precision and authority.',
  },
];

export function AboutPage() {
  return (
    <Layout
      title="About Us — Epitome Forensis International"
      description="Learn about Epitome Forensis International's history, philosophy, mission, and values. A professional law firm committed to integrity, confidentiality, and client-focused service."
    >

      {/* HERO SECTION - SINGLE STATIC IMAGE */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-jet lg:min-h-[780px]">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroSlide.image}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-jet/65" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-jet/90 via-jet/65 to-jet/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-jet/70 via-transparent to-jet/20" />

        {/* Hero Content */}
        <div className="container-firm relative z-10 w-full py-32 lg:py-40">

          <div className="max-w-4xl animate-fade-up">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />

              <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                {heroSlide.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl leading-[1.1] text-white text-balance sm:text-5xl lg:text-7xl">
              {heroSlide.title}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {heroSlide.description}
            </p>

          </div>
        </div>
      </section>

      {/* FIRM HISTORY & PHILOSOPHY */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

            <div>
              <Eyebrow>Our Story</Eyebrow>

              <h2 className="mb-8 mt-4 font-serif text-3xl leading-tight text-jet sm:text-4xl text-balance">
                A foundation of principle and professional rigour.
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-jet/70">
                <p>
                  {siteConfig.firmDescription} From our earliest days, we have
                  sought to build a practice defined not by size, but by the
                  quality of our counsel and the trust we earn from our clients.
                </p>

                <p>
                  Our philosophy is straightforward: we listen carefully, we
                  think strategically, and we act with integrity. We believe
                  that legal problems are rarely just legal — they carry
                  commercial, personal, and reputational dimensions that demand
                  a holistic approach.
                </p>

                <p>
                  [Add firm-specific history, founding date, and milestones
                  here once verified.]
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/35870124/pexels-photo-35870124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Classical legal architecture with grand columns"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-gold/40 sm:block" />
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            <div className="border-l-2 border-gold pl-8">
              <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest-xl text-gold">
                Mission
              </h3>

              <p className="font-serif text-2xl leading-relaxed text-jet text-balance">
                To provide our clients with clear, strategic, and ethical legal
                counsel that protects their interests and advances their
                objectives.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-8">
              <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest-xl text-gold">
                Vision
              </h3>

              <p className="font-serif text-2xl leading-relaxed text-jet text-balance">
                To be a law firm recognised for the quality of its counsel,
                the integrity of its practice, and the lasting trust it builds
                with every client.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* APPROACH TO REPRESENTATION */}
      <section className="bg-jet py-24 lg:py-32">
        <div className="container-firm">

          <SectionHeading
            eyebrow="Our Approach"
            title="Negotiation, Resolution, and Representation"
            align="center"
            variant="light"
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {approachAreas.map((area, index) => (
              <div
                key={area.title}
                tabIndex={0}
                className="group relative isolate min-h-[350px] overflow-hidden border border-white/10 bg-white/[0.02] p-10 transition-all duration-500 ease-out hover:border-gold/50 hover:bg-white/[0.06] focus-visible:border-gold/50 focus-visible:outline-none"
              >

                {/* Animated Gold Background Accent */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/0 blur-3xl transition-all duration-700 group-hover:bg-gold/10 group-focus-visible:bg-gold/10" />

                {/* Top Gold Line */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gold transition-all duration-700 ease-out group-hover:w-full group-focus-visible:w-full" />

                {/* Background Number */}
                <span className="absolute right-8 top-5 select-none font-serif text-7xl text-white/[0.035] transition-all duration-500 group-hover:text-gold/[0.12]">
                  0{index + 1}
                </span>

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-col">

                  {/* Icon */}
                  <div className="mb-10 flex h-16 w-16 items-center justify-center border border-gold/30 text-gold transition-all duration-500 group-hover:rotate-[-6deg] group-hover:border-gold group-hover:bg-gold group-hover:text-jet group-focus-visible:border-gold group-focus-visible:bg-gold group-focus-visible:text-jet">

                    <area.icon
                      className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.5}
                    />

                  </div>

                  {/* Title */}
                  <h3 className="mb-5 font-serif text-2xl text-white transition-transform duration-500 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
                    {area.title}
                  </h3>

                  {/* Gold Divider */}
                  <div className="mb-5 h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-20" />

                  {/* Description */}
                  <p className="max-h-40 text-sm leading-relaxed text-white/60 opacity-100 transition-all duration-500 md:max-h-0 md:translate-y-4 md:overflow-hidden md:opacity-0 md:group-hover:max-h-40 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:max-h-40 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                    {area.description}
                  </p>

                  {/* Plus Icon */}
                  <span className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center border border-white/20 text-2xl font-light text-white/60 transition-all duration-500 group-hover:rotate-45 group-hover:border-gold group-hover:bg-gold group-hover:text-jet group-focus-visible:rotate-45 group-focus-visible:border-gold group-focus-visible:bg-gold group-focus-visible:text-jet">
                    +
                  </span>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </Layout>
  );
}
