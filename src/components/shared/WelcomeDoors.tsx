import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import monogram from "@/assets/ionian-treasure-monogram.png";

const WELCOME_KEY = "ionian-treasure-welcome-opened";
const logoStyle = { "--logo-image": `url(${monogram})` } as CSSProperties;

export function WelcomeDoors() {
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(WELCOME_KEY) === "true") {
      setVisible(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const enterSite = () => {
    if (opening) return;
    sessionStorage.setItem(WELCOME_KEY, "true");
    setOpening(true);
    document.body.style.overflow = "";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimer.current = setTimeout(() => setVisible(false), reducedMotion ? 100 : 1500);
  };

  if (!visible) return null;

  const emblem = (
    <span className="welcome-emblem" aria-hidden="true">
      <span style={logoStyle} className="logo-mask block h-24 w-28 sm:h-32 sm:w-36" />
    </span>
  );

  return (
    <button
      type="button"
      aria-label="Open the doors and enter Ionian Treasure Suites"
      onClick={enterSite}
      className={`welcome-doors no-underline-anim ${opening ? "is-opening" : ""}`}
    >
      <span className="welcome-door welcome-door-left">
        <span className="welcome-glass-lines" aria-hidden="true" />
        {emblem}
        <span className="welcome-handle welcome-handle-left" aria-hidden="true" />
      </span>
      <span className="welcome-door welcome-door-right">
        <span className="welcome-glass-lines" aria-hidden="true" />
        {emblem}
        <span className="welcome-handle welcome-handle-right" aria-hidden="true" />
      </span>
      <span className="welcome-copy" aria-hidden="true">
        <span className="whitespace-nowrap text-[0.65rem] font-medium uppercase tracking-[0.24em] sm:text-xs">
          Ionian Treasure
        </span>
        <span className="mt-2 whitespace-nowrap text-[0.52rem] uppercase tracking-[0.35em] opacity-75 sm:text-[0.6rem]">
          Suites · Kefalonia
        </span>
      </span>
      <span className="welcome-enter" aria-hidden="true">
        <span>Enter</span>
        <span className="welcome-enter-line" />
      </span>
    </button>
  );
}