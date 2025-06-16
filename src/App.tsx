import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code2, Brain, Rocket, ExternalLink } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "AI Chat Application",
      description: "Built a real-time chat application with OpenAI integration",
      tech: ["React", "Node.js", "Socket.io", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    {
      title: "Blockchain Explorer",
      description: "Developed a web-based blockchain explorer for tracking transactions",
      tech: ["TypeScript", "Web3.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0"
    },
    {
      title: "Machine Learning Dashboard",
      description: "Created a dashboard for visualizing ML model performance",
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      image: "https://images.unsplash.com/photo-1676277791608-ac54525aa9f9"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Code2 className="w-6 h-6" /> },
    { name: "Backend Systems", icon: <Terminal className="w-6 h-6" /> },
    { name: "Machine Learning", icon: <Brain className="w-6 h-6" /> },
    { name: "DevOps", icon: <Rocket className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          John Doe
        </h1>
        <p className="text-xl text-gray-400 mb-8">Computer Science Student & Software Developer</p>
        <div className="flex justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:john@example.com"
            className="text-gray-400 hover:text-white"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </div>
      </motion.header>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors"
            >
              <div className="mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden group"
            >
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="w-8 h-8" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="text-sm bg-gray-800 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold"
          onClick={() => window.location.href = 'mailto:john@example.com'}
        >
          Get in Touch
        </motion.button>
      </motion.footer>
    </div>
  );
}

export default App;