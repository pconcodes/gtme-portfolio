import Link from "next/link";
import type { Metadata } from "next";
import { getAllCaseStudies, DOMAIN_LABELS } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case studies — GTM systems, documented",
  description:
    "GTM systems I've built, each documented as Problem → Architecture → Measurable result.",
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-widest text-text-faint transition-colors hover:text-text"
      >
        ← Home
      </Link>

      <header className="mt-6 mb-12">
        <div className="font-mono text-xs uppercase tracking-widest text-accent">Case study</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text">
          GTM systems, documented
        </h1>
        <p className="mt-3 max-w-prose text-lg leading-8 text-text-muted">
          Each one a problem, the architecture I shipped, and the measurable
          result.
        </p>
      </header>

      <ul className="space-y-4">
        {studies.map((cs, i) => (
          <li key={cs.slug}>
            <Link
              href={`/case-studies/${cs.slug}`}
              className="group block rounded-2xl border border-border bg-panel p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {DOMAIN_LABELS[cs.domain]}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-text-faint">
                  DWG-{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-text group-hover:underline">
                {cs.title}
              </h2>
              <p className="mt-2 leading-7 text-text-muted">{cs.problem}</p>
              <p className="mt-4 font-mono text-sm text-accent-soft">
                → Result: {cs.result}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      {studies.length === 0 && (
        <p className="text-text-faint">No case studies yet.</p>
      )}
    </main>
  );
}
