import Link from "next/link";

const alertRows = [
  { time: "19:02", label: "GPU temp spike", value: "92°C", status: "Investigate" },
  { time: "19:05", label: "Disk pressure", value: "91%", status: "Watch" },
  { time: "19:08", label: "CUDA OOM retry", value: "4 jobs", status: "Escalate" },
];

const runbook = [
  "Throttle new queue intake before retry storms spread.",
  "Check temperature, fan curve, and recent power draw changes.",
  "Confirm free disk headroom for logs, checkpoints, and temp artifacts.",
  "Capture operator notes with timestamps before restarting anything.",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.12),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)] text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-rose-300/80">Prototype Factory · 2026-03-20 p003</p>
            <h1 className="mt-2 text-xl font-semibold text-white sm:text-2xl">GPU Node Incident Drillboard</h1>
          </div>
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/demo"
              className="rounded-full border border-rose-400/40 bg-rose-400/10 px-4 py-2 text-rose-100 transition hover:bg-rose-400/20"
            >
              Open drill
            </Link>
            <Link
              href="/spec"
              className="rounded-full border border-white/15 px-4 py-2 text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Read spec
            </Link>
          </nav>
        </header>

        <section className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-rose-300">Operator rehearsal surface</p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Train the first 10 minutes of a GPU node incident before production does it for you.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              A focused drillboard for thermal spikes, disk pressure, and OOM cascades. Start one alert, run the clock, follow the runbook, and leave a clean timeline.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Link
                href="/demo"
                className="rounded-full bg-rose-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-rose-300"
              >
                Start live drill
              </Link>
              <Link
                href="/spec"
                className="rounded-full border border-white/15 px-5 py-3 font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/5"
              >
                Review assumptions
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-sm text-slate-300">
              <span>Live signal snapshot</span>
              <span className="rounded-full bg-rose-400/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-rose-200">Node #02</span>
            </div>
            <div className="space-y-4 p-5">
              {alertRows.map((row) => (
                <div key={row.time} className="grid grid-cols-[56px_1fr_auto] items-center gap-3 border-b border-white/6 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-sm text-slate-500">{row.time}</span>
                  <div>
                    <p className="text-sm font-medium text-white">{row.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Signal {row.value}</p>
                  </div>
                  <span className="rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1 text-xs text-rose-100">{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-white/10 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">Why this exists</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
              Real incidents punish hesitation. This prototype strips the workflow down to the operator surface: incoming signal, decision clock, next checks, and an audit trail you can trust.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">First-pass runbook</p>
            <ol className="mt-4 space-y-3">
              {runbook.map((step, index) => (
                <li key={step} className="grid grid-cols-[28px_1fr] gap-4 text-sm leading-7 text-slate-200">
                  <span className="text-rose-300">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </section>
    </main>
  );
}
