import type { ComponentPropsWithoutRef } from "react";

/**
 * Styling for rendered MDX case-study bodies on the dark theme. Kept as an
 * explicit component map (instead of the Tailwind typography plugin) so there
 * are no extra build deps and full control over the look.
 */
export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-12 mb-3 text-xl font-semibold tracking-tight text-text"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-2 text-lg font-semibold text-text"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 leading-7 text-text-muted" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-text-muted" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-7" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="font-medium text-accent-soft underline underline-offset-4 transition-colors hover:text-accent"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 rounded-[2px] border-l-2 border-accent bg-panel px-5 py-4 text-lg font-medium text-text"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-[2px] border border-border bg-panel-deep p-4 text-sm leading-6 text-text"
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
    // Fenced blocks arrive with a `language-*` class (they live inside <pre>);
    // leave those unstyled so they inherit the dark <pre>. Style inline code only.
    if (className) return <code className={className} {...props} />;
    return (
      <code
        className="rounded-[2px] bg-panel-deep px-1.5 py-0.5 font-mono text-[0.9em] text-accent-soft"
        {...props}
      />
    );
  },
  small: (props: ComponentPropsWithoutRef<"small">) => (
    <small className="mt-6 block text-xs text-text-faint" {...props} />
  ),
};
