import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Featured Work</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium text-paper md:text-4xl">
          Projects that turn data into a decision someone can act on
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col rounded-2xl border border-line bg-inksoft p-7 transition-colors hover:border-signal/50 focus-ring"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-amber">
                  {p.tag}
                </span>
                <span className="font-mono text-[11px] text-slate-soft opacity-0 transition-opacity group-hover:opacity-100">
                  view →
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-medium text-paper">{p.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-soft">{p.summary}</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-paper/80">{p.impact}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
