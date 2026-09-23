import { brandIcons } from "@/lib/brand-icons";

/**
 * A vector recreation of an n8n editor canvas — stays sharp at any size and
 * costs no image bytes. To show a real screenshot of your own workflow instead,
 * set `assets.n8nWorkflowImage` in lib/site.ts.
 */

const NODE = 62;

type NodeDef = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub?: string;
  tone: string;
  trigger?: boolean;
  glyph: "webhook" | "filter" | "mail" | "database" | "pencil" | "n8n" | "supabase";
};

const nodes: NodeDef[] = [
  { id: "trigger", x: 44, y: 168, label: "Webhook", sub: "Form submitted", tone: "#EA4B71", trigger: true, glyph: "webhook" },
  { id: "set", x: 196, y: 168, label: "Edit fields", tone: "#7D8FFF", glyph: "pencil" },
  { id: "if", x: 340, y: 168, label: "If", sub: "New customer?", tone: "#F3B94F", glyph: "filter" },
  { id: "mail", x: 496, y: 78, label: "Send email", tone: "#66B89A", glyph: "mail" },
  { id: "db", x: 496, y: 262, label: "Supabase", tone: "#3FCF8E", glyph: "supabase" },
  { id: "log", x: 644, y: 168, label: "Log run", tone: "#8E8FFA", glyph: "database" },
];

const connections: { from: string; to: string; label?: string }[] = [
  { from: "trigger", to: "set" },
  { from: "set", to: "if" },
  { from: "if", to: "mail", label: "true" },
  { from: "if", to: "db", label: "false" },
  { from: "mail", to: "log" },
  { from: "db", to: "log" },
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

function curve(from: NodeDef, to: NodeDef) {
  const x1 = from.x + NODE;
  const y1 = from.y + NODE / 2;
  const x2 = to.x;
  const y2 = to.y + NODE / 2;
  const dx = Math.max(38, (x2 - x1) * 0.55);
  return `M${x1} ${y1} C${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

/** n8n trigger nodes have a rounded left edge and a squared right edge. */
function triggerShape(node: NodeDef) {
  const r = NODE / 2;
  const { x, y } = node;
  return [
    `M${x + r} ${y}`,
    `H${x + NODE - 12}`,
    `A12 12 0 0 1 ${x + NODE} ${y + 12}`,
    `V${y + NODE - 12}`,
    `A12 12 0 0 1 ${x + NODE - 12} ${y + NODE}`,
    `H${x + r}`,
    `A${r} ${r} 0 0 1 ${x + r} ${y}`,
    "Z",
  ].join(" ");
}

function Glyph({ node }: { node: NodeDef }) {
  const cx = node.x + NODE / 2;
  const cy = node.y + NODE / 2;

  if (node.glyph === "supabase" || node.glyph === "n8n") {
    const icon = node.glyph === "supabase" ? brandIcons.supabase : brandIcons.n8n;
    const scale = 22 / 24;
    return (
      <g transform={`translate(${cx - 11} ${cy - 11}) scale(${scale})`}>
        <path d={icon.path} fill={node.tone} />
      </g>
    );
  }

  const stroke = {
    fill: "none",
    stroke: node.tone,
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (node.glyph === "webhook") {
    return (
      <g transform={`translate(${cx - 11} ${cy - 11})`} {...stroke}>
        <circle cx="11" cy="11" r="9" />
        <path d="M11 2c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S8.4 4.6 11 2Z" />
        <path d="M2.4 8h17.2M2.4 14h17.2" />
      </g>
    );
  }

  if (node.glyph === "filter") {
    return (
      <g transform={`translate(${cx - 11} ${cy - 11})`} {...stroke}>
        <path d="M2.5 4h17l-6.6 7.6v6.6l-3.8 2v-8.6z" />
      </g>
    );
  }

  if (node.glyph === "pencil") {
    return (
      <g transform={`translate(${cx - 11} ${cy - 11})`} {...stroke}>
        <path d="M14.6 2.9a2.3 2.3 0 0 1 3.3 3.3L7.6 16.5l-4.3 1.2 1.2-4.3z" />
        <path d="M3 20.4h16" />
      </g>
    );
  }

  if (node.glyph === "mail") {
    return (
      <g transform={`translate(${cx - 11} ${cy - 11})`} {...stroke}>
        <rect x="2" y="4.5" width="18" height="13" rx="2.4" />
        <path d="m2.6 6.4 8 5.2a1.6 1.6 0 0 0 1.8 0l8-5.2" />
      </g>
    );
  }

  return (
    <g transform={`translate(${cx - 11} ${cy - 11})`} {...stroke}>
      <ellipse cx="11" cy="5.6" rx="7.8" ry="3.1" />
      <path d="M3.2 5.6v10.8c0 1.7 3.5 3.1 7.8 3.1s7.8-1.4 7.8-3.1V5.6" />
      <path d="M3.2 11c0 1.7 3.5 3.1 7.8 3.1s7.8-1.4 7.8-3.1" />
    </g>
  );
}

export default function N8nWorkflow() {
  return (
    <svg
      viewBox="0 0 760 400"
      role="img"
      aria-label="An n8n workflow: a webhook receives a form submission, fields are edited, a condition routes the run to an email step or a Supabase step, and both end in a logging step"
      className="h-auto w-full"
    >
      <defs>
        <pattern id="n8n-grid" width="19" height="19" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.1" fill="#ffffff" fillOpacity="0.1" />
        </pattern>
        <linearGradient id="n8n-canvas" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b1d27" />
          <stop offset="100%" stopColor="#14161d" />
        </linearGradient>
        <marker id="n8n-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 1.5 9 5 0 8.5z" fill="#6f7488" />
        </marker>
      </defs>

      <rect width="760" height="400" rx="16" fill="url(#n8n-canvas)" />
      <rect width="760" height="400" rx="16" fill="url(#n8n-grid)" />

      {/* editor chrome */}
      <g>
        <rect x="0" y="0" width="760" height="38" rx="16" fill="#11131a" />
        <rect x="0" y="24" width="760" height="14" fill="#11131a" />
        <g transform="translate(18 12) scale(0.58)">
          <path d={brandIcons.n8n.path} fill="#EA4B71" />
        </g>
        <rect x="42" y="14" width="96" height="9" rx="4.5" fill="#ffffff" fillOpacity="0.16" />
        <rect x="628" y="11" width="52" height="16" rx="8" fill="#EA4B71" fillOpacity="0.9" />
        <rect x="690" y="11" width="52" height="16" rx="8" fill="#ffffff" fillOpacity="0.1" />
      </g>

      {connections.map((connection) => {
        const from = byId[connection.from];
        const to = byId[connection.to];
        return (
          <g key={`${connection.from}-${connection.to}`}>
            <path d={curve(from, to)} fill="none" stroke="#565b6e" strokeWidth="1.6" markerEnd="url(#n8n-arrow)" />
            <path d={curve(from, to)} fill="none" stroke="#EA4B71" strokeWidth="1.6" className="flow-line" opacity="0.65" />
            {connection.label ? (
              <text
                x={from.x + NODE + 26}
                y={(from.y + to.y) / 2 + (connection.label === "true" ? 18 : 48)}
                fill="#9aa0b4"
                fontSize="10"
                fontWeight="600"
                fontFamily="inherit"
              >
                {connection.label}
              </text>
            ) : null}
          </g>
        );
      })}

      {nodes.map((node) => (
        <g key={node.id}>
          {node.trigger ? (
            <path d={triggerShape(node)} fill="#242734" stroke={node.tone} strokeOpacity="0.5" strokeWidth="1.3" />
          ) : (
            <rect
              x={node.x}
              y={node.y}
              width={NODE}
              height={NODE}
              rx="12"
              fill="#242734"
              stroke={node.tone}
              strokeOpacity="0.45"
              strokeWidth="1.3"
            />
          )}
          <Glyph node={node} />

          <circle cx={node.x + NODE + 1} cy={node.y + NODE / 2} r="3.2" fill="#6f7488" />
          {!node.trigger ? <circle cx={node.x - 1} cy={node.y + NODE / 2} r="3.2" fill="#6f7488" /> : null}

          <text
            x={node.x + NODE / 2}
            y={node.y + NODE + 17}
            textAnchor="middle"
            fill="#e7e8ee"
            fontSize="11.5"
            fontWeight="600"
            fontFamily="inherit"
          >
            {node.label}
          </text>
          {node.sub ? (
            <text
              x={node.x + NODE / 2}
              y={node.y + NODE + 31}
              textAnchor="middle"
              fill="#8c92a6"
              fontSize="9.5"
              fontFamily="inherit"
            >
              {node.sub}
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  );
}
