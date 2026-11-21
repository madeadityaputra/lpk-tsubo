import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { HERO_CONTENT, SITE_IDENTITY } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["600", "700", "800"],
  display: "swap",
});

const SEO_TITLE = `${SITE_IDENTITY.officialName} (${SITE_IDENTITY.shortName}) | Kursus Bahasa Jepang Bandar Lampung & LPK Lampung`;
const SEO_DESCRIPTION = `${SITE_IDENTITY.tagline}. Kursus Bahasa Jepang Bandar Lampung, Bimbel, Program Work in Japan, dan Job Matching di LPK Lampung (${SITE_IDENTITY.legalEntity}). Daftar Free Trial Class sekarang.`;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
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
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
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
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [HERO_CONTENT.illustrationPath],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B2A4A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
