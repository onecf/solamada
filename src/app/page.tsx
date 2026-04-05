import Image from "next/image";
import Link from "next/link";

const featuredDrinks = [
  {
    name: "Paloma",
    tag: "Tequila",
    gradient: ["#FF6B6B", "#FFB347"] as [string, string],
    emoji: "🍊",
  },
  {
    name: "Mojito",
    tag: "White Rum",
    gradient: ["#1A7A4A", "#56CCB2"] as [string, string],
    emoji: "🌿",
  },
  {
    name: "Aperol Spritz",
    tag: "Prosecco",
    gradient: ["#E05A10", "#FFB347"] as [string, string],
    emoji: "🍊",
  },
  {
    name: "Sangria Roja",
    tag: "Red Wine",
    gradient: ["#6A1010", "#B52A2D"] as [string, string],
    emoji: "🍷",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center bg-black text-white overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center max-w-2xl">
          <Image
            src="/images/logos/solamada-logo-blanco-sol.png"
            alt="Solamada"
            width={320}
            height={320}
            priority
            className="w-44 md:w-56 lg:w-64 h-auto"
          />

          {/* Tagline */}
          <div className="flex flex-col items-center gap-2 mt-2">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your event, elevated.
            </h1>
            <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-gold">
              Fresh Cocktails &nbsp;&middot;&nbsp; Mobile Cart &nbsp;&middot;&nbsp; TABC-certified bartender
            </p>
          </div>

          {/* CTAs — View Menu first (secondary), Book second (primary) */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-pill border-2 border-white px-7 py-3.5 font-body text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              View Our Menu
            </Link>
            <div className="flex flex-col items-center gap-1">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-pill bg-red px-7 py-3.5 font-body text-sm font-bold uppercase tracking-widest text-white shadow-btn transition-all duration-300 hover:bg-gold hover:shadow-btn-hover hover:-translate-y-0.5"
              >
                Book a Free Consultation
              </Link>
              <span className="text-white/50 text-xs">No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro / Brand Statement ── */}
      <section className="bg-warm-white py-20 md:py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs text-gold tracking-widest uppercase mb-5">
            Miami&apos;s Mobile Bar Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            We bring a fully stocked bar{" "}
            <span className="italic font-normal">right to your door.</span>
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Solamada is a professional mobile cocktail cart service serving Miami and South Florida.
            We arrive with a stunning bar setup, fresh juices, house syrups, and every garnish needed
            to craft 16 signature cocktails — all served by a TABC-certified bartender. Your only job
            is to enjoy the celebration.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "16", label: "Signature cocktails" },
              { value: "$400", label: "Starting price" },
              { value: "35+", label: "Guests served" },
              { value: "100%", label: "TABC certified" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="font-mono text-3xl md:text-4xl font-medium text-red">
                  {stat.value}
                </span>
                <span className="text-xs text-warm-gray uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-gold tracking-widest uppercase mb-3">
              Simple Process
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Reach Out",
                desc: "Tell us about your event — date, guest count, and vibe. We'll take it from there.",
              },
              {
                step: "02",
                title: "Customize",
                desc: "Choose up to 4 signature cocktails from our curated menu. We'll guide your selections.",
              },
              {
                step: "03",
                title: "Confirm",
                desc: "Review your proposal, sign, and secure your date with a 50% deposit.",
              },
              {
                step: "04",
                title: "Celebrate",
                desc: "We arrive, set up, serve craft cocktails, and handle everything. You just enjoy.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <span className="font-mono text-sm font-medium text-gold tracking-wider">
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="bg-warm-white py-20 md:py-28 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-gold tracking-widest uppercase mb-3">
              Starting at $400
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-4">
              The Solamada Experience
            </h2>
            <p className="text-warm-gray text-lg max-w-xl mx-auto">
              We bring the bar, the cocktails, and the craft — you bring the celebration.
            </p>
          </div>

          <div className="bg-white rounded-card p-8 md:p-12 shadow-card border-2 border-gold">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "Custom Solamada mobile bar setup",
                "1 professional TABC-certified bartender",
                "Up to 4 signature crafted cocktails",
                "All mixers, syrups, fresh juices & garnishes",
                "Coolers stocked with ice",
                "Disposable drinkware",
                "Delivery, setup & full breakdown",
                "4-hour minimum service",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="text-gold font-bold mt-0.5 shrink-0">✓</span>
                  <span className="text-black text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-pill bg-red px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-white shadow-btn transition-all duration-300 hover:bg-gold hover:shadow-btn-hover hover:-translate-y-0.5"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-pill border-2 border-black px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Full Pricing Details
              </Link>
            </div>
            <p className="text-center text-xs text-warm-gray mt-4">No credit card required to book a consultation.</p>
          </div>
        </div>
      </section>

      {/* ── Signature Drinks Preview ── */}
      <section className="bg-black py-20 md:py-28 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs text-gold tracking-widest uppercase mb-3">
            16 Signature Drinks
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            A Menu Built for Celebration
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-12">
            From classic margaritas to bubbly spritz collections and crowd-pleasing sangrias.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {featuredDrinks.map((drink) => (
              <div
                key={drink.name}
                className="rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Gradient image placeholder */}
                <div
                  className="w-full aspect-square flex items-center justify-center text-5xl"
                  style={{
                    background: `linear-gradient(135deg, ${drink.gradient[0]}, ${drink.gradient[1]})`,
                  }}
                  aria-hidden="true"
                >
                  {drink.emoji}
                </div>
                <div className="bg-white p-4 text-left">
                  <p className="font-display text-base font-bold text-black">
                    {drink.name}
                  </p>
                  <p className="text-xs text-warm-gray mt-0.5">{drink.tag}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-pill border-2 border-white px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Explore the Full Menu
          </Link>
        </div>
      </section>

      {/* ── Final CTA Banner ── */}
      <section className="bg-red py-20 md:py-24 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Book a free 30-minute consultation. No obligation, just great cocktail planning.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-pill bg-white px-8 py-4 font-body text-base font-bold uppercase tracking-widest text-red transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-btn-hover hover:-translate-y-0.5"
          >
            Book a Free Consultation
          </Link>
          <p className="text-white/50 text-xs mt-3">No credit card required</p>
        </div>
      </section>
    </>
  );
}
