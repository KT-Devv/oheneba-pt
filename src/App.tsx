import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Database,
  Globe,
  Server,
  GraduationCap,
  Download,
  User,
  Smartphone,
  Wifi,
  Cpu,
  Layout,
  ChevronDown,
} from 'lucide-react';

function App() {
  const [profileImgError, setProfileImgError] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'opening'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.name ? `Message from ${formData.name} (${formData.email})` : `Message from portfolio (${formData.email || 'no email'})`
    );
    const body = encodeURIComponent(formData.message || '(No message provided)');
    const mailto = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setFormStatus('opening');
    window.open(mailto);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 1500);
  };

  const stats = [
    { value: '8+', label: 'Projects Completed' },
    { value: '1', label: 'National Robotics Win' },
    { value: 'WRO', label: '2025 Singapore' },
    { value: 'RiSE', label: 'Competition 2021 · 1st' },
  ];

  const skills = [
    { name: 'Full Stack Web Dev', icon: <Globe className="w-6 h-6" />, level: 90 },
    { name: 'Full Stack App Dev', icon: <Smartphone className="w-6 h-6" />, level: 85 },
    { name: 'Programming', icon: <Code2 className="w-6 h-6" />, level: 88 },
    { name: 'LEGO Robotics', icon: <Cpu className="w-6 h-6" />, level: 100 },
    { name: 'IoT', icon: <Wifi className="w-6 h-6" />, level: 90 },
    { name: 'Arduino', icon: <Server className="w-6 h-6" />, level: 90 },
    { name: 'Computer Networking', icon: <Database className="w-6 h-6" />, level: 78 },
    { name: 'System Design', icon: <Layout className="w-6 h-6" />, level: 60 },
  ];

  const otherInterests = [
    'STEM Education & Outreach',
    'Robotics Tutoring',
    'Music',
    'Mentoring',
    'Gaming',
  ];

  const projects = [
    {
      title: 'Melora',
      description: 'Mobile app group project (2022)—a Shazam-like experience that lets users discover music by listening and download it directly to their devices.',
      tech: ['Mobile', 'Java', 'Android'],
      image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7',
    },
    {
      title: 'Career Atlas',
      description: 'Web project for job seekers and employers. Helps job seekers find opportunities and employers find talent.',
      tech: ['CSS', 'HTML', 'TypeScript', 'Java'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    },
    {
      title: 'Echo Bank AI',
      description: 'AI-powered website for the finance sector, built as part of studies to improve banking experience and reduce faulty transactions.',
      tech: ['AI', 'Web', 'HTML', 'CSS', 'TypeScript', 'Java'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    },
    {
      title: 'SiteTrack',
      description: 'Construction company management system for tracking projects, resources, and operations.',
      tech: ['Web', 'Database', 'Management System'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    },
    {
      title: 'LEGO Mindstorms EV3 — WRO 2025',
      description: 'Programmed LEGO Mindstorms EV3 robot for WRO 2025 RoboMission Junior at CSIR: sensor integration, pathfinding algorithms, and geometry-based navigation. Delivered competition-ready robot with 95% task success rate.',
      tech: ['LEGO Mindstorms', 'EV3', 'Robotics', 'Sensors', 'Algorithms'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    },
    {
      title: 'Interactive Website (CSIR)',
      description: 'Developed an interactive website during the CSIR internship, built with HTML, CSS, and JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
    },
    {
      title: 'RiSE Robotics Competition 2021',
      description: '1st Place and trophy in the Robotics-inspired Science Education (RiSE) competition by Ghana Robotics Academy Foundation—National Robotics Competition 2021.',
      tech: ['Robotics', 'Competition', 'STEM'],
      image: 'https://images.unsplash.com/photo-1531746795393-6c60a05c4487',
    },
    {
      title: 'Snake Game',
      description: 'Classic Snake game built with Python and Pygame. Features customizable background, Easy/Medium/Hard difficulty levels, special food items, sound effects, and high score tracking.',
      tech: ['Python', 'Pygame'],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
      url: 'https://github.com/KT-Devv/Snake_game',
    },
  ];

  const education = [
    {
      degree: 'BSc Computer Science',
      institution: 'Kwame Nkrumah University of Science and Technology',
      year: '2022 - 2026',
      status: 'Final Year Student',
    },
  ];

  const contact = {
    email: 'ohenebantim14@gmail.com',
    phone: '+233 25 631 8601',
    location: 'Accra, Ghana',
    linkedin: 'https://www.linkedin.com/in/oheneba-ntim-595700230',
  };

  const navItems = ['About', 'Skills', 'Projects', 'Other Interests', 'Education', 'Contact'];

  return (
    <div className="min-h-screen bg-void bg-grid text-white">
      {/* Navigation — minimal, spacious */}
      <nav className="fixed top-0 w-full z-50 bg-void/70 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-semibold font-mono text-accent tracking-tight">
            K.T Devv
          </a>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-400 hover:text-accent transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="/My CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 font-mono text-sm text-accent hover:underline"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </nav>

      {/* Hero — full viewport, NKNAB-style */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-16 relative">
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
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-void font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-glow-sm font-mono text-sm"
            >
              <Mail className="w-5 h-5" />
              Contact me
            </a>
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
          <motion.a
            href="#skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="inline-flex flex-col items-center gap-1 mt-20 text-gray-500 hover:text-accent transition-colors font-mono text-sm"
          >
            <span>Scroll down</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* Stats bar — NKNAB-style impact numbers */}
      <section className="py-16 px-6 border-t border-border bg-surface/30">
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

      {/* My Story — blockquote narrative */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-12 text-center section-title"
          >
            My Story
          </motion.h2>
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

      {/* Skills — more spacing, larger cards */}
      <section id="skills" className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-20 text-center section-title"
          >
            Skill Set
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-surface/60 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent">{skill.icon}</span>
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
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-8 font-mono text-gray-400">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'JavaScript',
                'Python',
                'Java',
                'C++',
                'HTML',
                'CSS',
                'MySQL',
                'Android Studio',
                'React Native',
                'React.js',
                'TypeScript',
                'LEGO Mindstorms',
                'Scratch',
                'Git',
                'SQL',
                'CAD',
                'Next.js',
                'Node.js',
                'Supabase',
                'MongoDB',
                'Pybricks',
                'Packet Tracer',
                'Arduino',
              ].map((tech) => (
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

      {/* Other Interests — spacious tags */}
      <section id="other-interests" className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center section-title"
          >
            Other Interests
          </motion.h2>
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

      {/* Projects — larger cards, more gap */}
      <section id="projects" className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-20 text-center section-title"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => {
              const card = (
                <>
                  <div className="relative h-52 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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

      {/* Education — spacious card */}
      <section id="education" className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center section-title"
          >
            Education
          </motion.h2>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface/60 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl shrink-0">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{edu.degree}</h3>
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

      {/* Contact — two-column, more space */}
      <section id="contact" className="py-24 md:py-32 px-6 border-t border-border bg-surface/20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-20 text-center section-title"
          >
            Get In Touch
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-xl font-semibold font-mono text-accent">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Interested in opportunities, collaboration, or connecting with fellow developers and
                tech enthusiasts.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href={`mailto:${contact.email}`} className="font-mono text-gray-400 hover:text-accent transition-colors break-all">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-mono text-gray-400">{contact.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-accent shrink-0" />
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-gray-400 hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface/60 backdrop-blur-sm p-8 rounded-2xl border border-border"
            >
              <h3 className="text-lg font-semibold font-mono text-gray-400 mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-void border border-border rounded-xl px-5 py-4 text-base focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-void border border-border rounded-xl px-5 py-4 text-base focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-void border border-border rounded-xl px-5 py-4 text-base focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-gray-600"
                />
                <button
                  type="submit"
                  disabled={formStatus === 'opening'}
                  className="w-full bg-accent hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed text-void font-semibold py-4 rounded-xl font-mono text-base transition-colors shadow-glow-sm"
                >
                  {formStatus === 'opening' ? 'Opening email…' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 font-mono text-sm">
            © {new Date().getFullYear()} Oheneba Kwaku Tawiah Ntim
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
