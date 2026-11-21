import Image from "next/image";
import { PROGRAMS, SITE_IDENTITY, TRUST_STATS } from "@/lib/content";

export function TrustAndPrograms() {
  return (
    <>
      {/* Trust Bar */}
      <section
        aria-label="Kredibilitas dan Bukti Sosial"
        className="border-b border-border bg-surface py-10 sm:py-12"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_STATS.map((item) => (
              <li
                key={item.label}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-xs"
              >
                <div>
                  <p className="font-display text-2xl font-extrabold text-torii sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-indigo-deep">
                    {item.label}
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-right text-xs text-muted-foreground">
            *{SITE_IDENTITY.dataAsOf}
          </p>
        </div>
      </section>

      {/* Program Utama */}
      <section
        id="program"
        aria-labelledby="program-heading"
        className="scroll-mt-16 bg-background py-16 sm:py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-wider text-torii uppercase">
              Program & Layanan
            </p>
            <h2
              id="program-heading"
              className="mt-2 font-display text-2xl font-extrabold text-indigo-deep sm:text-3xl lg:text-4xl"
            >
              Program Utama Tsubo JLTC
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Pilih program pembelajaran bahasa Jepang, Bimbel, atau persiapan
              karier ke Jepang yang sesuai dengan tujuan Anda.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-deep font-display text-xl font-bold text-white"
                    >
                      {program.kanjiAccent}
                    </span>
                    <h3 className="font-display text-lg font-bold text-indigo-deep">
                      {program.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-foreground">
                    {program.description}
                  </p>

                  <ul className="mt-4 flex-1 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                    {program.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="mt-0.5 h-4 w-4 shrink-0 text-torii"
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

                  <a
                    href={program.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-indigo-deep bg-white px-4 py-2.5 text-sm font-bold text-indigo-deep transition-colors hover:bg-indigo-deep hover:text-white"
                  >
                    <span>{program.ctaLabel}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
