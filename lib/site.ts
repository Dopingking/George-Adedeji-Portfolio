import type { BrandIconName } from "./brand-icons";


export const site = {
  name: "George Adedeji",
  role: "Software Developer",
  focus: "Websites & Web Applications",
  url: "https://georgeadedeji.com", 
  title: "George Adedeji — Software Developer | Websites & Web Applications",
  description:
    "George Adedeji is a software developer building modern websites and web applications for businesses and people, with a current focus on learning AI automation.",
} as const;

export const contact = {
  email: "georgeadedeji79@.com",
  github: { handle: "github.com/Dopingking", url: "https://github.com/Dopingking" }, 
  linkedin: {
    handle: "linkedin.com/in/george-adedeji",
    url: "https://www.linkedin.com/in/adedeji-george-a903a2422/",
  }, 
  x: { handle: "@KDope958", url: "https://x.com/KDope958" }, 
  whatsapp: {
    
    number: "2349133469809",
    display: "+234 913 346 9809",
  },
} as const;

export const whatsappUrl = `https://wa.me/${contact.whatsapp.number}`;

/**
 * Optional: a hosted endpoint for the contact form (Formspree, Getform, Basin,
 * your own /api route…). Set NEXT_PUBLIC_CONTACT_ENDPOINT in .env.local.
 * When it is empty the form falls back to opening the visitor's mail client.
 */
export const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export type TechItem = { label: string; icon: BrandIconName | "spark" };

export const marquee: TechItem[] = [
  { label: "React", icon: "react" },
  { label: "Next.js", icon: "nextjs" },
  { label: "TypeScript", icon: "typescript" },
  { label: "Tailwind CSS", icon: "tailwind" },
  { label: "Supabase", icon: "supabase" },
  { label: "GitHub", icon: "github" },
  { label: "Vercel", icon: "vercel" },
  { label: "n8n", icon: "n8n" },
  { label: "WhatsApp", icon: "whatsapp" },
  { label: "Websites", icon: "spark" },
  { label: "Web Applications", icon: "spark" },
  { label: "API Integrations", icon: "spark" },
  { label: "AI Automation", icon: "spark" },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: { label: string; icon: BrandIconName }[];
  /** EDIT: drop a screenshot in public/images/projects/ and point here. */
  image: string | null;
  imageAlt: string;
  href: string; // EDIT: live site or repository
  status?: "In progress";
  span: "wide" | "regular";
};

export const projects: Project[] = [
  {
    slug: "klaud-koncept",
    name: "Klaud Koncept",
    description:
      "Business center, travel and hub website with admin dashboard and Supabase integration.",
    tech: [
      { label: "Next.js", icon: "nextjs" },
      { label: "TypeScript", icon: "typescript" },
      { label: "Tailwind CSS", icon: "tailwind" },
      { label: "Supabase", icon: "supabase" },
    ],
    image: "/images/projects/klaud-koncept.png",
    imageAlt: "Klaud Koncept website shown on a laptop and a phone",
    href: "https://www.klaudkoncept.com",
    span: "wide",
  },
  {
    slug: "hallhub",
    name: "HallHub",
    description:
      "Lagos venue booking platform with customer, vendor and admin features, GPS search and Paystack integration in progress.",
    tech: [
      { label: "Next.js", icon: "nextjs" },
      { label: "TypeScript", icon: "typescript" },
      { label: "Tailwind CSS", icon: "tailwind" },
    ],
    image: "/images/projects/hallhub.png",
    imageAlt: "HallHub venue booking platform interface",
    href: "#",
    status: "In progress",
    span: "wide",
  },
  {
    slug: "checkin",
    name: "CheckIn",
    description: "QR attendance system for schools and organizations with Supabase backend.",
    tech: [
      { label: "React", icon: "react" },
      { label: "Supabase", icon: "supabase" },
      { label: "Tailwind CSS", icon: "tailwind" },
    ],
    image: "/images/projects/checkin.png",
    imageAlt: "CheckIn attendance dashboard and QR scanning screen on a phone",
    href: "https://checkin-beta-blond.vercel.app", 
    span: "regular",
  },
  {
    slug: "studio-x",
    name: "Studio X",
    description: "Photography portfolio website with smooth animations and modern UI.",
    tech: [
      { label: "Next.js", icon: "nextjs" },
      { label: "Tailwind CSS", icon: "tailwind" },
    ],
    image: "/images/projects/studio-x.png",
    imageAlt: "Studio X photography portfolio homepage",
    href: "https://studio-x-six.vercel.app", 
    span: "regular",
  },
];

export const assets = {
  
  portrait: "/images/portrait.png",
  portraitAlt: "George Adedeji",
  logo: "/images/ga-logo.png",
  
  n8nWorkflowImage: null as string | null,
  n8nWorkflowAlt: "An n8n workflow connecting a form submission to email and database steps",
};
