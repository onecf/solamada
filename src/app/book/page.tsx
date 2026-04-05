import type { Metadata } from "next";
import { cocktails } from "@/lib/cocktails";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a free 30-minute consultation with Solamada to plan your event's cocktail bar experience.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const menuParam = params.menu;
  const preSelectedSlugs =
    typeof menuParam === "string"
      ? menuParam.split(",").filter(Boolean)
      : [];

  const preSelected = preSelectedSlugs
    .map((slug) => cocktails.find((c) => c.slug === slug))
    .filter(Boolean) as typeof cocktails;

  const includedDrinks = preSelected.slice(0, 4);
  const extraDrinks = preSelected.slice(4);

  return (
    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
          Free &middot; 30 Minutes &middot; No Credit Card Required
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
          Book a Consultation
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          Let&apos;s talk about your event. We&apos;ll walk you through cocktail
          selection, logistics, and answer any questions — completely free.
        </p>
      </section>

      {/* Pre-selected cocktails banner */}
      {preSelected.length > 0 && (
        <section className="bg-gold/10 border-b border-gold/30 py-6 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-gold mb-3">
              Your pre-selected menu ({preSelected.length} cocktail{preSelected.length !== 1 ? "s" : ""})
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {includedDrinks.map((c) => (
                <span
                  key={c.slug}
                  className="inline-flex items-center gap-1.5 bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-pill"
                >
                  {c.emoji} {c.name}
                  <span className="text-white/70 font-normal">· Included</span>
                </span>
              ))}
              {extraDrinks.map((c) => (
                <span
                  key={c.slug}
                  className="inline-flex items-center gap-1.5 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-pill"
                >
                  {c.emoji} {c.name}
                  <span className="text-white/60 font-normal">· Extra (pricing TBD)</span>
                </span>
              ))}
            </div>
            <p className="text-sm text-warm-gray">
              You can update or change these selections during the consultation — this is just a starting point.
            </p>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* What to expect */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-black mb-6">
                What to Expect
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    icon: "📅",
                    title: "30-Minute Call",
                    desc: "A quick, focused conversation about your event needs.",
                  },
                  {
                    icon: "🍹",
                    title: "Cocktail Selection",
                    desc: "We'll guide you through our menu and help pick the right drinks.",
                  },
                  {
                    icon: "📋",
                    title: "Custom Proposal",
                    desc: "You'll receive a written proposal within 24 hours.",
                  },
                  {
                    icon: "✅",
                    title: "No Obligation",
                    desc: "The consultation is completely free. No credit card required.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-black text-sm">{item.title}</p>
                      <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-warm-white rounded-card p-6 border border-light-gray">
              <h3 className="font-display text-lg font-bold text-black mb-3">
                Prefer to reach out directly?
              </h3>
              <div className="space-y-2">
                <a
                  href="https://instagram.com/solamada.bar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-warm-gray hover:text-red transition-colors"
                >
                  <span>📸</span> @solamada.bar
                </a>
                <a
                  href="mailto:hello@solamada.com"
                  className="flex items-center gap-2 text-sm text-warm-gray hover:text-red transition-colors"
                >
                  <span>✉️</span> hello@solamada.com
                </a>
                <a
                  href="tel:7865851769"
                  className="flex items-center gap-2 text-sm text-warm-gray hover:text-red transition-colors"
                >
                  <span>📞</span> (786) 585-1769
                </a>
                <a
                  href="tel:7862120577"
                  className="flex items-center gap-2 text-sm text-warm-gray hover:text-red transition-colors"
                >
                  <span>📞</span> (786) 212-0577
                </a>
              </div>
            </div>
          </div>

          {/* Calendar embed placeholder */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-card border border-light-gray shadow-card overflow-hidden min-h-[600px] flex flex-col items-center justify-center gap-6 p-8 text-center">
              <div className="text-5xl">📆</div>
              <div>
                <h3 className="font-display text-2xl font-bold text-black mb-2">
                  Calendar Coming Soon
                </h3>
                <p className="text-warm-gray max-w-sm leading-relaxed">
                  Our online booking calendar is being set up. In the meantime,
                  reach out directly and we&apos;ll schedule a call within 24 hours.
                  {preSelected.length > 0 && (
                    <span className="block mt-2 text-sm">
                      Mention your pre-selected cocktails when you reach out!
                    </span>
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href="https://instagram.com/solamada.bar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-pill bg-red px-6 py-3 font-body text-sm font-bold uppercase tracking-widest text-white shadow-btn transition-all duration-300 hover:bg-gold hover:shadow-btn-hover hover:-translate-y-0.5"
                >
                  DM on Instagram
                </a>
                <a
                  href="tel:7865851769"
                  className="inline-flex items-center justify-center rounded-pill border-2 border-black px-6 py-3 font-body text-sm font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Call Us
                </a>
              </div>
              <p className="text-warm-gray/50 text-xs">No credit card required</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
