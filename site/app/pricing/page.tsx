import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing · Prototype Factory',
  description: 'Prototype Factory Premium — Pricing (static mock).',
}

const TIERS = [
  {
    name: 'Free',
    price: '$0',
    note: 'for browsing',
    features: ['Gallery access', 'Spec previews', 'Public demos'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$12',
    note: 'per month',
    features: ['Early access drops', 'Download bundles (soon)', 'Priority demo polish'],
    cta: 'Get Premium',
    highlight: true,
  },
  {
    name: 'Team',
    price: '$49',
    note: 'per month',
    features: ['Shared workspace (soon)', 'Audit logs (soon)', 'Custom templates (soon)'],
    cta: 'Contact',
    highlight: false,
  },
] as const

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
          Pricing
        </div>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          Simple plans for shipping daily.
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          (Mock) Pricing is not connected yet — this page exists to anchor the Premium navigation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {TIERS.map((t) => (
          <section
            key={t.name}
            className={`rounded-2xl border bg-white p-6 shadow-sm dark:bg-slate-900/40 ${
              t.highlight
                ? 'border-primary/30 ring-1 ring-primary/20 dark:border-primary/30'
                : 'border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-black text-slate-900 dark:text-white">{t.name}</h2>
                <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-500">{t.note}</p>
              </div>
              {t.highlight ? (
                <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                  Best
                </span>
              ) : null}
            </div>

            <div className="mt-6 flex items-end gap-2">
              <div className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                {t.price}
              </div>
              <div className="pb-1 text-xs font-bold text-slate-500 dark:text-slate-500">USD</div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-black shadow-sm transition ${
                t.highlight
                  ? 'bg-primary text-white hover:opacity-95'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60'
              }`}
            >
              {t.cta}
            </button>

            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">(Mock) Billing not wired.</p>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="text-sm font-black text-primary hover:opacity-80 hover:no-underline"
        >
          ← Back to Gallery
        </Link>
      </div>
    </main>
  )
}
