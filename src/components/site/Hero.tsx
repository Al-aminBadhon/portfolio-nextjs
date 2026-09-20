"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/app/resources/site.config";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate min-h-[calc(100vh-var(--apple-nav-h))] border-b border-[var(--apple-border)] bg-[var(--apple-bg)]"
      aria-label="Hero"
    >
      <div className="mx-auto flex min-h-[calc(100vh-var(--apple-nav-h))] max-w-6xl items-center px-6 py-16 md:px-12 md:py-24">
        <motion.div
          className="flex w-full max-w-3xl flex-col justify-center gap-10"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-[var(--apple-ink)] sm:text-4xl lg:text-5xl">
            {siteConfig.heroHeadline}
          </h1>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-[var(--apple-border)] bg-[var(--apple-border)] sm:grid-cols-4">
            {siteConfig.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-[var(--apple-aluminum)] px-3 py-4 sm:px-4"
              >
                <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--apple-graphite)]/55">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-tight text-[var(--apple-graphite)] sm:text-sm">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="apple-focus inline-flex bg-[var(--apple-ink)] px-5 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="apple-focus inline-flex border border-[var(--apple-border)] px-5 py-2.5 text-xs font-medium text-[var(--apple-graphite)] transition-colors hover:border-[var(--apple-ink)] hover:text-[var(--apple-ink)]"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
