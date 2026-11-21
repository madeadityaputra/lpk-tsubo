import type { ReactNode } from "react";
import { type ActionId, resolveActionHref } from "@/lib/content";

export type ActionVariant =
  | "primary"
  | "primaryCompact"
  | "heroOutline"
  | "solidIndigo"
  | "outlineIndigo"
  | "cardOutline"
  | "outlineLight";

interface ActionLinkProps {
  actionId: ActionId;
  variant: ActionVariant;
  className?: string;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<ActionVariant, string> = {
  primary:
    "min-h-12 rounded-full bg-torii px-7 py-3.5 text-base font-bold text-white shadow-md hover:bg-torii-dark",
  primaryCompact:
    "min-h-11 rounded-full bg-torii px-4 py-2 text-sm font-bold text-white hover:bg-torii-dark",
  heroOutline:
    "min-h-12 rounded-full border-2 border-white/80 bg-indigo-deep/60 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-indigo-deep",
  solidIndigo:
    "min-h-12 rounded-full bg-indigo-deep px-6 py-3 text-sm font-bold text-white hover:bg-indigo-light",
  outlineIndigo:
    "min-h-12 rounded-full border-2 border-indigo-deep bg-white px-6 py-3 text-sm font-bold text-indigo-deep hover:bg-indigo-deep hover:text-white",
  cardOutline:
    "min-h-11 w-full rounded-xl border-2 border-indigo-deep bg-white px-2.5 py-2 text-center text-xs font-bold text-indigo-deep hover:bg-indigo-deep hover:text-white sm:px-4 sm:py-2.5 sm:text-sm",
  outlineLight:
    "min-h-11 rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-indigo-deep",
};

export function ActionLink({
  actionId,
  variant,
  className = "",
  children,
}: ActionLinkProps) {
  const href = resolveActionHref(actionId);
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 transition-colors ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
