"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-5 sm:px-5">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-line bg-surface/85 px-3 py-2 shadow-soft backdrop-blur-md"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight text-ink"
        >
          {site.shortName}
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    active ? "bg-ink text-white" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="rounded-full border border-line px-3 py-1.5 text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-surface p-3 shadow-soft md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-sm text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
