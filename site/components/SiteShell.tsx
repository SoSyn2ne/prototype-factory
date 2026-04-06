import Link from 'next/link';

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-background-light/80 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 text-primary hover:no-underline">
                <Icon
                  className="h-7 w-7"
                  path="M4 7h6v6H4V7Zm10 0h6v6h-6V7ZM4 17h6v2H4v-2Zm10 0h6v2h-6v-2Z"
                />
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Prototype Factory</h2>
              </Link>
              <nav className="hidden items-center gap-6 md:flex">
                <Link className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="/">
                  Gallery
                </Link>
                <Link className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="/clusters">
                  Cluster Board
                </Link>
                <Link className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="/marketplace">
                  Marketplace
                </Link>
                <Link className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="/experiments">
                  Experiments
                </Link>
              </nav>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              <span className="hidden text-xs text-slate-500 sm:block">gallery · clusters · demos</span>
              <a
                className="flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-all hover:bg-primary/90"
                href="https://github.com/SoSyn2ne/prototype-factory"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
