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
      <div className="relative mx-auto grid min-h-80 w-full max-w-7xl content-center px-6 py-16 lg:min-h-96 lg:px-8 lg:py-20">
        <div className="max-w-3xl rounded-sm border border-border/70 bg-image-copy p-6 text-image-copy-foreground backdrop-blur-sm sm:p-8">
          <p className="eyebrow text-brass">{eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
