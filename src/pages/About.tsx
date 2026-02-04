import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      {/* My Story — blockquote narrative */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-accent/20">01</h1>
            <h1 className="text-2xl md:text-3xl font-bold section-title">My Story</h1>
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed text-center border-l-0 pl-0"
          >
            Passionate about full-stack development, IoT systems, robotics, and network technologies.
            BSc Computer Science with hands-on experience in web development, Arduino, LEGO robotics,
            and modern software engineering. I aim to make a positive impact through technology and
            inspire others in STEM.
          </motion.blockquote>
        </div>
      </section>

      {/* Stats bar — impact numbers */}
      <section className="py-16 px-6 border-t border-border bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-12 text-center section-title"
          >
            My Achievements
          </motion.h2>
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

      {/* About Details */}
      <section className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 section-title"
          >
            Who Am I?
          </motion.h2>
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I'm a final-year Computer Science student at Kwame Nkrumah University of Science and Technology (KNUST) 
              with a passion for building innovative solutions through technology. My journey spans full-stack web development, 
              mobile app creation, robotics, and IoT systems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Over the years, I've worked on diverse projects ranging from music discovery applications to educational robotics 
              systems. I won 1st place in the RiSE Robotics Competition 2021 and have been selected to represent Ghana in the WRO 
              2025 competition in Singapore.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Beyond coding, I'm deeply committed to STEM education and mentoring the next generation of developers and 
              roboticists. I believe technology should be accessible and should create positive impact in society.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};
