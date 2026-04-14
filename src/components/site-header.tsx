"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { navLinks, services, siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const serviceHrefs = services.map((service) => service.href);
  const isServiceRoute = serviceHrefs.includes(pathname);

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95">
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
            <Fragment key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-[var(--primary)]"
                    : "text-slate-600 transition hover:text-[var(--primary)]"
                }
              >
                {link.label}
              </Link>

              {link.href === "/about" ? (
                <div
                  ref={servicesMenuRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((current) => !current)}
                    className={
                      isServiceRoute
                        ? "inline-flex items-center gap-1 text-[var(--primary)]"
                        : "inline-flex items-center gap-1 text-slate-600 transition hover:text-[var(--primary)]"
                    }
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    aria-controls="services-subnav-desktop"
                  >
                    Services
                    <span
                      aria-hidden="true"
                      className={`transition-transform duration-150 ${servicesOpen ? "rotate-180" : ""}`}
                    >
                      ▾
                    </span>
                  </button>

                  <div
                    id="services-subnav-desktop"
                    className={`absolute left-0 top-full z-50 w-72 pt-2 transition duration-150 ${
                      servicesOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="rounded-2xl border border-[var(--border)] bg-white p-2 shadow-[0_18px_50px_rgba(11,31,58,0.12)]">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={
                            pathname === service.href
                              ? "block rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-[var(--primary)]"
                              : "block rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-[var(--primary)]"
                          }
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </Fragment>
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
          onClick={() => {
            setOpen((current) => {
              const next = !current;
              if (!next) {
                setMobileServicesOpen(false);
              }
              return next;
            });
          }}
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
              <Fragment key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700"
                >
                  {link.label}
                </Link>

                {link.href === "/about" ? (
                  <div className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((current) => !current)}
                      className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="services-subnav-mobile"
                    >
                      Services
                      <span
                        aria-hidden="true"
                        className={`text-sm normal-case tracking-normal transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      >
                        ▾
                      </span>
                    </button>
                    {mobileServicesOpen ? (
                      <div id="services-subnav-mobile" className="mt-3 grid gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => {
                              setMobileServicesOpen(false);
                              setOpen(false);
                            }}
                            className="rounded-xl bg-slate-50 px-3 py-2 text-slate-700"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </Fragment>
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