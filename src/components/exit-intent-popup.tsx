"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-data";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storageKey = "motorcitylawfirm-exit-popup";

    if (window.sessionStorage.getItem(storageKey)) {
      return;
    }

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(storageKey, "seen");
      setVisible(true);
    }, 24000);

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        window.sessionStorage.setItem(storageKey, "seen");
        setVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/50 p-4 sm:items-center">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl shadow-slate-950/20">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              Urgent legal help
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--primary)]">
              Don&apos;t wait for the first court date to learn the hard way.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              If you were recently charged in Michigan, a fast defense plan can make the difference between
              leverage and regret. Speak with a criminal defense team now.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-sm font-semibold text-slate-600"
          >
            Close
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={siteConfig.consultationHref}
            className="rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Free Consultation
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="rounded-full border border-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-[var(--primary)]"
          >
            Call Now: {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}