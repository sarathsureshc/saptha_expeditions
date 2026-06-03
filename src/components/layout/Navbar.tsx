import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const nav = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/stories", label: "Stories" },
  { to: "/fleet", label: "Fleet" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span
              className={`grid h-9 w-9 place-items-center rounded-xl gradient-aurora text-white shadow-glow transition-transform group-hover:rotate-12`}
            >
              <Compass className="h-5 w-5" />
            </span>
            <span className="font-display font-bold text-lg tracking-tight">
              <span className={scrolled ? "text-foreground" : "text-white drop-shadow"}>SAPTHA</span>
              <span className="text-accent ml-1">·</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
                activeProps={{ className: scrolled ? "text-accent" : "text-accent" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`hidden sm:grid h-9 w-9 place-items-center rounded-xl transition-colors ${
                scrolled
                  ? "hover:bg-secondary text-foreground"
                  : "hover:bg-white/10 text-white"
              }`}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Plan Trip
            </Link>
            <button
              className={`lg:hidden grid h-9 w-9 place-items-center rounded-xl ${
                scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-xl lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background p-6 shadow-elegant flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-lg">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-xl hover:bg-secondary"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-6 flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl text-base font-medium hover:bg-secondary"
                    activeProps={{ className: "bg-secondary text-accent" }}
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex items-center gap-2">
                <button
                  onClick={toggle}
                  className="flex-1 h-11 rounded-xl border border-border hover:bg-secondary flex items-center justify-center gap-2 text-sm"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  {theme === "dark" ? "Light" : "Dark"} mode
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
