import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 8) return;

      const scrollingDown = currentScrollY > lastScrollY.current;

      setVisible(currentScrollY < 80 || !scrollingDown);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav text-nav-foreground transition-transform duration-300 motion-reduce:transition-none ${visible || open ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 lg:flex lg:px-8">
        <Link to="/" className="flex min-w-0 flex-col leading-tight lg:mr-auto" onClick={() => setOpen(false)}>
          <span className="eyebrow text-nav-foreground">Ionian Treasure</span>
          <span className="font-display text-base text-nav-foreground/75">Suites · Pessada, Kefalonia</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-nav-foreground" }}
              className="text-sm text-nav-foreground/70 transition-colors hover:text-nav-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${property.phoneHref}`}
            className="text-sm text-nav-foreground/70 transition-colors hover:text-nav-foreground"
          >
            {property.phone}
          </a>
          <Link
            to="/book"
            className="inline-flex h-9 items-center rounded-sm bg-nav-foreground px-5 text-sm font-medium text-nav transition-opacity hover:opacity-90"
          >
            Book direct
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-sm border border-nav-border text-nav-foreground transition-colors hover:bg-nav-foreground/10 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-nav-border bg-nav lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm text-nav-foreground/80 transition-colors hover:bg-nav-foreground/10 hover:text-nav-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${property.phoneHref}`} className="px-2 py-2.5 text-sm text-nav-foreground/80">
              {property.phone}
            </a>
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-sm bg-nav-foreground px-6 text-sm font-medium text-nav"
            >
              Book direct
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
