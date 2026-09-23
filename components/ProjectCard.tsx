"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BrandGlyph from "./BrandGlyph";
import { ArrowRight } from "./ui/Icons";
import type { Project } from "@/lib/site";

export default function ProjectCard({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(project.image) && !failed;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper/85 p-3 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_40px_80px_-56px_rgba(21,21,21,0.6)] sm:p-4">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[13px] bg-canvas-deep">
        {showImage ? (
          <Image
            src={project.image as string}
            alt={project.imageAlt}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 46vw, 560px"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,#eef1fb,#f5f3ee)] px-6 text-center">
            <span className="text-lg font-bold tracking-tight text-ink-soft">{project.name}</span>
            <code className="text-[0.72rem] text-ink-muted">public{project.image}</code>
            <span className="text-[0.72rem] text-ink-muted">Drop the screenshot here</span>
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/[0.06]"
        />

        {project.status ? (
          <span className="absolute left-3 top-3 rounded-full border border-amber/50 bg-paper/90 px-3 py-1 text-[0.7rem] font-semibold text-ink-soft backdrop-blur">
            {project.status}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-5 sm:px-2">
        <h3 className="text-[1.35rem] font-bold tracking-tight">{project.name}</h3>

        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech.label}
              className="flex items-center gap-1.5 rounded-full border border-line bg-canvas px-2.5 py-1 text-[0.74rem] font-medium text-ink-soft"
            >
              <BrandGlyph name={tech.icon} size={13} colored />
              {tech.label}
            </li>
          ))}
        </ul>

        <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <Link
          href={project.href}
           target="_blank"
            rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 text-[0.92rem] font-semibold text-ink transition-colors duration-300 hover:text-accent"
          aria-label={`View project: ${project.name}`}
        >
          View project
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Link>
      </div>
    </article>
  );
}
