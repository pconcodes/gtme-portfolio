import type { Metadata } from "next";
import Link from "next/link";

/**
 * Targeted pitch page for LiveKit — styled to echo LiveKit's brand (pure
 * black, white text, bright cyan accent) while clearly framed as Peter's
 * pitch, not an official LiveKit page.
 *
 * Follows the "why me" model: honest gaps quoted from the real GTM Systems
 * Engineer posting, a line-by-line match of the posting's own asks, the
 * shipped-work list, and the fluent-in-both-worlds argument. Noindexed on
 * purpose.
 */

export const metadata: Metadata = {
  title: "GTM Engineering for LiveKit — a pitch by Peter Conley",
  description:
    "An honest application for LiveKit's open GTM Systems Engineer role: the boxes I miss, the boxes I hit, and why a rep-turned-builder fits.",
  robots: { index: false, follow: false },
};

// LiveKit-inspired palette, scoped to this page.
const c = {
  bg: "#050607",
  panel: "#101214",
  border: "#26292c",
  borderSoft: "#1c1f22",
  text: "#f2f4f5",
  muted: "#9aa3a9",
  faint: "#626a70",
  cyan: "#56c9ff",
};

const CALENDLY_URL = "https://calendly.com/peter-david-conley/lets-talk";
const RESUME_URL = "/resume.pdf";
const LIVEKIT_JOB_URL =
  "https://jobs.ashbyhq.com/livekit/c8098929-c448-4d69-b164-0273e996abcf";

const gaps = [
  {
    req: "“Deep, hands-on Salesforce expertise… you think about it as an engineering system, not an admin tool. This is the primary bar.”",
    honest:
      "I spent 2.5 years in Salesforce daily at Vercel and HeroDevs — as the rep it was built for, not the engineer behind it. I know its objects, flows, and failure modes from the consumer side; the architect side is the gap I'd close fastest, and I'd close it the way I closed every other one below: by shipping.",
  },
  {
    req: "“Agentic workflow experience, in code… prompts, tool calls, orchestration logic, and the guardrails”",
    honest:
      "My automation today is workflow-grade, not yet agent-grade: unattended pipelines and AI-assisted internal tooling (I built a prospecting and outreach app at HeroDevs using Claude Code), but I haven't yet shipped autonomous agents with orchestration and guardrails in production.",
  },
  {
    req: "“Strong change management practices — deployments in live systems where a mistake breaks active deals or campaigns”",
    honest:
      "The live systems I deploy to are my own, so the blast radius has been my pipeline, not someone's quarter. What I do have is the habit: nothing ships without browser-level verification first, every change is a reviewed commit, and rollback is a git revert away.",
  },
];

const checks = [
  { tool: "HubSpot", proof: "I run a production HubSpot instance through its API — private-app auth, upsert-by-email dedupe, wired into a live pipeline I built and operate." },
  { tool: "No silent failures", proof: "Your posting's exact phrase is my pipeline's design goal: every integration (HubSpot, Slack, Gmail, n8n) reports its own status on every run, degrades gracefully, and logs loudly when it breaks." },
  { tool: "Integrations", proof: "APIs and webhooks end to end — a Next.js route orchestrating four external systems in parallel, plus webhook flows between my site, n8n, and HubSpot." },
  { tool: "Clay", proof: "My job search runs on a 40-company Clay table with enrichment columns I maintain by hand." },
  { tool: "Code-first mindset", proof: "TypeScript over UI when it's the right call — this page, the pipeline behind it, and the automation hub are all code I wrote, with the judgment calls documented in the case study." },
  { tool: "Self-hosted infra", proof: "I deploy and operate open-source n8n on Render, backed by Supabase Postgres — session pooler, SSL, schema isolation, keep-alive workflows." },
  { tool: "Fluent in both worlds", proof: "4.5 years carrying quota — 2.5 as an SDR, 2 as an AE. I don't have to translate for Sales stakeholders; I was one." },
  { tool: "Fast learner", proof: "From a BloomTech certification to shipping across Next.js, Astro, n8n, and Supabase in months — new tools are the job, not an obstacle." },
];

const shipped: {
  title: string;
  body: string;
  link?: { href: string; label: string };
}[] = [
  {
    title: "This portfolio — a live lead pipeline",
    body: "Next.js site where the contact form runs a real GTM system: instant enrichment, HubSpot upsert, Slack ping, email alert, n8n webhook, and a lifecycle auto-reply. Every submission demos the job itself.",
    link: { href: "/case-studies/live-lead-pipeline", label: "Case study →" },
  },
  {
    title: "Real-estate data-entry MVP",
    body: "Built an MVP application that takes the manual data entry out of a real-estate agent's workflow — the same instinct as GTM engineering, pointed at a different industry.",
    link: { href: "https://www.swiftlisting.ai/", label: "swiftlisting.ai →" },
  },
  {
    title: "WordPress → Next.js migration",
    body: "Migrated my WordPress blog to Next.js on Vercel — content modeling, routing, and redirects, shipped end to end.",
    link: { href: "https://www.pcon.blog/", label: "pcon.blog →" },
  },
  {
    title: "Memoir landing page on Astro",
    body: "Designed and shipped a memoir landing page on Astro — a different framework chosen deliberately for a content-first, zero-JS-by-default page.",
    link: { href: "https://fatherifoundmyway.com/", label: "fatherifoundmyway.com →" },
  },
  {
    title: "Self-hosted open-source n8n",
    body: "Deployed n8n's OSS build to a Render web service backed by Supabase Postgres — connection pooling, SSL workarounds, schema isolation, a keep-alive workflow, and published production automations.",
  },
];

function CyanLink({
  href,
  children,
  variant = "solid",
  newTab,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  newTab?: boolean;
}) {
  const base =
    "inline-flex h-12 items-center justify-center rounded-lg px-7 text-sm font-semibold transition-opacity hover:opacity-85";
  const style =
    variant === "solid"
      ? { backgroundColor: c.cyan, color: "#050607" }
      : { border: `1px solid ${c.border}`, color: c.text };
  const opensNewTab = newTab ?? href.startsWith("http");
  return (
    <a
      href={href}
      className={base}
      style={style}
      {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-mono text-2xl uppercase tracking-[0.2em]"
      style={{ color: c.cyan }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
      style={{ color: c.text }}
    >
      {children}
    </h2>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl p-6 sm:p-8 ${className}`}
      style={{ backgroundColor: c.panel, border: `1px solid ${c.borderSoft}` }}
    >
      {children}
    </div>
  );
}

export default function LiveKitPitchPage() {
  return (
    <div style={{ backgroundColor: c.bg, color: c.text }}>
      {/* Provenance banner — this is Peter's pitch, not a LiveKit property. */}
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
          style={{
            background:
              "radial-gradient(65% 65% at 50% 0%, rgba(86,201,255,0.14) 0%, rgba(5,6,7,0) 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-20 text-center sm:pt-28">
          <p
            className="mx-auto inline-block rounded-full px-4 py-1.5 font-mono text-xs font-semibold tracking-widest"
            style={{ backgroundColor: c.cyan, color: "#050607" }}
          >
            FOR LIVEKIT&apos;S GTM &amp; ENGINEERING LEADERSHIP
          </p>
          <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            GTM Engineering
            <br />
            <span style={{ color: c.cyan }}>for LiveKit</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8" style={{ color: c.muted }}>
            You have an open{" "}
            <a
              href={LIVEKIT_JOB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
              style={{ color: c.text }}
            >
              GTM Systems Engineer
            </a>{" "}
            role.{" "}
            <strong style={{ color: c.text }}>
              This page is my application — starting with an honest accounting
              of the boxes I don&apos;t check.
            </strong>
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CyanLink href="/livekit/contact">Contact me</CyanLink>
            <CyanLink href={RESUME_URL} variant="outline" newTab>
              Resume (PDF)
            </CyanLink>
          </div>
        </div>
      </section>

      {/* The honest part */}
      <section className="mx-auto max-w-4xl px-6 py-20" style={{ borderTop: `1px solid ${c.borderSoft}` }}>
        <Kicker>01 / The honest part</Kicker>
        <SectionTitle>I don&apos;t check every box.</SectionTitle>
        <p className="mt-4 max-w-2xl leading-7" style={{ color: c.muted }}>
          Your posting sets a high bar, and pretending I clear all of it would
          waste your time. Here are the gaps, next to what I have instead.
        </p>
        <div className="mt-10 space-y-4">
          {gaps.map((g) => (
            <Card key={g.req}>
              <p className="font-mono text-sm" style={{ color: c.faint }}>
                {g.req}
              </p>
              <p className="mt-3 leading-7" style={{ color: c.muted }}>
                {g.honest}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* The boxes I do check */}
      <section className="mx-auto max-w-4xl px-6 py-20" style={{ borderTop: `1px solid ${c.borderSoft}` }}>
        <Kicker>02 / The boxes I do check</Kicker>
        <SectionTitle>Read your posting back against my stack.</SectionTitle>
        <p className="mt-4 max-w-2xl leading-7" style={{ color: c.muted }}>
          HubSpot, integrations that don&apos;t fail silently, Clay, a
          code-first mindset, and fluency with the people who live in these
          systems — line by line:
        </p>
        <div className="mt-10 space-y-2">
          {checks.map((t) => (
            <div
              key={t.tool}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-lg px-5 py-4"
              style={{ backgroundColor: c.panel, border: `1px solid ${c.borderSoft}` }}
            >
              <span className="font-mono text-sm font-semibold" style={{ color: c.cyan }}>
                {t.tool}
              </span>
              <span className="text-sm leading-6" style={{ color: c.muted }}>
                {t.proof}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What I've shipped */}
      <section className="mx-auto max-w-4xl px-6 py-20" style={{ borderTop: `1px solid ${c.borderSoft}` }}>
        <Kicker>03 / What I&apos;ve shipped</Kicker>
        <SectionTitle>Proof I build, not plans to build.</SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {shipped.map((s) => (
            <Card key={s.title}>
              <h3 className="font-semibold" style={{ color: c.text }}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6" style={{ color: c.muted }}>
                {s.body}
              </p>
              {s.link && (
                <a
                  href={s.link.href}
                  {...(s.link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-4 inline-block font-mono text-sm underline underline-offset-4"
                  style={{ color: c.cyan }}
                >
                  {s.link.label}
                </a>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Why this works */}
      <section className="mx-auto max-w-4xl px-6 py-20" style={{ borderTop: `1px solid ${c.borderSoft}` }}>
        <Kicker>04 / Why this works</Kicker>
        <SectionTitle>Most candidates learn the stakeholders. I am one.</SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_1.4fr]">
          <Card className="flex flex-col items-center justify-center text-center">
            <p className="text-6xl font-semibold" style={{ color: c.cyan }}>
              4.5yrs
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest" style={{ color: c.faint }}>
              carrying quota — 2.5 as an SDR, 2 as an AE
            </p>
          </Card>
          <Card>
            <p className="leading-7" style={{ color: c.muted }}>
              Your posting draws a sharp line: own the system without
              gatekeeping it, keep the foundation trustworthy without becoming a
              ticket queue, and stay &ldquo;fluent in both worlds.&rdquo; Most
              people who clear the technical bar have to learn the Sales and
              Marketing side secondhand. I come from that side — I&apos;ve
              carried the number, lived in the CRM, and felt exactly what breaks
              when the systems drift.
            </p>
            <p className="mt-4 leading-7" style={{ color: c.muted }}>
              That&apos;s also the judgment your agentic ambitions need: knowing
              which signals matter, which automations reps adopt, and which they
              quietly route around — because I&apos;ve been the rep on both
              sides. The engineering gaps above close fast; the years on quota
              can&apos;t be backfilled.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center" style={{ borderTop: `1px solid ${c.borderSoft}` }}>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Your posting says thoughtful PRs impress you.
          <br />
          <span style={{ color: c.cyan }}>Consider this page one.</span>
        </h2>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CyanLink href={CALENDLY_URL}>Book 30 minutes</CyanLink>
          <CyanLink href="/livekit/contact" variant="outline">
            Email me
          </CyanLink>
        </div>
        <p className="mx-auto mt-16 max-w-2xl font-mono text-[11px] leading-5" style={{ color: c.faint }}>
          This page is a personal job-application pitch by Peter Conley and is not
          affiliated with, sponsored by, or endorsed by LiveKit. Role language
          quoted from LiveKit&apos;s public job posting, July 2026.
        </p>
      </section>
    </div>
  );
}
