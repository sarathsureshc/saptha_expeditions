import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Clock, MapPin } from "lucide-react";
import type { TravelPackage } from "@/data/packages";

export function PackageCard({ pkg, index = 0 }: { pkg: TravelPackage; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
    >
      <Link to="/packages/$slug" params={{ slug: pkg.slug }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="rounded-full bg-cta/95 text-cta-foreground px-3 py-1 text-xs font-semibold backdrop-blur">
              {pkg.category}
            </span>
            {pkg.oldPrice && (
              <span className="rounded-full bg-white/90 text-primary px-3 py-1 text-xs font-bold backdrop-blur">
                Save ₹{(pkg.oldPrice - pkg.price).toLocaleString()}
              </span>
            )}
          </div>
          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-primary">
            <Star className="h-3 w-3 fill-cta text-cta" />
            {pkg.rating}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{pkg.destination}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{pkg.duration}</span>
          </div>
          <h3 className="font-display font-bold text-lg leading-tight group-hover:text-accent transition-colors">
            {pkg.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{pkg.overview}</p>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Starts from</p>
              <p className="font-display text-xl font-bold text-primary">
                ₹{pkg.price.toLocaleString()}
                {pkg.oldPrice && (
                  <span className="ml-2 text-xs font-medium text-muted-foreground line-through">
                    ₹{pkg.oldPrice.toLocaleString()}
                  </span>
                )}
              </p>
            </div>
            <span className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold group-hover:bg-cta transition-colors">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
