import { useEffect, useState } from "react";

/** Subtle desktop-only blended cursor follower */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference transition-transform duration-150 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        background: "white",
        opacity: 0.85,
      }}
    />
  );
}
