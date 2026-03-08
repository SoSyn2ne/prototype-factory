import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account Settings · Prototype Factory',
  description: 'Prototype Factory Premium — Account Settings (static mock).',
}

function IconUser(props: { className?: string }) {
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
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function IconLock(props: { className?: string }) {
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
      <rect x="4" y="11" width="16" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

function IconLink(props: { className?: string }) {
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
      <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
      <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
    </svg>
  )
}

function IconCard(props: { className?: string }) {
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
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  )
}

function IconBell(props: { className?: string }) {
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
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function NavItem(props: {
  active?: boolean
  href: string
  icon: React.ReactNode
  label: string
}) {
  const base =
    'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-black transition'
  const cls = props.active
    ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white'
    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/40 dark:hover:text-white'

  return (
    <a href={props.href} className={`${base} ${cls}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-transparent text-primary/90 dark:text-slate-200">
        {props.icon}
      </span>
      {props.label}
    </a>
  )
}

export default function SettingsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-[88px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
            <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/60">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-slate-200 font-black text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                AC
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  Alex Chen
                </div>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-500">
                  alex.chen@example.com
                </div>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              <NavItem
                active
                href="#"
                icon={<IconUser className="h-4 w-4" />}
                label="Profile Settings"
              />
              <NavItem
                href="#"
                icon={<IconLock className="h-4 w-4" />}
                label="Security"
              />
              <NavItem
                href="#"
                icon={<IconLink className="h-4 w-4" />}
                label="Connected Accounts"
              />
              <NavItem
                href="#"
                icon={<IconCard className="h-4 w-4" />}
                label="Billing & Plans"
              />
              <div className="my-3 border-t border-slate-200 dark:border-slate-800" />
              <NavItem
                href="#"
                icon={<IconBell className="h-4 w-4" />}
                label="Notifications"
              />
            </nav>

            <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
              (Mock UI) Navigation is not wired.
            </p>
          </div>
        </aside>

        {/* Content */}
        <section className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Account Settings
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Update profile info and preferences.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 md:p-8">
            <h2 className="text-lg font-black text-slate-900 dark:text-white">
              Profile Information
            </h2>

            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-slate-100 bg-slate-200 font-black text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300">
                AC
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-black text-slate-800 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    Change Picture
                  </button>
                  <button
                    type="button"
                    className="rounded-xl px-4 py-2 text-sm font-black text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-500">
                  JPG, GIF or PNG. Max size of 800K
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-black text-slate-700 dark:text-slate-300">
                  First Name
                </span>
                <input
                  className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-background-dark dark:text-white"
                  defaultValue="Alex"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-black text-slate-700 dark:text-slate-300">
                  Last Name
                </span>
                <input
                  className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-background-dark dark:text-white"
                  defaultValue="Chen"
                />
              </label>
            </div>

            <div className="mt-5">
              <label className="block">
                <span className="mb-2 block text-sm font-black text-slate-700 dark:text-slate-300">
                  Email Address
                </span>
                <input
                  type="email"
                  className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-background-dark dark:text-white"
                  defaultValue="alex.chen@example.com"
                />
              </label>
            </div>

            <div className="mt-5">
              <label className="block">
                <span className="mb-2 block text-sm font-black text-slate-700 dark:text-slate-300">
                  Bio
                </span>
                <textarea
                  rows={3}
                  className="block w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-background-dark dark:text-white"
                  defaultValue="Product designer and AI enthusiast building tools for the future."
                />
              </label>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">
              <p className="text-xs text-slate-500 dark:text-slate-500">
                (Mock UI) Saving is not connected.
              </p>
              <button
                type="button"
                className="rounded-xl bg-primary px-6 py-2.5 text-sm font-black text-white shadow-sm transition hover:opacity-95"
              >
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
