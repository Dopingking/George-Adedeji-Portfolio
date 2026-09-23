type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: "false" as const,
});

export function ArrowRight({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h13" />
      <path d="m12.5 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function Mail({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.3 5.6a1.5 1.5 0 0 0 1.4 0L21 7" />
    </svg>
  );
}

export function Menu({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function Close({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Spark({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3.5 13.7 9a3 3 0 0 0 1.9 1.9l5.4 1.6-5.4 1.7A3 3 0 0 0 13.7 16L12 21.5 10.3 16a3 3 0 0 0-1.9-2l-5.4-1.6 5.4-1.6A3 3 0 0 0 10.3 9z" />
    </svg>
  );
}

export function Globe({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17" />
      <path d="M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3Z" />
    </svg>
  );
}

export function Layers({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m12 3 8.5 4.6L12 12.2 3.5 7.6 12 3Z" />
      <path d="m3.5 12.4 8.5 4.6 8.5-4.6" />
      <path d="m3.5 16.8 8.5 4.6 8.5-4.6" />
    </svg>
  );
}
