import { checkRateLimit, isSameOriginRequest, jsonResponse, readJsonObject } from "../src/server/http.js";

interface Booking {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  time: string;
}

const MAX_BODY_BYTES = 8_192;
const MINIMUM_NOTICE_MS = 30 * 60 * 1_000;
const MAXIMUM_RANGE_MS = 60 * 24 * 60 * 60 * 1_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value: unknown, max: number, multiline = false): string {
  if (typeof value !== "string") return "";
  const controls = multiline ? /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g : /[\u0000-\u001f\u007f]/g;
  return value.normalize("NFKC").replace(controls, "").trim().slice(0, max);
}

function escapeHtml(value: string): string {
  const replacements: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
  return value.replace(/[&<>'"]/g, (character) => replacements[character] ?? "");
}

function environment(): Record<string, string | undefined> {
  return (globalThis as typeof globalThis & { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
}

function validSlot(date: string, time: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^(0[8-9]|1[0-7]):00$/.test(time)) return false;
  const [year, month, day] = date.split("-").map(Number);
  const [hour] = time.split(":").map(Number);
  const calendarDate = new Date(Date.UTC(year, month - 1, day));
  if (calendarDate.getUTCFullYear() !== year || calendarDate.getUTCMonth() !== month - 1 || calendarDate.getUTCDate() !== day) return false;

  const slot = new Date(`${date}T${time}:00-03:00`);
  const now = Date.now();
  const weekday = calendarDate.getUTCDay();
  return weekday !== 0 && weekday !== 6 && hour >= 8 && hour < 18
    && slot.getTime() > now + MINIMUM_NOTICE_MS
    && slot.getTime() <= now + MAXIMUM_RANGE_MS;
}

function validPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return /^[+\d().\s-]+$/.test(phone) && digits.length >= 8 && digits.length <= 15;
}

async function idempotencyKey(booking: Booking): Promise<string> {
  const source = `${booking.date}|${booking.time}|${booking.email.toLowerCase()}`;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(source));
  const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `booking/${booking.date}/${booking.time}/${hash}`;
}

export async function handleBookingRequest(request: Request): Promise<Response> {
  if (request.method !== "POST") return jsonResponse({ error: "method_not_allowed" }, 405, { Allow: "POST" });
  if (!isSameOriginRequest(request)) return jsonResponse({ error: "forbidden" }, 403);

  const rateLimit = checkRateLimit(request, "booking", { limit: 5, windowMs: 15 * 60 * 1_000 });
  if (!rateLimit.allowed) {
    return jsonResponse({ error: "too_many_requests" }, 429, { "Retry-After": String(rateLimit.retryAfterSeconds) });
  }

  const parsed = await readJsonObject(request, MAX_BODY_BYTES);
  if (!parsed.ok) return jsonResponse({ error: parsed.error }, parsed.status);
  if (text(parsed.value.website, 200)) return jsonResponse({ ok: true }, 200);

  const booking: Booking = {
    name: text(parsed.value.name, 100),
    company: text(parsed.value.company, 120),
    email: text(parsed.value.email, 160).toLowerCase(),
    phone: text(parsed.value.phone, 30),
    message: text(parsed.value.message, 1_200, true),
    date: text(parsed.value.date, 10),
    time: text(parsed.value.time, 5),
  };
  if (booking.name.length < 2 || booking.company.length < 2 || !EMAIL_PATTERN.test(booking.email)
    || !validPhone(booking.phone) || !validSlot(booking.date, booking.time)) {
    return jsonResponse({ error: "invalid_booking" }, 400);
  }

  const variables = environment();
  const apiKey = variables.RESEND_API_KEY;
  const from = variables.BOOKING_FROM_EMAIL;
  const to = variables.BOOKING_TO_EMAIL ?? "contato@upport.com.br";
  if (!apiKey || !from) return jsonResponse({ error: "service_unavailable" }, 503);

  const dateLabel = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo", weekday: "long", day: "2-digit", month: "long", year: "numeric",
  }).format(new Date(`${booking.date}T12:00:00-03:00`));
  const safe = Object.fromEntries(Object.entries(booking).map(([key, value]) => [key, escapeHtml(value)])) as Record<keyof Booking, string>;

  try {
    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "Upport-Booking/2.0",
        "Idempotency-Key": await idempotencyKey(booking),
      },
      signal: AbortSignal.timeout(8_000),
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: booking.email,
        subject: `Novo diagnóstico: ${booking.company} · ${booking.date} às ${booking.time}`,
        html: `<div style="font-family:Arial,sans-serif;max-width:640px;color:#10272d"><h1 style="font-size:24px">Nova solicitação de diagnóstico</h1><p><strong>Data:</strong> ${escapeHtml(dateLabel)} às ${safe.time} (Brasília)</p><hr style="border:0;border-top:1px solid #dce3e5"><p><strong>Nome:</strong> ${safe.name}</p><p><strong>Empresa:</strong> ${safe.company}</p><p><strong>E-mail:</strong> ${safe.email}</p><p><strong>WhatsApp:</strong> ${safe.phone}</p><p><strong>Contexto:</strong><br>${safe.message.replace(/\n/g, "<br>") || "Não informado"}</p></div>`,
        text: `Nova solicitação de diagnóstico\n\nData: ${dateLabel} às ${booking.time} (Brasília)\nNome: ${booking.name}\nEmpresa: ${booking.company}\nE-mail: ${booking.email}\nWhatsApp: ${booking.phone}\n\nContexto:\n${booking.message || "Não informado"}`,
      }),
    });
    if (!resend.ok) return jsonResponse({ error: "delivery_failed" }, 502);
    return jsonResponse({ ok: true }, 201);
  } catch {
    return jsonResponse({ error: "delivery_failed" }, 502);
  }
}

export default {
  fetch: handleBookingRequest,
};
