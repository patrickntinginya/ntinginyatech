/**
 * Small in-memory sliding-window limiter.
 *
 * Best effort only: on serverless hosting (Netlify functions) each warm instance keeps its own
 * memory, so limits are per instance and reset when the instance is recycled.
 * It stops casual abuse. For stronger protection add a shared store or a bot-protection service.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit: number, windowMs: number): { ok: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return { ok: false, retryAfterSeconds: Math.max(1, Math.ceil((windowMs - (now - recent[0])) / 1000)) };
  }

  recent.push(now);
  hits.set(key, recent);

  // Keep memory bounded.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((time) => now - time >= windowMs)) hits.delete(k);
    }
  }
  return { ok: true, retryAfterSeconds: 0 };
}
