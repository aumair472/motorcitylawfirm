import Link from "next/link";
import { CTASection } from "@/components/cta-banner";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { LegalSchemas } from "@/components/legal-schemas";
import { buildFaqSchema, siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Assault & Violent Crime Lawyer in Michigan",
  description:
    "Long-form assault and violent crime defense guidance for Michigan clients, including penalties, legal process, defense strategies, and urgent consultation options.",
};

const faqItems = [
  {
    question: "Can assault charges be dropped in Michigan?",
    answer: "Yes, depending on evidence quality, witness credibility, and defense strategy.",
  },
  {
    question: "Can self-defense prevent a conviction?",
    answer: "Yes. When facts support lawful self-defense, charges can be reduced or dismissed.",
  },
  {
    question: "Should I speak to police to explain my side?",
    answer: "Not before speaking with counsel. Early statements can be misunderstood or used against you.",
  },
];

export default function AssaultViolentCrimesPage() {
  return (
    <>
      <LegalSchemas schemas={[buildFaqSchema(faqItems)]} />

      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0b1f3a_0%,#102c52_60%,#173b67_100%)] px-6 py-10 text-white shadow-[0_20px_60px_rgba(11,31,58,0.18)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d8e2f0]">
            Assault &amp; Violent Crime Defense in Michigan
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
            Assault &amp; Violent Crime Lawyer in Michigan
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Violent crime charges can have life-changing consequences. If you were recently arrested or charged,
            you may be dealing with fear, uncertainty, and immediate pressure about your future, your family,
            and your reputation.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            At Motor City Law Firm, we provide aggressive defense built for high-stakes allegations. We move
            quickly to protect your rights, preserve favorable evidence, and challenge weak prosecution narratives
            before they become harder to undo.
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
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Understanding Assault and Violent Crime Charges in Michigan</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Violent crime allegations in Michigan are prosecuted aggressively and can escalate quickly based on
            injury claims, witness statements, and prior history. Cases that begin as misdemeanor allegations can
            become felony matters depending on how facts are framed and how evidence develops. A defense response
            should begin immediately, not after the first hearing date arrives.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Common allegations include assault and battery, domestic violence, aggravated assault, and charges
            involving alleged use of a weapon. These files often contain conflicting statements, emotional context,
            and incomplete timelines. Police reports may capture only part of what happened, and early witness
            narratives can change. A disciplined defense strategy tests every claim before accepting any version of
            events as final.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Even before conviction, violent crime accusations can trigger immediate collateral damage. Clients can
            face employment risk, court-imposed conditions, and social stigma. Protecting your position requires both
            legal precision and fast tactical action.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">Types of Assault Cases We Defend</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li className="rounded-xl bg-slate-50 px-4 py-3">Assault and battery</li>
              <li className="rounded-xl bg-slate-50 px-4 py-3">Domestic violence allegations</li>
              <li className="rounded-xl bg-slate-50 px-4 py-3">Aggravated assault charges</li>
              <li className="rounded-xl bg-slate-50 px-4 py-3">Weapon-related assault accusations</li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Each case type creates different risks and defense opportunities. The legal approach should be tailored
              to charge level, evidence quality, and court venue.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">Penalties and What Is at Stake</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li className="rounded-xl bg-slate-50 px-4 py-3">Jail or prison exposure</li>
              <li className="rounded-xl bg-slate-50 px-4 py-3">Permanent criminal record</li>
              <li className="rounded-xl bg-slate-50 px-4 py-3">Probation, restrictions, and financial penalties</li>
              <li className="rounded-xl bg-slate-50 px-4 py-3">Reputation and career damage</li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Prosecutors may seek maximum leverage early. A strong defense pushes back before assumptions harden
              into sentencing-level outcomes.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-3xl font-semibold text-[var(--primary)]">Pretrial Preparation That Protects Trial Leverage</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Even when a case appears headed toward trial, pretrial preparation often determines final outcome. We
            focus on evidence indexing, witness sequencing, contradiction mapping, and motion planning long before
            courtroom testimony begins. This preparation improves negotiation position and creates stronger cross-
            examination pathways if trial becomes necessary.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Courts respond to disciplined defense strategy. When prosecutors see the defense is prepared to test every
            evidentiary assumption, resolution conversations frequently change. That pressure can be decisive in
            reducing exposure and protecting long-term outcomes.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] bg-[var(--primary)] p-6 text-white sm:p-8">
          <h2 className="text-4xl font-semibold">Defense Strategies That Can Change Case Direction</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-xl font-semibold text-[var(--accent)]">Self-Defense Arguments</h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                We evaluate whether force was legally justified under the circumstances and whether the incident was
                presented fairly by police and witnesses.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-xl font-semibold text-[var(--accent)]">False Allegation Analysis</h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                Emotional disputes, relationship conflict, or third-party pressure can produce exaggerated or false
                claims. We test consistency and motive.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-xl font-semibold text-[var(--accent)]">Evidence Investigation</h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                We analyze video, medical records, communications, and timeline gaps that can weaken the prosecution
                theory and support reduction or dismissal.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">The Legal Process and How We Guide You Through It</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Assault cases move through a sequence of hearings where early preparation can materially change outcome.
            We guide clients through consultation, investigation, charge review, motion strategy, negotiation, and,
            when necessary, trial defense. At each stage, we focus on preserving leverage and minimizing long-term
            consequences.
          </p>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            <li>1. Immediate case intake and urgent risk review</li>
            <li>2. Evidence collection and witness credibility analysis</li>
            <li>3. Defense strategy development and motion planning</li>
            <li>4. Court representation and negotiated or litigated resolution</li>
          </ol>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Clients are often surprised by how much can be done before trial. With a proactive strategy, we can
            challenge legal assumptions early, pressure weak evidence, and position the case for better outcomes.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Internal Resources and Related Defense Pages</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Explore related criminal defense services to understand how strategy shifts when allegations overlap or
            when multiple cases are active at the same time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/dui-defense" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              DUI Defense
            </Link>
            <Link href="/drug-crimes" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              Drug Crimes Defense
            </Link>
            <Link href="/theft-property-crimes" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              Theft &amp; Property Crimes
            </Link>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-700">
            Internal linking improves user experience and reinforces topical authority by connecting related legal
            topics that clients actively search during urgent situations.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">How We Handle Witness and Credibility Issues</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Assault files often rise or fall on witness reliability. People under stress may misremember timing,
              sequence, distance, or who initiated physical contact. Some statements are influenced by emotion,
              relationship tension, or outside pressure. A strong defense does not treat witness language as fixed
              truth. It tests internal consistency, external corroboration, and motive context.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              We compare statements against objective records: call logs, surveillance clips, medical notes,
              photographs, and communication history. When witness accounts shift over time, those changes can be
              critical to suppression arguments, negotiation pressure, and trial strategy.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Credibility work is detailed and time-sensitive. The earlier it starts, the stronger the defense
              position becomes.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">From Crisis to Control: Client Strategy During Active Cases</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Clients facing violent crime charges often feel pressure to "fix" the situation directly. That can
              create additional legal risk. Our role includes clear guidance on court conditions, communication
              boundaries, and conduct that protects defense credibility. Strategic discipline outside the courtroom
              can be just as important as legal arguments inside it.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              We help clients prepare for each procedural stage with practical expectations and focused next steps.
              When clients understand timeline, risks, and leverage points, decision-making improves and avoidable
              mistakes decrease.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Effective violent crime defense is not one courtroom speech. It is coordinated strategy across evidence,
              process, negotiation, and client protection from day one through final resolution.
            </p>
          </article>
        </div>
      </section>

      <FAQAccordion items={faqItems} />
      <ContactForm submitLabel="Get Your Free Consultation Today" />

      <CTASection
        title="Protect Your Freedom - Speak to a Defense Attorney Today"
        description="Violent crime charges can change your life quickly. Take immediate action with a defense team ready to fight for your future."
        primaryLabel="Get Your Free Consultation Today"
        primaryHref="/contact"
        secondaryLabel="Call Now - Available 24/7"
        secondaryHref={siteConfig.phoneHref}
      />
    </>
  );
}
