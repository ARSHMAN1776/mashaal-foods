import { SectionLabel } from "@/components/SectionLabel";

const quotes = [
  {
    quote:
      "Tower Zinger is stacked properly, not just a sad single fillet in a big box. First fast-food burger near Khanpur Road that's earned a repeat order from me.",
    name: "Hamza R.",
    city: "Rahim Yar Khan",
  },
  {
    quote:
      "Ordered the Mashaal Special Pizza for a house get-together — arrived hot, loaded exactly as pictured, and the price didn't creep up with a dozen 'extra charges' like usual.",
    name: "Ayesha K.",
    city: "Rahim Yar Khan",
  },
  {
    quote:
      "Shawarma Special is genuinely the best value wrap near Total Pump right now. Fries are always fresh-cut, not the soggy kind.",
    name: "Bilal S.",
    city: "Rahim Yar Khan",
  },
];

export function Testimonials() {
  return (
    <section className="bg-paper-2 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>From The Counter</SectionLabel>
        <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-ink text-balance">
          What Punjab Is Saying
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="ticket p-6">
              <span className="ticket-punch" style={{ left: 20 }} />
              <span className="ticket-punch" style={{ right: 20 }} />
              <p className="text-[15px] leading-relaxed text-ink text-balance">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-dashed border-line font-mono text-[12px] text-ink-muted">
                {q.name} &middot; {q.city}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
