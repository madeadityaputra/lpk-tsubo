import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import {
  CardGrid,
  SectionHeader,
  SectionShell,
} from "@/components/ui/SectionPrimitives";
import { PROGRAMS, PROGRAMS_SECTION_HEADER } from "@/lib/content";

export function ProgramsSection() {
  return (
    <SectionShell id="program" ariaLabelledBy="program-heading" tone="white">
      <SectionHeader
        headingId="program-heading"
        eyebrow={PROGRAMS_SECTION_HEADER.eyebrow}
        title={PROGRAMS_SECTION_HEADER.title}
        subtitle={PROGRAMS_SECTION_HEADER.subtitle}
      />

      <CardGrid className="mt-10">
        {PROGRAMS.map((program) => (
          <article
            key={program.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-shadow hover:shadow-md"
          >
            {program.imagePath && (
              <div className="relative aspect-4/3 w-full border-b border-border bg-indigo-deep">
                <Image
                  src={program.imagePath}
                  alt={program.imageAlt ?? program.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-3.5 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-deep font-display text-base font-bold text-white sm:h-12 sm:w-12 sm:rounded-xl sm:text-xl"
                >
                  {program.kanjiAccent}
                </span>
                <h3 className="font-display text-sm font-bold leading-snug text-indigo-deep sm:text-lg">
                  {program.title}
                </h3>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-foreground sm:mt-4 sm:text-[15px]">
                {program.description}
              </p>

              <ul className="mt-3 flex-1 space-y-1.5 border-t border-border pt-3 text-xs text-muted-foreground sm:mt-4 sm:space-y-2 sm:pt-4 sm:text-sm">
                {program.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-1.5 sm:gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-torii sm:h-4 sm:w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ActionLink
                actionId={program.ctaAction}
                variant="cardOutline"
                className="mt-4 sm:mt-6"
              >
                <span>{program.ctaLabel}</span>
                <span aria-hidden="true">→</span>
              </ActionLink>
            </div>
          </article>
        ))}
      </CardGrid>
    </SectionShell>
  );
}
