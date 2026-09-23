import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F8F7F3",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#2457FF" }}>GA</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, color: "#151515", lineHeight: 1.05 }}>
            I build practical
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, color: "#2457FF", lineHeight: 1.05 }}>
            websites &amp; web applications.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#4B4B4B" }}>
          {site.name} — {site.role}
        </div>
      </div>
    ),
    size,
  );
}
