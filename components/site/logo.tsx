import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn('text-accent', className)}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="11"
        className="fill-primary"
        stroke="currentColor"
        strokeWidth="0"
      />
      <path
        d="M11 27V13h4l5 8 5-8h4v14h-3.5v-8.2L20.5 26 15 18.8V27H11z"
        className="fill-accent"
      />
      <circle cx="29" cy="13" r="2.4" className="fill-accent" />
    </svg>
  );
}
