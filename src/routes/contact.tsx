import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SAPTHA Expeditions" },
      { name: "description", content: "Reach our travel experts in Kozhikode, Kerala. Call +91 9876543210 or email hello@sapthaexpeditions.com." },
      { property: "og:title", content: "Contact SAPTHA Expeditions" },
      { property: "og:description", content: "Talk to a real travel expert today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-32 pb-12 gradient-ocean text-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Contact</p>
            <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black">Let's plan something memorable</h1>
            <p className="mt-3 text-white/80 max-w-2xl">A real travel expert replies within 24 hours — usually faster.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1fr_400px] gap-8">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
            className="rounded-3xl border border-border bg-card p-7 shadow-card"
          >
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tell us what you're dreaming up — we'll handle the rest.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Input label="Your Name" placeholder="Jane Doe" required />
              <Input label="Phone" type="tel" placeholder="+91 98765 43210" required />
              <Input label="Email" type="email" placeholder="jane@example.com" required />
              <Input label="Destination" placeholder="Bali / Kashmir / Anywhere…" />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Message</label>
                <textarea rows={5} placeholder="Tell us about your trip — dates, group size, vibe, budget…" required
                  className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cta text-cta-foreground px-6 py-3 font-semibold shadow-glow hover:scale-[1.02] transition">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && <p className="mt-4 text-sm text-accent font-medium">✓ Thanks! Our team will reach out within 24 hours.</p>}
          </form>

          <aside className="space-y-4">
            {[
              { Icon: Phone, title: "Call us", v: "+91 9876543210", h: "tel:+919876543210" },
              { Icon: Mail, title: "Email", v: "hello@sapthaexpeditions.com", h: "mailto:hello@sapthaexpeditions.com" },
              { Icon: MapPin, title: "Visit", v: "Kozhikode, Kerala, India" },
              { Icon: Clock, title: "Hours", v: "Mon–Sat · 9 AM – 8 PM IST" },
            ].map(({ Icon, title, v, h }) => (
              <a key={title} href={h ?? "#"} className="block rounded-2xl border border-border bg-card p-5 hover:shadow-card transition">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent shrink-0"><Icon className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
                    <p className="font-semibold mt-0.5">{v}</p>
                  </div>
                </div>
              </a>
            ))}
            <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[4/3]">
              <iframe
                title="SAPTHA Office Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.74%2C11.23%2C75.82%2C11.30&layer=mapnik&marker=11.2588%2C75.7804"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Input({ label, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input {...rest} className="mt-2 w-full h-11 rounded-xl border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
    </div>
  );
}
