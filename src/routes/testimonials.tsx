import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, PlayCircle, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — SAPTHA Expeditions" },
      { name: "description", content: "Read what 5000+ travellers say about their journeys with SAPTHA Expeditions." },
      { property: "og:title", content: "Customer Reviews — SAPTHA Expeditions" },
      { property: "og:description", content: "5000+ travellers, thousands of memories." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const dests = ["All", ...Array.from(new Set(testimonials.map((t) => t.destination)))];
  const [d, setD] = useState("All");
  const list = d === "All" ? testimonials : testimonials.filter((t) => t.destination === d);
  return (
    <>
      <section className="pt-32 pb-12 gradient-ocean text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Reviews</p>
            <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black">Loved by 5,000+ travellers</h1>
            <p className="mt-3 text-white/80 max-w-2xl">Honest reviews from real trips — the good, the great, and the truly unforgettable.</p>
          </SectionReveal>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {dests.map((c) => (
              <button key={c} onClick={() => setD(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${d === c ? "bg-accent text-accent-foreground" : "bg-secondary hover:bg-secondary/70"}`}>{c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((t, i) => (
              <article key={i} className="group rounded-3xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition">
                <Quote className="h-8 w-8 text-accent/40" />
                <p className="mt-3 text-foreground/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-ocean text-white font-display font-bold">{t.initials}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.trip}</p>
                  </div>
                  {t.hasVideo && (
                    <button className="grid h-10 w-10 place-items-center rounded-full bg-cta text-cta-foreground hover:scale-110 transition" aria-label="Play video review">
                      <PlayCircle className="h-5 w-5" />
                    </button>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className={`h-3.5 w-3.5 ${k < t.rating ? "fill-cta text-cta" : "text-muted"}`} />)}
                  </div>
                  <span className="text-xs rounded-full bg-secondary px-2.5 py-1 font-medium">{t.destination}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
