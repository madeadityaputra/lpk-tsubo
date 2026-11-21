import { ActionLink } from "@/components/ui/ActionLink";
import { MOBILE_STICKY_CONTENT } from "@/lib/content";

export function MobileStickyBar() {
  return (
    <div
      role="region"
      aria-label={MOBILE_STICKY_CONTENT.regionLabel}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-lg backdrop-blur md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <ActionLink
          actionId={MOBILE_STICKY_CONTENT.primaryAction}
          variant="primary"
          className="px-4 py-2.5 text-sm shadow-none"
        >
          {MOBILE_STICKY_CONTENT.primaryLabel}
        </ActionLink>
        <ActionLink
          actionId={MOBILE_STICKY_CONTENT.secondaryAction}
          variant="solidIndigo"
          className="px-4 py-2.5"
        >
          {MOBILE_STICKY_CONTENT.secondaryLabel}
        </ActionLink>
      </div>
    </div>
  );
}
