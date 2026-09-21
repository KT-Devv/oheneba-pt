import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  /** Delay between successive words, in seconds. */
  stagger?: number;
}

/** Aceternity TextGenerateEffect — words fade in from a blur one after another. */
export function TextGenerateEffect({ words, className, stagger = 0.02 }: TextGenerateEffectProps) {
  const list = words.split(/\s+/).filter(Boolean);

  return (
    <span className={className}>
      {list.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={cn('inline-block')}
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: i * stagger }}
        >
          {word}
          {i < list.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  );
}
