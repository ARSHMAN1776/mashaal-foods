import { favourites } from "@/data/menu";
import { SectionLabel } from "@/components/SectionLabel";
import { TicketCard } from "@/components/TicketCard";

export function FavouritesGrid() {
  return (
    <section id="favourites" className="scroll-mt-24 bg-paper-2 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionLabel>Customer Favourites</SectionLabel>
        <h2 className="font-display text-[34px] sm:text-[42px] leading-[0.95] text-ink text-balance">
          What People Order Most
        </h2>
        <p className="mt-3 max-w-lg text-[14px] text-ink-muted">
          No invented discounts — just the five items that leave the kitchen fastest.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((item) => (
            <TicketCard
              key={item.number}
              image={item.image}
              eyebrow={`No. ${String(item.number).padStart(2, "0")}`}
              title={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
