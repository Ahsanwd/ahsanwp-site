import Link from "next/link";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/constants";
import GradientOrbs from "@/components/GradientOrbs";

const SERVICE_LINKS = [
  "WordPress Websites",
  "LearnPress / LMS Platforms",
  "WooCommerce & Membership Sites",
  "Speed & Optimization",
  "Ongoing Maintenance",
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="relative overflow-hidden border-b border-zinc-200 bg-grid dark:border-zinc-800">
        <GradientOrbs variant="section" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Currently available for new projects
          </span>

          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Have a WordPress project in mind?
          </h2>
          <p className="max-w-md text-base text-zinc-600 dark:text-zinc-400">
            Tell me what you&apos;re building — usually a reply within the hour.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hi! I'd like to talk about a WordPress project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
            >
              Message on WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
            >
              Send a message
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Ahsan
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  WP
                </span>
              </Link>
              <p className="mt-3 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
                WordPress & LMS websites, built fast and built right.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">Services</p>
              <ul className="mt-4 space-y-2.5">
                {SERVICE_LINKS.map((label) => (
                  <li key={label}>
                    <Link
                      href="/services"
                      className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">Get in touch</p>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {SITE.whatsappDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:justify-between dark:border-zinc-800 dark:text-zinc-500">
            <p>© {new Date().getFullYear()} {SITE.domain}. All rights reserved.</p>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 font-medium text-zinc-500 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Back to top
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
