import type { Enrichment, IntegrationStatus, Lead } from "./types";

/**
 * Fire the lead at the n8n enrichment webhook (Webhook -> Clay Enrichment ->
 * HubSpot upsert). No-ops (returns "skipped") without N8N_WEBHOOK_URL. This
 * is fire-and-forget from the reader's perspective — the site's own HubSpot
 * push already lands the contact; this call feeds the async enrichment
 * pipeline on top of it.
 */
export async function pushToN8n(
  lead: Lead,
  enrichment: Enrichment,
): Promise<IntegrationStatus> {
  const url = process.env.N8N_WEBHOOK_URL;
  if (!url) {
    console.warn(
      "[n8n] skipped — N8N_WEBHOOK_URL is not set in this process. " +
        "Did you restart `npm run dev` after editing .env.local?",
    );
    return "skipped";
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: lead.email,
        linkedinUrl: lead.linkedinUrl,
        emailDomain: enrichment.emailDomain,
        companyDomain: enrichment.companyDomain,
      }),
    });
    if (!res.ok) {
      console.error(
        `[n8n] post failed: ${res.status} ${res.statusText} — ${await res
          .text()
          .catch(() => "")}`,
      );
      return "error";
    }
    return "sent";
  } catch (err) {
    console.error("[n8n] request threw:", err);
    return "error";
  }
}
