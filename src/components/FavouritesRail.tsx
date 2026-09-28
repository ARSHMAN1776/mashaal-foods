import Link from "next/link";
import { favourites } from "@/data/menu";
import { SectionLabel } from "@/components/SectionLabel";
import { TicketCard } from "@/components/TicketCard";

export function FavouritesRail() {
  const loop = [...favourites, ...favourites];

  return (
    <section className="bg-paper-2 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-end justify-between flex-wrap gap-4">
        <div>
          <SectionLabel>Customer Favourites</SectionLabel>
          <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-ink text-balance">
            What People Order Most
          </h2>
        </div>
        <Link href="/menu#favourites" className="btn-outline hidden sm:inline-flex">
          See Full Menu
        </Link>
      </div>

      <div className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-rail gap-5 px-6">
          {loop.map((item, i) => (
            <TicketCard
              key={`${item.number}-${i}`}
              image={item.image}
              eyebrow={`No. ${String(item.number).padStart(2, "0")}`}
              title={item.name}
              description={item.description}
              price={item.price}
              className="w-[270px] shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
