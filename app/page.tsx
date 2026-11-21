import Image from "next/image";
import { FooterAndMap } from "@/components/FooterAndMap";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { FaqSection, StepsSection } from "@/components/StepsAndFaq";
import { TrustAndPrograms } from "@/components/TrustAndPrograms";
import {
  EXTERNAL_LINKS,
  NAV_ITEMS,
  SITE_IDENTITY,
} from "@/lib/content";

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "#lpk-tsubo-jltc",
  name: SITE_IDENTITY.officialName,
  alternateName: SITE_IDENTITY.shortName,
  description: `${SITE_IDENTITY.tagline}. ${SITE_IDENTITY.legalEntity}. Kursus Bahasa Jepang, Bimbel, Program Work in Japan, dan Job Matching di Bandar Lampung.`,
  telephone: SITE_IDENTITY.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Wolter Monginsidi No. 102–195, Pengajaran, Kec. Teluk Betung Utara",
    addressLocality: "Kota Bandar Lampung",
    addressRegion: "Lampung",
    postalCode: "35215",
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
    },
  ],
  sameAs: [
    EXTERNAL_LINKS.instagram,
    EXTERNAL_LINKS.linktree,
    EXTERNAL_LINKS.googleMaps,
  ],
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD),
        }}
      />

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
                Bandar Lampung
              </span>
            </div>
          </a>

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-1 md:flex"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-indigo-deep transition-colors hover:bg-surface hover:text-torii"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={EXTERNAL_LINKS.formSiswaBaru}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-torii px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-torii-dark"
          >
            Daftar Siswa Baru
          </a>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <TrustAndPrograms />
        <StepsSection />
        <GallerySection />
        <FaqSection />
      </main>

      <FooterAndMap />
      <MobileStickyBar />
    </div>
  );
}
