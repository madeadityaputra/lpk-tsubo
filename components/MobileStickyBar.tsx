import { EXTERNAL_LINKS, buildWhatsAppUrl } from "@/lib/content";

export function MobileStickyBar() {
  const waTrialUrl = buildWhatsAppUrl("id", "trial");

  return (
    <div
      role="region"
      aria-label="Aksi cepat pendaftaran dan konsultasi"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-lg backdrop-blur md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={EXTERNAL_LINKS.formSiswaBaru}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-torii px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-torii-dark"
        >
          Daftar
        </a>
        <a
          href={waTrialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-indigo-deep px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-indigo-light"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
