import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About — Mashaal Food",
  description:
    "Mashaal Food is the food and consumer vertical of Mashaal Group, bringing disciplined sourcing and honest pricing to fast food in Rahim Yar Khan and Lahore.",
};

const verticals = [
  {
    name: "Mashaal Petroleum",
    sector: "Energy & Fuel Forecourts",
    detail: "Total PARCO, Khanpur Road, RYK · PSO, Raiwind Road, Lahore",
    status: "Active",
  },
  {
    name: "Mashwani Shipping L.L.C.",
    sector: "Global Logistics & Freight",
    detail: "Dubai, UAE · Authorized NVOCC, founded 2017",
    status: "Active",
  },
  {
    name: "Mashaal Food",
    sector: "Food & Consumer Products",
    detail: "Total Pump, Khanpur Road, RYK · Lahore opening next",
    status: "You're Here",
  },
  {
    name: "Mashaal Rent A Car",
    sector: "Mobility & Transportation",
    detail: "Corporate fleet and executive transit across Punjab",
    status: "Active",
  },
];

const pillars = [
  {
    title: "Verified Sourcing",
    description:
      "Meat, produce and dairy are sourced from vetted suppliers and checked on arrival — the same discipline Mashaal Group applies to its fuel forecourts, now applied to a kitchen.",
  },
  {
    title: "Fixed, Transparent Pricing",
    description:
      "Every price on our board is the price at the till. No last-minute service charges, no unposted price bumps.",
  },
  {
    title: "One Outlet First, Done Right",
    description:
      "Rather than launching thin across many cities, we opened deep at Total Pump, Khanpur Road, RYK — getting the kitchen and supply chain right before Lahore opens next.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A New Name in Fast Food, Backed By An Old Standard."
        description="Mashaal Food is the food and consumer vertical of Mashaal Group — the same holding company behind Mashaal Petroleum's forecourts across Punjab."
      />

      <section className="bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionLabel>Why We Started</SectionLabel>
            <h2 className="font-display text-[32px] sm:text-[40px] leading-[1] text-ink text-balance">
              Fast food shouldn&rsquo;t mean fine print.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-muted max-w-lg">
              <p>
                Too many menus in Punjab hide their real cost behind service
                charges, shrinking portions, or ingredients that sat out too
                long before your order was called. We built Mashaal Food to
                fix that — one outlet, done properly, before the next.
              </p>
              <p>
                As part of Mashaal Group, we inherit a parent culture built on
                &ldquo;verified physical reliability over superficial market
                hype&rdquo; — the same standard that keeps Mashaal
                Petroleum&rsquo;s forecourts refinery-sealed and calibrated.
                Here, that standard shows up as fresh ingredients, honest
                menu prices, and a kitchen line that doesn&rsquo;t cut corners
                to hit a speed target.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border-4 border-paper shadow-[0_30px_70px_-20px_rgba(36,26,18,0.35)]">
            <Image
              src="/brand/interior.jpg"
              alt="Mashaal Food outlet interior"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-char py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel dark>Our Signage</SectionLabel>
          <h2 className="font-display text-[32px] sm:text-[40px] leading-[1] text-paper text-balance max-w-xl">
            Look for the flame on gold and black.
          </h2>
          <p className="mt-4 max-w-lg text-[14px] text-paper/60">
            The same mark on our storefront, our packaging and our menu board
            — so you know it&rsquo;s us before you&rsquo;re close enough to smell the grill.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[1238/489] rounded-[18px] overflow-hidden border border-line-dark">
              <Image
                src="/brand/signage-backlight-v2.jpg"
                alt="Mashaal Food backlit storefront signage"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[1056/349] rounded-[18px] overflow-hidden border border-line-dark">
              <Image
                src="/brand/signage-wall-v3.webp"
                alt="Mashaal Food wall signage with menu highlights"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>How We Operate</SectionLabel>
          <h2 className="font-display text-[32px] sm:text-[40px] leading-[1] text-ink text-balance max-w-xl">
            Three commitments that don&rsquo;t flex per branch.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="ticket p-6">
                <span className="ticket-punch" style={{ left: 20 }} />
                <span className="ticket-punch" style={{ right: 20 }} />
                <p className="ticket-stamp text-[15px]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-[19px] text-ink leading-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>One Holding, Four Verticals</SectionLabel>
          <h2 className="font-display text-[32px] sm:text-[40px] leading-[1] text-ink text-balance max-w-xl">
            Part of Mashaal Group.
          </h2>
          <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-ink-muted">
            Mashaal Group is a holding company built across energy, logistics,
            food and mobility — each vertical run independently, backed by
            one standard of capital discipline and governance.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {verticals.map((v) => (
              <div
                key={v.name}
                className={`plate-card p-5 ${v.status === "You're Here" ? "border-ember/40" : ""}`}
              >
                <span
                  className={
                    v.status === "You're Here"
                      ? "badge-ember"
                      : v.status === "Active"
                        ? "inline-flex items-center rounded-full border border-line px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink-muted"
                        : "inline-flex items-center rounded-full border border-line px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink-faint"
                  }
                >
                  {v.status}
                </span>
                <h3 className="mt-4 font-display text-[19px] leading-tight text-ink">
                  {v.name}
                </h3>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-wide text-ember">
                  {v.sector}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                  {v.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
