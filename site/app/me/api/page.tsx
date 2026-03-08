import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Management · Prototype Factory',
  description: 'Prototype Factory Premium — API Management (static mock).',
}

function IconKey(props: { className?: string }) {
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
      <path d="M21 2l-2 2" />
      <path d="M7 12a5 5 0 1 1 3.5-8.5L21 14l-4 4-2-2-2 2-2-2-2 2-2-2" />
    </svg>
  )
}

function IconPlus(props: { className?: string }) {
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
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

function IconCopy(props: { className?: string }) {
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
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function IconMore(props: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={props.className}
      fill="currentColor"
    >
      <circle cx="5" cy="12" r="1.75" />
      <circle cx="12" cy="12" r="1.75" />
      <circle cx="19" cy="12" r="1.75" />
    </svg>
  )
}

type ApiKeyRow = {
  name: string
  keyMasked: string
  created: string
  lastUsed: string
  status: 'active' | 'warning'
}

const KEYS: ApiKeyRow[] = [
  {
    name: 'Production App Server',
    keyMasked: 'pf_prod_****************a7',
    created: 'Sep 12, 2023',
    lastUsed: '10 mins ago',
    status: 'active',
  },
  {
    name: 'Staging Environment',
    keyMasked: 'pf_test_****************b2',
    created: 'Oct 05, 2023',
    lastUsed: '2 hours ago',
    status: 'active',
  },
  {
    name: 'Developer Local (Sarah)',
    keyMasked: 'pf_dev_****************x9',
    created: 'Oct 20, 2023',
    lastUsed: 'Never used',
    status: 'warning',
  },
]

export default function ApiPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            API Management
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Manage API keys, monitor usage, and configure access limits.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:opacity-95"
        >
          <IconPlus className="h-4 w-4" />
          Generate New Key
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Usage overview */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40 lg:col-span-2">
          <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50/50 px-6 py-5 dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              Usage Overview
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-slate-500 dark:text-slate-500">
                Environment:
              </span>
              <select className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-black text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-background-dark dark:text-white">
                <option>Production</option>
                <option>Staging</option>
                <option>Development</option>
              </select>
            </div>
          </header>

          <div className="p-6">
            <div className="mb-6 flex flex-wrap items-baseline gap-3">
              <p className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                145,230
              </p>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-500">
                Requests (Last 30 Days)
              </p>
              <div className="ml-auto inline-flex items-center rounded-lg bg-emerald-50 px-2 py-1 text-sm font-black text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                +12.5%
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-background-dark">
              <svg
                className="h-full w-full"
                viewBox="0 0 800 200"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#135bec" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#135bec" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,150 C50,150 100,120 150,130 C200,140 250,80 300,90 C350,100 400,40 450,60 C500,80 550,30 600,40 C650,50 700,20 750,30 C800,40 800,40 800,40 L800,200 L0,200 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,150 C50,150 100,120 150,130 C200,140 250,80 300,90 C350,100 400,40 450,60 C500,80 550,30 600,40 C650,50 700,20 750,30 C800,40 800,40 800,40"
                  fill="none"
                  stroke="#135bec"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-3 pb-2 text-xs font-bold text-slate-500 dark:text-slate-500">
                <span>Oct 1</span>
                <span>Oct 8</span>
                <span>Oct 15</span>
                <span>Oct 22</span>
                <span>Oct 29</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
              (Mock UI) Chart data is static.
            </p>
          </div>
        </section>

        {/* Quick actions */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-white">
              <IconKey className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base font-black text-slate-900 dark:text-white">
                Key Hygiene
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Rotate keys regularly.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-sm font-black text-slate-900 dark:text-white">
                Recommended
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Create a staging key for CI and restrict by environment.
              </p>
            </div>
            <button
              type="button"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-background-dark dark:text-white dark:hover:bg-slate-900/40"
            >
              View Docs
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
            (Mock UI) Actions not connected.
          </p>
        </section>
      </div>

      {/* Table */}
      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50/50 px-6 py-5 dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="text-base font-black text-slate-900 dark:text-white">
            Active API Keys
          </h2>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50/30 text-slate-500 dark:border-slate-800/50 dark:bg-slate-900/60 dark:text-slate-400">
              <tr>
                <th className="px-6 py-3 text-xs font-black uppercase tracking-widest">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-black uppercase tracking-widest">
                  Key
                </th>
                <th className="px-6 py-3 text-xs font-black uppercase tracking-widest">
                  Created
                </th>
                <th className="px-6 py-3 text-xs font-black uppercase tracking-widest">
                  Last Used
                </th>
                <th className="px-6 py-3 text-right text-xs font-black uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50">
              {KEYS.map((row) => (
                <tr
                  key={row.name}
                  className="transition hover:bg-slate-50/50 dark:hover:bg-slate-800/20"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          row.status === 'active' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                      />
                      <span className="font-black text-slate-900 dark:text-white">
                        {row.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-mono text-slate-600 dark:text-slate-300">
                      <span>{row.keyMasked}</span>
                      <button
                        type="button"
                        title="Copy Key (mock)"
                        className="rounded-lg p-1 text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200"
                      >
                        <IconCopy className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-500 dark:text-slate-400">
                    {row.created}
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-500 dark:text-slate-400">
                    {row.lastUsed}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="rounded-lg p-1 text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200"
                      title="More (mock)"
                    >
                      <IconMore className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-200 px-6 py-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          (Mock UI) Copy / actions are not wired.
        </div>
      </section>
    </main>
  )
}
