export default function GradientOrbs({ variant = "hero" }: { variant?: "hero" | "section" }) {
  if (variant === "section") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-600/10" />
        <div className="animate-blob-delay absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-600/10" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-blob absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-600/20" />
      <div className="animate-blob-delay absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-600/15" />
      <div className="animate-blob-delay-2 absolute top-40 left-1/2 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-600/10" />
    </div>
  );
}
