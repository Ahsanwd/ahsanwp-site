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

function ColumnIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/20">
      {children}
    </div>
  );
}

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
              <div className="flex items-center gap-2.5">
                <ColumnIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ColumnIcon>
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">Navigate</p>
              </div>
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
              <div className="flex items-center gap-2.5">
                <ColumnIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ColumnIcon>
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">Services</p>
              </div>
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
              <div className="flex items-center gap-2.5">
                <ColumnIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ColumnIcon>
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">Get in touch</p>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="group flex items-center gap-2.5 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="shrink-0 text-indigo-500 transition-transform group-hover:scale-110 dark:text-indigo-400"
                    >
                      <path
                        d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M3.5 6.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="shrink-0 text-indigo-500 transition-transform group-hover:scale-110 dark:text-indigo-400"
                    >
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.22a7.5 7.5 0 0 1-1.38-1.71c-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
                    </svg>
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
