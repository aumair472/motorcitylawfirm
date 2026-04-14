import Link from "next/link";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[var(--primary)] px-6 py-10 text-white sm:px-8">
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight">{title}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-200">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-[var(--primary)]"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}