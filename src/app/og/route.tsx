import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { profile } from "@/data/profile";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || profile.name;
  const fontData = await readFile(path.join(process.cwd(), "public/fonts/Inter.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#f7f7f8",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: "radial-gradient(circle, #c8c8ce 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#52525b",
            letterSpacing: "-0.02em",
          }}
        >
          {profile.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 600,
            color: "#0a0a0b",
            letterSpacing: "-0.04em",
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", color: "#52525b", fontSize: 24 }}>
          {profile.name}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Inter", data: fontData, style: "normal" }],
    },
  );
}
