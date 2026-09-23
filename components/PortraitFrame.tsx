"use client";

import Image from "next/image";
import { useState } from "react";
import { assets } from "@/lib/site";

export default function PortraitFrame() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-[24rem]">
      {/* layered artwork panels behind the portrait */}
      <div
        aria-hidden="true"
        className="absolute -left-6 top-10 hidden h-[62%] w-24 rounded-l-[2rem] bg-gradient-to-b from-accent to-accent/25 sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute -right-5 bottom-8 hidden h-[45%] w-20 rounded-r-[2rem] bg-gradient-to-t from-accent/70 to-accent/10 sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-6 h-16 w-16 rotate-12 rounded-[10px] bg-accent/85 shadow-[0_18px_40px_rgba(36,87,255,0.25)]"
      />

      <div className="relative rounded-[30px] border border-white/70 bg-white/55 p-2.5 shadow-[0_30px_80px_-40px_rgba(21,21,21,0.45)] backdrop-blur-[2px]">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-canvas-deep">
          {!failed ? (
            <Image
              src={assets.portrait}
              alt={assets.portraitAlt}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 460px"
              className="object-cover object-top"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#eef1fb,#f8f7f3)] px-6 text-center">
              <span className="text-4xl font-black tracking-tight text-accent">GA</span>
              <p className="text-sm text-ink-muted">
                Add your portrait at
                <br />
                <code className="text-ink">public{assets.portrait}</code>
              </p>
            </div>
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(36,87,255,0.06),transparent_38%)]"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-6 left-0 -translate-x-1/2 rounded-xl border border-line bg-paper px-3 py-2 text-xs font-semibold tracking-tight shadow-[0_12px_30px_-18px_rgba(21,21,21,0.5)]"
        >
          <span className="text-accent">GA</span>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="absolute -right-2 top-[58%] hidden rotate-[-8deg] text-right text-[0.95rem] font-medium leading-tight text-ink-soft lg:block"
      >
        Build
        <br />
        Solve
        <br />
        Improve
        <span className="mt-1 block h-px w-16 bg-ink/40" />
      </p>
    </div>
  );
}
