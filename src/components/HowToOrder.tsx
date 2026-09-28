import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppInline } from "@/components/WhatsAppButton";

const steps = [
  {
    title: "Browse The Menu",
    description:
      "Pick your favourites from pizza, zingers, wings, rolls or shawarma — every price shown upfront.",
  },
  {
    title: "Message Us On WhatsApp",
    description:
      "Send your order and address. We confirm the price, timing, and whether it's pickup or delivery.",
  },
  {
    title: "We Fire It Fresh",
    description:
      "Hot off the line — ready for pickup at Total Pump, Khanpur Road, or out for delivery nearby.",
  },
];

export function HowToOrder() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <SectionLabel>How To Order</SectionLabel>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-ink text-balance">
              Three Steps To Hot Food.
            </h2>
          </div>
          <WhatsAppInline
            message="Hi Mashaal Food! I'd like to place an order."
            label="Start an Order"
            className="hidden sm:inline-flex"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-px"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, var(--line-strong) 8%, var(--line-strong) 92%, transparent)",
            }}
            aria-hidden
          />
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-paper border-2 border-ember">
                <span className="ticket-stamp text-[16px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[20px] text-ink leading-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <WhatsAppInline
            message="Hi Mashaal Food! I'd like to place an order."
            label="Start an Order"
            className="w-full justify-center"
          />
        </div>
      </div>
    </section>
  );
}
