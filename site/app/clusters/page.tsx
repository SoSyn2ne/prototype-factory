import Link from 'next/link';
import { loadIndex } from '@/lib/index';

type ClusterNode = {
  tag: string;
  count: number;
  items: { id: string; title: string; createdAt: string }[];
};

function buildClusters() {
  const index = loadIndex();
  const map = new Map<string, ClusterNode>();

  for (const item of index.items) {
    for (const tag of item.tags || []) {
      const current = map.get(tag) || { tag, count: 0, items: [] };
      current.count += 1;
      if (current.items.length < 4) {
        current.items.push({ id: item.id, title: item.title, createdAt: item.createdAt });
      }
      map.set(tag, current);
    }
  }

  const clusters = [...map.values()]
    .sort((a, b) => b.count - a.count || b.items[0]?.createdAt.localeCompare(a.items[0]?.createdAt || '') || a.tag.localeCompare(b.tag))
    .slice(0, 10);

  return { index, clusters };
}

function polar(cx: number, cy: number, radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + Math.cos(rad) * radius, y: cy + Math.sin(rad) * radius };
}

export default function ClusterBoardPage() {
  const { index, clusters } = buildClusters();
  const width = 1200;
  const height = 900;
  const center = { x: width / 2, y: height / 2 };
  const primaryRadius = 270;

  const positioned = clusters.map((cluster, i) => {
    const angle = -90 + i * (360 / Math.max(clusters.length, 1));
    const pos = polar(center.x, center.y, primaryRadius, angle);
    const leaves = cluster.items.map((item, leafIdx) => {
      const leafAngle = angle - 20 + leafIdx * 14;
      return {
        ...item,
        ...polar(pos.x, pos.y, 135, leafAngle),
      };
    });
    return { ...cluster, x: pos.x, y: pos.y, leaves };
  });

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-primary">Cluster Board</div>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Mind map of idea clusters.
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              태그를 중심 노드로 두고, 연결된 대표 프로토를 주변에 배치한 마인드맵입니다. 박스 리스트보다 아이디어 군집과
              연결 관계를 한눈에 보기 쉽게 만들었습니다.
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
            <span>Top clusters {clusters.length}</span>
            <span>•</span>
            <span>Click labels to jump into detail</span>
          </div>
        </div>

        <div className="overflow-x-auto p-4 sm:p-6">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-auto min-w-[1100px] w-full">
            {positioned.map((cluster) => (
              <g key={`lines-${cluster.tag}`}>
                <line x1={center.x} y1={center.y} x2={cluster.x} y2={cluster.y} stroke="rgba(59,130,246,0.35)" strokeWidth="3" />
                {cluster.leaves.map((leaf) => (
                  <line
                    key={`leaf-line-${leaf.id}`}
                    x1={cluster.x}
                    y1={cluster.y}
                    x2={leaf.x}
                    y2={leaf.y}
                    stroke="rgba(148,163,184,0.45)"
                    strokeWidth="2"
                  />
                ))}
              </g>
            ))}

            <g>
              <circle cx={center.x} cy={center.y} r="94" fill="rgba(14,165,233,0.16)" stroke="rgba(14,165,233,0.65)" strokeWidth="3" />
              <circle cx={center.x} cy={center.y} r="66" fill="rgba(15,23,42,0.92)" stroke="rgba(125,211,252,0.35)" strokeWidth="2" />
              <text x={center.x} y={center.y - 6} textAnchor="middle" className="fill-white text-[26px] font-bold">
                PF Brain
              </text>
              <text x={center.x} y={center.y + 22} textAnchor="middle" className="fill-slate-300 text-[14px] font-medium">
                {index.items.length} ideas mapped
              </text>
            </g>

            {positioned.map((cluster, idx) => (
              <g key={cluster.tag}>
                <circle
                  cx={cluster.x}
                  cy={cluster.y}
                  r={Math.max(36, 28 + cluster.count * 2.5)}
                  fill={idx % 2 === 0 ? 'rgba(59,130,246,0.18)' : 'rgba(168,85,247,0.18)'}
                  stroke={idx % 2 === 0 ? 'rgba(59,130,246,0.75)' : 'rgba(168,85,247,0.75)'}
                  strokeWidth="3"
                />
                <text x={cluster.x} y={cluster.y - 2} textAnchor="middle" className="fill-slate-900 dark:fill-white text-[16px] font-bold">
                  #{cluster.tag}
                </text>
                <text x={cluster.x} y={cluster.y + 18} textAnchor="middle" className="fill-slate-500 dark:fill-slate-300 text-[11px] font-bold">
                  {cluster.count} ideas
                </text>

                {cluster.leaves.map((leaf) => (
                  <g key={leaf.id}>
                    <a href={`/p/${leaf.id}`}>
                      <circle cx={leaf.x} cy={leaf.y} r="16" fill="rgba(15,23,42,0.92)" stroke="rgba(148,163,184,0.5)" strokeWidth="2" />
                      <text x={leaf.x + 24} y={leaf.y + 4} className="fill-slate-700 dark:fill-slate-200 text-[12px] font-medium">
                        {leaf.title.length > 34 ? `${leaf.title.slice(0, 34)}…` : leaf.title}
                      </text>
                    </a>
                  </g>
                ))}
              </g>
            ))}
          </svg>
        </div>
      </section>
    </main>
  );
}
