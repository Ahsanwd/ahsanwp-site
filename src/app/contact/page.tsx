import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE, whatsappLink } from "@/lib/constants";
import FadeIn from "@/components/FadeIn";
import GradientOrbs from "@/components/GradientOrbs";

export const metadata: Metadata = {
  title: "Contact — AhsanWP",
  description: "Get in touch about your WordPress or LearnPress project via WhatsApp or email.",
};

export default function Contact() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative border-b border-zinc-200 bg-grid dark:border-zinc-800">
        <GradientOrbs variant="hero" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:py-28">
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Contact</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-zinc-950 sm:text-5xl sm:leading-tight md:text-6xl dark:text-white">
              Let&apos;s talk about your project
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
              Fill in a few details and it&apos;ll open pre-filled in WhatsApp — or reach out directly below.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.3fr]">
          <FadeIn className="space-y-7 sm:space-y-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                WhatsApp
              </h2>
              <a
                href={whatsappLink("Hi! I'd like to talk about a WordPress project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-lg font-medium text-zinc-950 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
              >
                {SITE.whatsappDisplay}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                Email
              </h2>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1.5 block text-lg font-medium text-zinc-950 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
              >
                {SITE.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                Response time
              </h2>
              <p className="mt-1.5 text-zinc-700 dark:text-zinc-300">
                Usually within the hour, always within the same day.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-xl hover:shadow-indigo-500/10 sm:p-8 dark:border-zinc-800">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
