import { galleryImages } from "../data/aviation";

function PhotoGallery({ title = "Photo Gallery", eyebrow = "Gallery", images = galleryImages }) {
  return (
    <section className="bg-slate-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <figure key={`${image.src}-${index}`} className="group overflow-hidden rounded-lg bg-white">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
