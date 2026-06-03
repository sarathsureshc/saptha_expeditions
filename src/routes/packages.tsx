import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { packages } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages — SAPTHA Expeditions" },
      { name: "description", content: "Browse curated travel packages across India and the world. Filter by destination, budget, and duration." },
      { property: "og:title", content: "Travel Packages — SAPTHA Expeditions" },
      { property: "og:description", content: "Curated tours, honeymoons, adventures, and getaways." },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const [q, setQ] = useState("");
  const [dest, setDest] = useState<string>("all");
  const [budget, setBudget] = useState<number>(150000);
  const [duration, setDuration] = useState<string>("any");

  const filtered = useMemo(() => packages.filter((p) => {
    if (dest !== "all" && p.destinationSlug !== dest) return false;
    if (p.price > budget) return false;
    if (duration === "short" && p.days > 4) return false;
    if (duration === "medium" && (p.days < 5 || p.days > 7)) return false;
    if (duration === "long" && p.days < 8) return false;
    if (q && !p.title.toLowerCase().includes(q.toLowerCase()) && !p.destination.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  }), [q, dest, budget, duration]);

  return (
    <>
      <section className="pt-32 pb-12 gradient-ocean text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Packages</p>
            <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black">Find your next escape</h1>
            <p className="mt-3 text-white/80 max-w-2xl">{packages.length} curated journeys, ready to book or fully customizable.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border p-5 bg-card">
              <h3 className="font-display font-bold flex items-center gap-2 mb-4"><SlidersHorizontal className="h-4 w-4" />Filters</h3>
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Search</label>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search packages..." className="w-full h-10 pl-9 pr-3 rounded-lg border border-border bg-background text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Destination</label>
                  <select value={dest} onChange={(e) => setDest(e.target.value)} className="mt-2 w-full h-10 rounded-lg border border-border bg-background px-3 text-sm">
                    <option value="all">All destinations</option>
                    {destinations.map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Max Budget: ₹{budget.toLocaleString()}</label>
                  <input type="range" min={10000} max={150000} step={5000} value={budget} onChange={(e) => setBudget(+e.target.value)} className="mt-3 w-full accent-accent" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Duration</label>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    {[
                      { v: "any", l: "Any" }, { v: "short", l: "≤4 days" },
                      { v: "medium", l: "5–7 days" }, { v: "long", l: "8+ days" },
                    ].map((o) => (
                      <button key={o.v} onClick={() => setDuration(o.v)}
                        className={`h-9 rounded-lg border font-medium transition ${duration === o.v ? "border-accent bg-accent text-accent-foreground" : "border-border hover:bg-secondary"}`}>{o.l}</button>
                    ))}
                  </div>
                </div>
                <button onClick={() => { setQ(""); setDest("all"); setBudget(150000); setDuration("any"); }}
                  className="w-full h-10 rounded-lg border border-border hover:bg-secondary text-sm font-medium">Reset filters</button>
              </div>
            </div>
          </aside>
          <div>
            <p className="text-sm text-muted-foreground mb-5">Showing <span className="font-bold text-foreground">{filtered.length}</span> of {packages.length} packages</p>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">No packages match these filters. Try widening your search.</div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {filtered.map((p, i) => <PackageCard key={p.slug} pkg={p} index={i} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
