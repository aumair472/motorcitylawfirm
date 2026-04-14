import Link from "next/link";
import { CTASection } from "@/components/cta-banner";
import { CaseResultsGrid } from "@/components/case-results-grid";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Case Results",
  description:
    "Representative criminal defense results showing how early motion work and negotiation can change the outcome of Michigan cases.",
};

const resultHighlights = [
  {
    title: "License and employment protection",
    text: "OWI and DUI cases often need more than a courtroom argument. We focus on preserving work, driving, and leverage at the same time.",
  },
  {
    title: "Suppression and procedural issues",
    text: "When the stop, search, or testing process is flawed, the right motion can change the leverage in the case quickly.",
  },
  {
    title: "Negotiation from strength",
    text: "Good resolutions are usually built on early preparation, not last-minute panic when the record is already damaged.",
  },
];

export default function CaseResultsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Case Results</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[var(--primary)] sm:text-6xl">
            Results matter when your freedom, record, and future are all on the line.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            These representative outcomes reflect the kind of defense work that starts with early analysis,
            pressure on the evidence, and clear communication with the client from day one.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {resultHighlights.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] bg-slate-50 p-5 text-sm text-slate-700">
                <h2 className="text-xl font-semibold text-[var(--primary)]">{item.title}</h2>
                <p className="mt-2 leading-6">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CaseResultsGrid />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--primary)] p-6 text-white sm:p-8">
          <h2 className="text-4xl font-semibold">What strong results usually require</h2>
          <p className="mt-4 text-sm leading-6 text-slate-200">
            Every case is different, but the pattern is consistent: move fast, challenge the weak points, and
            negotiate from a position of preparation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--primary)]"
          >
            Free Consultation
          </Link>
        </div>
        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-6 sm:p-8">
          <h3 className="text-3xl font-semibold text-[var(--primary)]">Need a closer look at your charge?</h3>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            If you need a criminal defense lawyer Michigan clients can reach quickly, send your details or call
            now so the evidence does not keep moving without you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white">
              Free Consultation
            </Link>
            <a href="tel:+13138889900" className="rounded-full border border-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--primary)]">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="When the result matters, the defense has to start before the case gets comfortable against you."
        description="Speak with Motor City Law Firm about the charge, the county, and the deadlines already in motion."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref="tel:+13138889900"
      />

      <ContactForm />
    </>
  );
}