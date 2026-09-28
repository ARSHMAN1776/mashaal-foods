import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { MenuSection } from "@/components/MenuSection";
import { FavouritesGrid } from "@/components/FavouritesGrid";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Menu — Mashaal Food",
  description:
    "Pizza, fast foods, shawarma and burgers — full menu and prices from Mashaal Food, Rahim Yar Khan and Lahore.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Full Menu"
        title="Every Item. Every Price."
        description="No hidden service charges, no vague 'market price' — every ticket shows exactly what you'll pay."
      />
      <FavouritesGrid />
      <MenuSection />
      <section className="bg-paper py-14 text-center">
        <p className="text-[14px] text-ink-muted">Want the full card, printed-menu style?</p>
        <Link href="/premium-menu" className="btn-outline mt-4 inline-flex">
          View The Premium Menu Card
        </Link>
      </section>
      <CTABand />
    </>
  );
}
