import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Users, ArrowRight } from "lucide-react";
import { fleet } from "@/data/fleet";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — SAPTHA Expeditions" },
      { name: "description", content: "Premium tempo travellers, luxury coaches, SUVs, and sedans for every group size and journey." },
      { property: "og:title", content: "Our Fleet — SAPTHA Expeditions" },
      { property: "og:description", content: "Comfortable, chauffeur-driven travel options." },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <section className="pt-32 pb-12 gradient-ocean text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Fleet</p>
            <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black">Travel in comfort</h1>
            <p className="mt-3 text-white/80 max-w-2xl">From cosy sedans to full-sized luxury coaches — every ride professionally maintained, every driver hand-picked.</p>
          </SectionReveal>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 space-y-12">
          {fleet.map((v, i) => (
            <SectionReveal key={v.slug}>
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`${i % 2 ? "lg:order-2" : ""} rounded-3xl overflow-hidden shadow-elegant`}>
                  <img src={v.image} alt={v.name} loading="lazy" className="w-full aspect-[4/3] object-cover hover:scale-105 transition duration-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">{v.type}</p>
                  <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">{v.name}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 font-medium"><Users className="h-3.5 w-3.5" />{v.seats} seats</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cta/15 text-cta px-3 py-1 font-semibold">₹{v.pricePerKm}/km</span>
                  </div>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-cta transition">
                    Book this vehicle <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
