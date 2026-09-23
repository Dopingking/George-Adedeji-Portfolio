import Image from "next/image";
import BackgroundArtwork from "./BackgroundArtwork";
import BrandGlyph from "./BrandGlyph";
import N8nWorkflow from "./N8nWorkflow";
import Reveal from "./Reveal";
import { assets } from "@/lib/site";

export default function Automation() {
  return (
    <section id="automation" className="relative overflow-hidden bg-canvas-deep py-20 sm:py-28">
      <BackgroundArtwork variant="automation" />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <Reveal as="p" className="eyebrow">
            Currently learning
          </Reveal>

          <Reveal delay={60}>
            <h2 className="mt-4 text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.05]">
              AI automation.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-[42ch] text-[1.02rem] leading-relaxed text-ink-soft">
              Exploring how n8n, APIs and automation tools can connect workflows and simplify
              business processes.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/85 py-2 pl-3 pr-4 text-sm font-medium text-ink-soft">
              <BrandGlyph name="n8n" size={20} colored title="n8n" />
              <span className="h-4 w-px bg-line" />
              Learning, not claiming expertise yet.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="relative">
            <div className="rounded-[22px] border border-white/60 bg-white/50 p-2.5 shadow-[0_40px_90px_-56px_rgba(21,21,21,0.65)] backdrop-blur-[2px]">
              {assets.n8nWorkflowImage ? (
                <Image
                  src={assets.n8nWorkflowImage}
                  alt={assets.n8nWorkflowAlt}
                  width={1600}
                  height={900}
                  loading="lazy"
                  sizes="(max-width: 1024px) 92vw, 680px"
                  className="h-auto w-full rounded-[16px]"
                />
              ) : (
                <N8nWorkflow />
              )}
            </div>

            <div className="absolute -right-3 -top-5 flex items-center gap-2 rounded-2xl border border-line bg-paper px-3.5 py-2.5 shadow-[0_24px_50px_-32px_rgba(21,21,21,0.55)] sm:-right-6">
              <BrandGlyph name="n8n" size={22} colored title="n8n" />
              <span className="text-sm font-semibold">n8n</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
