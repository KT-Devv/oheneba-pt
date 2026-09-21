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
  blur?: string;
  /** Animate when scrolled into view (default) instead of on mount. */
  inView?: boolean;
  inViewMargin?: string;
}

/** Magic UI BlurFade — fades an element in from a blur while it drifts into place. */
export function BlurFade({
  children,
  className,
  as = 'div',
  duration = 0.5,
  delay = 0,
  offset = 12,
  direction = 'down',
  blur = '8px',
  inView = true,
  inViewMargin = '-40px',
}: BlurFadeProps) {
  const Comp = motion[as] as typeof motion.div;
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const sign = direction === 'right' || direction === 'up' ? -1 : 1;

  const variants: Variants = {
    hidden: { [axis]: sign * offset, opacity: 0, filter: `blur(${blur})` },
    visible: { [axis]: 0, opacity: 1, filter: 'blur(0px)' },
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
