import Link from "next/link";
import { CTASection } from "@/components/cta-banner";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { LegalSchemas } from "@/components/legal-schemas";
import { buildFaqSchema, siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "DUI Defense Lawyer in Michigan",
  description:
    "DUI lawyer Michigan clients trust for aggressive defense, license protection, and fast legal action. Speak with a Michigan DUI defense lawyer today.",
};

const faqItems = [
  {
    question: "Can a DUI be dismissed in Michigan?",
    answer: "Yes, depending on the evidence and legal strategy.",
  },
  {
    question: "How long does a DUI stay on record?",
    answer: "It can stay for years, but legal options may reduce impact.",
  },
  {
    question: "Do I need a lawyer for a first offense?",
    answer: "Absolutely - even first offenses can have serious consequences.",
  },
];

export default function DuiDefensePage() {
  return (
    <>
      <LegalSchemas schemas={[buildFaqSchema(faqItems)]} />

      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0b1f3a_0%,#102c52_60%,#173b67_100%)] px-6 py-10 text-white shadow-[0_20px_60px_rgba(11,31,58,0.18)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d8e2f0]">
            DUI lawyer Michigan | DUI attorney near me | Michigan DUI defense lawyer
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
            DUI Defense Lawyer in Michigan
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            If you&apos;ve been arrested for DUI in Michigan, you are likely feeling overwhelmed, anxious, and unsure
            about what comes next. A DUI conviction can affect your freedom, your driving privileges, your job,
            and your future.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            But being charged does NOT mean you are guilty.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            At Motor City Law Firm, we provide aggressive DUI defense strategies designed to protect your rights
            and minimize the consequences. From the moment you contact us, we begin building a strong defense
            tailored to your case.
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
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Understanding DUI Laws in Michigan</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Driving under the influence (DUI), also known as Operating While Intoxicated (OWI) in Michigan, is
            taken very seriously by law enforcement and courts. Prosecutors are trained to move quickly, gather
            officer observations, and rely heavily on chemical testing. A skilled DUI lawyer Michigan residents can
            reach quickly knows that no case should be accepted at face value. Every report, test record, and video
            timeline should be examined for inconsistencies, legal gaps, and procedural errors.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            In Michigan, you can be charged with DUI if your blood alcohol concentration (BAC) is 0.08% or higher,
            if you are visibly impaired by alcohol or drugs, or if you are under the influence of controlled
            substances. While these legal thresholds sound straightforward, real-world DUI investigations often
            include disputed field observations, unclear timeline details, and testing conditions that deserve
            close review. That is why early legal intervention matters.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Even a first-time offense can carry significant penalties. Beyond courtroom outcomes, most people face
            immediate pressure around transportation, employment, family obligations, and financial stability.
            A Michigan DUI defense lawyer should address both legal exposure and day-to-day consequences, because
            the case does not exist in a vacuum. It affects your life immediately.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            If you are searching for a DUI attorney near me, focus on urgency, courtroom familiarity, and clear
            communication. The first days after an arrest can shape the direction of the entire case. Statements,
            missed deadlines, or inaction can create avoidable problems. A fast defense response protects options
            and starts building leverage before the prosecution gains momentum.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Penalties for DUI in Michigan</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            The consequences of a DUI conviction can be severe and long-lasting. Penalties can escalate depending on
            prior history, aggravating facts, and how the case is litigated. A strong defense does not assume a
            fixed outcome. It pressures the evidence, evaluates legal defenses, and seeks the best possible result
            at each stage.
          </p>

          <h3 className="mt-8 text-2xl font-semibold text-[var(--primary)]">First Offense</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>Up to 93 days in jail</li>
            <li>Fines up to $500</li>
            <li>License suspension</li>
            <li>Community service</li>
          </ul>

          <h3 className="mt-8 text-2xl font-semibold text-[var(--primary)]">Second Offense</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>Up to 1 year in jail</li>
            <li>Mandatory license revocation</li>
            <li>Vehicle immobilization</li>
          </ul>

          <h3 className="mt-8 text-2xl font-semibold text-[var(--primary)]">Third Offense (Felony DUI)</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>Up to 5 years in prison</li>
            <li>Permanent criminal record</li>
            <li>Heavy fines and restrictions</li>
          </ul>

          <p className="mt-6 text-sm leading-7 text-slate-700">
            Penalties can also trigger collateral damage that outlasts the court sentence. Insurance costs can rise,
            professional opportunities can narrow, and background checks can become barriers. A DUI lawyer Michigan
            clients trust should evaluate these downstream effects and build a strategy that protects your future,
            not just your next hearing date.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">How Our DUI Defense Lawyers Can Help</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Every DUI case is different, and a strong legal strategy can make all the difference. Our legal team
            carefully analyzes every aspect of your case, including whether the traffic stop was lawful, whether
            breathalyzer or blood test results were accurate, whether police conduct complied with legal standards,
            and whether field sobriety testing was reliable under the conditions present.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            We do not simply react to allegations. We investigate records, timelines, procedures, and officer
            statements to identify weaknesses in the prosecution's case and use them to your advantage. In some
            matters, that means motions to suppress. In others, it means targeted negotiation backed by evidentiary
            challenges. In all cases, it means detailed preparation and direct communication with the client.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            A Michigan DUI defense lawyer should also help clients avoid costly mistakes after arrest. That includes
            guidance on what not to say, what documents to preserve, and how to prepare for hearings. People who
            search for a DUI attorney near me are often under extreme stress. We prioritize clarity, urgency, and
            practical next steps from the first consultation.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[2rem] bg-[var(--primary)] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">Common DUI Defense Strategies</h2>
            <h3 className="mt-5 text-xl font-semibold text-[var(--accent)]">Challenging the Traffic Stop</h3>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              If the officer did not have probable cause, your case may be dismissed. We review dashboard video,
              body camera material, dispatch timing, and written reports to determine whether the stop met legal
              standards from the beginning.
            </p>
          </article>

          <article className="rounded-[2rem] bg-[var(--primary)] p-6 text-white sm:p-8">
            <h3 className="text-xl font-semibold text-[var(--accent)]">Breathalyzer Inaccuracy</h3>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              Improper calibration or usage can lead to false readings. We investigate maintenance history,
              administration protocol, environmental factors, and operator training records to challenge reliability.
            </p>
          </article>

          <article className="rounded-[2rem] bg-[var(--primary)] p-6 text-white sm:p-8">
            <h3 className="text-xl font-semibold text-[var(--accent)]">Violation of Rights</h3>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              If your rights were violated, evidence may be suppressed. Constitutional violations can significantly
              reduce prosecutorial leverage and create meaningful opportunities for reduction or dismissal.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-4xl font-semibold text-[var(--primary)]">Why Choose Motor City Law Firm</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li>Extensive experience handling DUI cases in Michigan</li>
              <li>Strong understanding of local courts and prosecutors</li>
              <li>Aggressive defense approach</li>
              <li>Fast response and personalized attention</li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              We treat every case with urgency because we understand what&apos;s at stake. The right defense is not
              generic. It is built around your facts, your court, and your immediate risks.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-4xl font-semibold text-[var(--primary)]">What To Do After a DUI Arrest</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li>Do NOT admit guilt</li>
              <li>Avoid discussing your case with police</li>
              <li>Contact a DUI lawyer immediately</li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              The sooner you act, the better your chances of a favorable outcome. Fast legal representation can
              preserve arguments, protect rights, and prevent avoidable escalation.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <h2 className="text-4xl font-semibold text-[var(--primary)]">Internal Resources and Related Defense Pages</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            Building topical authority means helping clients understand related criminal defense risks. If your case
            includes multiple allegations, these pages explain how strategy can vary by evidence type and charge
            category.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/drug-crimes" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              Drug Crimes Defense
            </Link>
            <Link href="/assault-violent-crimes" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              Assault &amp; Violent Crimes
            </Link>
            <Link href="/theft-property-crimes" className="rounded-full bg-slate-100 px-4 py-2 text-[var(--primary)]">
              Theft &amp; Property Crimes
            </Link>
          </div>
                   <p className="mt-6 text-sm leading-7 text-slate-700">
            If you are dealing with more than one investigation or have prior legal exposure, cross-charge defense planning can be critical. Coordinated strategy often improves outcomes by aligning messaging, evidentiary challenges, and negotiation posture across all related allegations.
            </p>
        </article>
      </section>

      <FAQAccordion items={faqItems} />
      <ContactForm submitLabel="Get Your Free Consultation Today" />

      <CTASection
        title="Speak With a DUI Lawyer Today"
        description="Your future is too important to leave to chance. If you've been charged with DUI in Michigan, take action now."
        primaryLabel="Get Your Free Consultation Today"
        primaryHref="/contact"
        secondaryLabel="Call Now - Available 24/7"
        secondaryHref={siteConfig.phoneHref}
      />
    </>
  );
}
