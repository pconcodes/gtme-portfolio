import type { Enrichment, IntegrationStatus, Lead } from "./types";

/**
 * Trigger a Dust agent via its webhook. No-ops (returns "skipped") without
 * DUST_WEBHOOK_URL. Security here is URL obscurity (a pattern Dust's own
 * docs explicitly support for this use case) rather than HMAC signing — the
 * URL itself is the secret, so it only ever lives server-side as an env var.
 */
export async function triggerDust(
  lead: Lead,
  enrichment: Enrichment,
): Promise<IntegrationStatus> {
  const url = process.env.DUST_WEBHOOK_URL;
  if (!url) {
    console.warn(
      "[dust] skipped — DUST_WEBHOOK_URL is not set in this process. " +
        "Did you restart `npm run dev` after editing .env.local?",
    );
    return "skipped";
  }

  const body = JSON.stringify({
    ...lead,
    ...enrichment,
    source: "portfolio-site",
    submittedAt: new Date().toISOString(),
  });

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    if (!res.ok) {
      console.error(
        `[dust] post failed: ${res.status} ${res.statusText} — ${await res
          .text()
          .catch(() => "")}`,
      );
      return "error";
    }
    return "sent";
  } catch (err) {
    console.error("[dust] request threw:", err);
    return "error";
  }
}
