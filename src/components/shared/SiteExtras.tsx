import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

const CONSENT_KEY = "it-cookie-consent";
const GA_ID = import.meta.env['VITE_GA_ID'] as string | undefined;

function loadAnalytics() {
  if (!GA_ID || document.getElementById("ga-script")) return;
  const s = document.createElement("script");
  s.id = "ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID, { anonymize_ip: true });
}

/** Fades page sections in as they scroll into view. */
function useScrollReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let io: IntersectionObserver | undefined;
    const timer = window.setTimeout(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("main section:not(:first-of-type) > *"),
      ).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io?.unobserve(e.target);
            }
          }),
        { rootMargin: "0px 0px -8% 0px" },
      );
      els.forEach((el) => {
        el.classList.add("reveal");
        io?.observe(el);
      });
    }, 100);
    return () => {
      window.clearTimeout(timer);
      io?.disconnect();
    };
  }, [pathname]);
}

export function SiteExtras() {
  useScrollReveal();
  const [showTop, setShowTop] = useState(false);
  const [consent, setConsent] = useState<string | null>("pending");

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    setConsent(saved);
    if (saved === "accepted") loadAnalytics();
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const choose = (v: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, v);
    setConsent(v);
    if (v === "accepted") loadAnalytics();
  };

  return (
    <>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-30 grid size-12 place-items-center rounded-full border border-brass/40 bg-background/90 text-brass shadow-sm backdrop-blur transition-[opacity,transform] duration-500 hover:-translate-y-0.5 ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>

      {consent === null && (
        <div
          role="dialog"
          aria-label="Cookie preferences"
          className="animate-soft-reveal fixed inset-x-4 bottom-4 z-40 mx-auto max-w-md rounded-sm border border-brass/30 bg-background px-6 py-6 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.18)] backdrop-blur sm:bottom-6"
        >
          <p className="eyebrow hairline-center tracking-[0.35em] text-brass">Cookies</p>
          <p className="mt-4 text-center text-sm leading-relaxed text-foreground/85">
            We use cookies to understand how visitors use our site and to improve your
            experience. You can accept or decline analytics cookies.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => choose("declined")}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70 transition-opacity hover:opacity-60"
            >
              Decline
            </button>
            <span aria-hidden="true" className="h-4 w-px bg-border" />
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="rounded-sm bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
