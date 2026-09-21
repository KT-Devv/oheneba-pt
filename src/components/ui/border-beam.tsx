import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface BorderBeamProps {
  /** Length of the lit arc, in degrees of the lap. */
  arc?: number;
  /** Seconds per lap. */
  duration?: number;
  /** Seconds to offset the start of the animation. */
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  reverse?: boolean;
  borderWidth?: number;
  className?: string;
}

/**
 * Magic UI BorderBeam — a light that travels around its (rounded) parent's
 * border. Implemented as a rotating conic gradient masked down to a ring, so
 * the motion is a GPU-composited `transform` rather than per-frame JS.
 */
export function BorderBeam({
  arc = 70,
  duration = 6,
  delay = 0,
  colorFrom = '#00d4aa',
  colorTo = '#7cf5dc',
  reverse = false,
  borderWidth = 1,
  className,
}: BorderBeamProps) {
  const start = 360 - arc;
  const ringMask = 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)';

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]', className)}
      style={{
        padding: borderWidth,
        WebkitMask: ringMask,
        WebkitMaskComposite: 'xor',
        mask: ringMask,
        maskComposite: 'exclude',
      }}
    >
      <div
        className="animate-border-spin absolute -inset-1/2"
        style={
          {
            '--duration': `${duration}s`,
            animationDelay: `-${delay}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
            background: `conic-gradient(from 0deg, transparent 0deg, transparent ${start}deg, ${colorFrom} ${360 - arc * 0.1}deg, ${colorTo} 360deg)`,
          } as CSSProperties
        }
      />
    </div>
  );
}
