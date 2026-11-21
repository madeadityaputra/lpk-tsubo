import { CardGrid, SectionShell } from "@/components/ui/SectionPrimitives";
import { SITE_IDENTITY, TRUST_STATS } from "@/lib/content";

export function TrustBarSection() {
  return (
    <SectionShell
      ariaLabel="Kredibilitas dan Bukti Sosial"
      tone="surface"
      bordered="bottom"
      className="py-10 sm:py-12"
    >
      <CardGrid as="ul" compactGap>
        {TRUST_STATS.map((item) => (
          <li
            key={item.label}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-3.5 shadow-xs sm:p-5"
          >
            <div>
              <p className="font-display text-xl font-extrabold text-torii sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 font-display text-sm font-bold text-indigo-deep sm:text-base">
                {item.label}
              </p>
            </div>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              {item.detail}
            </p>
          </li>
        ))}
      </CardGrid>
      <p className="mt-4 text-right text-xs text-muted-foreground">
        *{SITE_IDENTITY.dataAsOf}
      </p>
    </SectionShell>
  );
}
