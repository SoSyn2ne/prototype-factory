import Link from "next/link";

const falsification = [
  "Operators understand the page by scanning headings, trigger, and timer only.",
  "One chosen scenario is enough to start action without extra setup or explanation.",
  "A 10-minute rehearsal feels realistic enough to expose missing runbook steps.",
  "Manual note capture is sufficient for a first drill before deeper integrations.",
  "Thermal, disk, and OOM incidents represent the highest-value first rehearsal set.",
];

export default function SpecPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#020617_0%,_#111827_100%)] text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-rose-300/80">Spec surface</p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">What this prototype is trying to prove</h1>
          </div>
          <Link href="/demo" className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-white/30 hover:bg-white/5">
            Back to demo
          </Link>
        </header>

        <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Problem</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              GPU incidents are rare enough to feel unfamiliar but expensive enough that the first minutes matter.
              Teams need a lightweight rehearsal surface before investing in full observability or incident tooling.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Target user</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Solo operators, small inference teams, or indie infra builders managing one to a few GPU nodes without a dedicated SRE practice.
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Success metric</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A new operator can choose a scenario, start the drill, and produce a usable incident note trail in under 60 seconds.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Known assumptions</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>The first version should stay manual and browser-only.</li>
              <li>The operator values timing, priority, and sequence more than rich charts.</li>
              <li>The UI should feel like an action surface, not a generic dashboard gallery.</li>
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 pt-8">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Falsification checklist</p>
          <ol className="mt-4 space-y-4">
            {falsification.map((item, index) => (
              <li key={item} className="grid grid-cols-[28px_1fr] gap-4 text-sm leading-7 text-slate-200">
                <span className="text-rose-300">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
