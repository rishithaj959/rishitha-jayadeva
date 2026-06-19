import { profile } from "@/lib/content";

const bars = [38, 52, 41, 60, 55, 72, 64, 80, 70, 88, 95, 84];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <p className="animate-fadeUp font-mono text-xs uppercase tracking-[0.25em] text-signal">
          Data Scientist · Melbourne, AU
        </p>

        <h1
          className="mt-6 max-w-4xl animate-fadeUp font-display text-4xl font-medium leading-[1.08] text-balance text-paper sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.08s" }}
        >
          {profile.tagline}
        </h1>

        <p
          className="mt-6 max-w-xl animate-fadeUp font-body text-base leading-relaxed text-slate-soft md:text-lg"
          style={{ animationDelay: "0.16s" }}
        >
          {profile.subTagline}
        </p>

        <div
          className="mt-10 flex animate-fadeUp flex-wrap items-center gap-4"
          style={{ animationDelay: "0.24s" }}
        >
          <a
            href="#work"
            className="rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 focus-ring"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 font-mono text-sm font-medium text-paper transition-colors hover:border-signal hover:text-signal focus-ring"
          >
            Get in touch
          </a>
        </div>

        <p className="mt-6 max-w-md font-mono text-xs text-slate-soft/80">
          {profile.visaNote}
        </p>
      </div>

      {/* signature element: ambient sparkline behind hero */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden w-[42%] -translate-y-1/2 opacity-30 md:block">
        <svg viewBox="0 0 240 120" className="w-full">
          <polyline
            points={bars.map((b, i) => `${i * 22},${120 - b}`).join(" ")}
            fill="none"
            stroke="#2DD4BF"
            strokeWidth="2"
          />
          {bars.map((b, i) => (
            <circle key={i} cx={i * 22} cy={120 - b} r="2.5" fill="#F2A23A" />
          ))}
        </svg>
      </div>
    </section>
  );
}
