import Link from "next/link";
import { WhatsAppInline } from "@/components/WhatsAppButton";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-char text-paper py-20 lg:py-24">
      <span
        className="animate-ember-glow absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/20 blur-[100px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-[36px] sm:text-[50px] leading-[0.95] text-paper text-balance">
          Hungry? The nearest Mashaal Food is closer than you think.
        </h2>
        <p className="mt-4 text-[15px] text-paper/60 max-w-lg mx-auto">
          Order ahead on WhatsApp or walk into Total Pump, Khanpur Road, RYK —
          Lahore opens next.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/menu" className="btn-primary">
            Browse The Menu
          </Link>
          <WhatsAppInline
            message="Hi Mashaal Food! I'd like to place an order."
            label="Order on WhatsApp"
            className="!border-paper/30 !bg-transparent !text-paper hover:!bg-ember hover:!border-ember hover:!text-paper"
          />
        </div>
      </div>
    </section>
  );
}
