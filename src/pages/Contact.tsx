import React, { useEffect, useRef, useState } from 'react';
import Mail from 'lucide-react/dist/esm/icons/mail.js';
import MapPin from 'lucide-react/dist/esm/icons/map-pin.js';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin.js';
import { contact } from '../data/portfolio';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';
import { SectionHeading } from '@/components/ui/section-heading';

const fieldClass =
  'w-full bg-void border border-border rounded-xl px-5 py-4 text-base focus:outline-none focus:border-accent focus:shadow-glow-sm transition-all duration-200 placeholder:text-gray-600';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'opening'>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.name ? `Message from ${formData.name} (${formData.email})` : `Message from portfolio (${formData.email || 'no email'})`
    );
    const body = encodeURIComponent(formData.message || '(No message provided)');
    const mailto = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setFormStatus('opening');
    window.location.href = mailto;
    setFormData({ name: '', email: '', message: '' });
    resetTimer.current = setTimeout(() => setFormStatus('idle'), 1500);
  };

  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-5xl mx-auto">
          <SectionHeading number="07" title="Get In Touch" as="h1" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <BlurFade direction="right" offset={24} className="space-y-8">
              <h2 className="text-xl font-semibold font-mono text-accent">Let's Connect</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Interested in opportunities, collaboration, or connecting with fellow developers and
                tech enthusiasts. Feel free to reach out!
              </p>
              <div className="space-y-5">
                <div className="group flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0 transition-transform duration-200 group-hover:scale-125" />
                  <a href={`mailto:${contact.email}`} className="font-mono text-gray-400 hover:text-accent transition-colors break-all">
                    {contact.email}
                  </a>
                </div>
                <div className="group flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 transition-transform duration-200 group-hover:scale-125" />
                  <span className="font-mono text-gray-400">{contact.location}</span>
                </div>
                <div className="group flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-accent shrink-0 transition-transform duration-200 group-hover:scale-125" />
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-gray-400 hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </BlurFade>
            <BlurFade direction="left" offset={24} delay={0.1}>
              <div className="relative bg-surface/60 backdrop-blur-sm p-8 rounded-2xl border border-border overflow-hidden">
                <h2 className="text-lg font-semibold font-mono text-gray-400 mb-6">Send a Message</h2>
                <form className="space-y-5" onSubmit={handleContactSubmit}>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    aria-label="Your name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className={fieldClass}
                  />
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    aria-label="Your email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className={fieldClass}
                  />
                  <textarea
                    name="message"
                    aria-label="Your message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className={`${fieldClass} resize-none`}
                  />
                  <button
                    type="submit"
                    disabled={formStatus === 'opening'}
                    className="w-full bg-accent hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed text-void font-semibold py-4 rounded-xl font-mono text-base transition-all duration-200 shadow-glow-sm hover:-translate-y-0.5 active:translate-y-px"
                  >
                    {formStatus === 'opening' ? 'Opening email…' : 'Send Message'}
                  </button>
                </form>
                <BorderBeam size={120} duration={8} />
                <BorderBeam size={120} duration={8} delay={4} colorFrom="#ffffff" colorTo="#00d4aa" />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
};
