"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/resources/site.config";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function NavDock() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--apple-border)] bg-white/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[var(--apple-nav-h)] max-w-6xl items-center justify-between gap-4 px-6 md:px-12"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="apple-focus shrink-0 text-sm font-semibold tracking-tight text-[var(--apple-ink)]"
        >
          Badhon
        </Link>
        <ul className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto sm:gap-2 md:gap-6">
          {siteConfig.nav.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href} className="relative shrink-0">
                <Link
                  href={item.href}
                  className={`apple-focus relative block px-1 py-2 text-xs font-medium tracking-tight transition-colors duration-300 sm:text-sm ${
                    isActive
                      ? "text-[var(--apple-ink)]"
                      : "text-[var(--apple-graphite)]/70 hover:text-[var(--apple-ink)]"
                  }`}
                  style={{ transitionTimingFunction: "var(--apple-ease)" }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-[var(--apple-ink)]"
                      transition={{ duration: 0.35, ease }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
