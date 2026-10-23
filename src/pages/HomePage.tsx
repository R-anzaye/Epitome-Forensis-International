import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Eye, Scale, Users, Quote, FileText, Briefcase } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CTASection } from '@/components/ui/CTASection';
import { PracticeAreaCard } from '@/components/cards/PracticeAreaCard';
import { TeamCard } from '@/components/cards/TeamCard';
import { practiceAreas } from '@/data/practiceAreas';
import { teamMembers } from '@/data/team';
import { siteConfig } from '@/config/site';

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in every matter we handle, ensuring our advice is honest and our representation is principled.',
  },
  {
    icon: Scale,
    title: 'Strategic Thinking',
    description: 'We approach each case with a clear strategy, anticipating challenges and identifying the most effective path to your desired outcome.',
  },
  {
    icon: Eye,
    title: 'Confidentiality',
    description: 'Your matters are handled with absolute discretion. We protect your privacy and sensitive information at every stage of our engagement.',
  },
  {
    icon: Users,
    title: 'Client-Focused Service',
    description: 'We take the time to understand your objectives, communicate clearly, and tailor our legal solutions to your specific needs and circumstances.',
  },
];

const approachSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a confidential consultation to understand your situation, objectives, and the legal issues at stake.',
  },
  {
    number: '02',
    title: 'Strategic Assessment',
    description: 'Our team assesses the legal landscape, identifies risks and opportunities, and develops a tailored strategy.',
  },
  {
    number: '03',
    title: 'Diligent Execution',
    description: 'We execute the agreed strategy with precision, keeping you informed at every stage and adjusting as circumstances evolve.',
  },
  {
    number: '04',
    title: 'Lasting Resolution',
    description: 'We work towards outcomes that not only address the immediate issue but also protect your long-term interests.',
  },
];

const sampleTestimonials = [
  {
    quote: '[Sample testimonial placeholder. Replace with a genuine, verified client testimonial once available.]',
    author: '[Client name]',
    role: '[Client role/company]',
  },
  {
    quote: '[Sample testimonial placeholder. Replace with a genuine, verified client testimonial once available.]',
    author: '[Client name]',
    role: '[Client role/company]',
  },
];

export function HomePage() {
  return (
    <Layout
      title="Aurelius Legal — Trusted Counsel. Strategic Solutions."
      description="Aurelius Legal is a professional law firm committed to protecting client interests through strategic, ethical, and results-oriented legal guidance."
    >
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-jet">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/37429756/pexels-photo-37429756.png?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Elegant modern law office interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-jet/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/40 to-jet/30" />
        </div>

        <div className="relative container-firm flex min-h-[90vh] flex-col justify-center pt-20">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 animate-fade-up">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                Legal Excellence. Personal Commitment.
              </span>
            </div>
            <h1 className="mb-8 font-serif text-4xl leading-[1.1] text-white text-balance animate-fade-up animate-delay-100 sm:text-5xl lg:text-6xl">
              Trusted Counsel.<br />
              Strategic Solutions.<br />
              Lasting Impact.
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/70 animate-fade-up animate-delay-200">
              {siteConfig.firmName} is committed to protecting our clients\u2019 interests through professional, strategic, and ethical legal guidance \u2014 delivered with the discretion and rigour your matter deserves.
            </p>
            <div className="flex flex-col gap-4 animate-fade-up animate-delay-300 sm:flex-row">
              <Button to="/contact" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button to="/practice-areas" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-500">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-[10px] font-semibold uppercase tracking-widest-xl">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Firm Introduction */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Welcome to {siteConfig.firmName}</Eyebrow>
              <h2 className="mb-8 mt-4 font-serif text-3xl leading-tight text-jet sm:text-4xl lg:text-[2.75rem] text-balance">
                A firm built on principle, guided by experience.
              </h2>
              <p className="mb-6 text-base leading-relaxed text-jet/70">
                {siteConfig.firmDescription} We combine deep legal knowledge with a practical, commercially aware approach to help our clients navigate complex legal challenges with confidence.
              </p>
              <p className="mb-10 text-base leading-relaxed text-jet/70">
                From corporate advisory to dispute resolution, our team brings diligence, clarity, and strategic insight to every matter we handle.
              </p>
              <Button to="/about" variant="light-outline" size="md">
                Learn About Our Firm
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7841457/pexels-photo-7841457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Legal professionals in discussion at a law office"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 border border-gold/40 sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="Our Services"
            title="Practice Areas Tailored to Your Needs"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.slice(0, 6).map((area) => (
              <PracticeAreaCard key={area.slug} area={area} variant="light" />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/practice-areas" variant="light-outline" size="lg">
              View All Practice Areas
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-jet py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Principles That Define Our Practice"
            align="center"
            variant="light"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="group p-8 text-center transition-colors duration-500 hover:bg-charcoal">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-gold/30 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-jet">
                  <item.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 font-serif text-xl text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Team */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading
              eyebrow="Our People"
              title="Meet the Professionals Behind Your Representation"
            />
            <Button to="/team" variant="light-outline" size="md" className="shrink-0">
              View Full Team
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.slice(0, 4).map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Handle Your Matter"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-serif text-3xl text-gold">{step.number}</span>
                  <span className="h-px flex-1 bg-gold/30" />
                </div>
                <h3 className="mb-4 font-serif text-xl text-jet">{step.title}</h3>
                <p className="text-sm leading-relaxed text-jet/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-jet py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="Client Perspectives"
            title="What Our Clients Say"
            align="center"
            variant="light"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {sampleTestimonials.map((t, i) => (
              <div key={i} className="border border-white/10 p-10">
                <Quote className="mb-6 h-10 w-10 text-gold" strokeWidth={1} />
                <blockquote className="mb-8 font-serif text-xl leading-relaxed text-white/80 italic">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.author}</p>
                    <p className="text-sm text-white/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-white/40">
            The above testimonials are sample content for demonstration purposes. They will be replaced with verified client testimonials once available.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
}
