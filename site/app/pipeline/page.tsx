import Link from 'next/link';
import { loadGraduations, type PipelineStage } from '@/lib/graduations';

export const metadata = {
  title: 'Graduation Pipeline — Prototype Factory',
  description: 'Ideas carried from signal to a build-ready go/no-go decision.',
};

const STAGE_ORDER = ['signal', 'validate', 'spec', 'feasibility', 'interactive', 'decision'];

function statusDot(status: PipelineStage['status']) {
  if (status === 'done') return '#1baf7a';
  if (status === 'doing') return '#c98500';
  return '#3f3f46';
}

function decisionBadge(decision: string) {
  const map: Record<string, { label: string; cls: string }> = {
    go: { label: 'GO', cls: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40' },
    'no-go': { label: 'NO-GO', cls: 'bg-rose-500/15 text-rose-300 border-rose-500/40' },
    pivot: { label: 'PIVOT', cls: 'bg-amber-500/15 text-amber-300 border-amber-500/40' },
    pending: { label: 'IN PROGRESS', cls: 'bg-slate-500/15 text-slate-300 border-slate-500/40' },
  };
  const m = map[decision] || map.pending;
  return <span className={`rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${m.cls}`}>{m.label}</span>;
}

export default function PipelinePage() {
  const { graduations } = loadGraduations();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-4 py-10 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-800 pb-6">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-emerald-300">PF Brainroom</div>
            <h1 className="mt-1 text-3xl font-black text-white">Graduation Pipeline</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              아이디어가 예쁜 HTML 목업에서 멈추지 않고, 검증 → 스펙 → 타당성 →
              진짜 로직이 도는 인터랙티브 프로토타입 → go/no-go 결정까지 실제로
              통과했는지 추적합니다. 정적 목업은 이 파이프라인을 충족하지 못합니다.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/" className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800 hover:no-underline">Gallery</Link>
            <Link href="/clusters" className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800 hover:no-underline">Mind map</Link>
          </div>
        </div>

        {graduations.length === 0 ? (
          <p className="mt-10 rounded-xl border border-slate-800 bg-slate-950/60 p-6 text-sm text-slate-400">
            아직 파이프라인에 올라온 아이디어가 없습니다. 프로토타입 폴더에서
            <code className="mx-1 rounded bg-slate-900 px-1.5 py-0.5">node scripts/new-graduation.mjs &lt;folder&gt;</code>
            로 시작하세요.
          </p>
        ) : (
          <div className="mt-8 space-y-5">
            {graduations.map((g) => {
              const ordered = [...g.stages].sort(
                (a, b) => STAGE_ORDER.indexOf(a.key) - STAGE_ORDER.indexOf(b.key)
              );
              const pct = Math.round((g.doneCount / g.totalCount) * 100);
              return (
                <article key={g.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-black text-white">{g.idea}</h2>
                      {decisionBadge(g.decision)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href={`/p/${g.id}`} className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-black text-slate-200 hover:bg-slate-800 hover:no-underline">Idea</Link>
                      {g.labUrl ? (
                        <Link href={g.labUrl} className="rounded-lg bg-emerald-400 px-3 py-1.5 text-xs font-black text-slate-950 hover:bg-emerald-300 hover:no-underline">
                          Open prototype ↗
                        </Link>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-emerald-400" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs font-black text-slate-400">{g.doneCount}/{g.totalCount}</span>
                  </div>

                  <ol className="mt-4 space-y-2">
                    {ordered.map((s, i) => (
                      <li key={s.key} className="flex gap-3">
                        <div className="mt-1 flex flex-col items-center">
                          <span className="h-3 w-3 rounded-full" style={{ background: statusDot(s.status) }} />
                          {i < ordered.length - 1 ? <span className="mt-1 h-full w-px flex-1 bg-slate-800" /> : null}
                        </div>
                        <div className="pb-1">
                          <div className="text-sm font-bold text-white">
                            {i + 1}. {s.label}
                            {s.decision && s.decision !== 'pending' ? (
                              <span className="ml-2 text-xs font-black uppercase text-emerald-300">{s.decision}</span>
                            ) : null}
                          </div>
                          {s.evidence ? <div className="text-xs leading-5 text-slate-400">{s.evidence}</div> : null}
                        </div>
                      </li>
                    ))}
                  </ol>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
