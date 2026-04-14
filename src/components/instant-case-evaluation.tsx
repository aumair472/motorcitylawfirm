"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site-data";

const chargeOptions = [
  "DUI / OWI",
  "Drug charge",
  "Assault allegation",
  "Theft / property crime",
  "Other criminal charge",
];

const countyOptions = ["Wayne", "Oakland", "Macomb", "Washtenaw", "Other Michigan county"];

const urgencyOptions = ["Today", "Within 48 hours", "Before court", "Not sure"];

export function InstantCaseEvaluation() {
  const [charge, setCharge] = useState(chargeOptions[0]);
  const [county, setCounty] = useState(countyOptions[0]);
  const [urgency, setUrgency] = useState(urgencyOptions[0]);

  const assessment = useMemo(() => {
    if (charge === "DUI / OWI") {
      return {
        label: "High urgency",
        text: "You should move now to protect your license, preserve video or stop evidence, and control what happens before the first hearing.",
      };
    }

    if (charge === "Drug charge") {
      return {
        label: "Search and seizure review needed",
        text: "These cases often turn on how the stop, search, warrant, or seizure happened. The evidence trail matters immediately.",
      };
    }

    if (charge === "Assault allegation") {
      return {
        label: "Witness and self-defense review",
        text: "Memories, video, medical records, and witness statements can shift the story. Act fast before the file hardens.",
      };
    }

    if (charge === "Theft / property crime") {
      return {
        label: "Damage-control priority",
        text: "Employment, restitution, and record impact need a strategy as soon as the charge is filed.",
      };
    }

    return {
      label: "Case-specific strategy needed",
      text: "The right defense starts with the facts, the court, and the deadline pressure. A quick review is the safest move.",
    };
  }, [charge]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_12px_40px_rgba(11,31,58,0.06)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            Instant Case Evaluation Tool
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--primary)]">
            Get an immediate read on what your charge demands.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Choose the charge and timeline. The tool gives you a practical next-step assessment so you can
            decide whether to call now or request a consultation immediately.
          </p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Charge type
              <select
                value={charge}
                onChange={(event) => setCharge(event.target.value)}
                className="rounded-2xl border border-[var(--border)] bg-slate-50 px-4 py-3 text-slate-900"
              >
                {chargeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              County
              <select
                value={county}
                onChange={(event) => setCounty(event.target.value)}
                className="rounded-2xl border border-[var(--border)] bg-slate-50 px-4 py-3 text-slate-900"
              >
                {countyOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              How soon do you need help?
              <select
                value={urgency}
                onChange={(event) => setUrgency(event.target.value)}
                className="rounded-2xl border border-[var(--border)] bg-slate-50 px-4 py-3 text-slate-900"
              >
                {urgencyOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#0b1f3a_0%,#102c52_100%)] p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d8e2f0]">Immediate read</p>
          <h3 className="mt-3 text-3xl font-semibold">{assessment.label}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-200">{assessment.text}</p>

          <div className="mt-6 grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm text-slate-100">
            <p>
              County: <span className="font-semibold text-white">{county} County</span>
            </p>
            <p>
              Timeline: <span className="font-semibold text-white">{urgency}</span>
            </p>
            <p>
              Next move: <span className="font-semibold text-white">Call before the deadline pressure builds.</span>
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-[var(--primary)]"
            >
              Call Now
            </a>
            <a
              href={siteConfig.consultationHref}
              className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}