import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { property } from "@/content/property";

const nav = [
  { to: "/", label: "Home" },
  { to: "/suites", label: "Suites" },
  { to: "/gallery", label: "Gallery" },
  { to: "/experiences", label: "Island guide" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="eyebrow text-brass">Ionian Treasure</span>
          <span className="font-display text-lg">Suites · Pessada, Kefalonia</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${property.phoneHref}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {property.phone}
          </a>
          <Link
            to="/book"
            className="inline-flex h-10 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book direct
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-sm border border-border lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${property.phoneHref}`} className="px-2 py-2.5 text-sm text-muted-foreground">
              {property.phone}
            </a>
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground"
            >
              Book direct
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
