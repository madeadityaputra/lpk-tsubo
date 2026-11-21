import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { HEADER_CONTENT, SITE_IDENTITY } from "@/lib/content";

export function HeaderNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex min-h-11 items-center gap-3 font-display text-base font-extrabold tracking-tight text-indigo-deep sm:text-lg"
          aria-label={`${SITE_IDENTITY.officialName} - Kembali ke atas`}
        >
          <Image
            src={SITE_IDENTITY.logoPath}
            alt={`Logo ${SITE_IDENTITY.shortName}`}
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full border border-border object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span>{SITE_IDENTITY.shortName}</span>
            <span className="text-xs font-medium text-muted-foreground">
              {SITE_IDENTITY.cityLabel}
            </span>
          </div>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-1 md:flex"
        >
          {HEADER_CONTENT.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-indigo-deep transition-colors hover:bg-surface hover:text-torii"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ActionLink
          actionId={HEADER_CONTENT.ctaAction}
          variant="primaryCompact"
          className="shrink-0"
        >
          {HEADER_CONTENT.ctaLabel}
        </ActionLink>
      </div>
    </header>
  );
}
