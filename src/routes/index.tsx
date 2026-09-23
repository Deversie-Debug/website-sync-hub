import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  property,
  heroImage,
  intro,
  included,
  facilities,
  suites,
  nearby,
  galleryImages,
  partners,
} from "@/content/property";

const title = "Ionian Treasure Suites — Pool Suites in Pessada, Kefalonia";
const description =
  "Five brand-new sea-view suites with a swimming pool and garden in Pessada, Kefalonia — 600 m from the beach, 10 minutes from Argostoli. Book direct for our best rate.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: property.coverImage },
      { name: "twitter:image", content: property.coverImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Sunbeds and parasols along the swimming pool"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
          <p className="eyebrow text-brass">Pessada · Kefalonia · Ionian Islands</p>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl text-primary-foreground sm:text-5xl lg:text-6xl">
            Five brand-new suites above the Ionian sea
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            A quiet pool garden 600 metres from Pessada Beach, ten minutes from Argostoli, and
            entirely yours for two.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/book"
              className="inline-flex h-12 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Check availability
            </Link>
            <Link
              to="/suites"
              className="inline-flex h-12 items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View the suites <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="eyebrow hairline text-brass">Overview</p>
        <h2 className="mt-6 max-w-2xl text-balance text-3xl sm:text-4xl lg:text-5xl">
          A privileged corner of Kefalonia
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {intro.map((p) => (
            <p key={p} className="text-sm leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="eyebrow hairline text-brass">What's included</p>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">Everything, already thought of</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li key={item.title} className="rounded-sm border border-border bg-card p-6">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-14 text-muted-foreground">All general facilities</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {facilities.map((f) => (
              <li
                key={f}
                className="rounded-sm border border-input bg-card px-3 py-1.5 text-xs text-muted-foreground"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow hairline text-brass">Accommodation</p>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">The five suites</h2>
          </div>
          <Link to="/suites" className="inline-flex items-center gap-2 text-sm hover:text-brass">
            Compare all suites <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {suites.map((suite) => (
            <li key={suite.id} className="flex flex-col overflow-hidden rounded-sm border border-border bg-card">
              <img src={suite.images[0]} alt={suite.name} className="aspect-4/3 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow text-muted-foreground">
                  {suite.size} m² · Sleeps {suite.sleeps} · {suite.view}
                </p>
                <h3 className="mt-3 text-2xl">{suite.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {suite.blurb}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Rates on request</span>
                  <Link
                    to="/suites/$suiteId"
                    params={{ suiteId: suite.id }}
                    className="inline-flex h-10 items-center rounded-sm border border-input px-4 text-sm transition-colors hover:bg-accent"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-primary py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-end justify-between gap-8 px-5 lg:px-8">
          <div className="max-w-xl">
            <p className="eyebrow text-brass">Book direct</p>
            <h2 className="mt-5 text-3xl sm:text-4xl">Our best rate is always the direct one</h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
              Tell us your dates and we reply personally, usually within 24 hours, with availability
              and a quote. No booking fees, no payment taken online.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/book"
              className="inline-flex h-12 items-center rounded-sm bg-primary-foreground px-6 text-sm font-medium text-primary transition-opacity hover:opacity-90"
            >
              Start a booking
            </Link>
            <a href={`tel:${property.phoneHref}`} className="text-sm underline-offset-4 hover:underline">
              {property.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow hairline text-brass">The island</p>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">
              Beaches, ferries and Argostoli
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Pessada sits on Kefalonia's sheltered south coast, with its own small port and easy
              road access to the whole island.
            </p>
          </div>
          <Link to="/location" className="inline-flex items-center gap-2 text-sm hover:text-brass">
            Getting here & what's nearby <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nearby.map((n) => (
            <li key={n.name} className="rounded-sm border border-border bg-card p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl">{n.name}</h3>
                <span className="text-xs text-brass">{n.distance}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow hairline text-brass">Gallery</p>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">A look around</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm hover:text-brass">
              See all {galleryImages.length} photos <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.slice(0, 8).map((img) => (
              <li key={img.src}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-square w-full rounded-sm object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="eyebrow hairline text-brass">Also from us</p>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {partners.map((p) => (
            <li key={p.name} className="rounded-sm border border-border bg-card p-6">
              <h3 className="text-xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-brass hover:underline"
              >
                Visit site <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
