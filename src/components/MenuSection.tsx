import Image from "next/image";
import { menu } from "@/data/menu";

export function MenuSection() {
  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 lg:py-24 space-y-20">
      {menu.map((category, index) => (
        <div key={category.slug} id={category.slug} className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-8">
            <div className="relative h-20 w-28 sm:h-24 sm:w-36 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="label-tag">
                {String(index + 1).padStart(2, "0")} / {category.items.length} items
              </p>
              <h2 className="font-display text-[34px] sm:text-[42px] leading-[0.95] text-ink">
                {category.name}
              </h2>
              <p className="mt-1 text-[14px] text-ink-muted">{category.tagline}</p>
            </div>
          </div>

          <div className="mt-8 divide-y divide-dashed divide-line">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-6 py-5"
              >
                <div>
                  <h3 className="text-[16px] font-bold text-ink">{item.name}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-muted max-w-md">
                    {item.description}
                  </p>
                </div>
                {item.sizes ? (
                  <div className="flex shrink-0 gap-4 pt-0.5">
                    {item.sizes.map((size) => (
                      <div key={size.label} className="text-center">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-ink-faint">
                          {size.label}
                        </p>
                        <div className="ticket-stamp text-[15px]">
                          <span className="text-[10px] font-bold">Rs</span>
                          {size.price.toLocaleString("en-PK")}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="ticket-stamp text-[17px] shrink-0 pt-0.5">
                    <span className="text-[11px] font-bold">Rs</span>
                    {(item.price ?? 0).toLocaleString("en-PK")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
