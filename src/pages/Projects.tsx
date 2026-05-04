import React from 'react';
import { motion } from '../lib/motion-proxy';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-accent/20">04</h1>
            <h1 className="text-2xl md:text-3xl font-bold section-title">Featured Projects</h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => {
              const card = (
                <>
                  <div className="relative h-52 overflow-hidden rounded-t-2xl">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
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
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 group"
                >
                  {'url' in project && project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
