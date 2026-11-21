import { ActionLink } from "@/components/ui/ActionLink";
import {
  CardGrid,
  SectionHeader,
  SectionShell,
} from "@/components/ui/SectionPrimitives";
import { REGISTRATION_STEPS, STEPS_SECTION_CONTENT } from "@/lib/content";

export function StepsSection() {
  return (
    <SectionShell
      id="alur"
      ariaLabelledBy="alur-heading"
      tone="surface"
      bordered="both"
    >
      <SectionHeader
        headingId="alur-heading"
        eyebrow={STEPS_SECTION_CONTENT.eyebrow}
        title={STEPS_SECTION_CONTENT.title}
        subtitle={STEPS_SECTION_CONTENT.subtitle}
      />

      <CardGrid as="ol" className="mt-10">
        {REGISTRATION_STEPS.map((item) => (
          <li
            key={item.step}
            className="relative flex flex-col rounded-2xl border border-border bg-card p-3.5 shadow-xs sm:p-6"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-torii font-display text-base font-extrabold text-white sm:h-11 sm:w-11 sm:text-lg">
              {item.step}
            </span>
            <h3 className="mt-3 font-display text-sm font-bold leading-snug text-indigo-deep sm:mt-4 sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-[15px]">
              {item.description}
            </p>
          </li>
        ))}
      </CardGrid>

      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <ActionLink
          actionId={STEPS_SECTION_CONTENT.primaryCtaAction}
          variant="primary"
        >
          {STEPS_SECTION_CONTENT.primaryCtaLabel}
        </ActionLink>
        <ActionLink
          actionId={STEPS_SECTION_CONTENT.secondaryCtaAction}
          variant="outlineIndigo"
          className="text-base px-7 py-3.5"
        >
          {STEPS_SECTION_CONTENT.secondaryCtaLabel}
        </ActionLink>
      </div>
    </SectionShell>
  );
}
