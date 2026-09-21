import { type ComponentPropsWithoutRef, type ElementType } from 'react';
import { cn } from '@/lib/utils';

type ShimmerButtonProps<T extends ElementType> = {
  /** Render as another element/component, e.g. a router `Link`. */
  as?: T;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

/** Magic UI ShimmerButton — a button with a light sweeping around its edge. */
export function ShimmerButton<T extends ElementType = 'button'>({
  as,
  shimmerColor = '#ffffff',
  shimmerSize = '0.06em',
  shimmerDuration = '3s',
  borderRadius = '0.5rem',
  background = '#00d4aa',
  className,
  children,
  style,
  ...props
}: ShimmerButtonProps<T>) {
  const Comp: ElementType = as ?? 'button';

  return (
    <Comp
      style={{
        '--spread': '90deg',
        '--shimmer-color': shimmerColor,
        '--radius': borderRadius,
        '--speed': shimmerDuration,
        '--cut': shimmerSize,
        '--bg': background,
        ...style,
      }}
      className={cn(
        'group relative z-0 inline-flex transform-gpu items-center justify-center gap-2 overflow-hidden whitespace-nowrap border border-white/10 px-8 py-4 font-mono text-sm font-semibold text-void shadow-glow-sm transition-transform duration-300 ease-in-out [background:var(--bg)] [border-radius:var(--radius)] hover:-translate-y-0.5 active:translate-y-px',
        className,
      )}
      {...props}
    >
      {/* spark container */}
      <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] [container-type:size]">
        {/* spark */}
        <div className="animate-shimmer-slide absolute inset-0 h-[100cqh] [aspect-ratio:1] [border-radius:0] [mask:none]">
          {/* spark before */}
          <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {children}
      {/* highlight */}
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />
      {/* backdrop */}
      <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
    </Comp>
  );
}
