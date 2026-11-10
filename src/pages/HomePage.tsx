import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PracticeAreaCard } from '@/components/cards/PracticeAreaCard';
import { practiceAreas } from '@/data/practiceAreas';
import { siteConfig } from '@/config/site';

export function HomePage() {
  return (
    <Layout
      title="Epitome Forensis International — Trusted Counsel. Strategic Solutions."
      description="Epitome Forensis International is a professional law firm committed to protecting client interests through strategic, ethical, and results-oriented legal guidance."
    >
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-jet">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7841457/pexels-photo-7841457.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Elegant modern law office interior"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-jet/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-jet/90 via-jet/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container-firm flex min-h-screen flex-col justify-center pt-28 pb-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3 animate-fade-up">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                Legal Excellence · Personal Commitment
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-serif text-5xl leading-[1.08] text-white text-balance animate-fade-up animate-delay-100 sm:text-6xl lg:text-7xl">
              Trusted Counsel.<br />
              <span className="text-gold">Strategic</span> Solutions.<br />
              Lasting Impact.
            </h1>

            {/* Sub-headline */}
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/65 animate-fade-up animate-delay-200">
              {siteConfig.firmName} is committed to protecting our clients&apos; interests through
              professional, strategic, and ethical legal guidance — delivered with the discretion
              and rigour your matter deserves.
            </p>
          </div>
        </div>

      </section>

      {/* ── PRACTICE AREAS ────────────────────────────────────────────── */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="Our Services"
            title="Practice Areas Tailored to Your Needs"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} variant="light" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
