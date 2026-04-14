import { CTASection } from "@/components/cta-banner";
import { ContactForm } from "@/components/contact-form";
import { TestimonialsSlider } from "@/components/testimonials-slider";

export const metadata = {
  title: "Testimonials",
  description:
    "What clients say about working with Motor City Law Firm on urgent criminal defense matters in Michigan.",
};

const testimonialNotes = [
  {
    title: "Fast response",
    text: "People facing charges want answers right away, not generic explanations or long delays.",
  },
  {
    title: "Clear strategy",
    text: "The most valuable thing in a stressful case is knowing what matters now and what can wait.",
  },
  {
    title: "Direct communication",
    text: "Clients do not want to wonder where their case stands when the court date is getting closer.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="rounded-[2.25rem] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_12px_40px_rgba(11,31,58,0.06)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Testimonials</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[var(--primary)] sm:text-6xl">
            People call us when they need calm under pressure and a plan that actually reduces risk.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Clients dealing with criminal charges need more than reassurance. They need someone who knows how
            to move the file, protect leverage, and keep them from making preventable mistakes.
          </p>
        </div>
      </section>

      <TestimonialsSlider />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8">
        {testimonialNotes.map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-[var(--border)] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--primary)]">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <CTASection
        title="The right time to ask for help is before the case forces your hand."
        description="If your charge is already making life harder, get a consultation now and make the next step a controlled one."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref="tel:+13138889900"
      />

      <ContactForm />
    </>
  );
}