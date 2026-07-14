import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import {
  getAllSlugs,
  getCaseStudy,
  DOMAIN_LABELS,
} from "@/lib/case-studies";
import { mdxComponents } from "@/components/mdx";
import { BlueprintChip } from "@/components/blueprint";

type Params = { slug: string };

// Pre-render every case study at build time.
export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.meta.title,
    description: cs.meta.problem,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const { content } = await compileMDX({
    source: cs.body,
    components: mdxComponents,
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20">
      <Link
        href="/case-studies"
        className="font-mono text-xs uppercase tracking-widest text-text-faint transition-colors hover:text-text"
      >
        ← All case studies
      </Link>

      <header className="mt-6 mb-2">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          {DOMAIN_LABELS[cs.meta.domain]}
        </span>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {cs.meta.title}
        </h1>
        {cs.meta.stack && cs.meta.stack.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {cs.meta.stack.map((tool) => (
              <li key={tool}>
                <BlueprintChip>{tool}</BlueprintChip>
              </li>
            ))}
          </ul>
        )}
      </header>

      <article>{content}</article>

      <div className="mt-16 border-t border-border-soft pt-8">
        <p className="text-text-muted">Want a system like this for your team?</p>
        <Link
          href="/contact"
          className="mt-3 inline-block rounded-[2px] bg-accent px-5 py-2.5 font-mono text-sm uppercase tracking-wide text-ink transition-colors hover:bg-accent-soft"
        >
          Get in touch
        </Link>
      </div>
    </main>
  );
}
