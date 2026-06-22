import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Download from 'lucide-react/dist/esm/icons/download.js';
import Menu from 'lucide-react/dist/esm/icons/menu.js';
import X from 'lucide-react/dist/esm/icons/x.js';
import { motion } from '../lib/motion-proxy';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-void px-3 py-2 rounded-md z-50">Skip to content</a>
      <nav className="fixed top-0 w-full z-50 bg-void/70 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold font-mono text-accent tracking-tight hover:text-accent/80 transition-colors">
            K.T Devv
          </Link>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-400 hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 font-mono text-sm text-accent hover:underline"
          >
            <Download className="w-4 h-4" />
            View Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-accent focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed top-[61px] left-0 w-full bg-void/95 border-b border-border/80 backdrop-blur-xl z-40 overflow-hidden"
        >
          <div className="flex flex-col px-6 py-6 gap-5 font-mono text-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-accent transition-colors duration-200 py-1"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-accent hover:underline py-1 border-t border-border/40 pt-4"
            >
              <Download className="w-4 h-4" />
              View Resume
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-300 font-mono text-sm">
          © {new Date().getFullYear()} Oheneba Kwaku Tawiah Ntim
        </p>
      </div>
    </footer>
  );
};
