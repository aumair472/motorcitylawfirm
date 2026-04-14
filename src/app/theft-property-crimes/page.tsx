import Link from "next/link";
import { CTASection } from "@/components/cta-banner";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { LegalSchemas } from "@/components/legal-schemas";
import { buildFaqSchema, siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Theft & Property Crime Lawyer in Michigan",
  description:
    "Long-form theft and property crimes defense guide for Michigan clients, including penalties, defense tactics, long-term impact, FAQ, and consultation options.",
};

const faqItems = [
  {
    question: "Can theft charges be reduced in Michigan?",
    answer: "Yes, depending on evidence strength, intent, and defense strategy.",
  },
  {
    question: "Will a theft conviction affect my employment?",
    answer: "It can. Theft-related records may impact hiring, licensing, and promotions.",
  },
  {
    question: "Do I need a lawyer for a first theft offense?",
    answer: "Yes. Early legal defense can significantly improve your outcome and protect your future.",
  },
];

export default function TheftPropertyCrimesPage() {
  return (
    <>
      <LegalSchemas schemas={[buildFaqSchema(faqItems)]} />

      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0b1f3a_0%,#102c52_60%,#173b67_100%)] px-6 py-10 text-white shadow-[0_20px_60px_rgba(11,31,58,0.18)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d8e2f0]">
            Theft &amp; Property Crimes Defense in Michigan
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
            Theft &amp; Property Crime Lawyer in Michigan
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Even minor theft charges can impact your future. What may seem like a manageable allegation can quickly
            affect your record, your job prospects, and your financial stability.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            At Motor City Law Firm, we help reduce or dismiss charges through focused legal analysis, evidence
            challenges, and aggressive defense strategy built around your facts.
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
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Theft and Property Charges We Handle</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Theft allegations in Michigan can range from low-level retail accusations to felony-level charges that
            carry major prison exposure. The difference often comes down to value allegations, intent claims,
            evidentiary quality, and prior history. Early legal defense can prevent overcharging and position the
            case for a better outcome.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            We represent clients facing:
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>Shoplifting</li>
            <li>Burglary</li>
            <li>Robbery</li>
            <li>Fraud</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Each category requires a different defense approach. A shoplifting case may turn on proof of intent and
            identification reliability, while burglary or robbery allegations can involve contested entry, force,
            or property-control details. Fraud allegations often hinge on records interpretation and intent analysis.
            No matter the charge, the prosecution must prove every element with admissible evidence.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            We review surveillance material, witness statements, store or business records, police procedure, and
            timeline consistency to identify defense leverage early. Strong case outcomes usually start with early
            evidence pressure, not last-minute reaction.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Penalties for Theft and Property Crimes in Michigan</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Theft convictions can lead to jail or prison time, probation, restitution obligations, fines, and lasting
            criminal records. Penalty ranges vary based on case facts, alleged value, prior record, and charge level.
            Prosecutorial charging decisions can change quickly when defense counsel challenges evidence reliability
            and legal assumptions.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
            <li>Possible incarceration</li>
            <li>Financial penalties and restitution</li>
            <li>Permanent criminal record exposure</li>
            <li>Court-ordered supervision and conditions</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Beyond formal penalties, theft records can affect educational opportunities, housing options, and
            long-term career progression. For many clients, the biggest concern is not just the immediate sentence,
            but the future impact of a theft-related record. Defense strategy should account for both courtroom risk
            and collateral consequences.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-[var(--primary)] p-6 text-white sm:p-8">
            <h2 className="text-3xl font-semibold">Defense Strategies We Use</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Lack of intent</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Mistaken identity</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Evidence gaps</li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-200">
              Intent is central in many theft allegations. If intent cannot be proven reliably, prosecution leverage
              drops. We challenge weak inference chains and force evidentiary precision.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">Impact on Your Future</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Theft accusations can create reputational pressure immediately. Employers, licensing bodies, and
              screening processes may treat property crimes as trust-related red flags. That is why rapid defense
              matters. The earlier we engage, the better we can manage risk and protect your long-term options.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Our firm focuses on reducing exposure, pursuing dismissal opportunities, and preserving future
              stability through strategic, evidence-based advocacy.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-3xl font-semibold text-[var(--primary)]">Negotiation Leverage in Theft Cases</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Theft case outcomes often improve when negotiation is driven by documented evidentiary weaknesses rather
            than generalized mitigation requests. We structure negotiation around provable uncertainty, identification
            concerns, intent disputes, and timeline inconsistencies so prosecutors must evaluate risk realistically.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            This method can create stronger reduction opportunities and better record-protection outcomes. The key is
            preparing pressure points early, before the case narrative becomes fixed.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Strategic preparation also improves sentencing-position arguments if resolution becomes necessary, helping
            protect employment stability and future screening outcomes.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">What To Do After a Theft Arrest</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            <li>Do not make admissions without legal counsel present.</li>
            <li>Do not contact witnesses or alleged victims to explain your side.</li>
            <li>Preserve receipts, messages, and timeline records that support your defense.</li>
            <li>Contact an experienced Michigan defense attorney immediately.</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            The first 24 to 72 hours often determine whether a case gains avoidable momentum. Acting quickly helps
            preserve favorable evidence and prevents damaging mistakes.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Internal Resources and Related Defense Pages</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Cases often involve overlapping allegations. Review related legal pages to understand how defense
            strategy changes by charge category and evidence profile.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/dui-defense" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              DUI Defense
            </Link>
            <Link href="/drug-crimes" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              Drug Crimes Defense
            </Link>
            <Link href="/assault-violent-crimes" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              Assault &amp; Violent Crimes
            </Link>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-700">
            Internal linking improves user navigation and reinforces topical authority for search visibility across
            criminal defense topics.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">Why Intent and Identification Are Often Decisive</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              In many theft cases, the key legal question is not whether an event occurred, but whether intent can
              be proven beyond reasonable doubt. Accidental conduct, misunderstanding, payment confusion, and record
              errors can all create substantial doubt when properly investigated.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Identification reliability is another frequent pressure point. Surveillance quality, camera angles,
              timeline gaps, witness vantage, and cross-racial identification factors can materially affect case
              strength. We analyze these factors early to challenge weak certainty claims.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Where prosecution theory depends on inference rather than direct proof, disciplined defense can
              significantly improve negotiated and trial outcomes.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">Long-Term Record Protection Strategy</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              A theft charge can have consequences beyond the courtroom even when jail is not imposed. Record impact
              can influence employment screening, background checks, and professional opportunities for years.
              That is why we build strategy around more than immediate sentence exposure.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              We evaluate dismissal paths, reduction opportunities, restitution positioning, and negotiated outcomes
              with long-term record consequences in mind. This approach helps clients avoid short-term decisions that
              create avoidable long-term cost.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Early legal representation gives the defense more room to shape narrative, pressure weak evidence, and
              pursue outcomes that protect both immediate freedom and future stability.
            </p>
          </article>
        </div>
      </section>

      <FAQAccordion items={faqItems} />
      <ContactForm submitLabel="Get Your Free Consultation Today" />

      <CTASection
        title="Fight Theft Charges - Get Your Free Consultation Now"
        description="Your future deserves immediate protection. Speak with a Michigan defense attorney now."
        primaryLabel="Get Your Free Consultation Today"
        primaryHref="/contact"
        secondaryLabel="Call Now - Available 24/7"
        secondaryHref={siteConfig.phoneHref}
      />
    </>
  );
}
