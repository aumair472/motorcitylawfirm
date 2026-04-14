"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center">
          <Image
            src="/brand/logo-horizontal.svg"
            alt={siteConfig.name}
            width={380}
            height={200}
            className="h-10 w-auto sm:h-12 lg:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-[var(--primary)]"
                  : "text-slate-600 transition hover:text-[var(--primary)]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={siteConfig.phoneHref}
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href={siteConfig.consultationHref}
            className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/15 transition hover:bg-[var(--secondary)]"
          >
            Free Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 items-center rounded-full border border-[var(--border)] px-4 text-sm font-semibold text-[var(--primary)] lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] bg-white px-4 py-4 sm:px-6 lg:hidden">
          <div className="grid gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={siteConfig.consultationHref}
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-[var(--primary)] px-4 py-3 text-center text-white"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}