import { Link } from "@tanstack/react-router";
import { property, partners } from "@/content/property";

const links = [
  { to: "/suites", label: "The suites" },
  { to: "/gallery", label: "Gallery" },
  { to: "/experiences", label: "Island guide" },
  { to: "/location", label: "Location & beaches" },
  { to: "/book", label: "Book direct" },
  { to: "/contact", label: "Contact & FAQ" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="eyebrow text-brass">Ionian Treasure Suites</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Five brand-new suites with a swimming pool, garden and sea views in the village of
            Pessada, Kefalonia — 600 metres from the beach.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Managed by {property.operator}</p>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Explore</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm transition-colors hover:text-brass">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${property.phoneHref}`} className="hover:text-foreground">
                {property.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${property.email}`} className="hover:text-foreground">
                {property.email}
              </a>
            </li>
            <li>{property.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground lg:px-8">
          <p>© {new Date().getFullYear()} {property.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
