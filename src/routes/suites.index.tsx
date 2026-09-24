import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { suites, amenityGroups, pageImages } from "@/content/property";

const title = "The Suites — Ionian Treasure Suites, Pessada";
const description =
  "Five brand-new 32 m² suites for two, each with a private entrance, terrace and fully equipped kitchen, around a quiet pool garden in Pessada, Kefalonia.";

export const Route = createFileRoute("/suites/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:url", content: "https://ioniantreasuresuites.com/suites" },
      { property: "og:description", content: description },
      { property: "og:image", content: pageImages.suites },
      { name: "twitter:image", content: pageImages.suites },
    ],
    links: [{ rel: "canonical", href: "https://ioniantreasuresuites.com/suites" }],
  }),
  component: SuitesIndex,
});

function SuitesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Accommodation"
        title="Five suites, one quiet pool garden"
        description="Every suite is 32 m², brand new, and designed for two guests — with its own private entrance, terrace and fully equipped kitchen. What changes between them is the outlook and how close you sit to the water."
        image={pageImages.suites}
        imageAlt="Suite terrace with a view over the Ionian sea"
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <ul className="grid gap-12">
          {suites.map((suite, i) => (
            <li
              key={suite.id}
              className="grid overflow-hidden rounded-sm border border-border bg-card lg:grid-cols-2"
            >
              <img decoding="async"
                src={suite.images[0]}
                alt={suite.name}
                loading={i === 0 ? "eager" : "lazy"}
                className="aspect-4/3 h-full min-h-72 w-full object-cover lg:aspect-auto"
              />
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="eyebrow text-brass">Suite {suite.number}</p>
                <h2 className="mt-3 text-3xl">{suite.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Size: {suite.size} m² · Sleeps: {suite.sleeps} · View: {suite.view}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{suite.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {suite.highlights.map((h) => (
                    <li key={h} className="rounded-sm bg-accent px-3 py-1.5 text-xs text-accent-foreground">
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
                  <Link
                    to="/book"
                    className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Check availability
                  </Link>
                  <Link
                    to="/suites/$suiteId"
                    params={{ suiteId: suite.id }}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-input px-6 text-sm transition-colors hover:bg-accent"
                  >
                    Suite details <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="eyebrow hairline-center text-center tracking-[0.4em] text-brass">In every suite</p>
          <h2 className="display-caps mx-auto mt-8 max-w-2xl text-center text-3xl sm:text-4xl">Standard amenities</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(amenityGroups).map(([group, items]) => (
              <div key={group} className="rounded-sm border border-border bg-card p-8">
                <h3 className="text-xl">{group}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
