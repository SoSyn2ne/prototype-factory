import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Prototype Factory — Premium Gallery',
  description: 'Daily prototypes index (premium gallery)',
};

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
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
                    <Link
                      className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
                      href="/"
                    >
                      Gallery
                    </Link>
                    <Link
                      className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
                      href="/marketplace"
                    >
                      Marketplace
                    </Link>
                    <Link
                      className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
                      href="/experiments"
                    >
                      Experiments
                    </Link>
                    <Link
                      className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
                      href="/pricing"
                    >
                      Pricing
                    </Link>
                  </nav>
                </div>

                <div className="flex flex-1 items-center justify-end gap-3">
                  <span className="hidden text-xs text-slate-500 sm:block">static index · demos</span>
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

          <footer className="mt-20 border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-background-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div className="md:col-span-1">
                  <div className="mb-6 flex items-center gap-2 text-primary">
                    <Icon
                      className="h-6 w-6"
                      path="M4 7h6v6H4V7Zm10 0h6v6h-6V7ZM4 17h6v2H4v-2Zm10 0h6v2h-6v-2Z"
                    />
                    <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Prototype Factory</h2>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    Building the next generation of tools and AI prototypes for ambitious creators.
                  </p>
                  <div className="flex gap-4 text-slate-400">
                    <a className="transition-colors hover:text-primary" href="https://github.com/SoSyn2ne/prototype-factory" target="_blank" rel="noreferrer">Repo</a>
                    <span className="text-slate-600">·</span>
                    <a className="transition-colors hover:text-primary" href="/">Gallery</a>
                    <span className="text-slate-600">·</span>
                    <span>Mail</span>
                  </div>
                </div>

                <div>
                  <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Product</h4>
                  <ul className="space-y-4">
                    <li><a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="/">New Releases</a></li>
                    <li><a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="/">Best Sellers</a></li>
                    <li><a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="/">Pricing Plans</a></li>
                    <li><a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="/">Roadmap</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Support</h4>
                  <ul className="space-y-4">
                    <li><a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="/">Documentation</a></li>
                    <li><a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="/">API Status</a></li>
                    <li><a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="/">Community</a></li>
                    <li><a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary" href="/">Licensing</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Join Newsletter</h4>
                  <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Get notified about new prototype drops and experiments.</p>
                  <div className="flex gap-2">
                    <input
                      className="flex-1 rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                      placeholder="Email address"
                      type="email"
                    />
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary/90">Join</button>
                  </div>
                  <p className="mt-4 text-xs text-slate-500">
                    Built from <code>site/public/prototypes-index.json</code>
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row">
                <p className="text-xs text-slate-500">© 2026 Prototype Factory Premium. All rights reserved.</p>
                <div className="flex gap-6">
                  <a className="text-xs text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white" href="/">Privacy Policy</a>
                  <a className="text-xs text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white" href="/">Terms of Service</a>
                  <a className="text-xs text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white" href="/">Cookie Policy</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
