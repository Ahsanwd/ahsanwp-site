import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import FadeIn from "@/components/FadeIn";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio — AhsanWP",
  description: "Recent WordPress and LearnPress projects, including a membership platform and a multi-course LMS.",
};

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Portfolio</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
          Recent Work
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          A couple of client platforms we&apos;ve built and maintained recently. More case
          studies are being added as new projects wrap up.
        </p>
      </FadeIn>

      <div className="mt-16 space-y-24">
        <FadeIn>
          <CaseStudy
            tag="WordPress · Membership Platform"
            title="Membership & Content Site (Private Client Project)"
            summary="A WordPress business and membership site rebuilt with a consistent dark-mode design system, a Stripe-ready membership flow, and a fully populated content library."
            gradient="bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-950/40 dark:to-violet-950/40"
            highlights={[
              "Site-wide dark theme & typography audit",
              "Custom membership signup/checkout flow (Stripe-ready)",
              "Video gallery bug fixes & image compression",
              "23-article blog with 5 category landing pages",
            ]}
          />
        </FadeIn>

        <FadeIn>
          <CaseStudy
            reverse
            tag="LearnPress · LMS Platform"
            title="Multi-Course LMS (Private Client Project)"
            summary="A 3-course learning platform built on LearnPress, with 50+ videos migrated to a dedicated CDN and quiz systems graded against a structured answer key."
            gradient="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-950/40 dark:to-teal-950/40"
            highlights={[
              "3 full video courses structured in LearnPress",
              "50+ videos migrated & delivered via Bunny.net CDN",
              "Graded quiz systems across every course section",
              "Full content outline & course sequencing",
            ]}
          />
        </FadeIn>
      </div>

      <FadeIn className="mt-24 rounded-2xl border border-dashed border-zinc-300 p-10 text-center dark:border-zinc-700">
        <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">
          More case studies coming soon
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
          New client projects are added here as they launch. Want to be featured next?
        </p>
        <a
          href={whatsappLink("Hi! I'd like to talk about a WordPress project.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
        >
          Start Your Project
        </a>
      </FadeIn>
    </div>
  );
}
