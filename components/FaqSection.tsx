import { ActionLink } from "@/components/ui/ActionLink";
import { SectionHeader, SectionShell } from "@/components/ui/SectionPrimitives";
import { FAQ_ITEMS, FAQ_SECTION_CONTENT } from "@/lib/content";

export function FaqSection() {
  return (
    <SectionShell
      id="faq"
      ariaLabelledBy="faq-heading"
      tone="surface"
      bordered="top"
      narrow
    >
      <SectionHeader
        headingId="faq-heading"
        eyebrow={FAQ_SECTION_CONTENT.eyebrow}
        title={FAQ_SECTION_CONTENT.title}
        subtitle={FAQ_SECTION_CONTENT.subtitle}
      />

      <div className="mt-8 space-y-4">
        {FAQ_ITEMS.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-border bg-card p-5 shadow-xs"
          >
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-indigo-deep sm:text-lg">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-torii transition-transform group-open:rotate-45"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 border-t border-border pt-3 text-[15px] leading-relaxed text-foreground">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-xs">
        <h3 className="font-display text-lg font-bold text-indigo-deep">
          {FAQ_SECTION_CONTENT.contactBoxTitle}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {FAQ_SECTION_CONTENT.contactBoxSubtitle}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <ActionLink
            actionId={FAQ_SECTION_CONTENT.admin1Action}
            variant="solidIndigo"
          >
            {FAQ_SECTION_CONTENT.admin1Label}
          </ActionLink>
          <ActionLink
            actionId={FAQ_SECTION_CONTENT.admin2Action}
            variant="outlineIndigo"
          >
            {FAQ_SECTION_CONTENT.admin2Label}
          </ActionLink>
        </div>
      </div>
    </SectionShell>
  );
}
