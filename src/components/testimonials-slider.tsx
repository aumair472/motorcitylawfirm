"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Testimonials</p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">
            Clients want clarity, speed, and a defense team that stays in control.
          </h2>
          <blockquote className="mt-8 text-2xl leading-10 text-slate-800">
            “{testimonial.quote}”
          </blockquote>
          <div className="mt-6">
            <p className="text-lg font-semibold text-[var(--primary)]">{testimonial.name}</p>
            <p className="text-sm text-slate-500">{testimonial.detail}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[1.75rem] bg-slate-50 p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">What people notice</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>Immediate response after arrest or charge</li>
              <li>Direct communication without legal jargon</li>
              <li>Strategy built around leverage, not delay</li>
              <li>Attention to license, employment, and record concerns</li>
            </ul>
          </div>

          <div className="mt-6 flex gap-2">
            {testimonials.map((entry, entryIndex) => (
              <button
                key={entry.name + entryIndex}
                type="button"
                onClick={() => setIndex(entryIndex)}
                className={`h-3 flex-1 rounded-full transition ${
                  entryIndex === index ? "bg-[var(--accent)]" : "bg-slate-200"
                }`}
                aria-label={`Show testimonial ${entryIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}