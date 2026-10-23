import { Scale, Eye, Shield, Handshake, FileText, Users, Award, Globe } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/ui/CTASection';
import { siteConfig } from '@/config/site';

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We act with honesty and transparency, giving you advice you can trust even when the truth is difficult.',
  },
  {
    icon: Scale,
    title: 'Professionalism',
    description: 'We hold ourselves to the highest standards of legal practice, ensuring every matter is handled with rigour and care.',
  },
  {
    icon: Eye,
    title: 'Confidentiality',
    description: 'We treat your information with absolute discretion, safeguarding your privacy at every stage of our work.',
  },
  {
    icon: Users,
    title: 'Client Relationships',
    description: 'We build lasting relationships based on trust, clear communication, and a genuine commitment to your interests.',
  },
];

const approachAreas = [
  {
    icon: Handshake,
    title: 'Negotiation',
    description: 'We seek commercially sensible outcomes through skilled negotiation, preserving relationships wherever possible.',
  },
  {
    icon: Scale,
    title: 'Dispute Resolution',
    description: 'When disputes arise, we pursue resolution through mediation, arbitration, or litigation \u2014 whichever serves your interests best.',
  },
  {
    icon: FileText,
    title: 'Legal Representation',
    description: 'We provide robust representation in courts and tribunals, presenting your case with precision and authority.',
  },
];

const achievements = [
  { label: 'Year Established', value: '[Year to be verified]' },
  { label: 'Practice Areas', value: '[Number to be verified]' },
  { label: 'Team Members', value: '[Number to be verified]' },
  { label: 'Jurisdictions', value: '[To be verified]' },
];

export function AboutPage() {
  return (
    <Layout
      title="About Us — Aurelius Legal"
      description="Learn about Aurelius Legal's history, philosophy, mission, and values. A professional law firm committed to integrity, confidentiality, and client-focused service."
    >
      {/* Hero */}
      <section className="bg-jet py-32 lg:py-40">
        <div className="container-firm">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 animate-fade-up">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                About the Firm
              </span>
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-white text-balance animate-fade-up animate-delay-100 sm:text-5xl lg:text-6xl">
              Our Firm. Our Principles.<br />
              Your Interests.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 animate-fade-up animate-delay-200">
              {siteConfig.firmName} was founded on a simple belief: that exceptional legal service should be accessible, principled, and tailored to the real needs of each client.
            </p>
          </div>
        </div>
      </section>

      {/* Firm History & Philosophy */}
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
                  {siteConfig.firmDescription} From our earliest days, we have sought to build a practice defined not by size, but by the quality of our counsel and the trust we earn from our clients.
                </p>
                <p>
                  Our philosophy is straightforward: we listen carefully, we think strategically, and we act with integrity. We believe that legal problems are rarely just legal \u2014 they carry commercial, personal, and reputational dimensions that demand a holistic approach.
                </p>
                <p>
                  [Add firm-specific history, founding date, and milestones here once verified.]
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

      {/* Mission & Vision */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="border-l-2 border-gold pl-8">
              <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest-xl text-gold">Mission</h3>
              <p className="font-serif text-2xl leading-relaxed text-jet text-balance">
                To provide our clients with clear, strategic, and ethical legal counsel that protects their interests and advances their objectives.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-8">
              <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest-xl text-gold">Vision</h3>
              <p className="font-serif text-2xl leading-relaxed text-jet text-balance">
                To be a law firm recognised for the quality of its counsel, the integrity of its practice, and the lasting trust it builds with every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="Our Values"
            title="The Principles That Guide Everything We Do"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div key={value.title} className="group text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-gold/30 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-jet">
                  <value.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 font-serif text-xl text-jet">{value.title}</h3>
                <p className="text-sm leading-relaxed text-jet/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach to Representation */}
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
            {approachAreas.map((area) => (
              <div key={area.title} className="border border-white/10 p-10 transition-colors duration-500 hover:border-gold/30">
                <div className="mb-6 flex h-14 w-14 items-center justify-center border border-gold/30 text-gold">
                  <area.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 font-serif text-xl text-white">{area.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Image Section */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <Eyebrow>Our Environment</Eyebrow>
              <h2 className="mb-8 mt-4 font-serif text-3xl leading-tight text-jet sm:text-4xl text-balance">
                A setting built for focused, confidential work.
              </h2>
              <p className="mb-6 text-base leading-relaxed text-jet/70">
                Our offices are designed to provide a professional and confidential environment where clients can discuss their matters with confidence. We combine modern facilities with a considered approach to every meeting, consultation, and negotiation.
              </p>
              <p className="text-base leading-relaxed text-jet/70">
                [Add office-specific details, locations, and facilities once verified.]
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/37726703/pexels-photo-37726703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Legal library with shelves of books"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements / Experience */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="Our Experience"
            title="A Record Built Over Time"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-2 gap-px bg-jet/8 lg:grid-cols-4">
            {achievements.map((a) => (
              <div key={a.label} className="bg-white p-10 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 flex items-center justify-center border border-gold/30 text-gold">
                    <Award className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="mb-2 font-serif text-2xl text-gold">{a.value}</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-jet/50">{a.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-jet/40">
            Figures shown are placeholders. Replace with verified information before publication.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Discover How We Can Help You"
        description="Learn more about our practice areas, or reach out to arrange a confidential consultation with our team."
      />
    </Layout>
  );
}
