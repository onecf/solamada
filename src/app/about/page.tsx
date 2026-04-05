import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Solamada — a Miami-based mobile cocktail cart bringing craft bartending and warm celebration to every event.",
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
          Our Story
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
          About Solamada
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          Born from a love of cocktails, community, and celebration.
        </p>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <Image
              src="/images/logos/solamada-logo-negro-sol.png"
              alt="Solamada"
              width={180}
              height={180}
              className="h-36 w-auto opacity-90"
            />
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-warm-gray leading-relaxed">
            <p className="text-xl text-black font-medium leading-relaxed">
              Solamada is a Miami-based mobile cocktail cart and bartending
              service built for the moments that matter most.
            </p>
            <p>
              The name says it all — <em>Sol</em> (sun) and <em>Amada</em>{" "}
              (beloved). We believe every celebration deserves the warmth and
              care of a well-crafted cocktail, poured with intention and
              delivered with a smile.
            </p>
            <p>
              We bring the full bar experience to you — the mobile cart, the
              professional bartender, the fresh juices, the garnishes, all of
              it. Your job is simple: invite the people you love and let us
              handle the rest.
            </p>
            <p>
              Whether it&apos;s an intimate backyard gathering, a corporate
              event, a birthday celebration, or a wedding reception, we
              customize every service to fit your vision. Our TABC-certified
              bartenders are trained not just in craft, but in hospitality —
              because a great drink is only as good as the experience around it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-black text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🍹",
                title: "Craft First",
                desc: "Every cocktail is made with fresh ingredients, house-made syrups, and real technique. No shortcuts.",
              },
              {
                icon: "☀️",
                title: "Warm Hospitality",
                desc: "We're not just bartenders — we're part of your event. We show up with energy, care, and a genuine love for what we do.",
              },
              {
                icon: "🤝",
                title: "Hassle-Free",
                desc: "We handle everything from setup to breakdown. You shouldn't have to think about the bar — only enjoy it.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-display text-xl font-bold text-black mb-2">
                  {value.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-black mb-6">
            Professional & Certified
          </h2>
          <div className="inline-flex items-center gap-3 bg-white border border-light-gray rounded-card px-8 py-5 shadow-card">
            <span className="text-2xl">🏅</span>
            <div className="text-left">
              <p className="font-semibold text-black">TABC Certified</p>
              <p className="text-sm text-warm-gray">
                All Solamada bartenders are Texas Alcoholic Beverage
                Commission certified for responsible service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-white/70 mb-8">
            Book a free consultation and let&apos;s start planning your perfect
            bar experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-pill bg-gold px-8 py-4 font-body text-base font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light hover:shadow-btn-hover hover:-translate-y-0.5"
            >
              Book a Consultation
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-pill border-2 border-white px-8 py-4 font-body text-base font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
