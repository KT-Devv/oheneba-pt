import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Magic UI AnimatedGradientText — text whose gradient slowly slides across it. */
export function AnimatedGradientText({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      style={{ '--bg-size': '300%' } as React.CSSProperties}
      className={cn(
        'animate-gradient-x inline-block bg-gradient-to-r from-accent via-emerald-200 to-accent bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </span>
  );
}
