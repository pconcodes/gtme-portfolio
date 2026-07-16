import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
        <svg width="24" height="24" viewBox="0 0 20 20">
          <line x1="10" y1="0" x2="10" y2="20" stroke="#4a8fe0" strokeWidth="2" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="#4a8fe0" strokeWidth="2" />
          <circle cx="10" cy="10" r="6" fill="none" stroke="#4a8fe0" strokeWidth="2" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
