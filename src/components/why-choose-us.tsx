const reasons = [
  "Aggressive defense strategies tailored to your case",
  "Deep experience in Michigan courts",
  "Fast response when you need it most",
  "Personalized attention for every client",
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Why Choose Us</p>
        <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">
          Built for urgent criminal defense in Michigan.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <article key={reason} className="rounded-[1.5rem] bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              {reason}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}