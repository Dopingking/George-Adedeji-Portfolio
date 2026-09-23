import Image from "next/image";
import Link from "next/link";
import BrandGlyph from "./BrandGlyph";
import { contact, nav, site, whatsappUrl } from "@/lib/site";

const socials = [
  { label: "GitHub", href: contact.github.url, icon: "github" as const },
  { label: "LinkedIn", href: contact.linkedin.url, icon: "linkedin" as const },
  { label: "X", href: contact.x.url, icon: "x" as const },
  { label: "WhatsApp", href: whatsappUrl, icon: "whatsapp" as const },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-deep">
      <div className="shell flex flex-col gap-8 py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={34}
              height={34}
              className="h-[34px] w-[34px] object-contain"
              priority
            />

            <p className="text-[0.95rem] font-medium">
              {site.name}
              <span className="mx-2 text-ink-muted">—</span>
              <span className="text-ink-soft">{site.role}</span>
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.92rem] text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ul className="flex items-center gap-2.5">
            {socials.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper/70 text-ink-soft transition-colors hover:border-ink"
                >
                  <BrandGlyph
                    name={social.icon}
                    size={17}
                    colored
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 border-t border-line pt-6 text-[0.82rem] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>

          <p className="flex items-center gap-2.5">
            <span>Build</span>
            <span className=" bg-accent" />
            <span>Solve</span>
            <span className=" bg-accent" />
            <span>Improve</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
