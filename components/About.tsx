export default function About() {
  return (
    <section className="px-6 py-24" id="about">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.4fr_0.6fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">About</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-paper md:text-4xl">
            Why data, why me
          </h2>
        </div>

        <div className="space-y-5 font-body text-base leading-relaxed text-slate-soft md:text-lg">
          <p>
            I started in engineering and admin work, which means I learned to read a business
            before I learned to read a dataset — what a stakeholder actually needs rarely matches
            what they ask for first. That habit carried straight into analytics.
          </p>
          <p>
            At V Tricks Technologies I sat between raw operational data and the people who had to
            act on it, which meant the job was never just "build the dashboard." It was clean the
            data until it stopped lying, then design the view that made the right decision obvious.
          </p>
          <p>
            My Master of Data Science at Monash pushed that further into machine learning,
            streaming pipelines, and geospatial work — areas I now bring back into practical,
            business-facing analytics rather than treating them as separate disciplines.
          </p>
        </div>
      </div>
    </section>
  );
}
