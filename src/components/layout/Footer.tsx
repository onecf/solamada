import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Now" },
];

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-6 text-white/60">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/images/logos/solamada-logo-blanco-sol.png"
              alt="Solamada"
              width={120}
              height={120}
              className="h-20 w-auto"
            />
            <p className="text-sm text-center md:text-left max-w-xs leading-relaxed">
              A curated mobile bartending experience. Crafted cocktails for
              unforgettable celebrations.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-body text-xs font-bold uppercase tracking-widest text-white mb-1">
              Navigate
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-body text-xs font-bold uppercase tracking-widest text-white mb-1">
              Get in Touch
            </h4>
            <a
              href="https://instagram.com/solamada.bar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-gold transition-colors"
            >
              @solamada.bar
            </a>
            <a
              href="mailto:hello@solamada.com"
              className="text-sm hover:text-gold transition-colors"
            >
              hello@solamada.com
            </a>
            <a
              href="tel:7865851769"
              className="text-sm hover:text-gold transition-colors"
            >
              (786) 585-1769
            </a>
            <a
              href="tel:7862120577"
              className="text-sm hover:text-gold transition-colors"
            >
              (786) 212-0577
            </a>
            <Link
              href="/book"
              className="mt-2 inline-flex items-center justify-center rounded-pill bg-red px-5 py-2.5 font-body text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-gold"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Solamada. All rights reserved.
          </p>
          <p>Miami, FL &middot; TABC Certified</p>
        </div>
      </div>
    </footer>
  );
}
