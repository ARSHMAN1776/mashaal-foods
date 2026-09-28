"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: easeOut },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #241a12 0, #241a12 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-14 pb-20 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:items-start lg:gap-10">
          {/* Copy */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="badge-ember">Now Open in Rahim Yar Khan · Lahore Coming Soon</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-gold"
            >
              A Premium Taste in Rahim Yar Khan
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-3 font-display text-[56px] sm:text-[76px] leading-[0.9] text-ink text-balance"
            >
              Fired fresh.
              <br />
              <span className="text-ember">Priced fair.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted"
            >
              Mashaal Food serves fresh pizza, zingers, wings, rolls and
              shawarma from Total Pump, Khanpur Road, RYK — big flavour,
              honest prices, backed by Mashaal Group.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link href="/menu" className="btn-primary">
                View Full Menu
              </Link>
              <Link href="/locations" className="btn-outline">
                Find a Branch
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                ["3", "Menu Sections"],
                ["25+", "Menu Items"],
                ["Rs 90", "Starting Price"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="font-display text-[26px] text-ink">{stat}</p>
                  <p className="text-[11px] uppercase tracking-wide text-ink-faint">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-square overflow-hidden rounded-[28px] border-4 border-paper shadow-[0_30px_70px_-20px_rgba(36,26,18,0.45)] rotate-2">
              <Image
                src="/images/hero-burger.jpg"
                alt="Flame-grilled Mashaal Food burger"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
            </div>

            {/* Pinned ticket tag */}
            <motion.div
              initial={{ opacity: 0, y: 10, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="ticket absolute -bottom-8 -left-6 w-[190px] p-4 rotate-6"
            >
              <span className="ticket-punch" style={{ left: 16 }} />
              <span className="ticket-punch" style={{ right: 16 }} />
              <p className="label-tag">No. 01 Favourite</p>
              <p className="mt-1 font-display text-[16px] leading-tight text-ink">
                Tower Zinger
              </p>
              <p className="mt-2 ticket-stamp text-[20px]">
                <span className="text-[11px] font-bold">Rs</span>450
              </p>
            </motion.div>

            <span className="animate-ember-glow absolute -top-6 -right-6 h-24 w-24 rounded-full bg-ember/30 blur-2xl" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
