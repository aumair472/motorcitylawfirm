import { trustBadges } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {trustBadges.map((badge) => (
          <div
            key={badge.label}
            className="rounded-[1.75rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)]"
          >
            <h3 className="text-xl font-semibold text-[var(--primary)]">{badge.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}