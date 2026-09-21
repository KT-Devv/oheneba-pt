import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { usePauseOffscreen } from '@/lib/use-pause-offscreen';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  /** How many copies to render; copies after the first are hidden from assistive tech. */
  repeat?: number;
}

/** Magic UI Marquee — endlessly scrolling row (or column) of content. */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 3,
  children,
  ...props
}: MarqueeProps) {
  const ref = usePauseOffscreen<HTMLDivElement>();

  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        vertical ? 'flex-col' : 'flex-row',
        className,
      )}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          aria-hidden={i > 0 ? true : undefined}
          className={cn(
            'flex shrink-0 justify-around [gap:var(--gap)]',
            vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]',
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
