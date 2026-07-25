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
  const contactInfo = [
    {
      icon: "💬",
      label: "WhatsApp",
      value: SITE.whatsappDisplay,
      href: whatsappLink("Hi! I'd like to talk about a WordPress project."),
      external: true,
    },
    {
      icon: "✉️",
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
    },
    {
      icon: "⚡",
      label: "Response time",
      value: "Usually within the hour, always within the same day.",
      href: null,
      external: false,
    },
  ];

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
          <div className="space-y-4 sm:space-y-5">
            {contactInfo.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group rounded-2xl border border-zinc-200 p-5 transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-6 dark:border-zinc-800 dark:hover:border-indigo-800">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-xl shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                        {item.label}
                      </h2>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="mt-1 block text-lg font-medium text-zinc-950 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-zinc-700 dark:text-zinc-300">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15} className="rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-xl hover:shadow-indigo-500/10 sm:p-8 dark:border-zinc-800">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
