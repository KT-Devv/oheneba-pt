import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Tag = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'section' | 'blockquote' | 'li';

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  as?: Tag;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  /**
   * Optional blur-in radius, e.g. "6px". Off by default — reserve it for small
   * text, since blur is expensive to paint on large blocks.
   */
  blur?: string;
  /** Animate when scrolled into view (default) instead of on mount. */
  inView?: boolean;
  inViewMargin?: string;
}

/** Magic UI BlurFade — fades an element in while it drifts into place (optionally from a blur). */
export function BlurFade({
  children,
  className,
  as = 'div',
  duration = 0.4,
  delay = 0,
  offset = 10,
  direction = 'down',
  blur,
  inView = true,
  inViewMargin = '-40px',
}: BlurFadeProps) {
  const Comp = motion[as] as typeof motion.div;
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const sign = direction === 'right' || direction === 'up' ? -1 : 1;

  const variants: Variants = {
    hidden: { [axis]: sign * offset, opacity: 0, ...(blur ? { filter: `blur(${blur})` } : {}) },
    visible: {
      [axis]: 0,
      opacity: 1,
      // Drop the filter once settled so the element doesn't keep its own compositing layer.
      ...(blur ? { filter: 'blur(0px)', transitionEnd: { filter: 'none' } } : {}),
    },
  };

  return (
    <Comp
      initial="hidden"
      {...(inView
        ? { whileInView: 'visible', viewport: { once: true, margin: inViewMargin } }
        : { animate: 'visible' })}
      variants={variants}
      transition={{ delay: 0.04 + delay, duration, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Comp>
  );
}
