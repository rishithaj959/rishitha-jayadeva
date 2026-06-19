import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-line bg-inksoft px-8 py-16 text-center md:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Contact</p>
        <h2 className="mt-4 font-display text-3xl font-medium text-paper md:text-5xl">
          Got a dataset worth a second look?
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-slate-soft">
          Open to Data Analyst and Business Intelligence roles across Australia. I reply fast and I
          show up with questions about your data, not just my resume.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 focus-ring"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-signal hover:text-signal focus-ring"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-signal hover:text-signal focus-ring"
          >
            {profile.phone}
          </a>
        </div>
      </div>

      <footer className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-line/60 pt-8 font-mono text-xs text-slate-soft md:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
