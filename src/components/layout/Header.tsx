import { WhatsAppIcon, WhatsAppLink } from "@/components/shared/WhatsApp";
import { Link, useLocation } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { property } from "@/content/property";
import monogram from "@/assets/ionian-treasure-monogram.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/suites", label: "Suites" },
  { to: "/gallery", label: "Gallery" },
  { to: "/experiences", label: "Island guide" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
  { to: "/book", label: "Book direct" },
] as const;

const logoStyle = { "--logo-image": `url(${monogram})` } as CSSProperties;

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col items-center justify-center ${className}`}>
      <span
        aria-hidden="true"
        style={logoStyle}
        className="logo-mask block h-14 w-16 shrink-0 lg:h-16 lg:w-20"
      />
      <span className="mt-1 whitespace-nowrap text-[0.52rem] font-medium uppercase leading-none tracking-[0.14em] lg:text-[0.58rem]">
        Ionian Treasure
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = useLocation({ select: (l) => l.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setContactOpen(false);
  }, [pathname, open]);

  useEffect(() => {
    if (!contactOpen) return;
    const onDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      const inside =
        target !== null &&
        Array.from(document.querySelectorAll("[data-contact-menu]")).some((el) =>
          el.contains(target),
        );
      if (!inside) setContactOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    const onScroll = () => setContactOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [contactOpen]);

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

  const headerContent = (tone: string) => (
    <div className={`relative w-full py-5 ${tone}`}>
      <div className="grid min-h-20 w-full grid-cols-[1fr_auto_1fr] items-center border-y border-current/20 px-6 py-3 lg:min-h-24 lg:px-10">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="group flex h-10 w-10 flex-col justify-center gap-2"
        >
          <span className="h-0.5 w-7 origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
          <span className="h-0.5 w-5 origin-left bg-current transition-[width,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-7 group-hover:-translate-x-0.5" />
        </button>

        <Link to="/" className="no-underline-anim" onClick={() => setOpen(false)}>
          <BrandLogo className="h-20 w-36 lg:h-24 lg:w-44" />
        </Link>

        <div className="flex items-center justify-end gap-4">
          <span data-contact-menu className="relative inline-flex">
            <button
              type="button"
              aria-label="Ways to reach us"
              aria-expanded={contactOpen}
              aria-haspopup="true"
              onClick={() => setContactOpen((v) => !v)}
              className={`no-underline-anim inline-flex size-9 items-center justify-center rounded-full border border-current/30 transition-[background-color,border-color] duration-[var(--motion-fast)] ease-[var(--ease-smooth)] hover:bg-current/10 ${contactOpen ? "bg-current/10" : ""}`}
            >
              <Phone className="size-4 sm:size-[1.1rem]" aria-hidden="true" />
            </button>
          </span>
          <span aria-hidden="true" className="h-5 w-px bg-current/40" />
          <Link
            to="/book"
            className="book-now-link inline-flex text-sm font-bold uppercase tracking-normal sm:text-base"
          >
            Book now
          </Link>
        </div>
      </div>

      <div
        data-contact-menu
        className={`absolute right-6 top-[calc(100%-0.9rem)] w-60 origin-top-right rounded-sm border border-border bg-background p-1.5 text-brass shadow-[0_22px_45px_-28px_oklch(20%_0.02_180/0.5)] transition-[opacity,transform,visibility] duration-[var(--motion-base)] ease-[var(--ease-smooth)] lg:right-10 ${
          contactOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <a
          href={`tel:${property.phoneHref}`}
          onClick={() => setContactOpen(false)}
          className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors duration-[var(--motion-fast)] hover:bg-accent"
        >
          <Phone className="size-4 shrink-0" aria-hidden="true" />
          <span className="flex flex-col leading-tight">
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Call
            </span>
            <span>{property.phone}</span>
          </span>
        </a>
        <a
          href={property.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setContactOpen(false)}
          className="mt-0.5 flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors duration-[var(--motion-fast)] hover:bg-accent"
        >
          <WhatsAppIcon className="size-4 shrink-0 text-whatsapp" />
          <span className="flex flex-col leading-tight">
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              WhatsApp
            </span>
            <span>Chat with us</span>
          </span>
        </a>
      </div>
    </div>
  );

  return (
    <>
      {isHome && (
        <header className="absolute inset-x-0 top-0 z-[5] bg-transparent">
          {headerContent("text-primary-foreground image-copy-readable")}
        </header>
      )}

      <header
        aria-hidden={isHome && !pastHero}
        className={`fixed inset-x-0 top-0 border-b border-border bg-background transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isHome && !pastHero
            ? "pointer-events-none -translate-y-6 opacity-0"
            : "translate-y-0 opacity-100"
        } ${open ? "z-50" : "z-40"}`}
      >
        {headerContent("text-brass")}
      </header>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex flex-col bg-background text-brass transition-[clip-path,opacity,visibility] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "visible [clip-path:inset(0_0_0_0)] opacity-100"
            : "invisible pointer-events-none [clip-path:inset(0_0_100%_0)] opacity-0"
        }`}
      >
          <div className="grid h-28 w-full grid-cols-[1fr_auto_1fr] items-center border-b border-border px-6 lg:px-10">
            <span />
            <BrandLogo className="h-20 w-36 sm:h-24 sm:w-44" />
            <div className="flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className={`text-current transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"}`}
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            {nav.map((item, i) => (
              <Link
                style={{ transitionDelay: open ? `${220 + i * 70}ms` : "0ms" }}
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className={`no-underline-anim display-caps text-2xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-70 sm:text-3xl ${open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              >
                <span className="menu-link-label">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-2 pb-12 text-xs tracking-[0.2em] text-current/70">
            <a href={`tel:${property.phoneHref}`}>{property.phone}</a>
            <WhatsAppLink />
            <a href={`mailto:${property.email}`}>{property.email}</a>
          </div>
      </div>
    </>
  );
}
