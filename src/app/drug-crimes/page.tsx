import Link from "next/link";
import { CTASection } from "@/components/cta-banner";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { LegalSchemas } from "@/components/legal-schemas";
import { buildFaqSchema, siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Drug Crime Lawyer in Michigan",
  description:
    "Drug crime lawyer Michigan representation for possession, trafficking, and distribution charges. Speak with a drug possession attorney Michigan clients trust.",
};

const faqItems = [
  {
    question: "Can a drug charge be dismissed in Michigan?",
    answer: "Yes, depending on how evidence was collected and whether legal defenses apply.",
  },
  {
    question: "Can first-time drug charges still lead to jail?",
    answer: "Yes, penalties can still be serious, which is why early legal defense is critical.",
  },
  {
    question: "Do I need a lawyer if police found drugs in my car or home?",
    answer: "Yes. Search legality, possession issues, and procedural errors can all affect your case.",
  },
];

export default function DrugCrimesPage() {
  return (
    <>
      <LegalSchemas schemas={[buildFaqSchema(faqItems)]} />

      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0b1f3a_0%,#102c52_60%,#173b67_100%)] px-6 py-10 text-white shadow-[0_20px_60px_rgba(11,31,58,0.18)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d8e2f0]">
            drug crime lawyer Michigan | drug possession attorney Michigan
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
            Drug Crime Lawyer in Michigan
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Facing drug charges in Michigan can be a life-changing experience. Whether you are accused of
            possession, distribution, or trafficking, the consequences can be severe.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            At Motor City Law Firm, we understand the urgency and seriousness of drug charges. Our legal team works
            aggressively to protect your rights and build a strong defense.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--primary)]"
            >
              Get Your Free Consultation Today
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white"
            >
              Call Now - Available 24/7
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Types of Drug Charges We Handle</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Drug allegations range from simple possession to high-exposure trafficking claims. The prosecution often
            starts from worst-case assumptions, but assumptions are not proof. A drug crime lawyer Michigan clients
            can contact immediately should review the actual evidence, the stop timeline, and the legal basis for
            every search and seizure step. Small procedural errors can create major defense opportunities.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            We defend clients facing:
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>Drug possession</li>
            <li>Drug trafficking</li>
            <li>Distribution charges</li>
            <li>Prescription drug crimes</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            The legal difference between possession and intent-related offenses can be enormous. Prosecutors may use
            packaging, cash, text messages, or location context to argue intent, even when those factors have
            innocent explanations. A drug possession attorney Michigan residents trust should challenge weak inferences
            and force the state to prove each element with reliable evidence.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Prescription drug matters can be equally complex. Lawful possession questions, labeling issues,
            administrative records, and medical context often require careful review. These are not cases to handle
            passively. Fast legal strategy can prevent harmful assumptions from hardening into formal case narrative.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Penalties for Drug Crimes in Michigan</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Drug charges can result in jail or prison time, heavy fines, a permanent criminal record, and long-term
            employment consequences. Beyond sentencing, clients often face immediate fear about family stability,
            housing eligibility, and professional future. The right defense strategy should account for both legal
            penalties and real-world impact.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
            <li>Jail or prison time</li>
            <li>Heavy fines</li>
            <li>Permanent criminal record</li>
            <li>Loss of employment opportunities</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Penalty ranges vary by substance, amount, prior record, and alleged conduct. Prosecutors may file charges
            aggressively early, then reassess when defense pressure exposes evidentiary weakness. That is why timing
            matters. A drug crime lawyer Michigan courts respect will move quickly to challenge evidence quality,
            chain-of-custody issues, and constitutional compliance before case posture worsens.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Without proper defense, even lower-level allegations can create long-term damage. With disciplined legal
            strategy, many cases can be narrowed, reduced, or resolved more favorably than clients expect at arrest.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-[var(--primary)] p-6 text-white sm:p-8">
            <h2 className="text-3xl font-semibold">Defense Strategies We Use</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Challenging illegal searches</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Proving lack of possession</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Evidence suppression</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Case dismissal tactics</li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-200">
              Search and seizure litigation can change everything in drug cases. If officers lacked legal grounds,
              the defense can seek suppression of key evidence. When key evidence falls out, prosecutors often lose
              leverage quickly.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">Why Legal Representation Matters</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Without proper legal defense, you risk facing maximum penalties. Early representation can prevent
              harmful admissions, preserve key evidence, and frame the case around provable facts instead of fear.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              We focus on reducing charges, avoiding jail time, and protecting your future. As a drug possession
              attorney Michigan clients rely on, we treat every file as urgent and strategic from day one.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Our team builds defense planning around your specific risk profile: prior history, charge level,
              evidentiary quality, and county-specific court dynamics. This tailored approach consistently outperforms
              generic defense templates.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">What To Do Immediately After a Drug Arrest</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <li>Do not discuss case details with police without counsel.</li>
            <li>Do not consent to additional searches without legal advice.</li>
            <li>Write down key timeline details while memories are fresh.</li>
            <li>Contact a drug crime lawyer Michigan defendants can reach quickly.</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Early action preserves defenses and improves negotiation posture. Delay gives prosecutors more time to
            structure a narrative while your best evidence becomes harder to recover.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">How Search and Seizure Law Shapes Drug Cases</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Search-and-seizure litigation is often the central battlefield in drug crime defense. Officers must
              follow constitutional standards when stopping vehicles, entering homes, and seizing alleged evidence.
              When those standards are violated, key evidence may be excluded from court. In many files, exclusion
              of even one category of evidence can dramatically change the prosecution's leverage.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              A drug crime lawyer Michigan clients hire early will review consent issues, warrant scope, probable
              cause claims, search duration, and report consistency. Small legal errors can have major legal effect.
              Prosecutors may initially project confidence, then adjust once defense motions expose constitutional
              weaknesses.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Courts do not evaluate search quality based on what officers believed afterward. They evaluate whether
              legal requirements were met at the moment of action. That difference matters in almost every
              suppression analysis.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">Building Leverage Before Court Pressure Peaks</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Strong outcomes in drug cases are usually built through preparation before major hearings, not after.
              We focus on early record review, witness mapping, procedural challenge planning, and negotiation timing.
              This approach increases pressure on weak files and creates options where passive defense leaves none.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              A drug possession attorney Michigan defendants trust should also account for collateral concerns, such
              as licensing risk, immigration sensitivity, family obligations, and employment exposure. Legal defense
              is not complete if it ignores real-world consequences.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              If prosecutors know the defense is prepared to litigate evidentiary issues thoroughly, resolution
              options often improve. The right strategy turns urgency into advantage.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Internal Resources and Related Defense Pages</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            If your situation includes overlapping allegations, review our related defense pages for additional legal
            guidance and strategy context.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/dui-defense" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              DUI Defense
            </Link>
            <Link href="/assault-violent-crimes" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              Assault &amp; Violent Crimes
            </Link>
            <Link href="/theft-property-crimes" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              Theft &amp; Property Crimes
            </Link>
          </div>
+          <p className="mt-6 text-sm leading-7 text-slate-700">
+            Internal linking between services helps clients quickly find relevant legal answers and helps search
+            engines understand the depth of your criminal defense coverage across related topics.
+          </p>
        </article>
      </section>

      <FAQAccordion items={faqItems} />
      <ContactForm submitLabel="Get Your Free Consultation Today" />

      <CTASection
        title="Speak With a Drug Crime Lawyer Today"
        description="Your case will not slow down on its own. Get immediate legal defense built to protect your rights and future."
        primaryLabel="Get Your Free Consultation Today"
        primaryHref="/contact"
        secondaryLabel="Call Now - Available 24/7"
        secondaryHref={siteConfig.phoneHref}
      />
    </>
  );
}
