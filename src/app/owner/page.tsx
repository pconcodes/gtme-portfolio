import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Targeted pitch page for Owner.com — styled to echo Owner's brand (warm
 * off-white, near-black text, green accents, pill buttons) while clearly
 * framed as Peter's pitch, not an official Owner page.
 *
 * Follows the /clickhouse "why me" model: honest gaps quoted from the real
 * posting, a line-by-line match of the stack the posting names, the
 * shipped-work list, and the first-GTM-Engineer argument (the posting says
 * "we need a GTM Engineer", and no one at Owner holds the title on
 * LinkedIn). Noindexed on purpose.
 */

export const metadata: Metadata = {
  title: "GTM Engineering for Owner.com — a pitch by Peter Conley",
  description:
    "An honest application for Owner.com's open GTM Engineer role: the boxes I miss, the boxes I hit, and why a rep-turned-builder fits the first hire.",
  robots: { index: false, follow: false },
};

// Owner-inspired palette (light theme), scoped to this page.
const c = {
  bg: "#faf9f7",
  panel: "#ffffff",
  border: "#e3e0da",
  borderSoft: "#eae7e1",
  text: "#1c1b18",
  muted: "#56534c",
  faint: "#8b877e",
  green: "#2f9e44",
  greenDark: "#14401f",
  link: "#15803d",
};

const gradientText = {
  backgroundImage: "linear-gradient(90deg, #166534, #22c55e)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

const CALENDLY_URL = "https://calendly.com/peter-david-conley/lets-talk";
const RESUME_URL = "/resume.pdf";
const OWNER_JOB_URL =
  "https://jobs.ashbyhq.com/owner/12650f0b-4438-4caa-a178-53fa86a45132";

const gaps = [
  {
    req: "“4+ years of experience working within product management, engineering, and GTM functions”",
    honest:
      "My 4.5 years are concentrated on the GTM leg of that triad — 2.5 as an SDR, 2 as an AE. The product and engineering legs are newer: the past few months building GTM systems in public.",
  },
  {
    req: "“Ideally with at least 1-2 years of experience as a software engineer or builder”",
    honest:
      "I haven't held the software engineer title. Mine is a full-stack engineering certification from BloomTech (FKA Lambda School) plus a portfolio of shipped, running software — judge the work below.",
  },
  {
    req: "“You'll be the product owner for the infrastructure that finds restaurant owners”",
    honest:
      "I've never carried a product title either. What I do have is the muscle the title describes: I've scoped, built, shipped, and iterated software end to end, alone.",
  },
];

const checks = [
  { tool: "Salesforce", proof: "2.5 years living in it daily at Vercel and HeroDevs — cases, opportunities, pipeline hygiene." },
  { tool: "Clay", proof: "My job search runs on a 40-company Clay table with enrichment columns I maintain by hand." },
  { tool: "Apollo", proof: "At HeroDevs I designed and implemented product-based sequencing in Apollo." },
  { tool: "CRM", proof: "HubSpot powers this site's live pipeline — upserts, notifications, and lifecycle auto-replies I wired myself." },
  { tool: "AI tooling", proof: "At HeroDevs I built an internal prospecting and outreach app using Claude Code; this site and its pipeline are built the same way." },
  { tool: "n8n + Postgres", proof: "I self-host open-source n8n on Render, backed by Supabase Postgres — session pooler, SSL, and schema isolation configured myself." },
  { tool: "SMB velocity", proof: "As founding SMB AE I carried 25–50 concurrent opportunities — the same high-volume motion Owner's team runs with restaurant owners." },
];

const shipped: {
  title: string;
  body: string;
  link?: { href: string; label: string };
  image?: { src: string; alt: string; width: number; height: number };
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
    image: {
      src: "/n8n-render.png",
      alt: "Render dashboard showing the n8n web service live on a Standard instance",
      width: 674,
      height: 366,
    },
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
      ? { backgroundColor: c.text, color: c.bg }
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
      style={{ color: c.green }}
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
      className={`rounded-2xl p-6 sm:p-8 ${className}`}
      style={{ backgroundColor: c.panel, border: `1px solid ${c.borderSoft}` }}
    >
      {children}
    </div>
  );
}

export default function OwnerPitchPage() {
  return (
    <div style={{ backgroundColor: c.bg, color: c.text }}>
      {/* Provenance banner — this is Peter's pitch, not an Owner property. */}
      <div
        className="px-6 py-2.5 text-center font-mono text-[11px] font-semibold tracking-wide"
        style={{ backgroundColor: c.greenDark, color: "#ffffff" }}
      >
        A job-application pitch by{" "}
        <Link href="/" className="underline underline-offset-2" style={{ color: "#ffffff" }}>
          Peter Conley
        </Link>{" "}
        — not an official Owner.com page.
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Scattered green blocks, echoing Owner's gradient panels */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <span className="absolute right-[8%] top-16 h-6 w-6 rounded-md" style={{ backgroundImage: "linear-gradient(135deg, #166534, #4ade80)" }} />
          <span className="absolute right-[4%] top-28 h-6 w-6 rounded-md" style={{ backgroundColor: c.green, opacity: 0.55 }} />
          <span className="absolute right-[12%] top-40 h-6 w-6 rounded-md" style={{ backgroundColor: "#d6d3cc", opacity: 0.6 }} />
          <span className="absolute left-[5%] bottom-14 h-6 w-6 rounded-md" style={{ backgroundImage: "linear-gradient(135deg, #4ade80, #166534)" }} />
          <span className="absolute left-[10%] bottom-24 h-6 w-6 rounded-md" style={{ backgroundColor: "#d6d3cc", opacity: 0.5 }} />
        </div>

        <div className="mx-auto max-w-4xl px-6 pb-20 pt-20 text-center sm:pt-28">
          <p
            className="mx-auto inline-block rounded-full px-4 py-1.5 font-mono text-xs font-semibold tracking-widest"
            style={{ backgroundColor: c.greenDark, color: "#ffffff" }}
          >
            FOR OWNER&apos;S GROWTH LEADERSHIP
          </p>
          <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            GTM Engineering
            <br />
            <span style={gradientText}>for Owner.com</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8" style={{ color: c.muted }}>
            You have an open{" "}
            <a
              href={OWNER_JOB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
              style={{ color: c.text }}
            >
              GTM Engineer
            </a>{" "}
            role — and it would be your first.{" "}
            <strong style={{ color: c.text }}>
              This page is my application, starting with an honest accounting of
              the boxes I don&apos;t check.
            </strong>
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PillLink href="/owner/contact">Contact me</PillLink>
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
          Your posting lists things I can&apos;t fully claim, and pretending
          otherwise would waste your time. Here they are, next to what I have
          instead.
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
        <SectionTitle>You named the intersection. I live there.</SectionTitle>
        <p className="mt-4 max-w-2xl leading-7" style={{ color: c.muted }}>
          Your posting asks for a career &ldquo;at the intersection of CRM,
          modern tooling (Clay, Apollo, Salesforce), and AI.&rdquo; Line by
          line:
        </p>
        <div className="mt-10 space-y-2">
          {checks.map((t) => (
            <div
              key={t.tool}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl px-5 py-4"
              style={{ backgroundColor: c.panel, border: `1px solid ${c.borderSoft}` }}
            >
              <span className="font-mono text-sm font-semibold" style={{ color: c.link }}>
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
              {s.image && (
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  width={s.image.width}
                  height={s.image.height}
                  className="mt-4 h-auto w-full max-w-72 rounded-lg"
                  style={{ border: `1px solid ${c.border}` }}
                />
              )}
              {s.link && (
                <a
                  href={s.link.href}
                  {...(s.link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-4 inline-block font-mono text-sm underline underline-offset-4"
                  style={{ color: c.link }}
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
        <SectionTitle>The first hire shapes the role. Make it a rep.</SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_1.4fr]">
          <Card className="flex flex-col items-center justify-center text-center">
            <p className="text-6xl font-semibold" style={gradientText}>
              4.5yrs
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest" style={{ color: c.faint }}>
              carrying quota — 2.5 as an SDR, 2 as an AE
            </p>
          </Card>
          <Card>
            <p className="leading-7" style={{ color: c.muted }}>
              Your posting says it plainly: &ldquo;we need a GTM Engineer to own
              the systems that power how we grow&rdquo; — and no
              one at Owner holds that title on LinkedIn today. This is a first
              hire, and the engineering firepower is already covered: the role
              partners with Engineering, Analytics, RevOps, and Design.
            </p>
            <p className="mt-4 leading-7" style={{ color: c.muted }}>
              What that partnership doesn&apos;t have yet is someone who has
              lived the funnel from inside it. Your posting asks for
              &ldquo;deep customer empathy&rdquo; — and this role&apos;s first
              customers are Owner&apos;s own sales, growth, and launch teams.
              I&apos;ve carried the number, worked the CRM at 6pm on the last day
              of the quarter, and I know which automations reps adopt and which
              they quietly route around — because I&apos;ve been the rep on both
              sides. That&apos;s the instinct you can&apos;t hire from a
              traditional engineering résumé.
            </p>
          </Card>
        </div>
        <p className="mt-4 font-mono text-[11px]" style={{ color: c.faint }}>
          Role language quoted from Owner&apos;s public job posting; title search
          from LinkedIn, July 2026.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center" style={{ borderTop: `1px solid ${c.borderSoft}` }}>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Owner does the work for restaurants.
          <br />
          <span style={gradientText}>I&apos;ll do it for your revenue team.</span>
        </h2>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PillLink href={CALENDLY_URL}>Book 30 minutes</PillLink>
          <PillLink href="/owner/contact" variant="outline">
            Email me
          </PillLink>
        </div>
        <p className="mx-auto mt-16 max-w-2xl font-mono text-[11px] leading-5" style={{ color: c.faint }}>
          This page is a personal job-application pitch by Peter Conley and is not
          affiliated with, sponsored by, or endorsed by Owner.com. Role language
          quoted from Owner&apos;s public job posting, July 2026.
        </p>
      </section>
    </div>
  );
}
