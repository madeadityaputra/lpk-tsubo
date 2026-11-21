import type { ReactNode } from "react";

type SectionTone = "white" | "surface";

interface SectionShellProps {
  id?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  tone?: SectionTone;
  bordered?: "none" | "top" | "bottom" | "both";
  narrow?: boolean;
  className?: string;
  children: ReactNode;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  white: "bg-background",
  surface: "bg-surface",
};

const BORDER_CLASSES = {
  none: "",
  top: "border-t border-border",
  bottom: "border-b border-border",
  both: "border-y border-border",
} as const;

export function SectionShell({
  id,
  ariaLabel,
  ariaLabelledBy,
  tone = "white",
  bordered = "none",
  narrow = false,
  className = "py-16 sm:py-20",
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={`scroll-mt-16 ${TONE_CLASSES[tone]} ${BORDER_CLASSES[bordered]} ${className}`}
    >
      <div
        className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${
          narrow ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  headingId: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  headingId,
}: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-bold tracking-wider text-torii uppercase">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-2 font-display text-2xl font-extrabold text-indigo-deep sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>
    </div>
  );
}

interface CardGridProps {
  as?: "div" | "ul" | "ol";
  compactGap?: boolean;
  className?: string;
  children: ReactNode;
}

export function CardGrid({
  as = "div",
  compactGap = false,
  className = "",
  children,
}: CardGridProps) {
  const Tag = as;
  const gapClass = compactGap ? "gap-3 sm:gap-4" : "gap-3 sm:gap-6";
  return (
    <Tag className={`grid grid-cols-2 ${gapClass} lg:grid-cols-4 ${className}`}>
      {children}
    </Tag>
  );
}
