import type { Metadata } from "next";
import { whatsappLink } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";
import GradientOrbs from "@/components/GradientOrbs";

export const metadata: Metadata = {
  title: "About — AhsanWP",
  description: "AhsanWP is a WordPress and LearnPress specialist focused on fast, direct, honest project delivery.",
};

const skillGroups = [
  {
    category: "Page Builders & Design",
    items: [
      { name: "Elementor", icon: "🎨" },
      { name: "Gutenberg (Block Editor)", icon: "🧱" },
      { name: "Custom Theme Development", icon: "💻" },
    ],
  },
  {
    category: "Forms & Email",
    items: [
      { name: "WPForms", icon: "📝" },
      { name: "Contact Form 7", icon: "📋" },
      { name: "Fluent Forms", icon: "🗂️" },
      { name: "SMTP / Email Configuration", icon: "📧" },
      { name: "Transactional Email (Resend, SMTP.com)", icon: "✉️" },
    ],
  },
  {
    category: "LMS & Membership",
    items: [
      { name: "LearnPress", icon: "🎓" },
      { name: "Tutor LMS", icon: "📚" },
      { name: "Quiz & Grading Systems", icon: "✅" },
      { name: "Membership & Subscription Flows", icon: "🔐" },
      { name: "Video Hosting (Bunny.net, Vimeo)", icon: "🎬" },
    ],
  },
  {
    category: "E-commerce & Payments",
    items: [
      { name: "WooCommerce", icon: "🛒" },
      { name: "Stripe Integration", icon: "💳" },
      { name: "Subscription Billing", icon: "🔁" },
    ],
  },
  {
    category: "SEO & Performance",
    items: [
      { name: "Yoast SEO", icon: "🔍" },
      { name: "RankMath", icon: "📈" },
      { name: "Caching (WP Rocket / LiteSpeed)", icon: "⚡" },
      { name: "Image Optimization", icon: "🖼️" },
      { name: "Core Web Vitals", icon: "📊" },
    ],
  },
  {
    category: "Security & Maintenance",
    items: [
      { name: "Wordfence", icon: "🛡️" },
      { name: "UpdraftPlus Backups", icon: "💾" },
      { name: "Core & Plugin Updates", icon: "🔄" },
    ],
  },
];

const values = [
  {
    title: "Direct communication",
    desc: "You talk to the person building your site, not an account manager relaying messages. WhatsApp, always open.",
    icon: "💬",
  },
  {
    title: "LMS specialty",
    desc: "Most agencies treat course platforms as an afterthought. LearnPress, quizzes, and video delivery are where we go deep.",
    icon: "🎓",
  },
  {
    title: "Fast, honest turnaround",
    desc: "Realistic timelines set upfront, and if scope changes, you hear about it immediately — not at invoice time.",
    icon: "⚡",
  },
];

export default function About() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative border-b border-zinc-200 bg-grid dark:border-zinc-800">
        <GradientOrbs variant="hero" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:py-28">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">About</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-zinc-950 sm:text-5xl sm:leading-tight md:text-6xl dark:text-white">
              Built by{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Ahsan
              </span>
              , one project at a time
            </h1>

            <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
              <p>
                AhsanWP is a solo-run WordPress development studio. I build business
                websites, but my real specialty is LearnPress-based course and
                membership platforms — structuring courses, wiring up quizzes and
                grading logic, and getting video delivery right.
              </p>
              <p>
                I keep the studio small on purpose: fewer projects, more attention
                on each one, and a direct WhatsApp line instead of a support ticket
                queue. If something needs fixing, you&apos;ll hear back the same day.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-zinc-200 p-6 transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-zinc-800 dark:hover:border-indigo-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-2xl shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-110">
                  {v.icon}
                </div>
                <h3 className="mt-4 font-semibold text-zinc-950 dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 sm:mt-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
            Tools & Skills
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
            The WordPress ecosystem, hands-on — not just the headline plugins, but the
            configuration details that actually make a site work end to end.
          </p>
        </FadeIn>

        <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.06}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 sm:gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3.5 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 sm:px-4 sm:py-2 sm:text-sm dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-14 rounded-2xl bg-zinc-50 p-8 text-center sm:mt-16 sm:p-10 dark:bg-zinc-950">
          <h2 className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl dark:text-white">
            Let&apos;s talk about your project
          </h2>
          <a
            href={whatsappLink("Hi! I'd like to talk about a WordPress project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
          >
            Message on WhatsApp
          </a>
        </FadeIn>
      </div>
    </div>
  );
}
