'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts';
import { FAQAccordion } from '@/components/ui';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';
import { contactFAQs } from '@/data/faq';
import { sendToTelegram, formatContactMessage } from '@/lib/telegram';
import { isValidPhone } from '@/lib/utils';
import { ArrowRight, Phone, Mail, MapPin, Check, Loader2, Shield, PhoneOff, Clock } from 'lucide-react';

const SERVICES = [
  'Business operations system',
  'Dashboards and analytics',
  'Automation and integrations',
  'Custom software or SaaS',
  'Desktop app or browser extension',
  'Cloud and hosting',
  'Trading system',
  'Licence one of your products',
  'Not sure yet',
];

const MODELS = ['Not sure, advise me', 'Fixed price for a fixed scope', 'Monthly retainer', 'Licence an existing product'];

const EMPTY = { name: '', email: '', phone: '', service: '', model: '', message: '' };

export default function ContactPage() {
  const [formData, setFormData] = useState(EMPTY);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (formData.phone && !isValidPhone(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setSubmitting(true);
    const sent = await sendToTelegram(formatContactMessage(formData));
    if (sent) {
      setSuccess(true);
    } else {
      setError('We could not send your message. Please email contact@pinecoder.in or use WhatsApp.');
    }
    setSubmitting(false);
  };

  const resetForm = () => {
    setFormData(EMPTY);
    setAgreed(false);
    setSuccess(false);
    setError('');
  };

  return (
    <MainLayout>
      <section className="border-b border-ink px-4 py-14 sm:px-8 lg:px-14 lg:py-16">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-5xl">
          Bring us the problem. We&apos;ll bring the code.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Free consultation, no obligations. Tell us what you need and we will tell you how we
          would build it, then send a written quote.
        </p>
      </section>

      <section className="border-b border-ink px-4 py-12 sm:px-8 lg:px-14">
        <div className="grid gap-px border border-ink bg-ink lg:grid-cols-5">
          <div className="bg-surface p-6 md:p-10 lg:col-span-3">
            <p className="eyebrow mb-2">Send a message</p>
            <h2 className="mb-1 text-2xl font-extrabold text-ink">We reply within 2–4 hours</h2>
            <p className="mb-6 text-sm text-ink-soft">Mon–Sat, 9 AM to 7 PM IST. WhatsApp is fastest.</p>

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name *" id="name">
                    <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="field" placeholder="Your name" autoComplete="name" />
                  </Field>
                  <Field label="Email *" id="email">
                    <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="field" placeholder="you@company.com" autoComplete="email" />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone *" id="phone">
                    <input id="phone" type="tel" required maxLength={10} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '').slice(0, 10) })} className="field" placeholder="10-digit mobile number" autoComplete="tel-national" />
                  </Field>
                  <Field label="What do you need? *" id="service">
                    <select id="service" required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="field">
                      <option value="">Select one</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="How would you like to pay?" id="model">
                  <select id="model" value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} className="field">
                    <option value="">Select one</option>
                    {MODELS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Project details (optional)" id="message">
                  <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="field resize-none" placeholder="e.g. Our dispatch team re-enters orders from WhatsApp into a spreadsheet every evening." />
                </Field>

                <label className="flex items-start gap-3 text-sm text-ink-soft">
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required className="mt-0.5 h-4 w-4 accent-gold" />
                  <span>
                    I agree to the <Link href="/terms-of-service" className="link-underline">Terms</Link> and <Link href="/privacy-policy" className="link-underline">Privacy Policy</Link>.
                  </span>
                </label>

                {error && (
                  <p role="alert" className="border border-ink bg-gold-tint px-3 py-2 text-sm text-ink">
                    {error}
                  </p>
                )}

                <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-50">
                  {submitting ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <>Send message <ArrowRight size={15} /></>}
                </button>

                <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-faint">
                  <span className="flex items-center gap-1.5"><Shield size={12} className="text-gold" /> Secure</span>
                  <span className="flex items-center gap-1.5"><PhoneOff size={12} className="text-gold" /> No spam calls</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" /> Quick response</span>
                </div>
              </form>
            ) : (
              <div className="py-16 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border-2 border-ink">
                  <Check size={26} className="text-gold" />
                </div>
                <h3 className="mb-2 text-2xl font-extrabold text-ink">Message sent</h3>
                <p className="mb-6 text-ink-soft">We&apos;ll get back to you within 2–4 hours.</p>
                <button onClick={resetForm} className="link-underline font-mono text-sm uppercase tracking-wider">
                  Send another message
                </button>
              </div>
            )}
          </div>

          <div className="space-y-px bg-band p-6 md:p-8 lg:col-span-2">
            <ContactRow href="https://wa.me/917499462967?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20software%20project" icon={<WhatsAppIcon size={18} />} title="WhatsApp" sub="Fastest response" external />
            <ContactRow href="tel:+917499462967" icon={<Phone size={18} />} title="+91 74994 62967" sub="Mon–Sat, 9 AM – 7 PM" mono />
            <ContactRow href="mailto:contact@pinecoder.in" icon={<Mail size={18} />} title="contact@pinecoder.in" sub="Replies within 2–4 hours" />
            <div className="!mt-4 border border-ink bg-surface p-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                <div>
                  <div className="font-extrabold text-ink">Nagpur, Maharashtra</div>
                  <div className="font-mono text-xs text-ink-faint">India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-band px-4 py-16 sm:px-8 lg:px-14">
        <div className="max-w-3xl">
          <h2 className="mb-8 text-3xl font-extrabold text-ink md:text-4xl">Common questions</h2>
          <FAQAccordion items={contactFAQs} />
        </div>
      </section>
    </MainLayout>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div className="block">
      <label htmlFor={id} className="eyebrow mb-2 block !text-ink-soft">{label}</label>
      {children}
    </div>
  );
}

function ContactRow({
  href, icon, title, sub, mono, external,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  mono?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-4 border border-ink bg-surface p-4 transition-colors hover:bg-paper"
    >
      <span className="text-gold">{icon}</span>
      <span>
        <span className={`block font-extrabold text-ink ${mono ? 'font-mono' : ''}`}>{title}</span>
        <span className="block font-mono text-xs text-ink-faint">{sub}</span>
      </span>
    </a>
  );
}
