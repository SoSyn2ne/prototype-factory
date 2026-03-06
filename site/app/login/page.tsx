import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In · Prototype Factory',
  description: 'Prototype Factory Premium — Sign in (static mock).',
}

function LogoMark(props: { className?: string }) {
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

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 dark:bg-background-dark">
      <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left: promo */}
        <div className="relative hidden overflow-hidden bg-slate-950 lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-background-dark" />
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="relative z-10 flex w-full items-center justify-center px-12 py-16">
            <div className="max-w-md">
              <div className="mb-8 flex items-center gap-3 text-primary">
                <LogoMark className="h-10 w-10" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-300/70">
                    Prototype Factory
                  </div>
                  <div className="text-lg font-bold text-white tracking-tight">Premium Gallery</div>
                </div>
              </div>

              <h1 className="text-balance text-4xl font-black tracking-tight text-white">
                Welcome back to the Factory.
              </h1>
              <p className="mt-4 text-pretty text-slate-300 leading-relaxed">
                Resume your access to high-performance prototypes and next-gen tools.
              </p>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.15)]" />
                  <div>
                    <p className="text-sm font-semibold text-white">Local-first demos</p>
                    <p className="mt-1 text-sm text-slate-300">
                      No external API calls required. Everything runs statically.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-400">
                (Mock UI) Authentication is not connected yet.
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="relative flex items-center justify-center px-6 py-14 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50 dark:from-background-dark dark:via-background-dark dark:to-background-dark" />

          <div className="relative z-10 w-full max-w-md">
            <div className="mb-10">
              <div className="mb-6 flex items-center gap-3 text-primary lg:hidden">
                <LogoMark className="h-9 w-9" />
                <div className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                  Prototype Factory
                </div>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Sign In
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Enter your credentials to access your account.
              </p>
            </div>

            <form className="space-y-5" action="#" method="post">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Email Address
                </span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Password
                </span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white"
                />
              </label>

              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-700"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-sm font-bold text-primary hover:opacity-80"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-black text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                Sign In
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-slate-50 px-2 text-slate-500 dark:bg-background-dark dark:text-slate-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032S9.213 5.968 12.545 5.968c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.988 15.139 2 12.545 2 7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                    />
                  </svg>
                  GitHub
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
              Don&apos;t have an account?{' '}
              <a href="#" className="font-black text-primary hover:opacity-80">
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
