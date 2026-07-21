import type { Metadata } from "next";
import { whatsappLink } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About — AhsanWP",
  description: "AhsanWP is a WordPress and LearnPress specialist focused on fast, direct, honest project delivery.",
};

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
    <div className="mx-auto max-w-4xl px-6 py-20">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">About</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
          Built by{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Ahsan
          </span>
          , one project at a time
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
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

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
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

      <FadeIn delay={0.15} className="mt-16 rounded-2xl bg-zinc-50 p-10 text-center dark:bg-zinc-950">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
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
  );
}
