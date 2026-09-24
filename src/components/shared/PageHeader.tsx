export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt={imageAlt} className="absolute inset-0 size-full object-cover" />
      <div aria-hidden="true" className="subpage-image-scrim absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-4 border border-primary-foreground/15" />
      <div className="relative mx-auto grid min-h-[70vh] w-full max-w-7xl content-center justify-items-center px-6 py-28 text-center lg:px-8">
        <div className="image-copy-readable max-w-3xl">
          <div className="mx-auto mb-8 h-px w-10 bg-current opacity-60" />
          <p className="eyebrow font-semibold tracking-[0.32em]">{eyebrow}</p>
          <h1 className="display-caps mt-7 text-balance text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mx-auto mt-8 max-w-lg text-sm font-normal leading-7 sm:text-base">{description}</p>
        </div>
      </div>
    </section>
  );
}
