import Link from "next/link";
import {
  BlueprintChip,
  CornerBrackets,
  DimensionRule,
  GridBackdrop,
  PipelineDiagram,
  SheetKicker,
  SheetTag,
} from "@/components/blueprint";

const experience = [
  {
    company: "HeroDevs",
    dates: "Feb 2024 — Jun 2026",
    roles: [
      {
        role: "SMB Account Executive",
        dates: "Nov 2024 — Jun 2026",
        points: [
          "Owned 25–50 deals at a time.",
          "Created product sequences for all inbound leads in Apollo.",
          "Architected pipeline-forecasting process for the SMB segment.",
          "Built a local app with Claude Code to automate prospecting & outreach for EOL OSS GitHub repos.",
        ],
      },
      {
        role: "Founding SDR",
        dates: "Feb 2024 — Oct 2024",
        points: [
          "Architected the SDR to AE handoff process.",
          "Synthesized all SDR reports and dashboards.",
          "Architected core Notion documentation for the sales team.",
          "Built Notion documentation & analytics dashboards for the SDR team.",
        ],
      },
    ],
  },
  {
    company: "Vercel",
    dates: "Aug 2022 — Nov 2023",
    roles: [
      {
        role: "Sales Development Representative",
        dates: "Sep 2023 — Nov 2023",
        points: [
          "108% quota attainment.",
          "Top Performance by an SDR (Q2 2023).",
          "Spearheaded copywriting for outreach campaign.",
          "2nd-highest monthly quota attainment in team history.",
        ],
      },
      {
        role: "Growth / Inbound SDR",
        dates: "Jan 2023 — Aug 2023",
        points: [
          "127% quota attainment.",
          "Sequenced existing contacts for product education and upgrades.",
          "Created workflows and Outreach sequences for new Growth PA team.",
          "Engaged existing Hobby and Pro accounts for additional product needs.",
          "Contributed to a 50% QoQ lift in our Enterprise funnel as a founding member of the Growth VDR team.",
        ],
      },
      {
        role: "Product Advocate",
        dates: "Aug 2022 — Jan 2023",
        points: [
          "Advocated for Vercel as a platform for prospects.",
          "Managed contacts, cases, and opportunities within Salesforce.",
          "Accelerated product adoption by offering support and education.",
          "Kicked off sales cycles by identifying and qualifying future customers.",
          "Helped users, prospects, and community members succeed by being engaging and responsive.",
        ],
      },
    ],
  },
  {
    company: "BloomTech (FKA Lambda School)",
    dates: "Aug 2021 — May 2022",
    roles: [
      {
        role: "Full-Stack Web Development",
        dates: "Aug 2021 — May 2022",
        points: [
          "Approached coding challenges using pair programming.",
          "Gained hands-on experience with client and server testing.",
          "Utilized agile software development and Git workflow on all projects.",
          "Completed team projects that mimicked real product development lifecycle.",
          "Program included Computer Science Fundamentals, focusing on algorithms, and data structures.",
          "Studying Full Stack Web Development with a focus on HTML, CSS, JavaScript, React, Node.js, and SQL.",
          "Wrote production-ready code using ReactJS, Redux, and CSS on the frontend and NodeJS on the backend to build applications.",
        ],
      },
    ],
  },
];

const skillGroups = [
  {
    label: "Sales stack",
    items: ["HubSpot", "Salesforce", "Apollo", "Outreach", "ZoomInfo", "RB2B", "Clay"],
  },
  {
    label: "Technical",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "SQL", "HTML", "CSS", "Git", "PostgreSQL"],
  },
  {
    label: "Dev tools",
    items: ["GitHub", "Vercel", "Claude Code", "Postman", "pgAdmin", "Replit", "Supabase"],
  },
];

const pipelinePreview = [
  { id: "in", tag: "IN", label: "Form submit", sub: "Name, email, company", status: "planned" as const },
  { id: "enrich", tag: "ENRICH", label: "Clay + Apollo lookup", sub: "Domain, firmographics", status: "planned" as const },
  { id: "crm", tag: "CRM", label: "HubSpot record", sub: "Contact created/updated", status: "planned" as const },
  { id: "out", tag: "OUT", label: "Slack ping", sub: "Notifies Peter", status: "planned" as const },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-soft">
        <div className="relative mx-auto max-w-4xl px-6 pt-16">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <GridBackdrop />
            <CornerBrackets />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[280px]"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 0%, rgba(74,143,224,0.14) 0%, rgba(11,12,16,0) 70%)",
              }}
              aria-hidden
            />
            <div className="relative px-6 pt-16 pb-14 text-center sm:px-12">
              <Link
                href="/case-studies/live-lead-pipeline"
                className="inline-flex items-center gap-2 rounded-[2px] border border-border bg-panel px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:border-accent/40 hover:text-accent-soft"
              >
                <svg width="10" height="10" viewBox="0 0 20 20" aria-hidden="true">
                  <line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="6" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
                </svg>
                Live case study: a working lead pipeline →
              </Link>

              <h1 className="mt-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-5xl font-semibold leading-[1.05] tracking-tight text-transparent sm:text-7xl">
                SaaS Sales Rep turned
                <br />GTM Engineer
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                Certified full-stack developer with 4+ years in SaaS Sales (ex-Vercel).
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[2px] bg-accent px-7 font-mono text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-accent-soft"
                >
                  Trigger the pipeline →
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex h-12 items-center justify-center rounded-[2px] border border-border px-7 font-mono text-sm uppercase tracking-wide text-text-muted transition-colors hover:border-accent/40 hover:text-text"
                >
                  See how this site works
                </Link>
              </div>

              <div className="mx-auto mt-10 max-w-sm">
                <DimensionRule left="00" right="12" />
                <p className="mt-2 font-mono text-[10px] tracking-widest text-text-faint">
                  108% · 127% · 205% — QUOTA ATTAINMENT, 2022–2026
                </p>
              </div>
            </div>
            <SheetTag sheet="SHEET 00 — profile" meta={`SCALE 1:1 · REV ${year}`} />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
        <SheetKicker index="01" label="Track record" />
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Experience
        </h2>
        <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-border">
          {experience.map((job, i) => (
            <div key={job.company} className="bg-panel p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-text">{job.company}</h3>
                <span className="font-mono text-xs tracking-wide text-text-faint">
                  SHEET 0{i + 1} · {job.dates}
                </span>
              </div>
              <div className="mt-4">
                <DimensionRule />
              </div>
              <div className="mt-5 space-y-6">
                {job.roles.map((r) => (
                  <div key={r.role}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <p className="font-mono text-xs uppercase tracking-widest text-accent-soft">
                        {r.role}
                      </p>
                      {job.roles.length > 1 && (
                        <span className="font-mono text-[11px] text-text-faint">{r.dates}</span>
                      )}
                    </div>
                    <ul className="mt-2 space-y-2">
                      {r.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-6 text-text-muted">
                          <span className="mt-[3px] shrink-0 font-mono text-[10px] text-accent">+</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
        <SheetKicker index="02" label="Toolbox" />
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Tools I work with
        </h2>
        <div className="mt-12 space-y-8">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <div className="font-mono text-xs uppercase tracking-widest text-text-faint">
                {g.label}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <BlueprintChip key={item}>{item}</BlueprintChip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured case study */}
      <section className="border-t border-border-soft bg-panel/40">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-panel p-8 sm:p-12">
            <GridBackdrop className="opacity-40" />
            <div className="relative">
              <div className="font-mono text-xs uppercase tracking-widest text-accent">
                Flagship case study
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                This site is a working GTM system — and you can trigger it.
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-text-muted">
                The contact form isn&apos;t a form that emails me. It&apos;s a live
                lead pipeline: submit it and your details get enriched and written
                to my CRM in real time, with a Slack ping to me. The job, running
                inside the artifact I used to apply for it.
              </p>

              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-text-faint">
                  fig. 01 — pipeline architecture
                </p>
                <div className="mt-3">
                  <PipelineDiagram nodes={pipelinePreview} />
                </div>
              </div>

              <Link
                href="/case-studies/live-lead-pipeline"
                className="mt-8 inline-flex items-center gap-2 rounded-[2px] bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-colors hover:bg-accent-soft"
              >
                Read the case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Let&apos;s build your pipeline.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-text-muted">
          Fill out the form and watch the system work. It&apos;s the fastest way
          to see how I&apos;d think about your GTM motion.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[2px] bg-accent px-8 font-mono text-sm uppercase tracking-wide text-ink transition-colors hover:bg-accent-soft"
        >
          Trigger the pipeline →
        </Link>
      </section>
    </>
  );
}
