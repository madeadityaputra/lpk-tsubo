import { FaqSection } from "@/components/FaqSection";
import { FooterAndMap } from "@/components/FooterAndMap";
import { GallerySection } from "@/components/GallerySection";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroSection } from "@/components/HeroSection";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ProgramsSection } from "@/components/ProgramsSection";
import { StepsSection } from "@/components/StepsSection";
import { TrustBarSection } from "@/components/TrustBarSection";
import { buildLocalBusinessJsonLd } from "@/lib/content";

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd();

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <HeaderNav />

      <main className="flex-1">
        <HeroSection />
        <TrustBarSection />
        <ProgramsSection />
        <StepsSection />
        <GallerySection />
        <FaqSection />
      </main>

      <FooterAndMap />
      <MobileStickyBar />
    </div>
  );
}
