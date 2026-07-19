import { initI18n, translateText } from "./i18n";
import { bookingMarkup, initBooking } from "./booking";
import { initSpotlight } from "./spotlight";

type ConsentChoice = "accepted" | "rejected";

interface ConsentPreferences {
  analytics: boolean;
  updatedAt: string;
}

const WHATSAPP_URL = "https://wa.me/5511952136402";
const PHONE_URL = "tel:+5511952136402";
const EMAIL_URL = "mailto:contato@upport.com.br";
const CONSENT_KEY = "upport-cookie-consent-v2";

let scrollIdleTimer: number | undefined;
window.addEventListener("scroll", () => {
  document.documentElement.classList.add("is-scrolling");
  window.clearTimeout(scrollIdleTimer);
  scrollIdleTimer = window.setTimeout(() => {
    document.documentElement.classList.remove("is-scrolling");
  }, 700);
}, { passive: true });

const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const siteNav = document.querySelector<HTMLElement>("[data-site-nav]");

function closeMenu(): void {
  if (!menuToggle || !siteNav) return;
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", translateText("Abrir menu"));
  document.body.classList.remove("menu-open");
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const willOpen = !siteNav.classList.contains("open");
    siteNav.classList.toggle("open", willOpen);
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", translateText(willOpen ? "Fechar menu" : "Abrir menu"));
    document.body.classList.toggle("menu-open", willOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("open")) closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && siteNav.classList.contains("open")) closeMenu();
  });
}

function floatingContactMarkup(): string {
  return `
    <aside class="contact-dock" data-contact-dock>
      <button class="contact-dock-toggle" type="button" data-contact-toggle aria-expanded="false" aria-controls="contact-dock-panel">
        <i data-lucide="message-circle" aria-hidden="true"></i><span>Fale conosco</span><strong aria-hidden="true">+</strong>
      </button>
      <div class="contact-dock-panel" id="contact-dock-panel" data-contact-panel hidden>
        <div class="contact-dock-head"><strong>Como prefere falar?</strong><button type="button" data-contact-close aria-label="Fechar contatos">×</button></div>
        <a href="${WHATSAPP_URL}" target="_blank" rel="noopener"><span>WhatsApp</span><strong>(11) 95213-6402</strong></a>
        <a href="${PHONE_URL}"><span>Telefone</span><strong>Ligar agora</strong></a>
        <a href="${EMAIL_URL}"><span>E-mail</span><strong>contato@upport.com.br</strong></a>
        <small>Seg–Sex, 08h às 18h</small>
      </div>
    </aside>
    <a class="whatsapp-fab-v2" href="${WHATSAPP_URL}" target="_blank" rel="noopener" aria-label="Falar com a Upport pelo WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.2-4.4a8.4 8.4 0 1 1 15.8-4.3Zm-8.4-6.9a6.9 6.9 0 0 0-5.9 10.5l.2.4-.7 2.5 2.6-.7.4.2a6.9 6.9 0 1 0 3.4-12.9Zm-2.3 3.2c.2 0 .3 0 .4.3l.6 1.5c.1.2 0 .4-.1.5l-.5.6c-.2.1-.3.3-.1.6.6 1.1 1.5 2 2.7 2.5.3.2.5.1.6-.1l.8-1c.1-.2.3-.2.5-.1l1.6.7c.2.1.3.2.3.4 0 .4-.2 1.4-.9 1.8-.5.4-1.2.5-2 .3-1-.2-2.3-.8-3.8-2.1-1.2-1.1-2.1-2.4-2.4-3.4-.3-.8 0-1.7.4-2.2.4-.4.8-.4 1.1-.4h.3Z"/></svg>
    </a>`;
}

document.body.insertAdjacentHTML("beforeend", floatingContactMarkup());

const contactToggle = document.querySelector<HTMLButtonElement>("[data-contact-toggle]");
const contactPanel = document.querySelector<HTMLElement>("[data-contact-panel]");
const contactClose = document.querySelector<HTMLButtonElement>("[data-contact-close]");
const contactDock = document.querySelector<HTMLElement>("[data-contact-dock]");

if (contactDock && "IntersectionObserver" in window) {
  const contactSuppressors = document.querySelectorAll<HTMLElement>(
    ".hero, .product-hero, .contact-page-hero, .contact-band, .site-footer",
  );
  const visibleSuppressors = new Set<Element>();
  const contactVisibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleSuppressors.add(entry.target);
      else visibleSuppressors.delete(entry.target);
    });
    contactDock.classList.toggle("is-suppressed", visibleSuppressors.size > 0);
  }, { threshold: 0.08 });
  contactSuppressors.forEach((element) => contactVisibilityObserver.observe(element));
}

function setContactOpen(open: boolean): void {
  if (!contactToggle || !contactPanel) return;
  contactPanel.hidden = !open;
  contactToggle.setAttribute("aria-expanded", String(open));
  contactToggle.querySelector("strong")!.textContent = open ? "−" : "+";
  document.body.classList.toggle("contact-open", open);
}

contactToggle?.addEventListener("click", () => setContactOpen(contactPanel?.hidden ?? true));
contactClose?.addEventListener("click", () => setContactOpen(false));

function cookieMarkup(): string {
  return `
    <section class="cookie-consent-v2" data-cookie-banner aria-label="Preferências de cookies" hidden>
      <div><strong>Sua privacidade importa.</strong><p>Usamos cookies essenciais para o site funcionar e, com sua permissão, dados de navegação para melhorar a experiência. <a href="privacidade.html">Ver política de privacidade</a>.</p></div>
      <div class="cookie-actions-v2"><button type="button" class="button button-outline-dark" data-cookie-reject>Recusar opcionais</button><button type="button" class="button button-outline-dark" data-cookie-configure>Configurar</button><button type="button" class="button button-dark" data-cookie-accept>Aceitar todos</button></div>
    </section>
    <div class="cookie-dialog-backdrop" data-cookie-dialog-backdrop hidden>
      <section class="cookie-dialog" data-cookie-dialog role="dialog" aria-modal="true" aria-labelledby="cookie-dialog-title">
        <div class="cookie-dialog-head">
          <div><span class="cookie-kicker">Privacidade</span><h2 id="cookie-dialog-title">Preferências de cookies</h2></div>
          <button type="button" class="cookie-dialog-close" data-cookie-close aria-label="Fechar preferências">×</button>
        </div>
        <p class="cookie-dialog-intro">Escolha quais recursos opcionais podem ser usados. Cookies essenciais permanecem ativos para segurança e funcionamento do site.</p>
        <div class="cookie-category">
          <div><strong>Cookies essenciais</strong><p>Guardam sua escolha de privacidade e mantêm recursos básicos funcionando.</p></div>
          <span class="cookie-required">Sempre ativos</span>
        </div>
        <label class="cookie-category" for="cookie-analytics">
          <div><strong>Análise e desempenho</strong><p>Permite métricas anônimas de navegação para entendermos e melhorarmos a experiência.</p></div>
          <span class="cookie-switch"><input id="cookie-analytics" type="checkbox" data-cookie-analytics><span aria-hidden="true"></span></span>
        </label>
        <div class="cookie-dialog-actions">
          <button type="button" class="button button-outline-dark" data-cookie-dialog-reject>Somente essenciais</button>
          <button type="button" class="button button-dark" data-cookie-save>Salvar preferências</button>
        </div>
      </section>
    </div>
    <div class="cookie-toast" data-cookie-toast role="status" aria-live="polite" hidden></div>
    <button class="cookie-settings-v2" type="button" data-cookie-settings aria-label="Revisar preferências de cookies" hidden>Cookies</button>`;
}

document.body.insertAdjacentHTML("beforeend", cookieMarkup());

function footerLegalMarkup(): string {
  return `<div class="footer-legal-strip" id="legal">
    <div class="shell footer-legal-row" aria-label="Links legais e privacidade">
      <a href="privacidade.html">Política de Privacidade</a>
      <a href="privacidade.html#cookies">Uso de Cookies</a>
      <a href="privacidade.html#direitos">Direitos LGPD</a>
      <button type="button" data-footer-cookie-settings aria-label="Abrir preferências de privacidade">
        <span>Suas escolhas de privacidade</span>
        <i class="privacy-choice-icon" aria-hidden="true"><i data-lucide="shield-check"></i></i>
      </button>
    </div>
  </div>`;
}

document.querySelector(".site-footer")?.insertAdjacentHTML("beforeend", footerLegalMarkup());
if (document.querySelector("[data-booking-trigger]")) document.body.insertAdjacentHTML("beforeend", bookingMarkup());
initI18n();
initBooking();
initSpotlight();
initTwentyTour();
initErpTour();

const cookieBanner = document.querySelector<HTMLElement>("[data-cookie-banner]");
const cookieSettings = document.querySelector<HTMLButtonElement>("[data-cookie-settings]");
const footerCookieSettings = document.querySelector<HTMLButtonElement>("[data-footer-cookie-settings]");
const cookieDialogBackdrop = document.querySelector<HTMLElement>("[data-cookie-dialog-backdrop]");
const cookieDialog = document.querySelector<HTMLElement>("[data-cookie-dialog]");
const analyticsToggle = document.querySelector<HTMLInputElement>("[data-cookie-analytics]");
const cookieToast = document.querySelector<HTMLElement>("[data-cookie-toast]");
let cookieToastTimer: number | undefined;

function readConsent(): ConsentPreferences | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    if (!value) return null;
    if (value === "accepted" || value === "rejected") {
      return { analytics: value === "accepted", updatedAt: new Date().toISOString() };
    }
    const parsed = JSON.parse(value) as Partial<ConsentPreferences>;
    return typeof parsed.analytics === "boolean"
      ? { analytics: parsed.analytics, updatedAt: parsed.updatedAt ?? new Date().toISOString() }
      : null;
  } catch {
    return null;
  }
}

function showCookieBanner(): void {
  if (!cookieBanner || !cookieSettings) return;
  closeCookieDialog();
  cookieBanner.hidden = false;
  cookieSettings.hidden = true;
}

function showCookieToast(message: string): void {
  if (!cookieToast) return;
  window.clearTimeout(cookieToastTimer);
  cookieToast.textContent = message;
  cookieToast.hidden = false;
  cookieToastTimer = window.setTimeout(() => {
    cookieToast.hidden = true;
  }, 3200);
}

function openCookieDialog(): void {
  if (!cookieDialogBackdrop || !analyticsToggle) return;
  analyticsToggle.checked = readConsent()?.analytics ?? false;
  cookieDialogBackdrop.hidden = false;
  document.body.classList.add("cookie-dialog-open");
  cookieBanner?.setAttribute("hidden", "");
  window.setTimeout(() => analyticsToggle.focus(), 0);
}

function closeCookieDialog(): void {
  if (cookieDialogBackdrop) cookieDialogBackdrop.hidden = true;
  document.body.classList.remove("cookie-dialog-open");
}

function storeConsent(choice: ConsentChoice | ConsentPreferences): void {
  const preferences: ConsentPreferences = typeof choice === "string"
    ? { analytics: choice === "accepted", updatedAt: new Date().toISOString() }
    : choice;
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(preferences));
  } catch {
    // The preference remains valid for the current page when storage is unavailable.
  }
  document.documentElement.dataset.analyticsConsent = String(preferences.analytics);
  window.dispatchEvent(new CustomEvent("upport:consentchange", { detail: preferences }));
  closeCookieDialog();
  if (cookieBanner && cookieSettings) {
    cookieBanner.hidden = true;
    cookieSettings.hidden = false;
  }
  showCookieToast(translateText(preferences.analytics
    ? "Preferências salvas. Cookies de análise autorizados."
    : "Preferências salvas. Somente cookies essenciais estão ativos."));
}

document.querySelector("[data-cookie-accept]")?.addEventListener("click", () => storeConsent("accepted"));
document.querySelector("[data-cookie-reject]")?.addEventListener("click", () => storeConsent("rejected"));
document.querySelector("[data-cookie-configure]")?.addEventListener("click", openCookieDialog);
document.querySelector("[data-cookie-close]")?.addEventListener("click", closeCookieDialog);
document.querySelector("[data-cookie-dialog-reject]")?.addEventListener("click", () => storeConsent("rejected"));
document.querySelector("[data-cookie-save]")?.addEventListener("click", () => storeConsent({
  analytics: analyticsToggle?.checked ?? false,
  updatedAt: new Date().toISOString(),
}));
cookieSettings?.addEventListener("click", openCookieDialog);
footerCookieSettings?.addEventListener("click", openCookieDialog);
cookieDialogBackdrop?.addEventListener("click", (event) => {
  if (event.target === cookieDialogBackdrop) closeCookieDialog();
});

const storedConsent = readConsent();
if (storedConsent) {
  document.documentElement.dataset.analyticsConsent = String(storedConsent.analytics);
  if (cookieSettings) cookieSettings.hidden = false;
} else {
  showCookieBanner();
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeMenu();
  setContactOpen(false);
  closeCookieDialog();
});

document.querySelectorAll<HTMLElement>("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector<HTMLFormElement>("[data-contact-form]");
const contactFormStatus = document.querySelector<HTMLElement>("[data-contact-form-status]");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const fullName = `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim();
  const lines = [
    `*${translateText("Nova solicitação pelo site")}*`,
    "",
    `*${translateText("Nome completo")}:* ${fullName}`,
    `*${translateText("Empresa")}:* ${data.get("company") ?? ""}`,
    `*${translateText("E-mail")}:* ${data.get("email") ?? ""}`,
    `*${translateText("Telefone")}:* ${data.get("phone") || "-"}`,
    `*${translateText("Cidade / Estado")}:* ${data.get("location") ?? ""}`,
    `*${translateText("Assunto")}:* ${data.get("reason") ?? ""}`,
    "",
    `*${translateText("Mensagem")}:*`,
    String(data.get("message") ?? ""),
  ];
  const url = `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
  if (contactFormStatus) contactFormStatus.textContent = translateText("Mensagem preparada. Abrindo o WhatsApp...");
  window.open(url, "_blank", "noopener,noreferrer");
});

function initMotion(): void {
  document.body.classList.add("motion-enabled");
  window.requestAnimationFrame(() => document.body.classList.add("site-ready"));

  const sections = document.querySelectorAll<HTMLElement>("main > section, main > .legal-layout");
  sections.forEach((section) => section.classList.add("scroll-reveal"));
  const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  }, { threshold: 0.1, rootMargin: "0px 0px -6%" });
  sections.forEach((section) => revealObserver.observe(section));

  document.querySelectorAll<SVGSVGElement>("[data-animated-chart]").forEach((chart) => {
    const line = chart.querySelector<SVGPathElement>("[data-chart-line]");
    const area = chart.querySelector<SVGPathElement>("[data-chart-area]");
    const point = chart.querySelector<SVGCircleElement>("[data-chart-point]");
    if (!line || !area || !point) return;

    const base = [38, 55, 48, 78, 65, 94, 69, 86, 106, 88, 111, 125];
    let active = false;
    let animationFrame = 0;
    let lastDraw = 0;
    const draw = (time: number): void => {
      if (!active) return;
      if (time - lastDraw > 70) {
        const points = base.map((value, index) => {
          const x = (600 / (base.length - 1)) * index;
          const movement = Math.sin(time / 720 + index * .82) * 7 + Math.sin(time / 1700 + index) * 3;
          return [x, 170 - value - movement] as const;
        });
        const path = points.map(([x, y], index) => `${index ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
        line.setAttribute("d", path);
        area.setAttribute("d", `${path} L600 180 L0 180 Z`);
        point.setAttribute("cx", points.at(-1)![0].toFixed(1));
        point.setAttribute("cy", points.at(-1)![1].toFixed(1));
        lastDraw = time;
      }
      animationFrame = window.requestAnimationFrame(draw);
    };
    const chartObserver = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      window.cancelAnimationFrame(animationFrame);
      if (active) animationFrame = window.requestAnimationFrame(draw);
    }, { threshold: 0.15 });
    chartObserver.observe(chart);
  });
}

initMotion();

function initTwentyTour(): void {
  const tour = document.querySelector<HTMLElement>("[data-twenty-tour]");
  const tabs = [...document.querySelectorAll<HTMLButtonElement>("[data-twenty-tab]")];
  const panels = [...document.querySelectorAll<HTMLElement>("[data-twenty-panel]")];
  if (!tour || !tabs.length || !panels.length) return;

  let activeIndex = 0;
  let cycleTimer: number | undefined;
  let visible = false;

  const activate = (index: number): void => {
    activeIndex = (index + tabs.length) % tabs.length;
    const name = tabs[activeIndex].dataset.twentyTab;
    tabs.forEach((tab, tabIndex) => {
      const active = tabIndex === activeIndex;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.dataset.twentyPanel === name;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
    document.querySelectorAll<HTMLElement>("[data-twenty-nav]").forEach((item) => {
      item.classList.toggle("active", item.dataset.twentyNav === name);
    });
  };

  const stopCycle = (): void => window.clearInterval(cycleTimer);
  const startCycle = (): void => {
    stopCycle();
    if (!visible) return;
    cycleTimer = window.setInterval(() => activate(activeIndex + 1), 5600);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activate(index);
      startCycle();
    });
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const next = index + (event.key === "ArrowRight" ? 1 : -1);
      activate(next);
      tabs[activeIndex].focus();
      startCycle();
    });
  });
  tour.addEventListener("mouseenter", stopCycle);
  tour.addEventListener("mouseleave", startCycle);
  document.addEventListener("visibilitychange", () => document.hidden ? stopCycle() : startCycle());

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? startCycle() : stopCycle();
  }, { threshold: 0.25 });
  observer.observe(tour);
  activate(0);
}

function initErpTour(): void {
  const tour = document.querySelector<HTMLElement>("[data-erp-tour]");
  const tabs = [...document.querySelectorAll<HTMLButtonElement>("[data-erp-tab]")];
  const panels = [...document.querySelectorAll<HTMLElement>("[data-erp-panel]")];
  if (!tour || !tabs.length || !panels.length) return;

  let activeIndex = 0;
  let cycleTimer: number | undefined;
  let visible = false;

  const activate = (index: number): void => {
    activeIndex = (index + tabs.length) % tabs.length;
    const name = tabs[activeIndex].dataset.erpTab;
    tabs.forEach((tab, tabIndex) => {
      const active = tabIndex === activeIndex;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.dataset.erpPanel === name;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
    document.querySelectorAll<HTMLElement>("[data-erp-nav]").forEach((item) => {
      item.classList.toggle("active", item.dataset.erpNav === name);
    });
  };

  const stopCycle = (): void => window.clearInterval(cycleTimer);
  const startCycle = (): void => {
    stopCycle();
    if (!visible) return;
    cycleTimer = window.setInterval(() => activate(activeIndex + 1), 6000);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => { activate(index); startCycle(); });
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      activate(index + (event.key === "ArrowRight" ? 1 : -1));
      tabs[activeIndex].focus();
      startCycle();
    });
  });
  tour.addEventListener("mouseenter", stopCycle);
  tour.addEventListener("mouseleave", startCycle);
  document.addEventListener("visibilitychange", () => document.hidden ? stopCycle() : startCycle());
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? startCycle() : stopCycle();
  }, { threshold: 0.25 }).observe(tour);
  activate(0);
}
