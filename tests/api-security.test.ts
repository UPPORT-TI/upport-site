import assert from "node:assert/strict";
import test from "node:test";
import { handleBookingRequest } from "../api/booking";
import { readTextLimited } from "../src/server/http";

let requestSequence = 0;

function bookingRequest(body: string, options: { contentType?: string; origin?: string; ip?: string; contentLength?: string } = {}): Request {
  requestSequence += 1;
  const headers = new Headers({
    "Content-Type": options.contentType ?? "application/json",
    "x-forwarded-for": options.ip ?? `203.0.113.${requestSequence}`,
  });
  if (options.origin) headers.set("Origin", options.origin);
  if (options.contentLength) headers.set("Content-Length", options.contentLength);
  return new Request("https://upport.com.br/api/booking", { method: "POST", headers, body });
}

function nextBusinessDate(): string {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + 7);
  while (date.getUTCDay() === 0 || date.getUTCDay() === 6) date.setUTCDate(date.getUTCDate() + 1);
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
}

test("booking rejects unsupported methods with defensive headers", async () => {
  const response = await handleBookingRequest(new Request("https://upport.com.br/api/booking"));
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("allow"), "POST");
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
});

test("booking rejects cross-origin requests", async () => {
  const response = await handleBookingRequest(bookingRequest("{}", { origin: "https://attacker.example" }));
  assert.equal(response.status, 403);
});

test("booking requires JSON and enforces the body limit", async () => {
  const mediaResponse = await handleBookingRequest(bookingRequest("name=test", { contentType: "text/plain" }));
  assert.equal(mediaResponse.status, 415);

  const sizeResponse = await handleBookingRequest(bookingRequest("{}", { contentLength: "9000" }));
  assert.equal(sizeResponse.status, 413);
});

test("booking rejects malformed and non-object JSON", async () => {
  const malformed = await handleBookingRequest(bookingRequest("{"));
  assert.equal(malformed.status, 400);

  const array = await handleBookingRequest(bookingRequest("[]"));
  assert.equal(array.status, 400);
});

test("booking validates impossible dates and contact fields", async () => {
  const response = await handleBookingRequest(bookingRequest(JSON.stringify({
    name: "A",
    company: "B",
    email: "not-an-email",
    phone: "123",
    date: "2026-02-31",
    time: "08:00",
  })));
  assert.equal(response.status, 400);
});

test("booking honeypot absorbs automated submissions", async () => {
  const response = await handleBookingRequest(bookingRequest(JSON.stringify({ website: "spam.example" })));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test("booking does not expose server configuration details", async () => {
  const savedApiKey = process.env.RESEND_API_KEY;
  const savedFrom = process.env.BOOKING_FROM_EMAIL;
  delete process.env.RESEND_API_KEY;
  delete process.env.BOOKING_FROM_EMAIL;
  try {
    const response = await handleBookingRequest(bookingRequest(JSON.stringify({
      name: "Cliente Teste",
      company: "Empresa Teste",
      email: "cliente@example.com",
      phone: "+55 11 99999-9999",
      date: nextBusinessDate(),
      time: "08:00",
    })));
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { error: "service_unavailable" });
  } finally {
    if (savedApiKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = savedApiKey;
    if (savedFrom === undefined) delete process.env.BOOKING_FROM_EMAIL;
    else process.env.BOOKING_FROM_EMAIL = savedFrom;
  }
});

test("booking rate limits repeated requests from one address", async () => {
  const ip = "198.51.100.42";
  for (let index = 0; index < 5; index += 1) {
    const response = await handleBookingRequest(bookingRequest("{}", { ip }));
    assert.equal(response.status, 400);
  }
  const limited = await handleBookingRequest(bookingRequest("{}", { ip }));
  assert.equal(limited.status, 429);
  assert.ok(Number(limited.headers.get("retry-after")) > 0);
});

test("external response reader rejects oversized content", async () => {
  const response = new Response("123456", { headers: { "Content-Length": "6" } });
  await assert.rejects(readTextLimited(response, 5), /response_too_large/);
});
