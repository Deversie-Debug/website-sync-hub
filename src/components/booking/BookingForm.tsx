import { useState, type FormEvent } from "react";
import { property, suites } from "@/content/property";

const requestOptions = [
  "Confirm availability and send rates",
  "Confirm availability",
  "Send rates",
  "Reserve the following dates",
  "Other",
];

const fieldClass =
  "mt-2 h-11 w-full rounded-sm border border-input bg-card px-3 text-sm outline-none focus:border-ring";

export function BookingForm({ defaultSuite }: { defaultSuite?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [
      `Request: ${get("request")}`,
      `Arrival: ${get("arrival") || "—"}`,
      `Departure: ${get("departure") || "—"}`,
      `Adults: ${get("adults")}`,
      `Children: ${get("children")}`,
      `Suite preference: ${get("suite")}`,
      "",
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "—"}`,
      "",
      `Notes: ${get("notes") || "—"}`,
    ].join("\n");

    const href = `mailto:${property.email}?subject=${encodeURIComponent(
      `Booking enquiry — ${get("name")}`,
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = href;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-border bg-card p-6 lg:p-8">
      <p className="eyebrow text-brass">Step 1 — Your stay</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="sm:col-span-2 block text-sm">
          I would like you to
          <select name="request" defaultValue={requestOptions[0]} className={fieldClass}>
            {requestOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          Arrival
          <input type="date" name="arrival" className={fieldClass} />
        </label>
        <label className="block text-sm">
          Departure
          <input type="date" name="departure" className={fieldClass} />
        </label>
        <label className="block text-sm">
          Adults
          <input type="number" name="adults" min={1} max={4} defaultValue={2} className={fieldClass} />
        </label>
        <label className="block text-sm">
          Children
          <input type="number" name="children" min={0} max={4} defaultValue={0} className={fieldClass} />
        </label>

        <label className="sm:col-span-2 block text-sm">
          Suite preference
          <select name="suite" defaultValue={defaultSuite ?? "No preference"} className={fieldClass}>
            <option>No preference — recommend one for me</option>
            {suites.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name} · {s.size} m² · {s.view}
              </option>
            ))}
            <option>Two adjoining suites</option>
          </select>
        </label>
      </div>

      <p className="eyebrow mt-10 text-brass">Step 2 — Your details</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          Full name *
          <input type="text" name="name" required className={fieldClass} />
        </label>
        <label className="block text-sm">
          Email *
          <input type="email" name="email" required className={fieldClass} />
        </label>
        <label className="sm:col-span-2 block text-sm">
          Phone
          <input type="tel" name="phone" className={fieldClass} />
        </label>
        <label className="sm:col-span-2 block text-sm">
          Anything else we should know?
          <textarea name="notes" rows={4} className={`${fieldClass} h-auto py-3`} />
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Send my request
      </button>

      {sent && (
        <p className="mt-4 text-sm text-brass">
          Your email app should now be open with the enquiry ready to send. If nothing happened,
          write to {property.email}.
        </p>
      )}

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        No payment is taken here. We confirm availability and rates by email before anything is
        charged. Booking direct gets you our best available rate.
      </p>
    </form>
  );
}
