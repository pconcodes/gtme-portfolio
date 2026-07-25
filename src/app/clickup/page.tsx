import type { Metadata } from "next";
import Link from "next/link";

/**
 * Targeted pitch page for ClickUp — styled to echo ClickUp's brand (white,
 * near-black text, black pill buttons, pink→purple→cyan gradient accents)
 * while clearly framed as Peter's pitch, not an official ClickUp page.
 *
 * Follows the "why me" model against their "Automations Engineer, Post
 * Sales Systems" posting: honest gaps quoted from the posting, a
 * line-by-line match of its asks, the shipped-work list, and the
 * engineering-rigor-plus-customer-empathy argument. Noindexed on purpose.
 */

export const metadata: Metadata = {
  title: "GTM Engineering for ClickUp — a pitch by Peter Conley",
  description:
    "An honest application for ClickUp's Automations Engineer, Post Sales Systems role: the boxes I miss, the boxes I hit, and why a rep-turned-builder fits.",
  robots: { index: false, follow: false },
};

// ClickUp-inspired palette (light theme), scoped to this page.
const c = {
  bg: "#ffffff",
  panel: "#fafafa",
  border: "#e4e4e7",
  borderSoft: "#ececf0",
  text: "#18181b",
  muted: "#52525b",
  faint: "#8d8d95",
  purple: "#7b68ee",
};

const gradientText = {
  backgroundImage: "linear-gradient(90deg, #fd71af, #7b68ee, #49ccf9)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

const CALENDLY_URL = "https://calendly.com/peter-david-conley/lets-talk";
const RESUME_URL = "/resume.pdf";
const CLICKUP_JOB_URL =
  "https://jobs.ashbyhq.com/clickup/4bfbec55-ee0f-40de-a64f-24a176499046";

const gaps = [
  {
    req: "“3–5+ years in systems administration, business systems engineering, or customer support platform work”",
    honest:
      "My 4.5 years were spent inside the systems as a quota-carrier — 2.5 as an SDR, 2 as an AE — plus the past few months building GTM systems in public. Adjacent years, not the exact title.",
  },
  {
    req: "“Hands-on experience with CX platforms, particularly Zendesk at an admin level or higher”",
    honest:
      "I've never administered Zendesk. My closest laps: I started at Vercel as a Product Advocate — first line for customers, working cases in Salesforce — and today I run HubSpot and n8n as systems, at admin level and below. Platforms change; the admin muscle transfers.",
  },
  {
    req: "“Integration platforms (Retool, Workato, Zapier, or similar low-code tools)”",
    honest:
      "I haven't shipped in Workato or Retool specifically. My integration platform is n8n — the same low-code category, played on hard mode: I deploy and operate the open-source build myself on Render, backed by Supabase Postgres.",
  },
];

const checks = [
  { tool: "Shipped automations", proof: "Your posting asks for automations \"shipped to production and delivered measurable business value\" — my live pipeline enriches, routes, notifies, and auto-replies on every real lead that hits my site." },
  { tool: "APIs & webhooks", proof: "A Next.js route orchestrating HubSpot, Slack, Gmail, and n8n in parallel — each integration reporting its own status, degrading gracefully, logging loudly. Plus webhook flows between the site, n8n, and HubSpot." },
  { tool: "AI & LLMs", proof: "I build with Claude daily — an internal prospecting app at HeroDevs built with Claude Code, and LLM APIs and MCP as part of my everyday toolchain. Your posting says you evaluate AI fluency; this page and everything linked on it were built AI-first." },
  { tool: "Data & scripting", proof: "TypeScript, JavaScript, SQL, and JSON end to end — including the Supabase Postgres instance backing my automation hub." },
  { tool: "Salesforce", proof: "2.5 years living in it daily at Vercel and HeroDevs — objects, fields, and flows from the rep side of the sync." },
  { tool: "Customer empathy", proof: "My first tech role was support-shaped: Product Advocate at Vercel, first point of contact, managing customer cases in Salesforce. I know what support toil feels like from the inside." },
  { tool: "Velocity, many hats", proof: "Three titles across two orgs in 17 months at Vercel; founding SDR and founding SMB AE at HeroDevs. High-velocity, multi-hat environments are my resume." },
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
    title: "Self-hosted open-source n8n",
    body: "Deployed n8n's OSS build to a Render web service backed by Supabase Postgres — connection pooling, SSL workarounds, schema isolation, a keep-alive workflow, and published production automations.",
  },
  {
    title: "Real-estate data-entry MVP",
    body: "Built an MVP application that takes the manual data entry out of a real-estate agent's workflow — the same instinct as support automation, pointed at a different industry.",
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
];

function PillLink({
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
    "inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition-opacity hover:opacity-85";
  const style =
    variant === "solid"
      ? { backgroundColor: c.text, color: "#ffffff" }
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
      style={{ color: c.purple }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
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
      className={`rounded-2xl p-6 sm:p-8 ${className}`}
      style={{ backgroundColor: c.panel, border: `1px solid ${c.borderSoft}` }}
    >
      {children}
    </div>
  );
}

export default function ClickUpPitchPage() {
  return (
    <div style={{ backgroundColor: c.bg, color: c.text }}>
      {/* Provenance banner — this is Peter's pitch, not a ClickUp property. */}
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-20 text-center sm:pt-28">
          <p
            className="mx-auto inline-block rounded-full px-4 py-1.5 font-mono text-xs font-semibold tracking-widest"
            style={{ backgroundColor: c.text, color: "#ffffff" }}
          >
            FOR CLICKUP&apos;S POST SALES SYSTEMS TEAM
          </p>
          <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            GTM Engineering
            <br />
            <span style={gradientText}>for ClickUp</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8" style={{ color: c.muted }}>
            You have an open{" "}
            <a
              href={CLICKUP_JOB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
              style={{ color: c.text }}
            >
              Automations Engineer, Post Sales Systems
            </a>{" "}
            role.{" "}
            <strong style={{ color: c.text }}>
              This page is my application — starting with an honest accounting
              of the boxes I don&apos;t check.
            </strong>
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PillLink href="/clickup/contact">Contact me</PillLink>
            <PillLink href={RESUME_URL} variant="outline" newTab>
              Resume (PDF)
            </PillLink>
          </div>
        </div>
      </section>

      {/* The honest part */}
      <section className="mx-auto max-w-4xl px-6 py-20" style={{ borderTop: `1px solid ${c.borderSoft}` }}>
        <Kicker>01 / The honest part</Kicker>
        <SectionTitle>I don&apos;t check every box.</SectionTitle>
        <p className="mt-4 max-w-2xl leading-7" style={{ color: c.muted }}>
          Your posting lists requirements I can&apos;t fully claim, and
          pretending otherwise would waste your time. Here they are, next to
          what I have instead.
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
        <SectionTitle>Read your posting back against my work.</SectionTitle>
        <p className="mt-4 max-w-2xl leading-7" style={{ color: c.muted }}>
          Shipped automations, APIs and webhooks, AI fluency, scripting,
          Salesforce, and the customer-empathy half of the job — line by line:
        </p>
        <div className="mt-10 space-y-2">
          {checks.map((t) => (
            <div
              key={t.tool}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl px-5 py-4"
              style={{ backgroundColor: c.panel, border: `1px solid ${c.borderSoft}` }}
            >
              <span className="font-mono text-sm font-semibold" style={{ color: c.purple }}>
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
                  style={{ color: c.purple }}
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
        <SectionTitle>Engineering rigor is table stakes. Empathy is the edge.</SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_1.4fr]">
          <Card className="flex flex-col items-center justify-center text-center">
            <p className="text-6xl font-bold" style={gradientText}>
              4.5yrs
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest" style={{ color: c.faint }}>
              carrying quota — 2.5 as an SDR, 2 as an AE
            </p>
          </Card>
          <Card>
            <p className="leading-7" style={{ color: c.muted }}>
              Your posting puts this role &ldquo;at the intersection of
              engineering rigor and customer empathy,&rdquo; and says success is
              measured &ldquo;not just by automation coverage, but by the real
              impact on support efficiency and quality.&rdquo; That&apos;s the
              part most systems candidates have to learn secondhand — I lived
              it. I started in tech as the person working customer cases, then
              spent 4.5 years in the systems reps and support teams actually
              use.
            </p>
            <p className="mt-4 leading-7" style={{ color: c.muted }}>
              I know which automations frontline teams adopt and which they
              quietly route around, because I&apos;ve been the frontline. Pair
              that instinct with someone who ships — the pages, pipelines, and
              infrastructure above — and you get automations that get used, not
              just deployed. The platform gaps close fast; the years on the
              frontline can&apos;t be backfilled.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center" style={{ borderTop: `1px solid ${c.borderSoft}` }}>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          A hire to replace
          <br />
          <span style={gradientText}>all the busywork.</span>
        </h2>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PillLink href={CALENDLY_URL}>Book 30 minutes</PillLink>
          <PillLink href="/clickup/contact" variant="outline">
            Email me
          </PillLink>
        </div>
        <p className="mx-auto mt-16 max-w-2xl font-mono text-[11px] leading-5" style={{ color: c.faint }}>
          This page is a personal job-application pitch by Peter Conley and is not
          affiliated with, sponsored by, or endorsed by ClickUp. Role language
          quoted from ClickUp&apos;s public job posting, July 2026.
        </p>
      </section>
    </div>
  );
}
