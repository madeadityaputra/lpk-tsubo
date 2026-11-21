import type { Metadata } from "next";

export type WhatsAppContext = "trial" | "biaya" | "program" | "umum";
export type AdminTarget = "id" | "jp";

export type ActionId =
  | "formSiswaBaru"
  | "formBimbel"
  | "waAdmin1Trial"
  | "waAdmin1Biaya"
  | "waAdmin1Program"
  | "waAdmin1Umum"
  | "waAdmin2Umum"
  | "googleMaps"
  | "instagram"
  | "linktree"
  | "phone";

export const SITE_IDENTITY = {
  officialName: "LPK Tsubo Japanese Language & Training Center",
  shortName: "Tsubo JLTC",
  cityLabel: "Bandar Lampung",
  legalEntity: "LPK & LKP di bawah naungan PT. Miraibo INC",
  category: "Pusat Pendidikan / Educational Consultant",
  tagline: "No.1 Japanese Language Center in Bandar Lampung",
  addressParts: {
    streetAddress:
      "Jl. Wolter Monginsidi No. 102–195, Pengajaran, Kec. Teluk Betung Utara",
    addressLocality: "Kota Bandar Lampung",
    addressRegion: "Lampung",
    postalCode: "35215",
    addressCountry: "ID",
  },
  address:
    "Jl. Wolter Monginsidi No. 102–195, Pengajaran, Kec. Teluk Betung Utara, Kota Bandar Lampung, Lampung 35215, Indonesia",
  shortLocation: "Kec. Teluk Betung Utara, Kota Bandar Lampung",
  phoneDisplay: "+62 821-7542-4599",
  phoneHref: "tel:+6282175424599",
  operatingHours: "Buka mulai Senin pukul 09.00 WIB",
  openingDays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  opensAt: "09:00",
  dataAsOf: "Data Google Maps & Instagram per November 2026",
  logoPath: "/logo.jpg",
  themeColor: "#1B2A4A",
} as const;

export const EXTERNAL_LINKS = {
  formSiswaBaru: "https://forms.gle/tjynDQ9e8PTaGZ266",
  formBimbel: "https://forms.gle/d415TUG1aKJhPXXb7",
  waAdmin1Base: "https://wa.me/6282175424599",
  waAdmin2Base: "https://wa.me/6282118255576",
  googleMaps: "https://maps.app.goo.gl/SLpc9TPoWAEqSQvg8",
  instagram: "https://www.instagram.com/tsubojltc/",
  instagramHandle: "@tsubojltc",
  linktree: "https://linktr.ee/Tsubo.jltc",
} as const;

const WA_MESSAGES: Record<WhatsAppContext, string> = {
  trial:
    "Halo Admin Tsubo JLTC, saya ingin bertanya jadwal dan cara ikut Free Trial Class Bahasa Jepang.",
  biaya:
    "Halo Admin Tsubo JLTC, saya ingin menanyakan rincian biaya belajar di Tsubo JLTC.",
  program:
    "Halo Admin Tsubo JLTC, saya ingin berkonsultasi mengenai program Kursus Bahasa Jepang dan Work in Japan.",
  umum:
    "Halo Admin Tsubo JLTC, saya ingin bertanya mengenai pendaftaran di LPK Tsubo.",
};

export function buildWhatsAppUrl(
  admin: AdminTarget = "id",
  context: WhatsAppContext = "umum"
): string {
  const base =
    admin === "id" ? EXTERNAL_LINKS.waAdmin1Base : EXTERNAL_LINKS.waAdmin2Base;
  return `${base}?text=${encodeURIComponent(WA_MESSAGES[context])}`;
}

export function resolveActionHref(actionId: ActionId): string {
  switch (actionId) {
    case "formSiswaBaru":
      return EXTERNAL_LINKS.formSiswaBaru;
    case "formBimbel":
      return EXTERNAL_LINKS.formBimbel;
    case "waAdmin1Trial":
      return buildWhatsAppUrl("id", "trial");
    case "waAdmin1Biaya":
      return buildWhatsAppUrl("id", "biaya");
    case "waAdmin1Program":
      return buildWhatsAppUrl("id", "program");
    case "waAdmin1Umum":
      return buildWhatsAppUrl("id", "umum");
    case "waAdmin2Umum":
      return buildWhatsAppUrl("jp", "umum");
    case "googleMaps":
      return EXTERNAL_LINKS.googleMaps;
    case "instagram":
      return EXTERNAL_LINKS.instagram;
    case "linktree":
      return EXTERNAL_LINKS.linktree;
    case "phone":
      return SITE_IDENTITY.phoneHref;
  }
}

export function buildMapEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    `${SITE_IDENTITY.officialName}, ${SITE_IDENTITY.address}`
  )}&output=embed`;
}

export function buildSeoMetadata(): Metadata {
  const title = `${SITE_IDENTITY.officialName} (${SITE_IDENTITY.shortName}) | Kursus Bahasa Jepang Bandar Lampung & LPK Lampung`;
  const description = `${SITE_IDENTITY.tagline}. Kursus Bahasa Jepang Bandar Lampung, Bimbel, Program Work in Japan, dan Job Matching di LPK Lampung (${SITE_IDENTITY.legalEntity}). Daftar Free Trial Class sekarang.`;

  return {
    title,
    description,
    keywords: [
      "kursus bahasa Jepang Bandar Lampung",
      "LPK Lampung",
      "LPK Tsubo",
      "Tsubo JLTC",
      "belajar bahasa Jepang Lampung",
      "kerja ke Jepang Lampung",
      "Work in Japan Bandar Lampung",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "id_ID",
      siteName: SITE_IDENTITY.officialName,
      images: [
        {
          url: HERO_CONTENT.illustrationPath,
          width: 1200,
          height: 675,
          alt: HERO_CONTENT.illustrationAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [HERO_CONTENT.illustrationPath],
    },
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "#lpk-tsubo-jltc",
    name: SITE_IDENTITY.officialName,
    alternateName: SITE_IDENTITY.shortName,
    description: `${SITE_IDENTITY.tagline}. ${SITE_IDENTITY.legalEntity}. Kursus Bahasa Jepang, Bimbel, Program Work in Japan, dan Job Matching di Bandar Lampung.`,
    telephone: SITE_IDENTITY.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      ...SITE_IDENTITY.addressParts,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...SITE_IDENTITY.openingDays],
        opens: SITE_IDENTITY.opensAt,
      },
    ],
    sameAs: [
      EXTERNAL_LINKS.instagram,
      EXTERNAL_LINKS.linktree,
      EXTERNAL_LINKS.googleMaps,
    ],
  };
}

export const HEADER_CONTENT = {
  ctaLabel: "Daftar Siswa Baru",
  ctaAction: "formSiswaBaru" as ActionId,
  navItems: [
    { label: "Program", href: "#program" },
    { label: "Alur", href: "#alur" },
    { label: "Galeri", href: "#galeri" },
    { label: "FAQ", href: "#faq" },
    { label: "Lokasi", href: "#lokasi" },
  ],
} as const;

export const MOBILE_STICKY_CONTENT = {
  regionLabel: "Aksi cepat pendaftaran dan konsultasi",
  primaryLabel: "Daftar",
  primaryAction: "formSiswaBaru" as ActionId,
  secondaryLabel: "WhatsApp",
  secondaryAction: "waAdmin1Trial" as ActionId,
} as const;

export const HERO_CONTENT = {
  badge: SITE_IDENTITY.tagline,
  headlineLine1: "Belajar Bahasa Jepang,",
  headlineHighlight: "Raih Kerja di Jepang.",
  subheadline:
    "LPK Tsubo membimbing Anda dari nol hingga siap berkarier resmi di Jepang, lengkap dengan pelatihan kerja dan job matching.",
  primaryCtaLabel: "Daftar Free Trial Class",
  primaryCtaAction: "formSiswaBaru" as ActionId,
  secondaryCtaLabel: "Hubungi Admin",
  secondaryCtaAction: "waAdmin1Trial" as ActionId,
  illustrationPath: "/generated/hero-luxury.webp",
  illustrationAlt:
    "Ilustrasi senja mewah gerbang torii merah dan pagoda tradisional berlatar Gunung Fuji, bunga sakura, serta siluet Tokyo",
} as const;

export const TRUST_STATS = [
  {
    value: "4,9 / 5,0",
    label: "Rating Google Maps",
    detail: "Dari 390 ulasan pengunjung",
  },
  {
    value: "8.800+",
    label: "Komunitas Instagram",
    detail: "8.871 followers & 405 unggahan aktif di @tsubojltc",
  },
  {
    value: "LPK & LKP",
    label: "Di bawah PT. Miraibo INC",
    detail: "Lembaga Pelatihan Kerja & Kursus Pelatihan",
  },
  {
    value: "Proses SO",
    label: "Dalam proses akreditasi SO",
    detail: "Tahap verifikasi akreditasi oleh asesor menuju Sending Organization",
  },
] as const;

export const PROGRAMS_SECTION_HEADER = {
  eyebrow: "Program & Layanan",
  title: "Program Utama Tsubo JLTC",
  subtitle:
    "Pilih program pembelajaran bahasa Jepang, Bimbel, atau persiapan karier ke Jepang yang sesuai dengan tujuan Anda.",
} as const;

export interface ProgramItem {
  id: string;
  kanjiAccent: string;
  title: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaAction: ActionId;
  imagePath?: string;
  imageAlt?: string;
}

export const PROGRAMS: ProgramItem[] = [
  {
    id: "kursus-bahasa-jepang",
    kanjiAccent: "あ",
    title: "Kursus Bahasa Jepang",
    description:
      "Pembelajaran bahasa Jepang dari dasar hingga mahir dengan metode interaktif bersama sensei yang mudah dimengerti.",
    highlights: [
      "Materi bertahap dari nol untuk pemula",
      "Nihongo Quiz rutin setiap Minggu, Rabu, dan Sabtu di Instagram",
    ],
    ctaLabel: "Daftar Siswa Baru",
    ctaAction: "formSiswaBaru",
    imagePath: "/generated/program-kursus.webp",
    imageAlt:
      "Ilustrasi karakter anime sensei ramah mengenakan kimono dan hakama di kelas bahasa Jepang",
  },
  {
    id: "bimbel",
    kanjiAccent: "学",
    title: "Bimbel Bahasa Jepang",
    description:
      "Bimbingan belajar terarah dengan formulir pendaftaran khusus untuk memperkuat penguasaan materi bahasa Jepang Anda.",
    highlights: [
      "Pendampingan intensif sesuai kebutuhan belajar",
      "Formulir pendaftaran khusus Bimbel",
    ],
    ctaLabel: "Daftar Bimbel",
    ctaAction: "formBimbel",
    imagePath: "/generated/program-bimbel.webp",
    imageAlt:
      "Ilustrasi karakter anime pelajar bersemangat belajar bahasa Jepang di meja belajar bersama boneka Daruma",
  },
  {
    id: "work-in-japan",
    kanjiAccent: "働",
    title: "Program Work in Japan",
    description:
      "Pelatihan kerja dan persiapan menyeluruh bagi Calon Siswa yang ingin berkarier secara resmi di Jepang.",
    highlights: [
      "Pembekalan bahasa, budaya kerja, dan kesiapan dokumen",
      "Dibimbing langsung oleh tim Tsubo JLTC",
    ],
    ctaLabel: "Konsultasi Program Kerja",
    ctaAction: "waAdmin1Program",
    imagePath: "/generated/program-work-in-japan.webp",
    imageAlt:
      "Ilustrasi profesional muda berjas rapi di peron stasiun Shinkansen dengan latar Tokyo Tower dan bunga sakura",
  },
  {
    id: "job-matching",
    kanjiAccent: "縁",
    title: "Job Matching",
    description:
      "Pendampingan pencocokan profil Calon Siswa dengan peluang kerja yang sesuai di Jepang.",
    highlights: [
      "Pemetaan profil dan kesiapan siswa",
      "Pendampingan terarah hingga tahap seleksi kerja",
    ],
    ctaLabel: "Tanya Peluang Kerja",
    ctaAction: "waAdmin1Program",
    imagePath: "/generated/program-job-matching.webp",
    imageAlt:
      "Ilustrasi kandidat dan mentor berhaori meninjau peta karier bersama origami bangau merah berlatar Gunung Fuji",
  },
];

export const STEPS_SECTION_CONTENT = {
  eyebrow: "Langkah Mudah",
  title: "Alur Pendaftaran & Keberangkatan",
  subtitle:
    "Empat tahapan terarah dari mencoba Free Trial Class hingga siap berangkat berkarier di Jepang.",
  primaryCtaLabel: "Mulai dari Form Siswa Baru",
  primaryCtaAction: "formSiswaBaru" as ActionId,
  secondaryCtaLabel: "Daftar Program Bimbel",
  secondaryCtaAction: "formBimbel" as ActionId,
} as const;

export const REGISTRATION_STEPS = [
  {
    step: 1,
    title: "Ikuti Free Trial Class",
    description:
      "Kenali suasana kelas dan metode pengajaran sensei kami lewat kelas uji coba gratis untuk Calon Siswa baru.",
  },
  {
    step: 2,
    title: "Isi Form Siswa Baru & Konsultasi",
    description:
      "Lengkapi Form Siswa Baru atau Form Bimbel, lalu diskusikan jalur belajar bersama Admin.",
  },
  {
    step: 3,
    title: "Kursus & Pelatihan Intensif",
    description:
      "Pelajari bahasa Jepang dari dasar hingga mahir serta ikuti persiapan kerja secara bertahap.",
  },
  {
    step: 4,
    title: "Job Matching & Persiapan Berangkat",
    description:
      "Ikuti pendampingan pencocokan profil dengan peluang kerja hingga siap berangkat berkarier di Jepang.",
  },
] as const;

export const GALLERY_SECTION_CONTENT = {
  eyebrow: "Suasana & Fasilitas",
  title: "Galeri & Fasilitas Tsubo JLTC",
  subtitle:
    "Ruang belajar nyaman, kegiatan siswa, area parkir luas, serta kunjungan resmi (Official Visits).",
  instagramCtaLabel: "Lihat Dokumentasi Asli di @tsubojltc",
  instagramCtaAction: "instagram" as ActionId,
  placeholderHint:
    "Dokumentasi foto asli dapat dilihat melalui Instagram @tsubojltc",
} as const;

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  isIllustration: boolean;
  badgeText: string;
  imagePath?: string;
  imageAlt?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "room-tour",
    title: "Room Tour",
    subtitle: "Suasana ruang kelas yang nyaman dan kondusif untuk belajar.",
    isIllustration: true,
    badgeText: "Ilustrasi suasana kelas",
    imagePath: "/generated/room-tour.jpg",
    imageAlt: "Ilustrasi ruang kelas bahasa Jepang modern yang rapi dan nyaman",
  },
  {
    id: "our-students",
    title: "Our Students",
    subtitle: "Kebersamaan siswa saat belajar dan berlatih bahasa Jepang.",
    isIllustration: true,
    badgeText: "Ilustrasi kegiatan belajar",
    imagePath: "/generated/our-students.jpg",
    imageAlt: "Ilustrasi kelompok siswa belajar bahasa Jepang bersama",
  },
  {
    id: "parkiran-luas",
    title: "Parkiran Luas",
    subtitle:
      "Area parkir kendaraan yang lega dan nyaman sesuai ulasan pengunjung di Google Maps.",
    isIllustration: false,
    badgeText: "Foto segera hadir",
  },
  {
    id: "official-visits",
    title: "Official Visits & Edufair",
    subtitle:
      "Dokumentasi kunjungan resmi asesor dan partisipasi event pendidikan seperti Edufair Swiss-Belhotel Lampung.",
    isIllustration: false,
    badgeText: "Foto segera hadir",
  },
];

export const FAQ_SECTION_CONTENT = {
  eyebrow: "Tanya Jawab",
  title: "Pertanyaan yang Sering Diajukan (FAQ)",
  subtitle:
    "Jawaban atas pertanyaan yang paling sering ditanyakan Calon Siswa di Google Maps dan Instagram.",
  contactBoxTitle: "Masih punya pertanyaan lain?",
  contactBoxSubtitle:
    "Konsultasikan langsung melalui WhatsApp dengan Admin 1 (Indonesia) atau Admin 2 (Jepang).",
  admin1Label: "Chat Admin 1 (Indonesia)",
  admin1Action: "waAdmin1Biaya" as ActionId,
  admin2Label: "Chat Admin 2 (Jepang)",
  admin2Action: "waAdmin2Umum" as ActionId,
} as const;

export const FAQ_ITEMS = [
  {
    question: "Berapa rincian biaya belajar di Tsubo JLTC?",
    answer:
      "Rincian biaya menyesuaikan program yang Anda pilih (Kursus Bahasa Jepang, Bimbel, atau persiapan Work in Japan). Silakan hubungi Admin melalui WhatsApp untuk mendapatkan informasi biaya terbaru.",
  },
  {
    question: "Bagaimana cara menghubungi Admin Tsubo JLTC?",
    answer:
      "Anda dapat menekan tombol WhatsApp Admin 1 (Indonesia) atau Admin 2 (Jepang) di halaman ini, atau datang langsung ke kantor kami di Jl. Wolter Monginsidi No. 102–195, Bandar Lampung (buka mulai Senin pukul 09.00 WIB).",
  },
  {
    question: "Apakah pemula yang belum bisa bahasa Jepang sama sekali boleh mendaftar?",
    answer:
      "Sangat boleh. Pembelajaran dimulai dari dasar hingga mahir dengan metode interaktif, dan pengajaran sensei kami dikenal mudah dimengerti oleh pemula.",
  },
  {
    question: "Apa itu Free Trial Class dan bagaimana cara ikutnya?",
    answer:
      "Free Trial Class adalah kelas uji coba bahasa Jepang gratis bagi Calon Siswa baru. Anda dapat mendaftar melalui tombol Daftar Free Trial Class (Form Siswa Baru) atau menanyakan jadwal terdekat kepada Admin melalui WhatsApp.",
  },
  {
    question: "Apa perbedaan Kursus Bahasa Jepang, Bimbel, dan Program Work in Japan?",
    answer:
      "Kursus Bahasa Jepang mempelajari bahasa dari dasar hingga mahir; Bimbel memberikan pendampingan belajar tambahan dengan formulir pendaftaran khusus; sedangkan Program Work in Japan dan Job Matching berfokus pada pelatihan kerja serta pencocokan profil siswa dengan peluang kerja di Jepang.",
  },
] as const;

export const FOOTER_CONTENT = {
  socialLinks: [
    { label: "Instagram @tsubojltc", action: "instagram" as ActionId },
    { label: "WA Admin 1 (Indonesia)", action: "waAdmin1Umum" as ActionId },
    { label: "WA Admin 2 (Jepang)", action: "waAdmin2Umum" as ActionId },
    { label: "Linktree Resmi", action: "linktree" as ActionId },
  ],
  mapsCtaLabel: "Buka di Google Maps",
  mapsCtaAction: "googleMaps" as ActionId,
} as const;
