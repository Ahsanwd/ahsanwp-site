import Link from "next/link";
import { whatsappLink } from "@/lib/constants";
import GradientOrbs from "@/components/GradientOrbs";
import HeroVisual from "@/components/HeroVisual";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "WordPress Websites",
    desc: "Business sites, portfolios, and landing pages built on solid, maintainable WordPress foundations.",
    icon: "🌐",
  },
  {
    title: "LearnPress & LMS Platforms",
    desc: "Course structuring, quizzes, memberships, and video delivery — our specialty since day one.",
    icon: "🎓",
  },
  {
    title: "WooCommerce & Memberships",
    desc: "Payment gateways, membership flows, and subscription logic that actually works end to end.",
    icon: "💳",
  },
  {
    title: "Speed & Optimization",
    desc: "Image compression, caching, and Core Web Vitals fixes so your site loads fast everywhere.",
    icon: "⚡",
  },
];

const trustPoints = ["LearnPress Experts", "Fast Turnaround", "Direct WhatsApp Support"];

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative border-b border-zinc-200 bg-grid dark:border-zinc-800">
        <GradientOrbs variant="hero" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              WordPress & LMS Development
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
              WordPress Sites That{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Work as Hard
              </span>{" "}
              as You Do
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              From LMS platforms to business sites — built fast, built right,
              backed by real support. No agency runaround, just direct
              communication with the person doing the work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink("Hi! I'd like to start a WordPress project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
              >
                Start Your Project
              </a>
              <Link
                href="/portfolio"
                className="rounded-full border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
              >
                See Our Work
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-indigo-600">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            What We Build
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Focused on WordPress and LearnPress — not spreading thin across every framework.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-zinc-200 p-6 transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-zinc-800 dark:hover:border-indigo-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-2xl shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{service.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10">
          <Link href="/services" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            View all services →
          </Link>
        </FadeIn>
      </section>

      <section className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <GradientOrbs variant="section" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-zinc-600 dark:text-zinc-400">
              Tell me about it on WhatsApp — I usually reply within the hour.
            </p>
            <a
              href={whatsappLink("Hi! I'd like to talk about a WordPress project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
            >
              Message on WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
