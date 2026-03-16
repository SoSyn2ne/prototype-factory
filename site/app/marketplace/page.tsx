import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marketplace · Prototype Factory',
  description: 'Prototype Factory Premium — Marketplace (static mock).',
}

export default function MarketplacePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
          Premium
        </div>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          Marketplace
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          (Mock) Curated prototypes, bundles, and templates.
        </p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
        <h2 className="text-lg font-black text-slate-900 dark:text-white">Coming soon</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          For now, the Gallery is the source of truth. Marketplace will layer on top with featured bundles,
          collections, and purchase flows.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-white transition hover:opacity-95 hover:no-underline"
          >
            Browse Gallery
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50 hover:no-underline dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  )
}
