import type { IconType } from "react-icons";
import {
  SiCss,
  SiGithub,
  SiHtml5,
  SiNextdotjs,
  SiN8N,
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
  n8n: SiN8N,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss,
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
