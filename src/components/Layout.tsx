import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Download from 'lucide-react/dist/esm/icons/download.js';
import Menu from 'lucide-react/dist/esm/icons/menu.js';
import X from 'lucide-react/dist/esm/icons/x.js';
import { BlurFade } from '@/components/ui/blur-fade';
import { LogoMark } from '@/components/Logo';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, handleEscape]);

  // Close the mobile menu on any navigation (including browser back/forward).
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-void px-3 py-2 rounded-md z-[70]">Skip to content</a>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300',
          scrolled ? 'bg-void/85 border-accent/15 shadow-[0_8px_30px_-12px_rgba(0,212,170,0.25)]' : 'bg-void/70 border-border/50',
        )}
        aria-label="Primary"
      >
        <div className={cn('max-w-6xl mx-auto px-6 flex justify-between items-center transition-[padding] duration-300', scrolled ? 'py-3' : 'py-4')}>
          {/* The mark spells "K.T"; the text completes the name. */}
          <Link
            to="/"
            aria-label="K.T Devv — Home"
            className="group flex items-center gap-2.5 text-xl font-semibold font-mono text-accent tracking-tight hover:text-accent/80 transition-colors"
          >
            <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3" />
            <span aria-hidden="true">Devv</span>
          </Link>
          <div className="hidden md:flex items-center gap-1 font-mono text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-md px-3 py-1.5 transition-colors duration-200',
                    isActive ? 'text-accent' : 'text-gray-400 hover:text-accent',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-md border border-accent/20 bg-accent/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </>
                )}
              </NavLink>
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
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[61px] left-0 w-full bg-void/95 border-b border-border/80 backdrop-blur-xl z-40"
          >
            <div className="flex flex-col px-6 py-6 gap-5 font-mono text-sm">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn('block py-1 transition-colors duration-200', isActive ? 'text-accent' : 'text-gray-400 hover:text-accent')
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
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
      </AnimatePresence>
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <BlurFade className="max-w-6xl mx-auto text-center">
        <p className="text-gray-300 font-mono text-sm">
          © {new Date().getFullYear()} Oheneba Kwaku Tawiah Ntim
        </p>
      </BlurFade>
    </footer>
  );
};
