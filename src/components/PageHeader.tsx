import { SectionLabel } from "@/components/SectionLabel";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative bg-char text-paper overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #ea4b1f 0, #ea4b1f 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16">
        <SectionLabel dark>{eyebrow}</SectionLabel>
        <h1 className="font-display text-[44px] sm:text-[64px] leading-[0.95] text-paper text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/65">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
