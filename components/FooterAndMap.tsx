import Image from "next/image";
import {
  EXTERNAL_LINKS,
  SITE_IDENTITY,
  buildWhatsAppUrl,
} from "@/lib/content";

export function FooterAndMap() {
  const waAdmin1 = buildWhatsAppUrl("id", "umum");
  const waAdmin2 = buildWhatsAppUrl("jp", "umum");
  const mapQueryUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${SITE_IDENTITY.officialName}, ${SITE_IDENTITY.address}`
  )}&output=embed`;

  return (
    <footer
      id="lokasi"
      aria-labelledby="footer-heading"
      className="scroll-mt-16 bg-indigo-deep pb-24 text-white md:pb-0"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <Image
              src={SITE_IDENTITY.logoPath}
              alt={`Logo ${SITE_IDENTITY.shortName}`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-white/20 object-cover"
            />
            <div>
              <h2
                id="footer-heading"
                className="font-display text-xl font-extrabold text-white sm:text-2xl"
              >
                {SITE_IDENTITY.officialName}
              </h2>
              <p className="text-sm text-white/80">
                {SITE_IDENTITY.legalEntity}
              </p>
            </div>
          </div>

          <dl className="mt-6 space-y-4 text-sm text-white/90 sm:text-base">
            <div>
              <dt className="font-display text-xs font-bold tracking-wider text-[#FF9B8E] uppercase">
                Alamat Lengkap
              </dt>
              <dd className="mt-1">
                <address className="not-italic">{SITE_IDENTITY.address}</address>
              </dd>
            </div>

            <div>
              <dt className="font-display text-xs font-bold tracking-wider text-[#FF9B8E] uppercase">
                Jam Operasional
              </dt>
              <dd className="mt-1">{SITE_IDENTITY.operatingHours}</dd>
            </div>

            <div>
              <dt className="font-display text-xs font-bold tracking-wider text-[#FF9B8E] uppercase">
                Telepon & WhatsApp
              </dt>
              <dd className="mt-1">
                <a
                  href={SITE_IDENTITY.phoneHref}
                  className="inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4 hover:text-[#FF9B8E]"
                >
                  {SITE_IDENTITY.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-indigo-deep"
            >
              Instagram {EXTERNAL_LINKS.instagramHandle}
            </a>
            <a
              href={waAdmin1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-indigo-deep"
            >
              WA Admin 1 (Indonesia)
            </a>
            <a
              href={waAdmin2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-indigo-deep"
            >
              WA Admin 2 (Jepang)
            </a>
            <a
              href={EXTERNAL_LINKS.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-indigo-deep"
            >
              Linktree Resmi
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5 lg:col-span-6">
          <div className="overflow-hidden rounded-xl bg-indigo-light">
            <iframe
              title={`Peta lokasi ${SITE_IDENTITY.officialName}`}
              src={mapQueryUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0 sm:h-72"
            />
          </div>

          <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-white/80">
              Kec. Teluk Betung Utara, Kota Bandar Lampung
            </p>
            <a
              href={EXTERNAL_LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-torii px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-torii-dark"
            >
              <span>Buka di Google Maps</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/75">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {SITE_IDENTITY.officialName} (
          {SITE_IDENTITY.legalEntity}). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
