import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Clock, MapPin, Check, X, ChevronDown, ArrowLeft } from "lucide-react";
import { packages, type TravelPackage } from "@/data/packages";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = packages.find((p) => p.slug === params.slug);
    if (!pkg) throw notFound();
    return pkg;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} — SAPTHA Expeditions` },
      { name: "description", content: loaderData.overview },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: loaderData.overview },
      { property: "og:image", content: loaderData.image },
      { property: "og:type", content: "product" },
    ] : [],
  }),
  component: PackageDetailPage,
});

function PackageDetailPage() {
  const pkg = Route.useLoaderData() as TravelPackage;
  const [tab, setTab] = useState<"overview" | "itinerary" | "inclusions" | "faqs">("overview");

  return (
    <>
      <section className="relative pt-32 pb-16 min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-white">
          <Link to="/packages" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"><ArrowLeft className="h-4 w-4" />All packages</Link>
          <SectionReveal className="mt-8 max-w-3xl">
            <span className="rounded-full bg-cta text-cta-foreground px-3 py-1 text-xs font-semibold">{pkg.category}</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">{pkg.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-accent" />{pkg.destination}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" />{pkg.duration}</span>
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-cta fill-cta" />{pkg.rating} ({pkg.reviews} reviews)</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1fr_380px] gap-10">
          <div>
            <div className="flex gap-1 border-b border-border overflow-x-auto no-scrollbar">
              {(["overview", "itinerary", "inclusions", "faqs"] as const).map((t) => (
                <button key={t} onClick={() => setTab(t)}
                  className={`px-5 py-3 text-sm font-semibold capitalize whitespace-nowrap border-b-2 -mb-px transition ${tab === t ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-8">
              {tab === "overview" && (
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">{pkg.overview}</p>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-3">Trip Highlights</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {pkg.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 rounded-xl bg-secondary/60 p-3">
                          <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /><span className="text-sm">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-3">Gallery</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {pkg.gallery.map((g, i) => (
                        <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                          <img src={g} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-110 transition duration-700" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {tab === "itinerary" && (
                <ol className="relative border-l-2 border-accent/30 ml-3 space-y-6">
                  {pkg.itinerary.map((d) => (
                    <li key={d.day} className="pl-6 relative">
                      <span className="absolute -left-[13px] grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground text-xs font-bold">{d.day}</span>
                      <h4 className="font-display font-bold">{d.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{d.description}</p>
                    </li>
                  ))}
                </ol>
              )}
              {tab === "inclusions" && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2"><Check className="h-5 w-5 text-accent" />Included</h3>
                    <ul className="space-y-2">{pkg.inclusions.map((x) => <li key={x} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />{x}</li>)}</ul>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2"><X className="h-5 w-5 text-destructive" />Excluded</h3>
                    <ul className="space-y-2">{pkg.exclusions.map((x) => <li key={x} className="flex gap-2 text-sm"><X className="h-4 w-4 text-destructive mt-0.5 shrink-0" />{x}</li>)}</ul>
                  </div>
                </div>
              )}
              {tab === "faqs" && (
                <div className="space-y-3">
                  {pkg.faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} />)}
                </div>
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-card shadow-elegant p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</p>
              <p className="font-display text-4xl font-black text-primary">₹{pkg.price.toLocaleString()}
                {pkg.oldPrice && <span className="ml-2 text-base font-medium text-muted-foreground line-through">₹{pkg.oldPrice.toLocaleString()}</span>}
              </p>
              <p className="text-xs text-muted-foreground mt-1">per person on twin sharing</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! Our team will reach out within 24 hours."); }} className="mt-5 space-y-3">
                <input className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm" placeholder="Your name" required />
                <input type="email" className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm" placeholder="Email" required />
                <input type="tel" className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm" placeholder="Phone" required />
                <input type="date" className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm" />
                <input type="number" min={1} defaultValue={2} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm" placeholder="Travelers" />
                <button className="w-full h-12 rounded-xl bg-cta text-cta-foreground font-semibold shadow-glow hover:scale-[1.02] transition">Book Now</button>
                <button type="button" className="w-full h-12 rounded-xl border border-border font-semibold hover:bg-secondary transition">Get Free Quote</button>
              </form>
              <p className="mt-4 text-xs text-center text-muted-foreground">Free cancellation up to 30 days · No booking fees</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-4 pb-4 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}
