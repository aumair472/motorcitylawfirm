import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-banner";
import { TrustBar } from "@/components/trust-bar";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "About",
  description:
    "Learn how Motor City Law Firm approaches criminal defense in Michigan with urgency, clarity, and trial-ready preparation.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 rounded-[2.25rem] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_12px_40px_rgba(11,31,58,0.06)] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">About Motor City Law Firm</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-[var(--primary)] sm:text-6xl">
              About Motor City Law Firm
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Dedicated to protecting the rights and futures of clients across Michigan.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] bg-slate-50 p-5 text-sm text-slate-700">
                <h2 className="text-xl font-semibold text-[var(--primary)]">Aggressive defense</h2>
                <p className="mt-2 leading-6">We build pressure early and fight every weak point in the case.</p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-5 text-sm text-slate-700">
                <h3 className="text-xl font-semibold text-[var(--primary)]">Personalized strategy</h3>
                <p className="mt-2 leading-6">No two facts are the same, so no two defense plans should be.</p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-5 text-sm text-slate-700">
                <h3 className="text-xl font-semibold text-[var(--primary)]">24/7 availability</h3>
                <p className="mt-2 leading-6">Fast response can protect rights before mistakes are made.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white"
              >
                Free Consultation
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="rounded-full border border-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--primary)]"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[2rem] bg-[linear-gradient(180deg,#0b1f3a_0%,#102c52_100%)] p-6 text-white">
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-200">
                <h2 className="text-2xl font-semibold text-white">Local insight. Courtroom focus. Results-driven defense.</h2>
                <p className="mt-3">
                  From first arraignment to final resolution, our team is focused on protecting freedom, reputation,
                  and long-term opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white px-6 py-10 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Our Story</p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">Built to help people in crisis moments</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              At Motor City Law Firm, we understand that being charged with a crime is one of the most stressful
              experiences a person can face. Families panic, employers start asking questions, and the legal process
              moves quickly whether you are ready or not. Our firm was built on a simple belief: everyone deserves a
              strong defense, no matter the circumstances. We created this practice for people who need real direction
              the moment a case begins.
            </p>
            <p>
              We have worked with people after late-night arrests, surprise warrants, probation allegations, and
              investigations that seemed to escalate overnight. In each scenario, the same pattern appears: delay
              makes things harder. Early legal action creates options. That principle is woven into how we work with
              every client. We listen first, identify immediate risks second, and build strategy third. This order
              helps us protect rights while reducing panic and confusion.
            </p>
            <p>
              Our mission is practical. We do not offer generic promises. We focus on outcomes that matter in real
              life: reduced exposure, dismissed counts when possible, controlled court messaging, and protection of
              your record when the facts support it. That mission is why clients across Michigan call us when they
              need a defense team that takes urgency seriously.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white px-6 py-10 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Our Experience</p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">Michigan criminal defense with local court insight</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              With years of experience handling Michigan criminal defense matters, including DUI, drug crimes,
              assault allegations, and theft cases, our legal team has developed a deep understanding of how local
              prosecutors build cases and how judges evaluate risk, compliance, and credibility. That familiarity
              matters. Strategy is not only about legal rules in a textbook. It is about how those rules are applied
              in real Detroit courts and surrounding jurisdictions.
            </p>
            <p>
              We defend both felony and misdemeanor cases. In felony matters, we focus on risk control, negotiation
              posture, evidentiary pressure, and trial readiness. In misdemeanor matters, we treat consequences with
              equal seriousness because background checks, licensing issues, immigration concerns, and employment
              screening can turn a so-called minor charge into a major life problem. Our process always includes
              collateral-impact analysis, because a complete defense strategy should account for the courtroom and the
              client&rsquo;s life after court.
            </p>
            <p>
              We also understand the procedural points that can change case direction early: bond terms,
              no-contact restrictions, alcohol testing conditions, search and seizure challenges, statement issues,
              and evidentiary chain weaknesses. When these details are analyzed quickly, they often create leverage
              that can improve outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">What Makes Us Different</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--primary)]">A defense system built for urgency</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <li>1) Aggressive defense strategies focused on pressure points in police reports and evidence flow.</li>
              <li>2) Personalized case approach based on your facts, risk level, and long-term goals.</li>
              <li>3) Fast response with 24/7 availability when immediate legal guidance is needed.</li>
              <li>4) Local court knowledge developed through regular work in Detroit and nearby Michigan courts.</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Our Approach</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--primary)]">A clear process from first call to final result</h2>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <li>1. Free consultation to understand the allegation, court date, and immediate deadlines.</li>
              <li>2. Case evaluation to identify exposure, evidentiary issues, and procedural opportunities.</li>
              <li>3. Strategy development tied to your goals, whether that means reduction, dismissal, or trial.</li>
              <li>4. Court representation with consistent communication and rapid updates at each stage.</li>
            </ol>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white px-6 py-10 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Our Values</p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">Trust is built through consistent standards</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Integrity</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                We provide direct guidance based on law and facts, even when the message is difficult.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Confidentiality</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Sensitive case details are handled with strict discretion at every stage.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Commitment</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                We stay engaged from first hearing through final resolution and post-case impact planning.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Results-driven</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Every decision is measured against one question: does this move improve your legal position?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white px-6 py-10 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Client Commitment</p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">Your freedom, reputation, and future are the priority</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              We treat every case with urgency and dedication because we understand what is at stake: your freedom,
              your reputation, and your future. Criminal charges can affect where you work, how your family sees the
              future, and what opportunities stay open in the years ahead. A strong defense is not only a legal task.
              It is a future-protection strategy.
            </p>
            <p>
              Our commitment includes regular updates, responsive communication, and strategic clarity. Clients are
              never left guessing what happens next. We explain process in plain language and prepare each stage with
              intention, whether we are negotiating from strength or preparing to challenge the case at trial.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white px-6 py-10 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Local Defense Coverage</p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">Serving Detroit, Ann Arbor, and clients across Michigan</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
            We proudly serve clients throughout Detroit and across Michigan, including surrounding court systems where
            procedure and local practice can vary in ways that materially affect outcomes. We also assist clients who
            need immediate direction in or near Ann Arbor and other nearby communities. If you are searching for a
            trusted criminal defense lawyer in Michigan with real local court experience, our team is ready to act.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/dui-defense" className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
              DUI Defense
            </Link>
            <Link href="/drug-crimes" className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
              Drug Crimes
            </Link>
            <Link href="/assault-violent-crimes" className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
              Assault Defense
            </Link>
            <Link href="/theft-property-crimes" className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
              Theft Defense
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      <CTASection
        title="Speak With a Defense Lawyer Today"
        description="Get Your Free Consultation Now. If the situation is urgent, call immediately so your defense can start now, not later."
        primaryLabel="Get Your Free Consultation Now"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref={siteConfig.phoneHref}
      />
    </>
  );
}