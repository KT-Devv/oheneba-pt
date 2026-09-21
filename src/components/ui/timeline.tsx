import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export interface TimelineEntry {
  label: string;
  content: ReactNode;
}

/**
 * Aceternity-style Timeline: a vertical line that fills in with the reader's
 * scroll position, with a glowing node for each entry.
 */
export function Timeline({ data }: { data: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 70%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative">
      {/* track + progress beam */}
      <div aria-hidden="true" className="absolute bottom-0 left-[11px] top-2 w-px bg-border md:left-[15px]">
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-accent via-accent/80 to-transparent shadow-[0_0_10px_rgba(0,212,170,0.6)]"
          style={{ scaleY }}
        />
      </div>

      <ol className="space-y-12">
        {data.map((entry) => (
          <li key={entry.label} className="relative pl-10 md:pl-14">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-void md:h-8 md:w-8"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,212,170,0.9)] md:h-3 md:w-3" />
            </span>
            <p className="mb-4 font-mono text-sm text-accent">{entry.label}</p>
            {entry.content}
          </li>
        ))}
      </ol>
    </div>
  );
}
