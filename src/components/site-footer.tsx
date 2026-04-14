import Link from "next/link";
import { services, siteConfig, trustBadges } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--primary)] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8e2f0]">
            {siteConfig.name}
          </div>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white">
            Serious criminal defense for people who need action now, not later.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-200">
            We defend clients across Detroit and throughout Michigan in cases involving DUI, drug crimes,
            assault, theft, and other urgent charges. If you are looking for a criminal lawyer Detroit
            residents can reach quickly, this is the place to start.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
            {trustBadges.map((badge) => (
              <span key={badge.label} className="rounded-full border border-white/15 px-4 py-2">
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8e2f0]">
            Practice Areas
          </div>
          <ul className="mt-4 grid gap-3 text-sm text-slate-200">
            {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="transition hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8e2f0]">
            Local SEO Contact
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </p>
            <p>
              <a href={siteConfig.phoneHref} className="font-semibold text-white">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>{siteConfig.email}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--primary)] transition hover:brightness-110"
            >
              Free Consultation
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Serving Detroit, Wayne County, Oakland County, Macomb County, and surrounding Michigan courts.</p>
          <p>Past results do not guarantee future outcomes.</p>
        </div>
      </div>
    </footer>
  );
}