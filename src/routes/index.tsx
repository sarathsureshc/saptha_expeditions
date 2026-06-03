import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ShieldCheck, Sparkles,
  HeadphonesIcon, MapPinned, Wallet, Heart, Star, Plane, Compass, Mountain, Palmtree, Quote,
} from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { stories } from "@/data/stories";
import { fleet } from "@/data/fleet";
import { testimonials } from "@/data/testimonials";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAPTHA Expeditions — Journeys Beyond Destinations" },
      { name: "description", content: "Curated adventures, unforgettable memories, and seamless travel experiences across India and the world." },
      { property: "og:title", content: "SAPTHA Expeditions — Journeys Beyond Destinations" },
      { property: "og:description", content: "Curated adventures, unforgettable memories, and seamless travel experiences." },
    ],
  }),
  component: HomePage,
});

const HEROES = [hero1, hero2, hero4, hero3];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
      <FeaturedDestinations />
      <PopularPackages />
      <StoriesPreview />
      <FleetPreview />
      <TestimonialsSection />
      <Stats />
      <CTABanner />
    </>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HEROES.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative min-h-screen overflow-hidden">
      {HEROES.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === idx ? 1 : 0, scale: i === idx ? 1.05 : 1 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img src={src} alt="" className="h-full w-full object-cover" />
        </motion.div>
      ))}
      <div className="absolute inset-0 hero-overlay" />
      <FloatingIcons />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-36 pb-24 sm:pt-44">
        <div className="max-w-3xl text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-widest"
          >
            <Sparkles className="h-3 w-3 text-accent" /> Journeys Beyond Destinations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
          >
            Explore The World With{" "}
            <span className="gradient-text-aurora">
              SAPTHA Expeditions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="mt-5 max-w-xl text-lg text-white/85"
          >
            Curated adventures, unforgettable memories, and seamless travel experiences — handcrafted by people who actually love the road.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground shadow-glow hover:scale-105 transition"
            >
              Explore Packages <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl glass-dark text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/20 transition"
            >
              Plan Your Journey
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {HEROES.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-4 bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
}

function FloatingIcons() {
  const items = [
    { Icon: Plane, x: "10%", y: "20%", d: 0 },
    { Icon: Compass, x: "85%", y: "30%", d: 1 },
    { Icon: Mountain, x: "15%", y: "70%", d: 0.6 },
    { Icon: Palmtree, x: "80%", y: "75%", d: 1.4 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {items.map(({ Icon, x, y, d }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25, y: [0, -20, 0] }}
          transition={{ y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: d }, opacity: { delay: 1 + d } }}
          className="absolute text-white"
          style={{ left: x, top: y }}
        >
          <Icon className="h-10 w-10" />
        </motion.div>
      ))}
    </div>
  );
}



function TrustedBy() {
  const logos = ["Indigo", "Vistara", "Marriott", "Taj Hotels", "Oberoi", "Emirates", "Booking", "MakeMyTrip"];
  return (
    <section className="py-14 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Trusted by travelers & partners worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-70">
          {logos.map((l) => (
            <motion.span
              key={l}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="font-display font-bold text-lg sm:text-xl text-muted-foreground hover:text-primary transition"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    { Icon: Sparkles, title: "Expert Travel Planning", desc: "20+ destination specialists who've personally walked every itinerary we sell." },
    { Icon: MapPinned, title: "Handpicked Destinations", desc: "From hidden Himalayan hamlets to overwater villas — chosen, never templated." },
    { Icon: HeadphonesIcon, title: "24/7 On-Trip Support", desc: "A real human on WhatsApp from the moment you book to the moment you land back home." },
    { Icon: Wallet, title: "Transparent Pricing", desc: "Every rupee accounted for. No hidden surcharges, no surprise add-ons." },
    { Icon: ShieldCheck, title: "Safe & Secure Travel", desc: "Vetted hotels, verified drivers, and travel insurance options on every trip." },
    { Icon: Heart, title: "Customized Experiences", desc: "Family with toddlers? Solo wellness? Adrenaline junkies? We tailor every detail." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Why SAPTHA</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Travel, but better.</h2>
          <p className="mt-4 text-muted-foreground">Six reasons our travellers come back — and bring their friends.</p>
        </SectionReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-border bg-card p-7 shadow-card hover:shadow-elegant transition-all"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-ocean text-white shadow-glow group-hover:rotate-6 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="absolute inset-0 rounded-3xl ring-2 ring-accent/0 group-hover:ring-accent/40 transition pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedDestinations() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Featured Destinations</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Where will it be?</h2>
          </div>
          <Link to="/packages" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
            View all destinations <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((d, i) => <DestinationCard key={d.slug} dest={d} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function PopularPackages() {
  const top = packages.slice(0, 6);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Popular Packages</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Most-loved itineraries</h2>
          <p className="mt-4 text-muted-foreground">Hand-built journeys our travellers can't stop talking about.</p>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {top.map((p, i) => <PackageCard key={p.slug} pkg={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function StoriesPreview() {
  const top = stories.slice(0, 3);
  return (
    <section className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Travel Stories</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">From the road</h2>
          </div>
          <Link to="/stories" className="text-sm font-semibold inline-flex items-center gap-2 hover:text-accent">
            All stories <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {top.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition"
            >
              <Link to="/stories/$slug" params={{ slug: s.slug }} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={s.cover} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">{s.category}</span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground">{s.author} · {s.date} · {s.readTime}</p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-accent transition">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.excerpt}</p>
                  <p className="mt-4 text-sm font-semibold text-primary inline-flex items-center gap-1">Read more <ArrowRight className="h-3 w-3" /></p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Fleet</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold">Travel in comfort</h2>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fleet.map((v, i) => (
            <motion.div
              key={v.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={v.image} alt={v.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground">{v.type}</p>
                <h3 className="font-display font-bold text-lg">{v.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Seats {v.seats} · ₹{v.pricePerKm}/km</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/fleet" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
            View full fleet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[idx];
  return (
    <section className="py-24 gradient-aurora text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cta blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <Quote className="h-12 w-12 text-accent mx-auto mb-6 opacity-60" />
        <SectionReveal>
          <motion.blockquote
            key={idx}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug"
          >
            "{t.text}"
          </motion.blockquote>
          <motion.div
            key={`m-${idx}`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-2"
          >
            <div className="grid h-14 w-14 place-items-center rounded-full bg-white/15 backdrop-blur font-display font-bold">{t.initials}</div>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-white/70">{t.trip}</p>
            <div className="flex gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-cta text-cta" : "text-white/30"}`} />
              ))}
            </div>
          </motion.div>
        </SectionReveal>
        <div className="mt-8 flex justify-center gap-1.5">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-cta" : "w-3 bg-white/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: 5000, s: "+", l: "Happy Travelers" },
    { v: 150, s: "+", l: "Destinations" },
    { v: 12, s: "+", l: "Years of Experience" },
    { v: 98, s: "%", l: "Happy Customers" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center rounded-3xl border border-border p-8 bg-card shadow-card hover:border-accent/40 hover:shadow-elegant transition duration-300"
            >
              <p className="font-display text-5xl font-black gradient-text-aurora">
                <AnimatedCounter to={it.v} suffix={it.s} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{it.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  return (
    <section ref={ref} className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={hero4} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative h-full grid place-items-center text-center text-white px-4">
        <div>
          <SectionReveal>
            <h2 className="font-display text-4xl sm:text-6xl font-black max-w-3xl mx-auto leading-tight">
              Ready for your next adventure?
            </h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto">
              Tell us how you dream of travelling. We'll handle every detail — from visas to that perfect sunset table.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cta text-cta-foreground px-7 py-4 font-semibold shadow-glow hover:scale-105 transition">
              Start Planning <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
