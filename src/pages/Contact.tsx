import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { contact } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'opening'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.name ? `Message from ${formData.name} (${formData.email})` : `Message from portfolio (${formData.email || 'no email'})`
    );
    const body = encodeURIComponent(formData.message || '(No message provided)');
    const mailto = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setFormStatus('opening');
    window.open(mailto);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 1500);
  };

  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-accent/20">07</h1>
            <h1 className="text-2xl md:text-3xl font-bold section-title">Get In Touch</h1>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-xl font-semibold font-mono text-accent">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Interested in opportunities, collaboration, or connecting with fellow developers and
                tech enthusiasts. Feel free to reach out!
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href={`mailto:${contact.email}`} className="font-mono text-gray-400 hover:text-accent transition-colors break-all">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-mono text-gray-400">{contact.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-accent shrink-0" />
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface/60 backdrop-blur-sm p-8 rounded-2xl border border-border"
            >
              <h3 className="text-lg font-semibold font-mono text-gray-400 mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-void border border-border rounded-xl px-5 py-4 text-base focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-void border border-border rounded-xl px-5 py-4 text-base focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-void border border-border rounded-xl px-5 py-4 text-base focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-gray-600"
                />
                <button
                  type="submit"
                  disabled={formStatus === 'opening'}
                  className="w-full bg-accent hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed text-void font-semibold py-4 rounded-xl font-mono text-base transition-colors shadow-glow-sm"
                >
                  {formStatus === 'opening' ? 'Opening email…' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
