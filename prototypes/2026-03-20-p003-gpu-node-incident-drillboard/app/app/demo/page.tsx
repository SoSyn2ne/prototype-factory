"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const scenarios = {
  thermal: {
    label: "Thermal spike",
    severity: "P1",
    trigger: "GPU temp > 90°C for 4m",
    summary: "Fan response lagging while queue load stays high.",
    checks: [
      "Freeze new long-running jobs on this node.",
      "Verify fan RPM, inlet temp, and recent power profile changes.",
      "Check whether adjacent chassis heat is compounding the spike.",
      "Record mitigation and restart decision with exact times.",
    ],
  },
  disk: {
    label: "Disk pressure",
    severity: "P2",
    trigger: "root volume > 90%",
    summary: "Checkpoint and log growth are crowding temp workspace.",
    checks: [
      "Stop non-critical writes and snapshot the top offenders.",
      "Verify whether stale checkpoints can be moved or purged.",
      "Protect log retention before any cleanup action.",
      "Capture recovered headroom and next threshold to watch.",
    ],
  },
  oom: {
    label: "CUDA OOM cascade",
    severity: "P1",
    trigger: "4 retries in 6m",
    summary: "Memory fragmentation is causing repeated job churn.",
    checks: [
      "Pause the queue lane sending jobs to this node.",
      "Identify the workload mix that started the retry burst.",
      "Compare free VRAM against model allocation expectations.",
      "Note the point where restart becomes cheaper than waiting.",
    ],
  },
} as const;

type ScenarioKey = keyof typeof scenarios;

const initialLog = [
  "19:31 Alert received from node #02",
  "19:33 Queue intake reduced to stop blast radius",
  "19:35 Waiting for operator action",
];

export default function DemoPage() {
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>("thermal");
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [notes, setNotes] = useState("");
  const [log, setLog] = useState<string[]>(initialLog);

  const scenario = scenarios[scenarioKey];

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setSeconds((current) => current + 1), 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  const clock = useMemo(() => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const remainder = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${remainder}`;
  }, [seconds]);

  function activateScenario(nextKey: ScenarioKey) {
    setScenarioKey(nextKey);
    setRunning(false);
    setSeconds(0);
    setLog([
      `${new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })} ${scenarios[nextKey].label} selected`,
      `Trigger: ${scenarios[nextKey].trigger}`,
      `Severity: ${scenarios[nextKey].severity}`,
    ]);
  }

  function addNote() {
    if (!notes.trim()) return;
    setLog((current) => [
      `${new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })} ${notes.trim()}`,
      ...current,
    ]);
    setNotes("");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#020617_0%,_#111827_100%)] text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-rose-300/80">Live incident rehearsal</p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Operator drill surface</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Pick one failure mode, start the timer, and leave a clean timeline another operator could trust.
            </p>
          </div>
          <div className="flex gap-2 text-sm">
            <Link href="/" className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/30 hover:bg-white/5">
              Home
            </Link>
            <Link href="/spec" className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/30 hover:bg-white/5">
              Spec
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Scenario</p>
              <span className="rounded-full bg-rose-400/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-rose-200">{scenario.severity}</span>
            </div>
            <div className="mt-4 space-y-3">
              {(Object.entries(scenarios) as [ScenarioKey, (typeof scenarios)[ScenarioKey]][]).map(([key, item]) => {
                const active = key === scenarioKey;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => activateScenario(key)}
                    className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                      active
                        ? "border-rose-400/50 bg-rose-400/10 text-white"
                        : "border-white/10 bg-black/10 text-slate-300 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <p className="text-base font-medium">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.trigger}</p>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Incident clock</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <p className="text-5xl font-semibold tracking-tight text-white">{clock}</p>
                  <p className="mt-2 text-sm text-slate-400">Goal: stabilize within 10 minutes</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setRunning(true)}
                    className="rounded-full bg-rose-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-rose-300"
                  >
                    Start
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRunning(false);
                      setSeconds(0);
                    }}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-white/30 hover:bg-white/5"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <section className="rounded-[28px] border border-white/10 bg-slate-950/50 p-5 shadow-2xl shadow-black/20">
            <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Active signal</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">{scenario.label}</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{scenario.summary}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Trigger</p>
                <p className="mt-2 text-sm text-slate-200">{scenario.trigger}</p>
              </div>
            </div>

            <div className="grid gap-8 py-6 xl:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Immediate checks</p>
                <ol className="mt-4 space-y-4">
                  {scenario.checks.map((step, index) => (
                    <li key={step} className="grid grid-cols-[28px_1fr] gap-3 text-sm leading-7 text-slate-200">
                      <span className="text-rose-300">0{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Operator log</p>
                  <button type="button" onClick={addNote} className="text-sm text-rose-200 transition hover:text-rose-100">
                    Add note
                  </button>
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3">
                  <textarea
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Write the decision you just made…"
                    className="min-h-[96px] w-full resize-none bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  {log.map((entry) => (
                    <div key={entry} className="border-b border-white/6 pb-3 text-sm text-slate-300 last:border-b-0 last:pb-0">
                      {entry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
