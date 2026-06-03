import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { stories, type Story } from "@/data/stories";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const s = stories.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} — SAPTHA Stories` },
      { name: "description", content: loaderData.excerpt },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: loaderData.excerpt },
      { property: "og:image", content: loaderData.cover },
      { property: "og:type", content: "article" },
    ] : [],
  }),
  component: StoryDetail,
});

function StoryDetail() {
  const s = Route.useLoaderData() as Story;
  const related = stories.filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <>
      <section className="relative pt-32 pb-20 min-h-[55vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={s.cover} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-white">
          <Link to="/stories" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"><ArrowLeft className="h-4 w-4" />All stories</Link>
          <span className="mt-6 inline-block rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">{s.category}</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-black leading-tight">{s.title}</h1>
          <p className="mt-4 text-white/80">{s.author} · {s.authorRole} · {s.date} · {s.readTime}</p>
        </div>
      </section>
      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 space-y-5 text-lg leading-relaxed text-foreground/85">
          {s.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </article>
      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="font-display text-2xl font-bold mb-6">More stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/stories/$slug" params={{ slug: r.slug }} className="group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition">
                <div className="aspect-[16/10] overflow-hidden"><img src={r.cover} alt={r.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /></div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground">{r.category}</p>
                  <h4 className="mt-1 font-display font-bold group-hover:text-accent transition">{r.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
