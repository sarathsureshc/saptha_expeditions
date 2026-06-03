import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Plane } from "lucide-react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] grid place-items-center gradient-aurora"
        >
          <div className="text-center text-white">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-4 inline-flex"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur"
              >
                <Plane className="h-8 w-8" />
              </motion.div>
            </motion.div>
            <p className="font-display text-2xl font-bold tracking-tight">SAPTHA</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mt-1">Expeditions</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="mx-auto mt-6 h-0.5 bg-cta rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
