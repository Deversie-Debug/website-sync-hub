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
    <section className="relative isolate overflow-hidden border-b border-border">
      <img src={image} alt={imageAlt} className="absolute inset-0 size-full object-cover" />
      <div className="relative mx-auto grid min-h-80 w-full max-w-7xl content-center px-6 py-20 lg:min-h-96 lg:px-8 lg:py-24">
        <p className="eyebrow text-brass">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl text-primary-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
          {description}
        </p>
      </div>
    </section>
  );
}
