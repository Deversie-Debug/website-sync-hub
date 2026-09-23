import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { experiences, experienceCategories, seasons, pageImages } from "@/lib/property";

const title = "Island Guide — Kefalonia from Pessada";
const description =
  "Beaches, ferries, Argostoli evenings, Mount Ainos and Robola wine — the places we send our guests, with distances from Pessada and the best time to go.";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: pageImages.location },
      { name: "twitter:image", content: pageImages.location },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", ...experienceCategories];
  const shown = filter === "All" ? experiences : experiences.filter((e) => e.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Island guide"
        title="What to do with your days"
        description="Written by us, for guests staying here — the places we send people to, how far they are, and when they are at their best."
        image={pageImages.location}
        imageAlt="The pool terrace and the hills above Pessada"
      />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div role="group" aria-label="Filter the guide" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={
                filter === f
                  ? "rounded-sm border border-primary bg-primary px-4 py-2 text-sm text-primary-foreground"
                  : "rounded-sm border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              }
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((e) => (
            <li key={e.title} className="flex flex-col rounded-sm border border-border bg-card p-6">
              <div className="flex items-baseline justify-between gap-4">
                <p className="eyebrow text-brass">{e.category}</p>
                <span className="text-xs text-muted-foreground">{e.distance}</span>
              </div>
              <h2 className="mt-4 text-2xl leading-snug">{e.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="eyebrow hairline text-brass">When to come</p>
          <h2 className="mt-6 text-balance text-3xl sm:text-4xl lg:text-5xl">Choosing your month</h2>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {seasons.map((s) => (
              <li key={s.period} className="rounded-sm border border-border bg-card p-6">
                <h3 className="text-2xl">{s.period}</h3>
                <p className="eyebrow mt-2 text-muted-foreground">{s.weather}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/book"
              className="inline-flex h-12 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Check availability
            </Link>
            <Link
              to="/location"
              className="inline-flex h-12 items-center gap-2 rounded-sm border border-input px-6 text-sm transition-colors hover:bg-accent"
            >
              Getting here <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
