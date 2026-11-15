import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Share2, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { siteConfig } from '@/config/site';

const socialLinks = [
  { url: siteConfig.social.linkedin, label: 'LinkedIn' },
  { url: siteConfig.social.whatsapp, label: 'WhatsApp' },
  { url: siteConfig.social.twitter, label: 'X' },
  { url: siteConfig.social.facebook, label: 'Facebook' },
];

const practiceAreaOptions = [
  'Corporate and Commercial Law',
  'Civil Litigation and Dispute Resolution',
  'Real Estate and Conveyancing',
  'Family Law',
  'Employment and Labour Law',
  'Intellectual Property',
  'Banking and Financial Law',
  'Estate Planning and Succession',
  'Contract Drafting and Review',
  'Regulatory and Compliance Advisory',
  'Other',
];

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  practiceArea: string;
  contactMethod: string;
  description: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  practiceArea?: string;
  contactMethod?: string;
  description?: string;
  consent?: string;
}

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  practiceArea: '',
  contactMethod: '',
  description: '',
  consent: false,
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (form.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid name.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your telephone number.';
    } else if (form.phone.trim().length < 6) {
      newErrors.phone = 'Please enter a valid telephone number.';
    }

    if (!form.practiceArea) {
      newErrors.practiceArea = 'Please select an area of legal assistance.';
    }

    if (!form.contactMethod) {
      newErrors.contactMethod = 'Please select a preferred contact method.';
    }

    if (!form.description.trim()) {
      newErrors.description = 'Please provide a brief description of your enquiry.';
    } else if (form.description.trim().length < 10) {
      newErrors.description = 'Please provide at least a brief description (10 characters or more).';
    }

    if (!form.consent) {
      newErrors.consent = 'Please confirm you have read and accept the privacy notice.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // [Backend integration required: Connect this form to a real submission service
    // (e.g., a Supabase Edge Function, email API, or form backend) before going live.
    // This is a simulated submission for demonstration purposes.]
    setTimeout(() => {
      setStatus('success');
      setForm(initialState);
    }, 1000);
  };

  const fieldBaseClass =
    'w-full border border-jet/15 bg-white px-4 py-3.5 text-sm text-jet placeholder:text-jet/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors';
  const errorFieldClass =
    'w-full border border-red-400 bg-white px-4 py-3.5 text-sm text-jet placeholder:text-jet/40 focus:border-red-400 focus:outline-none';

  return (
    <Layout
      title="Contact Us — Epitome Forensis International"
      description="Get in touch with Epitome Forensis International. Book a consultation, enquire about our legal services, or visit our office in Nairobi, Kenya."
    >
      {/* Hero */}
      <section className="bg-jet py-32 lg:py-40">
        <div className="container-firm">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 animate-fade-up">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest-xl text-gold">
                Start a Conversation
              </span>
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-white text-balance animate-fade-up animate-delay-100 sm:text-5xl lg:text-6xl">
              Let\u2019s Discuss How<br />
              We Can Help.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 animate-fade-up animate-delay-200">
              Whether you are facing a legal challenge, planning a transaction, or simply seeking advice, we are here to help. Arrange a confidential consultation and our team will respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-firm">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Eyebrow className="mb-8">Contact Information</Eyebrow>
              <h2 className="mb-10 font-serif text-3xl leading-tight text-jet sm:text-4xl text-balance">
                Reach our team directly.
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-jet/50">Office Address</h3>
                    <p className="text-sm leading-relaxed text-jet/70">{siteConfig.contact.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-jet/50">Telephone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="text-sm leading-relaxed text-jet/70 transition-colors hover:text-gold"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-jet/50">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm leading-relaxed text-jet/70 transition-colors hover:text-gold"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    <Clock className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-jet/50">Business Hours</h3>
                    <p className="text-sm leading-relaxed text-jet/70 whitespace-pre-line">{siteConfig.contact.hours}</p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    <Share2 className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-jet/50">Social Media</h3>
                    <div className="flex flex-wrap gap-2">
                      {socialLinks.map((s) => (
                        <SocialIcon
                          key={s.label}
                          url={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          style={{ width: 36, height: 36 }}
                          bgColor="transparent"
                          fgColor="rgba(10,10,10,0.5)"
                          className="social-icon-btn social-icon-btn--light"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="border border-jet/10 p-8 lg:p-12">
                <h2 className="mb-2 font-serif text-2xl text-jet sm:text-3xl">Send Us an Enquiry</h2>
                <p className="mb-8 text-sm text-jet/60">
                  Complete the form below and our team will respond within one business day.
                </p>

                {/* Privacy Notice */}
                <div className="mb-8 border border-gold/20 bg-off-white p-4">
                  <p className="text-xs leading-relaxed text-jet/60">
                    <strong className="text-jet/80">Important:</strong> Please do not submit highly sensitive or confidential information through this form. Initial enquiries should contain only a general overview of your matter. Detailed information will be handled securely once an advocate-client relationship is established.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-gold/30 text-gold">
                      <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-4 font-serif text-2xl text-jet">Enquiry Received</h3>
                    <p className="mb-8 text-sm leading-relaxed text-jet/60">
                      Thank you for reaching out. A member of our team will review your enquiry and respond within one business day. If your matter is urgent, please call us directly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                    >
                      Send Another Enquiry
                    </button>
                    <p className="mt-6 text-xs text-jet/40">
                      [Note: This is a simulated success message. Connect the form to a real backend submission service before going live.]
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-6">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-jet">
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={form.fullName}
                          onChange={handleChange}
                          className={errors.fullName ? errorFieldClass : fieldBaseClass}
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                        />
                        {errors.fullName && (
                          <p id="error-fullName" className="mt-2 flex items-center gap-2 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-jet">
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className={errors.email ? errorFieldClass : fieldBaseClass}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'error-email' : undefined}
                          />
                          {errors.email && (
                            <p id="error-email" className="mt-2 flex items-center gap-2 text-sm text-red-600">
                              <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-jet">
                            Telephone Number <span className="text-gold">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className={errors.phone ? errorFieldClass : fieldBaseClass}
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? 'error-phone' : undefined}
                          />
                          {errors.phone && (
                            <p id="error-phone" className="mt-2 flex items-center gap-2 text-sm text-red-600">
                              <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-jet">
                          Company or Organization <span className="text-jet/40">(optional)</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className={fieldBaseClass}
                        />
                      </div>

                      {/* Practice Area & Contact Method */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="practiceArea" className="mb-2 block text-sm font-medium text-jet">
                            Area of Legal Assistance <span className="text-gold">*</span>
                          </label>
                          <select
                            id="practiceArea"
                            name="practiceArea"
                            value={form.practiceArea}
                            onChange={handleChange}
                            className={errors.practiceArea ? errorFieldClass : fieldBaseClass}
                            aria-invalid={!!errors.practiceArea}
                            aria-describedby={errors.practiceArea ? 'error-practiceArea' : undefined}
                          >
                            <option value="">Please select...</option>
                            {practiceAreaOptions.map((pa) => (
                              <option key={pa} value={pa}>{pa}</option>
                            ))}
                          </select>
                          {errors.practiceArea && (
                            <p id="error-practiceArea" className="mt-2 flex items-center gap-2 text-sm text-red-600">
                              <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                              {errors.practiceArea}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contactMethod" className="mb-2 block text-sm font-medium text-jet">
                            Preferred Contact Method <span className="text-gold">*</span>
                          </label>
                          <select
                            id="contactMethod"
                            name="contactMethod"
                            value={form.contactMethod}
                            onChange={handleChange}
                            className={errors.contactMethod ? errorFieldClass : fieldBaseClass}
                            aria-invalid={!!errors.contactMethod}
                            aria-describedby={errors.contactMethod ? 'error-contactMethod' : undefined}
                          >
                            <option value="">Please select...</option>
                            <option value="Email">Email</option>
                            <option value="Phone">Phone</option>
                            <option value="In-person consultation">In-person consultation</option>
                          </select>
                          {errors.contactMethod && (
                            <p id="error-contactMethod" className="mt-2 flex items-center gap-2 text-sm text-red-600">
                              <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                              {errors.contactMethod}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label htmlFor="description" className="mb-2 block text-sm font-medium text-jet">
                          Brief Description of Your Enquiry <span className="text-gold">*</span>
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows={5}
                          value={form.description}
                          onChange={handleChange}
                          className={errors.description ? errorFieldClass : fieldBaseClass}
                          aria-invalid={!!errors.description}
                          aria-describedby={errors.description ? 'error-description' : undefined}
                          placeholder="Please provide a brief overview of your matter. Do not include sensitive or confidential details at this stage."
                        />
                        {errors.description && (
                          <p id="error-description" className="mt-2 flex items-center gap-2 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                            {errors.description}
                          </p>
                        )}
                      </div>

                      {/* Consent */}
                      <div>
                        <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
                          <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            checked={form.consent}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 shrink-0 border-jet/30 accent-gold"
                            aria-invalid={!!errors.consent}
                            aria-describedby={errors.consent ? 'error-consent' : undefined}
                          />
                          <span className="text-sm text-jet/70">
                            I have read and accept the{' '}
                            <a href="#" className="font-semibold text-gold underline">Privacy Notice</a>
                            {' '}and consent to {siteConfig.firmName} processing my personal information for the purpose of responding to my enquiry. <span className="text-gold">*</span>
                          </span>
                        </label>
                        {errors.consent && (
                          <p id="error-consent" className="mt-2 flex items-center gap-2 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                            {errors.consent}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <div>
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="inline-flex w-full items-center justify-center gap-2 bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-jet transition-all duration-300 hover:bg-[#E5C25A] disabled:opacity-50 sm:w-auto"
                        >
                          {status === 'loading' ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
                              Submitting...
                            </>
                          ) : (
                            'Submit Enquiry'
                          )}
                        </button>
                      </div>

                      {status === 'error' && submitError && (
                        <p className="flex items-center gap-2 text-sm text-red-600">
                          <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                          {submitError}
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container-firm">
          <SectionHeading
            eyebrow="Our Location"
            title="Visit Our Office"
            align="center"
            className="mb-12"
          />
          <div className="relative aspect-[16/9] overflow-hidden border border-jet/10">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.firmName} office location map`}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white pb-24">
        <div className="container-firm">
          <div className="mx-auto max-w-3xl border-l-2 border-gold/40 pl-6">
            <p className="text-sm leading-relaxed text-jet/50">
              {siteConfig.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
