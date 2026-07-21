import type { Metadata } from "next";
import { whatsappLink } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services — AhsanWP",
  description: "WordPress websites, LearnPress LMS platforms, WooCommerce, and ongoing support.",
};

const services = [
  {
    title: "WordPress Website Design & Development",
    desc: "Business sites, portfolios, and landing pages — clean design, fast load times, and a CMS your team can actually manage.",
    items: ["Custom theme design & build", "Responsive, mobile-first layouts", "Basic on-page SEO setup", "Content migration from your old site"],
    icon: "🌐",
  },
  {
    title: "LMS & Course Platforms (LearnPress)",
    desc: "End-to-end course platforms — from course structuring to quizzes, memberships, and video hosting.",
    items: ["Course & lesson structuring", "Quiz systems with grading logic", "Video hosting via CDN (Bunny.net)", "Certificates & student progress tracking"],
    icon: "🎓",
  },
  {
    title: "WooCommerce & Membership Sites",
    desc: "Sell products, courses, or memberships with payment flows that are tested end to end, not just wired up.",
    items: ["Stripe / payment gateway integration", "Membership & subscription flows", "Cart & checkout customization", "Order & customer management setup"],
    icon: "💳",
  },
  {
    title: "Site Speed & Image Optimization",
    desc: "Slow sites lose visitors. We tighten up the technical side so your pages load fast everywhere.",
    items: ["Image compression & format fixes", "Caching configuration", "Core Web Vitals improvements", "Plugin/script audit & cleanup"],
    icon: "⚡",
  },
  {
    title: "Ongoing Maintenance & Support",
    desc: "A site that ships is just the start. We stick around to keep it running and evolving.",
    items: ["Core, theme & plugin updates", "Bug fixes & content edits", "Security & backup checks", "Direct WhatsApp support line"],
    icon: "🛠️",
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Services</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
          Everything you need on WordPress
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Focused specifically on WordPress and LearnPress, so the work is deep, not spread thin.
        </p>
      </FadeIn>

      <div className="mt-16 space-y-8">
        {services.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.06}>
            <div className="group grid gap-6 rounded-2xl border border-zinc-200 p-8 transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:grid-cols-[1fr_1.2fr] dark:border-zinc-800 dark:hover:border-indigo-800">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-2xl shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-zinc-950 dark:text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{service.desc}</p>
              </div>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-indigo-600">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-16 rounded-2xl bg-zinc-50 p-10 text-center dark:bg-zinc-950">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Not sure which service fits?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
          Send a message with what you're trying to build — I'll tell you honestly what it takes.
        </p>
        <a
          href={whatsappLink("Hi! I'd like help figuring out which service fits my project.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
        >
          Ask on WhatsApp
        </a>
      </FadeIn>
    </div>
  );
}
