import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { property } from "@/content/property";
import logo from "@/assets/ionian-treasure-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/suites", label: "Suites" },
  { to: "/gallery", label: "Gallery" },
  { to: "/experiences", label: "Island guide" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
  { to: "/book", label: "Book direct" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const isHome = useLocation({ select: (l) => l.pathname === "/" });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY >= window.innerHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const overHomeHero = isHome && !pastHero;
  const tone = overHomeHero ? "text-primary-foreground image-copy-readable" : "text-primary";

  return (
    <>
      <header
        className={`inset-x-0 top-0 transition-[background-color,border-color] duration-300 ${
          overHomeHero
            ? "absolute bg-transparent"
            : "fixed border-b border-border bg-background/95 backdrop-blur-sm"
        } ${open ? "z-50" : overHomeHero ? "z-[5]" : "z-40"}`}
      >
        <div
          className={`mx-auto grid h-20 w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-8 ${tone}`}
        >

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col justify-center gap-2"
          >
            <span className="h-0.5 w-7 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </button>

          <Link to="/" className="no-underline-anim text-center leading-tight" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Ionian Treasure"
              className={`h-16 w-28 object-contain transition-[filter] duration-300 sm:w-32 ${
                overHomeHero ? "brightness-0 invert" : "brightness-0"
              }`}
            />
          </Link>

          <div className="flex items-center justify-end gap-4 text-[0.6rem] uppercase tracking-[0.2em]">
            <a href={`tel:${property.phoneHref}`} aria-label={`Call ${property.phone}`}>
              <Phone className="size-3.5" aria-hidden="true" />
            </a>
            <Link to="/book" className="hidden hover:opacity-70 sm:inline">
              Book now
            </Link>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex flex-col bg-background transition-all duration-500 ease-out ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
          <div className="mx-auto grid h-20 w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-8">
            <span />
            <img src={logo} alt="Ionian Treasure" className="h-16 w-28 object-contain brightness-0 sm:w-32" />
            <div className="flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-primary"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
            {nav.map((item, i) => (
              <Link
                style={{ transitionDelay: open ? `${150 + i * 50}ms` : "0ms" }}
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-brass" }}
                className={`display-caps text-xl text-primary transition-all duration-500 hover:text-brass sm:text-2xl ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-2 pb-12 text-xs tracking-[0.2em] text-muted-foreground">
            <a href={`tel:${property.phoneHref}`}>{property.phone}</a>
            <a href={`mailto:${property.email}`}>{property.email}</a>
          </div>
      </div>
    </>
  );
}
