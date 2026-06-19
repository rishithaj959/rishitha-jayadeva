import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Skills</p>
        <h2 className="mt-4 font-display text-3xl font-medium text-paper md:text-4xl">
          The stack behind the dashboards
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-line bg-inksoft p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-signal">{s.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-paper/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
