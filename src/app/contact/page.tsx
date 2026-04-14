import Link from "next/link";
import { CTASection } from "@/components/cta-banner";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { LegalSchemas } from "@/components/legal-schemas";
import { TrustBar } from "@/components/trust-bar";
import { buildFaqSchema, siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Get your free consultation with Motor City Law Firm. Fast criminal defense response across Detroit and Michigan.",
};

const contactFaqItems = [
  {
    question: "How quickly will your team respond?",
    answer:
      "Most requests are reviewed within minutes during active hours, and urgent calls are prioritized immediately.",
  },
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. Your first consultation is completely free and confidential, with no obligation to hire us.",
  },
  {
    question: "What should I prepare before I call?",
    answer:
      "Bring your court date, release paperwork, citation details, and any police contact information you already have.",
  },
  {
    question: "Do you only handle cases in Detroit?",
    answer:
      "No. We represent clients in Detroit, nearby courts, and throughout Michigan depending on the case and venue.",
  },
];

export default function ContactPage() {
  return (
    <>
      <LegalSchemas schemas={[buildFaqSchema(contactFaqItems)]} />

      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0b1f3a_0%,#102c52_60%,#173b67_100%)] px-6 py-10 text-white shadow-[0_20px_60px_rgba(11,31,58,0.18)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Contact</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
            Get Your Free Consultation Today
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Time matters. The sooner you act, the stronger your defense.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
            If you have been arrested or charged with a crime in Michigan, waiting can damage your case. Evidence
            can fade, witnesses become harder to locate, and early statements can be used against you. A fast legal
            response improves your position before court pressure increases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.phoneHref}
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--primary)]"
            >
              Call Now: {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white px-6 py-8 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Urgency</p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">Early action creates legal leverage</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              If you have been arrested or charged in Michigan, every hour matters. Prosecutors and investigators may
              already be preparing narrative and timeline assumptions before your first court date. Without counsel,
              people often make statements, miss deadlines, or agree to conditions they do not fully understand.
              Speaking with a defense lawyer quickly helps protect your rights and prevent avoidable mistakes.
            </p>
            <p>
              A fast intake call allows us to identify immediate priorities: court calendar, bond terms, no-contact
              orders, license concerns, and any evidence that needs preservation. This first step is often the
              difference between reacting late and building strategy early.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Contact Options</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--primary)]">Choose the fastest way to reach us</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Immediate legal help is available by phone. For urgent matters, calling is the fastest path to a live
              case review.
            </p>
            <div className="mt-6 grid gap-3 text-sm">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex rounded-full bg-[var(--primary)] px-5 py-3 font-semibold text-white"
              >
                Call Now: {siteConfig.phoneDisplay}
              </a>
              <a
                href="#contact"
                className="inline-flex rounded-full border border-[var(--border)] px-5 py-3 font-semibold text-[var(--primary)]"
              >
                Use the Consultation Form
              </a>
              <a
                href="#live-chat"
                className="inline-flex rounded-full border border-[var(--border)] px-5 py-3 font-semibold text-[var(--primary)]"
              >
                Start Live Chat
              </a>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
            <h2 className="text-3xl font-semibold text-[var(--primary)]">Why contact us now</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              You get a free consultation, no obligation, and rapid guidance from an experienced criminal defense
              legal team that understands Michigan court pressure.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li>1) Free consultation with immediate next-step guidance.</li>
              <li>2) No obligation to hire after your initial conversation.</li>
              <li>3) Fast response so critical details are not lost.</li>
              <li>4) Experienced legal strategy for felony and misdemeanor defense.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="live-chat" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white px-6 py-8 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Live Chat</p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">Need quick answers before you call?</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            Live chat is available for rapid triage questions, scheduling, and case-type confirmation. For legal
            advice specific to your case, call directly so we can gather complete details and provide guidance based
            on Michigan criminal defense procedure.
          </p>
          <button
            type="button"
            className="mt-6 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white"
          >
            Start Live Chat (UI Placeholder)
          </button>
        </div>
      </section>

      <TrustBar />

      <ContactForm submitLabel="Speak to a Lawyer Now" />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Local SEO Coverage</p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">Defense support in Detroit and across Michigan</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            If you are searching for a criminal defense lawyer in Michigan, Detroit, or nearby areas, Motor City Law
            Firm is ready to help. We assist clients facing urgent charges in city and county courts where timing,
            documentation, and courtroom preparation can affect the entire direction of a case.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            Our service area includes Detroit, Ann Arbor region matters, and surrounding communities throughout
            Michigan. If your court date is approaching, contact us now so your defense strategy starts immediately.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--border)] bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Office Location</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--primary)]">Visit or call our Detroit office</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              Service areas include Detroit, Wayne County, Oakland County, Macomb County, and nearby Michigan courts.
            </p>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white">
            <iframe
              title="Motor City Law Firm map"
              src="https://www.google.com/maps?q=150%20W%20Jefferson%20Ave%20Suite%20400%20Detroit%20MI%2048226&output=embed"
              className="h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>
        </div>
      </section>

      <FAQAccordion items={contactFaqItems} />

      <CTASection
        title="Do not wait. Speak with a defense lawyer now and protect your future."
        description="Get immediate legal guidance, a free consultation, and a clear action plan tailored to your Michigan case."
        primaryLabel="Get Your Free Consultation Now"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref={siteConfig.phoneHref}
      />
    </>
  );
}