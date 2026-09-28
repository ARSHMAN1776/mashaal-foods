import { Hero } from "@/components/Hero";
import { FavouritesRail } from "@/components/FavouritesRail";
import { MenuPreview } from "@/components/MenuPreview";
import { WhyUs } from "@/components/WhyUs";
import { LocationsSection } from "@/components/LocationsSection";
import { Testimonials } from "@/components/Testimonials";
import { CTABand } from "@/components/CTABand";
import { BrandBanner } from "@/components/BrandBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <FavouritesRail />
      <MenuPreview />
      <WhyUs />
      <LocationsSection compact />
      <Testimonials />
      <CTABand />
      <BrandBanner />
    </>
  );
}
