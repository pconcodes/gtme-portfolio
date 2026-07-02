// Lightweight per-IP rate limiter for the lead endpoint.
//
// Note: this store is in-memory, so on serverless it's per-instance and resets
// on cold start — a solid mitigation against bursts/bots, but not a strict
// global guarantee. If you ever need hard limits across all instances, back
// this with Upstash Redis or Vercel KV (same interface, swap the store).

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5; // submissions per window per IP

interface Entry {
  count: number;
  resetAt: number;
}

const store = new Map<string, Entry>();
let lastCleanup = 0;

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

/** Pull the caller's IP from proxy headers (Vercel sets x-forwarded-for). */
export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export function checkRateLimit(
  key: string,
  now: number = Date.now(),
): RateLimitResult {
  maybeCleanup(now);

  const entry = store.get(key);

  if (!entry || now >= entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Occasionally sweep expired entries so the map can't grow unbounded. */
function maybeCleanup(now: number): void {
  if (now - lastCleanup < WINDOW_MS) return;
  lastCleanup = now;
  for (const [key, entry] of store) {
    if (now >= entry.resetAt) store.delete(key);
  }
}
