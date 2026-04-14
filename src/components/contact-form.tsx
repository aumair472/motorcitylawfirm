"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { siteConfig } from "@/lib/site-data";

const contactSchema = z.object({
  name: z.string().optional(),
  phone: z.string().min(7, "Please enter a valid phone number."),
  caseType: z.string().min(3, "Please select a case type."),
  message: z.string().min(10, "Please provide a short description of what happened."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const chargeTypes = [
  "DUI / OWI",
  "Drug charge",
  "Assault allegation",
  "Theft / property crime",
  "Other criminal charge",
];

export function ContactForm({ submitLabel = "Request Free Consultation" }: { submitLabel?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      caseType: chargeTypes[0],
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const subject = encodeURIComponent(`Free consultation request - ${values.caseType}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name || "Not provided"}`,
        `Phone: ${values.phone}`,
        `Case Type: ${values.caseType}`,
        `Details: ${values.message}`,
      ].join("\n"),
    );

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    window.open(mailtoUrl, "_self");
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">
            Get Immediate Legal Help
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Share a few details and our team can respond quickly. If it is urgent,
            call directly instead of waiting for email.
          </p>

          <div className="mt-6 space-y-3 rounded-[1.5rem] bg-slate-50 p-5 text-sm text-slate-700">
            <p>
              <span className="font-semibold text-[var(--primary)]">Call:</span> {siteConfig.phoneDisplay}
            </p>
            <p>
              <span className="font-semibold text-[var(--primary)]">Email:</span> {siteConfig.email}
            </p>
            <p>
              <span className="font-semibold text-[var(--primary)]">Service area:</span> Detroit, Wayne County,
              Oakland County, Macomb County, and nearby Michigan courts.
            </p>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-dashed border-[var(--border)] p-5">
            <p className="text-sm font-semibold text-[var(--primary)]">reCAPTCHA placeholder</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Add your site verification here before launch. The layout is reserved so the form stays clean and
              conversion-focused.
            </p>
          </div>

          {submitted ? (
            <div className="mt-6 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
              Your request is ready to send. If this is urgent, call now instead of waiting on email.
            </div>
          ) : null}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-[1.75rem] bg-slate-50 p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Name
              <input
                {...register("name")}
                className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-slate-900"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Phone (required)
              <input
                {...register("phone")}
                className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-slate-900"
                placeholder="Best number to reach you"
              />
              {errors.phone ? <span className="text-xs text-red-600">{errors.phone.message}</span> : null}
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Case Type
            <select
              {...register("caseType")}
              className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-slate-900"
            >
              {chargeTypes.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            {errors.caseType ? <span className="text-xs text-red-600">{errors.caseType.message}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            What happened?
            <textarea
              {...register("message")}
              rows={4}
              className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-slate-900"
              placeholder="Briefly explain the arrest, charge, or court issue."
            />
            {errors.message ? <span className="text-xs text-red-600">{errors.message.message}</span> : null}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--secondary)] disabled:opacity-60"
          >
            {isSubmitting ? "Preparing email..." : submitLabel}
          </button>
          <p className="text-xs leading-5 text-slate-500">
            This frontend form opens your email client with the consultation request prefilled. For urgent matters,
            use the phone number above.
          </p>
        </form>
      </div>
    </section>
  );
}