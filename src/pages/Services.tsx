import React from 'react';
import { motion } from 'framer-motion';
import { services, skills, technologies } from '../data/portfolio';

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      {/* Services Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-accent/20">02</h1>
            <h1 className="text-2xl md:text-3xl font-bold section-title">My Services</h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-surface/60 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4 text-accent">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-accent/20">03</h2>
            <h2 className="text-2xl md:text-3xl font-bold section-title">Skill Set</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-surface/60 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-accent/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                    <h3 className="text-base font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-void rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-accent h-2 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-mono text-gray-500">{skill.level}%</span>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-8 font-mono text-gray-400">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-surface/80 border border-border hover:border-accent/30 px-4 py-2 rounded-lg text-sm font-mono text-gray-400 hover:text-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
