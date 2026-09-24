import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/shared/PageHeader";
import { BookingForm } from "@/components/booking/BookingForm";
import { property, pageImages } from "@/content/property";

const title = "Book Direct — Ionian Treasure Suites, Pessada";
const description =
  "Send your dates and we reply personally within 24 hours with availability and our best direct rate. No booking fees and no payment taken online.";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: pageImages.book },
      { name: "twitter:image", content: pageImages.book },
    ],
  }),
  component: BookPage,
});

const steps = [
  {
    step: "1",
    title: "Send your dates",
    text: "Two quick steps — your stay, then how to reach you. Nothing is charged.",
  },
  {
    step: "2",
    title: "We reply personally",
    text: "Usually within 24 hours, with availability, a suite recommendation and a quote.",
  },
  {
    step: "3",
    title: "Confirm when ready",
    text: "Pay on arrival or reserve through our secure system. Best rate guaranteed direct.",
  },
];

function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title="Book direct with us"
        description="Five suites means we answer every enquiry ourselves. Tell us when you would like to come and we will do the rest."
        image={pageImages.book}
        imageAlt="Loungers and shade sails beside the pool"
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <ul className="grid gap-8 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.step} className="rounded-sm border border-border bg-card p-8">
              <p className="eyebrow text-brass">Step {s.step}</p>
              <h2 className="mt-3 text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl">Booking enquiry form</h2>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>

          <aside className="h-fit rounded-sm border border-border bg-card p-8">
            <p className="eyebrow text-brass">Good to know</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Check-in / check-out</dt>
                <dd>
                  From {property.checkIn} · by {property.checkOut}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Occupancy</dt>
                <dd>Each suite sleeps 2 guests</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Rates</dt>
                <dd>On request, by season and length of stay</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Parking</dt>
                <dd>Free, on site</dd>
              </div>
            </dl>

            <p className="mt-8 text-sm text-muted-foreground">
              Prefer to talk? Call or email {property.operator} directly.
            </p>
            <a href={`tel:${property.phoneHref}`} className="mt-3 block w-fit text-sm text-brass">
              {property.phone}
            </a>
            <a href={`mailto:${property.email}`} className="mt-1 block w-fit text-sm text-brass">
              {property.email}
            </a>
            <a
              href={property.reservationUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-sm border border-input px-6 text-sm transition-colors hover:bg-accent"
            >
              Secure reservation system
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
