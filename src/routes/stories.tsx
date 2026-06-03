import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { stories } from "@/data/stories";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Travel Stories — SAPTHA Expeditions" },
      { name: "description", content: "Real journeys, honest reviews, and travel inspiration from our curators and guests." },
      { property: "og:title", content: "Travel Stories — SAPTHA Expeditions" },
      { property: "og:description", content: "Real journeys and travel inspiration." },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  const cats = ["All", ...Array.from(new Set(stories.map((s) => s.category)))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? stories : stories.filter((s) => s.category === cat);
  return (
    <>
      <section className="pt-32 pb-12 gradient-ocean text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Travel Stories</p>
            <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black">Notes from the road</h1>
            <p className="mt-3 text-white/80 max-w-2xl">Trip reports, hidden gems, and honest reviews — written by people who actually went.</p>
          </SectionReveal>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === c ? "bg-accent text-accent-foreground" : "bg-secondary hover:bg-secondary/70"}`}>{c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((s, i) => (
              <article key={s.slug} className="group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition"
                style={{ animationDelay: `${i * 50}ms` }}>
                <Link to="/stories/$slug" params={{ slug: s.slug }} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={s.cover} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute top-3 left-3 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">{s.category}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground">{s.author} · {s.date} · {s.readTime}</p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-accent transition">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.excerpt}</p>
                    <p className="mt-4 text-sm font-semibold inline-flex items-center gap-1">Read story <ArrowRight className="h-3 w-3" /></p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
