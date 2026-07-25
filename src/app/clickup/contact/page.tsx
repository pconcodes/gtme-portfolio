import type { Metadata } from "next";
import Link from "next/link";
import { ClickUpLeadForm } from "./clickup-lead-form";

export const metadata: Metadata = {
  title: "Get in touch — GTM Engineering for ClickUp",
  description: "Reach Peter Conley about GTM Engineering at ClickUp.",
  robots: { index: false, follow: false },
};

// Mirrors the palette in ../page.tsx — keep the two in sync.
const c = {
  bg: "#ffffff",
  text: "#18181b",
  muted: "#52525b",
  purple: "#7b68ee",
};

const gradientText = {
  backgroundImage: "linear-gradient(90deg, #fd71af, #7b68ee, #49ccf9)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

export default function ClickUpContactPage() {
  return (
    <div style={{ backgroundColor: c.bg, color: c.text }}>
      <div
        className="px-6 py-2.5 text-center font-mono text-[11px] font-semibold tracking-wide"
        style={{ backgroundColor: c.purple, color: "#ffffff" }}
      >
        A job-application pitch by{" "}
        <Link href="/" className="underline underline-offset-2" style={{ color: "#ffffff" }}>
          Peter Conley
        </Link>{" "}
        — not an official ClickUp page.
      </div>

      <section className="mx-auto max-w-xl px-6 pb-24 pt-16 sm:pt-24">
        <Link
          href="/clickup"
          className="font-mono text-xs uppercase tracking-widest underline-offset-4 hover:underline"
          style={{ color: c.muted }}
        >
          ← Back to the pitch
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s talk <span style={gradientText}>GTM Engineering</span>.
        </h1>
        <div className="mt-10">
          <ClickUpLeadForm />
        </div>
      </section>
    </div>
  );
}
