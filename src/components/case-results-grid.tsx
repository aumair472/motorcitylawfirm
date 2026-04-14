import { results } from "@/lib/site-data";

export function CaseResultsGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--primary)] px-6 py-10 text-white sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d8e2f0]">Case Results</p>
        <h2 className="mt-3 text-4xl font-semibold">Selected outcomes that show what fast defense can do.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-200">
          These examples reflect the kind of leverage that comes from moving early, identifying weak points,
          and forcing the state to prove every element of the charge.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {results.map((result) => (
            <article key={result.charge} className="rounded-[1.5rem] bg-white p-6 text-[var(--primary)]">
              <h3 className="text-xl font-semibold">{result.charge}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{result.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}