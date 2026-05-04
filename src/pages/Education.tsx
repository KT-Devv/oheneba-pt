import React from 'react';
import { motion } from '../lib/motion-proxy';
import { GraduationCap } from 'lucide-react';
import { education, otherInterests } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      {/* Education Section */}
      <section className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-accent/20">05</h1>
            <h1 className="text-2xl md:text-3xl font-bold section-title">Education</h1>
          </motion.div>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface/60 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 mb-8"
            >
              <div className="flex items-start gap-6">
                <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl shrink-0">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{edu.degree}</h3>
                  {edu.course && <p className="text-gray-400 font-mono text-sm mb-2">Course: {edu.course}</p>}
                  <p className="text-accent font-mono mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="font-mono">{edu.year}</span>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-lg font-mono text-xs">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-accent/20">06</h2>
            <h2 className="text-2xl md:text-3xl font-bold section-title">Interests</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {otherInterests.map((interest) => (
              <span
                key={interest}
                className="bg-surface/60 border border-border hover:border-accent/40 px-6 py-3 rounded-xl text-base font-mono text-gray-400 hover:text-accent transition-colors"
              >
                {interest}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
