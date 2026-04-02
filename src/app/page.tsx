import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center bg-black-pure text-white overflow-hidden">
        {/* Dark overlay for future background image */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 flex flex-col items-center gap-8 px-6 text-center">
          <Image
            src="/images/logos/solamada-logo-blanco-sol.png"
            alt="Solamada"
            width={320}
            height={320}
            priority
            className="w-56 md:w-72 lg:w-80 h-auto"
          />
          <p className="font-display text-lg md:text-xl tracking-widest uppercase text-gold">
            Fresh Cocktails &middot; Mobile Cart &middot; Your Event, Elevated
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-pill bg-red px-8 py-4 font-body text-base font-bold uppercase tracking-widest text-white shadow-btn transition-all duration-300 hover:bg-gold hover:shadow-btn-hover hover:-translate-y-0.5"
            >
              Book a Free Consultation
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

      {/* How It Works */}
      <section className="bg-warm-white py-20 md:py-30 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-black mb-4">
            How It Works
          </h2>
          <p className="text-center text-warm-gray text-lg mb-16">
            A simple four-step process to elevate your celebration.
          </p>

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
              <div key={item.step} className="text-center md:text-left">
                <span className="font-mono text-sm font-medium text-gold tracking-wider">
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-bold text-black mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-20 md:py-30 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
            The Solamada Experience
          </h2>
          <p className="text-warm-gray text-lg mb-12 max-w-2xl mx-auto">
            A curated mobile bartending experience. We bring the bar, the
            cocktails, and the craft — you bring the celebration.
          </p>

          <div className="bg-warm-white rounded-card p-8 md:p-12 shadow-card border border-light-gray text-left">
            <div className="flex items-baseline justify-between mb-8">
              <h3 className="font-display text-2xl font-bold text-black">
                Full Bar Service
              </h3>
              <span className="font-mono text-2xl font-medium text-gold">
                $400
              </span>
            </div>
            <p className="text-warm-gray mb-8">
              Starting at $400 for a 4-hour event serving up to 35 guests.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {[
                "Custom Solamada mobile bar setup",
                "1 professional bartender",
                "Up to 4 signature cocktails",
                "All mixers, syrups, juices & garnishes",
                "Coolers stocked with ice",
                "Delivery, setup & breakdown",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-black"
                >
                  <span className="text-gold mt-1 shrink-0">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-pill bg-red px-8 py-4 font-body text-base font-bold uppercase tracking-widest text-white shadow-btn transition-all duration-300 hover:bg-gold hover:shadow-btn-hover hover:-translate-y-0.5"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-black py-20 md:py-24 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Book a free consultation and let&apos;s craft the perfect bar
            experience for your celebration.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-pill bg-gold px-8 py-4 font-body text-base font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light hover:shadow-btn-hover hover:-translate-y-0.5"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black-pure py-12 px-6 text-white/60">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Image
              src="/images/logos/solamada-logo-blanco-sol.png"
              alt="Solamada"
              width={120}
              height={120}
              className="w-24 h-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Solamada. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 text-sm">
            <a
              href="https://instagram.com/solamada.bar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              @solamada.bar
            </a>
            <a
              href="tel:7865851769"
              className="hover:text-gold transition-colors"
            >
              (786) 585-1769
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
