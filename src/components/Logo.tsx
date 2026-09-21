import { useId } from 'react';

/** The K.T monogram — same artwork as /favicon.svg, inlined so it can scale with the UI. */
export function LogoMark({ className }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="9" y1="13" x2="57" y2="51" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00d4aa" />
          <stop offset="1" stopColor="#7cf5dc" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#0a0a0f" />
      <rect x="1" y="1" width="62" height="62" rx="13" stroke="#00d4aa" strokeOpacity=".35" strokeWidth="2" />
      <g stroke={`url(#${gradientId})`} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.5 16v32M24 16 11.5 32l13 16M37.5 16h16M45.5 16v32" />
      </g>
      <circle cx="31.5" cy="48" r="2.7" fill={`url(#${gradientId})`} />
    </svg>
  );
}
