import React from 'react';
import { motion } from 'framer-motion';
import { services, skills, technologies } from '../data/portfolio';
import { BlurFade } from '@/components/ui/blur-fade';
import { MagicCard } from '@/components/ui/magic-card';
import { Marquee } from '@/components/ui/marquee';
import { SectionHeading } from '@/components/ui/section-heading';

const half = Math.ceil(technologies.length / 2);
const techRows = [technologies.slice(0, half), technologies.slice(half)];

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      {/* Services Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading number="02" title="My Services" as="h1" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <BlurFade key={service.title} delay={index * 0.08} className="h-full">
                  <MagicCard className="h-full" contentClassName="p-8 text-center">
                    <div className="flex justify-center mb-4 text-accent">
                      <span className="rounded-xl border border-accent/20 bg-accent/10 p-3 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-glow-sm">
                        <IconComponent className="w-8 h-8" />
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm">{service.description}</p>
                  </MagicCard>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading number="03" title="Skill Set" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <BlurFade key={skill.name} delay={index * 0.05} className="h-full">
                  <MagicCard className="h-full" contentClassName="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                      <h3 className="text-base font-semibold text-white">{skill.name}</h3>
                    </div>
                    <div
                      className="w-full bg-void rounded-full h-2 mb-2 overflow-hidden"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-to-r from-accent/60 to-accent shadow-[0_0_10px_rgba(0,212,170,0.6)]"
                      />
                    </div>
                    <span className="text-sm font-mono text-gray-500">{skill.level}%</span>
                  </MagicCard>
                </BlurFade>
              );
            })}
          </div>
          <BlurFade className="text-center">
            <h3 className="text-lg font-semibold mb-8 font-mono text-gray-400">Technologies & Tools</h3>
            <div className="-mx-6 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] md:mx-0">
              {techRows.map((row, rowIndex) => (
                <Marquee
                  key={rowIndex}
                  reverse={rowIndex === 1}
                  pauseOnHover
                  className="[--duration:45s] [--gap:0.75rem]"
                >
                  {row.map((tech) => (
                    <span
                      key={tech}
                      className="bg-surface/80 border border-border hover:border-accent/40 px-4 py-2 rounded-lg text-sm font-mono text-gray-400 hover:text-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </Marquee>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
};
