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
  ExternalLink,
  Download,
  User,
  Smartphone,
  Wifi,
  Cpu
} from 'lucide-react';

function App() {
  const [profileImgError, setProfileImgError] = useState(false);
  const skills = [
    { name: "Full Stack Web Dev", icon: <Globe className="w-6 h-6" />, level:90 },
    { name: "Full Stack App Dev", icon: <Smartphone className="w-6 h-6" />, level: 85 },
    { name: "Programming", icon: <Code2 className="w-6 h-6" />, level: 88 },
    { name: "LEGO Robotics", icon: <Cpu className="w-6 h-6" />, level: 100 },
    { name: "IoT", icon: <Wifi className="w-6 h-6" />, level: 90 },
    { name: "Arduino", icon: <Server className="w-6 h-6" />, level: 90 },
    { name: "Computer Networking", icon: <Database className="w-6 h-6" />, level: 78 }
  ];

  const projects = [
    {
      title: "Student Management System",
      description: "A comprehensive web application for managing student records, grades, and academic information with role-based access control.",
      tech: ["React", "Node.js", "MySQL", "TypeScript"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
    },
    {
      title: "IoT Smart Home System",
      description: "Arduino-based home automation system with sensor monitoring, remote control capabilities, and real-time data visualization.",
      tech: ["Arduino", "C++", "Python", "React"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
    },
    {
      title: "LEGO Mindstorms Robot",
      description: "Autonomous robot built with LEGO Mindstorms for navigation, object detection, and task completion using advanced programming.",
      tech: ["LEGO Mindstorms", "Scratch", "Java"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      title: "Career Atlas",
      description: "A website to help people find jobs and recruitors find workers",
      tech: ["CSS", "HTML", "Typescript", "Java"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
    },
    {
      title: "Cash AI",
      description: "An AI powered website to revolutionalize bankinf experience, and reduce faulty transactions.",
      tech: ["CSS", "HTML", "Typescript", "Java", "AI"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
    },
    {
      title: "Snake Game",
      description: "Snake game built with python",
      tech: ["Python"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
    }
  ];

  const education = [
    {
      degree: "BSc Computer Science",
      institution: "Kwame Nkrumah University of Science and Technology",
      year: "2022 - 2026",
      status: "Final Year Student"
    }
  ];

  const contact = {
    email: "ohenebantim14@gmail.com",
    phone: "+233 25 631 8601",
    location: "Accra, Ghana",
    linkedin: "https://www.linkedin.com/in/oheneba-ntim-595700230"
  };

  return (
    <div className="min-h-screen bg-void bg-grid text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-void/80 backdrop-blur-xl z-50 border-b border-border glow-line">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg font-semibold font-mono text-accent tracking-tight"
            >
              K.T Devv
            </motion.div>
            <div className="hidden md:flex items-center gap-1 font-mono text-sm">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-gray-400 hover:text-accent transition-colors duration-200 after:absolute after:left-4 after:right-4 after:bottom-0 after:h-px after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-28 pb-24 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto text-center relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-36 h-36 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-br from-accent to-accent/40 shadow-glow ring-2 ring-accent/20">
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
          
          <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">K.T Devv · Computer Science</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-white">Oheneba Kwaku</span>
            <br />
            <span className="text-accent">Tawiah Ntim</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto font-medium">
            KNUST · Full-Stack · IoT · Robotics
          </p>
          
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Passionate about full-stack development, IoT systems, robotics, and network technologies. 
            BSc Computer Science with hands-on experience in web development, Arduino, LEGO robotics, and modern software engineering.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-void font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-glow-sm font-mono text-sm"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="./My CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface border border-border hover:border-accent/50 px-6 py-3 rounded-lg transition-all duration-200 font-mono text-sm"
            >
              <Download className="w-4 h-4 text-accent" />
              View CV
            </motion.a>
          </div>

          <div className="flex justify-center gap-5">
            <motion.a
              whileHover={{ scale: 1.1, color: '#00d4aa' }}
              whileTap={{ scale: 0.95 }}
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#00d4aa' }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/KT-Devv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#00d4aa' }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${contact.email}`}
              className="text-gray-500 hover:text-accent transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-14 text-center section-title inline-block"
          >
            Skill Set
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-surface/80 backdrop-blur-sm p-5 rounded-xl border border-border hover:border-accent/40 hover:shadow-glow-sm transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="text-accent mr-3">{skill.icon}</div>
                  <h3 className="text-base font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-void rounded-full h-1.5 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.08 + 0.4, duration: 0.8 }}
                    className="bg-accent h-1.5 rounded-full"
                  />
                </div>
                <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-6 font-mono text-gray-400">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['JavaScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'MySQL', 'React', 'TypeScript', 'LEGO Mindstorms', 'Scratch', 'Git', 'SQL', 'CAD', 'Node', 'Supabase', 'Packet Tracer', 'Arduino'].map((tech) => (
                <span
                  key={tech}
                  className="bg-surface border border-border hover:border-accent/30 px-3 py-1.5 rounded-md text-xs font-mono text-gray-400 hover:text-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-surface/30 border-t border-border">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-14 text-center section-title inline-block"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface/60 backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-accent/40 hover:shadow-glow-sm transition-all duration-300 group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-accent" />
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-500 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono bg-accent-dim border border-accent/30 text-accent px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-14 text-center section-title inline-block"
          >
            Education
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-surface/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-accent/40 hover:shadow-glow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 border border-accent/20 p-3 rounded-lg">
                    <GraduationCap className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 text-white">{edu.degree}</h3>
                    <p className="text-accent font-mono text-sm mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <span className="font-mono">{edu.year}</span>
                      <span className="bg-accent/20 text-accent px-2 py-0.5 rounded font-mono text-xs">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-surface/30 border-t border-border">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-14 text-center section-title inline-block"
          >
            Get In Touch
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-5"
              >
                <h3 className="text-lg font-semibold font-mono text-accent">Let's Connect</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Interested in opportunities, collaboration, or connecting with fellow developers and tech enthusiasts.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors">
                    <Mail className="w-4 h-4 text-accent shrink-0" />
                    <a href={`mailto:${contact.email}`} className="text-sm font-mono break-all">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-mono">{contact.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors">
                    <Linkedin className="w-4 h-4 text-accent shrink-0" />
                    <a 
                      href={contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-mono"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-surface/80 backdrop-blur-sm p-6 rounded-xl border border-border"
              >
                <h3 className="text-base font-semibold font-mono text-gray-400 mb-4">Send a Message</h3>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-void border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-void border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-600"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-void border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-gray-600"
                  />
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-void font-semibold py-2.5 rounded-lg font-mono text-sm transition-colors shadow-glow-sm"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 text-sm font-mono">
            © {new Date().getFullYear()} Oheneba Kwaku Tawiah Ntim
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
