import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/portfolio/data";

/**
 * Dynamic Open Graph image served at /opengraph-image.
 * Rendered once at build time — no runtime cost for visitors.
 */
export const alt = `${siteConfig.fullName} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function opengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(ellipse 900px 500px at 20% 0%, rgba(16,185,129,0.16), transparent), radial-gradient(ellipse 700px 400px at 100% 100%, rgba(20,184,166,0.10), transparent)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              border: "1.5px solid rgba(16,185,129,0.4)",
              background: "rgba(16,185,129,0.1)",
              fontSize: 30,
              fontWeight: 700,
              color: "#6ee7b7",
            }}
          >
            {"</>"}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 34,
              fontWeight: 600,
              color: "#a1a1aa",
            }}
          >
            {siteConfig.name}
            <span style={{ color: "#34d399" }}>.dev</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 940,
          }}
        >
          {siteConfig.fullName}
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 500,
            marginTop: 18,
            color: "#34d399",
          }}
        >
          {siteConfig.role}
        </div>

        {/* Services strip */}
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 56,
          }}
        >
          {["Web Development", "AI Solutions", "SEO & Performance"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "12px 26px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: 26,
                  color: "#d4d4d8",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
