import type { ReactNode } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[var(--border)] bg-white px-6 py-10 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">FAQ</p>
        <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">
          Clear answers for urgent criminal defense questions.
        </h2>
        <div className="mt-8 grid gap-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-[var(--border)] bg-slate-50 px-5 py-4"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--primary)]">
                <span>{item.question}</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}