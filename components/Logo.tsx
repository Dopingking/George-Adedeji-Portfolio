import Image from "next/image";
import { assets, site } from "@/lib/site";

export default function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src={assets.logo}
      alt={`${site.name} logo`}
      width={size}
      height={size}
      priority
      unoptimized
      className={className}
      style={{ width: size, height: "auto" }}
    />
  );
}
