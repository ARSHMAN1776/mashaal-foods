import Image from "next/image";
import { locations } from "@/data/menu";
import { SectionLabel } from "@/components/SectionLabel";
import { telLink } from "@/config/site";

export function LocationsSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {!compact && (
          <div className="mb-12">
            <SectionLabel>Where To Find Us</SectionLabel>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-ink text-balance">
              One Standard, City By City.
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.city} className="plate-card overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-[18px]">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 badge-ember bg-paper/95">
                  {location.status}
                </span>
              </div>
              <div className="p-7">
                <p className="label-tag">{location.city}</p>
                <h3 className="font-display text-[26px] leading-tight text-ink mt-1">
                  {location.name}
                </h3>
                <div className="mt-4 space-y-2 text-[14px] text-ink-muted">
                  <p>{location.address}</p>
                  <p>{location.hours}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-[12px] px-5 py-2.5"
                  >
                    Get Directions
                  </a>
                  <a href={telLink()} className="btn-primary text-[12px] px-5 py-2.5">
                    Call Branch
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
