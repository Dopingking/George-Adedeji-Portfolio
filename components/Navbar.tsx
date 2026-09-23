"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Close, Menu } from "./ui/Icons";
import { nav } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current
      ?.querySelector<HTMLAnchorElement>("a")
      ?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        lifted
          ? "border-b border-line/70 bg-canvas/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="#top"
          aria-label="Back to top"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="George Adedeji"
            width={48}
            height={48}
            priority
            className="h-[38px] w-[38px] object-contain"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 md:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}

              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.9rem] font-medium text-canvas transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Hire me
            <ArrowRight size={15} />
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper/70 text-ink md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-canvas md:hidden"
      >
        <nav
          aria-label="Mobile"
          className="shell flex flex-col py-4"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-4 text-lg font-medium"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-medium text-canvas"
          >
            Hire me
            <ArrowRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
