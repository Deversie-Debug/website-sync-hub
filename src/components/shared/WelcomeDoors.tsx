import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import monogram from "@/assets/ionian-treasure-monogram.png";

const WELCOME_KEY = "ionian-treasure-welcome-opened";
const logoStyle = { "--logo-image": `url(${monogram})` } as CSSProperties;

export function WelcomeDoors() {
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousOverflow = useRef("");
  const previousRootOverflow = useRef("");

  useEffect(() => {
    if (sessionStorage.getItem(WELCOME_KEY) === "true") {
      setVisible(false);
      return;
    }

    previousOverflow.current = document.body.style.overflow;
    previousRootOverflow.current = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousRootOverflow.current;
      document.body.style.overflow = previousOverflow.current;
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const enterSite = () => {
    if (opening) return;
    sessionStorage.setItem(WELCOME_KEY, "true");
    setOpening(true);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimer.current = setTimeout(() => {
      setVisible(false);
      document.documentElement.style.overflow = previousRootOverflow.current;
      document.body.style.overflow = previousOverflow.current;
    }, reducedMotion ? 100 : 1850);
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Open the doors and enter Ionian Treasure Suites"
      onClick={enterSite}
      className={`welcome-doors no-underline-anim ${opening ? "is-opening" : ""}`}
    >
      <span className="welcome-door welcome-door-left">
        <span className="welcome-glass-lines" aria-hidden="true" />
        <span className="welcome-handle welcome-handle-left" aria-hidden="true" />
      </span>
      <span className="welcome-door welcome-door-right">
        <span className="welcome-glass-lines" aria-hidden="true" />
        <span className="welcome-handle welcome-handle-right" aria-hidden="true" />
      </span>
      <span className="welcome-mark" aria-hidden="true">
        <span className="welcome-emblem">
          <span style={logoStyle} className="logo-mask block h-24 w-28 sm:h-32 sm:w-36" />
        </span>
        <span className="welcome-copy">
          <span className="whitespace-nowrap text-[0.65rem] font-medium uppercase tracking-[0.24em] sm:text-xs">
            Ionian Treasure
          </span>
          <span className="mt-2 whitespace-nowrap text-[0.52rem] uppercase tracking-[0.35em] opacity-75 sm:text-[0.6rem]">
            Suites · Kefalonia
          </span>
        </span>
        <span className="welcome-enter">
          <span>Enter</span>
          <span className="welcome-enter-line" />
        </span>
      </span>
    </button>
  );
}