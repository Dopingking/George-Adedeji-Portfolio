import { brandIcons, type BrandIconName } from "@/lib/brand-icons";

type Props = {
  name: BrandIconName;
  size?: number;
  className?: string;
  /** Use the official brand colour instead of inheriting currentColor. */
  colored?: boolean;
  title?: string;
};

export default function BrandGlyph({ name, size = 20, className, colored, title }: Props) {
  const icon = brandIcons[name];

  return (
    <svg
      viewBox={icon.viewBox}
      width={size}
      height={size}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      className={className}
      fill={colored ? icon.hex : "currentColor"}
      style={{ flex: "none" }}
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} />
    </svg>
  );
}
