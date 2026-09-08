function PageLoader() {
  return (
    <div
      className="nts-page-loader fixed inset-0 z-[100] flex items-center justify-center bg-white/95 dark:bg-black/95"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="relative flex flex-col items-center">
        <div className="nts-loader-ring absolute inset-[-18px] rounded-full border-2 border-transparent border-t-blue-600 border-r-cyan-400" aria-hidden="true" />
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-blue-900/10 dark:border-white/10 dark:bg-zinc-950">
          <img src="/main.webp" alt="NTS Digital Solutions" width="160" height="80" decoding="async" />
        </div>
        <span className="sr-only">Loading page…</span>
      </div>
    </div>
  );
}

export default PageLoader;
