import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/ui/CTASection';
import { PracticeAreaCard } from '@/components/cards/PracticeAreaCard';
import { practiceAreas } from '@/data/practiceAreas';

export function PracticeAreasPage() {
  return (
    <Layout
      title="Practice Areas — Aurelius Legal"
      description="Explore Aurelius Legal's comprehensive practice areas, from corporate and commercial law to family law, intellectual property, and regulatory compliance."
    >
      {/* Hero */}
      <section className="bg-jet py-32 lg:py-40">
        <div className="container-firm">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 animate-fade-up">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                Our Services
              </span>
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-white text-balance animate-fade-up animate-delay-100 sm:text-5xl lg:text-6xl">
              Comprehensive Legal Services<br />
              Across Every Key Practice Area
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 animate-fade-up animate-delay-200">
              We offer a full range of legal services designed to meet the needs of individuals, businesses, and organisations. Each practice area is led by experienced professionals committed to delivering strategic, practical advice.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="What We Do"
            title="Explore Our Areas of Practice"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <PracticeAreaCard
                key={area.slug}
                area={area}
                variant={i % 2 === 0 ? 'light' : 'off-white'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Overviews */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="Service Details"
            title="A Closer Look at How We Help"
            align="center"
            className="mb-16"
          />
          <div className="space-y-px">
            {practiceAreas.map((area, i) => (
              <div
                key={area.slug}
                className={`grid grid-cols-1 gap-12 py-16 lg:grid-cols-2 lg:items-center ${
                  i !== practiceAreas.length - 1 ? 'border-b border-jet/8' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center border border-gold/30 text-gold">
                      <area.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                      {area.title}
                    </span>
                  </div>
                  <h3 className="mb-6 font-serif text-2xl leading-tight text-jet sm:text-3xl text-balance">
                    {area.title}
                  </h3>
                  <p className="mb-8 text-base leading-relaxed text-jet/70">{area.description}</p>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-jet/50">
                        Typical Issues
                      </h4>
                      <ul className="space-y-2">
                        {area.issues.map((issue) => (
                          <li key={issue} className="flex items-start gap-2 text-sm text-jet/60">
                            <span className="mt-1.5 h-1 w-1 shrink-0 bg-gold" />
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-jet/50">
                        Who We Help
                      </h4>
                      <ul className="space-y-2">
                        {area.clients.map((client) => (
                          <li key={client} className="flex items-start gap-2 text-sm text-jet/60">
                            <span className="mt-1.5 h-1 w-1 shrink-0 bg-gold" />
                            <span>{client}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have a Legal Matter to Discuss?"
        description="Reach out to arrange a confidential consultation. Our team will assess your situation and guide you on the best course of action."
      />
    </Layout>
  );
}
