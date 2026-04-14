import Link from "next/link";
import { services } from "@/lib/site-data";

export function ServicesGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            Practice Areas
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">
            Focused defense for the charges that put your future at risk.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          When you need a criminal lawyer Detroit residents can contact quickly, the response has to be fast,
          strategic, and built around the pressure points in your case.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.href}
            className="group rounded-[2rem] border border-[var(--border)] bg-white p-7 shadow-[0_12px_40px_rgba(11,31,58,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,31,58,0.1)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--primary)]">{service.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{service.summary}</p>
              </div>
              <span className="rounded-full border border-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                24/7
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {service.bullets.map((bullet) => (
                <span key={bullet} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                  {bullet}
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-4">
              <Link
                href={service.href}
                className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--secondary)]"
              >
                Learn More
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-[var(--accent)]">
                Get Help Now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}