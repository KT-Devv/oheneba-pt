import { NumberTicker } from '@/components/ui/number-ticker';

/** Counts up leading numbers ("8+" → 8 then "+"); renders anything else ("WRO") as-is. */
export function StatValue({ value, delay = 0 }: { value: string; delay?: number }) {
  const match = /^(\d+)(.*)$/.exec(value);
  if (!match) return <>{value}</>;

  return (
    <span aria-label={value}>
      <span aria-hidden="true">
        <NumberTicker value={Number(match[1])} delay={delay} />
        {match[2]}
      </span>
    </span>
  );
}
