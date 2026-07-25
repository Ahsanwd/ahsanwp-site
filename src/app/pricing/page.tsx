import type { Metadata } from "next";
import { whatsappLink } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";
import GradientOrbs from "@/components/GradientOrbs";

export const metadata: Metadata = {
  title: "Pricing — AhsanWP",
  description: "Starting price ranges for WordPress websites, LMS platforms, and ongoing support.",
};

const tiers = [
  {
    name: "Starter",
    price: "$150 – $350",
    desc: "A focused 1-5 page WordPress site to get you online with a clean, professional design.",
    features: ["Up to 5 pages", "Custom design (theme-based)", "Mobile responsive", "Contact form setup", "1 round of revisions"],
  },
  {
    name: "Business",
    price: "$400 – $900",
    desc: "A full business site with blog, on-page SEO, and more custom design work.",
    features: ["Up to 12 pages + blog", "Custom design & layout", "Basic on-page SEO setup", "Speed & image optimization", "2 rounds of revisions"],
    featured: true,
  },
  {
    name: "LMS / Course Platform",
    price: "$600 – $1500+",
    desc: "LearnPress course setup with quizzes, memberships, and video delivery — scoped to your course count.",
    features: ["LearnPress install & configuration", "Course, lesson & quiz structuring", "Video hosting via CDN", "Payment/membership integration", "Scoped by number of courses"],
  },
  {
    name: "Retainer / Custom",
    price: "Custom",
    desc: "Ongoing maintenance, feature builds, or larger custom projects — priced per scope.",
    features: ["Monthly maintenance & updates", "New feature development", "Priority WhatsApp support", "Flexible monthly or per-task billing"],
  },
];

export default function Pricing() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative border-b border-zinc-200 bg-grid dark:border-zinc-800">
        <GradientOrbs variant="hero" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-28">
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Pricing</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-zinc-950 sm:text-5xl sm:leading-tight md:text-6xl dark:text-white">
              Simple, honest pricing
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
              Ranges below are a starting point — every project gets a fixed quote after a
              quick chat about scope. No surprise invoices.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.06} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                  tier.featured
                    ? "relative border-transparent bg-gradient-to-b from-indigo-50 to-white shadow-xl shadow-indigo-500/20 before:absolute before:-inset-px before:-z-10 before:rounded-2xl before:bg-gradient-to-b before:from-indigo-500 before:to-violet-500 dark:from-indigo-950/40 dark:to-zinc-950"
                    : "border-zinc-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-zinc-800 dark:hover:border-indigo-800"
                }`}
              >
                {tier.featured && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">{tier.name}</h2>
                <p className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white">{tier.price}</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{tier.desc}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mt-1 shrink-0 text-indigo-600">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hi! I'm interested in the ${tier.name} package.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-transform hover:scale-105 ${
                    tier.featured
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30"
                      : "border border-zinc-300 text-zinc-950 hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
                  }`}
                >
                  Get a Quote
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-500">
            Prices are indicative and depend on scope, page count, and integrations. Final quote always confirmed before work starts.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
