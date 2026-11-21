import Image from "next/image";
import { EXTERNAL_LINKS, GALLERY_ITEMS } from "@/lib/content";

export function GallerySection() {
  return (
    <section
      id="galeri"
      aria-labelledby="galeri-heading"
      className="scroll-mt-16 bg-background py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-wider text-torii uppercase">
              Suasana & Fasilitas
            </p>
            <h2
              id="galeri-heading"
              className="mt-2 font-display text-2xl font-extrabold text-indigo-deep sm:text-3xl lg:text-4xl"
            >
              Galeri & Fasilitas Tsubo JLTC
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Ruang belajar nyaman, kegiatan siswa, area parkir luas, serta
              kunjungan resmi (Official Visits).
            </p>
          </div>

          <a
            href={EXTERNAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-indigo-deep px-5 py-2.5 text-sm font-bold text-indigo-deep transition-colors hover:bg-indigo-deep hover:text-white"
          >
            <span>Lihat Dokumentasi Asli di {EXTERNAL_LINKS.instagramHandle}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xs"
            >
              {item.isIllustration && item.imagePath ? (
                <div className="relative aspect-4/3 w-full bg-indigo-deep">
                  <Image
                    src={item.imagePath}
                    alt={item.imageAlt ?? item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-indigo-deep/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                    {item.badgeText}
                  </span>
                </div>
              ) : (
                <div className="flex aspect-4/3 w-full flex-col items-center justify-center bg-surface p-6 text-center">
                  <span className="inline-flex rounded-full border border-border bg-white px-3.5 py-1 text-xs font-bold text-indigo-deep">
                    {item.badgeText}
                  </span>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Dokumentasi foto asli dapat dilihat melalui Instagram{" "}
                    {EXTERNAL_LINKS.instagramHandle}
                  </p>
                </div>
              )}

              <figcaption className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-indigo-deep">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.subtitle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
