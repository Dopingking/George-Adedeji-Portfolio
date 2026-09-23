import Link from "next/link";
import BackgroundArtwork from "./BackgroundArtwork";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { ArrowRight } from "./ui/Icons";
import { contact, projects } from "@/lib/site";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <BackgroundArtwork variant="projects" />

      <div className="shell relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal as="p" className="eyebrow">
              Selected work
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.05]">
                Featured <span className="text-accent">projects.</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-5 max-w-[52ch] text-[1.02rem] leading-relaxed text-ink-soft">
                A selection of real projects I&rsquo;ve built, from websites to web applications.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <Link
              href={contact.github.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-[0.92rem] font-semibold transition-colors duration-300 hover:text-accent"
            >
              All projects on GitHub
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
