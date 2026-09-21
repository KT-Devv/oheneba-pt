import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

/** Aceternity FlipWords — cycles through `words`, blurring each letter in. */
export function FlipWords({ words, duration = 2800, className }: FlipWordsProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  // Don't keep cycling (and re-animating letters) while scrolled out of view.
  const inView = useInView(ref);

  useEffect(() => {
    if (reduceMotion || !inView || words.length < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), duration);
    return () => clearInterval(timer);
  }, [words.length, duration, reduceMotion, inView]);

  const current = words[index];

  return (
    <span ref={ref} className={cn('relative inline-block', className)}>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={current}
            className="inline-block whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24, x: 24, filter: 'blur(8px)', scale: 1.6 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            {current.split('').map((letter, i) => (
              <motion.span
                key={`${current}-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
              >
                {letter === ' ' ? ' ' : letter}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
