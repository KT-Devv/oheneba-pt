import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

export const Navigation: React.FC = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
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
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 font-mono text-sm">
          © {new Date().getFullYear()} Oheneba Kwaku Tawiah Ntim
        </p>
      </div>
    </footer>
  );
};
