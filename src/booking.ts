import { translateText } from "./i18n";

const BUSINESS_START = 8;
const BUSINESS_END = 18;
const MINIMUM_NOTICE_MINUTES = 30;
const BOOKING_RANGE_DAYS = 60;

function dateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function locale(): string {
  const language = document.documentElement.lang.toLowerCase();
  if (language.startsWith("en")) return "en-US";
  if (language.startsWith("es")) return "es-ES";
  return "pt-BR";
}

function capitalizeFirst(value: string): string {
  return value ? value.charAt(0).toLocaleUpperCase(locale()) + value.slice(1) : value;
}

function isBusinessDay(date: Date): boolean {
  const weekday = date.getDay();
  return weekday !== 0 && weekday !== 6;
}

function availableTimes(dateValue: string): string[] {
  const selected = parseDate(dateValue);
  const now = new Date();
  const threshold = new Date(now.getTime() + MINIMUM_NOTICE_MINUTES * 60_000);
  const times: string[] = [];

  for (let hour = BUSINESS_START; hour < BUSINESS_END; hour += 1) {
    const slot = new Date(selected.getFullYear(), selected.getMonth(), selected.getDate(), hour);
    if (slot > threshold) times.push(`${String(hour).padStart(2, "0")}:00`);
  }
  return times;
}

export function bookingMarkup(): string {
  return `
    <div class="booking-backdrop" data-booking-backdrop hidden>
      <section class="booking-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <header class="booking-head">
          <div><p class="eyebrow">Diagnóstico Upport</p><h2 id="booking-title">Escolha o melhor horário.</h2></div>
          <button class="booking-close" type="button" data-booking-close aria-label="Fechar agendamento"><i data-lucide="x" aria-hidden="true"></i></button>
        </header>
        <div class="booking-progress" aria-label="Etapas do agendamento">
          <span class="active" data-booking-progress="date"><b>1</b> Data</span>
          <span data-booking-progress="time"><b>2</b> Horário</span>
          <span data-booking-progress="details"><b>3</b> Seus dados</span>
        </div>

        <div class="booking-step active" data-booking-step="date">
          <div class="booking-step-heading"><div><span>Primeiro passo</span><h3>Selecione uma data</h3></div><small>Segunda a sexta, das 08h às 18h</small></div>
          <div class="booking-calendar">
            <header><button type="button" data-calendar-previous aria-label="Mês anterior"><i data-lucide="chevron-left" aria-hidden="true"></i></button><strong data-calendar-month></strong><button type="button" data-calendar-next aria-label="Próximo mês"><i data-lucide="chevron-right" aria-hidden="true"></i></button></header>
            <div class="booking-weekdays" data-calendar-weekdays></div>
            <div class="booking-days" data-calendar-days></div>
          </div>
        </div>

        <div class="booking-step" data-booking-step="time" hidden>
          <button class="booking-back" type="button" data-booking-back="date"><i data-lucide="arrow-left" aria-hidden="true"></i> Alterar data</button>
          <div class="booking-step-heading"><div><span>Segundo passo</span><h3>Escolha um horário</h3></div><small data-booking-selected-date></small></div>
          <div class="booking-duration"><i data-lucide="clock-3" aria-hidden="true"></i><span><strong>Diagnóstico inicial</strong><small>Conversa de aproximadamente 45 minutos</small></span></div>
          <div class="booking-times" data-booking-times></div>
          <p class="booking-empty" data-booking-empty hidden>Não há mais horários disponíveis neste dia. Escolha outra data.</p>
        </div>

        <div class="booking-step" data-booking-step="details" hidden>
          <button class="booking-back" type="button" data-booking-back="time"><i data-lucide="arrow-left" aria-hidden="true"></i> Alterar horário</button>
          <div class="booking-step-heading"><div><span>Último passo</span><h3>Como podemos falar com você?</h3></div></div>
          <div class="booking-summary" data-booking-summary><i data-lucide="calendar-days" aria-hidden="true"></i><span><strong data-booking-summary-date></strong><small data-booking-summary-time></small></span></div>
          <form class="booking-form" data-booking-form>
            <div class="booking-form-grid">
              <label class="field"><span>Nome completo <em>*</em></span><input type="text" name="name" autocomplete="name" maxlength="100" required></label>
              <label class="field"><span>Empresa <em>*</em></span><input type="text" name="company" autocomplete="organization" maxlength="120" required></label>
              <label class="field"><span>E-mail corporativo <em>*</em></span><input type="email" name="email" autocomplete="email" maxlength="160" required></label>
              <label class="field"><span>WhatsApp <em>*</em></span><input type="tel" name="phone" autocomplete="tel" maxlength="30" required></label>
              <label class="field field-wide"><span>O que você gostaria de avaliar?</span><textarea name="message" maxlength="1200" rows="3" placeholder="Conte brevemente sobre sua empresa ou necessidade."></textarea></label>
            </div>
            <label class="booking-consent"><input type="checkbox" name="privacy" required><span>Li a <a href="privacidade.html" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> e autorizo o contato da Upport. <em>*</em></span></label>
            <label class="booking-honeypot" aria-hidden="true">Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
            <button class="button button-primary booking-submit" type="submit"><i data-lucide="send" aria-hidden="true"></i><span>Enviar solicitação</span></button>
            <p class="booking-status" data-booking-status role="status" aria-live="polite"></p>
          </form>
        </div>

        <div class="booking-step booking-success" data-booking-step="success" hidden>
          <span class="booking-success-icon"><i data-lucide="check" aria-hidden="true"></i></span>
          <p class="eyebrow">Solicitação enviada</p>
          <h3>Recebemos seu pedido de agendamento.</h3>
          <p>A equipe da Upport vai confirmar o horário pelo e-mail ou WhatsApp informado.</p>
          <button class="button button-dark" type="button" data-booking-finish>Concluir</button>
        </div>
      </section>
    </div>`;
}

export function initBooking(): void {
  const trigger = document.querySelector<HTMLElement>("[data-booking-trigger]");
  const backdrop = document.querySelector<HTMLElement>("[data-booking-backdrop]");
  if (!trigger || !backdrop) return;

  const closeButton = backdrop.querySelector<HTMLButtonElement>("[data-booking-close]");
  const finishButton = backdrop.querySelector<HTMLButtonElement>("[data-booking-finish]");
  const form = backdrop.querySelector<HTMLFormElement>("[data-booking-form]");
  const status = backdrop.querySelector<HTMLElement>("[data-booking-status]");
  const monthLabel = backdrop.querySelector<HTMLElement>("[data-calendar-month]");
  const weekdays = backdrop.querySelector<HTMLElement>("[data-calendar-weekdays]");
  const days = backdrop.querySelector<HTMLElement>("[data-calendar-days]");
  const previous = backdrop.querySelector<HTMLButtonElement>("[data-calendar-previous]");
  const next = backdrop.querySelector<HTMLButtonElement>("[data-calendar-next]");
  const timeContainer = backdrop.querySelector<HTMLElement>("[data-booking-times]");
  const emptyTimes = backdrop.querySelector<HTMLElement>("[data-booking-empty]");
  const selectedDateLabel = backdrop.querySelector<HTMLElement>("[data-booking-selected-date]");
  const summaryDate = backdrop.querySelector<HTMLElement>("[data-booking-summary-date]");
  const summaryTime = backdrop.querySelector<HTMLElement>("[data-booking-summary-time]");
  const submitButton = form?.querySelector<HTMLButtonElement>(".booking-submit");
  const submitLabel = submitButton?.querySelector<HTMLElement>("span");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lastDate = new Date(today);
  lastDate.setDate(lastDate.getDate() + BOOKING_RANGE_DAYS);
  let visibleMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  let selectedDate = "";
  let selectedTime = "";
  let returnFocus: HTMLElement | null = null;

  const formatLongDate = (value: string): string => capitalizeFirst(new Intl.DateTimeFormat(locale(), {
    weekday: "long", day: "2-digit", month: "long", year: "numeric",
  }).format(parseDate(value)));

  const setStep = (step: "date" | "time" | "details" | "success"): void => {
    backdrop.querySelectorAll<HTMLElement>("[data-booking-step]").forEach((panel) => {
      const active = panel.dataset.bookingStep === step;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
    backdrop.querySelectorAll<HTMLElement>("[data-booking-progress]").forEach((item) => {
      const order = ["date", "time", "details"];
      const currentIndex = order.indexOf(step === "success" ? "details" : step);
      const itemIndex = order.indexOf(item.dataset.bookingProgress ?? "");
      item.classList.toggle("active", itemIndex <= currentIndex);
    });
  };

  const renderWeekdays = (): void => {
    if (!weekdays) return;
    const sunday = new Date(2026, 0, 4);
    weekdays.innerHTML = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(sunday);
      date.setDate(sunday.getDate() + index);
      return `<span>${new Intl.DateTimeFormat(locale(), { weekday: "narrow" }).format(date)}</span>`;
    }).join("");
  };

  const renderCalendar = (): void => {
    if (!monthLabel || !days || !previous || !next) return;
    monthLabel.textContent = capitalizeFirst(new Intl.DateTimeFormat(locale(), { month: "long", year: "numeric" }).format(visibleMonth));
    const firstWeekday = visibleMonth.getDay();
    const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
    const cells: string[] = Array.from({ length: firstWeekday }, () => "<span></span>");

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day);
      const value = dateKey(date);
      const disabled = date < today || date > lastDate || !isBusinessDay(date);
      const classes = [value === dateKey(today) ? "today" : "", value === selectedDate ? "selected" : ""].filter(Boolean).join(" ");
      cells.push(`<button type="button" class="${classes}" data-booking-date="${value}" ${disabled ? "disabled" : ""} aria-label="${formatLongDate(value)}">${day}</button>`);
    }
    days.innerHTML = cells.join("");
    previous.disabled = visibleMonth.getFullYear() === today.getFullYear() && visibleMonth.getMonth() === today.getMonth();
    next.disabled = visibleMonth.getFullYear() === lastDate.getFullYear() && visibleMonth.getMonth() === lastDate.getMonth();
  };

  const renderTimes = (): void => {
    if (!timeContainer || !emptyTimes || !selectedDateLabel) return;
    const times = availableTimes(selectedDate);
    selectedDateLabel.textContent = formatLongDate(selectedDate);
    timeContainer.innerHTML = times.map((time) => `<button type="button" data-booking-time="${time}">${time}</button>`).join("");
    emptyTimes.hidden = times.length > 0;
  };

  const open = (): void => {
    returnFocus = document.activeElement as HTMLElement | null;
    visibleMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    selectedDate = "";
    selectedTime = "";
    form?.reset();
    if (status) status.textContent = "";
    renderWeekdays();
    renderCalendar();
    setStep("date");
    backdrop.hidden = false;
    document.body.classList.add("booking-open");
    window.setTimeout(() => closeButton?.focus(), 0);
  };

  const close = (): void => {
    backdrop.hidden = true;
    document.body.classList.remove("booking-open");
    returnFocus?.focus();
  };

  trigger.addEventListener("click", (event) => { event.preventDefault(); open(); });
  closeButton?.addEventListener("click", close);
  finishButton?.addEventListener("click", close);
  backdrop.addEventListener("click", (event) => { if (event.target === backdrop) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !backdrop.hidden) close(); });
  previous?.addEventListener("click", () => { visibleMonth.setMonth(visibleMonth.getMonth() - 1); renderCalendar(); });
  next?.addEventListener("click", () => { visibleMonth.setMonth(visibleMonth.getMonth() + 1); renderCalendar(); });

  days?.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-booking-date]");
    if (!button || button.disabled) return;
    selectedDate = button.dataset.bookingDate ?? "";
    selectedTime = "";
    renderCalendar();
    renderTimes();
    setStep("time");
  });

  timeContainer?.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-booking-time]");
    if (!button) return;
    selectedTime = button.dataset.bookingTime ?? "";
    if (summaryDate) summaryDate.textContent = formatLongDate(selectedDate);
    if (summaryTime) summaryTime.textContent = `${selectedTime} · horário de Brasília`;
    setStep("details");
  });

  backdrop.querySelectorAll<HTMLButtonElement>("[data-booking-back]").forEach((button) => {
    button.addEventListener("click", () => setStep(button.dataset.bookingBack === "date" ? "date" : "time"));
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity() || !selectedDate || !selectedTime || !submitButton || !submitLabel) return;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""), company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""), phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""), website: String(data.get("website") ?? ""),
      date: selectedDate, time: selectedTime,
    };
    submitButton.disabled = true;
    submitLabel.textContent = translateText("Enviando...");
    if (status) status.textContent = "";
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10_000),
      });
      if (!response.ok) throw new Error("booking_failed");
      setStep("success");
    } catch {
      if (status) status.textContent = translateText("Não foi possível enviar agora. Tente novamente ou fale com a Upport pelo WhatsApp.");
    } finally {
      submitButton.disabled = false;
      submitLabel.textContent = translateText("Enviar solicitação");
    }
  });
}
