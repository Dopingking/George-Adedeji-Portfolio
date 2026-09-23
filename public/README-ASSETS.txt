PORTFOLIO ASSET NOTES

1. Replace the hero portrait placeholder with your real portrait:
   public/portrait.jpg

   Then update components/Portfolio.tsx by replacing the .portrait-placeholder block with:
   <Image src="/portrait.jpg" alt="George Adedeji" fill className="portrait-image" priority />

2. Replace the CSS project mockups with real screenshots when ready.
   The current mockups are intentionally local and lightweight so the project runs immediately.

3. portfolio-artwork-reference.png is the generated visual direction used while designing this build.
   It is kept in public/artwork for reference and metadata; the page itself uses original CSS artwork rather than reproducing the reference image.

4. Update the metadataBase, canonical, sitemap and Open Graph URLs in app/layout.tsx and app/sitemap.ts once the final domain is known.

5. The contact form currently posts to FormSubmit. Change it to your own API/server action when you have one.
