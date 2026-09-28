import Image from "next/image";
import { menu } from "@/data/menu";
import { siteConfig, telLink, whatsappLink } from "@/config/site";

export function PremiumMenu() {
  return (
    <div className="bg-char text-paper">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20 lg:py-28">
        {/* Crest */}
        <div className="flex flex-col items-center text-center">
          <span className="relative flex h-20 w-20 overflow-hidden rounded-full border border-gold/40">
            <Image src="/brand/logo-v2.jpg" alt="Mashaal Food" fill sizes="80px" className="object-cover" />
          </span>
          <p className="mt-5 font-display text-[15px] tracking-[0.3em] text-gold-light uppercase">
            Mashaal Food
          </p>
          <p className="mt-1 text-[11px] tracking-[0.2em] text-paper/45 uppercase">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 h-px w-16 bg-gold/40" />
          <h1 className="mt-8 font-display text-[42px] sm:text-[54px] leading-[0.95] text-paper">
            The Menu Card
          </h1>
          <p className="mt-3 max-w-md text-[13px] text-paper/50">
            Every section, every price — presented the way it reads on our
            counter card.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-16 space-y-16">
          {menu.map((category) => (
            <div key={category.slug}>
              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-gold/25" />
                <h2 className="font-display text-[13px] tracking-[0.28em] uppercase text-gold-light shrink-0">
                  {category.name}
                </h2>
                <span className="h-px flex-1 bg-gold/25" />
              </div>

              <div className="mt-8 space-y-5">
                {category.items.map((item) => (
                  <div key={item.name}>
                    {item.sizes ? (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[15px] font-semibold text-paper">{item.name}</span>
                          <span className="flex-1 border-b border-dotted border-paper/20 translate-y-[-3px]" />
                        </div>
                        <p className="text-[12px] text-paper/45">{item.description}</p>
                        <div className="mt-1.5 flex gap-6">
                          {item.sizes.map((size) => (
                            <span key={size.label} className="font-mono text-[12px] text-gold-light">
                              {size.label} <span className="text-paper/70">Rs {size.price.toLocaleString("en-PK")}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[15px] font-semibold text-paper">{item.name}</span>
                          <span className="flex-1 border-b border-dotted border-paper/20 translate-y-[-3px]" />
                          <span className="font-mono text-[15px] text-gold-light shrink-0">
                            Rs {(item.price ?? 0).toLocaleString("en-PK")}
                          </span>
                        </div>
                        <p className="text-[12px] text-paper/45">{item.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center text-center border-t border-gold/15 pt-10">
          <p className="text-[13px] text-paper/60">
            Total Pump, Khanpur Road, Near Toyota Showroom, Rahim Yar Khan
          </p>
          <p className="mt-1 font-mono text-[13px] text-gold-light">
            <a href={telLink()}>{siteConfig.phoneNumber}</a>
          </p>
          <a
            href={whatsappLink("Hi Mashaal Food! I'd like to place an order from the premium menu.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-[12px] font-bold uppercase tracking-wide text-gold-light transition-colors hover:bg-gold/10"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
