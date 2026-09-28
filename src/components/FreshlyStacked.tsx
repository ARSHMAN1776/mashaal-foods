"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { SectionLabel } from "@/components/SectionLabel";

export function FreshlyStacked() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    // Some browsers only allow play() once the tab is visible / data is ready.
    document.addEventListener("visibilitychange", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    return () => {
      document.removeEventListener("visibilitychange", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-char py-24 lg:py-32">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #ea4b1f 0, #ea4b1f 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
        <div>
          <SectionLabel dark>Made Fresh, Every Order</SectionLabel>
          <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-paper text-balance">
            Built Right In Front Of You.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/60">
            No warming trays, no pre-stacked shortcuts — every order is built
            from scratch on the line, so what reaches you is exactly what
            just came off the grill.
          </p>
        </div>

        <div className="relative flex justify-center">
          <motion.span
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/30 blur-[90px]"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[620px]"
          >
            <video
              ref={videoRef}
              className="w-full h-auto"
              src="/video/kitchen-loop-alpha.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Mashaal Food burger, stacked and finished"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
