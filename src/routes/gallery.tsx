import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ImageLightbox } from "@/components/shared/ImageLightbox";
import { PageHeader } from "@/components/shared/PageHeader";
import { galleryImages, galleryCategories, pageImages } from "@/content/property";

const title = "Gallery — Ionian Treasure Suites, Pessada";
const description =
  "Photographs of the swimming pool, garden, reception and the five suites at Ionian Treasure Suites in Pessada, Kefalonia.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:url", content: "https://ioniantreasuresuites.com/gallery" },
      { property: "og:description", content: description },
      { property: "og:image", content: pageImages.gallery },
      { name: "twitter:image", content: pageImages.gallery },
    ],
    links: [{ rel: "canonical", href: "https://ioniantreasuresuites.com/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const filters = ["All", ...galleryCategories];
  const shown = filter === "All" ? galleryImages : galleryImages.filter((i) => i.category === filter);
  const lightboxImages = shown.map(({ src, alt }) => ({ src, alt }));

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="The pool, the garden, the suites"
        description="Twenty photographs of the property as it is — taken across the terrace, the reception and each of the five suites."
        image={pageImages.gallery}
        imageAlt="Pool and suite facades in warm afternoon light"
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div role="group" aria-label="Filter the gallery" className="flex flex-wrap gap-3">
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

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((img, index) => (
            <li key={img.src} className="overflow-hidden rounded-sm border border-border bg-card">
              <button
                type="button"
                aria-label={`Open photo: ${img.alt}`}
                onClick={() => setActiveImage(index)}
                className="group block w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <img loading="lazy" decoding="async"
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {activeImage !== null && (
        <ImageLightbox
          images={lightboxImages}
          activeIndex={activeImage}
          onChange={setActiveImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  );
}
