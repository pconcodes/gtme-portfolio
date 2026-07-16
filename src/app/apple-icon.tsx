import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0b0e",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 20 20">
          <line x1="10" y1="0" x2="10" y2="20" stroke="#4a8fe0" strokeWidth="1.5" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="#4a8fe0" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="6" fill="none" stroke="#4a8fe0" strokeWidth="1.5" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
