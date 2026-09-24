import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../system/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteExtras } from "@/components/shared/SiteExtras";
import { property } from "@/content/property";

function NotFoundComponent() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-background px-6 pt-32 pb-20">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass">Error 404</p>
        <h1 className="display-caps mt-5 text-4xl text-foreground sm:text-5xl">Lost at sea</h1>
        <span className="hairline-center mt-6 block" />
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          The page you were looking for has drifted away. Let us guide you back to the shores of
          Pessada.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <Link to="/" className="text-sm font-bold uppercase text-brass">Return home</Link>
          <Link to="/suites" className="text-sm font-bold uppercase text-brass">View suites</Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Ionian Treasure Suites" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ionian Treasure Suites" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: property.name,
          url: "https://ioniantreasuresuites.com",
          image: property.coverImage,
          telephone: property.phone,
          email: property.email,
          numberOfRooms: property.suiteCount,
          address: { "@type": "PostalAddress", addressLocality: "Pessada", addressRegion: "Kefalonia", postalCode: "28100", addressCountry: "GR" },
          amenityFeature: ["Swimming pool", "Concierge", "Free Wi-Fi", "Air conditioning"].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <SiteExtras />
    </QueryClientProvider>
  );
}

