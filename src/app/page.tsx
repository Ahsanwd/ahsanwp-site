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

const trustPoints = ["Full-Service WordPress Builds", "LearnPress & LMS Specialists", "Direct WhatsApp Support"];

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative border-b border-zinc-200 bg-grid dark:border-zinc-800">
        <GradientOrbs variant="hero" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Full-Service WordPress Development
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
              WordPress Sites That{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Work as Hard
              </span>{" "}
              as You Do
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Business websites, online stores, membership platforms, and LMS
              course sites — built fast, built right, backed by real support.
              No agency runaround, just direct communication with the person
              doing the work.
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

        <FadeIn delay={0.32} className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-indigo-50 to-violet-50 p-6 shadow-lg shadow-indigo-500/10 before:absolute before:-inset-px before:-z-10 before:rounded-2xl before:bg-gradient-to-r before:from-indigo-500 before:to-violet-500 sm:p-8 dark:from-indigo-950/40 dark:to-violet-950/30">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-2xl shadow-lg shadow-indigo-500/20">
                  🔧
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                    Already have a WordPress site?
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Any custom functionality, feature, fix, or integration your existing site needs — I can build
                    it. No full rebuild required.
                  </p>
                </div>
              </div>
              <a
                href={whatsappLink("Hi! I have an existing WordPress site and need some custom work done.")}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
              >
                Tell Me What You Need
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-6">
          <Link href="/services" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            View all services →
          </Link>
        </FadeIn>
      </section>

      <section className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <GradientOrbs variant="section" />
        <div className="relative mx-auto max-w-3xl px-6 py-24">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              What Clients Say
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-12">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl shadow-indigo-500/10 sm:p-10 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                &ldquo;Ahsan rebuilt our membership site and video platform exactly the way we envisioned
                it — responsive, fast, and reliable. Communication was direct, and every change we asked
                for was turned around quickly. Highly recommend for any WordPress or LMS project.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-base font-semibold text-white shadow-lg shadow-indigo-500/20">
                  TL
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-950 dark:text-white">Tevi D. Lawson</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">Founder, ELSAH Sanctuary · USA</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
