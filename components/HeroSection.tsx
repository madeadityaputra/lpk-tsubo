import Image from "next/image";
import {
  EXTERNAL_LINKS,
  HERO_CONTENT,
  SITE_IDENTITY,
  buildWhatsAppUrl,
} from "@/lib/content";

export function HeroSection() {
  const waTrialUrl = buildWhatsAppUrl("id", "trial");

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-indigo-deep text-white"
    >
      {/* Background illustration with subtle gradient overlay so text contrast stays >= 7:1 */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_CONTENT.illustrationPath}
          alt={HERO_CONTENT.illustrationAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-55 sm:opacity-70 lg:opacity-90"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-indigo-deep/95 via-indigo-deep/80 to-indigo-deep/25 lg:via-indigo-deep/55 lg:to-transparent"
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm sm:text-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-torii"
            />
            <span>{HERO_CONTENT.badge}</span>
          </div>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {HERO_CONTENT.headlineLine1}
            <span className="mt-1 block text-[#FF9B8E]">
              {HERO_CONTENT.headlineHighlight}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
            {HERO_CONTENT.subheadline}
          </p>

          <p className="mt-2 text-sm font-medium text-white/80">
            {SITE_IDENTITY.legalEntity}
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={EXTERNAL_LINKS.formSiswaBaru}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-torii px-7 py-3.5 text-base font-bold text-white shadow-md transition-colors hover:bg-torii-dark"
            >
              <span>{HERO_CONTENT.primaryCtaLabel}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href={waTrialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-indigo-deep/60 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-indigo-deep"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>{HERO_CONTENT.secondaryCtaLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
