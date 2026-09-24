import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { property, nearby, partners, pageImages } from "@/content/property";

const title = "Location & Beaches — Pessada, Kefalonia";
const description =
  "How to reach Ionian Treasure Suites in Pessada: 20 minutes from Kefalonia airport, 10 from Argostoli, 600 m from the beach and 1.2 km from the Zakynthos ferry.";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ioniantreasuresuites.com/location" },
      { property: "og:description", content: description },
      { property: "og:image", content: pageImages.location },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: pageImages.location },
    ],
    links: [{ rel: "canonical", href: "https://ioniantreasuresuites.com/location" }],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Location"
        title="Pessada, on Kefalonia's south coast"
        description="A quiet village above a sheltered cove, with the island's capital, airport and best-known beaches all within easy reach."
        image={pageImages.location}
        imageAlt="Turquoise water of the swimming pool at midday"
      />

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-3 lg:px-8 lg:py-28">
        <div className="lg:col-span-2">
          <p className="eyebrow hairline-center text-center tracking-[0.4em] text-brass">Getting here</p>
          <h2 className="display-caps mx-auto mt-8 max-w-2xl text-center text-3xl sm:text-4xl">Arriving on the island</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="text-xl">By air</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Kefalonia International Airport (EFL) is a 20-minute drive away. We can arrange a
                private transfer, or have a hire car waiting for you at arrivals.
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="text-xl">By sea</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Pessada's own small port runs seasonal crossings to Zakynthos, 1.2 km from the
                property. Ferries from mainland Greece dock at Poros and Sami.
              </p>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-sm border border-border bg-card p-8">
          <h2 className="text-2xl">{property.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{property.address}</p>
          <a
            href={property.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-brass"
          >
            Open in Google Maps <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </aside>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="eyebrow hairline-center text-center tracking-[0.4em] text-brass">What's nearby</p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((n) => (
              <li key={n.name} className="rounded-sm border border-border bg-card p-8">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                  <h2 className="text-xl">{n.name}</h2>
                  <span className="text-xs text-brass">{n.distance}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow hairline-center text-center tracking-[0.4em] text-brass">Practical help</p>
        <h2 className="display-caps mx-auto mt-8 max-w-2xl text-center text-3xl sm:text-4xl">Cars, transfers and our sister property</h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-2">
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
                Visit site <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <Link
          to="/book"
          className="mt-10 inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Plan your stay <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
