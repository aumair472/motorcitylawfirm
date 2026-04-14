import { CTASection } from "@/components/cta-banner";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion, type FaqItem } from "@/components/faq-accordion";
import { LegalSchemas } from "@/components/legal-schemas";
import { buildFaqSchema, siteConfig } from "@/lib/site-data";

type ServicePageProps = {
  title: string;
  keyword: string;
  intro: string;
  urgency: string;
  whatMatters: string[];
  whatWeDo: string[];
  whatHappensNext: string[];
  faqs: FaqItem[];
};

export function ServicePage({
  title,
  keyword,
  intro,
  urgency,
  whatMatters,
  whatWeDo,
  whatHappensNext,
  faqs,
}: ServicePageProps) {
  return (
    <>
      <LegalSchemas schemas={[buildFaqSchema(faqs as Array<{ question: string; answer: string }>)]} />
      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">{keyword}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[var(--primary)] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{intro}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] bg-[var(--primary)] p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8e2f0]">Urgency</p>
              <p className="mt-3 text-xl font-semibold">{urgency}</p>
            </div>
            {whatMatters.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[var(--border)] bg-slate-50 p-5 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">How we help</p>
            <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">What we do in the first stage</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
              {whatWeDo.map((item) => (
                <li key={item} className="rounded-[1.25rem] bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-[var(--primary)] p-6 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d8e2f0]">What happens next</p>
            <h2 className="mt-3 text-4xl font-semibold">The next move should create leverage.</h2>
            <ol className="mt-6 space-y-4 text-sm leading-6 text-slate-200">
              {whatHappensNext.map((item, index) => (
                <li key={item} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3">
                  <span className="mr-2 font-semibold text-white">0{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection
        title={`If you need a ${title.toLowerCase()}, do not let the next deadline catch you off guard.`}
        description={`Call ${siteConfig.phoneDisplay} or request a free consultation now. We help people in ${siteConfig.city} and across Michigan act quickly while options are still open.`}
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref={siteConfig.phoneHref}
      />

      <FAQAccordion items={faqs} />
      <ContactForm />
    </>
  );
}