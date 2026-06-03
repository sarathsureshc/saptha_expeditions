import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/data/destinations";

export function DestinationCard({ dest, index = 0 }: { dest: Destination; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-elegant transition-all duration-500"
    >
      <Link to="/packages" search={{ destination: dest.slug } as never} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={dest.image}
            alt={`${dest.name}, ${dest.country}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">{dest.tagline}</span>
            <h3 className="mt-1 font-display text-2xl font-bold">{dest.name}</h3>
            <p className="text-xs text-white/70 mb-3">{dest.country}</p>
            <div className="overflow-hidden">
              <p className="text-sm text-white/85 line-clamp-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {dest.description}
              </p>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs text-white/70">
                From <span className="text-white font-bold text-base font-display">₹{dest.startingPrice.toLocaleString()}</span>
              </p>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-cta text-cta-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
