import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LocationsSection } from "@/components/LocationsSection";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Locations — Mashaal Food",
  description:
    "Find Mashaal Food in Rahim Yar Khan (Khanpur Road) and Lahore (Raiwind Road). Hours, directions and contact details.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Where To Find Us"
        title="Open in RYK. Lahore Next."
        description="Rahim Yar Khan is live at Total Pump, Khanpur Road — Lahore opens next, with more of Punjab on the way."
      />
      <LocationsSection compact />
      <CTABand />
    </>
  );
}
