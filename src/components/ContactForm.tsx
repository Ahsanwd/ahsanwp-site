"use client";

import { useState } from "react";
import { SITE, whatsappLink } from "@/lib/constants";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("WordPress Website");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const buildMessage = () =>
    [
      `Hi! My name is ${name || "..."}.`,
      `Project type: ${projectType}`,
      budget ? `Budget: ${budget}` : null,
      message ? `Details: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
  };

  const mailHref = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Project inquiry: ${projectType}`
  )}&body=${encodeURIComponent(buildMessage())}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-950 dark:text-white">
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-zinc-950 dark:text-white">
          Project type
        </label>
        <select
          id="projectType"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        >
          <option>WordPress Website</option>
          <option>LearnPress / LMS Platform</option>
          <option>WooCommerce / Membership Site</option>
          <option>Speed & Optimization</option>
          <option>Ongoing Maintenance</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-zinc-950 dark:text-white">
          Estimated budget (optional)
        </label>
        <input
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          placeholder="e.g. $300 – $500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-950 dark:text-white">
          Tell me about the project
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          placeholder="What are you trying to build?"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Send via WhatsApp
        </button>
        <a
          href={mailHref}
          className="rounded-full border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
        >
          Send via Email instead
        </a>
      </div>
    </form>
  );
}
