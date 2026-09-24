import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
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
      { property: "og:url", content: "https://ioniantreasuresuites.com/" },
      { property: "og:description", content: description },
      { property: "og:image", content: property.coverImage },
      { name: "twitter:image", content: property.coverImage },
    ],
    links: [{ rel: "canonical", href: "https://ioniantreasuresuites.com/" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (window.location.hash === "#overview") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <>
      <section className="sticky top-0 isolate z-0 h-dvh min-h-dvh overflow-hidden">
        <img fetchPriority="high" decoding="async"
          src={heroImage}
          alt="Sunbeds and parasols along the swimming pool"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-wash" aria-hidden="true" />
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("overview-section")?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Scroll to explore Ionian Treasure Suites"
          className="absolute bottom-9 left-1/2 z-[2] -translate-x-1/2 pb-1 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary-foreground image-copy-readable"
        >
          Scroll for more
        </a>
      </section>
      <div className="relative z-10 bg-background shadow-[0_-12px_30px_-12px_oklch(20%_0.02_180/0.25)]">

      <section id="overview-section" className="mx-auto w-full max-w-7xl scroll-mt-20 px-6 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow hairline-center mx-auto text-center tracking-[0.4em] text-brass">Overview</p>
        <h2 className="display-caps mx-auto mt-8 max-w-2xl text-balance text-center text-2xl sm:text-3xl lg:text-4xl">
          A privileged corner of Kefalonia
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {intro.map((p) => (
            <p key={p} className="text-sm leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="eyebrow hairline-center text-center tracking-[0.4em] text-brass">What's included</p>
          <h2 className="display-caps mt-8 text-center text-2xl sm:text-3xl lg:text-4xl">
            Everything, already thought of
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li key={item.title} className="rounded-sm border border-border bg-card p-8">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-16 text-center tracking-[0.4em] text-muted-foreground">
            All general facilities
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
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

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="eyebrow hairline-center tracking-[0.4em] text-brass">Accommodation</p>
          <h2 className="display-caps mt-8 text-2xl sm:text-3xl lg:text-4xl">The five suites</h2>
          <Link
            to="/suites"
            className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-brass"
          >
            Compare all suites <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {suites.map((suite) => (
            <li key={suite.id} className="flex flex-col overflow-hidden rounded-sm border border-border bg-card">
              <img loading="lazy" decoding="async" src={suite.images[0]} alt={suite.name} className="aspect-4/3 w-full object-cover" />
              <div className="flex flex-1 flex-col p-8">
                <p className="eyebrow text-muted-foreground">
                  {suite.size} m² · Sleeps {suite.sleeps} · {suite.view}
                </p>
                <h3 className="mt-3 text-2xl">{suite.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {suite.blurb}
                </p>
                <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
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

      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto w-full max-w-2xl px-6 text-center lg:px-8">
          <p className="eyebrow tracking-[0.4em] text-primary-foreground">Book direct</p>
          <h2 className="display-caps mt-8 text-2xl sm:text-3xl">Our best rate is the direct one</h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            Tell us your dates and we reply personally, usually within 24 hours, with availability
            and a quote. No booking fees, no payment taken online.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/book"
              className="inline-flex h-12 items-center rounded-sm bg-primary-foreground px-8 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-primary transition-opacity hover:opacity-90"
            >
              Start a booking
            </Link>
            <a href={`tel:${property.phoneHref}`} className="text-sm">
              {property.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="eyebrow hairline-center tracking-[0.4em] text-brass">The island</p>
          <h2 className="display-caps mt-8 text-2xl sm:text-3xl lg:text-4xl">
            Beaches, ferries and Argostoli
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Pessada sits on Kefalonia's sheltered south coast, with its own small port and easy
            road access to the whole island.
          </p>
          <Link
            to="/location"
            className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-brass"
          >
            Getting here <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nearby.map((n) => (
            <li key={n.name} className="rounded-sm border border-border bg-card p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                <h3 className="text-xl">{n.name}</h3>
                <span className="text-xs text-brass">{n.distance}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow hairline-center tracking-[0.4em] text-brass">Gallery</p>
            <h2 className="display-caps mt-8 text-2xl sm:text-3xl lg:text-4xl">A look around</h2>
            <Link
              to="/gallery"
              className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-brass"
            >
              See all {galleryImages.length} photos <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.slice(0, 8).map((img) => (
              <li key={img.src}>
                <img loading="lazy" decoding="async"
                  src={img.src}
                  alt={img.alt}
                  className="aspect-square w-full rounded-sm object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow hairline-center text-center tracking-[0.4em] text-brass">Also from us</p>
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {partners.map((p) => (
            <li key={p.name} className="rounded-sm border border-border bg-card p-8">
              <h3 className="text-xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-brass"
              >
                Visit site <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>
      </div>
    </>
  );
}
