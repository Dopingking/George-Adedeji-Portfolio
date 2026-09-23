# George Adedeji — Portfolio

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run icons    # regenerate lib/brand-icons.ts from the official icon packages
```

## Everything editable lives in `lib/site.ts`

Identity, contact links, marquee items, project cards and asset paths. Lines marked
`// EDIT` are placeholders — replace them before deploying.

## Assets to add

| What | Where | Notes |
| --- | --- | --- |
| Satoshi font | `public/fonts/Satoshi-Variable.woff2` | Download from [Fontshare](https://www.fontshare.com/fonts/satoshi). The `@font-face` is already wired in `app/globals.css`. Until it exists the site falls back to the system sans. |
| Portrait | `public/images/portrait.png` | 4:5 crop, head and shoulders. A transparent PNG works well. |
| GA logo | `public/images/ga-logo.svg` | Overwrite the placeholder file with your real mark. |
| Favicon | `public/favicon.svg` | Overwrite with your own. |
| Project screenshots | `public/images/projects/klaud-koncept.png`, `hallhub.png`, `checkin.png`, `studio-x.png` | 16:10. Until they exist each card shows a labelled placeholder with the expected path. |
| n8n workflow (optional) | `public/images/automation/…` | Set `assets.n8nWorkflowImage` in `lib/site.ts` to use a real screenshot instead of the built-in vector canvas. |

Nothing breaks if an asset is missing — each one degrades to a clearly labelled placeholder.

## Icons

Brand marks are never hand-drawn. `scripts/generate-brand-icons.mjs` reads the official
paths out of [simple-icons](https://simpleicons.org) (CC0) and, for LinkedIn only,
[bootstrap-icons](https://icons.getbootstrap.com) (MIT), then writes them to
`lib/brand-icons.ts`. Run `npm run icons` to refresh. Add a slug to the map in the
script to pull in a new brand.

## The n8n workflow canvas

`components/N8nWorkflow.tsx` is a vector recreation of an n8n editor canvas: dotted grid,
a rounded-left trigger node, bezier connectors with an animated dashed flow, and
true/false branch labels. It stays sharp at any size and ships zero image bytes. Swap in
a screenshot of one of your own workflows any time via `assets.n8nWorkflowImage`.

## Contact form

With no configuration the form opens the visitor's mail client, pre-filled. To collect
submissions properly, copy `.env.example` to `.env.local` and set
`NEXT_PUBLIC_CONTACT_ENDPOINT` to a Formspree/Getform/Basin URL or your own API route —
the form POSTs JSON (`name`, `email`, `projectType`, `message`) and handles the states.

## Deploying

Push to GitHub, import into Vercel, set `site.url` in `lib/site.ts` to the real domain
(metadata, canonical, sitemap and JSON-LD all read from it), and add
`NEXT_PUBLIC_CONTACT_ENDPOINT` if you use one.

## Structure

```
app/        layout, page, globals.css, robots.ts, sitemap.ts, opengraph-image.tsx
components/ Navbar, Hero, PortraitFrame, TechMarquee, About, CodeArtwork,
            Projects, ProjectCard, Automation, N8nWorkflow, Contact, Footer,
            BackgroundArtwork, Reveal, BrandGlyph, ui/Icons
lib/        site.ts (content + config), brand-icons.ts (generated)
scripts/    generate-brand-icons.mjs
public/     fonts, images, favicon
```
