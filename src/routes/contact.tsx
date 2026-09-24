import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { BookingForm } from "@/components/booking/BookingForm";
import { property, faqs, pageImages } from "@/content/property";

const title = "Contact & FAQ — Ionian Treasure Suites, Pessada";
const description =
  "Call, email or send an enquiry to Ionian Treasure Suites in Pessada, Kefalonia. Managed by Selected Hideaways — a real person replies, usually within 24 hours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: pageImages.contact },
      { name: "twitter:image", content: pageImages.contact },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us directly"
        description="Ionian Treasure Suites is managed by Selected Hideaways. Write, call, or send an enquiry and a real person will answer you."
        image={pageImages.contact}
        imageAlt="Reception lounge of Ionian Treasure Suites"
      />

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3 lg:px-8 lg:py-28">
        <aside className="h-fit rounded-sm border border-border bg-card p-8">
          <p className="eyebrow text-brass">Reach us</p>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Telephone</dt>
              <dd>
                <a href={`tel:${property.phoneHref}`} className="hover:text-brass">
                  {property.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${property.email}`} className="hover:text-brass">
                  {property.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Address</dt>
              <dd>{property.address}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Check-in / check-out</dt>
              <dd>
                From {property.checkIn} · by {property.checkOut}
              </dd>
            </div>
          </dl>
          <a
            href={property.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-brass"
          >
            Directions <ExternalLink className="size-4" aria-hidden="true" />
          </a>

          <p className="mt-8 text-sm text-muted-foreground">
            Ready to reserve? Use our booking page for availability, or reserve instantly through
            our secure system.
          </p>
          <Link
            to="/book"
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Booking page
          </Link>
          <a
            href={property.reservationUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-sm border border-input px-6 text-sm transition-colors hover:bg-accent"
          >
            Secure reservation system
          </a>
        </aside>

        <div className="lg:col-span-2">
          <h2 className="text-3xl">Send an enquiry</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We reply personally, usually within 24 hours. Please also check your junk or spam folder
            for our reply.
          </p>
          <div className="mt-6">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
          <p className="eyebrow hairline-center text-center tracking-[0.4em] text-brass">Questions</p>
          <h2 className="display-caps mx-auto mt-8 max-w-2xl text-center text-3xl sm:text-4xl">Frequently asked</h2>
          <ul className="mt-10 space-y-4">
            {faqs.map((f) => (
              <li key={f.q} className="rounded-sm border border-border bg-card p-8">
                <h3 className="text-xl">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
