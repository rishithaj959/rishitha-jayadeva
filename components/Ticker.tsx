import { kpis } from "@/lib/content";

export default function Ticker() {
  const doubled = [...kpis, ...kpis];

  return (
    <div className="overflow-hidden border-y border-line/60 bg-inksoft py-4">
      <div className="flex w-max animate-marquee gap-12">
        {doubled.map((k, i) => (
          <div key={i} className="flex items-baseline gap-2 whitespace-nowrap font-mono">
            <span className="text-xl font-semibold text-signal">{k.value}</span>
            <span className="text-xs uppercase tracking-wider text-slate-soft">{k.label}</span>
            <span className="ml-10 text-line">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
