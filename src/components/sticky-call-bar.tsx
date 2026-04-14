"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-white/96 px-4 py-3 shadow-[0_-10px_30px_rgba(11,31,58,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
        <a
          href={siteConfig.phoneHref}
          className="rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Call Now
        </a>
        <Link
          href={siteConfig.consultationHref}
          className="rounded-full border border-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-[var(--primary)]"
        >
          Free Consultation
        </Link>
      </div>
    </div>
  );
}