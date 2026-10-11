import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LocationsSection } from "@/components/LocationsSection";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Locations — Mashaal Food",
  description:
    "Find Mashaal Food in Rahim Yar Khan (Khanpur Road) and Lahore (Raiwind). Hours, directions, phone and WhatsApp for each branch.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Where To Find Us"
        title="Two Branches. Both Open."
        description="Rahim Yar Khan at Total Pump, Khanpur Road, and Lahore at Mashaal Petroleum, Raiwind — call or WhatsApp the branch nearest you."
      />
      <LocationsSection compact />
      <CTABand />
    </>
  );
}
