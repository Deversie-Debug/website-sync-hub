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
      <div className="relative mx-auto grid min-h-[70vh] w-full max-w-7xl content-center justify-items-center px-6 py-28 text-center lg:px-8">
        <div className="image-copy-readable max-w-2xl">
          <p className="eyebrow tracking-[0.4em]">{eyebrow}</p>
          <div className="mx-auto mt-4 h-px w-8 bg-current opacity-60" />
          <h1 className="display-caps mt-8 text-balance text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
