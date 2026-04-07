'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force';
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

export default function ClusterForceMindMap({ items, fullscreen = false }: Props) {
  const groups = useMemo(() => buildTagGroups(items), [items]);
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

  return (
    <div className={fullscreen ? 'relative h-screen w-screen overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_42%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]' : 'space-y-4 p-4 sm:p-6'}>
      <div className="absolute left-0 top-0 z-30 flex h-full">
        <div className={`${panelOpen ? 'w-[320px]' : 'w-[56px]'} border-r border-slate-800 bg-slate-950/88 backdrop-blur-xl transition-all duration-200`}>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
              {panelOpen ? (
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-primary">Node Panel</div>
                  <div className="mt-1 text-sm font-bold text-white">Folder tree</div>
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

      <div className="absolute right-4 top-4 z-20 flex max-w-[760px] flex-wrap items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-3 backdrop-blur-xl">
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
