import type { Metadata } from "next";
import { cocktails } from "@/lib/cocktails";
import QuoteForm from "@/components/booking/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a custom quote for your event. Select your cocktails and tell us the details — we'll get back to you within 24 hours.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const menuParam = params.menu;
  const initialSlugs =
    typeof menuParam === "string"
      ? menuParam.split(",").filter(Boolean)
      : [];

  return (
    <main className="pt-16 pb-8">
      {/* Hero */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <p className="font-mono text-sm text-gold tracking-widest uppercase mb-4">
          No Credit Card Required
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
          Get a Quote
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          Select the cocktails you love, tell us about your event, and we&apos;ll send you a custom proposal within 24 hours.
        </p>
      </section>

      {/* Multi-step form */}
      <section className="py-12 bg-white">
        <QuoteForm cocktails={cocktails} initialSlugs={initialSlugs} />
      </section>
    </main>
  );
}
