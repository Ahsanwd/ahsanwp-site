type CaseStudyProps = {
  title: string;
  tag: string;
  summary: string;
  highlights: string[];
  gradient: string;
  reverse?: boolean;
};

export default function CaseStudy({ title, tag, summary, highlights, gradient, reverse }: CaseStudyProps) {
  return (
    <div
      className={`group grid items-center gap-10 sm:grid-cols-2 ${reverse ? "sm:[&>*:first-child]:order-2" : ""}`}
    >
      <div
        className={`aspect-video rounded-2xl ${gradient} flex items-center justify-center p-8 shadow-inner transition-transform duration-300 group-hover:scale-[1.02]`}
      >
        <div className="w-full max-w-xs rounded-lg bg-white/90 p-4 shadow-xl shadow-black/10 transition-transform duration-300 group-hover:-translate-y-1 dark:bg-zinc-900/90">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-2 w-3/4 rounded bg-zinc-300 dark:bg-zinc-700" />
            <div className="h-2 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-2 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-3 h-12 w-full rounded bg-zinc-100 dark:bg-zinc-800" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">{tag}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">{title}</h3>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">{summary}</p>
        <ul className="mt-5 space-y-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-indigo-600">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
