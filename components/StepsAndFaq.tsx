import {
  EXTERNAL_LINKS,
  FAQ_ITEMS,
  REGISTRATION_STEPS,
  buildWhatsAppUrl,
} from "@/lib/content";

export function StepsSection() {
  return (
    <section
      id="alur"
      aria-labelledby="alur-heading"
      className="scroll-mt-16 border-y border-border bg-surface py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wider text-torii uppercase">
            Langkah Mudah
          </p>
          <h2
            id="alur-heading"
            className="mt-2 font-display text-2xl font-extrabold text-indigo-deep sm:text-3xl lg:text-4xl"
          >
            Alur Pendaftaran & Keberangkatan
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Empat tahapan terarah dari mencoba Free Trial Class hingga siap
            berangkat berkarier di Jepang.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REGISTRATION_STEPS.map((item) => (
            <li
              key={item.step}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-xs"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-torii font-display text-lg font-extrabold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-indigo-deep">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={EXTERNAL_LINKS.formSiswaBaru}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-torii px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-torii-dark"
          >
            Mulai dari Form Siswa Baru
          </a>
          <a
            href={EXTERNAL_LINKS.formBimbel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border-2 border-indigo-deep bg-white px-7 py-3.5 text-base font-bold text-indigo-deep transition-colors hover:bg-indigo-deep hover:text-white"
          >
            Daftar Program Bimbel
          </a>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const waAdmin1Biaya = buildWhatsAppUrl("id", "biaya");
  const waAdmin2Umum = buildWhatsAppUrl("jp", "umum");

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-16 border-t border-border bg-surface py-16 sm:py-20"
    >
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-wider text-torii uppercase">
              Tanya Jawab
            </p>
            <h2
              id="faq-heading"
              className="mt-2 font-display text-2xl font-extrabold text-indigo-deep sm:text-3xl lg:text-4xl"
            >
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Jawaban atas pertanyaan yang paling sering ditanyakan Calon Siswa
              di Google Maps dan Instagram.
            </p>
          </div>

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
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
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
              Masih punya pertanyaan lain?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Konsultasikan langsung melalui WhatsApp dengan Admin 1 (Indonesia)
              atau Admin 2 (Jepang).
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={waAdmin1Biaya}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-indigo-deep px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-light"
              >
                <span>Chat Admin 1 (Indonesia)</span>
              </a>
              <a
                href={waAdmin2Umum}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-indigo-deep bg-white px-6 py-3 text-sm font-bold text-indigo-deep transition-colors hover:bg-indigo-deep hover:text-white"
              >
                <span>Chat Admin 2 (Jepang)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
