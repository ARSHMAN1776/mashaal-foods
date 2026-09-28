import Image from "next/image";
import Link from "next/link";
import { menu, itemFromPrice } from "@/data/menu";
import { SectionLabel } from "@/components/SectionLabel";

export function MenuPreview() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <SectionLabel>The Menu Board</SectionLabel>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-ink text-balance">
              Three Sections.
              <br />
              One Standard.
            </h2>
          </div>
          <Link href="/menu" className="btn-outline hidden sm:inline-flex">
            View Full Menu
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((category) => {
            const from = Math.min(...category.items.map(itemFromPrice));
            return (
              <Link
                key={category.slug}
                href={`/menu#${category.slug}`}
                className="plate-card group overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[18px]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 380px, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-char/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 font-display text-[22px] text-paper">
                    {category.name}
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <p className="text-[13px] text-ink-muted">{category.tagline}</p>
                  <span className="ticket-stamp text-[14px] shrink-0 ml-3">
                    From Rs {from}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/menu" className="btn-outline w-full justify-center">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
