import type { Metadata, Viewport } from "next";
import "./globals.css";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "George Adedeji",
    "software developer",
    "web developer Lagos",
    "Next.js developer",
    "React developer",
    "web applications",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: contact.x.handle,
  },
 icons: {
  icon: "/favicon.ico",
  apple: "/images/apple-touch-icon.png",
},
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F7F3",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  knowsAbout: ["Web development", "Web applications", "React", "Next.js", "TypeScript", "n8n"],
  sameAs: [contact.github.url, contact.linkedin.url, contact.x.url],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{`.rise { opacity: 1 !important; }`}</style>
        </noscript>
      </head>
      <body className="paper-grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-canvas"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
