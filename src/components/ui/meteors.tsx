import { useMemo, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  className?: string;
}

/** Magic UI meteor shower — decorative streaks shooting across the section. */
export function Meteors({
  number = 14,
  minDelay = 0.2,
  maxDelay = 4,
  minDuration = 4,
  maxDuration = 9,
  className,
}: MeteorsProps) {
  const styles = useMemo<CSSProperties[]>(
    () =>
      Array.from({ length: number }, () => ({
        top: '-5%',
        left: `${Math.floor(Math.random() * 100)}%`,
        animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
        animationDuration: `${Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)}s`,
      })),
    [number, minDelay, maxDelay, minDuration, maxDuration],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {styles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            'animate-meteor absolute size-0.5 rounded-full bg-accent shadow-[0_0_0_1px_#00d4aa22]',
            className,
          )}
        >
          <span className="pointer-events-none absolute top-1/2 h-px w-[60px] -translate-y-1/2 bg-gradient-to-r from-accent/70 to-transparent" />
        </span>
      ))}
    </div>
  );
}
