import React from 'react';
import { Link } from 'react-router-dom';
import { BlurFade } from '@/components/ui/blur-fade';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-void bg-grid text-white pt-24 flex items-center justify-center px-6">
      <BlurFade inView={false} className="text-center">
        <p aria-hidden="true" className="text-7xl md:text-8xl font-bold text-accent/20 mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-void font-semibold px-6 py-3 rounded-lg font-mono text-sm transition-colors shadow-glow-sm"
        >
          Back to home
        </Link>
      </BlurFade>
    </div>
  );
};
