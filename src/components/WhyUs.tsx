import { SectionLabel } from "@/components/SectionLabel";

const points = [
  {
    title: "Fresh, Never Frozen-in-Waiting",
    description:
      "Patties, fillets and dough are prepped same-day. Nothing sits under a heat lamp waiting for an order.",
  },
  {
    title: "Fired in Under 8 Minutes",
    description:
      "From order to tray — our kitchen line is built for speed without skipping a step.",
  },
  {
    title: "Honest, Fixed Pricing",
    description:
      "No surprise service charges. The price on the ticket is the price you pay, every time.",
  },
  {
    title: "Backed by Mashaal Group",
    description:
      "The same disciplined sourcing and quality governance behind Mashaal Petroleum now runs our kitchens.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-char text-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel dark>Why Mashaal Food</SectionLabel>
        <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-paper text-balance max-w-2xl">
          Built the way a kitchen should be run.
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <div key={point.title} className="relative pl-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-gold/50">
                <span className="font-display text-[20px] text-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-paper">
                {point.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-paper/60">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
