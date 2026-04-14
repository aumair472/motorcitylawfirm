import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

const heroPoints = [
  "1000+ Cases Defended",
  "Available 24/7",
  "Proven Results",
];

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
      <div className="grid gap-8 overflow-hidden rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0b1f3a_0%,#102c52_58%,#173b67_100%)] px-6 py-10 text-white shadow-[0_20px_60px_rgba(11,31,58,0.16)] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d8e2f0]">
            Criminal Defense Lawyer Michigan
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
            Charged With a Crime in Michigan? Your Freedom Is Too Important to Risk.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            Experienced Michigan criminal defense attorneys ready to protect your rights, your record, and
            your future - starting today.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={siteConfig.consultationHref}
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--primary)]"
            >
              Get Free Consultation
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
            >
              Call Now - 24/7 Available
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroPoints.map((point) => (
              <div key={point} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-5">
            <div className="grid gap-4 rounded-[1.75rem] bg-white p-5 text-[var(--primary)] shadow-2xl shadow-slate-950/15">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                    Immediate legal support
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-[var(--primary)]">Defense starts the moment you call.</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-4">
                <p className="text-sm font-semibold text-[var(--primary)]">Why urgency wins cases</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li>Fast action before prosecutors build momentum</li>
                  <li>Clear guidance on your rights and next move</li>
                  <li>Strategy tailored to your exact case facts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}