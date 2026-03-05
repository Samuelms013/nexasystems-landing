// ── Site-wide constants ──
// Replace CALENDLY_URL with your actual Calendly link before deploying

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/nexasystems/consulta";

export const SITE = {
  name:   "Nexa Systems",
  domain: "nexasystems.io",
  email:  "hola@nexasystems.io",
  url:    "https://nexasystems.io",
} as const;
