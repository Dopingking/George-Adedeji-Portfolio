import BrandGlyph from "./BrandGlyph";
import { Spark } from "./ui/Icons";
import { marquee, type TechItem } from "@/lib/site";

function Item({ item }: { item: TechItem }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 px-6 sm:px-8">
      {item.icon === "spark" ? (
        <Spark size={17} className="text-accent" />
      ) : (
        <BrandGlyph name={item.icon} size={19} colored />
      )}

      <span className="whitespace-nowrap text-[0.92rem] font-medium text-ink-soft">
        {item.label}
      </span>
    </li>
  );
}

export default function TechMarquee() {
  const marqueeItems = marquee.filter((item) => item.icon !== "whatsapp");

  return (
    <section
      aria-label="Technologies and capabilities"
      className="relative border-y border-line bg-paper/70"
    >
      <div className="marquee relative overflow-hidden py-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fbfaf7] to-transparent sm:w-28"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fbfaf7] to-transparent sm:w-28"
        />

        <div className="marquee-track flex w-max">
          <ul className="flex items-center">
            {marqueeItems.map((item) => (
              <Item key={item.label} item={item} />
            ))}
          </ul>

          <ul className="flex items-center" aria-hidden="true">
            {marqueeItems.map((item) => (
              <Item key={`dup-${item.label}`} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
