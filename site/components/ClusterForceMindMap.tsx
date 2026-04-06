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

function buildGraph(items: PrototypeIndexItem[], collapsedTags: Set<string>, focusedTag: string | null) {
  const root: GraphNode = {
    id: 'root',
    label: 'PF Brain',
    kind: 'root',
    radius: 52,
  };

  const tagMap = new Map<string, { count: number; items: PrototypeIndexItem[] }>();
  for (const item of items) {
    for (const tag of item.tags || []) {
      if (focusedTag && tag !== focusedTag) continue;
      const current = tagMap.get(tag) || { count: 0, items: [] };
      current.count += 1;
      if (current.items.length < 6) current.items.push(item);
      tagMap.set(tag, current);
    }
  }

  const topTags = [...tagMap.entries()]
    .sort((a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0]))
    .slice(0, focusedTag ? 1 : 12);

  const nodes: GraphNode[] = [root];
  const links: GraphLink[] = [];

  for (const [tag, value] of topTags) {
    const tagNode: GraphNode = {
      id: `tag:${tag}`,
      label: `#${tag}`,
      kind: 'tag',
      count: value.count,
      radius: Math.max(32, Math.min(56, 24 + value.count * 2.5)),
    };
    nodes.push(tagNode);
    links.push({ source: root.id, target: tagNode.id, strength: 0.95 });

    if (!collapsedTags.has(tag)) {
      value.items.forEach((item) => {
        const ideaId = `idea:${item.id}:${tag}`;
        nodes.push({
          id: ideaId,
          label: item.title,
          kind: 'idea',
          href: `/p/${item.id}`,
          parentTag: tag,
          radius: 16,
        });
        links.push({ source: tagNode.id, target: ideaId, strength: 0.58 });
      });
    }
  }

  return { nodes, links, topTags: topTags.map(([tag]) => tag) };
}

export default function ClusterForceMindMap({ items, fullscreen = false }: Props) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [collapsedTags, setCollapsedTags] = useState<Set<string>>(new Set());
  const [focusedTag, setFocusedTag] = useState<string | null>(null);
  const dragRef = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const nodeDragRef = useRef<{ nodeId: string; startX: number; startY: number; nodeX: number; nodeY: number } | null>(null);

  const { nodes, links, width, height, tags } = useMemo(() => {
    const width = fullscreen ? 1700 : 1200;
    const height = fullscreen ? 980 : 820;
    const graph = buildGraph(items, collapsedTags, focusedTag);

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
      .force('charge', forceManyBody().strength((node: any) => (node.kind === 'idea' ? -110 : -320)))
      .force('center', forceCenter(width / 2, height / 2))
      .force(
        'link',
        forceLink(simLinks as any)
          .id((node: any) => node.id)
          .distance((link: any) => {
            const sourceKind = typeof link.source === 'object' ? link.source.kind : 'idea';
            return sourceKind === 'root' ? (fullscreen ? 245 : 190) : (fullscreen ? 118 : 88);
          })
          .strength((link: any) => link.strength ?? 0.5)
      )
      .force('collide', forceCollide().radius((node: any) => node.radius + (node.kind === 'idea' ? 38 : 24)).iterations(2));

    for (let i = 0; i < 260; i += 1) simulation.tick();
    simulation.stop();

    return { nodes: simNodes, links: simLinks, width, height, tags: graph.topTags };
  }, [items, fullscreen, collapsedTags, focusedTag]);

  const hovered = hoveredNodeId ? nodes.find((n) => n.id === hoveredNodeId) : null;

  const toggleTag = (tagLabel: string) => {
    const raw = tagLabel.replace(/^#/, '');
    setCollapsedTags((prev) => {
      const next = new Set(prev);
      if (next.has(raw)) next.delete(raw);
      else next.add(raw);
      return next;
    });
  };

  const minimapScale = 0.12;

  return (
    <div
      className={fullscreen ? 'relative h-screen w-screen overflow-hidden' : 'space-y-4 p-4 sm:p-6'}
      onWheel={(e) => {
        e.preventDefault();
        setZoom((prev) => {
          const next = prev + (e.deltaY > 0 ? -0.12 : 0.12);
          return Math.max(0.55, Math.min(2.8, Number(next.toFixed(2))));
        });
      }}
    >
      <div className={fullscreen ? 'absolute left-4 top-4 z-20 flex max-w-[80vw] flex-wrap items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-3 backdrop-blur-xl' : 'flex flex-wrap items-center justify-between gap-3'}>
        <Link href="/" className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800 hover:no-underline">
          Gallery
        </Link>
        <button type="button" onClick={() => setZoom((z) => Math.max(0.55, Number((z - 0.15).toFixed(2))))} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800">-</button>
        <button type="button" onClick={() => setZoom((z) => Math.min(2.8, Number((z + 0.15).toFixed(2))))} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800">+</button>
        <button type="button" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); setFocusedTag(null); }} className="rounded-lg bg-primary px-3 py-2 text-xs font-black text-white hover:bg-primary/90">Reset</button>
        <div className="ml-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">Wheel zoom · drag canvas · drag nodes · click tag collapse</div>
      </div>

      <div className={fullscreen ? 'absolute right-4 top-4 z-20 flex max-w-[40rem] flex-wrap gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-3 backdrop-blur-xl' : 'flex flex-wrap gap-2'}>
        {focusedTag ? (
          <button
            type="button"
            onClick={() => setFocusedTag(null)}
            className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-black text-emerald-200"
          >
            Focus: #{focusedTag} × clear
          </button>
        ) : null}
        {tags.map((tag) => {
          const collapsed = collapsedTags.has(tag);
          const focused = focusedTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(`#${tag}`)}
              onContextMenu={(e) => {
                e.preventDefault();
                setFocusedTag((prev) => (prev === tag ? null : tag));
              }}
              className={`rounded-lg border px-3 py-2 text-xs font-black transition ${focused ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200' : collapsed ? 'border-amber-500/40 bg-amber-500/10 text-amber-200' : 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800'}`}
            >
              {collapsed ? '▶' : '▼'} #{tag}
            </button>
          );
        })}
      </div>

      {hovered ? (
        <div className={fullscreen ? 'absolute bottom-4 left-4 z-20 max-w-md rounded-2xl border border-slate-800 bg-slate-950/75 px-4 py-3 text-sm text-slate-200 shadow-sm backdrop-blur-xl' : 'rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200'}>
          <span className="font-black">Hover:</span> {hovered.label}
          {hovered.kind === 'tag' ? ` · ${hovered.count} ideas · click collapse · right click focus` : ''}
          {hovered.kind === 'idea' ? ' · click open detail · drag move node' : ''}
        </div>
      ) : null}

      <div className="absolute bottom-4 right-4 z-20 rounded-2xl border border-slate-800 bg-slate-950/75 p-3 backdrop-blur-xl">
        <div className="mb-2 text-[10px] font-black uppercase tracking-wider text-slate-400">Mini map</div>
        <svg width={width * minimapScale} height={height * minimapScale} className="overflow-hidden rounded-lg bg-slate-900/70">
          <g transform={`scale(${minimapScale})`}>
            {links.map((link, idx) => {
              const source = typeof link.source === 'object' ? link.source : nodes.find((n) => n.id === link.source);
              const target = typeof link.target === 'object' ? link.target : nodes.find((n) => n.id === link.target);
              if (!source || !target) return null;
              return <line key={`mini-link-${idx}`} x1={source.x} y1={source.y} x2={target.x} y2={target.y} stroke="rgba(148,163,184,0.25)" strokeWidth="2" />;
            })}
            {nodes.map((node) => (
              <circle
                key={`mini-${node.id}`}
                cx={node.x}
                cy={node.y}
                r={Math.max(6, node.radius * 0.35)}
                fill={node.kind === 'root' ? 'rgba(14,165,233,0.9)' : node.kind === 'tag' ? 'rgba(59,130,246,0.85)' : 'rgba(226,232,240,0.85)'}
              />
            ))}
            <rect
              x={(-pan.x / zoom)}
              y={(-pan.y / zoom)}
              width={width / zoom}
              height={height / zoom}
              fill="none"
              stroke="rgba(34,197,94,0.9)"
              strokeWidth="8"
            />
          </g>
        </svg>
      </div>

      <div
        className={fullscreen ? 'h-screen w-screen overflow-hidden cursor-grab active:cursor-grabbing' : 'overflow-x-auto'}
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
        <svg viewBox={`0 0 ${width} ${height}`} className={fullscreen ? 'h-full w-full' : 'h-auto min-w-[1100px] w-full'}>
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
                    <text x={(node.x || 0) + 24} y={(node.y || 0) + 4} className="fill-slate-200 text-[13px] font-medium">
                      {node.label.length > 36 ? `${node.label.slice(0, 36)}…` : node.label}
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
                    onClick={() => toggleTag(node.label)}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setFocusedTag((prev) => (prev === raw ? null : raw));
                    }}
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      nodeDragRef.current = { nodeId: node.id, startX: e.clientX, startY: e.clientY, nodeX: node.x || 0, nodeY: node.y || 0 };
                    }}
                  >
                    <circle cx={node.x} cy={node.y} r={active ? node.radius + 3 : node.radius} fill={focused ? 'rgba(16,185,129,0.22)' : active ? 'rgba(59,130,246,0.28)' : 'rgba(59,130,246,0.18)'} stroke={focused ? 'rgba(16,185,129,0.9)' : active ? 'rgba(34,197,94,0.85)' : 'rgba(59,130,246,0.78)'} strokeWidth={active || focused ? 4 : 3} />
                    <text x={node.x} y={(node.y || 0) - 2} textAnchor="middle" className="fill-white text-[17px] font-bold">
                      {collapsed ? `▶ ${node.label}` : `▼ ${node.label}`}
                    </text>
                    <text x={node.x} y={(node.y || 0) + 18} textAnchor="middle" className="fill-slate-300 text-[11px] font-bold">
                      {node.count} ideas
                    </text>
                  </g>
                );
              }

              return (
                <g key={node.id} data-node="true" onMouseEnter={() => setHoveredNodeId(node.id)} onMouseLeave={() => setHoveredNodeId(null)}>
                  <circle cx={node.x} cy={node.y} r={node.radius + 26} fill="rgba(14,165,233,0.16)" stroke={active ? 'rgba(34,197,94,0.8)' : 'rgba(14,165,233,0.45)'} strokeWidth="2.5" />
                  <circle cx={node.x} cy={node.y} r={node.radius} fill="rgba(15,23,42,0.98)" stroke="rgba(125,211,252,0.35)" strokeWidth="2" />
                  <text x={node.x} y={(node.y || 0) - 4} textAnchor="middle" className="fill-white text-[26px] font-bold">
                    {node.label}
                  </text>
                  <text x={node.x} y={(node.y || 0) + 20} textAnchor="middle" className="fill-slate-300 text-[12px] font-medium">
                    fullscreen idea map
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
