import Image from "next/image";

export function TicketCard({
  image,
  eyebrow,
  title,
  description,
  price,
  originalPrice,
  className = "",
}: {
  image: string;
  eyebrow?: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  className?: string;
}) {
  return (
    <div className={`ticket overflow-hidden ${className}`}>
      <span className="ticket-punch" style={{ left: 20 }} />
      <span className="ticket-punch" style={{ right: 20 }} />

      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 320px, 90vw"
          className="object-cover"
        />
        {eyebrow && (
          <span className="absolute top-3 left-3 badge-ember bg-paper/95 backdrop-blur-sm">
            {eyebrow}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display text-[19px] leading-tight text-ink text-balance">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
          {description}
        </p>

        <div className="mt-4 flex items-end justify-between border-t border-dashed border-line pt-4">
          <div className="ticket-stamp text-[20px]">
            <span className="text-[12px] font-bold">Rs</span>
            {price.toLocaleString("en-PK")}
          </div>
          {originalPrice && (
            <span className="font-mono text-[13px] text-ink-faint line-through">
              Rs {originalPrice.toLocaleString("en-PK")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
