import { Users, Handshake, Linkedin, GraduationCap, Briefcase } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/ui/CTASection';
import { TeamCard } from '@/components/cards/TeamCard';
import { teamMembers, teamTiers, type TeamMember } from '@/data/team';

const tierLabels: Record<string, string> = {
  'Managing Partner': 'Managing Partner',
  'Senior Associates': 'Senior Associates',
  'Associates': 'Associates',
  'Support': 'Professional Support',
};

export function TeamPage() {
  const membersByTier = (tier: TeamMember['tier']) =>
    teamMembers.filter((m) => m.tier === tier);

  return (
    <Layout
      title="Our Team — Epitome Forensis International"
      description="Meet the legal professionals at Epitome Forensis International. Our managing partner, senior associates, associates, and support staff are committed to providing exceptional legal counsel."
    >
      {/* Hero */}
      <section className="bg-jet py-32 lg:py-40">
        <div className="container-firm">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 animate-fade-up">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                Our People
              </span>
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-white text-balance animate-fade-up animate-delay-100 sm:text-5xl lg:text-6xl">
              The People Behind<br />
              Your Representation
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 animate-fade-up animate-delay-200">
              Our strength lies in the experience, judgement, and dedication of our team. Each member brings a commitment to professional excellence and a genuine focus on our clients\u2019 interests.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              eyebrow="Our Team"
              title="Experienced. Principled. Dedicated."
              align="center"
              className="mb-8"
            />
            <p className="text-lg leading-relaxed text-jet/70">
              At {`Epitome Forensis International`}, we believe that great legal outcomes are the product of great people working together. Our team combines deep legal knowledge with practical, commercially aware judgement \u2014 and a commitment to building lasting client relationships.
            </p>
            <p className="mt-6 text-sm text-jet/40">
              Note: The profiles below contain placeholder information. All names, qualifications, biographies, and professional admissions must be verified before publication.
            </p>
          </div>
        </div>
      </section>

      {/* Team Profiles by Tier */}
      {teamTiers.map((tier) => {
        const members = membersByTier(tier);
        if (members.length === 0) return null;

        return (
          <section
            key={tier}
            style={{
              backgroundColor:
                tier === 'Associates' || tier === 'Support' ? '#F7F7F5' : '#FFFFFF',
            }}
          >
            <div className="container-firm py-24 lg:py-32">
              <div className="mb-12 flex items-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <h2 className="font-serif text-2xl text-jet sm:text-3xl">
                  {tierLabels[tier]}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                  <TeamCard key={member.slug} member={member} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Collaborative Approach */}
      <section className="bg-jet py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="How We Work Together"
            title="A Collaborative Approach to Every Matter"
            align="center"
            variant="light"
            className="mb-16"
          />
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-lg leading-relaxed text-white/70">
              No single lawyer has all the answers. At {`Epitome Forensis International`}, we bring together the right combination of experience and expertise for each matter, ensuring that your case benefits from the collective insight of our team.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-gold/30 text-gold">
                <Users className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 font-serif text-xl text-white">Cross-Disciplinary Insight</h3>
              <p className="text-sm leading-relaxed text-white/60">
                We draw on expertise across practice areas to address every dimension of your matter.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-gold/30 text-gold">
                <Handshake className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 font-serif text-xl text-white">Senior Involvement</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Senior practitioners remain actively involved in every matter from start to finish.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-gold/30 text-gold">
                <Briefcase className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 font-serif text-xl text-white">Clear Communication</h3>
              <p className="text-sm leading-relaxed text-white/60">
                We keep you informed at every stage, with clear advice and timely updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Meet With Our Team"
        description="Arrange a consultation with the right lawyer for your matter. We\u2019ll listen, assess, and provide clear guidance on your next steps."
      />
    </Layout>
  );
}
