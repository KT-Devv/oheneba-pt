import { BlurFade } from '@/components/ui/blur-fade';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  number: string;
  title: string;
  /** Use `h1` for the page's main heading and `h2` for later sections. */
  as?: 'h1' | 'h2';
  className?: string;
}

/** Big faded index number next to a section title; the number is purely decorative. */
export function SectionHeading({ number, title, as: Heading = 'h2', className }: SectionHeadingProps) {
  return (
    <BlurFade className={cn('mb-16 flex items-center gap-4 md:mb-20', className)}>
      <span aria-hidden="true" className="text-6xl font-bold text-accent/20 md:text-7xl">
        {number}
      </span>
      <Heading className="section-title text-2xl font-bold md:text-3xl">{title}</Heading>
    </BlurFade>
  );
}
