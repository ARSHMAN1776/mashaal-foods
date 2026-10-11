import Image from "next/image";
import Link from "next/link";
import { telLink } from "@/config/site";
import { locations } from "@/data/menu";

const footerLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/premium-menu", label: "Premium Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-char text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line-dark">
                <Image src="/brand/logo-v2.jpg" alt="Mashaal Food logo" fill sizes="40px" className="object-cover" />
              </span>
              <span className="font-display text-[24px] tracking-tight text-paper">
                Mashaal Food
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-paper/60">
              Pizza, zingers, wings, rolls and shawarma — fresh, hygienic and
              delicious, serving Rahim Yar Khan and Lahore.
            </p>
            <p className="mt-5 label-tag-dark">A Mashaal Group Company</p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-paper/40 mb-4">
              Explore
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-paper/70 hover:text-ember-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-paper/40 mb-4">
              Get In Touch
            </p>
            <ul className="space-y-4 text-[14px] text-paper/70">
              {locations.map((location) => (
                <li key={location.city}>
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-paper/90">
                    {location.city}
                  </p>
                  <a href={telLink(location.phone)} className="mt-1 block hover:text-ember-light transition-colors">
                    {location.phone}
                  </a>
                  <p className="mt-1 text-[13px] text-paper/50">{location.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-dark my-10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-paper/40">
            © {new Date().getFullYear()} Mashaal Food. Part of Mashaal Group.
          </p>
          <p className="text-[12px] text-paper/40">
            Energy · Logistics · Food · Mobility
          </p>
        </div>
      </div>
    </footer>
  );
}
