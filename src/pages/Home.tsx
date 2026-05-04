import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, User } from 'lucide-react';
import { stats, contact } from '../data/portfolio';

export const Home: React.FC = () => {
  const [profileImgError, setProfileImgError] = useState(false);

  const handleSmoothScroll = () => {
    const element = document.querySelector('#stats-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-void bg-grid text-white">
      {/* Hero — full viewport */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-accent text-sm md:text-base tracking-widest uppercase mb-6"
          >
            Hi There!
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="text-white">Discover </span>
            <span className="text-accent">My Space!</span>
          </motion.h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full p-[3px] bg-gradient-to-br from-accent to-accent/40 shadow-glow ring-2 ring-accent/20">
              <div className="w-full h-full rounded-full bg-surface overflow-hidden flex items-center justify-center border-2 border-void">
                {!profileImgError ? (
                  <img
                    src="/profile.JPG"
                    alt="Oheneba Ntim"
                    className="w-full h-full object-cover object-[42%_35%]"
                    onError={() => setProfileImgError(true)}
                    fetchPriority="high"
                  />
                ) : (
                  <User className="w-16 h-16 text-accent" />
                )}
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-2"
          >
            Oheneba Kwaku <span className="text-accent">Tawiah Ntim</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-400 font-mono text-sm md:text-base mb-12"
          >
            KNUST · Full-Stack · IoT · Robotics
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-void font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-glow-sm font-mono text-sm"
            >
              <Mail className="w-5 h-5" />
              Contact me
            </Link>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border hover:border-accent/50 text-gray-400 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/KT-Devv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border hover:border-accent/50 text-gray-400 hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleSmoothScroll}
            className="inline-flex flex-col items-center gap-1 mt-20 text-gray-500 hover:text-accent transition-colors font-mono text-sm cursor-pointer"
          >
            <span>Explore more</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Stats bar — impact numbers */}
      <section id="stats-section" className="py-16 px-6 border-t border-border bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-gray-500 font-mono text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center section-title"
          >
            Explore My Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'About Me', description: 'Learn my story and passion', path: '/about', number: '01' },
              { title: 'Services', description: 'What I can offer you', path: '/services', number: '02' },
              { title: 'Projects', description: 'Featured work & portfolio', path: '/projects', number: '04' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-surface/60 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 h-full"
                >
                  <p className="text-accent/40 font-mono text-lg mb-2">{item.number}</p>
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
