'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force';
import type { ReactNode } from 'react';
import type { PrototypeIndexItem } from '@/lib/index';

type Props = {
  items: PrototypeIndexItem[];
  fullscreen?: boolean;
};

type GraphNode = {
  id: string;
  label: string;
  shortLabel?: string;
  kind: 'root' | 'tag' | 'idea';
  count?: number;
  href?: string;
  item?: PrototypeIndexItem;
  parentTag?: string;
  fx?: number;
  fy?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  radius: number;
};

type GraphLink = {
  source: string | GraphNode;
  target: string | GraphNode;
  strength?: number;
};

type TagGroup = {
  tag: string;
  count: number;
  items: PrototypeIndexItem[];
};

function buildTagGroups(items: PrototypeIndexItem[]) {
  const tagMap = new Map<string, TagGroup>();
  for (const item of items) {
    for (const tag of item.tags || []) {
      const current = tagMap.get(tag) || { tag, count: 0, items: [] };
      current.count += 1;
      if (current.items.length < 10) current.items.push(item);
      tagMap.set(tag, current);
    }
  }

  return [...tagMap.values()]
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
    .slice(0, 14);
}

function shorten(label: string, n = 28) {
  return label.length > n ? `${label.slice(0, n)}…` : label;
}

function buildGraph(groups: TagGroup[], collapsedTags: Set<string>, focusedTag: string | null) {
  const root: GraphNode = {
    id: 'root',
    label: focusedTag ? `#${focusedTag}` : 'PF Brain',
    kind: 'root',
    radius: focusedTag ? 64 : 58,
  };

  const visibleGroups = focusedTag ? groups.filter((g) => g.tag === focusedTag) : groups;
  const nodes: GraphNode[] = [root];
  const links: GraphLink[] = [];

  for (const group of visibleGroups) {
    const tagNode: GraphNode = {
      id: `tag:${group.tag}`,
      label: `#${group.tag}`,
      shortLabel: `#${group.tag}`,
      kind: 'tag',
      count: group.count,
      radius: Math.max(38, Math.min(68, 30 + group.count * 2.8)),
    };
    nodes.push(tagNode);
    links.push({ source: root.id, target: tagNode.id, strength: 0.95 });

    if (!collapsedTags.has(group.tag)) {
      group.items.forEach((item) => {
        const ideaId = `idea:${item.id}:${group.tag}`;
        nodes.push({
          id: ideaId,
          label: item.title,
          shortLabel: shorten(item.title, 30),
          kind: 'idea',
          href: `/p/${item.id}`,
          item,
          parentTag: group.tag,
          radius: 18,
        });
        links.push({ source: tagNode.id, target: ideaId, strength: 0.56 });
      });
    }
  }

  return { nodes, links };
}

function itemSummary(item?: PrototypeIndexItem | null) {
  if (!item) return null;
  return {
    title: item.title,
    oneLiner: item.oneLiner || '요약 없음',
    tags: (item.tags || []).slice(0, 4),
    demoUrl: item.demoUrl,
    detailUrl: `/p/${item.id}`,
    createdAt: item.createdAt,
  };
}

const realityChecks = [
  '누가 사고 왜 돈을 내는지 한 줄로 설명 가능한가',
  '문제가 주간/월간 매출 누수로 연결되는가',
  '데모 한 화면만 봐도 가치가 바로 읽히는가',
  '오퍼레이터가 지금 당장 써보고 싶을 정도로 명확한가',
];

type BrainroomMode = 'map' | 'brainstorm' | 'batch';

type SignalSeed = {
  id: string;
  source: string;
  raw: string;
  action: string;
  pressure: string;
};

type CandidateSeed = {
  title: string;
  trigger: string;
  mechanic: string;
  output: string;
  scores: {
    pull: number;
    pain: number;
    urgency: number;
    wtp: number;
  };
};

type FailureSeed = {
  title: string;
  reason: string;
  revive: string;
};

const signalSeeds: SignalSeed[] = [
  {
    id: 'S1',
    source: 'community / operator complaint',
    raw: '사람들이 이미 질문, 스프레드시트, 템플릿, 구매로 문제를 해결하려고 하는가?',
    action: 'Repeated questions, saved screenshots, manual trackers, paid PDF/template purchases',
    pressure: 'money loss / public embarrassment / deadline anxiety',
  },
  {
    id: 'S2',
    source: 'marketplace / weird purchase',
    raw: '말도 안 되는 작은 구매가 사실은 큰 불안을 대신 처리하고 있는가?',
    action: 'Tiny paid workaround, Etsy/Notion/template buy, agency DM, creator comment thread',
    pressure: 'status defense / control fantasy / relationship repair',
  },
  {
    id: 'S3',
    source: 'policy / platform change',
    raw: '규칙이 바뀌어서 어제의 습관이 갑자기 손실로 바뀌었는가?',
    action: 'Deadline check, fee comparison, export dump, appeal letter, broker/accountant question',
    pressure: 'asset defense / compliance fear / missed opportunity',
  },
];

const candidateSeeds: CandidateSeed[] = [
  {
    title: 'Panic-to-Proof Builder',
    trigger: '사용자가 불안해서 검색과 스크린샷을 반복하는 순간',
    mechanic: 'raw signal을 증거 묶음, 반박 질문, 공유 가능한 출력물로 바꾸는 인터뷰',
    output: 'decision memo + proof packet + first validation post',
    scores: { pull: 4, pain: 4, urgency: 5, wtp: 3 },
  },
  {
    title: 'Desire Lens Mutator',
    trigger: '좋은 신호인데 앱 형태가 너무 평범한 순간',
    mechanic: '성욕/외모/사교육/자산 방어/외로움/건강/역전 렌즈로 같은 문제를 재작성',
    output: '5 variant concepts with shame audience and spread trigger',
    scores: { pull: 3, pain: 4, urgency: 3, wtp: 4 },
  },
  {
    title: 'Kill Court',
    trigger: '그럴듯하지만 사랑받지 못할 아이디어가 후보에 남는 순간',
    mechanic: 'no-pull, no-user-action, just-dashboard, weak-buyer 같은 사유로 공개 재판',
    output: 'failure log + revive condition + salvage route',
    scores: { pull: 5, pain: 3, urgency: 4, wtp: 4 },
  },
];

const failureSeeds: FailureSeed[] = [
  {
    title: 'Generic AI dashboard',
    reason: '사용자가 지금 하는 행동, 검색어, 구매 흔적이 없어서 도착 경로가 없다.',
    revive: '커뮤니티 질문 3개 이상 또는 유료 템플릿/대행 수요가 발견되면 재검토',
  },
  {
    title: 'Nice planner with no sting',
    reason: '첫 화면을 봐도 돈, 체면, 관계, 건강 중 무엇을 지키는지 바로 안 보인다.',
    revive: '3초 안에 읽히는 손실 문장과 공유 가능한 출력물이 생기면 재작성',
  },
  {
    title: 'Trend-only idea',
    reason: '뉴스는 있지만 사람이 이미 움직인 증거가 없다.',
    revive: '검색 자동완성, Reddit/카페 질문, 구매 리뷰, 스프레드시트 우회가 붙으면 후보화',
  },
];

const finalSlots = [
  'Search signal with user action',
  'Need evidence with workaround',
  'Format roulette variant',
  'Desire lens rewrite',
  'Small-group love score',
  'Kill Court survival reason',
  'Output artifact',
  'Stitch prompt promise',
];

function scoreTotal(candidate: CandidateSeed) {
  return candidate.scores.pull + candidate.scores.pain + candidate.scores.urgency + candidate.scores.wtp;
}

function modeButtonClass(active: boolean) {
  return active
    ? 'border-emerald-400 bg-emerald-400 text-slate-950'
    : 'border-slate-700 bg-slate-950 text-slate-200 hover:bg-slate-800';
}

function ModeTabs({ activeMode, onChange }: { activeMode: BrainroomMode; onChange: (mode: BrainroomMode) => void }) {
  const tabs: Array<{ mode: BrainroomMode; label: string; desc: string }> = [
    { mode: 'map', label: 'Map', desc: 'past ideas' },
    { mode: 'brainstorm', label: 'Brainstorm', desc: 'signals to variants' },
    { mode: 'batch', label: 'Batch Builder', desc: 'final 8 gate' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/78 p-2 shadow-sm backdrop-blur-xl">
      {tabs.map((tab) => (
        <button
          key={tab.mode}
          type="button"
          onClick={() => onChange(tab.mode)}
          className={`min-w-[124px] rounded-lg border px-3 py-2 text-left text-xs font-black transition ${modeButtonClass(activeMode === tab.mode)}`}
        >
          <span className="block text-sm">{tab.label}</span>
          <span className="block text-[10px] font-bold opacity-75">{tab.desc}</span>
        </button>
      ))}
    </div>
  );
}

function BrainroomShell({
  activeMode,
  onModeChange,
  title,
  children,
}: {
  activeMode: BrainroomMode;
  onModeChange: (mode: BrainroomMode) => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-y-auto bg-[linear-gradient(180deg,#020617_0%,#0f172a_62%,#111827_100%)] px-4 py-4 text-slate-100 sm:px-6">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-4">
        <div className="flex flex-col gap-3 border-b border-slate-800 pb-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-black uppercase text-emerald-300">PF Brainroom</div>
            <h1 className="mt-1 text-2xl font-black text-white sm:text-3xl">{title}</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Search signals stay, but the factory now exposes the messy middle: memo, mutation, failure reasons, and promotion gates.
            </p>
          </div>
          <ModeTabs activeMode={activeMode} onChange={onModeChange} />
        </div>
        {children}
      </div>
    </div>
  );
}

function BrainstormWorkbench({
  activeMode,
  onModeChange,
  memo,
  onMemoChange,
  onAppendMemo,
  recentItems,
}: {
  activeMode: BrainroomMode;
  onModeChange: (mode: BrainroomMode) => void;
  memo: string;
  onMemoChange: (value: string) => void;
  onAppendMemo: (line: string) => void;
  recentItems: PrototypeIndexItem[];
}) {
  const mutationActions = [
    'make it sharper: name the money/status loss in one sentence',
    'make it loved by a small group: narrow the buyer and trigger',
    'make it non-dashboard: turn it into a receipt, court, panic button, or proof kit',
    'make it Korea-ready: replace vague US SaaS language with local arrival paths',
    'make it weird enough to share: add a visible result someone would send to a friend',
  ];

  return (
    <BrainroomShell activeMode={activeMode} onModeChange={onModeChange} title="Brainstorm Console">
      <div className="grid gap-4 xl:grid-cols-[1.05fr_1.3fr_0.9fr]">
        <section className="rounded-lg border border-slate-800 bg-slate-950/82 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-black text-white">Signal Inbox</h2>
              <p className="mt-1 text-xs leading-5 text-slate-400">Raw searches are kept rough until user action is visible.</p>
            </div>
            <div className="rounded-lg border border-emerald-400/50 px-3 py-2 text-xs font-black text-emerald-200">3 seeds</div>
          </div>
          <div className="mt-4 space-y-3">
            {signalSeeds.map((signal) => (
              <button
                key={signal.id}
                type="button"
                onClick={() => onAppendMemo(`${signal.id}: ${signal.raw} / action: ${signal.action}`)}
                className="block w-full rounded-lg border border-slate-800 bg-slate-900/68 p-3 text-left hover:border-emerald-400/60"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black text-emerald-300">{signal.id}</span>
                  <span className="text-[11px] font-bold text-slate-500">{signal.source}</span>
                </div>
                <div className="mt-2 text-sm font-bold leading-5 text-white">{signal.raw}</div>
                <div className="mt-2 text-xs leading-5 text-slate-400">{signal.action}</div>
                <div className="mt-2 rounded-md bg-slate-950 px-2 py-1 text-[11px] font-bold text-amber-200">{signal.pressure}</div>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-slate-800 bg-slate-950/82 p-4">
          <div className="grid gap-3 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h2 className="text-lg font-black text-white">Memo Pad</h2>
              <p className="mt-1 text-xs leading-5 text-slate-400">Operator instinct, odd phrases, and failed angles stay visible instead of disappearing inside chat.</p>
              <textarea
                value={memo}
                onChange={(event) => onMemoChange(event.target.value)}
                className="mt-3 h-[292px] w-full resize-none rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm leading-6 text-slate-100 outline-none focus:border-emerald-400"
              />
            </div>
            <div>
              <h3 className="text-sm font-black text-white">Mutation Buttons</h3>
              <div className="mt-3 space-y-2">
                {mutationActions.map((action) => (
                  <button
                    key={action}
                    type="button"
                    onClick={() => onAppendMemo(`Mutation: ${action}`)}
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-left text-xs font-bold leading-5 text-slate-200 hover:border-emerald-400/70"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-black text-white">Candidate Scratch Board</h3>
            <div className="mt-3 grid gap-3 lg:grid-cols-3">
              {candidateSeeds.map((candidate) => (
                <article key={candidate.title} className="rounded-lg border border-slate-800 bg-slate-900/64 p-3">
                  <div className="text-sm font-black text-white">{candidate.title}</div>
                  <div className="mt-2 text-xs leading-5 text-slate-400">{candidate.trigger}</div>
                  <div className="mt-3 rounded-md border border-slate-700 bg-slate-950 p-2 text-xs leading-5 text-slate-300">{candidate.mechanic}</div>
                  <div className="mt-3 text-[11px] font-bold text-cyan-200">{candidate.output}</div>
                  <div className="mt-3 grid grid-cols-4 gap-1 text-center text-[10px] font-black text-slate-300">
                    <span className="rounded bg-slate-800 py-1">P {candidate.scores.pull}</span>
                    <span className="rounded bg-slate-800 py-1">Pain {candidate.scores.pain}</span>
                    <span className="rounded bg-slate-800 py-1">U {candidate.scores.urgency}</span>
                    <span className="rounded bg-slate-800 py-1">W {candidate.scores.wtp}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onAppendMemo(`Candidate: ${candidate.title} / total=${scoreTotal(candidate)} / output=${candidate.output}`)}
                    className="mt-3 w-full rounded-lg bg-emerald-400 px-3 py-2 text-xs font-black text-slate-950 hover:bg-emerald-300"
                  >
                    Add to memo
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-slate-800 bg-slate-950/82 p-4">
          <h2 className="text-lg font-black text-white">Recent Pattern Watch</h2>
          <p className="mt-1 text-xs leading-5 text-slate-400">Use this to avoid renaming the same board again.</p>
          <div className="mt-4 space-y-2">
            {recentItems.map((item) => (
              <Link
                key={item.id}
                href={`/p/${item.id}`}
                className="block rounded-lg border border-slate-800 bg-slate-900/68 p-3 text-slate-200 hover:border-cyan-300 hover:no-underline"
              >
                <div className="text-xs font-black text-cyan-300">{item.id}</div>
                <div className="mt-1 text-sm font-bold text-white">{item.title}</div>
                <div className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">{item.oneLiner}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </BrainroomShell>
  );
}

function BatchBuilder({
  activeMode,
  onModeChange,
  onAppendMemo,
}: {
  activeMode: BrainroomMode;
  onModeChange: (mode: BrainroomMode) => void;
  onAppendMemo: (line: string) => void;
}) {
  return (
    <BrainroomShell activeMode={activeMode} onModeChange={onModeChange} title="Batch Builder and Failure Log">
      <div className="grid gap-4 xl:grid-cols-[1fr_1.15fr]">
        <section className="rounded-lg border border-slate-800 bg-slate-950/82 p-4">
          <h2 className="text-lg font-black text-white">Kill Court</h2>
          <p className="mt-1 text-xs leading-5 text-slate-400">Every weak idea needs a failure reason and a revival condition before it leaves the room.</p>
          <div className="mt-4 space-y-3">
            {failureSeeds.map((failure) => (
              <article key={failure.title} className="rounded-lg border border-rose-400/20 bg-rose-950/18 p-3">
                <div className="text-sm font-black text-white">{failure.title}</div>
                <div className="mt-2 text-xs leading-5 text-rose-100">{failure.reason}</div>
                <div className="mt-3 rounded-md border border-slate-700 bg-slate-950 p-2 text-xs leading-5 text-slate-300">
                  Revive only if: {failure.revive}
                </div>
                <button
                  type="button"
                  onClick={() => onAppendMemo(`Failure: ${failure.title} / reason=${failure.reason} / revive=${failure.revive}`)}
                  className="mt-3 rounded-lg border border-rose-300/40 px-3 py-2 text-xs font-black text-rose-100 hover:bg-rose-950"
                >
                  Log failure
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-slate-800 bg-slate-950/82 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-black text-white">Final 8 Promotion Gate</h2>
              <p className="mt-1 text-xs leading-5 text-slate-400">A candidate cannot become p001-p008 unless all eight fields are explicit.</p>
            </div>
            <button
              type="button"
              onClick={() => onAppendMemo('Batch gate: require signal, workaround, format, desire lens, love score, failure survival, output artifact, Stitch promise.')}
              className="rounded-lg bg-emerald-400 px-3 py-2 text-xs font-black text-slate-950 hover:bg-emerald-300"
            >
              Copy gate to memo
            </button>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {finalSlots.map((slot, index) => (
              <div key={slot} className="rounded-lg border border-slate-800 bg-slate-900/64 p-3">
                <div className="text-xs font-black text-emerald-300">Gate {index + 1}</div>
                <div className="mt-1 text-sm font-bold text-white">{slot}</div>
                <div className="mt-2 h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-emerald-400" style={{ width: `${64 + index * 4}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-cyan-400/20 bg-cyan-950/20 p-4">
            <div className="text-sm font-black text-white">Export Shape</div>
            <pre className="mt-3 max-h-[260px] overflow-y-auto rounded-lg bg-slate-950 p-3 text-xs leading-5 text-slate-300">
{`p001 - <title>
- signal:
- user action:
- workaround:
- mutation used:
- killed alternatives:
- loved_by_small_group:
- spread_trigger:
- output artifact:
- Stitch prompt promise:`}
            </pre>
          </div>
        </section>
      </div>
    </BrainroomShell>
  );
}

export default function ClusterForceMindMap({ items, fullscreen = false }: Props) {
  const groups = useMemo(() => buildTagGroups(items), [items]);
  const recentItems = useMemo(() => items.slice(0, 6), [items]);
  const [activeMode, setActiveMode] = useState<BrainroomMode>('map');
  const [memo, setMemo] = useState(
    '오늘 아이디어가 약하면 여기서 멈춘다.\n\n- raw signal:\n- user action:\n- money/status/relationship loss:\n- failed angle:\n- mutation to try:\n'
  );
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [collapsedTags, setCollapsedTags] = useState<Set<string>>(new Set());
  const [focusedTag, setFocusedTag] = useState<string | null>(groups[0]?.tag ?? null);
  const [panelOpen, setPanelOpen] = useState(true);
  const dragRef = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const nodeDragRef = useRef<{ nodeId: string; startX: number; startY: number; nodeX: number; nodeY: number } | null>(null);

  const { nodes, links, width, height } = useMemo(() => {
    const width = fullscreen ? 1380 : 1120;
    const height = fullscreen ? 980 : 820;
    const graph = buildGraph(groups, collapsedTags, focusedTag);

    const simNodes = graph.nodes.map((node) => ({ ...node }));
    const simLinks = graph.links.map((link) => ({ ...link }));

    const root = simNodes.find((n) => n.kind === 'root');
    if (root) {
      root.fx = width / 2;
      root.fy = height / 2;
      root.x = width / 2;
      root.y = height / 2;
    }

    const simulation = forceSimulation(simNodes as any)
      .force('charge', forceManyBody().strength((node: any) => (node.kind === 'idea' ? -220 : node.kind === 'tag' ? -680 : -960)))
      .force('center', forceCenter(width / 2, height / 2))
      .force(
        'link',
        forceLink(simLinks as any)
          .id((node: any) => node.id)
          .distance((link: any) => {
            const sourceKind = typeof link.source === 'object' ? link.source.kind : 'idea';
            return sourceKind === 'root' ? 260 : 170;
          })
          .strength((link: any) => link.strength ?? 0.5)
      )
      .force('collide', forceCollide().radius((node: any) => node.radius + (node.kind === 'idea' ? 64 : node.kind === 'tag' ? 40 : 52)).iterations(3));

    for (let i = 0; i < 340; i += 1) simulation.tick();
    simulation.stop();

    return { nodes: simNodes, links: simLinks, width, height };
  }, [groups, collapsedTags, focusedTag, fullscreen]);

  const hovered = hoveredNodeId ? nodes.find((n) => n.id === hoveredNodeId) : null;
  const selected = selectedNodeId ? nodes.find((n) => n.id === selectedNodeId) : null;
  const activeIdea = selected?.kind === 'idea' ? selected.item : hovered?.kind === 'idea' ? hovered.item : null;
  const summary = itemSummary(activeIdea);

  const toggleTagCollapse = (tag: string) => {
    setCollapsedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const openAll = () => setCollapsedTags(new Set());
  const closeAll = () => setCollapsedTags(new Set(groups.map((g) => g.tag)));
  const appendMemo = (line: string) => {
    setMemo((current) => `${current.trimEnd()}\n- ${line}\n`);
  };

  if (activeMode === 'brainstorm') {
    return (
      <BrainstormWorkbench
        activeMode={activeMode}
        onModeChange={setActiveMode}
        memo={memo}
        onMemoChange={setMemo}
        onAppendMemo={appendMemo}
        recentItems={recentItems}
      />
    );
  }

  if (activeMode === 'batch') {
    return <BatchBuilder activeMode={activeMode} onModeChange={setActiveMode} onAppendMemo={appendMemo} />;
  }

  return (
    <div className={fullscreen ? 'relative h-screen w-screen overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_42%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]' : 'space-y-4 p-4 sm:p-6'}>
      <div className="absolute left-0 top-0 z-30 flex h-full">
        <div className={`${panelOpen ? 'w-[320px]' : 'w-[56px]'} border-r border-slate-800 bg-slate-950/88 backdrop-blur-xl transition-all duration-200`}>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
              {panelOpen ? (
                <div>
                  <div className="text-xs font-black uppercase text-primary">PF Brainroom</div>
                  <div className="mt-1 text-sm font-bold text-white">Map mode</div>
                </div>
              ) : null}
              <button
                type="button"
                onClick={() => setPanelOpen((v) => !v)}
                className="rounded-lg border border-slate-700 px-2.5 py-2 text-xs font-black text-slate-200 hover:bg-slate-800"
              >
                {panelOpen ? '◀' : '▶'}
              </button>
            </div>
            {panelOpen ? (
              <div className="border-b border-slate-800 px-3 py-3">
                <ModeTabs activeMode={activeMode} onChange={setActiveMode} />
              </div>
            ) : null}

            {panelOpen ? (
              <>
                <div className="flex flex-wrap gap-2 border-b border-slate-800 px-3 py-3">
                  <button type="button" onClick={openAll} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800">Open all</button>
                  <button type="button" onClick={closeAll} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800">Close all</button>
                  {focusedTag ? (
                    <button type="button" onClick={() => setFocusedTag(null)} className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-black text-emerald-200">Clear focus</button>
                  ) : null}
                </div>

                <div className="flex-1 overflow-y-auto px-2 py-2">
                  {groups.map((group) => {
                    const collapsed = collapsedTags.has(group.tag);
                    const focused = focusedTag === group.tag;
                    return (
                      <div key={group.tag} className="mb-2 rounded-xl border border-slate-800 bg-slate-900/55">
                        <div className="flex items-center gap-2 px-3 py-2">
                          <button type="button" onClick={() => toggleTagCollapse(group.tag)} className="w-6 shrink-0 text-left text-xs font-black text-slate-300">
                            {collapsed ? '▶' : '▼'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setFocusedTag((prev) => (prev === group.tag ? null : group.tag))}
                            className={`min-w-0 flex-1 text-left text-sm font-bold ${focused ? 'text-emerald-300' : 'text-white'}`}
                          >
                            #{group.tag}
                          </button>
                          <div className="text-[11px] font-bold text-slate-400">{group.count}</div>
                        </div>
                        {!collapsed ? (
                          <div className="border-t border-slate-800 px-3 py-2">
                            <div className="space-y-2">
                              {group.items.map((item) => (
                                <button
                                  key={`${group.tag}-${item.id}`}
                                  type="button"
                                  onClick={() => setSelectedNodeId(`idea:${item.id}:${group.tag}`)}
                                  className="block w-full truncate rounded-lg px-2 py-1.5 text-left text-xs text-slate-300 hover:bg-slate-800 hover:text-white"
                                >
                                  {item.title}
                                </button>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center gap-3 px-2 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <span>Tree</span>
                <span>Nodes</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`absolute left-0 top-0 h-full ${panelOpen ? 'w-[320px]' : 'w-[56px]'}`} />

      <div className="absolute right-4 top-4 z-20 flex max-w-[920px] flex-wrap items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-3 backdrop-blur-xl">
        <div className="hidden lg:block">
          <ModeTabs activeMode={activeMode} onChange={setActiveMode} />
        </div>
        <button type="button" onClick={() => setZoom((z) => Math.max(0.55, Number((z - 0.15).toFixed(2))))} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800">-</button>
        <button type="button" onClick={() => setZoom((z) => Math.min(2.8, Number((z + 0.15).toFixed(2))))} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800">+</button>
        <button type="button" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} className="rounded-lg bg-primary px-3 py-2 text-xs font-black text-white hover:bg-primary/90">Reset</button>
        <div className="ml-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">Wheel zoom · drag canvas · drag nodes · click node for summary</div>
      </div>

      <div className="absolute bottom-4 right-4 z-20 w-[360px] rounded-2xl border border-slate-800 bg-slate-950/78 p-4 text-sm text-slate-200 shadow-sm backdrop-blur-xl">
        <div className="text-[11px] font-black uppercase tracking-[0.22em] text-emerald-300">Reality check</div>
        <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-300">
          {realityChecks.map((line) => (
            <li key={line} className="rounded-lg border border-slate-800 bg-slate-900/55 px-3 py-2">{line}</li>
          ))}
        </ul>
        <div className="mt-4 border-t border-slate-800 pt-4">
          <div className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Quick summary</div>
          {summary ? (
            <>
              <div className="mt-2 text-base font-black text-white">{summary.title}</div>
              <div className="mt-2 text-xs leading-6 text-slate-300">{summary.oneLiner}</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {summary.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 px-2 py-1 text-[10px] font-black text-cyan-300">#{tag}</span>
                ))}
              </div>
              <div className="mt-3 text-[11px] font-bold text-slate-400">{summary.createdAt}</div>
              <div className="mt-3 flex gap-2">
                {summary.demoUrl ? (
                  <Link href={summary.demoUrl} className="rounded-lg bg-primary px-3 py-2 text-xs font-black text-white hover:bg-primary/90 hover:no-underline">Open demo</Link>
                ) : null}
                <Link href={summary.detailUrl} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800 hover:no-underline">Detail</Link>
              </div>
            </>
          ) : (
            <div className="mt-2 text-xs leading-6 text-slate-400">아이디어 노드를 클릭하면 요약, 태그, 링크가 여기 보입니다.</div>
          )}
        </div>
      </div>

      {hovered ? (
        <div className="absolute bottom-4 left-[calc(var(--panel-offset,56px)+16px)] z-20 max-w-md rounded-2xl border border-slate-800 bg-slate-950/75 px-4 py-3 text-sm text-slate-200 shadow-sm backdrop-blur-xl" style={{ ['--panel-offset' as any]: panelOpen ? '320px' : '56px' }}>
          <span className="font-black">Hover:</span> {hovered.label}
          {hovered.kind === 'tag' ? ` · ${hovered.count} ideas` : ''}
          {hovered.kind === 'idea' ? ' · click for summary · drag node' : ''}
        </div>
      ) : null}

      <div
        className="h-screen overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ marginLeft: panelOpen ? 320 : 56, marginRight: 360 }}
        onWheel={(e) => {
          e.preventDefault();
          setZoom((prev) => {
            const next = prev + (e.deltaY > 0 ? -0.12 : 0.12);
            return Math.max(0.55, Math.min(2.8, Number(next.toFixed(2))));
          });
        }}
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest('[data-node="true"]')) return;
          dragRef.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
        }}
        onPointerMove={(e) => {
          if (nodeDragRef.current) {
            const found = nodes.find((n) => n.id === nodeDragRef.current?.nodeId);
            if (found) {
              const dx = (e.clientX - nodeDragRef.current.startX) / zoom;
              const dy = (e.clientY - nodeDragRef.current.startY) / zoom;
              found.x = nodeDragRef.current.nodeX + dx;
              found.y = nodeDragRef.current.nodeY + dy;
            }
            return;
          }
          if (!dragRef.current) return;
          const dx = e.clientX - dragRef.current.x;
          const dy = e.clientY - dragRef.current.y;
          setPan({ x: dragRef.current.panX + dx, y: dragRef.current.panY + dy });
        }}
        onPointerUp={() => {
          dragRef.current = null;
          nodeDragRef.current = null;
        }}
        onPointerLeave={() => {
          dragRef.current = null;
          nodeDragRef.current = null;
        }}
      >
        <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
          <g transform={`translate(${pan.x} ${pan.y}) scale(${zoom})`}>
            {links.map((link, idx) => {
              const source = typeof link.source === 'object' ? link.source : nodes.find((n) => n.id === link.source);
              const target = typeof link.target === 'object' ? link.target : nodes.find((n) => n.id === link.target);
              if (!source || !target) return null;
              const active = hoveredNodeId && (source.id === hoveredNodeId || target.id === hoveredNodeId || source.id === selectedNodeId || target.id === selectedNodeId);
              return (
                <line
                  key={`link-${idx}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke={active ? 'rgba(34,197,94,0.7)' : source.kind === 'root' ? 'rgba(59,130,246,0.42)' : 'rgba(148,163,184,0.28)'}
                  strokeWidth={active ? 3.2 : source.kind === 'root' ? 2.8 : 1.5}
                />
              );
            })}

            {nodes.map((node) => {
              const active = hoveredNodeId === node.id || selectedNodeId === node.id;

              if (node.kind === 'idea') {
                return (
                  <g
                    key={node.id}
                    data-node="true"
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedNodeId(node.id)}
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      nodeDragRef.current = { nodeId: node.id, startX: e.clientX, startY: e.clientY, nodeX: node.x || 0, nodeY: node.y || 0 };
                    }}
                  >
                    <circle cx={node.x} cy={node.y} r={active ? node.radius + 2 : node.radius} fill={active ? 'rgba(30,41,59,1)' : 'rgba(15,23,42,0.96)'} stroke={active ? 'rgba(34,197,94,0.86)' : 'rgba(148,163,184,0.55)'} strokeWidth={active ? 3 : 2} />
                    <text x={(node.x || 0) + 30} y={(node.y || 0) + 5} className={`font-semibold ${active ? 'fill-white text-[16px]' : 'fill-slate-200 text-[14px]'}`}>
                      {active ? node.label : node.shortLabel}
                    </text>
                  </g>
                );
              }

              if (node.kind === 'tag') {
                const raw = node.label.replace(/^#/, '');
                const collapsed = collapsedTags.has(raw);
                const focused = focusedTag === raw;
                return (
                  <g
                    key={node.id}
                    data-node="true"
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => {
                      setSelectedNodeId(node.id);
                      toggleTagCollapse(raw);
                    }}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setFocusedTag((prev) => (prev === raw ? null : raw));
                    }}
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      nodeDragRef.current = { nodeId: node.id, startX: e.clientX, startY: e.clientY, nodeX: node.x || 0, nodeY: node.y || 0 };
                    }}
                  >
                    <circle cx={node.x} cy={node.y} r={active ? node.radius + 6 : node.radius} fill={focused ? 'rgba(16,185,129,0.22)' : active ? 'rgba(59,130,246,0.28)' : 'rgba(59,130,246,0.16)'} stroke={focused ? 'rgba(16,185,129,0.9)' : active ? 'rgba(34,197,94,0.85)' : 'rgba(59,130,246,0.78)'} strokeWidth={active || focused ? 4 : 3} />
                    <text x={node.x} y={(node.y || 0) - 4} textAnchor="middle" className="fill-white text-[20px] font-bold">
                      {collapsed ? `▶ ${node.label}` : `▼ ${node.label}`}
                    </text>
                    <text x={node.x} y={(node.y || 0) + 20} textAnchor="middle" className="fill-slate-300 text-[12px] font-bold">
                      {node.count} ideas
                    </text>
                  </g>
                );
              }

              return (
                <g key={node.id} data-node="true" onMouseEnter={() => setHoveredNodeId(node.id)} onMouseLeave={() => setHoveredNodeId(null)}>
                  <circle cx={node.x} cy={node.y} r={node.radius + 34} fill="rgba(14,165,233,0.14)" stroke={active ? 'rgba(34,197,94,0.8)' : 'rgba(14,165,233,0.42)'} strokeWidth="2.5" />
                  <circle cx={node.x} cy={node.y} r={node.radius} fill="rgba(15,23,42,0.98)" stroke="rgba(125,211,252,0.35)" strokeWidth="2" />
                  <text x={node.x} y={(node.y || 0) - 6} textAnchor="middle" className="fill-white text-[30px] font-bold">
                    {node.label}
                  </text>
                  <text x={node.x} y={(node.y || 0) + 20} textAnchor="middle" className="fill-slate-300 text-[13px] font-medium">
                    focused idea map
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
