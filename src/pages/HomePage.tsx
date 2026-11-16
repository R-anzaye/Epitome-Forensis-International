
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { practiceAreas } from '@/data/practiceAreas';
import { siteConfig } from '@/config/site';

const heroSlides = [
  {
    eyebrow: 'Legal Excellence · Personal Commitment',
    title: (
      <>
        Trusted Counsel.
        <br />
        <span className="text-gold">Strategic</span> Solutions.
        <br />
        Lasting Impact.
      </>
    ),
    description: `${siteConfig.firmName} is committed to protecting our clients' interests through professional, strategic, and ethical legal guidance — delivered with the discretion and rigour your matter deserves.`,
    image:
      'https://images.pexels.com/photos/7841457/pexels-photo-7841457.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
    alt: 'Elegant modern law office interior',
  },
  {
    eyebrow: 'Our Commitment · Your Interests',
    title: (
      <>
        Protecting Rights.
        <br />
        <span className="text-gold">Advancing</span> Interests.
        <br />
        Delivering Clarity.
      </>
    ),
    description:
      'We provide thoughtful legal guidance and dedicated representation, helping individuals and organisations navigate complex legal matters with confidence.',
    image:
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=2000&q=85',
    alt: 'Classical courthouse architecture',
  },
  {
    eyebrow: 'Professional Integrity · Strategic Thinking',
    title: (
      <>
        Clear Advice.
        <br />
        <span className="text-gold">Sound</span> Judgment.
        <br />
        Strong Representation.
      </>
    ),
    description:
      'Every legal matter deserves careful consideration. Our approach combines professional rigour, strategic thinking, and a commitment to ethical legal practice.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=85',
    alt: 'Legal books and professional legal setting',
  },
  {
    eyebrow: 'Dedicated Representation · Lasting Trust',
    title: (
      <>
        Your Challenges.
        <br />
        <span className="text-gold">Our</span> Commitment.
        <br />
        Your Future.
      </>
    ),
    description:
      'We believe effective legal representation begins with understanding our clients. We work to develop practical legal strategies aligned with their needs and objectives.',
    image:
      'https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
    alt: 'Professional legal consultation',
  },
];

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatic slide rotation
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  // Previous slide
  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length
    );
  };

  // Next slide
  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <Layout
      title="Epitome Forensis International — Trusted Counsel. Strategic Solutions."
      description="Epitome Forensis International is a professional law firm committed to protecting client interests through strategic, ethical, and results-oriented legal guidance."
    >
      {/* HERO SECTION - FOUR SLIDE CAROUSEL */}
      <section className="relative min-h-screen overflow-hidden bg-jet">

        {/* Background Images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.eyebrow}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            >
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-jet/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-jet/90 via-jet/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-jet/20" />

        {/* Hero Content */}
        <div className="relative container-firm flex min-h-screen flex-col justify-center pt-28 pb-32">

          <div
            key={activeSlide}
            className="max-w-3xl animate-fade-up"
            aria-live="polite"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                {heroSlides[activeSlide].eyebrow}
              </span>
            </div>

            <h1 className="mb-6 font-serif text-4xl leading-[1.08] text-white text-balance sm:text-5xl lg:text-7xl">
              {heroSlides[activeSlide].title}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {heroSlides[activeSlide].description}
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="mt-16 flex items-center gap-8">

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-all duration-300 hover:border-gold hover:bg-gold hover:text-jet"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-all duration-300 hover:border-gold hover:bg-gold hover:text-jet"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeSlide === index ? 'true' : undefined}
                  className={`h-1 transition-all duration-500 ${
                    activeSlide === index
                      ? 'w-12 bg-gold'
                      : 'w-6 bg-white/40 hover:bg-white'
                  }`}
                />
              ))}
            </div>

            <span className="ml-auto font-sans text-xs tracking-widest text-white/70">
              0{activeSlide + 1} / 0{heroSlides.length}
            </span>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
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
              <a
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group relative isolate block h-[360px] overflow-hidden bg-jet focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              >

                {/* Background Image */}
                <img
                  src={area.image}
                  alt={area.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                />

                {/* Initial Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-jet/90 via-jet/20 to-jet/10 transition-all duration-500 group-hover:from-jet/95 group-hover:via-jet/80 group-hover:to-jet/70 group-focus-visible:from-jet/95 group-focus-visible:via-jet/80 group-focus-visible:to-jet/70" />

                {/* Gold Accent */}
                <div className="absolute left-0 top-0 h-0 w-1 bg-gold transition-all duration-500 group-hover:h-full group-focus-visible:h-full" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-8">

                  {/* Service Title */}
                  <div className="pr-12 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-focus-visible:-translate-y-2">

                    <span className="mb-3 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-16" />

                    <h3 className="font-serif text-2xl leading-snug text-white">
                      {area.title}
                    </h3>

                  </div>

                  {/* Service Description */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:mt-4 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100">
                    <div className="overflow-hidden">
                      <p className="max-w-sm text-sm leading-relaxed text-white/80">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  {/* Plus Icon / Close Effect */}
                  <span className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center border border-white/50 text-3xl font-light text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-gold group-hover:bg-gold group-hover:text-jet group-focus-visible:rotate-45 group-focus-visible:border-gold group-focus-visible:bg-gold group-focus-visible:text-jet">
                    +
                  </span>

                </div>

              </a>
            ))}

          </div>
        </div>
      </section>
    </Layout>
  );
}
