import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import hero from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SAPTHA Expeditions" },
      { name: "description", content: "Born in Kerala, built for the world. Meet the team crafting handmade journeys for curious travellers since 2014." },
      { property: "og:title", content: "About SAPTHA Expeditions" },
      { property: "og:description", content: "Born in Kerala, built for the world." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Adithya Nair", role: "Founder & CEO", initials: "AN" },
  { name: "Anjali Menon", role: "Head of Curation", initials: "AM" },
  { name: "Karthik Rao", role: "Operations Lead", initials: "KR" },
  { name: "Priya Sharma", role: "Brand & Stories", initials: "PS" },
];

const timeline = [
  { year: "2014", title: "Founded in Kozhikode", desc: "Started as a weekend-trip operator with one Innova and a Google Sheet of dreams." },
  { year: "2017", title: "1,000 Trips Milestone", desc: "Crossed our first thousand happy travellers. Hired our first full-time team." },
  { year: "2020", title: "Surviving Together", desc: "Refunded every cancelled booking during the pandemic. Travellers remembered." },
  { year: "2023", title: "International Tours Launched", desc: "Expanded across Southeast Asia, the Middle East, and the Maldives." },
  { year: "2026", title: "5,000+ Travellers", desc: "Today, we curate 150+ itineraries across 25+ destinations worldwide." },
];

function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-white">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">About SAPTHA</p>
            <h1 className="mt-2 font-display text-4xl sm:text-6xl lg:text-7xl font-black max-w-3xl leading-tight">Born in Kerala. Built for the world.</h1>
            <p className="mt-4 max-w-2xl text-white/85 text-lg">For over a decade, we've been quietly building the kind of travel agency we wished existed — small enough to care, big enough to deliver.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Target, title: "Our Mission", desc: "To make once-in-a-lifetime travel feel possible, planned, and personal — for every kind of traveller." },
            { Icon: Eye, title: "Our Vision", desc: "A world where travel is a force for joy, connection, and quiet personal change." },
            { Icon: Heart, title: "Our Values", desc: "Honesty in pricing. Care in detail. Curiosity in every itinerary. People over packages." },
          ].map(({ Icon, title, desc }, i) => (
            <SectionReveal key={title} delay={i * 0.08}>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-card h-full">
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-ocean text-white shadow-glow"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4">
          <SectionReveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Journey</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">12 years, one obsession</h2>
          </SectionReveal>
          <ol className="relative border-l-2 border-accent/30 ml-3 space-y-8">
            {timeline.map((t, i) => (
              <SectionReveal key={t.year} delay={i * 0.05}>
                <li className="pl-8 relative">
                  <span className="absolute -left-3 grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground text-[10px] font-bold">●</span>
                  <p className="font-display text-2xl font-black gradient-text-ocean">{t.year}</p>
                  <h3 className="font-display font-bold mt-1">{t.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{t.desc}</p>
                </li>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionReveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">The Team</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">People who plan your trip</h2>
          </SectionReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <SectionReveal key={m.name} delay={i * 0.06}>
                <div className="text-center group">
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full gradient-ocean text-white font-display text-2xl font-bold shadow-elegant group-hover:scale-105 transition">{m.initials}</div>
                  <h3 className="mt-4 font-display font-bold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <SectionReveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Achievements</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Numbers we're proud of</h2>
          </SectionReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Users, v: 5000, s: "+", l: "Happy Travelers" },
              { Icon: Globe, v: 150, s: "+", l: "Destinations" },
              { Icon: Award, v: 12, s: "+", l: "Industry Awards" },
              { Icon: Heart, v: 98, s: "%", l: "Return Customers" },
            ].map((it, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="rounded-3xl border border-border bg-card p-7 text-center shadow-card">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent"><it.Icon className="h-6 w-6" /></div>
                  <p className="mt-4 font-display text-4xl font-black gradient-text-ocean"><AnimatedCounter to={it.v} suffix={it.s} /></p>
                  <p className="text-sm text-muted-foreground mt-1">{it.l}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
