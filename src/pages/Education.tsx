import React from 'react';
import { motion } from 'framer-motion';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap.js';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase.js';
import { education, experience, otherInterests } from '../data/portfolio';
import { BlurFade } from '@/components/ui/blur-fade';
import { MagicCard } from '@/components/ui/magic-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Timeline } from '@/components/ui/timeline';

const experienceTimeline = experience.map((exp) => ({
  label: exp.year,
  content: (
    <BlurFade direction="left" offset={16}>
      <MagicCard contentClassName="p-8">
        <div className="flex items-start gap-6">
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl shrink-0 transition-shadow duration-300 group-hover:shadow-glow-sm">
            <Briefcase className="w-8 h-8 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">{exp.role}</h3>
            <p className="text-accent font-mono mb-2">{exp.organization}</p>
            <p className="text-gray-400 text-sm mb-3">{exp.description}</p>
            <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-lg font-mono text-xs">
              {exp.status}
            </span>
          </div>
        </div>
      </MagicCard>
    </BlurFade>
  ),
}));

const educationTimeline = education.map((edu) => ({
  label: edu.year,
  content: (
    <BlurFade direction="left" offset={16}>
      <MagicCard contentClassName="p-8">
        <div className="flex items-start gap-6">
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl shrink-0 transition-shadow duration-300 group-hover:shadow-glow-sm">
            <GraduationCap className="w-8 h-8 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">{edu.degree}</h3>
            {edu.course && <p className="text-gray-400 font-mono text-sm mb-2">Course: {edu.course}</p>}
            <p className="text-accent font-mono mb-2">{edu.institution}</p>
            <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-lg font-mono text-xs">
              {edu.status}
            </span>
          </div>
        </div>
      </MagicCard>
    </BlurFade>
  ),
}));

// Most recent first.
const timelineData = [...experienceTimeline, ...[...educationTimeline].reverse()];

export const Education: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      {/* Education Section */}
      <section className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <SectionHeading number="05" title="Education & Experience" as="h1" />
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading number="06" title="Interests" />
          <ul className="flex flex-wrap justify-center gap-4">
            {otherInterests.map((interest, i) => (
              <motion.li
                key={interest}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-surface/60 border border-border hover:border-accent/40 hover:shadow-glow-sm px-6 py-3 rounded-xl text-base font-mono text-gray-400 hover:text-accent transition-colors"
              >
                {interest}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
