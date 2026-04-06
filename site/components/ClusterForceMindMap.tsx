'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force';
import type { PrototypeIndexItem } from '@/lib/index';

type Props = {
  items: PrototypeIndexItem[];
};

type GraphNode = {
  id: string;
  label: string;
  kind: 'root' | 'tag' | 'idea';
  count?: number;
  href?: string;
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

function buildGraph(items: PrototypeIndexItem[]) {
  const root: GraphNode = {
    id: 'root',
    label: 'PF Brain',
    kind: 'root',
    radius: 44,
  };

  const tagMap = new Map<string, { count: number; items: PrototypeIndexItem[] }>();
  for (const item of items) {
    for (const tag of item.tags || []) {
      const current = tagMap.get(tag) || { count: 0, items: [] };
      current.count += 1;
      if (current.items.length < 4) current.items.push(item);
      tagMap.set(tag, current);
    }
  }

  const topTags = [...tagMap.entries()]
    .sort((a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0]))
    .slice(0, 10);

  const nodes: GraphNode[] = [root];
  const links: GraphLink[] = [];

  for (const [tag, value] of topTags) {
    const tagNode: GraphNode = {
      id: `tag:${tag}`,
      label: `#${tag}`,
      kind: 'tag',
      count: value.count,
      radius: Math.max(28, Math.min(46, 22 + value.count * 2.2)),
    };
    nodes.push(tagNode);
    links.push({ source: root.id, target: tagNode.id, strength: 0.9 });

    value.items.forEach((item) => {
      const ideaId = `idea:${item.id}:${tag}`;
      nodes.push({
        id: ideaId,
        label: item.title,
        kind: 'idea',
        href: `/p/${item.id}`,
        radius: 14,
      });
      links.push({ source: tagNode.id, target: ideaId, strength: 0.55 });
    });
  }

  return { nodes, links };
}

export default function ClusterForceMindMap({ items }: Props) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const { nodes, links, width, height } = useMemo(() => {
    const width = 1200;
    const height = 820;
    const graph = buildGraph(items);

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
      .force('charge', forceManyBody().strength((node: any) => (node.kind === 'idea' ? -90 : -260)))
      .force('center', forceCenter(width / 2, height / 2))
      .force(
        'link',
        forceLink(simLinks as any)
          .id((node: any) => node.id)
          .distance((link: any) => {
            const sourceKind = typeof link.source === 'object' ? link.source.kind : 'idea';
            return sourceKind === 'root' ? 190 : 88;
          })
          .strength((link: any) => link.strength ?? 0.5)
      )
      .force('collide', forceCollide().radius((node: any) => node.radius + (node.kind === 'idea' ? 30 : 18)).iterations(2));

    for (let i = 0; i < 220; i += 1) simulation.tick();
    simulation.stop();

    return { nodes: simNodes, links: simLinks, width, height };
  }, [items]);

  const hovered = hoveredNodeId ? nodes.find((n) => n.id === hoveredNodeId) : null;

  return (
    <div className="space-y-4 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Controls: zoom / pan / hover / click ideas
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.65, Number((z - 0.15).toFixed(2))))}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Zoom -
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(2.2, Number((z + 0.15).toFixed(2))))}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Zoom +
          </button>
          <button
            type="button"
            onClick={() => setPan((p) => ({ ...p, x: p.x - 60 }))}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setPan((p) => ({ ...p, x: p.x + 60 }))}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            →
          </button>
          <button
            type="button"
            onClick={() => setPan((p) => ({ ...p, y: p.y - 60 }))}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ↑
          </button>
          <button
            type="button"
            onClick={() => setPan((p) => ({ ...p, y: p.y + 60 }))}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ↓
          </button>
          <button
            type="button"
            onClick={() => {
              setZoom(1);
              setPan({ x: 0, y: 0 });
            }}
            className="rounded-lg bg-primary px-3 py-2 text-xs font-black text-white hover:bg-primary/90"
          >
            Reset
          </button>
        </div>
      </div>

      {hovered ? (
        <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200">
          <span className="font-black">Hover:</span> {hovered.label}
          {hovered.kind === 'tag' ? ` · ${hovered.count} ideas` : ''}
          {hovered.kind === 'idea' ? ' · click to open detail' : ''}
        </div>
      ) : null}

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-auto min-w-[1100px] w-full">
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
                  <g key={node.id} onMouseEnter={() => setHoveredNodeId(node.id)} onMouseLeave={() => setHoveredNodeId(null)}>
                    <Link href={node.href || '/'}>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={active ? node.radius + 2 : node.radius}
                        fill={active ? 'rgba(30,41,59,1)' : 'rgba(15,23,42,0.92)'}
                        stroke={active ? 'rgba(34,197,94,0.8)' : 'rgba(148,163,184,0.5)'}
                        strokeWidth={active ? 3 : 2}
                      />
                    </Link>
                    <text x={(node.x || 0) + 22} y={(node.y || 0) + 4} className="fill-slate-700 dark:fill-slate-200 text-[12px] font-medium">
                      {node.label.length > 34 ? `${node.label.slice(0, 34)}…` : node.label}
                    </text>
                  </g>
                );
              }

              if (node.kind === 'tag') {
                return (
                  <g key={node.id} onMouseEnter={() => setHoveredNodeId(node.id)} onMouseLeave={() => setHoveredNodeId(null)}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={active ? node.radius + 3 : node.radius}
                      fill={active ? 'rgba(59,130,246,0.26)' : 'rgba(59,130,246,0.16)'}
                      stroke={active ? 'rgba(34,197,94,0.85)' : 'rgba(59,130,246,0.74)'}
                      strokeWidth={active ? 4 : 3}
                    />
                    <text x={node.x} y={(node.y || 0) - 2} textAnchor="middle" className="fill-slate-900 dark:fill-white text-[16px] font-bold">
                      {node.label}
                    </text>
                    <text x={node.x} y={(node.y || 0) + 18} textAnchor="middle" className="fill-slate-500 dark:fill-slate-300 text-[11px] font-bold">
                      {node.count} ideas
                    </text>
                  </g>
                );
              }

              return (
                <g key={node.id} onMouseEnter={() => setHoveredNodeId(node.id)} onMouseLeave={() => setHoveredNodeId(null)}>
                  <circle cx={node.x} cy={node.y} r={node.radius + 18} fill="rgba(14,165,233,0.14)" stroke={active ? 'rgba(34,197,94,0.8)' : 'rgba(14,165,233,0.45)'} strokeWidth="2.5" />
                  <circle cx={node.x} cy={node.y} r={node.radius} fill="rgba(15,23,42,0.95)" stroke="rgba(125,211,252,0.35)" strokeWidth="2" />
                  <text x={node.x} y={(node.y || 0) - 4} textAnchor="middle" className="fill-white text-[22px] font-bold">
                    {node.label}
                  </text>
                  <text x={node.x} y={(node.y || 0) + 18} textAnchor="middle" className="fill-slate-300 text-[12px] font-medium">
                    force-directed cluster map
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
