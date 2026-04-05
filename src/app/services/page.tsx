import type { Metadata } from "next";
import Link from "next/link";
import { packages, addOns, terms } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Solamada's full bar service starting at $400 for a 4-hour event. Professional bartenders, crafted cocktails, full mobile setup.",
};

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
          Transparent Pricing
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
          Services & Pricing
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          No hidden fees. No surprises. Just a great bar experience for your
          event.
        </p>
      </section>

      {/* Package */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className="bg-white rounded-card border-2 border-gold shadow-card p-8 md:p-12 relative"
            >
              {/* Badge */}
              <span className="absolute -top-4 left-8 inline-block bg-gold text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-pill">
                Our Package
              </span>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-display text-3xl font-bold text-black">
                    {pkg.name}
                  </h2>
                  <p className="text-warm-gray mt-2 max-w-lg">{pkg.description}</p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="font-mono text-4xl font-medium text-gold">
                    ${pkg.price}
                  </span>
                  <p className="text-sm text-warm-gray mt-1">
                    4-hour event · up to 35 guests
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-gold font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-black text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-pill bg-red px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-white shadow-btn transition-all duration-300 hover:bg-gold hover:shadow-btn-hover hover:-translate-y-0.5"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-pill border-2 border-black px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white"
                >
                  View Cocktail Menu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-warm-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-black mb-2">
            Add-ons
          </h2>
          <p className="text-warm-gray mb-8">
            Scale your service as your guest list grows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="bg-white rounded-card p-6 shadow-card border border-light-gray flex items-center justify-between"
              >
                <span className="font-medium text-black">{addon.name}</span>
                <span className="text-right">
                  <span className="font-mono text-xl font-medium text-gold block">
                    ${addon.price}
                  </span>
                  <span className="text-xs text-warm-gray">{addon.unit}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-warm-gray mt-4">
            * A travel/delivery fee may apply depending on your event location.
          </p>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-black mb-6">
            Good to Know
          </h2>
          <ul className="space-y-4">
            {terms.map((term, i) => (
              <li key={i} className="flex items-start gap-3 text-warm-gray text-sm leading-relaxed">
                <span className="font-mono text-gold font-medium shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {term}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Plan Your Bar Experience
          </h2>
          <p className="text-white/70 mb-8">
            Book a free 30-minute consultation and we&apos;ll walk you through
            everything — cocktail selection, logistics, and more.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-pill bg-gold px-8 py-4 font-body text-base font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light hover:shadow-btn-hover hover:-translate-y-0.5"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
