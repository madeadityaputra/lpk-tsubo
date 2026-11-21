import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import {
  CardGrid,
  SectionHeader,
  SectionShell,
} from "@/components/ui/SectionPrimitives";
import { GALLERY_ITEMS, GALLERY_SECTION_CONTENT } from "@/lib/content";

export function GallerySection() {
  return (
    <SectionShell id="galeri" ariaLabelledBy="galeri-heading" tone="white">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeader
          headingId="galeri-heading"
          eyebrow={GALLERY_SECTION_CONTENT.eyebrow}
          title={GALLERY_SECTION_CONTENT.title}
          subtitle={GALLERY_SECTION_CONTENT.subtitle}
        />

        <ActionLink
          actionId={GALLERY_SECTION_CONTENT.instagramCtaAction}
          variant="outlineIndigo"
          className="shrink-0 min-h-11 px-5 py-2.5"
        >
          <span>{GALLERY_SECTION_CONTENT.instagramCtaLabel}</span>
          <span aria-hidden="true">↗</span>
        </ActionLink>
      </div>

      <CardGrid className="mt-10">
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
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 rounded-full bg-indigo-deep/90 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs sm:top-3 sm:left-3 sm:px-3 sm:py-1 sm:text-xs">
                  {item.badgeText}
                </span>
              </div>
            ) : (
              <div className="flex aspect-4/3 w-full flex-col items-center justify-center bg-surface p-3 text-center sm:p-6">
                <span className="inline-flex rounded-full border border-border bg-white px-2.5 py-1 text-[10px] font-bold text-indigo-deep sm:px-3.5 sm:text-xs">
                  {item.badgeText}
                </span>
                <p className="mt-2 text-[11px] text-muted-foreground sm:mt-3 sm:text-xs">
                  {GALLERY_SECTION_CONTENT.placeholderHint}
                </p>
              </div>
            )}

            <figcaption className="flex flex-1 flex-col p-3.5 sm:p-5">
              <h3 className="font-display text-sm font-bold text-indigo-deep sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:mt-1.5 sm:text-sm">
                {item.subtitle}
              </p>
            </figcaption>
          </figure>
        ))}
      </CardGrid>
    </SectionShell>
  );
}
