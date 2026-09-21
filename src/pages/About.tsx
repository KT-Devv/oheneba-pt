import React from 'react';
import { stats } from '../data/portfolio';
import { BlurFade } from '@/components/ui/blur-fade';
import { MagicCard } from '@/components/ui/magic-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { StatValue } from '@/components/StatValue';

const story =
  'Passionate about full-stack development, IoT systems, robotics, and network technologies. ' +
  'BSc Computer Science with hands-on experience in web development, Arduino, LEGO robotics, ' +
  'and modern software engineering. I aim to make a positive impact through technology and ' +
  'inspire others in STEM.';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24">
      {/* My Story — blockquote narrative */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading number="01" title="My Story" as="h1" className="mb-8 md:mb-8" />
          <blockquote className="text-lg md:text-xl text-gray-400 leading-relaxed text-center border-l-0 pl-0">
            <TextGenerateEffect words={story} />
          </blockquote>
        </div>
      </section>

      {/* Stats bar — impact numbers */}
      <section className="py-16 px-6 border-t border-border bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <BlurFade>
            <h2 className="text-xl font-semibold mb-12 text-center section-title">My Achievements</h2>
          </BlurFade>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={i * 0.08}>
                <MagicCard className="h-full" contentClassName="p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                    <StatValue value={stat.value} delay={i * 0.08} />
                  </p>
                  <p className="text-gray-500 font-mono text-sm">{stat.label}</p>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* About Details */}
      <section className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <BlurFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 section-title section-title-left">Who Am I?</h2>
          </BlurFade>
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
            <BlurFade as="p">
              I'm a final-year Computer Science student at Kwame Nkrumah University of Science and Technology (KNUST)
              with a passion for building innovative solutions through technology. My journey spans full-stack web development,
              mobile app creation, robotics, networking, and IoT systems.
            </BlurFade>
            <BlurFade as="p" delay={0.1}>
              Over the years, I've worked on diverse projects ranging from music discovery applications to educational robotics
              systems. I won 1st place in the RiSE Robotics Competition 2021 and have been selected to represent Ghana in the Robofest Online competition in 2022, the World Robot Olympiad (WRO) 2022 competition in Germany, and the World Robot Olympiad (WRO)
              2025 competition in Singapore.
            </BlurFade>
            <BlurFade as="p" delay={0.2}>
              Beyond coding, I'm deeply committed to STEM education and mentoring the next generation of developers and
              roboticists. I believe technology should be accessible and should create positive impact in society.
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
};
