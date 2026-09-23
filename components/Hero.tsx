import Link from "next/link";
import BackgroundArtwork from "./BackgroundArtwork";
import BrandGlyph from "./BrandGlyph";
import PortraitFrame from "./PortraitFrame";
import Reveal from "./Reveal";
import { ArrowRight, Mail } from "./ui/Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-8 sm:pt-12 lg:pb-24">
      <BackgroundArtwork variant="hero" />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-[34rem]">
          <Reveal as="p" className="eyebrow text-accent">
            Software developer
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-[clamp(2.4rem,7.6vw,4.4rem)] font-black leading-[0.98]">
              I build {" "}
              <span className="text-accent">
                websites &amp; web applications.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[34rem] text-[1.03rem] leading-relaxed text-ink-soft">
              I build modern websites and web applications that help businesses and people get
              things done.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/80 py-2 pl-3 pr-4 text-sm text-ink-soft backdrop-blur-sm">
              <BrandGlyph name="n8n" size={20} colored title="n8n" />
              <span className="h-4 w-px bg-line" />
              Currently learning AI automation.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[0.95rem] font-medium text-canvas transition-transform duration-300 hover:-translate-y-0.5"
              >
                View my work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/70 px-6 py-3.5 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Hire me
                <Mail size={16} />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-6">
          <PortraitFrame />
        </Reveal>
      </div>
    </section>
  );
}
