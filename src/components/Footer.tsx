import Link from "next/link";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
              Ahsan<span className="text-indigo-600">WP</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              WordPress & LMS websites, built fast and built right.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">Navigate</p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">Get in touch</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          © {new Date().getFullYear()} {SITE.domain}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
