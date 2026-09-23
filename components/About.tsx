"use client";

import { useState } from "react";
import BackgroundArtwork from "./BackgroundArtwork";
import BrandGlyph from "./BrandGlyph";
import Reveal from "./Reveal";
import { ArrowRight, Globe, Layers } from "./ui/Icons";
import { FiBriefcase, FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

const capabilities = [
  {
    title: "Websites",
    note: "for businesses",
    icon: <Globe size={18} className="text-accent" />,
  },
  {
    title: "Web applications",
    note: "with real functionality",
    icon: <Layers size={18} className="text-accent" />,
  },
  {
    title: "AI automation",
    note: "currently learning n8n",
    icon: <BrandGlyph name="n8n" size={19} colored />,
  },
];

const WHATSAPP_HREF = "YOUR_WHATSAPP_LINK";
const EMAIL_HREF = "mailto:YOUR_EMAIL";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-canvas-deep py-20 sm:py-28"
    >
      <BackgroundArtwork variant="about" />

      <div className="shell relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal as="p" className="eyebrow">
            About
          </Reveal>

          <Reveal delay={60}>
            <h2 className="mt-4 max-w-[20ch] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02]">
              I&rsquo;m George Adedeji, a{" "}
              <span className="wipe-text relative inline-block">
                <span
                  aria-hidden="true"
                  className="text-ink-muted/40"
                >
                  software developer.
                </span>

                <span
                  aria-hidden="true"
                  className="wipe-text-fill absolute inset-0 text-accent"
                >
                  software developer.
                </span>

                <span className="sr-only">
                  software developer.
                </span>
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-[52ch] text-[1.02rem] leading-relaxed text-ink-soft">
              I build modern websites and web applications that help
              businesses work better and reach more people. I enjoy
              turning ideas into useful digital products.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <ul className="mt-9 flex flex-wrap justify-center gap-3">
              {capabilities.map((item) => (
                <li
                  key={item.title}
                  className="
                    flex items-center gap-3
                    rounded-2xl
                    border border-line
                    bg-paper/85
                    px-4 py-3
                    text-left
                    backdrop-blur-sm
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-accent/30
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                  "
                >
                  <span
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-accent-soft
                    "
                  >
                    {item.icon}
                  </span>

                  <span className="leading-tight">
                    <span className="block text-[0.92rem] font-semibold">
                      {item.title}
                    </span>

                    <span className="block text-[0.78rem] text-ink-muted">
                      {item.note}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* WORK WITH ME */}
          <Reveal delay={240}>
            <div className="relative mt-9 flex w-full flex-col items-center">
              <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                aria-expanded={open}
                aria-controls="contact-options"
                className={`
                  group relative
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  px-6 py-3.5
                  text-sm font-semibold
                  transition-all duration-300
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent/40
                  ${
                    open
                      ? "border-accent bg-accent text-canvas-deep shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
                      : "border-line bg-paper text-ink shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.09)]"
                  }
                `}
              >
                {/* Briefcase icon */}
                <span
                  className={`
                    flex h-8 w-8 items-center justify-center
                    rounded-full
                    transition-all duration-300
                    ${
                      open
                        ? "bg-canvas-deep/10"
                        : "bg-accent-soft text-accent"
                    }
                  `}
                >
                  <FiBriefcase
                    size={17}
                    strokeWidth={2}
                  />
                </span>

                <span>Work with me</span>

                <span
                  className={`
                    flex h-7 w-7 items-center justify-center
                    rounded-full
                    transition-transform duration-300
                    ${
                      open
                        ? "rotate-90 bg-canvas-deep/10"
                        : "bg-accent-soft text-accent"
                    }
                  `}
                >
                  <ArrowRight size={15} />
                </span>
              </button>

              {/* CONTACT OPTIONS */}
              <div
                id="contact-options"
                aria-hidden={!open}
                className={`
                  grid w-full max-w-[390px]
                  transition-[grid-template-rows,opacity,margin]
                  duration-300 ease-out
                  ${
                    open
                      ? "mt-4 grid-rows-[1fr] opacity-100"
                      : "mt-0 grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className="
                      rounded-[24px]
                      border border-line
                      bg-paper/90
                      p-2
                      text-left
                      shadow-[0_18px_50px_rgba(0,0,0,0.08)]
                      backdrop-blur-md
                    "
                  >
                    {/* WhatsApp */}
                    <a
                      href={"https://wa.me/2349133469809"}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={open ? 0 : -1}
                      className="
                        group flex items-center gap-3
                        rounded-[18px]
                        p-3
                        transition-all duration-200
                        hover:bg-accent-soft/60
                      "
                    >
                      <span
                        className="
                          flex h-11 w-11 shrink-0
                          items-center justify-center
                          rounded-[14px]
                          bg-accent-soft
                          text-accent
                          transition-transform duration-200
                          group-hover:scale-105
                        "
                      >
                        <FaWhatsapp size={21} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-ink">
                          Chat me on WhatsApp
                        </span>

                        <span className="mt-0.5 block text-xs text-ink-muted">
                          Quick replies · Let&rsquo;s talk
                        </span>
                      </span>

                      <span
                        className="
                          flex h-8 w-8 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-accent-soft
                          text-accent
                          transition-all duration-200
                          group-hover:translate-x-0.5
                        "
                      >
                        <FiArrowUpRight size={16} />
                      </span>
                    </a>

                    {/* Divider */}
                    <div className="mx-3 h-px bg-line/70" />

                    {/* Email */}
                    <a
                      href={"mailto:georgeadedeji79@gmail.com"}
                      tabIndex={open ? 0 : -1}
                      className="
                        group flex items-center gap-3
                        rounded-[18px]
                        p-3
                        transition-all duration-200
                        hover:bg-paper-muted/50
                      "
                    >
                      <span
                        className="
                          flex h-11 w-11 shrink-0
                          items-center justify-center
                          rounded-[14px]
                          bg-ink/5
                          text-ink
                          transition-transform duration-200
                          group-hover:scale-105
                        "
                      >
                        <FiMail size={20} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-ink">
                          Send me an email
                        </span>

                        <span className="mt-0.5 block text-xs text-ink-muted">
                          I&rsquo;ll get back to you soon
                        </span>
                      </span>

                      <span
                        className="
                          flex h-8 w-8 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-ink/5
                          text-ink-soft
                          transition-all duration-200
                          group-hover:translate-x-0.5
                        "
                      >
                        <FiArrowUpRight size={16} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
