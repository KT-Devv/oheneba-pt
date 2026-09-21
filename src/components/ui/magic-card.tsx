import { useCallback, type ComponentPropsWithoutRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagicCardProps extends ComponentPropsWithoutRef<'div'> {
  /** Radius (px) of the cursor-following glow. */
  gradientSize?: number;
  gradientColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  /** Extra classes for the inner content wrapper. */
  contentClassName?: string;
}

/**
 * Magic UI MagicCard — a card whose border and surface light up around the
 * mouse pointer.
 */
export function MagicCard({
  children,
  className,
  contentClassName,
  gradientSize = 220,
  gradientColor = 'rgba(0, 212, 170, 0.10)',
  gradientFrom = '#00d4aa',
  gradientTo = '#1e1e2e',
  onMouseMove,
  onMouseLeave,
  ...props
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      onMouseMove?.(e);
    },
    [mouseX, mouseY, onMouseMove],
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
      onMouseLeave?.(e);
    },
    [mouseX, mouseY, gradientSize, onMouseLeave],
  );

  const borderGlow = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientFrom}, ${gradientTo}, transparent 100%)`;
  const surfaceGlow = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)`;

  return (
    <div
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('group relative rounded-2xl', className)}
    >
      {/* base border, plus the glowing border that shows through the 1px gap around the surface */}
      <div className="absolute inset-0 rounded-[inherit] bg-border" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: borderGlow }}
      />
      <div className="absolute inset-px rounded-[inherit] bg-surface" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: surfaceGlow }}
      />
      <div className={cn('relative h-full overflow-hidden rounded-[inherit]', contentClassName)}>{children}</div>
    </div>
  );
}
