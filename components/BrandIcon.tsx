import type { IconType } from "react-icons";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiNextdotjs,
  SiN8n,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWhatsapp,
} from "react-icons/si";

const icons: Record<string, IconType> = {
  react: SiReact,
  next: SiNextdotjs,
  n8n: SiN8n,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss3,
  supabase: SiSupabase,
  github: SiGithub,
  vercel: SiVercel,
  whatsapp: SiWhatsapp,
};

export type BrandIconName = keyof typeof icons;

export function BrandIcon({ name, size = 17 }: { name: BrandIconName; size?: number }) {
  const Icon = icons[name];
  return <Icon size={size} aria-hidden="true" focusable="false" />;
}
