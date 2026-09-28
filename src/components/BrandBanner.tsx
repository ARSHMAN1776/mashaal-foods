import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";

export function BrandBanner() {
  return (
    <section className="relative overflow-hidden bg-char py-20 lg:py-24">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #ea4b1f 0, #ea4b1f 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <SectionLabel dark>Same Flame, Every Visit</SectionLabel>
        <h2 className="font-display text-[32px] sm:text-[42px] leading-[1] text-paper text-balance">
          The Flavours Behind The Flame.
        </h2>

        <div className="mt-10 relative aspect-[1056/349] rounded-[20px] overflow-hidden border border-gold/25 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.7)]">
          <Image
            src="/brand/signage-wall-v3.webp"
            alt="Mashaal Food — Arabic Shawarma, Aabrai Wrap, Zinger Burger, Fries, Wings"
            fill
            sizes="(min-width: 1024px) 1100px, 95vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
