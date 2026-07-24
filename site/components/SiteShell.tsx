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
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-background-light/90 backdrop-blur-md dark:border-zinc-800 dark:bg-background-dark/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 text-primary hover:no-underline">
                <Icon
                  className="h-7 w-7"
                  path="M4 7h6v6H4V7Zm10 0h6v6h-6V7ZM4 17h6v2H4v-2Zm10 0h6v2h-6v-2Z"
                />
                <h2 className="text-lg font-black text-zinc-950 dark:text-white">Prototype Factory</h2>
              </Link>
              <nav className="hidden items-center gap-6 md:flex">
                <Link className="text-sm font-semibold text-zinc-600 transition-colors hover:text-primary dark:text-zinc-300 dark:hover:text-white" href="/">
                  Gallery
                </Link>
                <Link className="text-sm font-semibold text-zinc-600 transition-colors hover:text-primary dark:text-zinc-300 dark:hover:text-white" href="/clusters">
                  Cluster Board
                </Link>
                <Link className="text-sm font-semibold text-zinc-600 transition-colors hover:text-primary dark:text-zinc-300 dark:hover:text-white" href="/pipeline">
                  Pipeline
                </Link>
                <Link className="text-sm font-semibold text-zinc-600 transition-colors hover:text-primary dark:text-zinc-300 dark:hover:text-white" href="/marketplace">
                  Marketplace
                </Link>
                <Link className="text-sm font-semibold text-zinc-600 transition-colors hover:text-primary dark:text-zinc-300 dark:hover:text-white" href="/experiments">
                  Experiments
                </Link>
              </nav>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              <span className="hidden text-xs font-semibold text-zinc-500 sm:block">gallery / clusters / demos</span>
              <a
                className="flex h-10 items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 text-sm font-black text-zinc-900 transition-colors hover:bg-zinc-50 hover:no-underline dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
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
