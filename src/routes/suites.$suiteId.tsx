import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { suites, amenityGroups, property } from "@/lib/property";

export const Route = createFileRoute("/suites/$suiteId")({
  loader: ({ params }) => {
    const suite = suites.find((s) => s.id === params.suiteId);
    if (!suite) throw notFound();
    return { suite };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Suite not found" }, { name: "robots", content: "noindex" }] };
    }
    const { suite } = loaderData;
    const title = `${suite.name} — Ionian Treasure Suites, Pessada`;
    return {
      meta: [
        { title },
        { name: "description", content: suite.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: suite.blurb },
        { property: "og:image", content: suite.images[0] },
        { name: "twitter:image", content: suite.images[0] },
      ],
    };
  },
  notFoundComponent: SuiteNotFound,
  component: SuiteDetail,
});

function SuiteNotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center">
      <h1 className="text-3xl">We couldn't find that suite</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Have a look at all five suites instead.
      </p>
      <Link
        to="/suites"
        className="mt-8 inline-flex h-11 items-center rounded-sm bg-primary px-5 text-sm text-primary-foreground"
      >
        View the suites
      </Link>
    </div>
  );
}

function SuiteDetail() {
  const { suite } = Route.useLoaderData();

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-5 pt-12 lg:px-8">
        <Link to="/suites" className="text-sm text-muted-foreground hover:text-foreground">
          ← All suites
        </Link>
        <p className="eyebrow mt-8 text-brass">Suite {suite.number}</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">{suite.name}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {suite.size} m² · Sleeps {suite.sleeps} · {suite.view}
        </p>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl px-5 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2">
          {suite.images.map((src, i) => (
            <li key={src} className={i === 0 ? "sm:col-span-2" : undefined}>
              <img
                src={src}
                alt={`${suite.name} photo ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="aspect-16/10 w-full rounded-sm object-cover"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 lg:grid-cols-3 lg:px-8 lg:py-20">
        <div className="lg:col-span-2">
          <p className="eyebrow hairline text-brass">About this suite</p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{suite.blurb}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {suite.highlights.map((h) => (
              <li key={h} className="rounded-sm bg-secondary px-3 py-1.5 text-xs">
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {Object.entries(amenityGroups).map(([group, items]) => (
              <div key={group} className="rounded-sm border border-border bg-card p-6">
                <h2 className="text-xl">{group}</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-sm border border-border bg-card p-6 lg:sticky lg:top-28">
          <h2 className="text-2xl">Rates on request</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Send us your dates and we reply personally, usually within 24 hours, with availability
            and our best direct rate.
          </p>
          <Link
            to="/book"
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Check availability <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <p className="mt-5 text-sm text-muted-foreground">
            Check-in from {property.checkIn} · check-out by {property.checkOut}
          </p>
          <a
            href={`tel:${property.phoneHref}`}
            className="mt-3 block text-sm text-brass hover:underline"
          >
            {property.phone}
          </a>
        </aside>
      </section>
    </>
  );
}
