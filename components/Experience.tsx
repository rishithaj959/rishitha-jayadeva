import { experience, education, certifications, talk } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Experience</p>
        <h2 className="mt-4 font-display text-3xl font-medium text-paper md:text-4xl">
          Where the work happened
        </h2>

        <div className="mt-12 space-y-12">
          {experience.map((e) => (
            <div key={e.company} className="grid gap-4 border-t border-line/60 pt-8 md:grid-cols-[0.32fr_0.68fr]">
              <div>
                <h3 className="font-display text-lg font-medium text-paper">{e.role}</h3>
                <p className="mt-1 font-mono text-sm text-signal">{e.company}</p>
                <p className="mt-1 font-mono text-xs text-slate-soft">
                  {e.period} · {e.location}
                </p>
              </div>
              <ul className="space-y-3">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 font-body text-sm leading-relaxed text-slate-soft md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-line/60 pt-10 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Education</h3>
            <div className="mt-4 space-y-4">
              {education.map((ed) => (
                <div key={ed.school}>
                  <p className="font-display text-base text-paper">{ed.program}</p>
                  <p className="font-mono text-xs text-slate-soft">
                    {ed.school} · {ed.period}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-amber">
              Conference Talk
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-soft">
              Presented <span className="text-paper">"{talk.title}"</span> at {talk.venue}.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Certifications</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="rounded-lg border border-line px-3 py-2 font-mono text-xs text-slate-soft"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
