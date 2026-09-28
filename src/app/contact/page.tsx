import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { LocationsSection } from "@/components/LocationsSection";
import { WhatsAppInline } from "@/components/WhatsAppButton";
import { siteConfig, telLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact — Mashaal Food",
  description:
    "Get in touch with Mashaal Food for orders, feedback or franchise enquiries in Lahore and Rahim Yar Khan.",
};

const quickMessages = [
  { label: "Place an Order", message: "Hi Mashaal Food! I'd like to place an order." },
  { label: "Share Feedback", message: "Hi Mashaal Food, I'd like to share some feedback about my recent order." },
  { label: "Franchise Enquiry", message: "Hi Mashaal Food, I'm interested in franchise opportunities." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Order, Ask, Or Just Say Hi."
        description="Fastest way to reach us is WhatsApp — most orders and questions get answered within minutes during open hours."
      />

      <section className="bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <SectionLabel>Reach Us Directly</SectionLabel>
            <h2 className="font-display text-[30px] sm:text-[36px] leading-[1] text-ink text-balance">
              Talk to the counter, not a call centre.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] text-ink-muted">
              <p>
                <span className="font-bold text-ink">Phone: </span>
                <a href={telLink()} className="hover:text-ember transition-colors">
                  {siteConfig.phoneNumber}
                </a>
              </p>
              <p>
                <span className="font-bold text-ink">Hours: </span>
                Daily, 12:00 PM – 2:00 AM
              </p>
              <p>
                <span className="font-bold text-ink">Branches: </span>
                Total Pump, Khanpur Road, RYK (open) &middot; Raiwind Road, Lahore (opening soon)
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>Message Us on WhatsApp</SectionLabel>
            <h2 className="font-display text-[30px] sm:text-[36px] leading-[1] text-ink text-balance">
              Pick a reason, we&rsquo;ll take it from there.
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              {quickMessages.map((q) => (
                <WhatsAppInline
                  key={q.label}
                  message={q.message}
                  label={q.label}
                  className="w-full justify-center"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <LocationsSection />
    </>
  );
}
