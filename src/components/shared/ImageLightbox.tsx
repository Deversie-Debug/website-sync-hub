import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export type LightboxImage = {
  src: string;
  alt: string;
};

export function ImageLightbox({
  images,
  activeIndex,
  onChange,
  onClose,
}: {
  images: LightboxImage[];
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const image = images[activeIndex];

  useEffect(() => {
    if (!image) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onChange((activeIndex - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        onChange((activeIndex + 1) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, image, images.length, onChange, onClose]);

  if (!image || typeof document === "undefined") return null;

  const hasMultipleImages = images.length > 1;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="animate-soft-reveal fixed inset-0 z-[100] grid grid-rows-[auto_minmax(0,1fr)_auto] bg-lightbox-backdrop p-3 sm:p-5"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div className="flex justify-end">
        <button
          type="button"
          aria-label="Close photo"
          onClick={onClose}
          className="inline-flex size-11 items-center justify-center rounded-sm bg-lightbox-control text-lightbox-control-foreground transition-opacity hover:opacity-85"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="grid min-h-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4">
        {hasMultipleImages ? (
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => onChange((activeIndex - 1 + images.length) % images.length)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-lightbox-control text-lightbox-control-foreground transition-opacity hover:opacity-85"
          >
            <ChevronLeft className="size-6" aria-hidden="true" />
          </button>
        ) : (
          <span className="size-11" aria-hidden="true" />
        )}

        <img
          src={image.src}
          alt={image.alt}
          className="animate-soft-reveal max-h-full min-h-0 w-full object-contain"
        />

        {hasMultipleImages ? (
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => onChange((activeIndex + 1) % images.length)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-lightbox-control text-lightbox-control-foreground transition-opacity hover:opacity-85"
          >
            <ChevronRight className="size-6" aria-hidden="true" />
          </button>
        ) : (
          <span className="size-11" aria-hidden="true" />
        )}
      </div>

      <div className="pt-3 text-center text-sm text-lightbox-control-foreground">
        <p>{image.alt}</p>
        {hasMultipleImages && (
          <p className="mt-1 opacity-75">
            {activeIndex + 1} of {images.length}
          </p>
        )}
      </div>
    </div>,
    document.body,
  );
}