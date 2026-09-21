import React from 'react';
import { projects } from '../data/portfolio';
import { BlurFade } from '@/components/ui/blur-fade';
import { MagicCard } from '@/components/ui/magic-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { TiltCard } from '@/components/ui/tilt-card';

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading number="04" title="Featured Projects" as="h1" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => {
              const card = (
                <>
                  <div className="relative h-52 overflow-hidden">
                    {project.image && project.image.startsWith('/images/') ? (
                      <picture>
                        <source srcSet={project.image.replace('.jpg', '.avif')} type="image/avif" />
                        <source srcSet={project.image.replace('.jpg', '-800.webp')} type="image/webp" />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </picture>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-void/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-gray-500 mb-5 text-base leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono bg-accent-dim border border-accent/30 text-accent px-2.5 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );
              return (
                <BlurFade key={project.title} delay={(index % 2) * 0.08} className="h-full">
                  <TiltCard className="h-full">
                    <MagicCard className="h-full" gradientSize={320}>
                      {'url' in project && project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                          {card}
                        </a>
                      ) : (
                        card
                      )}
                    </MagicCard>
                  </TiltCard>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
