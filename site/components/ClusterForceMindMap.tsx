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
  kind: 'root' | 'tag' | 'idea';
  count?: number;
  href?: string;
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
      if (current.items.length < 8) current.items.push(item);
      tagMap.set(tag, current);
    }
  }

  return [...tagMap.values()]
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
    .slice(0, 14);
}

function buildGraph(groups: TagGroup[], collapsedTags: Set<string>, focusedTag: string | null) {
  const root: GraphNode = {
    id: 'root',
    label: focusedTag ? `#${focusedTag}` : 'PF Brain',
    kind: 'root',
    radius: focusedTag ? 58 : 52,
  };

  const visibleGroups = focusedTag ? groups.filter((g) => g.tag === focusedTag) : groups;
  const nodes: GraphNode[] = [root];
  const links: GraphLink[] = [];

  for (const group of visibleGroups) {
    const tagNode: GraphNode = {
      id: `tag:${group.tag}`,
      label: `#${group.tag}`,
      kind: 'tag',
      count: group.count,
      radius: Math.max(34, Math.min(60, 26 + group.count * 2.6)),
    };
    nodes.push(tagNode);
    links.push({ source: root.id, target: tagNode.id, strength: 0.95 });

    if (!collapsedTags.has(group.tag)) {
      group.items.forEach((item) => {
        const ideaId = `idea:${item.id}:${group.tag}`;
        nodes.push({
          id: ideaId,
          label: item.title,
          kind: 'idea',
          href: `/p/${item.id}`,
          parentTag: group.tag,
          radius: 16,
        });
        links.push({ source: tagNode.id, target: ideaId, strength: 0.58 });
      });
    }
  }

  return { nodes, links };
}

export default function ClusterForceMindMap({ items, fullscreen = false }: Props) {
  const groups = useMemo(() => buildTagGroups(items), [items]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [collapsedTags, setCollapsedTags] = useState<Set<string>>(new Set());
  const [focusedTag, setFocusedTag] = useState<string | null>(groups[0]?.tag ?? null);
  const [panelOpen, setPanelOpen] = useState(true);
  const dragRef = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const nodeDragRef = useRef<{ nodeId: string; startX: number; startY: number; nodeX: number; nodeY: number } | null>(null);

  const { nodes, links, width, height } = useMemo(() => {
    const width = fullscreen ? 1320 : 1100;
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
      .force('charge', forceManyBody().strength((node: any) => (node.kind === 'idea' ? -130 : -360)))
      .force('center', forceCenter(width / 2, height / 2))
      .force(
        'link',
        forceLink(simLinks as any)
          .id((node: any) => node.id)
          .distance((link: any) => {
            const sourceKind = typeof link.source === 'object' ? link.source.kind : 'idea';
            return sourceKind === 'root' ? 220 : 116;
          })
          .strength((link: any) => link.strength ?? 0.5)
      )
      .force('collide', forceCollide().radius((node: any) => node.radius + (node.kind === 'idea' ? 44 : 28)).iterations(2));

    for (let i = 0; i < 280; i += 1) simulation.tick();
    simulation.stop();

    return { nodes: simNodes, links: simLinks, width, height };
  }, [groups, collapsedTags, focusedTag, fullscreen]);

  const hovered = hoveredNodeId ? nodes.find((n) => n.id === hoveredNodeId) : null;

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
                                <Link
                                  key={`${group.tag}-${item.id}`}
                                  href={`/p/${item.id}`}
                                  className="block truncate rounded-lg px-2 py-1.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-white hover:no-underline"
                                >
                                  {item.title}
                                </Link>
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

      <div className={`absolute right-4 top-4 z-20 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-3 backdrop-blur-xl`}>
        <button type="button" onClick={() => setZoom((z) => Math.max(0.55, Number((z - 0.15).toFixed(2))))} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800">-</button>
        <button type="button" onClick={() => setZoom((z) => Math.min(2.8, Number((z + 0.15).toFixed(2))))} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800">+</button>
        <button type="button" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} className="rounded-lg bg-primary px-3 py-2 text-xs font-black text-white hover:bg-primary/90">Reset</button>
        <div className="ml-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">Wheel zoom · drag canvas · drag nodes</div>
      </div>

      {hovered ? (
        <div className="absolute bottom-4 left-[calc(var(--panel-offset,56px)+16px)] z-20 max-w-md rounded-2xl border border-slate-800 bg-slate-950/75 px-4 py-3 text-sm text-slate-200 shadow-sm backdrop-blur-xl" style={{ ['--panel-offset' as any]: panelOpen ? '320px' : '56px' }}>
          <span className="font-black">Hover:</span> {hovered.label}
          {hovered.kind === 'tag' ? ` · ${hovered.count} ideas` : ''}
          {hovered.kind === 'idea' ? ' · click open detail · drag move node' : ''}
        </div>
      ) : null}

      <div
        className="h-screen overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ marginLeft: panelOpen ? 320 : 56 }}
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
              const active = hoveredNodeId && (source.id === hoveredNodeId || target.id === hoveredNodeId);
              return (
                <line
                  key={`link-${idx}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke={active ? 'rgba(34,197,94,0.7)' : source.kind === 'root' ? 'rgba(59,130,246,0.42)' : 'rgba(148,163,184,0.35)'}
                  strokeWidth={active ? 3.2 : source.kind === 'root' ? 2.8 : 1.8}
                />
              );
            })}

            {nodes.map((node) => {
              const active = hoveredNodeId === node.id;

              if (node.kind === 'idea') {
                return (
                  <g
                    key={node.id}
                    data-node="true"
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      nodeDragRef.current = { nodeId: node.id, startX: e.clientX, startY: e.clientY, nodeX: node.x || 0, nodeY: node.y || 0 };
                    }}
                  >
                    <Link href={node.href || '/'}>
                      <circle cx={node.x} cy={node.y} r={active ? node.radius + 2 : node.radius} fill={active ? 'rgba(30,41,59,1)' : 'rgba(15,23,42,0.92)'} stroke={active ? 'rgba(34,197,94,0.8)' : 'rgba(148,163,184,0.5)'} strokeWidth={active ? 3 : 2} />
                    </Link>
                    <text x={(node.x || 0) + 26} y={(node.y || 0) + 5} className="fill-slate-100 text-[15px] font-semibold">
                      {node.label.length > 42 ? `${node.label.slice(0, 42)}…` : node.label}
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
                    onClick={() => toggleTagCollapse(raw)}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setFocusedTag((prev) => (prev === raw ? null : raw));
                    }}
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      nodeDragRef.current = { nodeId: node.id, startX: e.clientX, startY: e.clientY, nodeX: node.x || 0, nodeY: node.y || 0 };
                    }}
                  >
                    <circle cx={node.x} cy={node.y} r={active ? node.radius + 4 : node.radius} fill={focused ? 'rgba(16,185,129,0.22)' : active ? 'rgba(59,130,246,0.28)' : 'rgba(59,130,246,0.18)'} stroke={focused ? 'rgba(16,185,129,0.9)' : active ? 'rgba(34,197,94,0.85)' : 'rgba(59,130,246,0.78)'} strokeWidth={active || focused ? 4 : 3} />
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
                  <circle cx={node.x} cy={node.y} r={node.radius + 28} fill="rgba(14,165,233,0.16)" stroke={active ? 'rgba(34,197,94,0.8)' : 'rgba(14,165,233,0.45)'} strokeWidth="2.5" />
                  <circle cx={node.x} cy={node.y} r={node.radius} fill="rgba(15,23,42,0.98)" stroke="rgba(125,211,252,0.35)" strokeWidth="2" />
                  <text x={node.x} y={(node.y || 0) - 6} textAnchor="middle" className="fill-white text-[28px] font-bold">
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
