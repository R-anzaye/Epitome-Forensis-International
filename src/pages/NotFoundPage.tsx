import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <Layout
      title="Page Not Found — Aurelius Legal"
      description="The page you are looking for could not be found."
    >
      <section className="bg-jet py-40 lg:py-48">
        <div className="container-firm text-center">
          <p className="mb-6 font-serif text-7xl text-gold sm:text-8xl">404</p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />
          <h1 className="mb-6 font-serif text-3xl text-white text-balance sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/60">
            The page you are looking for may have been moved, removed, or never existed. Let us guide you back.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/" variant="primary" size="md">
              Return Home
            </Button>
            <Button to="/contact" variant="secondary" size="md">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
