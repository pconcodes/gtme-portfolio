import type { Metadata } from "next";
import Link from "next/link";
import { LiveKitLeadForm } from "./livekit-lead-form";

export const metadata: Metadata = {
  title: "Get in touch — GTM Engineering for LiveKit",
  description: "Reach Peter Conley about GTM Engineering at LiveKit.",
  robots: { index: false, follow: false },
};

// Mirrors the palette in ../page.tsx — keep the two in sync.
const c = {
  bg: "#050607",
  text: "#f2f4f5",
  muted: "#9aa3a9",
  cyan: "#56c9ff",
};

export default function LiveKitContactPage() {
  return (
    <div style={{ backgroundColor: c.bg, color: c.text }}>
      <div
        className="px-6 py-2.5 text-center font-mono text-[11px] font-semibold tracking-wide"
        style={{ backgroundColor: c.cyan, color: "#050607" }}
      >
        A job-application pitch by{" "}
        <Link href="/" className="underline underline-offset-2" style={{ color: "#050607" }}>
          Peter Conley
        </Link>{" "}
        — not an official LiveKit page.
      </div>

      <section className="mx-auto max-w-xl px-6 pb-24 pt-16 sm:pt-24">
        <Link
          href="/livekit"
          className="font-mono text-xs uppercase tracking-widest underline-offset-4 hover:underline"
          style={{ color: c.muted }}
        >
          ← Back to the pitch
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s talk <span style={{ color: c.cyan }}>GTM Engineering</span>.
        </h1>
        <div className="mt-10">
          <LiveKitLeadForm />
        </div>
      </section>
    </div>
  );
}
