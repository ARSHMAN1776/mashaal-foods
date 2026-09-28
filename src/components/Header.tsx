"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig, whatsappLink } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-line"
          : "bg-paper border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line">
            <Image src="/brand/logo-v2.jpg" alt="Mashaal Food logo" fill sizes="44px" className="object-cover" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[20px] tracking-tight text-ink">
              Mashaal Food
            </span>
            <span className="text-[9px] tracking-[0.24em] uppercase font-bold text-ember">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-[13px] font-bold uppercase tracking-wide py-1.5 transition-colors duration-200 ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-full bg-ember transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex">
          <a
            href={whatsappLink("Hi Mashaal Food! I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[12px] px-5 py-2.5"
          >
            Order on WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden cursor-pointer"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-paper/98 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[14px] font-bold uppercase tracking-wide text-ink-muted border-b border-line last:border-0 hover:text-ember transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Hi Mashaal Food! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[12px] px-5 py-2.5 mt-4 justify-center"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
