import Link from 'next/link';
import { loadIndex } from '@/lib/index';
import ClusterForceMindMap from '@/components/ClusterForceMindMap';

export default function ClusterBoardPage() {
  const index = loadIndex();

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-primary">Cluster Board</div>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              D3 force-directed idea mind map.
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              이제는 고정 박스 레이아웃이 아니라 force simulation으로 태그와 아이디어가 서로 밀고 당기며 배치됩니다.
              마인드맵처럼 군집 구조를 더 자연스럽게 읽을 수 있게 만든 버전입니다.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-black text-slate-700 hover:bg-slate-50 hover:no-underline dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
              Back to Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] shadow-sm dark:border-slate-800 dark:bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.16),_transparent_36%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]">
        <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span>Total ideas {index.items.length}</span>
            <span>•</span>
            <span>Top tags linked to representative ideas</span>
            <span>•</span>
            <span>D3 force layout</span>
          </div>
        </div>

        <ClusterForceMindMap items={index.items} />
      </section>
    </main>
  );
}
