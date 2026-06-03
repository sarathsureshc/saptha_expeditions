import { Link } from "@tanstack/react-router";
import { Compass, Mail, MapPin, Phone, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cta blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-aurora ring-1 ring-white/20 shadow-glow">
                <Compass className="h-5 w-5" />
              </span>
              <span className="font-display font-bold text-xl">SAPTHA</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Crafting unforgettable journeys for curious travellers since 2014. Journeys beyond destinations.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/packages" className="hover:text-accent transition-colors">All Packages</Link></li>
              <li><Link to="/stories" className="hover:text-accent transition-colors">Travel Stories</Link></li>
              <li><Link to="/fleet" className="hover:text-accent transition-colors">Our Fleet</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors">Reviews</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Group Tours</li>
              <li>Honeymoon Packages</li>
              <li>Adventure Expeditions</li>
              <li>Family Vacations</li>
              <li>Corporate Retreats</li>
              <li>International Tours</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />Kozhikode, Kerala, India</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-accent" />+91 9876543210</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-accent" />hello@sapthaexpeditions.com</li>
            </ul>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex gap-2"
            >
              <input
                type="email"
                placeholder="Newsletter email"
                className="flex-1 h-10 rounded-lg bg-white/10 border border-white/10 px-3 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="h-10 px-4 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:scale-105 transition">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-primary-foreground/50">
          <p>© 2026 SAPTHA Expeditions. All rights reserved.</p>
          <p>Crafted with ✦ for curious wanderers.</p>
        </div>
      </div>
    </footer>
  );
}
