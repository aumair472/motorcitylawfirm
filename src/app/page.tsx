import dynamic from "next/dynamic";
import { CTASection } from "@/components/cta-banner";
import { CaseResultsGrid } from "@/components/case-results-grid";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { HeroSection } from "@/components/hero-section";
import { LegalSchemas } from "@/components/legal-schemas";
import { ServicesGrid } from "@/components/services-grid";
import { TrustBar } from "@/components/trust-bar";
import { WhyChooseUs } from "@/components/why-choose-us";
import { buildFaqSchema, faqs } from "@/lib/site-data";

const TestimonialsSlider = dynamic(
  () => import("@/components/testimonials-slider").then((module) => module.TestimonialsSlider),
  {
    loading: () => (
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            Testimonials
          </p>
          <p className="mt-3 text-base text-slate-600">Loading client stories...</p>
        </div>
      </section>
    ),
  },
);

export default function Home() {
  return (
    <>
      <LegalSchemas schemas={[buildFaqSchema(faqs.home.items)]} />
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <CaseResultsGrid />
      <TestimonialsSlider />
      <FAQAccordion items={faqs.home.items} />
      <ContactForm />
      <CTASection
        title="Don't Wait - Your Defense Starts Now"
        description="Every hour matters after a criminal charge. Speak with a Michigan defense attorney now and take back control of your case."
        primaryLabel="Get Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Call Now - 24/7 Available"
        secondaryHref="tel:+13138889900"
      />
    </>
  );
}
