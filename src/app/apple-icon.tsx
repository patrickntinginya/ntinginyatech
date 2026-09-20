import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon: same simple mark as the favicon (placeholder until an official logo exists). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A2A30",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", fontSize: 108, fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>N</div>
        <div
          style={{
            position: "absolute",
            right: 34,
            top: 34,
            width: 26,
            height: 26,
            borderRadius: 26,
            background: "#F5B700",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
