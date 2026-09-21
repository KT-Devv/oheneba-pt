import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  /**
   * Slide the gradient across the text. Off by default: animating a
   * background-clipped gradient repaints the text every frame, which is costly
   * on large headings.
   */
  animate?: boolean;
}

/** Magic UI AnimatedGradientText — gradient-filled text, optionally sliding. */
export function AnimatedGradientText({ children, className, animate = false }: AnimatedGradientTextProps) {
  return (
    <span
      style={{ '--bg-size': '300%' } as CSSProperties}
      className={cn(
        'inline-block bg-gradient-to-r from-accent via-emerald-200 to-accent bg-clip-text text-transparent',
        animate ? 'animate-gradient-x bg-[length:var(--bg-size)_100%]' : 'bg-[length:200%_100%] bg-left',
        className,
      )}
    >
      {children}
    </span>
  );
}
