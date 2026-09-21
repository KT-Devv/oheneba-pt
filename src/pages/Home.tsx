import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Github from 'lucide-react/dist/esm/icons/github.js';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin.js';
import Mail from 'lucide-react/dist/esm/icons/mail.js';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down.js';
import User from 'lucide-react/dist/esm/icons/user.js';
import { stats, contact } from '../data/portfolio';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { FlipWords } from '@/components/ui/flip-words';
import { Meteors } from '@/components/ui/meteors';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Spotlight } from '@/components/ui/spotlight';
import { StatValue } from '@/components/StatValue';

const quickLinks = [
  { title: 'About Me', description: 'Learn my story and passion', path: '/about', number: '01' },
  { title: 'Services', description: 'What I can offer you', path: '/services', number: '02' },
  { title: 'Projects', description: 'Featured work & portfolio', path: '/projects', number: '03' },
  { title: 'Education', description: 'Academic background & interests', path: '/education', number: '04' },
];

const focusAreas = ['Full-Stack', 'IoT', 'Robotics', 'STEM Education'];

export const Home: React.FC = () => {
  const [profileImgError, setProfileImgError] = useState(false);

  const handleSmoothScroll = () => {
    const element = document.querySelector('#stats-section');
    if (element) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-void bg-grid text-white">
      {/* Hero — full viewport */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <Spotlight />
        <Meteors number={12} />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <BlurFade inView={false} delay={0} className="mb-6">
            <p className="font-mono text-accent text-sm md:text-base tracking-widest uppercase">Hi There!</p>
          </BlurFade>
          <BlurFade inView={false} delay={0.1} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">Discover </span>
              <AnimatedGradientText>My Space!</AnimatedGradientText>
            </h1>
          </BlurFade>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full p-[3px] bg-gradient-to-br from-accent to-accent/40 shadow-glow ring-2 ring-accent/20"
            >
              <div className="w-full h-full rounded-full bg-surface overflow-hidden flex items-center justify-center border-2 border-void">
                {!profileImgError ? (
                  <picture>
                    <source srcSet="/images/profile.avif" type="image/avif" />
                    <source srcSet="/images/profile-800.webp" type="image/webp" />
                    <img
                      src="/profile.JPG"
                      alt="Oheneba Ntim"
                      className="w-full h-full object-cover object-[42%_35%]"
                      onError={() => setProfileImgError(true)}
                      // React 18 only forwards the lowercase attribute (and its types don't know it yet)
                      {...{ fetchpriority: 'high' }}
                    />
                  </picture>
                ) : (
                  <User className="w-16 h-16 text-accent" />
                )}
              </div>
              <BorderBeam size={70} duration={5} borderWidth={3} colorFrom="#ffffff" colorTo="#00d4aa" />
            </motion.div>
          </motion.div>
          <BlurFade inView={false} delay={0.4}>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Oheneba Kwaku <span className="text-accent">Tawiah Ntim</span>
            </p>
          </BlurFade>
          <BlurFade inView={false} delay={0.5}>
            <p className="text-gray-400 font-mono text-sm md:text-base mb-12">
              KNUST · <FlipWords words={focusAreas} className="text-accent" />
            </p>
          </BlurFade>
          <BlurFade inView={false} delay={0.6} className="flex flex-wrap justify-center items-center gap-4">
            <ShimmerButton as={Link} to="/contact">
              <Mail className="w-5 h-5" />
              Contact me
            </ShimmerButton>
            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border hover:border-accent/50 hover:shadow-glow-sm text-gray-400 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/KT-Devv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border hover:border-accent/50 hover:shadow-glow-sm text-gray-400 hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </BlurFade>
          <BlurFade inView={false} delay={1} className="mt-20">
            <button
              type="button"
              onClick={handleSmoothScroll}
              className="inline-flex flex-col items-center gap-1 text-gray-500 hover:text-accent transition-colors font-mono text-sm rounded-md"
            >
              <span>Explore more</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </BlurFade>
        </div>
      </section>

      {/* Stats bar — impact numbers */}
      <section id="stats-section" className="py-16 px-6 border-t border-border bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={i * 0.08} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  <StatValue value={stat.value} delay={i * 0.08} />
                </p>
                <p className="text-gray-500 font-mono text-sm">{stat.label}</p>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-5xl mx-auto">
          <BlurFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center section-title">Explore My Work</h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <HoverEffect items={quickLinks} />
          </BlurFade>
        </div>
      </section>
    </div>
  );
};
