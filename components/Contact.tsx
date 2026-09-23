"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import BackgroundArtwork from "./BackgroundArtwork";
import BrandGlyph from "./BrandGlyph";
import Reveal from "./Reveal";
import { ArrowRight, Mail } from "./ui/Icons";
import { contact, contactEndpoint, whatsappUrl } from "@/lib/site";

const projectTypes = [
  "Website",
  "Web application",
  "Redesign or improvement",
  "Automation / workflow",
  "Something else",
];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted/80 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;

  setStatus("sending");

  const formData = new FormData(form);

  formData.append(
    "access_key",
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  );

  formData.append(
    "subject",
    "New project enquiry — George Adedeji",
  );

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      },
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to send message");
    }

    form.reset();
    setStatus("sent");
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
}

  const channels = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail size={17} />,
    },
    {
      label: "GitHub",
      value: contact.github.handle,
      href: contact.github.url,
      icon: <BrandGlyph name="github" size={17} />,
    },
    {
      label: "LinkedIn",
      value: contact.linkedin.handle,
      href: contact.linkedin.url,
      icon: <BrandGlyph name="linkedin" size={17} />,
    },
    {
      label: "X",
      value: contact.x.handle,
      href: contact.x.url,
      icon: <BrandGlyph name="x" size={16} />,
    },
    {
      label: "WhatsApp",
      value: contact.whatsapp.display,
      href: whatsappUrl,
      icon: <BrandGlyph name="whatsapp" size={17} />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <BackgroundArtwork variant="contact" />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal as="p" className="eyebrow">
              Contact
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-4 text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.05]">
                Let&rsquo;s build something.
              </h2>
            </Reveal>

            <Reveal delay={110}>
              <p className="mt-5 max-w-[40ch] text-[1.02rem] leading-relaxed text-ink-soft">
                Have a website, web application or software idea in mind?
                I&rsquo;d love to hear about it.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <ul className="mt-9 space-y-2.5">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <Link
                      href={channel.href}
                      target={
                        channel.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel="noreferrer"
                      className="group flex items-center gap-3.5 rounded-2xl border border-transparent px-2 py-2 transition-colors hover:border-line hover:bg-paper/70"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft">
                        {channel.icon}
                      </span>

                      <span className="leading-tight">
                        <span className="block text-[0.74rem] font-medium uppercase tracking-[0.14em] text-ink-muted">
                          {channel.label}
                        </span>

                        <span className="block text-[0.92rem] font-medium">
                          {channel.value}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <form
              onSubmit={onSubmit}
              className="rounded-[22px] border border-line bg-paper/90 p-5 shadow-[0_40px_90px_-60px_rgba(21,21,21,0.6)] sm:p-7"
              noValidate={false}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[0.85rem] font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[0.85rem] font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-[0.85rem] font-medium"
                >
                  Project type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  required
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[0.85rem] font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project…"
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[0.95rem] font-medium text-canvas transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending…" : "Get in touch"}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p
                aria-live="polite"
                className="mt-4 min-h-[1.25rem] text-[0.85rem] text-ink-soft"
              >
                {status === "sent" &&
                  "Thanks — your message is on its way. I'll reply by email."}

                {status === "error" &&
                  "That didn't send. Email me directly at " +
                    contact.email +
                    "."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
