import { Fragment } from "react";

/** Repeating grid-paper backdrop. Absolutely positioned; parent needs `relative`. */
export function GridBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bp-grid pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    />
  );
}

/** Four corner brackets, drafting-sheet style. Parent needs `relative`. */
export function CornerBrackets({ inset = 10 }: { inset?: number }) {
  const size = 12;
  const common = "pointer-events-none absolute border-accent/70";
  return (
    <>
      <span
        className={`${common} border-t border-l`}
        style={{ top: inset, left: inset, width: size, height: size }}
        aria-hidden
      />
      <span
        className={`${common} border-t border-r`}
        style={{ top: inset, right: inset, width: size, height: size }}
        aria-hidden
      />
      <span
        className={`${common} border-b border-l`}
        style={{ bottom: inset, left: inset, width: size, height: size }}
        aria-hidden
      />
      <span
        className={`${common} border-b border-r`}
        style={{ bottom: inset, right: inset, width: size, height: size }}
        aria-hidden
      />
    </>
  );
}

/** Bottom title bar overlay, e.g. "SHEET 00 — profile" / "SCALE 1:1 · REV 2026". */
export function SheetTag({ sheet, meta }: { sheet: string; meta: string }) {
  return (
    <div className="border-t border-border bg-ink/70 px-4 py-2.5 backdrop-blur-sm sm:px-6">
      <p className="font-mono text-[11px] font-medium tracking-wide text-text">{sheet}</p>
      <p className="mt-0.5 font-mono text-[9px] tracking-wide text-text-faint">{meta}</p>
    </div>
  );
}

/** Small uppercase mono kicker with a leading index, e.g. "01 / TRACK RECORD". */
export function SheetKicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-accent">
      <span className="text-accent-soft/70">{index}</span>
      <span>/</span>
      <span>{label.toUpperCase()}</span>
    </div>
  );
}

/** Thin ruler with end ticks, decorative section divider. */
export function DimensionRule({ left, right }: { left?: string; right?: string }) {
  return (
    <div className="flex items-center gap-2">
      {left && <span className="font-mono text-[9px] text-accent/80">{left}</span>}
      <div className="relative flex-1 border-t border-border">
        <span className="absolute left-0 top-[-4px] h-2 w-px bg-border" />
        <span className="absolute right-0 top-[-4px] h-2 w-px bg-border" />
      </div>
      {right && <span className="font-mono text-[9px] text-accent/80">{right}</span>}
    </div>
  );
}

/** Sharp-cornered mono tag, used for skills/stack chips. */
export function BlueprintChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[2px] border border-border bg-panel px-2.5 py-1.5 font-mono text-xs text-text-muted">
      {children}
    </span>
  );
}

export type NodeStatus = "planned" | "sent" | "skipped" | "error";

const statusDotClass: Record<NodeStatus, string> = {
  planned: "border border-accent/70 bg-transparent",
  sent: "bg-emerald-400",
  skipped: "bg-text-faint",
  error: "bg-red-400",
};

export interface PipelineNode {
  id: string;
  tag: string;
  label: string;
  sub: string;
  status: NodeStatus;
}

/** Horizontal node/connector diagram — the pipeline architecture, rendered live or as a static teaser. */
export function PipelineDiagram({ nodes }: { nodes: PipelineNode[] }) {
  return (
    <div className="flex flex-wrap items-stretch gap-2">
      {nodes.map((n, i) => (
        <Fragment key={n.id}>
          <div className="min-w-[132px] flex-1 rounded-[2px] border border-border bg-panel-deep px-3 py-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-text-faint">
                {n.tag}
              </span>
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDotClass[n.status]}`}
                aria-hidden
              />
            </div>
            <p className="mt-1.5 text-xs font-medium text-text">{n.label}</p>
            <p className="mt-0.5 font-mono text-[10px] text-text-faint">{n.sub}</p>
          </div>
          {i < nodes.length - 1 && (
            <span
              className="hidden self-center font-mono text-sm text-accent/50 sm:block"
              aria-hidden
            >
              →
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
