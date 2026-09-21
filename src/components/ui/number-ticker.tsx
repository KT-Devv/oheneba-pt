import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NumberTickerProps {
  value: number;
  delay?: number;
  className?: string;
}

/** Magic UI NumberTicker — counts up to `value` once it scrolls into view. */
export function NumberTicker({ value, delay = 0, className }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(reduceMotion ? value : 0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => motionValue.set(value), delay * 1000);
    return () => clearTimeout(timer);
  }, [motionValue, isInView, delay, value]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) ref.current.textContent = Math.round(latest).toLocaleString('en-US');
      }),
    [springValue],
  );

  return (
    <span ref={ref} className={cn('inline-block tabular-nums', className)}>
      {reduceMotion ? value.toLocaleString('en-US') : 0}
    </span>
  );
}
