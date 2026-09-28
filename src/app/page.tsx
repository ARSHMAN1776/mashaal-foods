import { Hero } from "@/components/Hero";
import { FavouritesRail } from "@/components/FavouritesRail";
import { MenuPreview } from "@/components/MenuPreview";
import { HowToOrder } from "@/components/HowToOrder";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { BrandBanner } from "@/components/BrandBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <FavouritesRail />
      <MenuPreview />
      <HowToOrder />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTABand />
      <BrandBanner />
    </>
  );
}
