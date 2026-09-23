type Variant = "hero" | "about" | "projects" | "automation" | "contact";

const ACCENT = "#2457FF";
const CORAL = "#FF695F";
const AMBER = "#F3B94F";
const SAGE = "#66B89A";

function DotGrid({ x, y, rows = 3, cols = 4, gap = 14 }: { x: number; y: number; rows?: number; cols?: number; gap?: number }) {
  const dots = [];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      dots.push(<circle key={`${r}-${c}`} cx={x + c * gap} cy={y + r * gap} r="2" fill={ACCENT} opacity="0.5" />);
    }
  }
  return <g>{dots}</g>;
}

export default function BackgroundArtwork({ variant = "hero" }: { variant?: Variant }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        style={{ opacity: variant === "projects" ? 0.75 : 1 }}
      >
        <defs>
          <linearGradient id={`panel-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.5" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id={`veil-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id={`halo-${variant}`}>
            <stop offset="0%" stopColor={AMBER} stopOpacity="0.16" />
            <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`halo-blue-${variant}`}>
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.12" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </radialGradient>
        </defs>

        {variant === "hero" && (
          <g>
            <circle cx="120" cy="120" r="260" fill={`url(#halo-blue-hero)`} />
            <circle cx="90" cy="520" r="230" fill={`url(#halo-hero)`} />
            <path d="M-140 330C60 120 360 -30 640 -70" fill="none" stroke={ACCENT} strokeWidth="1.1" opacity="0.4" />
            <path d="M-120 470C110 250 430 90 760 40" fill="none" stroke={AMBER} strokeWidth="1" opacity="0.5" />
            <circle cx="292" cy="96" r="5" fill={ACCENT} opacity="0.75" />
            <path d="M268 172l16 10-16 10z" fill={ACCENT} opacity="0.7" transform="rotate(180 276 182)" />
            <g className="artwork-drift">
              <rect x="1180" y="120" width="230" height="300" rx="10" fill={`url(#veil-hero)`} opacity="0.75" transform="rotate(8 1295 270)" />
              <rect x="1238" y="176" width="140" height="190" rx="6" fill={`url(#panel-hero)`} transform="rotate(8 1308 271)" />
            </g>
            <path d="M1246 596l34-34 30 30-34 34z" fill={ACCENT} opacity="0.85" />
            <path d="M1090 700c120-90 220-140 350-160" fill="none" stroke={ACCENT} strokeWidth="1.1" opacity="0.35" />
            <DotGrid x={1288} y={70} rows={3} cols={4} />
            <circle cx="1120" cy="820" r="220" fill={`url(#halo-blue-hero)`} />
            <path d="M-60 780a300 300 0 0 0 420 120" fill="none" stroke={ACCENT} strokeWidth="1.2" opacity="0.3" />
          </g>
        )}

        {variant === "about" && (
          <g>
            <circle cx="1320" cy="180" r="260" fill={`url(#halo-blue-about)`} />
            <path d="M1520 210C1280 110 1020 96 760 150" fill="none" stroke={ACCENT} strokeWidth="1.1" opacity="0.32" />
            <path d="M-40 640C180 520 420 480 700 500" fill="none" stroke={AMBER} strokeWidth="1" opacity="0.4" />
            <g className="artwork-drift">
              <path d="M40 240l120-120v190z" fill={ACCENT} opacity="0.16" />
            </g>
            <rect x="1150" y="470" width="260" height="220" rx="12" fill={`url(#veil-about)`} opacity="0.6" transform="rotate(-10 1280 580)" />
            <path d="M92 706l16 10-16 10z" fill={ACCENT} opacity="0.55" />
            <circle cx="640" cy="812" r="4" fill={CORAL} opacity="0.5" />
            <DotGrid x={64} y={430} rows={2} cols={3} />
          </g>
        )}

        {variant === "projects" && (
          <g>
            <circle cx="60" cy="300" r="240" fill={`url(#halo-projects)`} />
            <circle cx="1400" cy="640" r="280" fill={`url(#halo-blue-projects)`} />
            <path d="M-100 120C160 260 300 520 340 900" fill="none" stroke={ACCENT} strokeWidth="1.1" opacity="0.22" />
            <path d="M1480 40C1300 260 1240 520 1260 900" fill="none" stroke={ACCENT} strokeWidth="1" opacity="0.18" />
            <path d="M1360 150l90-90v150z" fill={ACCENT} opacity="0.14" />
            <path d="M28 470l14 9-14 9z" fill={ACCENT} opacity="0.5" />
            <circle cx="1380" cy="300" r="4" fill={AMBER} opacity="0.7" />
          </g>
        )}

        {variant === "automation" && (
          <g>
            <circle cx="1220" cy="420" r="300" fill={`url(#halo-blue-automation)`} />
            <path d="M-40 300C260 200 640 240 900 420" fill="none" stroke={ACCENT} strokeWidth="1" opacity="0.25" />
            <path d="M120 760C400 620 700 620 1000 740" fill="none" stroke={CORAL} strokeWidth="1" opacity="0.3" />
            <circle cx="180" cy="300" r="4" fill={SAGE} opacity="0.7" />
            <DotGrid x={90} y={520} rows={3} cols={3} />
          </g>
        )}

        {variant === "contact" && (
          <g>
            <circle cx="140" cy="640" r="280" fill={`url(#halo-contact)`} />
            <path d="M-60 300C200 200 520 180 820 240" fill="none" stroke={ACCENT} strokeWidth="1" opacity="0.25" />
            <path d="M40 120l110-110v180z" fill={ACCENT} opacity="0.12" />
            <path d="M1380 806l16 10-16 10z" fill={ACCENT} opacity="0.5" />
            <circle cx="1240" cy="140" r="4" fill={AMBER} opacity="0.7" />
          </g>
        )}
      </svg>
    </div>
  );
}
