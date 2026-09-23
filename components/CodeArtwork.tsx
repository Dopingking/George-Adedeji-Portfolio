const lines: { indent: number; parts: { w: number; tone: string }[] }[] = [
  { indent: 0, parts: [{ w: 34, tone: "bg-[#c678dd]" }, { w: 46, tone: "bg-[#61afef]" }] },
  { indent: 1, parts: [{ w: 28, tone: "bg-[#e5c07b]" }, { w: 60, tone: "bg-[#98c379]" }] },
  { indent: 1, parts: [{ w: 40, tone: "bg-[#56b6c2]" }, { w: 30, tone: "bg-[#abb2bf]" }] },
  { indent: 2, parts: [{ w: 52, tone: "bg-[#98c379]" }, { w: 22, tone: "bg-[#e06c75]" }] },
  { indent: 2, parts: [{ w: 30, tone: "bg-[#61afef]" }, { w: 44, tone: "bg-[#abb2bf]" }] },
  { indent: 1, parts: [{ w: 24, tone: "bg-[#c678dd]" }] },
  { indent: 0, parts: [{ w: 18, tone: "bg-[#abb2bf]" }] },
  { indent: 0, parts: [{ w: 38, tone: "bg-[#61afef]" }, { w: 26, tone: "bg-[#e5c07b]" }] },
  { indent: 1, parts: [{ w: 56, tone: "bg-[#98c379]" }] },
  { indent: 1, parts: [{ w: 32, tone: "bg-[#56b6c2]" }, { w: 36, tone: "bg-[#abb2bf]" }] },
];

const notes = ["Clean code", "Better solutions", "Real impact"];

export default function CodeArtwork() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem]">
      <div
        className="absolute -right-6 -top-8 hidden h-24 w-24 rounded-[14px] bg-accent/80 sm:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />

      <div className="relative overflow-hidden rounded-[20px] border border-white/60 bg-[#12151c] p-4 shadow-[0_40px_90px_-50px_rgba(21,21,21,0.7)] sm:p-5">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 h-2 w-24 rounded-full bg-white/10" />
        </div>

        <div className="space-y-2.5">
          {lines.map((line, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-4 shrink-0 text-right text-[0.6rem] font-medium text-white/25">
                {index + 1}
              </span>
              <span style={{ width: `${line.indent * 14}px` }} className="shrink-0" />
              {line.parts.map((part, partIndex) => (
                <span
                  key={partIndex}
                  className={`h-2 rounded-full opacity-80 ${part.tone}`}
                  style={{ width: `${part.w * 0.45}%` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -right-3 top-8 w-32 rounded-[16px] border border-line bg-paper px-4 py-4 shadow-[0_24px_50px_-30px_rgba(21,21,21,0.55)] sm:-right-8 sm:w-36">
        <span className="block text-2xl font-black tracking-tight">
          <span className="text-accent">G</span>A
        </span>
        <span className="mt-2 block h-px w-full bg-line" />
        <span className="mt-2 block text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
          Software
        </span>
      </div>

      <ul className="absolute -bottom-6 left-2 space-y-1.5 rounded-[16px] border border-line bg-paper/95 px-4 py-3 shadow-[0_24px_50px_-30px_rgba(21,21,21,0.55)] backdrop-blur sm:left-6">
        {notes.map((note) => (
          <li key={note} className="flex items-center gap-2 text-[0.78rem] font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}
