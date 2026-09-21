import { cn } from '@/lib/utils';

/**
 * Aceternity-style hero spotlight. Pure CSS gradients (no SVG blur filter) so
 * it stays cheap to paint, then fades/slides in once on mount.
 */
export function Spotlight({ className, fill = '0, 212, 170' }: { className?: string; fill?: string }) {
  const beam = `radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(${fill}, 0.22) 0, rgba(${fill}, 0.06) 50%, rgba(${fill}, 0) 80%)`;

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 z-0 overflow-hidden', className)}
    >
      <div className="animate-spotlight absolute left-1/2 top-0 h-[80vh] w-[140vw] max-w-[1400px] opacity-0">
        <div
          className="absolute left-0 top-0 h-full w-[45%] -rotate-[20deg]"
          style={{ background: beam }}
        />
        <div
          className="absolute right-0 top-0 h-full w-[45%] rotate-[20deg]"
          style={{ background: beam }}
        />
      </div>
    </div>
  );
}
