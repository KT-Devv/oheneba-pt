import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface HoverEffectItem {
  title: string;
  description: string;
  path: string;
  number: string;
}

/**
 * Aceternity HoverEffect — a highlight panel that glides between grid cards as
 * the pointer (or keyboard focus) moves across them.
 */
export function HoverEffect({ items, className }: { items: HoverEffectItem[]; className?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2', className)}>
      {items.map((item, idx) => (
        <Link
          key={item.path}
          to={item.path}
          className="group relative block h-full w-full rounded-3xl p-3 focus-visible:outline-none"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onFocus={() => setHoveredIndex(idx)}
          onBlur={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-accent/10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 h-full overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 group-hover:border-accent/40 group-focus-visible:border-accent/60">
            <p className="mb-2 font-mono text-lg text-accent/40">{item.number}</p>
            <h3 className="mb-2 text-2xl font-semibold text-white transition-colors group-hover:text-accent">
              {item.title}
            </h3>
            <p className="text-gray-500">{item.description}</p>
            <span
              aria-hidden="true"
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              Explore <span>→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
