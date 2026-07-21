"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md">
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-8 w-full max-w-sm -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-2xl shadow-indigo-500/10 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <div className="ml-3 h-5 flex-1 rounded-md bg-zinc-100 dark:bg-zinc-800" />
        </div>
        <div className="mt-4 h-28 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500" />
        <div className="mt-4 space-y-2">
          <div className="h-2.5 w-4/5 rounded bg-zinc-200 dark:bg-zinc-700" />
          <div className="h-2.5 w-full rounded bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-2.5 w-2/3 rounded bg-zinc-100 dark:bg-zinc-800" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-6 bottom-16 w-52 rounded-xl border border-zinc-200 bg-white/95 p-4 shadow-xl shadow-emerald-500/10 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/95"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-950 dark:text-white">Course Published</p>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">LearnPress</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 bottom-0 w-44 rounded-xl border border-zinc-200 bg-white/95 p-3.5 shadow-xl shadow-violet-500/10 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/95"
      >
        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Site Speed</p>
        <p className="mt-1 text-2xl font-bold text-indigo-600">98</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
        </div>
      </motion.div>
    </div>
  );
}
