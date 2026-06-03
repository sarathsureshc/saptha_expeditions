import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { LoadingScreen } from "../components/layout/LoadingScreen";
import { BackToTop } from "../components/layout/BackToTop";
import { CustomCursor } from "../components/layout/CustomCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-black gradient-text-ocean">404</h1>
        <h2 className="mt-4 text-2xl font-display font-semibold">Lost in transit</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has wandered off the map.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground shadow-glow hover:scale-105 transition"
        >
          Take me home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display font-semibold">Something went off-route</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
          >Try again</button>
          <a href="/" className="rounded-xl border border-border px-4 py-2 text-sm font-medium">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SAPTHA Expeditions — Journeys Beyond Destinations" },
      { name: "description", content: "Premium travel agency curating handpicked group tours, honeymoons, family vacations, and adventure expeditions across India and the world." },
      { name: "author", content: "SAPTHA Expeditions" },
      { property: "og:title", content: "SAPTHA Expeditions — Journeys Beyond Destinations" },
      { property: "og:description", content: "Premium travel agency curating handpicked tours, honeymoons, and adventures across the world." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SAPTHA Expeditions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><HeadContent /></head>
      <body><Scripts />{children}</body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </QueryClientProvider>
  );
}
