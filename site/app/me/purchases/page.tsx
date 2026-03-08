import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Purchases · Prototype Factory',
  description: 'Prototype Factory Premium — My Purchases (static mock).',
}

function IconSparkle(props: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={props.className}
      fill="currentColor"
    >
      <path d="M24 4c1.7818 10.2173 9.7827 18.2182 20 20-10.2173 1.7818-18.2182 9.7827-20 20-1.7818-10.2173-9.7827-18.2182-20-20 10.2173-1.7818 18.2182-9.7827 20-20Z" />
    </svg>
  )
}

function IconCalendar(props: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v3M16 2v3" />
      <path d="M3 10h18" />
      <path d="M5 6h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function IconRocket(props: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13c2 0 4 2 4 4v2H7c-2 0-4-2-4-4v-2h2Z" />
      <path d="M15 3c-3 1-6 4-7 7l6 6c3-1 6-4 7-7-1-3-3-5-6-6Z" />
      <path d="M9 10l5 5" />
      <path d="M14 5c1 1 2 2 3 3" />
    </svg>
  )
}

function IconDownload(props: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}

type Purchase = {
  name: string
  kind: string
  purchasedAt: string
  description: string
  badgeTone: 'primary' | 'slate' | 'amber'
}

const PURCHASES: Purchase[] = [
  {
    name: 'Nexus AI Assistant',
    kind: 'AI Tool',
    purchasedAt: 'Oct 12, 2023',
    description:
      'A conversational AI interface prototype with context-aware memory and multi-modal capabilities.',
    badgeTone: 'primary',
  },
  {
    name: 'FinTech Analytics V2',
    kind: 'Dashboard',
    purchasedAt: 'Sep 28, 2023',
    description:
      'Comprehensive financial dashboard template with real-time data visualization components.',
    badgeTone: 'slate',
  },
  {
    name: 'Commerce UI Kit',
    kind: 'Mobile',
    purchasedAt: 'Aug 15, 2023',
    description:
      'Premium mobile e-commerce prototype featuring 50+ screens and micro-interactions.',
    badgeTone: 'amber',
  },
]

function Badge({ kind, tone }: { kind: string; tone: Purchase['badgeTone'] }) {
  const cls =
    tone === 'primary'
      ? 'bg-primary text-white'
      : tone === 'amber'
        ? 'bg-amber-500 text-white'
        : 'bg-slate-900 text-white dark:bg-slate-800'

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-sm ${cls}`}
    >
      {kind}
    </span>
  )
}

export default function PurchasesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-primary">
            <IconSparkle className="h-5 w-5" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
              Premium
            </p>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            My Purchases
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Manage and access your purchased software prototypes and AI tools.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex rounded-xl bg-slate-100 p-1 shadow-inner dark:bg-slate-900/40">
            <a
              href="#"
              className="rounded-lg bg-white px-4 py-1.5 text-sm font-black text-slate-900 shadow-sm transition hover:no-underline dark:bg-slate-900 dark:text-white"
            >
              Active
            </a>
            <a
              href="#"
              className="rounded-lg px-4 py-1.5 text-sm font-bold text-slate-600 transition hover:text-slate-900 hover:no-underline dark:text-slate-400 dark:hover:text-white"
            >
              Beta
            </a>
            <a
              href="#"
              className="rounded-lg px-4 py-1.5 text-sm font-bold text-slate-600 transition hover:text-slate-900 hover:no-underline dark:text-slate-400 dark:hover:text-white"
            >
              Archived
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PURCHASES.map((p) => (
          <section
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="relative h-40 overflow-hidden bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/15 mix-blend-overlay" />
              <div className="absolute left-3 top-3">
                <Badge kind={p.kind} tone={p.badgeTone} />
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-black tracking-[0.2em] text-white/80 backdrop-blur">
                  PREVIEW
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <div>
                <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                  {p.name}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                  <IconCalendar className="h-4 w-4" />
                  Purchased: {p.purchasedAt}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {p.description}
              </p>

              <div className="mt-auto flex gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-sm font-black text-white transition hover:opacity-95"
                >
                  <IconRocket className="h-4 w-4" />
                  Launch
                </button>
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 text-sm font-black text-slate-900 transition hover:bg-slate-200 dark:bg-slate-800/70 dark:text-white dark:hover:bg-slate-800"
                >
                  <IconDownload className="h-4 w-4" />
                  Code
                </button>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-500">
                (Mock UI) These actions are not connected.
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
