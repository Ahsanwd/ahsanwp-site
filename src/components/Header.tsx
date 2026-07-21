"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, whatsappLink } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Ahsan<span className="text-indigo-600">WP</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-indigo-600"
                    : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={whatsappLink("Hi! I'd like to talk about a WordPress project.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 md:inline-block"
        >
          Let&apos;s Talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 dark:text-zinc-300 md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-zinc-200 px-6 py-4 dark:border-zinc-800 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                pathname === link.href
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40"
                  : "text-zinc-700 dark:text-zinc-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink("Hi! I'd like to talk about a WordPress project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-indigo-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Let&apos;s Talk
          </a>
        </nav>
      )}
    </header>
  );
}
