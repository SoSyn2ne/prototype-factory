import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Prototype Factory — Gallery',
  description: 'Daily prototypes index',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen">
          <div className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <Link href="/" className="flex items-baseline gap-2 hover:no-underline">
                <span className="text-xs font-semibold tracking-wider text-neutral-500">prototype-factory</span>
                <span className="text-sm font-extrabold tracking-tight text-neutral-900">Gallery</span>
              </Link>
              <div className="text-xs text-neutral-500">Daily prototypes · static index</div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-4 py-8">
            <header className="mb-6">
              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">Prototype Factory</h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                A daily shipping log. Browse prototypes, open demos, and keep a lightweight trail of specs.
              </p>
            </header>

            {children}

            <footer className="mt-12 border-t border-white/10 pt-6 text-xs text-neutral-500">
              Built from <code>site/public/prototypes-index.json</code>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
