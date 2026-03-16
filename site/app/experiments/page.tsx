import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Experiments · Prototype Factory',
  description: 'Prototype Factory Premium — Experiments (static mock).',
}

export default function ExperimentsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
          Lab
        </div>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          Experiments
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          (Mock) R&D notes, unstable demos, and design spikes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
          <h2 className="text-lg font-black text-slate-900 dark:text-white">What belongs here</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li>UI packs (Stitch-inspired layouts) before they become templates</li>
            <li>Prototype quality upgrades (demo UX, review layouts, filter systems)</li>
            <li>Performance experiments (build speed, previews, caching)</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
          <h2 className="text-lg font-black text-slate-900 dark:text-white">Next action</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Convert Stitch exports into a reusable <b>PF Premium UI Pack</b> and apply it across Gallery/Detail.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-white transition hover:opacity-95 hover:no-underline"
            >
              Back to Gallery
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50 hover:no-underline dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60"
            >
              Pricing
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
