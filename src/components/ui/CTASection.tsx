import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = 'Begin a Confidential Conversation',
  description = 'Whether you are navigating a complex dispute, structuring a transaction, or planning for the future, our team is ready to provide the counsel you need.',
}: CTASectionProps) {
  return (
    <section className="bg-jet py-24 lg:py-32">
      <div className="container-firm">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
              Book a Consultation
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <SectionHeading
            title={title}
            align="center"
            variant="light"
            className="mb-6"
          />
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact" variant="primary" size="lg">
              Book a Consultation
            </Button>
            <Button to="/practice-areas" variant="secondary" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
